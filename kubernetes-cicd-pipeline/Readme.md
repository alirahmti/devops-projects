# 🚀 Kubernetes CI/CD Pipeline Demo

> A complete DevOps project demonstrating Docker, Kubernetes, GitLab CI/CD, and Private Container Registry integration.



# 📖 Overview

This project demonstrates how to build, test, and deploy a containerized application to a Kubernetes cluster using **GitLab CI/CD**.

The main focus of this repository is **Infrastructure Automation** rather than application development.



# ✨ Features

- 🐳 Dockerized Application
- ☸️ Kubernetes Deployment
- 🌐 Kubernetes Service
- ⚙️ ConfigMap Configuration
- 🚪 Ingress Configuration
- 🔒 Private Docker Registry
- 🔑 Image Pull Secret
- 🔄 GitLab CI/CD Pipeline
- 🧪 Parent/Child Pipeline
- 🚀 Automatic Deployment (Development)
- 🎯 Manual Deployment (Production)



# 📂 Project Structure

```text
.
├── app/
│   ├── main.py
│   └── requirements.txt
│
├── docker/
│   └── Dockerfile
│
├── kubernetes/
│   ├── deployment.yaml
│   ├── service.yaml
│   ├── ingress.yaml
│   ├── configmap.yaml
│   └── secret.yaml
│
├── .gitlab/
│   └── ci/
│       └── test.yml
│
├── .gitlab-ci.yml
│
├── screenshots/
│
└── README.md
```



# ⚙️ CI/CD Pipeline

The GitLab pipeline consists of three main stages.

## 🏗️ Build

- Build Docker Image
- Tag Docker Image
- Push Image to Private Registry



## 🧪 Test

The test stage is executed using a **Child Pipeline**.

✔ Parent Pipeline

⬇

✔ Child Pipeline



## 🚀 Deploy

### Development Environment

- Trigger: Every push to the **dev** branch
- Deployment: **Automatic**



### Production Environment

- Trigger: Git Tag
- Deployment: **Manual**



# ☸️ Kubernetes Resources

The following Kubernetes manifests are included:

| Resource | Description |
|----------|-------------|
| 📦 Deployment | Runs the application Pods |
| 🌐 Service | Exposes the application |
| ⚙️ ConfigMap | Stores configuration values |
| 🚪 Ingress | External HTTP Access |
| 🔑 Secret | Private Registry Authentication |



# 🔒 Private Container Registry

Docker images are stored in a **Private Registry**.

The Kubernetes cluster is configured to authenticate using **ImagePullSecrets** before pulling images.



# 🛠️ Technologies

| Tool | Purpose |
|------|---------|
| 🐳 Docker | Containerization |
| ☸️ Kubernetes | Container Orchestration |
| 🦊 GitLab CI/CD | Continuous Integration & Deployment |
| 📦 Container Registry | Image Storage |
| 🐧 Linux | Operating System |
| 🌿 Git | Version Control |

# 🔄 Deployment Workflow

```text
👨‍💻 Developer

        │
        ▼

📤 Git Push

        │
        ▼

🦊 GitLab CI/CD

        │
        ▼

🏗️ Build Docker Image

        │
        ▼

📦 Push to Private Registry

        │
        ▼

🧪 Run Tests (Child Pipeline)

        │
        ▼

☸️ Deploy to Kubernetes

        │
        ▼

🌍 Application Available via Ingress
```



# 🎯 Purpose

This project was created as a **DevOps training project** to demonstrate real-world deployment practices.

It covers:

- ✅ Docker Image Creation
- ✅ Private Registry Authentication
- ✅ Kubernetes Deployment
- ✅ GitLab CI/CD Automation
- ✅ Parent/Child Pipelines
- ✅ Automatic Development Deployment
- ✅ Manual Production Deployment



# 📸 Screenshots

> Add screenshots here after running the project.

Example:

- 📷 GitLab Pipeline
- 📷 Kubernetes Pods
- 📷 Application Running
- 📷 Ingress Access



# 👨‍💻 Author

**Ali Rahmati**

DevOps • Docker • Kubernetes • GitLab CI/CD • Linux

---

# ⭐ If you like this project

Don't forget to give it a ⭐ on GitHub!
