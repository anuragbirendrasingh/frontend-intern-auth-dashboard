# Frontend - Task Management Assignment

## Stack
- React.js
- TailwindCSS
- React Router DOM
- Axios for API calls
- Context API for Auth

## Folder Structure
- Components/ → TaskCreate, TaskList, TaskItem, TaskFilters, Navbar
- Context/ → AuthContext for global auth state
- Pages/ → Login, Signup, Dashboard, WelcomePage
- Utils/ → Axios instance for API requests

## Features
1. Landing page with Login & Signup buttons
2. JWT-based authentication
3. Dashboard:
   - Create task
   - List tasks
   - Delete task
   - Update status (pending → in-progress → completed)
   - Filter tasks by status
4. Logout
5. Default profile photo based on gender
6. Responsive UI with Tailwind

## Notes
- Axios includes token in headers automatically
- Components are split for maintainability
