# Sign-Up and Sign-In System

This project implements a basic authentication system using TypeScript, Express, and MongoDB. It includes APIs for user registration (sign-up) and user login (sign-in).

## Features
- User sign-up with first name, last name, email, and password.
- User sign-in with email and password.
- Password hashing using bcrypt.
- MongoDB for data storage.

## Prerequisites
- Node.js (v20.13.1)
- MongoDB (v7.0.9)

## Getting Started

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/express-ts-auth.git
   cd express-ts-auth
   npm install

   Create a .env file in the root directory and add your MongoDB URI:
   MONGO_URI=mongodb://27017.0.0.1:27017/auth

   Running the Server by the command:
   > npm start

   The server will start on port: 5000
   ```

   ## API Endpoints
   1. Sign-Up
  URL: /api/users/signUp
  Method: POST
  Description: Register a new user.
  Request Body:
  {
  "firstName": "Jayesh",
  "lastName": "wadhe",
  "email": "jayeshwadhe.tech@gmail.com",
  "password": "your_password"
}
Response:- Success: 201 Created
{
  "message": "User registered successfully"
}
Error: 400 Bad Request (User already exists)
{
  "message": "User already exists"
}

2. Sign-In
URL: api/users/signIn
Method: POST
Description: Authenticate an existing user.
Request Body:
{
  "email": "jayeshwadhe.tech@gmail.com",
  "password": "yourpassword"
}
Response: Success: 200 OK
{
  "message": "Sign-In successful"
}
Error: 400 Bad Request (Invalid credentials)
{
  "message": "Invalid credentials"
}
















