import csv

input_file = 'uczen.csv'  # zamień na nazwę swojego pliku
output_file = 'uczen_int.csv'

with open(input_file, newline='', encoding='utf-8-sig') as infile, \
     open(output_file, 'w', newline='', encoding='utf-8-sig') as outfile:

    reader = csv.DictReader(infile)
    fieldnames = reader.fieldnames
    writer = csv.DictWriter(outfile, fieldnames=fieldnames)
    writer.writeheader()

    for row in reader:
        print(row)
        print(row.keys())
        # Konwersja id_rodzica do int, usuwając ".0"
        if row['wiek']:
            row['wiek'] = str(int(float(row['wiek'])))
        writer.writerow(row)
