# Backend - Task Management Assignment

## Stack
- Node.js + Express
- MongoDB + Mongoose
- JWT Authentication
- Bcrypt for password hashing

## Folder Structure
- controllers/ → API logic
- middleware/ → protect routes
- models/ → User & Task models
- routes/ → auth & task routes
- utils/ → validations

## APIs
### Auth
- POST `/auth/signup` → Create user
- POST `/auth/signin` → Login user
- GET `/auth/profile` → Get logged in user (protected)

### Tasks
- POST `/task/createTask` → Create task (protected)
- GET `/task/getTasks` → Fetch tasks (protected)
- PUT `/task/updateTask/:id` → Update task (protected)
- DELETE `/task/deleteTask/:id` → Delete task (protected)

## Security
- Passwords hashed with bcrypt
- JWT-based auth middleware
- Validation on both client & server

## Notes
- Default profile photo is assigned based on gender
- Proper error handling in all APIs
