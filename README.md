# usage:
# 1. nowy obraz od zera:
```bash
docker-compose -f docker/docker-compose.yml down --volumes --remove-orphans
docker volume prune -f
docker-compose -f docker/docker-compose.yml up --build
```
# zeby wdrozyc cloud-sql:
```bash
docker exec -it docker-db-1 bash
pg_dump -U postgres postgres_db > /tmp/dump.sql
docker cp docker-db-1:/tmp/dump.sql ./dump.sql
- i wgranie dump.sql na baze cloud sql
```
# zeby wdrozyc cloud-run:
```bash
docker build -f docker/Dockerfile -t gcr.io/psychological-app-a359c/backend backend
backend-postgres-django % docker push gcr.io/psychological-app-a359c/backend
gcloud run deploy backend-postgres-django \          
  --image gcr.io/psychological-app-a359c/backend \
  --platform managed \
  --region europe-central2 \
  --allow-unauthenticated
```

# 🌩️ CloudComputing: Educational Platform with Role-Based Access

**A full-stack application for teachers, students, and parents with cloud infrastructure (link to the demo UI-frontend hosting http://psychological-app-a359c-frontend.storage.googleapis.com/index.html)**  
*Combining React/Vite frontend, Django backend, PostgreSQL database, and Firebase authentication*

## 🚀 Tech Stack Overview
| Component       | Technology                          | Description                                                                 |
|-----------------|-------------------------------------|-----------------------------------------------------------------------------|
| **Frontend**    | React + Vite                        | Responsive web interface with role-based navigation                         |
| **Mobile App**  | React Native (in `apka_tablet`)     | Tablet-optimized experience for young students                              |
| **Backend**     | Django (in `backend`)               | REST API with CORS support, connected to frontend                           |
| **Database**    | PostgreSQL (in `database`)          | Primary data storage for user profiles, grades, and educational content    |
| **Auth**       | Firebase                            | Secure user authentication with role management                             |
| **Infrastructure** | Terraform (in `terraform`)       | Cloud provisioning and infrastracture-as-a-code                               |

## 👥 Role-Based Access System
### 🔐 Authentication Flow
- Firebase handles user registration/login
- JWT tokens for session management
- Password reset functionality

### 🎯 User Roles
| Role      | Access Features                                                                 |
|-----------|---------------------------------------------------------------------------------|
| **Student** | 🎮 Interactive games<br>😊 Emotion tracking dashboard<br>📚 Learning materials |
| **Teacher** | 👨‍🏫 Class management<br>📊 Performance analytics<br>💬 Parent communication |
| **Parent**  | 👶 Child progress monitoring<br>🔔 Notifications<br>📩 Teacher messaging     |
| *Unauthenticated* | ℹ️ "About Us"<br>🧠 Psychological resources                                |

## 🛠️ Development Setup
```bash
# 1. Clone repository
git clone https://github.com/paninka123321/CloudComputing.git
cd CloudComputing

# 2. Install dependencies
npm install
pip install -r backend/requirements.txt

# 4. Run development servers
npm run dev & python backend/manage.py runserver
