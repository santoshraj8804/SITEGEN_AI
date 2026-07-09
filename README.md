# 🚀 SiteGen AI - AI Website Builder

> **Build, customize, and deploy AI-powered websites instantly using a simple text prompt.**

SiteGen AI is a full-stack SaaS application that leverages **OpenRouter (DeepSeek AI)** to generate complete websites in seconds. Users can securely sign in, create websites with AI, export the generated code, and deploy their websites with a single click to receive a live shareable URL.

---

## ✨ Features

- 🤖 AI-powered website generation from text prompts
- 🎨 Modern, clean & responsive UI
- 🔐 Secure Google Authentication using Firebase
- 💳 Razorpay payment integration
- 📂 Personal dashboard to manage generated websites
- ⚡ Export generated HTML, CSS & JavaScript code
- 🌐 One-click website deployment
- 🔗 Automatically generates a live shareable website URL
- 📱 Fully responsive across desktop, tablet & mobile

---

## 🛠️ Tech Stack

| Frontend | Backend | Database | AI | Others |
|-----------|----------|----------|----|--------|
| React.js, Vite, Tailwind CSS, Redux Toolkit | Node.js, Express.js | MongoDB | OpenRouter (DeepSeek AI) | Firebase, Razorpay |

---

## 📁 Project Structure

```text
SiteGen_AI/
│
├── frontend/
├── backend/
└── README.md
```

---

## ⚙️ Installation

### 1️⃣ Clone the Repository

```bash
git clone <repository-url>
cd SiteGen_AI
```

### 2️⃣ Install Dependencies

#### Backend

```bash
cd backend
npm install
npm run dev
```

#### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 🔑 Environment Variables

### Backend (`backend/.env`)

```env
MONGODB_URI=your_mongodb_uri

JWT_SECRET=your_jwt_secret

OPENROUTER_API_KEY=your_openrouter_api_key

RAZORPAY_KEY_ID=your_razorpay_key

RAZORPAY_SECRET=your_razorpay_secret
```

### Frontend (`frontend/.env`)

```env
VITE_API_URL=http://localhost:8000

VITE_FIREBASE_API_KEY=your_firebase_api_key

VITE_RAZORPAY_KEY=your_razorpay_key
```

---

## 🚀 Usage

1. Clone this repository.
2. Install all project dependencies.
3. Configure the required `.env` files.
4. Start the backend server.
5. Start the frontend application.
6. Open **http://localhost:5173** in your browser.
7. Sign in using Google Authentication.
8. Describe the website you want to build.
9. Click **Generate Website**.
10. AI instantly generates a fully functional website.
11. Preview and manage your generated website.
12. Export the generated source code if needed.
13. Click **Deploy** to publish your website.
14. Receive a **live shareable URL** that can be opened from any device or shared with others.

---

## 🌍 Website Deployment

One of the key features of **SiteGen AI** is instant deployment.

After generating your website, simply click the **Deploy** button.

The application automatically:

- 🚀 Deploys the generated website
- 🌐 Hosts it online
- 🔗 Generates a unique live website URL
- 📤 Makes the website accessible from anywhere
- 🤝 Allows easy sharing without any manual hosting setup

---

## 📦 Main Packages

### Frontend

- ⚛️ React
- ⚡ Vite
- 🎨 Tailwind CSS
- 🔄 Redux Toolkit
- 🔥 Firebase
- 🌐 Axios
- 💳 Razorpay

### Backend

- 🚀 Express.js
- 🍃 MongoDB (Mongoose)
- 🔐 JWT Authentication
- 🌐 CORS
- 🔑 Dotenv
