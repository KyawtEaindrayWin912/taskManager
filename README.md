# 📝 Task Manager - Monorepo

This is the main repository for the **Task Manager** project, containing both the backend (Node.js/Express/Prisma) and frontend (React/MUI) applications.

---

## 🚀 Project Overview

- **Backend:** RESTful API server with JWT authentication, SQLite database via Prisma ORM, and secure password hashing.
- **Frontend:** Modern React SPA styled with Material UI (MUI), featuring user auth, robust task management, and a responsive UI.

---

## 📂 Repository Structure

```
taskManager/
│
├── task-backend/     # Backend server (Express/Prisma/SQLite)
│   └── README.md
│
├── task-frontend/    # Frontend SPA (React/MUI)
│   └── README.md
│
└── README.md         # This file
```

---

## 📦 Quick Start

### 1. Clone the repo

```bash
git clone https://github.com/your-username/taskManager.git
cd taskManager
```

---

### 2. Setup Backend

See [task-backend/README.md](./task-backend/README.md) for full details.

<details>
<summary>Quick Start</summary>

```bash
cd task-backend
npm install
# Setup .env (see sample in backend README)
npx prisma migrate dev --name init
npx prisma generate
node index.js
# or for development
npx nodemon index.js
```
</details>

---

### 3. Setup Frontend

See [task-frontend/README.md](./task-frontend/README.md) for full details.

<details>
<summary>Quick Start</summary>

```bash
cd task-frontend
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) (or whichever port is shown).
</details>

---

## ⚙️ Configuration

- **Backend API URL:** The frontend expects the backend at `http://localhost:8080`. Change `/src/services/api.js` in the frontend if your backend runs elsewhere.

---

## 🌟 Features

- User registration and JWT-based login.
- Secure, protected task API endpoints.
- Task CRUD: create, view, edit, delete.
- Search, filter, sorting, and pagination.
- Responsive, modern UI with light/dark mode.

---

## 🧪 Testing

- Test backend endpoints with Postman/Thunder Client (`Authorization: Bearer <token>` header required).
- Use the web app for full workflow: Register → Login → Dashboard.

---

## 📜 License

MIT

---

## 📚 More

See the [task-backend](./task-backend/README.md) and [task-frontend](./task-frontend/README.md) READMEs for in-depth setup and usage.
