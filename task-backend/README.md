# 🔧 Task Manager - Backend

This is the **backend** of the Task Manager App built with **Node.js**, **Express**, **Prisma ORM**, and **SQLite**. It handles user authentication (JWT) and task CRUD operations through a RESTful API.

---

## 🚀 Features

- ✅ Register & Login using JWT  
- 🔐 Secure route access via auth middleware  
- 🗂️ CRUD operations for tasks  
- 📅 Task deadlines & completion status  
- 🌱 Uses SQLite (great for quick dev/testing)  
- 📦 Built with Express + Prisma  

---

## 🏗️ Setup & Installation

### 1. Clone the Repository

```bash
git clone https://github.com/KyawtEaindrayWin912/taskManager
cd taskManager/task-backend
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the `task-backend` directory:

```env
JWT_SECRET=your_super_secret_key
```

### 4. Set Up the Database

```bash
npx prisma migrate dev --name init
# Optional: generate Prisma client
npx prisma generate
```

### 5. Start the Backend Server

```bash
node index.js
# or if using nodemon
npx nodemon index.js
```

Server runs at:
📍 `http://localhost:8080`

---

## 🔐 API Authentication

Use **Bearer Token** authentication.
In your API client (Thunder Client, Postman, etc.), add this to headers:

```
Authorization: Bearer YOUR_JWT_TOKEN
```

---

## 📁 Folder Structure

```
task-backend/
├── prisma/
│   └── schema.prisma       # DB schema
├── routes/
│   ├── auth.js             # Auth routes
│   └── tasks.js            # Task routes
├── middleware/
│   └── authMiddleware.js   # JWT protection
├── .env                    # Environment variables
├── index.js                # Entry point
├── package.json
```

---

## 📄 API Endpoints

### Auth

* `POST /auth/register` → Create account
* `POST /auth/login` → Login and receive JWT

### Tasks (Requires JWT)

* `GET /tasks` → List all tasks
* `POST /tasks` → Add a new task
* `PUT /tasks/:id` → Update a task
* `DELETE /tasks/:id` → Delete a task

---

## 👩‍💻 Author

**Kyawt Eaindray Win**
🎓 Final-year ICT student
💼 Passionate about Full Stack & AI
🌐 GitHub: [KyawtEaindrayWin912](https://github.com/KyawtEaindrayWin912)

---





