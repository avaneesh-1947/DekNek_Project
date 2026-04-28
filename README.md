# MERN Authentication App

A full-stack MERN authentication application built with:

* React + Vite + CSS
* TanStack Query
* Node.js + Express
* MongoDB + Mongoose
* JWT Authentication
* Refresh Tokens
* HTTP-only Cookies

---

# Features

## Authentication

* User Signup
* User Login
* Secure Logout
* Protected Routes
* JWT Access Tokens
* Refresh Token Authentication
* Auto Token Refresh using Axios Interceptors
* HTTP-only Secure Cookies

## Backend Features

* Express REST API
* MongoDB Database Integration
* Mongoose Models
* Middleware-based Authentication
* Secure Password Hashing using bcryptjs
* Cookie-based Session Handling

## Frontend Features

* Responsive UI using Tailwind CSS
* Protected Routing
* TanStack Query Integration
* Axios API Layer
* Automatic Token Refresh
* Clean Navbar + Footer

---

# Tech Stack

## Frontend

* React
* Vite
* Tailwind CSS
* React Router DOM
* Axios
* TanStack Query

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcryptjs
* cookie-parser
* cors

---

# Folder Structure

## Backend Structure

```bash
backend/
├── src/
│   ├── auth/
│   │   ├── auth.controller.js
│   │   └── auth.route.js
│   │
│   ├── config/
│   │   ├── config.js
│   │   └── db.js
│   │
│   ├── middleware/
│   │   └── auth.middleware.js
│   │
│   ├── models/
│   │   └── user.model.js
│   │
│   ├── utils/
│   │   └── generatetokens.js
│   │
│   ├── app.js
│   └── index.js
│
├── .env
├── package.json
└── package-lock.json
```

---

## Frontend Structure

````bash
frontend/
├── src/
│   ├── api/
│   │   └── axios.js
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   └── Profile.jsx
│   │
│   ├── routes/
│   │   └── ProtectedRoute.jsx
│   │
│   ├── services/
│   │   └── authService.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .env
├── package.json
└── vite.config.js

````

---

# Environment Variables

## Backend `.env`

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

ACCESS_TOKEN_SECRET=your_access_secret
REFRESH_TOKEN_SECRET=your_refresh_secret

NODE_ENV=development
```

---

## Frontend `.env`

```env
VITE_API_URL=http://localhost:5000/api
```

---

# Installation

## Clone Repository

```bash
git clone your_repo_url
```

---

# Backend Setup

```bash
cd backend
npm install
npm run dev
```

---

# Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

# Authentication Flow

```text
Login
  ↓
Backend creates JWT tokens
  ↓
HTTP-only cookies stored in browser
  ↓
Protected routes use access token
  ↓
Expired token automatically refreshed
  ↓
User stays logged in
```

---

# API Routes

## Authentication Routes

| Method | Route             | Description          |
| ------ | ----------------- | -------------------- |
| POST   | /api/auth/signup  | Register user        |
| POST   | /api/auth/login   | Login user           |
| POST   | /api/auth/refresh | Refresh access token |
| POST   | /api/auth/logout  | Logout user          |
| GET    | /api/auth/me      | Get current user     |

---

# Security Features

* Password hashing using bcryptjs
* JWT authentication
* Refresh token rotation
* HTTP-only cookies
* Protected API routes
* Secure CORS configuration

---

# Future Improvements

* Role-based Authentication
* Notes CRUD System
* Profile Management
* Rate Limiting
* Email Verification
* Password Reset
* Dashboard Analytics

---

# Author

Built using MERN Stack with secure JWT Authentication.
