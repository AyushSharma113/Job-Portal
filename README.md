
# 🧑‍💼 Job Portal - MERN Stack

A full-featured **Job Portal** web application built using the **MERN Stack (MongoDB, Express, React, Node.js)** with **Cloudinary** for image storage and **Multer** for handling file uploads.

---

## 🚀 Features

- 🔐 **User Authentication**
  - Register / Login (JWT-based)
  - Role-based access: Job Seekers & Employers

- 🧾 **Job Management**
  - Employers can post, edit, delete jobs
  - Job seekers can browse and apply

- 📁 **Resume & Image Upload**
  - Employers upload company logos
  - Applicants upload resumes/images using **Multer**
  - Files stored on **Cloudinary**

- 🔍 **Advanced Job Search & Filtering**
  - Search by title, location, category, type

- 🧑‍💼 **Profile Management**
  - Update profile details and profile picture

- 📈 **Dashboard**
  - Separate dashboards for Employers and Job Seekers
  - View jobs posted, applications made, etc.

---

## 🛠️ Tech Stack

### 💻 Frontend
- React
- React Router
- Axios
- Tailwind CSS / Bootstrap (your choice)

### 🌐 Backend
- Node.js
- Express.js
- MongoDB (via Mongoose)
- JWT (Authentication)
- Multer (File Upload Middleware)
- Cloudinary (Image Storage)

---

## 📁 Folder Structure

```

job-portal/
├── client/               # React frontend
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── context/
│       └── App.jsx
├── server/               # Node.js backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── utils/
│   └── index.ts / index.js
├── .env
├── README.md

````

---

## ⚙️ Environment Variables

Create a `.env` file in the root of the `server/` directory:

```env
PORT=5000
MONGODB_URI=your_mongo_connection_string
SECRET_KEY=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
````

---

## 📦 Installation

```bash
# Clone the repo
git clone https://github.com/AyushSharma113/job-Portal.git
cd job-portal

# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install
```

---

## 🧪 Run Locally

### 🚀 Start Backend

```bash
cd server
npm run dev
```

### 🌐 Start Frontend

```bash
cd client
npm run dev
```


## ☁️ File Upload (Multer + Cloudinary)

* Uses **Multer** to handle file uploads (profile images, resumes).
* Files are then uploaded to **Cloudinary**, and URLs are stored in MongoDB.

---


## 🧑‍💻 Authors

* [Ayush kumar Sharma](https://github.com/AyushSharma113)
* Open for collaboration!

---
