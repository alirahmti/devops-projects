// Backend base URL: same-origin '/api' by default so this works behind the
// Ingress/Nginx reverse proxy without any rebuild. Override by defining
// window.BACKEND_URL before this script loads if you need a different host.
const BACKEND_URL = window.BACKEND_URL || '';

const FALLBACK_PRODUCTS = [
  { id: 1, name: 'Kubernetes Cluster Kit', price: 129, tag: 'Infra' },
  { id: 2, name: 'CI/CD Pipeline Template', price: 49, tag: 'Automation' },
  { id: 3, name: 'HAProxy Load Balancer', price: 79, tag: 'Networking' },
  { id: 4, name: 'Nginx SSL Bundle', price: 39, tag: 'Security' },
  { id: 5, name: 'Ansible Playbook Pack', price: 59, tag: 'Automation' },
  { id: 6, name: 'MetalLB Config Set', price: 45, tag: 'Networking' }
];

function renderProducts(products) {
  const grid = document.getElementById('product-grid');
  grid.innerHTML = '';
  products.forEach(p => {
    const card = document.createElement('div');
    card.className = 'card glass';
    card.innerHTML = `
      <span class="card-tag">${p.tag}</span>
      <h3>${p.name}</h3>
      <div class="price">$${p.price}</div>
    `;
    grid.appendChild(card);
  });
}

async function loadProducts() {
  try {
    const res = await fetch(`${BACKEND_URL}/api/products`);
    if (!res.ok) throw new Error('bad response');
    const data = await res.json();
    renderProducts(data.products);
  } catch (err) {
    // Backend not reachable yet — show static fallback so the page never looks broken.
    renderProducts(FALLBACK_PRODUCTS);
  }
}

function setPill(state, text) {
  const pill = document.getElementById('status-pill');
  const label = document.getElementById('status-pill-text');
  pill.classList.remove('checking', 'online', 'offline');
  pill.classList.add(state);
  label.textContent = text;
}

async function checkBackend(showResultBox) {
  setPill('checking', 'در حال بررسی...');
  const resultBox = document.getElementById('status-result');
  if (showResultBox) {
    resultBox.className = 'status-result';
    resultBox.textContent = 'در حال ارسال درخواست به سرویس...';
  }
  try {
    const start = performance.now();
    const res = await fetch(`${BACKEND_URL}/api/status`);
    const ms = Math.round(performance.now() - start);
    if (!res.ok) throw new Error('non-200');
    const data = await res.json();
    setPill('online', 'Backend Online');
    if (showResultBox) {
      resultBox.className = 'status-result ok';
      resultBox.textContent = `✅ ${data.message} — پاسخ در ${ms}ms از ${data.hostname}`;
    }
  } catch (err) {
    setPill('offline', 'Backend Offline');
    if (showResultBox) {
      resultBox.className = 'status-result fail';
      resultBox.textContent = '❌ اتصال به Backend برقرار نشد. سرویس در دسترس نیست.';
    }
  }
}

document.getElementById('check-btn').addEventListener('click', () => checkBackend(true));

loadProducts();
checkBackend(false);
// re-check connection status every 20s to keep the nav pill honest
setInterval(() => checkBackend(false), 20000);
