# BoTneX

A futuristic AI assistant platform for building, managing, and monetizing personalized digital experiences.

## Overview

BoTneX brings together a sleek React frontend, a secure Express backend, and MongoDB-powered user management to deliver an AI assistant ecosystem with authentication, billing, and subscription flows.

## Features

- AI assistant setup and personalization
- Secure login and protected user routes
- Free and Pro subscription plans
- Razorpay-based payment checkout
- MongoDB persistence for user data and billing state
- Clean, responsive interface built with modern frontend tooling

## Tech Stack

- React + Vite
- Tailwind CSS
- Node.js + Express
- MongoDB + Mongoose
- JWT authentication
- Razorpay

## Project Structure

```bash
BoTneX/
├── client/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
├── server/
│   ├── Configs/
│   ├── Controllers/
│   ├── Middleware/
│   ├── Models/
│   ├── Routes/
│   ├── index.js
│   ├── .env
│   └── package.json
├── README.md
└── .gitignore
```

## Prerequisites

- Node.js 18+
- npm
- MongoDB Atlas or local MongoDB instance
- Razorpay account

## Installation

### 1. Clone the repo

```bash
git clone https://github.com/PriyanshuSingh00-hub/BoTneX.git
cd BoTneX
```

### 2. Install frontend dependencies

```bash
cd client
npm install
```

### 3. Install backend dependencies

```bash
cd ../server
npm install
```

### 4. Configure environment variables

Create `server/.env`:

```env
PORT=8000
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

Create `client/.env`:

```env
VITE_RAZORPAY_KEY_ID=your_public_razorpay_key
```

> Only the public Razorpay key should be exposed in the frontend.

## Run the App

### Backend

```bash
cd server
npm run dev
```

### Frontend

```bash
cd client
npm run dev
```

Open the app in your browser:

```bash
http://localhost:5173
```

## Scripts

### Server

```bash
npm run dev
```
Starts the backend with nodemon.

### Client

```bash
npm run dev
```
Starts the Vite dev server.

```bash
npm run build
```
Creates a production build.

## License

This project is currently unlicensed.

## Contributing

Contributions are welcome. Fork the repo, create a feature branch, and open a pull request.

---

Built for the next generation of AI-driven experiences.
