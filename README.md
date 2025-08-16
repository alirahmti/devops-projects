# 🚀 DevOps Projects

Welcome to **DevOps Projects** — a collection of hands-on practice projects for learning and mastering DevOps.  
This repository covers different stages of the DevOps journey including **Docker**, **Kubernetes**, **CI/CD**, **monitoring**, **logging**, and more (etc.).  

The goal is to provide **step-by-step, real-world examples** that grow in complexity — from simple containerized apps to full production-ready environments.  


## 📂 Repository Structure

Each project lives in its own directory with its **source code**, **Dockerfiles**, **Kubernetes manifests**, and a dedicated `README.md` for setup instructions.  

```

devops-projects/
├── fullstack-to-do-application/
│   └── README.md   # Detailed guide for this project
├── another-project/
│   └── README.md
└── ...

```


## 📝 Projects

Here’s the list of available projects:  

### [**fullstack-to-do-application/**](./fullstack-to-do-application)  
A full-stack application demonstrating a modern DevOps workflow.  

**Tech stack:**  
- ⚙️ **Backend:** Golang (REST API with PostgreSQL + Redis integration)  
- 🎨 **Frontend:** React (served via Nginx)  
- 🗄️ **Database:** PostgreSQL with PersistentVolume + PersistentVolumeClaim  
- ⚡ **Cache/Session:** Redis  
- ☸️ **Kubernetes:** Deployments, Services, Ingress  
- ⏰ **Jobs & CronJobs:** message analysis & cleanup tasks  

**Kubernetes Manifests included:**  
- `postgres.yaml` → Secret, PersistentVolume, PersistentVolumeClaim, Deployment, Service  
- `redis.yaml` → Deployment + Service  
- `backend.yaml` → Deployment + Service (with readiness/liveness probes)  
- `frontend.yaml` → Deployment + Service  
- `ingress.yaml` → Ingress mapping `/` → frontend and `/api` → backend  
- `message-analysis-job.yaml` → Job calling `/api/analyze` endpoint  
- `cleanup-cronjob.yaml` → CronJob calling `/api/cleanup` daily  



## 🎯 Learning Goals

By working through these projects, you will:

- 🐳 Learn containerization with **Docker**  
- ☸️ Deploy apps on **Kubernetes**  
- 🔄 Build **CI/CD pipelines**  
- 📊 Implement **monitoring & logging**  
- 🛠️ Gain practical, end-to-end DevOps experience  


## 🤝 Contributing

This repo is meant for **training and learning**.  
Feel free to fork it, open issues, or submit pull requests with improvements.  


## 📌 Notes

- Each project is **self-contained** — you can explore them independently.  
- Start small, then progress to more advanced examples.  
- New tools and technologies will be added over time. 🚀  
