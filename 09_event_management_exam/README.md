# 🎉 Event Management Backend API

A clean and scalable Node.js + Express.js REST API for managing events with full CRUD functionality, file uploads, and MongoDB integration.

---

## 🚀 Features

- Create events with images (banner & posters)
- Get all events
- Get single event by ID
- Update events (partial update supported)
- Delete events with automatic file cleanup
- File upload system using Multer
- MongoDB + Mongoose integration
- Centralized error handling
- Automatic old file removal on update/delete

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- Multer
- FS (File System)

---

## 📁 Project Structure

controller/
└── controller.js

model/
└── model.js

middleware/
└── HttpError.js

uploads/
└── event-banner
└── event-poster

---

## 📌 API Endpoints

### Create Event
POST /api/events
<img width="1440" height="941" alt="Screenshot 2026-06-09 133235" src="https://github.com/user-attachments/assets/3d2eccd3-626c-4f5c-9b03-722b41d0c1b3" />

Form Data:
- eventName
- eventDate
- eventVenue
- description
- ticketPrice
- eventBanner (file)
- eventPoster (multiple files)

---

### Get All Events
GET /api/events
<img width="1434" height="917" alt="Screenshot 2026-06-09 133410" src="https://github.com/user-attachments/assets/c7cc17cc-9a11-4dd7-9c94-e5d1f2d8720b" />




---

### Update Event
PUT /api/events/:id
<img width="1439" height="941" alt="Screenshot 2026-06-09 133519" src="https://github.com/user-attachments/assets/ce9d4be8-6d44-4312-b96f-e2b80b54e5c9" />


Supports:
- Partial update
- Image replacement

---

### Delete Event
DELETE /api/events/:id
<img width="1436" height="922" alt="Screenshot 2026-06-09 133621" src="https://github.com/user-attachments/assets/3ca8ed2b-8ee8-4791-b202-ac6ac554ef83" />


- Deletes event from DB
- Removes uploaded files

---
## 🔐 Environment Variables

Create .env file:

PORT=5000
MONGO_URI=your_mongodb_connection_string

---

## ▶️ Run Project

npm run dev

Server runs on:
http://localhost:5000

---

## 📦 Dependencies

express  
mongoose  
dotenv  
multer  
fs  

---

## 🧠 Future Improvements

- JWT Authentication
- Admin Panel
- Pagination & Filtering
- Cloud Storage (Cloudinary / AWS S3)
- Booking System

---

## 👨‍💻 Author

Prince — Made with  using Node.js + Express

