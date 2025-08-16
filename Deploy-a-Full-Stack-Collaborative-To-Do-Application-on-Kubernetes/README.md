# Full-Stack Application: Golang, React, PostgreSQL, Redis, Jobs, and CronJobs

## Overview

This project is a full-stack application designed for students to learn and practice building and deploying a modern web application. The application features:

- **Backend**: A RESTful API built with Golang for managing users and messages, secured with JWT-based authentication.
- **Frontend**: A React application for user interaction and message management.
- **Database**: PostgreSQL for persistent data storage.
- **Cache**: Redis for caching frequently accessed data and session management.
- **Jobs and CronJobs**: Kubernetes Jobs for one-time tasks and CronJobs for periodic tasks.
- **Networking**: Students will create Kubernetes **Service** and **Ingress** resources to expose the application.

Students will implement, extend, and deploy this application to better understand full-stack development, containerized deployment, scheduled task management, and Kubernetes networking.

---

## Project Directory Structure

```
project/
├── backend/
│   ├── main.go
│   ├── go.mod
│   ├── go.sum
│   └── Dockerfile
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Auth/
│   │   │   │   ├── Login.js
│   │   │   │   ├── Register.js
│   │   │   └── MessageDashboard.js
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   ├── Dockerfile
├── kubernetes/
│   ├── backend-deployment.yaml
│   ├── frontend-deployment.yaml
│   ├── postgres-deployment.yaml
│   ├── redis-deployment.yaml
│   ├── ingress.yaml
│   ├── cleanup-cronjob.yaml
│   └── message-analysis-job.yaml
└── README.md
```

---

## Features to Implement

### Backend (Golang)
1. Implement user registration and login functionality.
2. Secure the application using JWT-based authentication.
3. Develop APIs for:
   - Creating, fetching, and deleting messages.
   - Analyzing messages (e.g., count the number of messages per user).
   - Cleaning up old messages (older than 30 days).
4. Use Redis to cache frequently accessed data.

### Frontend (React)
1. Create a user interface with:
   - Login and registration forms.
   - A dashboard to display and manage messages.
   - A section for viewing analytics.
2. Ensure the application interacts with the backend APIs.

### Kubernetes Networking
1. Create a **Service** for the backend to expose it internally within the cluster.
   - Use `ClusterIP` for internal communication with other pods.
   - Ensure the frontend can communicate with the backend through this service.

2. Create a **Service** for the frontend to expose it internally.

3. Create a Kubernetes **Ingress** resource to expose the frontend and backend APIs externally.
   - Map the frontend to `/` (e.g., `http://app.local/`).
   - Map the backend to `/api` (e.g., `http://app.local/api`).

4. Add required annotations to the Ingress for URL rewriting and other configurations.

### Kubernetes Jobs and CronJobs
1. Deploy the Kubernetes Job to analyze messages and verify its output in the logs.
2. Deploy the Kubernetes CronJob for periodic cleanup and check that old messages are removed daily.

---

## Learning Goals

By completing this project, students will:
1. Understand how to create a RESTful API in Golang.
2. Learn to use PostgreSQL and Redis for database and caching.
3. Gain experience in creating a React-based frontend.
4. Learn how to containerize an application using Docker.
5. Understand how to manage scheduled tasks using Kubernetes Jobs and CronJobs.
6. Gain practical knowledge of Kubernetes networking by creating and configuring Services and Ingress.

---

## Instructions

### Backend
1. Navigate to the `backend/` directory.
2. Review the `main.go` file to understand the structure of the backend application.
3. Implement missing functionality such as:
   - JWT-based authentication.
   - CRUD operations for messages.
   - Message analysis and cleanup tasks.
4. Use the provided Dockerfile to containerize the backend.

### Frontend
1. Navigate to the `frontend/` directory.
2. Review the `src/` directory for React components.
3. Implement the forms and pages for:
   - User login and registration.
   - Message dashboard for creating, viewing, and deleting messages.
   - Analytics view.
4. Test the frontend by running the development server locally.

### Kubernetes Networking
1. Write a **Service** for the backend to expose it on port `8080`.
2. Write a **Service** for the frontend to expose it on port `80`.
3. Write an **Ingress** configuration to:
   - Expose the frontend at `/`.
   - Expose the backend API at `/api`.
4. Test the Ingress configuration by accessing the application using its domain name.

### Jobs and CronJobs
1. Deploy the Kubernetes Job to analyze messages and verify its output in the logs.
2. Deploy the Kubernetes CronJob for periodic cleanup and check that old messages are removed daily.

---

## How to Get Started

### Prerequisites
- Install Docker.
- Install Node.js (for frontend development).
- Install Go (for backend development).
- Install Kubernetes (minikube or other cluster).

### Steps
1. Clone this repository:
   ```bash
   git clone <repository-url>
   ```
2. Follow the instructions in the backend and frontend directories to build and run the application.
3. Deploy the Kubernetes manifests for the Job, CronJob, Services, and Ingress.

---

## Deliverables

1. Fully implemented backend and frontend.
2. Docker images for the backend and frontend.
3. Kubernetes manifests for:
   - Job
   - CronJob
   - Services
   - Ingress
4. Screenshots of the application and logs from the Job and CronJob.

---

## Support

If you encounter any issues, please contact the instructor or refer to the documentation provided for Golang, React, PostgreSQL, Redis, and Kubernetes.
