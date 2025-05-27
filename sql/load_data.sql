COPY dim_class (teacher_id, class) FROM '/Users/janpoglod/Desktop/studies/cloud/postgres-django-workspace-1/sql/dim_class.csv' DELIMITER ',' CSV HEADER;

COPY dim_teacher (teacher_id, name, surname, education, subject, age, sex, class, school_name) FROM '/Users/janpoglod/Desktop/studies/cloud/postgres-django-workspace-1/sql/dim_teacher.csv' DELIMITER ',' CSV HEADER;

COPY dim_parent (parent_id, name, surname, age, work, phone, email) FROM '/Users/janpoglod/Desktop/studies/cloud/postgres-django-workspace-1/sql/dim_parent.csv' DELIMITER ',' CSV HEADER;

COPY dim_student (student_id, name, surname, class, age, parent_id, description, avg_behaviour, avg_marks) FROM '/Users/janpoglod/Desktop/studies/cloud/postgres-django-workspace-1/sql/dim_student.csv' DELIMITER ',' CSV HEADER;

COPY fact_writing_dataset (game_id, student_id, png_file, time) FROM '/Users/janpoglod/Desktop/studies/cloud/postgres-django-workspace-1/sql/fact_writing_dataset.csv' DELIMITER ',' CSV HEADER;

COPY fact_teacher_survey_dataset (student_id, Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10, Q11, Q12, Q13, Q14, Q15, Q16) FROM '/Users/janpoglod/Desktop/studies/cloud/postgres-django-workspace-1/sql/fact_teacher_survey_dataset.csv' DELIMITER ',' CSV HEADER;

COPY fact_shapes_dataset (game_id, student_id, correct, incorrect, time) FROM '/Users/janpoglod/Desktop/studies/cloud/postgres-django-workspace-1/sql/fact_shapes_dataset.csv' DELIMITER ',' CSV HEADER;

COPY fact_emotions_dataset (game_id, student_id, happy, angry, sad, time) FROM '/Users/janpoglod/Desktop/studies/cloud/postgres-django-workspace-1/sql/fact_emotions_dataset.csv' DELIMITER ',' CSV HEADER;

COPY fact_autism_teacher_survey_dataset (student_id, Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10, Q11, Q12, Q13, Q14, Q15, Q16) FROM '/Users/janpoglod/Desktop/studies/cloud/postgres-django-workspace-1/sql/fact_autism_teacher_survey_dataset.csv' DELIMITER ',' CSV HEADER;