/* Modern clean UI with subtle motion */
:root{
  --bg:#0f1724;
  --panel:#0b1220;
  --soft:#e6eef8;
  --muted:#9aa6b2;
  --accent1:#2b6cb0;
  --accent2:#7c3aed;
  --glass: rgba(255,255,255,0.03);
  --card-radius:14px;
  --shadow: 0 10px 30px rgba(2,6,23,0.6);
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
}

*{box-sizing:border-box}
html,body{height:100%}
body{
  margin:0;
  background: radial-gradient(1200px 600px at 10% 10%, rgba(124,58,237,0.12), transparent 6%),
              linear-gradient(180deg,#071028 0%, #071223 40%, #071428 100%);
  color:var(--soft);
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
  padding:28px;
}

/* Topbar */
.topbar{
  max-width:1100px;
  margin:0 auto 18px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:12px;
}
.brand{display:flex;gap:12px;align-items:center}
.logo{width:48px;height:48px;flex:0 0 48px;border-radius:10px;box-shadow:0 6px 16px rgba(124,58,237,0.2)}
.title{font-weight:700;font-size:16px}
.subtitle{font-size:12px;color:var(--muted)}

/* Container */
.container{max-width:1100px;margin:0 auto;padding:8px 0 60px}

/* Grid layout */
.grid{
  display:grid;
  grid-template-columns:repeat(2,1fr);
  gap:16px;
}
.card{background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
  border-radius:var(--card-radius); padding:18px; box-shadow:var(--shadow);
  border:1px solid rgba(255,255,255,0.03); transition:transform .28s cubic-bezier(.2,.9,.3,1), box-shadow .28s;
  will-change:transform;
}
.card:hover{transform:translateY(-6px); box-shadow: 0 16px 40px rgba(2,6,23,0.7);}

/* Wide card spans two columns */
.card.wide{grid-column:1/-1}
.card.centered{text-align:center}

/* Headings inside cards */
.card-head{display:flex;align-items:baseline;justify-content:space-between;gap:8px}
.card-head h3{margin:0;font-size:15px}
.card-head small{color:var(--muted);font-size:12px}

/* Typography */
.muted{color:var(--muted);margin:8px 0 12px;font-size:13px}
.mono{font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, "Roboto Mono", monospace; font-size:13px; color:var(--soft); margin-left:8px}
.status{font-weight:600;color:var(--soft)}
.info{margin-left:8px;font-weight:600;color:var(--soft)}

/* Actions row */
.card-actions{display:flex;align-items:center;gap:12px;flex-wrap:wrap}
.card-actions.column{flex-direction:column;align-items:flex-start}

/* Buttons */
button{cursor:pointer;border:0;padding:10px 14px;border-radius:10px;font-weight:600;display:inline-flex;align-items:center;gap:8px}
.primary{background:linear-gradient(90deg,var(--accent1),var(--accent2)); color:white; box-shadow:0 8px 24px rgba(44,78,144,0.16); transition:transform .12s ease, box-shadow .12s}
.primary:active{transform:translateY(1px)}
.primary.outline{background:transparent;border:1px solid rgba(255,255,255,0.06); color:var(--soft); box-shadow:none}
.primary.lg{padding:14px 20px;font-size:16px}
.ghost{background:transparent;color:var(--muted);padding:8px 10px;border-radius:8px;border:1px solid rgba(255,255,255,0.02)}

.badge{
  margin-left:auto;padding:8px 12px;border-radius:999px;background:linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.02));font-weight:700;
}

/* QR area */
.qr-wrap{display:flex;gap:12px;align-items:center;margin-top:8px}
.qr-box{width:180px;height:120px;display:flex;align-items:center;justify-content:center;background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));border-radius:10px;border:1px dashed rgba(255,255,255,0.04);font-family:monospace;color:var(--soft)}
.timer{color:var(--muted);font-weight:600}

/* footer */
.footer{max-width:1100px;margin:18px auto 0;display:flex;justify-content:space-between;color:var(--muted);font-size:13px}

/* Toast */
.toast{
  position:fixed;left:50%;transform:translateX(-50%) translateY(20px);bottom:28px;padding:10px 18px;background:linear-gradient(90deg,var(--accent2),var(--accent1));color:white;border-radius:12px;box-shadow:0 10px 30px rgba(2,6,23,0.6);opacity:0;pointer-events:none;transition:opacity .26s, transform .26s;
}
.toast.show{opacity:1;transform:translateX(-50%) translateY(0);pointer-events:auto}

/* Responsive */
@media (max-width:880px){
  .grid{grid-template-columns:1fr}
  .qr-box{width:100%;height:120px}
  .card-actions{justify-content:flex-start}
}
