# devops-project
# MERN Product Management App

A full-stack MERN (MongoDB, Express, React, Node.js) application for managing products. Users can **add**, **update**, **delete**, and **view** products through a user-friendly interface with support for **dark and light mode**.

## 🚀 Features

- 🔍 View a list of all products  
- ➕ Add new products  
- ✏️ Edit product details  
- 🗑️ Delete products  
- 🌗 Toggle between Dark Mode and Light Mode  

## 🛠 Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB

## 📦 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/InesBenDhaou/devops-project.git
cd devops-project
```
### 2. Install Dependencies

```bash
cd ../frontend
npm install
cd backend
npm install
```
### 3. Environment Variables
Create a .env file in the backend directory with the following content:
```bash
MONGODB_URI=mongodb://localhost:27017/product-app
PORT=5000
```

### 4. Run the App

```bash
cd backend
node server.js
cd ../frontend
npm run dev
```

