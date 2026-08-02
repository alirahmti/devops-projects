const express = require('express');
const cors = require('cors');
const os = require('os');

const app = express();
const PORT = process.env.PORT || 3000;
const START_TIME = Date.now();

app.use(cors());
app.use(express.json());

// ---------------------------------------------------------------------
// Simple in-memory "shop" data — enough to prove the API layer is alive
// and can be called from the frontend without needing a real database.
// ---------------------------------------------------------------------
const products = [
  { id: 1, name: 'Kubernetes Cluster Kit', price: 129, tag: 'Infra' },
  { id: 2, name: 'CI/CD Pipeline Template', price: 49, tag: 'Automation' },
  { id: 3, name: 'HAProxy Load Balancer', price: 79, tag: 'Networking' },
  { id: 4, name: 'Nginx SSL Bundle', price: 39, tag: 'Security' },
  { id: 5, name: 'Ansible Playbook Pack', price: 59, tag: 'Automation' },
  { id: 6, name: 'MetalLB Config Set', price: 45, tag: 'Networking' }
];

// Root — quick human-readable landing for the API itself
app.get('/', (req, res) => {
  res.json({
    service: 'devops-shop-backend',
    message: 'Backend successfully online ✅',
    hostname: os.hostname(),
    uptime_seconds: Math.floor((Date.now() - START_TIME) / 1000)
  });
});

// Status endpoint — what the frontend calls to prove connectivity
app.get('/api/status', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Backend successfully online ✅',
    hostname: os.hostname(),
    timestamp: new Date().toISOString(),
    uptime_seconds: Math.floor((Date.now() - START_TIME) / 1000)
  });
});

// Simple product listing, used by the shop UI
app.get('/api/products', (req, res) => {
  res.json({ count: products.length, products });
});

// Kubernetes health probes
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy' });
});

app.get('/ready', (req, res) => {
  res.status(200).json({ status: 'ready' });
});

app.listen(PORT, () => {
  console.log(`[devops-shop-backend] listening on port ${PORT}`);
});
