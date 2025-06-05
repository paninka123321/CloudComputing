from django.db import models

class DimClass(models.Model):
    teacher_id = models.AutoField(primary_key=True)
    class_name = models.CharField(max_length=10)

    class Meta:
        db_table = 'dim_class'


class DimTeacher(models.Model):
    teacher_id = models.AutoField(primary_key=True)
    email = models.EmailField(unique=True)  #zeby moc mapowac nauczyciela do ucznia
    name = models.CharField(max_length=50)
    surname = models.CharField(max_length=50)
    education = models.CharField(max_length=100)
    subject = models.CharField(max_length=50)
    age = models.IntegerField()
    sex = models.CharField(max_length=10)
    class_name = models.CharField(max_length=10)
    school_name = models.CharField(max_length=100)
    class Meta:
        db_table = 'dim_teacher'


class DimParent(models.Model):
    parent_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    surname = models.CharField(max_length=50)
    age = models.IntegerField()
    work = models.CharField(max_length=50)
    phone = models.CharField(max_length=15)
    email = models.CharField(max_length=100)

    class Meta:
        db_table = 'dim_parent'


class DimStudent(models.Model):
    student_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    surname = models.CharField(max_length=50)
    class_name = models.CharField(max_length=10)
    age = models.IntegerField()
    parent = models.ForeignKey(DimParent, on_delete=models.CASCADE, null=True, blank=True)
    description = models.TextField(blank=True, null=True)
    avg_behaviour = models.DecimalField(max_digits=3, decimal_places=2, blank=True, null=True)
    avg_marks = models.DecimalField(max_digits=3, decimal_places=2, blank=True, null=True)

    class Meta:
        db_table = 'dim_student'


class FactWritingDataset(models.Model):
    game_id = models.AutoField(primary_key=True)
    student_id = models.ForeignKey(DimStudent, on_delete=models.CASCADE, db_column='student_id')
    png_file = models.TextField(blank=True, null=True)
    time = models.DecimalField(max_digits=5, decimal_places=2)

    class Meta:
        db_table = 'fact_writing_dataset'


class FactShapesDataset(models.Model):
    game_id = models.AutoField(primary_key=True)
    student_id = models.ForeignKey(DimStudent, on_delete=models.CASCADE, db_column='student_id')
    correct = models.IntegerField(blank=True, null=True)
    incorrect = models.IntegerField(blank=True, null=True)
    time = models.DecimalField(max_digits=5, decimal_places=2)

    class Meta:
        db_table = 'fact_shapes_dataset'


class FactEmotionsDataset(models.Model):
    game_id = models.AutoField(primary_key=True)
    student_id = models.ForeignKey(DimStudent, on_delete=models.CASCADE, db_column='student_id')
    happy = models.IntegerField(blank=True, null=True)
    angry = models.IntegerField(blank=True, null=True)
    sad = models.IntegerField(blank=True, null=True)
    time = models.DecimalField(max_digits=5, decimal_places=2)

    class Meta:
        db_table = 'fact_emotions_dataset'

class FactAutismTeacherSurveyDataset(models.Model):
    student_id = models.OneToOneField(DimStudent, on_delete=models.CASCADE, primary_key=True, db_column='student_id')
    q1 = models.IntegerField(blank=True, null=True)
    q2 = models.IntegerField(blank=True, null=True)
    q3 = models.IntegerField(blank=True, null=True)
    q4 = models.IntegerField(blank=True, null=True)
    q5 = models.IntegerField(blank=True, null=True)
    q6 = models.IntegerField(blank=True, null=True)
    q7 = models.IntegerField(blank=True, null=True)
    q8 = models.IntegerField(blank=True, null=True)
    q9 = models.IntegerField(blank=True, null=True)
    q10 = models.IntegerField(blank=True, null=True)
    q11 = models.IntegerField(blank=True, null=True)
    q12 = models.IntegerField(blank=True, null=True)
    q13 = models.IntegerField(blank=True, null=True)
    q14 = models.IntegerField(blank=True, null=True)
    q15 = models.IntegerField(blank=True, null=True)
    q16 = models.IntegerField(blank=True, null=True)

    class Meta:
        db_table = 'fact_autism_teacher_survey_dataset'


class FactTeacherSurveyDataset(models.Model):
    student_id = models.OneToOneField(DimStudent, on_delete=models.CASCADE, primary_key=True, db_column='student_id')
    q1 = models.IntegerField(blank=True, null=True)
    q2 = models.IntegerField(blank=True, null=True)
    q3 = models.IntegerField(blank=True, null=True)
    q4 = models.IntegerField(blank=True, null=True)
    q5 = models.IntegerField(blank=True, null=True)
    q6 = models.IntegerField(blank=True, null=True)
    q7 = models.IntegerField(blank=True, null=True)
    q8 = models.IntegerField(blank=True, null=True)
    q9 = models.IntegerField(blank=True, null=True)
    q10 = models.IntegerField(blank=True, null=True)
    q11 = models.IntegerField(blank=True, null=True)
    q12 = models.IntegerField(blank=True, null=True)
    q13 = models.IntegerField(blank=True, null=True)
    q14 = models.IntegerField(blank=True, null=True)
    q15 = models.IntegerField(blank=True, null=True)
    q16 = models.IntegerField(blank=True, null=True)

    class Meta:
        db_table = 'fact_teacher_survey_dataset'