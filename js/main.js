document.addEventListener('DOMContentLoaded', () => {
  if (typeof lucide !== 'undefined') lucide.createIcons();
  initAll();
});

function initAll() {
  initCustomCursor();
  initParticles();
  initTypingEffect();
  initScrollReveal();
  init3DTilt();
  initMobileMenu();
  initSmoothScroll();
  initNavHighlight();
  initYear();
}

/* Custom Cursor */
function initCustomCursor() {
  if (window.matchMedia('(pointer: coarse)').matches) return;
  const dot = document.querySelector('.cursor-dot');
  const outline = document.querySelector('.cursor-outline');
  if (!dot || !outline) return;

  let mx = 0, my = 0, ox = 0, oy = 0;
  document.addEventListener('mousemove', (e) => {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx + 'px'; dot.style.top = my + 'px';
  });

  function animate() {
    ox += (mx - ox) * 0.15; oy += (my - oy) * 0.15;
    outline.style.left = ox + 'px'; outline.style.top = oy + 'px';
    requestAnimationFrame(animate);
  }
  animate();

  document.querySelectorAll('a, button, .btn, .skill-category, .project-item, .cert-badge').forEach(el => {
    el.addEventListener('mouseenter', () => {
      dot.style.transform = 'translate(-50%, -50%) scale(2)';
      outline.style.transform = 'translate(-50%, -50%) scale(1.5)';
      outline.style.borderColor = 'var(--secondary)';
    });
    el.addEventListener('mouseleave', () => {
      dot.style.transform = 'translate(-50%, -50%) scale(1)';
      outline.style.transform = 'translate(-50%, -50%) scale(1)';
      outline.style.borderColor = 'var(--primary)';
    });
  });
}

/* Particles */
function initParticles() {
  const c = document.getElementById('particle-canvas');
  if (!c) return;
  const ctx = c.getContext('2d');
  let pts = [], aid, act = true;

  function resize() { c.width = window.innerWidth; c.height = window.innerHeight; }
  resize(); window.addEventListener('resize', resize);

  const pc = window.innerWidth < 768 ? 25 : 50, cd = 120, md = 180;
  class P {
    constructor() {
      this.x = Math.random() * c.width; this.y = Math.random() * c.height;
      this.vx = (Math.random() - 0.5) * 0.4; this.vy = (Math.random() - 0.5) * 0.4;
      this.s = Math.random() * 1.5 + 0.5;
    }
    up(mx, my) {
      this.x += this.vx; this.y += this.vy;
      if (this.x < 0 || this.x > c.width) this.vx *= -1;
      if (this.y < 0 || this.y > c.height) this.vy *= -1;
      const dx = mx - this.x, dy = my - this.y, d = Math.sqrt(dx * dx + dy * dy);
      if (d < md) { const f = (md - d) / md * 0.001; this.vx += dx * f; this.vy += dy * f; }
      const sp = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
      if (sp > 1.5) { this.vx = (this.vx / sp) * 1.5; this.vy = (this.vy / sp) * 1.5; }
    }
    dr() {
      ctx.beginPath(); ctx.arc(this.x, this.y, this.s, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(16, 185, 129, 0.5)'; ctx.fill();
    }
  }
  for (let i = 0; i < pc; i++) pts.push(new P());
  let mx = c.width / 2, my = c.height / 2;
  document.addEventListener('mousemove', (e) => { mx = e.clientX; my = e.clientY; });

  function dc() {
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y, d = Math.sqrt(dx * dx + dy * dy);
        if (d < cd) {
          ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y);
          ctx.strokeStyle = `rgba(16, 185, 129, ${(1 - d / cd) * 0.15})`; ctx.lineWidth = 0.5; ctx.stroke();
        }
      }
      const dx = mx - pts[i].x, dy = my - pts[i].y, d = Math.sqrt(dx * dx + dy * dy);
      if (d < md) {
        ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(mx, my);
        ctx.strokeStyle = `rgba(45, 212, 191, ${(1 - d / md) * 0.2})`; ctx.lineWidth = 0.5; ctx.stroke();
      }
    }
  }
  function animate() {
    if (!act) return; ctx.clearRect(0, 0, c.width, c.height);
    pts.forEach(p => { p.up(mx, my); p.dr(); }); dc(); aid = requestAnimationFrame(animate);
  }
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) { act = false; cancelAnimationFrame(aid); } else { act = true; animate(); }
  });
  animate();
}

/* Typing */
function initTypingEffect() {
  const el = document.getElementById('typing-text');
  if (!el) return;
  const rs = ['Java Full Stack Developer', 'Spring Boot Enthusiast', 'Backend Developer', 'Problem Solver'];
  let ri = 0, ci = 0, del = false;
  function type() {
    const cr = rs[ri];
    if (del) { el.textContent = cr.substring(0, ci - 1); ci--; }
    else { el.textContent = cr.substring(0, ci + 1); ci++; }
    let sp = del ? 40 : 100;
    if (!del && ci === cr.length) { sp = 2000; del = true; }
    else if (del && ci === 0) { del = false; ri = (ri + 1) % rs.length; sp = 500; }
    setTimeout(type, sp);
  }
  type();
}

/* Scroll Reveal */
function initScrollReveal() {
  const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .section-label, .section-title');
  const sc = document.querySelectorAll('.stagger-children');
  const o = new IntersectionObserver((es) => {
    es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('active'); o.unobserve(e.target); } });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
  els.forEach(el => o.observe(el)); sc.forEach(el => o.observe(el));
}

/* 3D Tilt */
function init3DTilt() {
  document.querySelectorAll('#heroPhoto, #aboutPhoto').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const r = card.getBoundingClientRect();
      const x = e.clientX - r.left, y = e.clientY - r.top;
      const rx = ((y - r.height / 2) / (r.height / 2)) * -8;
      const ry = ((x - r.width / 2) / (r.width / 2)) * 8;
      card.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });
  });
}

/* Mobile Menu */
function initMobileMenu() {
  const t = document.getElementById('menuToggle'), n = document.getElementById('navLinks');
  if (!t || !n) return;
  t.addEventListener('click', () => n.classList.toggle('active'));
  n.querySelectorAll('a').forEach(l => l.addEventListener('click', () => n.classList.remove('active')));
}

/* Smooth Scroll */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const h = this.getAttribute('href'); if (h === '#') return;
      const t = document.querySelector(h); if (!t) return;
      e.preventDefault(); t.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

/* Nav Highlight */
function initNavHighlight() {
  const ss = document.querySelectorAll('section[id]'), nl = document.querySelectorAll('.nav-links a');
  if (!ss.length || !nl.length) return;
  window.addEventListener('scroll', () => {
    let c = '';
    ss.forEach(s => { if (scrollY >= s.offsetTop - 100) c = s.getAttribute('id'); });
    nl.forEach(l => { l.classList.toggle('active', l.getAttribute('href') === '#' + c); });
  });
}

/* Year */
function initYear() {
  const y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();
}
