import os
import csv
from django.core.management.base import BaseCommand
from ...models import (
    Klasa, Nauczyciel, Rodzic, Uczen,
    WynikiKwestionariuszy, WynikiGier,
    ShapesDataset, EmotionsDataset,
)
from django.db import transaction

MODEL_MAP = {
    'klasa': Klasa,
    'nauczyciel': Nauczyciel,
    'rodzic': Rodzic,
    'uczen': Uczen,
    'wyniki_kwestionariuszy': WynikiKwestionariuszy,
    'wyniki_gier': WynikiGier,
    'shapes_dataset' : ShapesDataset,
    'emotions_dataset' : EmotionsDataset,
}

class Command(BaseCommand):
    help = 'Bulk import CSVs into corresponding models'

    def handle(self, *args, **kwargs):
        base_dir = 'csvki'  # Adjust if needed

        for name, model in MODEL_MAP.items():
            path = os.path.join(base_dir, f"{name}.csv")
            if not os.path.exists(path):
                self.stdout.write(self.style.WARNING(f"⚠️ Skipping: {name} (file not found)"))
                continue

            self.stdout.write(f"📥 Importing {name}...")
            with open(path, newline='', encoding='utf-8-sig') as csvfile:
                reader = csv.DictReader(csvfile)
                with transaction.atomic():
                    for row in reader:
                        # Clean empty strings into None
                        row = {k: (v if v != '' else None) for k, v in row.items()}

                        m2m_data = {}
                        # Handle foreign keys and extract many-to-manys separately
                        for field in model._meta.get_fields():
                            if field.name not in row or row[field.name] is None:
                                continue

                            if field.many_to_many:
                                # e.g., "3C, 1C" => ['3C', '1C']
                                m2m_data[field.name] = [v.strip() for v in row.pop(field.name).split(",")]
                            elif field.is_relation and field.many_to_one:
                                rel_model = field.related_model
                                try:
                                    row[field.name] = rel_model.objects.get(pk=row[field.name])
                                except rel_model.DoesNotExist:
                                    row[field.name] = None

                        try:
                            instance = model.objects.create(**row)
                            for field_name, values in m2m_data.items():
                                rel_model = model._meta.get_field(field_name).related_model
                                related_objects = rel_model.objects.filter(nazwa__in=values)
                                getattr(instance, field_name).set(related_objects)
                        except Exception as e:
                            self.stdout.write(self.style.ERROR(f"❌ Error on {name}: {e}"))
                            continue

            self.stdout.write(self.style.SUCCESS(f"✅ {name} imported."))

