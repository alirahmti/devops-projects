# 🛍️ DevOps Shop — Full Stack Educational Project

A sample project for learning **DevOps** concepts through a real-world workflow. 🚀

This project is a simple **online shop** consisting of:

- 🎨 **Frontend:** A modern static website with a beautiful **Liquid Glass** UI
- ⚙️ **Backend:** A lightweight **Node.js + Express** REST API
- 🐳 **Docker:** Ready for containerization
- 🦊 **GitLab CI/CD:** Automated build, test, image publishing, and deployment
- ☸️ **Kubernetes:** Production-ready deployment manifests

The goal is to demonstrate the complete DevOps lifecycle, from development to deployment.



# 📁 Project Structure

```text
devops-shop/
├── backend/              # Node.js + Express API
│   ├── src/index.js
│   ├── package.json
│   └── Dockerfile
├── frontend/             # Static HTML/CSS/JS with Liquid Glass UI (Nginx)
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   ├── nginx.conf
│   └── Dockerfile
├── k8s/                  # Kubernetes manifests
│   ├── namespace.yaml
│   ├── backend-deployment.yaml
│   ├── backend-service.yaml
│   ├── frontend-deployment.yaml
│   ├── frontend-service.yaml
│   └── ingress.yaml
└── .gitlab-ci.yml        # Complete CI/CD Pipeline
```



# 💻 Run Locally (Without Docker)

## 🚀 Start the Backend

```bash
cd backend
npm install
npm start
```

API Endpoint:

```
http://localhost:3000/api/status
```



## 🌐 Start the Frontend

Open another terminal:

```bash
cd frontend
python3 -m http.server 8080
```

Then open:

```
http://localhost:8080
```

> ⚠️ **Note**
>
> When running locally **without the Nginx reverse proxy**, update the `window.BACKEND_URL`
> variable inside `index.html` to:
>
> ```javascript
> http://localhost:3000
> ```
>
> This ensures the frontend can communicate with the backend API correctly.


# 🐳 Run with Docker

## Build Images

```bash
docker build -t devops-shop-backend ./backend
docker build -t devops-shop-frontend ./frontend
```

## Create Docker Network

```bash
docker network create devops-shop-net
```

## Run Containers

```bash
docker run -d \
  --name backend-service \
  --network devops-shop-net \
  -p 3000:3000 \
  devops-shop-backend

docker run -d \
  --name frontend \
  --network devops-shop-net \
  -p 8080:8080 \
  devops-shop-frontend
```

Now open:

```
http://localhost:8080
```

✨ The Nginx server inside the frontend container automatically proxies every `/api` request to the backend container (`backend-service`) as configured in `nginx.conf`.


# 🦊 GitLab CI/CD Pipeline

The project includes a complete GitLab CI/CD pipeline with **4 stages**:

| Stage | Description |
|--------|-------------|
| 🔨 **Build** | Install backend dependencies |
| 🧪 **Test** | Start the backend and verify the `/health` endpoint |
| 🐳 **Docker** | Build and push frontend & backend images to GitLab Container Registry |
| ☸️ **Deploy** | Replace image names inside Kubernetes manifests and deploy using `kubectl apply` |


# 🔐 Required GitLab CI/CD Variables

Navigate to:

> **Settings → CI/CD → Variables**

Create the following variable:

| Variable | Description |
|----------|-------------|
| 🔑 `KUBE_CONFIG_B64` | Base64-encoded kubeconfig of your Kubernetes cluster |

Generate it with:

```bash
cat ~/.kube/config | base64 -w0
```


## 📦 GitLab Registry Variables

The following variables are automatically provided by GitLab Container Registry:

- ✅ `CI_REGISTRY`
- ✅ `CI_REGISTRY_IMAGE`
- ✅ `CI_REGISTRY_USER`
- ✅ `CI_REGISTRY_PASSWORD`


# 🔒 Private Container Registry

If your GitLab Container Registry is **private**, create the following Kubernetes Secret so the cluster can pull your images:

```bash
kubectl create secret docker-registry gitlab-registry-secret \
  --docker-server=$CI_REGISTRY \
  --docker-username=$CI_REGISTRY_USER \
  --docker-password=$CI_REGISTRY_PASSWORD \
  -n devops-shop
```


# ☸️ Manual Kubernetes Deployment (Without CI/CD)

Deploy the Kubernetes resources:

```bash
kubectl apply -f k8s/namespace.yaml
kubectl apply -f k8s/backend-service.yaml
kubectl apply -f k8s/frontend-service.yaml
kubectl apply -f k8s/ingress.yaml
```

Then replace the image references manually (or use `sed` exactly like the Deploy stage in the CI pipeline):

```bash
sed 's|${CI_REGISTRY_IMAGE}|<your-registry-image-path>|g; s|${CI_COMMIT_SHORT_SHA}|latest|g' \
  k8s/backend-deployment.yaml | kubectl apply -f -

sed 's|${CI_REGISTRY_IMAGE}|<your-registry-image-path>|g; s|${CI_COMMIT_SHORT_SHA}|latest|g' \
  k8s/frontend-deployment.yaml | kubectl apply -f -
```


# 🌍 Access the Application

After deployment, add the following host entry to your local machine:

```
devops-shop.local
```

Point it to the IP address of your **Ingress Controller** (or **MetalLB** if you're using a bare-metal Kubernetes cluster).

Then simply open:

```
http://devops-shop.local
```

🎉 Your DevOps Shop application is now up and running!


# 🎯 Technologies Used

- 🟢 Node.js
- ⚡ Express.js
- 🌐 HTML5
- 🎨 CSS3
- 💎 JavaScript
- 🌐 Nginx
- 🐳 Docker
- 🦊 GitLab CI/CD
- ☸️ Kubernetes
- 🔀 Git
- 📦 GitLab Container Registry


# 📚 Learning Objectives

This project is designed to help you learn:

- ✅ Building REST APIs
- ✅ Creating modern static web applications
- ✅ Docker image creation
- ✅ Docker networking
- ✅ Reverse Proxy with Nginx
- ✅ GitLab CI/CD Pipelines
- ✅ GitLab Container Registry
- ✅ Kubernetes Deployments
- ✅ Kubernetes Services
- ✅ Kubernetes Ingress
- ✅ Automated deployments
- ✅ Infrastructure as Code (IaC)


# 👨‍💻 Author

**Ali Rahmati**

⭐ If this project helps you learn DevOps, consider giving it a star!
