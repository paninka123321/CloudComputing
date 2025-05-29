from django.db import models

class DimClass(models.Model):
    teacher_id = models.AutoField(primary_key=True)
    class_name = models.CharField(max_length=10)

    class Meta:
        db_table = 'dim_class'


class DimTeacher(models.Model):
    teacher_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    surname = models.CharField(max_length=50)
    education = models.CharField(max_length=100)
    subject = models.CharField(max_length=50)
    age = models.IntegerField()
    sex = models.CharField(max_length=10)
    class_name = models.CharField(max_length=10)
    school_name = models.CharField(max_length=100)
    firebase_uid = models.CharField(max_length=128, unique=True, null=True, blank=True)

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
    firebase_uid = models.CharField(max_length=128, unique=True, null=True, blank=True)

    class Meta:
        db_table = 'dim_parent'


class DimStudent(models.Model):
    student_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    surname = models.CharField(max_length=50)
    class_name = models.CharField(max_length=10)
    age = models.IntegerField()
    parent = models.ForeignKey(DimParent, on_delete=models.CASCADE)
    description = models.TextField(blank=True, null=True)
    avg_behaviour = models.DecimalField(max_digits=3, decimal_places=2, blank=True, null=True)
    avg_marks = models.DecimalField(max_digits=3, decimal_places=2, blank=True, null=True)
    firebase_uid = models.CharField(max_length=128, unique=True, null=True, blank=True)

    class Meta:
        db_table = 'dim_student'


class FactWritingDataset(models.Model):
    game_id = models.AutoField(primary_key=True)
    student = models.ForeignKey(DimStudent, on_delete=models.CASCADE)
    png_file = models.TextField(blank=True, null=True)
    time = models.DecimalField(max_digits=5, decimal_places=2)

    class Meta:
        db_table = 'fact_writing_dataset'


class FactTeacherSurveyDataset(models.Model):
    student = models.OneToOneField(DimStudent, on_delete=models.CASCADE, primary_key=True)
    Q1 = models.IntegerField(blank=True, null=True)
    Q2 = models.IntegerField(blank=True, null=True)
    Q3 = models.IntegerField(blank=True, null=True)
    Q4 = models.IntegerField(blank=True, null=True)
    Q5 = models.IntegerField(blank=True, null=True)
    Q6 = models.IntegerField(blank=True, null=True)
    Q7 = models.IntegerField(blank=True, null=True)
    Q8 = models.IntegerField(blank=True, null=True)
    Q9 = models.IntegerField(blank=True, null=True)
    Q10 = models.IntegerField(blank=True, null=True)
    Q11 = models.IntegerField(blank=True, null=True)
    Q12 = models.IntegerField(blank=True, null=True)
    Q13 = models.IntegerField(blank=True, null=True)
    Q14 = models.IntegerField(blank=True, null=True)
    Q15 = models.IntegerField(blank=True, null=True)
    Q16 = models.IntegerField(blank=True, null=True)

    class Meta:
        db_table = 'fact_teacher_survey_dataset'


class FactShapesDataset(models.Model):
    game_id = models.AutoField(primary_key=True)
    student = models.ForeignKey(DimStudent, on_delete=models.CASCADE)
    correct = models.IntegerField(blank=True, null=True)
    incorrect = models.IntegerField(blank=True, null=True)
    time = models.DecimalField(max_digits=5, decimal_places=2)

    class Meta:
        db_table = 'fact_shapes_dataset'


class FactEmotionsDataset(models.Model):
    game_id = models.AutoField(primary_key=True)
    student = models.ForeignKey(DimStudent, on_delete=models.CASCADE)
    happy = models.IntegerField(blank=True, null=True)
    angry = models.IntegerField(blank=True, null=True)
    sad = models.IntegerField(blank=True, null=True)
    time = models.DecimalField(max_digits=5, decimal_places=2)

    class Meta:
        db_table = 'fact_emotions_dataset'


class FactAutismTeacherSurveyDataset(models.Model):
    student = models.OneToOneField(DimStudent, on_delete=models.CASCADE, primary_key=True)
    Q1 = models.IntegerField(blank=True, null=True)
    Q2 = models.IntegerField(blank=True, null=True)
    Q3 = models.IntegerField(blank=True, null=True)
    Q4 = models.IntegerField(blank=True, null=True)
    Q5 = models.IntegerField(blank=True, null=True)
    Q6 = models.IntegerField(blank=True, null=True)
    Q7 = models.IntegerField(blank=True, null=True)
    Q8 = models.IntegerField(blank=True, null=True)
    Q9 = models.IntegerField(blank=True, null=True)
    Q10 = models.IntegerField(blank=True, null=True)
    Q11 = models.IntegerField(blank=True, null=True)
    Q12 = models.IntegerField(blank=True, null=True)
    Q13 = models.IntegerField(blank=True, null=True)
    Q14 = models.IntegerField(blank=True, null=True)
    Q15 = models.IntegerField(blank=True, null=True)
    Q16 = models.IntegerField(blank=True, null=True)

    class Meta:
        db_table = 'fact_autism_teacher_survey_dataset'