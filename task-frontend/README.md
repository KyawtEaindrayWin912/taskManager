
# 🖥️ Task Manager - Frontend

This is the frontend for the Task Manager App, built using **React** and styled with **MUI (Material UI)**. It interacts with a Node.js backend via RESTful APIs and supports full task CRUD, authentication, and UI features like search, filter, sort, pagination, dark mode, and more.

---

## ✨ Features

- ✅ Register & Login (JWT-based)
- 🧾 Create / Edit / Delete Tasks
- 🔍 Search, Filter, Sort tasks
- ⏰ Deadlines & Task Status
- 📄 Pagination & Task Counts
- 🌙 Light/Dark Mode toggle
- 👁️ Show Password toggle
- 💾 Remember Me support
- 🎨 Beautiful UI with Material UI

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/KyawtEaindrayWin912/taskManager
cd taskManager/task-frontend
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm start
```

The app will run at:
📍 `http://localhost:3000`

---

## 🔗 Backend Connection

Make sure your backend is running at:
`http://localhost:5000`

If needed, update `src/services/api.js`:

```js
const API = axios.create({
  baseURL: 'http://localhost:8080',
});
```

---

## 🧪 Pages

* `/` → Register
* `/login` → Login
* `/dashboard` → Task Manager (protected)

---

## 📁 Folder Structure

```
task-frontend/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── TaskCard.jsx
│   │   └── TaskForm.jsx
│   ├── pages/
│   │   ├── Register.jsx
│   │   ├── Login.jsx
│   │   └── Dashboard.jsx
│   ├── services/
│   │   └── api.js
│   ├── App.jsx
│   └── main.jsx
├── package.json
```

---

## 👩‍💻 Author

**Kyawt Eaindray Win**
🎓 Final-year ICT student
💼 Interested in Full Stack & AI
🌐 GitHub: [KyawtEaindrayWin912](https://github.com/KyawtEaindrayWin912)

---

```
