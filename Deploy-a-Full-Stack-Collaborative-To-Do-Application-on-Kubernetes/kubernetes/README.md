# Kubernetes Manifests for Full-Stack App (Golang + React + PostgreSQL + Redis)

## What’s included
- `postgres.yaml` — Secret, PVC, Deployment, Service (persistent storage)
- `redis.yaml` — Deployment, Service
- `backend.yaml` — Deployment, Service
- `frontend.yaml` — Deployment, Service
- `ingress.yaml` — Ingress for frontend (`/`) and backend API (`/api`)
- `message-analysis-job.yaml` — one-off Job to trigger `/api/analyze`
- `cleanup-cronjob.yaml` — daily CronJob to trigger `/api/cleanup`

## Quick start

1) Replace image placeholders with your images:
   - `your-docker-registry/backend:latest`
   - `your-docker-registry/frontend:latest`

2) (Optional) Add local DNS for testing:
   ```
   127.0.0.1 app.local
   ```

3) Apply:
   ```bash
   kubectl apply -f postgres.yaml
   kubectl apply -f redis.yaml
   kubectl apply -f backend.yaml
   kubectl apply -f frontend.yaml
   kubectl apply -f ingress.yaml
   # Optional scheduled/one-off tasks:
   kubectl apply -f message-analysis-job.yaml
   kubectl apply -f cleanup-cronjob.yaml
   ```

4) Verify:
   ```bash
   kubectl get pods -o wide
   kubectl get svc
   kubectl get ingress
   ```

### Notes
- Postgres uses a PersistentVolumeClaim (PVC) so your data survives pod restarts.
- The Ingress assumes you have an ingress controller (e.g., NGINX Ingress) installed.
- The backend listens on port `8080` and exposes `/api/analyze` and `/api/cleanup`.
- The frontend is served on port `80` from an Nginx container.
