--
-- PostgreSQL database dump
--

-- Dumped from database version 17.5 (Debian 17.5-1.pgdg120+1)
-- Dumped by pg_dump version 17.5 (Debian 17.5-1.pgdg120+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: dim_class; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.dim_class (
    teacher_id integer NOT NULL,
    class_name character varying(10) NOT NULL
);


--
-- Name: dim_parent; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.dim_parent (
    parent_id integer NOT NULL,
    name character varying(50) NOT NULL,
    surname character varying(50) NOT NULL,
    age integer NOT NULL,
    work character varying(50) NOT NULL,
    phone character varying(15) NOT NULL,
    email character varying(100) NOT NULL
);


--
-- Name: dim_student; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.dim_student (
    student_id integer NOT NULL,
    name character varying(50) NOT NULL,
    surname character varying(50) NOT NULL,
    class_name character varying(10) NOT NULL,
    age integer NOT NULL,
    parent_id integer,
    description text,
    avg_behaviour numeric(3,2),
    avg_marks numeric(3,2)
);


--
-- Name: dim_teacher; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.dim_teacher (
    teacher_id integer NOT NULL,
    name character varying(50) NOT NULL,
    surname character varying(50) NOT NULL,
    education character varying(100) NOT NULL,
    subject character varying(50) NOT NULL,
    age integer NOT NULL,
    sex character varying(10) NOT NULL,
    class_name character varying(10) NOT NULL,
    school_name character varying(100) NOT NULL
);


--
-- Name: fact_autism_teacher_survey_dataset; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.fact_autism_teacher_survey_dataset (
    student_id integer NOT NULL,
    q1 integer,
    q2 integer,
    q3 integer,
    q4 integer,
    q5 integer,
    q6 integer,
    q7 integer,
    q8 integer,
    q9 integer,
    q10 integer,
    q11 integer,
    q12 integer,
    q13 integer,
    q14 integer,
    q15 integer,
    q16 integer
);


--
-- Name: fact_emotions_dataset; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.fact_emotions_dataset (
    game_id integer NOT NULL,
    student_id integer NOT NULL,
    happy integer,
    angry integer,
    sad integer,
    "time" numeric(5,2)
);


--
-- Name: fact_shapes_dataset; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.fact_shapes_dataset (
    game_id integer NOT NULL,
    student_id integer NOT NULL,
    correct integer,
    incorrect integer,
    "time" numeric(5,2)
);


--
-- Name: fact_teacher_survey_dataset; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.fact_teacher_survey_dataset (
    student_id integer NOT NULL,
    q1 integer,
    q2 integer,
    q3 integer,
    q4 integer,
    q5 integer,
    q6 integer,
    q7 integer,
    q8 integer,
    q9 integer,
    q10 integer,
    q11 integer,
    q12 integer,
    q13 integer,
    q14 integer,
    q15 integer,
    q16 integer
);


--
-- Name: fact_writing_dataset; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.fact_writing_dataset (
    game_id integer NOT NULL,
    student_id integer,
    png_file text,
    "time" numeric(5,2)
);


--
-- Data for Name: dim_class; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.dim_class (teacher_id, class_name) FROM stdin;
1	0A
2	0B
3	1A
4	1B
5	1C
6	2A
7	2B
8	2C
9	2D
10	3A
11	3B
\.


--
-- Data for Name: dim_parent; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.dim_parent (parent_id, name, surname, age, work, phone, email) FROM stdin;
101	Michał	Duda	45	prawnik	552440306	michał.duda56@wp.pl
102	Lena	Wieczorek	31	informatyk	593924556	lena.wieczorek82@gmail.com
103	Michał	Duda	48	prawnik	518901851	michał.duda15@o2.pl
104	Wiktoria	Mazur	31	fryzjer	537087356	wiktoria.mazur50@gmail.com
105	Aleksander	Duda	45	księgowa	598390296	aleksander.duda30@interia.pl
106	Jan	Wiśniewska	44	inżynier	501809425	jan.wiśniewska32@onet.pl
107	Igor	Duda	31	kierowca	541320814	igor.duda2@wp.pl
108	Amelia	Pawlak	35	nauczyciel	571143462	amelia.pawlak93@o2.pl
109	Laura	Duda	48	fryzjer	566712569	laura.duda13@onet.pl
110	Aleksander	Duda	35	sprzedawca	563341521	aleksander.duda97@o2.pl
111	Franciszek	Zając	43	fryzjer	527300421	franciszek.zając5@o2.pl
112	Laura	Wiśniewska	37	inżynier	529467323	laura.wiśniewska90@o2.pl
113	Franciszek	Kowalska	44	prawnik	505667655	franciszek.kowalska77@o2.pl
114	Franciszek	Kamiński	49	fryzjer	577450385	franciszek.kamiński94@interia.pl
115	Michał	Wójcik	39	księgowa	559378016	michał.wójcik28@onet.pl
116	Amelia	Duda	49	informatyk	542130293	amelia.duda67@wp.pl
117	Nikodem	Zielińska	40	pracownik biurowy	575917249	nikodem.zielińska37@onet.pl
118	Franciszek	Krawczyk	37	księgowa	523129479	franciszek.krawczyk27@interia.pl
119	Laura	Pawlak	32	inżynier	507639782	laura.pawlak47@wp.pl
120	Antoni	Pawlak	46	nauczyciel	577007236	antoni.pawlak50@o2.pl
121	Franciszek	Mazur	33	fryzjer	509495505	franciszek.mazur29@interia.pl
122	Filip	Grabowski	35	fryzjer	509246655	filip.grabowski50@gmail.com
123	Aleksander	Kowalska	50	informatyk	538989794	aleksander.kowalska16@interia.pl
124	Antoni	Duda	31	informatyk	558833433	antoni.duda80@o2.pl
125	Julia	Duda	41	informatyk	532280390	julia.duda2@wp.pl
126	Igor	Wróbel	46	prawnik	588271162	igor.wróbel71@interia.pl
127	Szymon	Zając	34	informatyk	552812001	szymon.zając15@interia.pl
128	Michał	Zając	32	pracownik biurowy	572308074	michał.zając82@gmail.com
129	Oliwia	Kowalska	45	pracownik biurowy	573376191	oliwia.kowalska92@interia.pl
130	Michał	Kamiński	40	księgowa	549080772	michał.kamiński69@wp.pl
131	Julia	Baran	30	fryzjer	579678775	julia.baran54@gmail.com
132	Jan	Pawlak	42	kierowca	551362400	jan.pawlak71@o2.pl
133	Maja	Kowalska	30	księgowa	583212916	maja.kowalska15@o2.pl
134	Wiktoria	Zielińska	30	kierowca	535410715	wiktoria.zielińska46@wp.pl
135	Amelia	Grabowski	32	inżynier	553571338	amelia.grabowski49@o2.pl
136	Szymon	Wróbel	41	prawnik	545237866	szymon.wróbel74@interia.pl
137	Zofia	Kowalska	49	fryzjer	537136895	zofia.kowalska4@interia.pl
138	Jan	Pawlak	31	inżynier	531511017	jan.pawlak60@interia.pl
139	Aleksander	Wójcik	38	nauczyciel	562527196	aleksander.wójcik46@o2.pl
140	Natalia	Król	47	prawnik	573781548	natalia.król2@o2.pl
141	Aleksander	Jabłoński	37	fryzjer	549523200	aleksander.jabłoński51@gmail.com
142	Lena	Pawlak	37	sprzedawca	545406637	lena.pawlak4@onet.pl
143	Amelia	Grabowski	49	fryzjer	532619713	amelia.grabowski7@interia.pl
144	Lena	Krawczyk	38	nauczyciel	538045177	lena.krawczyk29@o2.pl
145	Zofia	Duda	30	sprzedawca	571490385	zofia.duda71@gmail.com
146	Zuzanna	Mazur	46	lekarz	597460762	zuzanna.mazur89@gmail.com
147	Amelia	Zając	47	pracownik biurowy	507996716	amelia.zając38@onet.pl
148	Igor	Wiśniewska	31	lekarz	562515137	igor.wiśniewska5@wp.pl
149	Amelia	Wieczorek	48	inżynier	566998329	amelia.wieczorek27@onet.pl
150	Igor	Zając	39	nauczyciel	511358926	igor.zając89@interia.pl
151	Wiktoria	Zając	44	prawnik	517431686	wiktoria.zając20@gmail.com
152	Wiktoria	Krawczyk	37	informatyk	542158154	wiktoria.krawczyk51@gmail.com
153	Michał	Zielińska	41	inżynier	534774416	michał.zielińska75@wp.pl
154	Amelia	Zając	47	pracownik biurowy	517975667	amelia.zając8@gmail.com
155	Antoni	Lewandowski	45	informatyk	545948471	antoni.lewandowski16@wp.pl
156	Franciszek	Krawczyk	42	lekarz	505375031	franciszek.krawczyk60@onet.pl
157	Oliwia	Krawczyk	43	informatyk	568776791	oliwia.krawczyk82@wp.pl
158	Igor	Wróbel	35	prawnik	531805565	igor.wróbel80@o2.pl
159	Aleksander	Kamiński	37	sprzedawca	595981075	aleksander.kamiński73@o2.pl
160	Antoni	Duda	41	inżynier	547098214	antoni.duda68@gmail.com
161	Wiktoria	Wróbel	46	informatyk	528681922	wiktoria.wróbel80@gmail.com
162	Nikodem	Krawczyk	33	fryzjer	573191451	nikodem.krawczyk11@o2.pl
163	Natalia	Lewandowski	42	sprzedawca	544829164	natalia.lewandowski18@wp.pl
164	Franciszek	Kowalska	50	sprzedawca	522394446	franciszek.kowalska97@wp.pl
165	Laura	Jabłoński	43	nauczyciel	581531434	laura.jabłoński44@wp.pl
166	Antoni	Jabłoński	37	lekarz	504943965	antoni.jabłoński17@gmail.com
167	Nikodem	Sikora	41	informatyk	512202420	nikodem.sikora15@gmail.com
168	Aleksander	Piotrowski	46	inżynier	532019987	aleksander.piotrowski17@onet.pl
169	Julia	Król	48	informatyk	563473226	julia.król13@onet.pl
170	Oliwia	Kowalska	34	fryzjer	592419733	oliwia.kowalska15@o2.pl
171	Oliwia	Kamiński	50	kierowca	549578379	oliwia.kamiński7@onet.pl
172	Lena	Piotrowski	49	inżynier	534249866	lena.piotrowski55@gmail.com
173	Igor	Wójcik	50	fryzjer	525666352	igor.wójcik70@interia.pl
174	Amelia	Zając	33	informatyk	533214886	amelia.zając12@o2.pl
175	Aleksander	Nowak	49	lekarz	564647134	aleksander.nowak22@interia.pl
176	Michał	Lewandowski	32	inżynier	558405493	michał.lewandowski42@wp.pl
177	Laura	Wiśniewska	38	sprzedawca	529015141	laura.wiśniewska93@onet.pl
178	Wiktoria	Kamiński	33	fryzjer	507150022	wiktoria.kamiński90@gmail.com
179	Julia	Krawczyk	47	pracownik biurowy	571598274	julia.krawczyk81@wp.pl
180	Wiktoria	Sikora	48	inżynier	523628802	wiktoria.sikora29@wp.pl
181	Wiktoria	Mazur	48	fryzjer	554256757	wiktoria.mazur28@interia.pl
182	Kacper	Kowalska	30	informatyk	567553286	kacper.kowalska19@wp.pl
183	Natalia	Kowalska	33	kierowca	577522734	natalia.kowalska39@gmail.com
184	Szymon	Grabowski	35	nauczyciel	542484999	szymon.grabowski92@o2.pl
185	Maja	Kowalska	34	prawnik	583742625	maja.kowalska29@wp.pl
186	Lena	Jabłoński	42	pracownik biurowy	506356339	lena.jabłoński97@onet.pl
187	Filip	Wróbel	39	kierowca	567126565	filip.wróbel60@wp.pl
188	Zuzanna	Wiśniewska	40	prawnik	521853314	zuzanna.wiśniewska73@gmail.com
189	Natalia	Wieczorek	44	inżynier	526693054	natalia.wieczorek23@interia.pl
190	Szymon	Kamiński	38	lekarz	514539269	szymon.kamiński66@o2.pl
191	Laura	Piotrowski	50	informatyk	574475138	laura.piotrowski70@o2.pl
192	Kacper	Krawczyk	33	fryzjer	508490682	kacper.krawczyk90@onet.pl
193	Franciszek	Zielińska	41	prawnik	503606607	franciszek.zielińska87@wp.pl
194	Franciszek	Krawczyk	37	nauczyciel	507208408	franciszek.krawczyk66@gmail.com
195	Amelia	Jabłoński	48	nauczyciel	585921400	amelia.jabłoński9@interia.pl
196	Nikodem	Mazur	32	sprzedawca	536642246	nikodem.mazur49@interia.pl
197	Filip	Wiśniewska	36	fryzjer	581259035	filip.wiśniewska78@onet.pl
198	Aleksander	Nowak	40	księgowa	509149389	aleksander.nowak81@wp.pl
199	Jan	Wiśniewska	39	pracownik biurowy	555794225	jan.wiśniewska25@interia.pl
200	Julia	Wróbel	48	fryzjer	534239647	julia.wróbel15@onet.pl
\.


--
-- Data for Name: dim_student; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.dim_student (student_id, name, surname, class_name, age, parent_id, description, avg_behaviour, avg_marks) FROM stdin;
1	Oliwia	Lewandowski	1D	9	101	Lubi pracę w grupie.	4.30	5.20
2	Oliwia	Sikora	3C	9	102	Świetnie współpracuje z klasą.	5.00	5.60
3	Igor	Zielińska	1E	7	103	Bardzo dobre wyniki i wzorowe zachowanie.	5.70	4.40
4	Michał	Nowak	2D	7	104	Świetnie współpracuje z klasą.	4.50	5.90
5	Filip	Wróbel	3D	7	105	Wymaga wsparcia przy koncentracji.	5.30	5.00
6	Szymon	Pawlak	2C	9	106	Często bierze udział w konkursach.	5.50	3.90
7	Oliwia	Pawlak	3A	9	107	Otwarty na nowe wyzwania.	6.00	5.70
8	Aleksander	Zając	3A	7	108	Wymaga wsparcia przy koncentracji.	5.40	4.40
9	Antoni	Kowalska	3D	8	109	Chętnie pomaga nauczycielowi.	4.60	5.30
10	Wiktoria	Jabłoński	2E	7	110	Chętnie pomaga nauczycielowi.	5.60	5.10
11	Zuzanna	Król	1B	9	111	Bardzo dobre wyniki i wzorowe zachowanie.	5.20	5.30
12	Michał	Wójcik	3A	7	112	Wymaga wsparcia przy koncentracji.	4.90	5.00
13	Lena	Nowak	3A	8	113	Wzorowa uczennica.	4.40	4.80
14	Szymon	Kowalska	3A	9	114	Dociekliwa.	4.50	5.20
15	Lena	Wieczorek	3E	8	115	Chętnie pomaga nauczycielowi.	4.60	5.00
16	Julia	Kowalska	3C	9	116	Bardzo grzeczna i ambitna.	4.50	5.50
17	Lena	Wójcik	2E	9	117	Aktywna na lekcjach.	5.30	4.40
18	Oliwia	Lewandowski	1A	8	118	Dynamiczny i pełen energii.	4.80	6.00
19	Michał	Duda	1D	7	119	Chętnie pomaga nauczycielowi.	5.90	5.30
20	Maja	Mazur	3D	7	120	Wzorowa uczennica.	5.10	5.00
21	Michał	Grabowski	1D	8	121	Dużo pyta.	4.90	4.90
22	Lena	Pawlak	2E	9	122	Pilna uczennica.	5.90	4.80
23	Aleksander	Wiśniewska	3B	7	123	Pracuje nad sobą.	5.10	5.20
24	Julia	Wiśniewska	2C	9	124	Lubi pracę w grupie.	4.70	5.30
25	Zuzanna	Lewandowski	2E	9	125	Otwarty na nowe wyzwania.	4.50	4.30
26	Julia	Wójcik	1C	7	126	Lubi pracę w grupie.	4.70	5.70
27	Zuzanna	Kowalska	3B	8	127	Rozkojarzony.	5.70	5.80
28	Julia	Duda	3A	9	128	Często bierze udział w konkursach.	5.90	5.60
29	Filip	Pawlak	1A	7	129	Wzorowa uczennica.	4.50	6.00
30	Amelia	Król	1B	7	130	Bardzo dobre wyniki i wzorowe zachowanie.	5.80	5.60
31	Szymon	Grabowski	1D	9	131	Bardzo grzeczna i ambitna.	4.60	5.30
32	Michał	Jabłoński	2C	9	132	Dynamiczny i pełen energii.	5.90	5.80
33	Oliwia	Nowak	2A	7	133	Wymaga motywacji.	4.80	4.30
34	Igor	Pawlak	3E	9	134	Często bierze udział w konkursach.	6.00	5.20
35	Zuzanna	Wróbel	1C	7	135	Chętnie pomaga nauczycielowi.	5.10	5.30
36	Amelia	Lewandowski	3C	8	136	Kreatywna i zaangażowana.	4.40	4.80
37	Franciszek	Mazur	3B	7	137	Otwarty na nowe wyzwania.	4.00	5.20
38	Kacper	Lewandowski	3A	7	138	Kreatywny i zaangażowany.	5.40	4.00
39	Szymon	Duda	1E	7	139	Bardzo dobre wyniki i wzorowe zachowanie.	4.80	5.80
40	Maja	Wójcik	1B	8	140	Dynamiczny i pełen energii.	5.00	5.10
41	Jan	Kowalska	1D	8	141	Wrażliwa i empatyczna wobec innych.	3.80	5.00
42	Amelia	Jabłoński	2D	7	142	Często bierze udział w konkursach.	5.40	5.80
43	Kacper	Sikora	3D	8	143	Lubi pracę w grupie.	4.50	5.70
44	Jan	Piotrowski	2E	9	144	Dociekliwa.	5.80	5.40
45	Natalia	Wróbel	1A	8	145	Wymaga wsparcia przy koncentracji.	5.30	4.80
46	Zuzanna	Sikora	2E	7	146	Bardzo dobre wyniki i wzorowe zachowanie.	4.50	5.80
47	Aleksander	Nowak	3A	8	147	Wrażliwa i empatyczna wobec innych.	4.50	5.80
48	Oliwia	Mazur	2A	8	148	Otwarty na nowe wyzwania.	6.00	5.70
49	Michał	Wróbel	3C	9	149	Pracuje nad sobą.	5.10	5.70
50	Natalia	Krawczyk	2C	9	150	Systematyczny.	5.50	5.40
51	Jan	Wróbel	3E	8	151	Dynamiczny i pełen energii.	5.10	5.70
52	Igor	Zielińska	3B	7	152	Otwarty na nowe wyzwania.	5.60	4.80
53	Michał	Duda	3C	9	153	Dużo pyta.	5.10	5.00
54	Natalia	Król	2D	7	154	Bardzo grzeczna i ambitna.	5.20	5.70
55	Szymon	Sikora	3C	7	155	Dynamiczny i pełen energii.	4.50	6.00
56	Julia	Baran	1B	8	156	Wrażliwa i empatyczna wobec innych.	5.40	5.90
57	Aleksander	Wieczorek	3A	7	157	Kreatywna i zaangażowana.	4.40	5.30
58	Antoni	Duda	3E	8	158	Bardzo grzeczna i ambitna.	4.40	5.80
59	Oliwia	Kamiński	2C	7	159	Dynamiczny i pełen energii.	4.70	5.90
60	Szymon	Piotrowski	2A	9	160	Wymaga wsparcia przy koncentracji.	5.50	5.00
61	Szymon	Wróbel	1B	8	161	Otwarty na nowe wyzwania.	4.90	5.70
62	Szymon	Lewandowski	1E	7	162	Świetnie współpracuje z klasą.	4.60	5.80
63	Oliwia	Piotrowski	3B	7	163	Lubi pracę w grupie.	4.50	5.10
64	Igor	Nowak	2C	9	164	Pilna uczennica.	5.80	5.20
65	Amelia	Kowalska	2C	8	165	Kreatywna i zaangażowana.	3.90	5.10
66	Antoni	Zając	3D	8	166	Lubi pracę w grupie.	5.90	5.50
67	Igor	Duda	3D	8	167	Świetnie współpracuje z klasą.	6.00	4.80
68	Jan	Wróbel	1E	7	168	Często bierze udział w konkursach.	5.10	4.90
69	Laura	Zielińska	2E	7	169	Dużo pyta.	5.20	6.00
70	Wiktoria	Pawlak	2D	8	170	Często bierze udział w konkursach.	5.70	5.70
71	Natalia	Sikora	1A	9	171	Wymaga wsparcia przy koncentracji.	6.00	5.00
72	Natalia	Wójcik	3B	8	172	Chętnie pomaga nauczycielowi.	5.00	5.10
73	Antoni	Duda	1A	8	173	Dynamiczny i pełen energii.	5.00	5.90
74	Szymon	Wróbel	3D	8	174	Otwarty na nowe wyzwania.	5.90	5.00
75	Franciszek	Krawczyk	2D	9	175	Dociekliwa.	5.00	5.10
76	Filip	Krawczyk	2E	8	176	Świetnie współpracuje z klasą.	4.50	5.30
77	Oliwia	Nowak	2D	7	177	Kreatywna i zaangażowana.	5.60	5.20
78	Nikodem	Krawczyk	2C	8	178	Dynamiczny i pełen energii.	4.60	5.20
79	Laura	Kamiński	2A	9	179	Chętnie pomaga nauczycielowi.	5.90	5.40
80	Jan	Kowalska	1A	7	180	Kreatywna i zaangażowana.	3.50	5.10
81	Antoni	Nowak	2C	8	181	Bardzo dobre wyniki i wzorowe zachowanie.	4.70	5.10
82	Wiktoria	Wieczorek	1C	9	182	Wzorowa uczennica.	5.70	5.10
83	Natalia	Baran	2E	9	183	Dociekliwa.	5.80	4.80
84	Zuzanna	Piotrowski	1E	8	184	Systematyczny.	5.40	4.90
85	Jan	Wróbel	2E	9	185	Często bierze udział w konkursach.	5.00	5.10
86	Filip	Zielińska	3D	7	186	Dociekliwa.	5.20	4.80
87	Maja	Jabłoński	2D	8	187	Często bierze udział w konkursach.	5.30	4.80
88	Antoni	Lewandowski	3B	7	188	Dynamiczny i pełen energii.	4.60	5.60
89	Wiktoria	Jabłoński	3E	9	189	Świetnie współpracuje z klasą.	5.60	5.30
90	Maja	Wójcik	1D	9	190	Systematyczny.	5.90	5.60
91	Wiktoria	Kamiński	3D	8	191	Dynamiczny i pełen energii.	4.70	4.10
92	Wiktoria	Mazur	2E	7	192	Chętnie pomaga nauczycielowi.	4.70	5.90
93	Szymon	Baran	1D	8	193	Dynamiczny i pełen energii.	4.10	5.80
94	Nikodem	Krawczyk	3A	9	194	Bardzo grzeczna i ambitna.	5.90	4.90
95	Zofia	Wieczorek	2C	7	195	Wymaga wsparcia przy koncentracji.	4.30	4.70
96	Jan	Mazur	1A	8	196	Wrażliwa i empatyczna wobec innych.	5.80	5.50
97	Antoni	Kamiński	3A	8	197	Wrażliwa i empatyczna wobec innych.	5.20	3.80
98	Szymon	Wieczorek	2A	7	198	Chętnie pomaga nauczycielowi.	3.40	5.10
99	Antoni	Wieczorek	1A	9	199	Pracuje nad sobą.	4.30	4.90
100	Maja	Wójcik	3A	8	200	Dociekliwa.	4.50	5.00
\.


--
-- Data for Name: dim_teacher; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.dim_teacher (teacher_id, name, surname, education, subject, age, sex, class_name, school_name) FROM stdin;
1	Anna	Kowalska	magister inżynier	angielski	50	kobieta	3C	Szkoła Podstawowa nr 5 im. Marii Konopnickiej
2	Paweł	Nowak	magister	matematyka	31	mężczyzna	2E	Szkoła Podstawowa nr 5 im. Marii Konopnickiej
3	Katarzyna	Wiśniewska	licencjat	matematyka	31	kobieta	2C	Szkoła Podstawowa nr 5 im. Marii Konopnickiej
4	Tomasz	Wójcik	doktor	informatyka	41	mężczyzna	3B	Szkoła Podstawowa nr 5 im. Marii Konopnickiej
5	Ewa	Zielińska	doktor	informatyka	42	kobieta	2B	Szkoła Podstawowa nr 5 im. Marii Konopnickiej
6	Marcin	Kamiński	magister inżynier	plastyka	28	mężczyzna	1A	Szkoła Podstawowa nr 5 im. Marii Konopnickiej
7	Magdalena	Lewandowska	doktor	plastyka	55	kobieta	1C	Szkoła Podstawowa nr 5 im. Marii Konopnickiej
8	Andrzej	Mazur	licencjat	język polski	47	mężczyzna	3A	Szkoła Podstawowa nr 5 im. Marii Konopnickiej
9	Agnieszka	Krawczyk	magister	informatyka	59	kobieta	3D	Szkoła Podstawowa nr 5 im. Marii Konopnickiej
10	Krzysztof	Piotrowska	doktor	informatyka	47	mężczyzna	2E	Szkoła Podstawowa nr 5 im. Marii Konopnickiej
11	Joanna	Grabowska	doktor	przyroda	44	kobieta	2B	Szkoła Podstawowa nr 5 im. Marii Konopnickiej
12	Rafał	Zając	doktor	przyroda	47	mężczyzna	3A	Szkoła Podstawowa nr 5 im. Marii Konopnickiej
13	Monika	Król	magister	język polski	51	kobieta	1A	Szkoła Podstawowa nr 5 im. Marii Konopnickiej
14	Grzegorz	Jabłońska	magister inżynier	matematyka	32	mężczyzna	3C	Szkoła Podstawowa nr 5 im. Marii Konopnickiej
15	Beata	Wieczorek	doktor	przyroda	43	kobieta	3B	Szkoła Podstawowa nr 5 im. Marii Konopnickiej
\.


--
-- Data for Name: fact_autism_teacher_survey_dataset; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.fact_autism_teacher_survey_dataset (student_id, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16) FROM stdin;
1	3	1	2	4	1	1	1	1	2	3	1	2	1	2	2	1
2	2	1	3	2	4	3	3	2	1	1	3	2	2	4	3	4
3	4	1	2	4	1	1	1	1	1	1	2	2	4	1	2	4
4	2	4	4	3	1	1	2	2	1	3	3	3	4	1	4	2
5	2	1	4	1	2	2	1	1	2	4	1	1	1	4	2	2
6	1	2	3	2	1	2	1	4	3	3	3	4	3	1	1	1
7	3	4	2	3	4	2	2	2	3	1	1	2	2	4	1	1
8	2	2	4	2	1	3	3	2	2	3	4	2	2	2	3	1
9	4	2	1	1	4	1	2	2	1	4	2	4	1	1	1	1
10	4	4	1	2	1	1	2	4	1	1	3	2	2	2	2	2
11	1	2	1	2	2	3	2	2	2	1	3	1	2	3	2	2
12	1	4	1	2	1	4	1	2	2	2	2	1	3	1	4	2
13	4	4	4	1	2	4	1	4	4	4	2	4	2	2	1	2
14	4	4	3	3	2	1	1	1	4	3	3	4	3	3	2	4
15	2	1	2	2	3	1	1	2	3	2	2	1	3	2	1	3
16	2	1	2	3	1	1	3	4	1	4	2	4	1	2	2	4
17	3	2	4	1	1	2	3	1	4	2	1	1	4	4	3	3
18	2	2	1	1	4	3	2	3	1	2	1	2	2	2	2	2
19	2	2	2	4	2	3	4	3	1	4	3	1	4	4	2	4
20	1	2	4	2	1	4	2	2	1	2	1	1	1	4	1	3
21	2	3	4	1	3	4	1	2	2	2	4	2	2	1	2	4
22	3	2	2	3	2	1	1	4	3	4	2	4	1	2	2	3
23	3	1	4	2	1	4	2	1	1	1	3	3	3	1	2	2
24	1	3	1	1	4	2	2	1	2	1	3	1	4	2	2	3
25	2	4	1	4	4	1	3	1	3	2	1	2	1	1	1	1
26	4	1	3	2	4	4	2	1	1	3	1	1	4	4	3	1
27	2	2	4	4	4	1	4	1	4	4	2	1	4	3	2	3
28	5	6	6	6	6	6	5	5	5	6	6	6	5	5	6	6
29	5	6	6	5	6	6	5	5	6	6	5	6	6	6	6	6
30	5	5	6	5	5	5	6	5	6	5	6	6	5	5	5	6
31	3	2	1	1	1	1	4	1	3	1	1	2	1	4	1	2
32	4	1	4	4	4	4	4	3	4	2	4	2	4	1	1	4
33	2	4	2	3	3	3	2	1	3	4	2	2	2	4	4	2
34	1	3	3	1	3	3	3	2	2	1	4	1	4	1	2	3
35	3	3	3	2	1	3	3	2	4	4	3	2	1	1	2	4
36	2	1	2	1	2	1	3	2	4	3	1	3	1	1	3	2
37	3	2	2	3	3	2	2	1	2	1	2	4	1	4	1	3
38	1	1	2	1	2	2	2	4	3	4	1	2	4	4	4	1
39	1	4	2	2	3	4	1	1	2	1	3	2	2	3	2	4
40	4	1	1	4	2	3	2	2	1	1	2	1	2	1	1	2
41	4	1	1	3	2	3	1	4	3	3	1	3	1	1	2	1
42	2	4	3	4	2	2	2	2	1	4	2	1	4	1	2	3
43	1	2	4	3	3	3	2	1	4	1	4	3	3	2	4	1
44	1	4	1	3	2	4	2	3	4	4	2	4	1	4	2	3
45	3	1	2	1	4	1	2	1	4	2	2	3	1	4	2	2
46	3	1	4	2	2	2	4	2	4	1	2	2	2	1	1	2
47	2	4	2	1	1	3	2	2	1	2	4	4	2	4	4	3
48	1	3	1	2	2	3	3	4	1	1	3	2	3	1	2	1
49	1	2	4	2	1	1	3	2	2	1	4	3	1	4	2	2
50	1	3	3	1	2	4	4	3	2	1	1	3	1	4	2	3
51	4	2	1	1	2	2	1	3	2	3	2	2	2	4	2	1
52	2	2	3	3	4	3	1	4	2	1	2	2	4	1	2	1
53	1	4	2	2	4	1	1	4	2	3	1	4	4	2	1	1
54	2	4	4	3	1	2	2	3	2	1	4	2	2	4	4	4
55	1	4	3	2	2	4	4	2	2	3	3	1	1	1	2	4
56	2	3	3	1	2	1	2	2	2	1	1	2	1	1	1	2
57	1	2	3	2	3	1	2	2	4	1	2	3	3	3	3	2
58	4	2	1	2	4	1	2	3	2	3	1	4	1	1	1	1
59	4	1	1	2	2	2	2	4	1	2	4	4	3	3	3	2
60	4	3	1	2	4	3	4	3	2	2	2	1	2	2	4	1
61	1	3	3	4	4	4	1	4	3	2	2	4	2	2	1	3
62	3	4	4	4	2	2	1	4	4	2	1	2	4	4	1	3
63	1	3	4	2	1	2	2	4	3	1	4	1	2	2	2	2
64	2	2	2	4	1	4	2	2	2	4	3	2	4	2	3	2
65	2	1	2	1	2	3	4	1	2	1	1	4	3	1	2	3
66	1	1	1	4	2	2	1	4	2	3	4	1	3	4	4	2
\.


--
-- Data for Name: fact_emotions_dataset; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.fact_emotions_dataset (game_id, student_id, happy, angry, sad, "time") FROM stdin;
1	6	2	1	1	18.21
2	1	1	2	1	19.43
3	5	1	2	1	19.39
4	22	1	2	1	20.02
5	23	2	1	1	20.24
6	24	1	2	1	20.62
7	19	2	1	1	20.69
8	2	1	2	1	19.33
9	2	1	1	2	20.44
10	26	2	1	1	18.40
11	9	2	1	1	18.11
12	22	2	1	1	20.71
13	27	1	1	2	17.14
14	11	1	2	1	21.15
15	11	1	1	2	20.52
16	15	1	2	1	18.89
17	8	1	2	1	21.86
18	6	1	1	2	18.94
19	22	1	2	1	20.11
20	2	1	1	2	20.46
21	14	1	2	1	20.24
22	5	1	2	1	18.75
23	7	2	1	1	17.65
24	26	1	1	2	18.29
25	2	2	1	1	17.55
26	20	1	2	1	20.85
27	16	1	2	1	20.50
28	1	1	1	2	22.29
29	12	2	1	1	20.65
\.


--
-- Data for Name: fact_shapes_dataset; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.fact_shapes_dataset (game_id, student_id, correct, incorrect, "time") FROM stdin;
1	6	0	6	20.90
2	1	1	5	17.79
3	5	0	6	20.59
4	22	5	1	19.79
5	23	6	0	17.46
6	24	5	1	19.86
7	19	1	5	20.47
8	2	2	4	20.52
9	2	0	6	21.11
10	26	3	3	19.14
11	9	2	4	15.94
12	22	3	3	20.89
13	27	4	2	20.06
14	11	4	2	19.94
15	11	6	0	21.47
16	15	0	6	19.30
17	8	5	1	20.15
18	6	3	3	19.14
19	22	3	3	20.54
20	2	6	0	22.83
21	14	3	3	19.07
22	5	6	0	21.08
23	7	5	1	22.38
24	26	6	0	19.84
25	2	2	4	19.36
26	20	2	4	19.86
27	16	5	1	20.65
28	1	4	2	21.48
29	12	4	2	20.00
\.


--
-- Data for Name: fact_teacher_survey_dataset; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.fact_teacher_survey_dataset (student_id, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16) FROM stdin;
1	1	3	3	1	1	3	2	2	3	2	2	2	4	2	4	3
2	4	4	2	3	3	1	2	3	2	1	4	1	2	3	3	3
3	2	1	1	3	1	1	3	2	2	1	1	2	4	2	3	2
4	1	2	4	3	3	1	1	3	4	3	1	3	3	2	2	3
5	3	2	1	2	4	2	3	2	4	4	3	4	2	2	4	3
6	4	1	3	2	3	2	1	4	1	3	2	1	3	4	4	2
7	2	1	2	4	1	4	3	2	2	1	1	2	3	2	3	3
8	2	2	3	1	2	2	1	3	4	4	2	4	3	3	2	3
9	4	4	2	3	1	3	1	4	1	1	2	4	3	3	3	2
10	1	2	3	2	1	1	4	2	1	2	4	2	2	2	3	2
11	1	3	2	4	1	3	2	4	2	1	2	2	2	4	3	4
12	4	2	2	1	2	1	2	4	3	2	2	4	3	2	3	3
13	3	3	2	2	1	2	4	1	4	2	1	2	3	3	2	2
14	2	4	2	2	2	2	1	1	3	2	1	3	3	3	2	2
15	2	2	3	3	1	4	1	2	1	4	2	3	4	4	3	2
16	1	3	1	1	2	2	2	1	1	4	3	2	3	2	3	2
17	3	4	3	1	3	4	1	2	3	2	1	4	4	3	3	3
18	4	3	3	1	3	2	1	1	4	1	3	3	4	2	2	3
19	2	4	2	4	3	1	2	3	1	4	2	1	2	2	4	3
20	1	3	4	2	1	3	4	4	4	4	1	4	3	2	3	4
21	3	1	2	2	1	2	4	1	2	4	3	2	3	3	2	2
22	1	2	2	3	2	1	4	2	1	2	2	2	3	2	4	2
23	2	3	3	4	4	4	1	1	4	1	3	3	3	3	3	2
24	1	1	3	2	1	3	2	4	4	1	3	4	3	4	2	2
25	4	1	1	2	1	1	3	1	4	4	1	2	3	3	2	3
26	2	2	2	1	2	2	2	2	2	4	1	2	2	4	3	3
27	3	2	2	1	4	1	2	3	1	2	4	1	3	2	2	3
28	4	3	1	1	1	2	3	1	2	1	3	2	3	3	2	3
29	4	4	2	1	3	4	1	3	2	2	2	2	2	2	2	3
30	1	1	3	3	1	2	2	1	2	3	2	2	2	4	2	2
31	6	5	6	5	6	6	5	5	6	6	6	6	4	4	4	4
32	5	6	5	5	6	6	5	5	5	6	5	6	4	4	3	4
33	6	6	5	6	6	5	6	6	6	6	5	6	3	4	4	3
34	1	2	1	2	1	2	3	1	2	1	1	1	3	3	3	4
35	3	4	2	2	1	2	2	1	1	2	3	1	3	4	3	3
36	1	4	2	4	4	1	2	1	4	2	3	1	4	3	2	3
37	2	1	1	1	4	2	2	1	3	1	1	4	3	2	3	3
38	2	1	3	1	1	1	1	3	1	2	1	1	4	3	3	2
39	2	2	2	2	3	1	2	4	3	2	3	2	3	2	3	3
40	1	3	3	2	4	1	1	1	2	4	2	2	2	3	4	2
41	2	4	2	2	1	4	2	4	1	2	3	1	2	3	4	3
42	1	2	2	4	1	3	1	2	1	4	2	4	3	2	3	4
43	3	3	1	1	2	3	4	3	3	1	2	1	4	3	2	3
44	4	3	2	4	2	1	3	1	2	3	2	2	2	3	2	2
45	1	2	4	1	2	2	1	2	2	3	1	4	3	3	3	3
46	4	3	2	1	2	4	3	1	2	3	2	2	4	2	3	3
47	3	4	2	3	2	1	2	3	4	3	1	2	2	2	3	3
48	4	1	1	2	3	2	1	4	1	2	1	2	2	4	3	2
49	4	1	4	4	4	1	2	3	1	4	1	4	2	4	2	2
50	3	1	4	2	2	4	3	2	1	1	1	3	3	3	3	4
51	1	1	3	2	2	3	3	2	1	1	1	1	2	3	2	3
52	3	4	1	3	2	1	3	2	2	4	2	3	2	3	2	3
53	2	2	1	1	1	3	2	1	2	1	4	2	3	3	2	2
54	2	4	2	1	4	2	2	3	1	1	2	2	4	2	2	4
55	1	4	2	3	2	4	2	3	3	3	1	2	3	4	2	2
56	2	1	1	4	1	4	1	4	3	3	4	2	2	2	2	4
57	3	4	1	3	2	1	1	2	1	2	2	2	3	2	2	2
58	1	4	2	4	3	2	1	2	2	1	1	3	4	2	2	2
59	2	4	1	2	2	1	3	4	3	2	4	1	4	3	4	2
60	4	1	2	2	3	2	2	1	1	4	1	2	2	3	4	4
61	1	3	3	4	3	3	4	4	4	2	4	3	2	4	2	3
62	4	2	2	2	1	4	3	3	3	3	2	2	3	3	4	2
63	1	4	3	2	2	1	1	2	3	2	1	2	2	2	2	4
64	2	2	2	4	2	1	3	4	1	1	4	4	3	4	4	4
65	2	2	2	4	1	1	4	2	1	4	3	2	2	4	3	2
66	2	4	3	3	2	3	4	4	1	3	1	1	3	3	2	2
\.


--
-- Data for Name: fact_writing_dataset; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.fact_writing_dataset (game_id, student_id, png_file, "time") FROM stdin;
1	5	dsadadawawdfxff	10.23
2	6	dsadaddsdswdfxff	5.22
3	7	dsadagfgwdfxff	11.24
\.


--
-- Name: dim_class dim_class_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.dim_class
    ADD CONSTRAINT dim_class_pkey PRIMARY KEY (teacher_id);


--
-- Name: dim_parent dim_parent_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.dim_parent
    ADD CONSTRAINT dim_parent_pkey PRIMARY KEY (parent_id);


--
-- Name: dim_student dim_student_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.dim_student
    ADD CONSTRAINT dim_student_pkey PRIMARY KEY (student_id);


--
-- Name: dim_teacher dim_teacher_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.dim_teacher
    ADD CONSTRAINT dim_teacher_pkey PRIMARY KEY (teacher_id);


--
-- Name: fact_autism_teacher_survey_dataset fact_autism_teacher_survey_dataset_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.fact_autism_teacher_survey_dataset
    ADD CONSTRAINT fact_autism_teacher_survey_dataset_pkey PRIMARY KEY (student_id);


--
-- Name: fact_emotions_dataset fact_emotions_dataset_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.fact_emotions_dataset
    ADD CONSTRAINT fact_emotions_dataset_pkey PRIMARY KEY (game_id);


--
-- Name: fact_shapes_dataset fact_shapes_dataset_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.fact_shapes_dataset
    ADD CONSTRAINT fact_shapes_dataset_pkey PRIMARY KEY (game_id);


--
-- Name: fact_teacher_survey_dataset fact_teacher_survey_dataset_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.fact_teacher_survey_dataset
    ADD CONSTRAINT fact_teacher_survey_dataset_pkey PRIMARY KEY (student_id);


--
-- Name: fact_writing_dataset fact_writing_dataset_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.fact_writing_dataset
    ADD CONSTRAINT fact_writing_dataset_pkey PRIMARY KEY (game_id);


--
-- Name: dim_student dim_student_parent_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.dim_student
    ADD CONSTRAINT dim_student_parent_id_fkey FOREIGN KEY (parent_id) REFERENCES public.dim_parent(parent_id);


--
-- Name: fact_autism_teacher_survey_dataset fact_autism_teacher_survey_dataset_student_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.fact_autism_teacher_survey_dataset
    ADD CONSTRAINT fact_autism_teacher_survey_dataset_student_id_fkey FOREIGN KEY (student_id) REFERENCES public.dim_student(student_id);


--
-- Name: fact_emotions_dataset fact_emotions_dataset_student_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.fact_emotions_dataset
    ADD CONSTRAINT fact_emotions_dataset_student_id_fkey FOREIGN KEY (student_id) REFERENCES public.dim_student(student_id);


--
-- Name: fact_shapes_dataset fact_shapes_dataset_student_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.fact_shapes_dataset
    ADD CONSTRAINT fact_shapes_dataset_student_id_fkey FOREIGN KEY (student_id) REFERENCES public.dim_student(student_id);


--
-- Name: fact_teacher_survey_dataset fact_teacher_survey_dataset_student_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.fact_teacher_survey_dataset
    ADD CONSTRAINT fact_teacher_survey_dataset_student_id_fkey FOREIGN KEY (student_id) REFERENCES public.dim_student(student_id);


--
-- Name: fact_writing_dataset fact_writing_dataset_student_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.fact_writing_dataset
    ADD CONSTRAINT fact_writing_dataset_student_id_fkey FOREIGN KEY (student_id) REFERENCES public.dim_student(student_id);


--
-- PostgreSQL database dump complete
--

