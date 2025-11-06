/* Enhanced interactions and UI feedback (presentation-only) */

const toast = (text, timeout=2200) => {
  const el = document.getElementById('toast');
  el.textContent = text;
  el.classList.add('show');
  clearTimeout(el._t);
  el._t = setTimeout(()=> el.classList.remove('show'), timeout);
};

/* ML Risk */
document.getElementById('mlBtn').onclick = () => {
  const score = Math.round(Math.random()*100);
  const band = score > 75 ? 'HIGH' : (score > 40 ? 'MEDIUM' : 'LOW');
  const el = document.getElementById('mlResult');
  el.textContent = `Risk score: ${score} (${band})`;
  el.style.color = band === 'HIGH' ? '#ff6b6b' : (band === 'MEDIUM' ? '#f6c84c' : '#8be88b');
  toast(`ML risk: ${band} (${score})`);
};

/* Fingerprint */
document.getElementById('fpBtn').onclick = () => {
  const fp = [
    navigator.userAgent || 'ua',
    screen.width + 'x' + screen.height,
    navigator.language || 'lang',
    new Date().getTimezoneOffset()
  ].join('|');
  let h = 2166136261;
  for(let i=0;i<fp.length;i++){
    h ^= fp.charCodeAt(i);
    h += (h << 1) + (h << 4) + (h << 7) + (h << 8) + (h << 24);
  }
  const id = 'fp_' + (Math.abs(h) % 10_000_000).toString(36);
  document.getElementById('fpResult').textContent = `Fingerprint: ${id}`;
  toast('Fingerprint generated');
};

/* OTP */
let currentOtp = null;
document.getElementById('otpSendBtn').onclick = () => {
  currentOtp = Math.floor(100000 + Math.random()*900000).toString();
  alert(`(Simulated) SMS OTP: ${currentOtp}`);
  document.getElementById('otpStatus').textContent = 'Status: OTP sent — awaiting entry';
  setTimeout(()=>{
    const entered = prompt('Enter the OTP you received');
    if(entered === currentOtp){
      document.getElementById('otpStatus').textContent = 'Status: OTP verified ✓';
      toast('OTP verified');
    } else {
      document.getElementById('otpStatus').textContent = 'Status: OTP failed ✗';
      toast('OTP failed', 1800);
    }
  }, 250);
};

/* Biometric */
document.getElementById('bioBtn').onclick = () => {
  const ok = confirm('Simulate biometric verification:\nPress OK for success, Cancel for fail.');
  document.getElementById('bioStatus').textContent = `Biometric: ${ok ? 'Verified ✓' : 'Failed ✗'}`;
  toast(`Biometric ${ok ? 'success' : 'failed'}`);
};

/* QR with countdown */
let qrTimer = null;
document.getElementById('qrBtn').onclick = () => {
  const token = 'QR-' + Math.random().toString(36).slice(2,10).toUpperCase();
  const expiry = Date.now() + 45000;
  document.getElementById('qrArea').textContent = token;
  document.getElementById('qrTimer').textContent = 'Timer: 45s';
  clearInterval(qrTimer);
  qrTimer = setInterval(()=>{
    const left = Math.max(0, Math.ceil((expiry - Date.now())/1000));
    document.getElementById('qrTimer').textContent = `Timer: ${left}s`;
    if(left <= 0){
      clearInterval(qrTimer);
      document.getElementById('qrArea').textContent = 'QR: EXPIRED';
      document.getElementById('qrTimer').textContent = 'Timer: expired';
      toast('QR expired', 1400);
    }
  }, 300);
  toast('QR token generated');
};

/* Transaction limits & audio */
let txnCount = 0;
const DAILY_LIMIT = 10000;
let spentToday = 0;
document.getElementById('txnBtn').onclick = () => {
  const amount = Math.floor(Math.random()*3000) + 100;
  txnCount += 1;
  spentToday += amount;
  const allowed = spentToday <= DAILY_LIMIT;
  document.getElementById('txnInfo').textContent = `Transactions today: ${txnCount} — Spent: ₹${spentToday} — Limit: ₹${DAILY_LIMIT} — Allowed: ${allowed ? 'Yes ✓' : 'No ✗'}`;
  if(allowed){
    playSuccess();
    toast(`Transaction ₹${amount} — approved`);
  } else {
    toast(`Transaction ₹${amount} — blocked (limit)`, 2200);
  }
};

/* Sound */
function playSuccess(){
  const audio = document.getElementById('successAudio');
  // try play; catch promise rejection (browser autoplay policies)
  const p = audio.play();
  if(p !== undefined){
    p.catch(()=> {
      // suppressed: user gesture required
      toast('Click the page then press Play Sound', 2200);
    });
  }
}
document.getElementById('playSoundBtn').onclick = playSuccess;

/* Help button (if you add one) */
const helpBtn = document.getElementById('helpBtn');
if(helpBtn) helpBtn.onclick = () => {
  alert('Use the buttons to show each feature. Sound may require a click on the page first.');
};

/* accessibility: allow click anywhere to enable audio gesture */
document.body.addEventListener('click', () => {}, { once: true });
