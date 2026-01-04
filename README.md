# 📝 Task Manager

A **Full-Stack Task Management Application** built using the **MERN stack**.
This app allows users to **register, log in, and manage their daily tasks** with secure authentication.

🔗 Repository: https://github.com/Ashish-Pawar-AP/Task-Manager

---

## 🚀 Features

- User Registration & Login (JWT Authentication)
- Create, Read, Update, Delete (CRUD) Tasks
- Tasks linked to individual users
- Protected routes using JWT
- Clean and scalable project structure

---

## 🗂️ Project Structure

```
Task-Manager/
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── config/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── .gitignore
├── package.json
└── README.md
```

---

## 🧩 Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcryptjs

### Frontend
- React.js
- JavaScript
- HTML, CSS

---

## 🛠️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Ashish-Pawar-AP/Task-Manager.git
cd Task-Manager
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the backend folder:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Start the backend server:

```bash
npm start
```

or

```bash
nodemon server.js
```

Backend runs on: `http://localhost:5000`

---

### 3. Frontend Setup

```bash
cd frontend
npm install
npm start
```

Frontend runs on: `http://localhost:3000`

---

## 📌 API Endpoints

### Authentication

| Method | Endpoint | Description |
|------|---------|-------------|
| POST | /api/auth/register | Register user |
| POST | /api/auth/login | Login user |

### Tasks (Protected)

| Method | Endpoint | Description |
|------|---------|-------------|
| GET | /api/tasks | Get all tasks |
| POST | /api/tasks | Create task |
| PUT | /api/tasks/:id | Update task |
| DELETE | /api/tasks/:id | Delete task |

Authorization Header:
```
Authorization: Bearer <JWT_TOKEN>
```

---

## 🧪 Testing

- Postman
- Thunder Client (VS Code)

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

Ashish Pawar  
GitHub: https://github.com/Ashish-Pawar-AP
