# Task Manager Application

This is a Task Manager application built with Django Rest Framework for the backend and React for the frontend.

## Setup Instructions

### 1. Clone the Repository

git clone https://github.com/EngFaizan/Task_Manager

Open project in VSCode
Open a nw terminal in VSCode

# 2. Start the Backend Server

Navigate to the backend directory: cd backend

Install Django Rest Framework and CORS Headers:
pip install djangorestframework django-cors-headers

### Run Migrations:
python manage.py migrate

### Start the Django development server:
python manage.py runserver

The backend server will start running on http://localhost:8000.

### 3. Start the Frontend Server
Ensure you have Node.js and npm installed on your system.

Open new terminal in VSCode
Navigate to the frontend directory: cd frontend
Install dependencies:
npm install

Start the React development server:
npm start

The frontend server will start running on http://localhost:3000.

Usage
Once both the backend and frontend servers are running, you can access the Task Manager application by visiting http://localhost:3000 in your web browser.

You can perform CRUD (Create, Read, Update, Delete) operations on tasks using the application.

Note
Make sure both backend and frontend servers are running simultaneously to use the full functionality of the application.
