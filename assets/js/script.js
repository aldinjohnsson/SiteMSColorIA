// FAQ toggle
function toggleFaq(el) {
  el.classList.toggle('open');
  const answer = el.nextElementSibling;
  answer.classList.toggle('open');
}

// Credits tab toggle
function switchCreditsTab(type) {
  document.getElementById('tab-pre').classList.toggle('active', type === 'pre');
  document.getElementById('tab-pos').classList.toggle('active', type === 'pos');
  document.getElementById('content-pre').classList.toggle('active', type === 'pre');
  document.getElementById('content-pos').classList.toggle('active', type === 'pos');
}

// Payment tab toggle (pré/pós inside each product card)
function switchPaymentTab(btn, mode, cardId) {
  const card = btn.closest('.product-card');
  // Update tab buttons
  card.querySelectorAll('.payment-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  // Update content panels
  card.querySelectorAll('.payment-content').forEach(c => {
    c.classList.toggle('active', c.dataset.mode === mode);
  });
}

// Period toggle (mensal/anual inside pré-pago)
function switchPeriod(btn, period, group) {
  const container = btn.closest('.product-card');
  // Update period buttons
  container.querySelectorAll('.period-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  // Show/hide period content
  document.querySelectorAll(`[data-period-group="${group}"]`).forEach(c => {
    c.classList.toggle('active', c.dataset.period === period);
  });
}

// Plan option selection (highlight selected)
function selectPlanOption(el) {
  const container = el.closest('.period-content');
  if (container) {
    container.querySelectorAll('.plan-option').forEach(o => o.classList.remove('popular'));
    el.classList.add('popular');
  }
}

// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, 100);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

reveals.forEach(el => observer.observe(el));