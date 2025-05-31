CREATE TABLE dim_class (
    teacher_id INTEGER PRIMARY KEY,
    class VARCHAR(10) NOT NULL
);

CREATE TABLE dim_teacher (
    teacher_id INTEGER PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    surname VARCHAR(50) NOT NULL,
    education VARCHAR(100) NOT NULL, 
    subject VARCHAR(50) NOT NULL,
    age INTEGER NOT NULL,
    sex VARCHAR(10) NOT NULL,
    class VARCHAR(10) NOT NULL,
    school_name VARCHAR(100) NOT NULL
);

CREATE TABLE dim_parent (
    parent_id INTEGER PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    surname VARCHAR(50) NOT NULL,
    age INTEGER NOT NULL,
    work VARCHAR(50) NOT NULL,
    phone VARCHAR(15) NOT NULL,
    email VARCHAR(100) NOT NULL
);

CREATE TABLE dim_student (
    student_id INTEGER PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    surname VARCHAR(50) NOT NULL,
    class VARCHAR(10) NOT NULL,
    age INTEGER NOT NULL,
    parent_id INTEGER REFERENCES dim_parent(parent_id),
    description TEXT,
    avg_behaviour DECIMAL(3, 2),
    avg_marks DECIMAL(3, 2)
);

CREATE TABLE fact_writing_dataset (
    game_id INTEGER PRIMARY KEY,
    student_id INTEGER REFERENCES dim_student(student_id),
    png_file VARCHAR(255),
    time DECIMAL(5, 2)
);

CREATE TABLE fact_teacher_survey_dataset (
    student_id INTEGER PRIMARY KEY REFERENCES dim_student(student_id),
    Q1 INTEGER,
    Q2 INTEGER,
    Q3 INTEGER,
    Q4 INTEGER,
    Q5 INTEGER,
    Q6 INTEGER,
    Q7 INTEGER,
    Q8 INTEGER,
    Q9 INTEGER,
    Q10 INTEGER,
    Q11 INTEGER,
    Q12 INTEGER,
    Q13 INTEGER,
    Q14 INTEGER,
    Q15 INTEGER,
    Q16 INTEGER
);

CREATE TABLE fact_shapes_dataset (
    game_id INTEGER PRIMARY KEY,
    student_id INTEGER NOT NULL REFERENCES dim_student(student_id),
    correct INTEGER,
    incorrect INTEGER,
    time DECIMAL(5, 2)
);

CREATE TABLE fact_emotions_dataset (
    game_id INTEGER PRIMARY KEY,
    student_id INTEGER NOT NULL REFERENCES dim_student(student_id),
    happy INTEGER,
    angry INTEGER,
    sad INTEGER,
    time DECIMAL(5, 2)
);

CREATE TABLE fact_autism_teacher_survey_dataset (
    student_id INTEGER PRIMARY KEY REFERENCES dim_student(student_id),
    Q1 INTEGER,
    Q2 INTEGER,
    Q3 INTEGER,
    Q4 INTEGER,
    Q5 INTEGER,
    Q6 INTEGER,
    Q7 INTEGER,
    Q8 INTEGER,
    Q9 INTEGER,
    Q10 INTEGER,
    Q11 INTEGER,
    Q12 INTEGER,
    Q13 INTEGER,
    Q14 INTEGER,
    Q15 INTEGER,
    Q16 INTEGER
);