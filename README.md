# 📝 Task Manager App

A full-stack Task Manager / To-Do App built with:

- 🧠 **React + MUI (frontend)**
- ⚙️ **Express.js + Prisma + SQLite (backend)**
- 🔒 User authentication with JWT
- ✅ Features like search, sort, filter, pagination, dark mode, and more!

---

## 🚀 Features

- 🧑‍💼 User Registration & Login
- ✅ Create, Edit, Delete tasks
- 📅 Set deadlines
- 🔍 Search, Sort, and Filter tasks
- 📊 Pagination (e.g. 1–5 of 18 tasks)
- 🌙 Dark/Light Mode toggle
- 🔐 JWT Authentication (with `Authorization` headers)
- 💾 "Remember Me" & "Show Password"
- ⚠️ Error handling + loading spinners

---

## 🧩 Tech Stack

| Layer     | Stack                                 |
|-----------|----------------------------------------|
| Frontend  | React + Vite + Material UI (MUI)       |
| Backend   | Express.js + Prisma ORM                |
| Database  | SQLite                                 |
| Auth      | JWT + bcryptjs                         |

---

## 🛠 Installation

### 1. Clone the project

```bash
git clone https://github.com/KyawtEaindrayWin912/taskManager
cd taskManager

### 2. Install backend dependencies

```bash
cd task-backend
npm install

#### 3. Set up the database

```bash
npx prisma migrate dev --name init

### 4.Start backend

```bash
node index.js
# or if using nodemon
npx nodemon index.js

### 5. Install frontend dependencies

```bash
cd task-frontend
npm install
npm start

### 🧪 API Testing
Use Postman or Thunder Client with headers:
Authorization: Bearer YOUR_JWT_TOKEN

👩‍💻 Author
Kyawt Eaindray Win

💼 Final-year ICT student

🎯 Interested in Full Stack & AI

🌐 GitHub Profile



