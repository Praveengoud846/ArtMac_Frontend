# Task Manager Frontend (React)

This is a simple task management frontend application built with **React**. It allows users to:
- Add new tasks
- Filter tasks by status (`PENDING` / `DONE`)
- Mark tasks as done
- Delete tasks

It interacts with a **Spring Boot backend** via RESTful APIs.

# repository
git clone -b artmac_frontend https://github.com/Praveengoud846/ArtMac_Frontend

- Backend running at: `http://localhost:8080`
# API Endpoints Used
GET /tasks — fetch all tasks

POST /tasks — add a new task

PUT /tasks/{id} — update task status

DELETE /tasks/{id} — delete a task

GET /tasks/status/{status} — filter tasks by status

# Tech Stack
React 18
Axios
React Router DOM
CSS Modules (optional)
Spring Boot (backend)