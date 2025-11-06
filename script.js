// Simple demo behaviours (no real backend)

// ML simulation
document.getElementById('mlBtn').onclick = () => {
  const score = Math.round(Math.random()*100);
  const band = score > 75 ? 'HIGH' : (score > 40 ? 'MEDIUM' : 'LOW');
  document.getElementById('mlResult').textContent = `Risk score: ${score} (${band})`;
};

// Device fingerprint (very simple)
document.getElementById('fpBtn').onclick = () => {
  const fp = [
    navigator.userAgent,
    screen.width + 'x' + screen.height,
    navigator.language,
    new Date().getTimezoneOffset()
  ].join('|');
  // simple hash
  let h = 0;
  for(let i=0;i<fp.length;i++){ h = ((h<<5)-h) + fp.charCodeAt(i); h |= 0; }
  document.getElementById('fpResult').textContent = `Fingerprint: fp_${Math.abs(h).toString(36).slice(0,10)}`;
};

// OTP simulation
let currentOtp = null;
document.getElementById('otpSendBtn').onclick = () => {
  currentOtp = Math.floor(100000 + Math.random()*900000).toString();
  alert(`(Simulated) SMS OTP sent: ${currentOtp}`);
  document.getElementById('otpStatus').textContent = 'Status: OTP sent (check alert)';
  // ask user to enter otp
  setTimeout(()=> {
    const entered = prompt('Enter the OTP you received (use the alert value)');
    if(entered === currentOtp) document.getElementById('otpStatus').textContent = 'Status: OTP verified ✓';
    else document.getElementById('otpStatus').textContent = 'Status: OTP failed ✗';
  }, 200);
};

// Biometric simulation
document.getElementById('bioBtn').onclick = async () => {
  // We cannot actually do biometrics in this demo; simulate success/failure
  const ok = confirm('Simulate biometric verification? Click OK = success, Cancel = fail');
  document.getElementById('bioStatus').textContent = `Biometric: ${ok ? 'Verified ✓' : 'Failed ✗'}`;
};

// Dynamic QR + timer
let qrTimerId=null;
document.getElementById('qrBtn').onclick = () => {
  // create a fake token and expiry (45 seconds)
  const token = 'qr_' + Math.random().toString(36).slice(2,10);
  const expiry = Date.now() + 45000;
  document.getElementById('qrArea').textContent = `Token: ${token}`;
  clearInterval(qrTimerId);
  qrTimerId = setInterval(()=> {
    const left = Math.max(0, Math.floor((expiry - Date.now())/1000));
    document.getElementById('qrTimer').textContent = `Timer: ${left}s`;
    if(left<=0) {
      clearInterval(qrTimerId);
      document.getElementById('qrArea').textContent = 'QR: EXPIRED';
      document.getElementById('qrTimer').textContent = 'Timer: expired';
    }
  }, 300);
};

// Transaction limits & velocity
let txnCount = 0;
const DAILY_LIMIT = 10000; // currency units (presentation)
let spentToday = 0;
document.getElementById('txnBtn').onclick = () => {
  const amount = Math.floor(Math.random()*5000)+100; // random demo amount
  txnCount += 1;
  spentToday += amount;
  const allowed = spentToday <= DAILY_LIMIT;
  document.getElementById('txnInfo').textContent = `Transactions today: ${txnCount} — Spent: ₹${spentToday} — Limit: ₹${DAILY_LIMIT} — Allowed: ${allowed ? 'Yes ✓' : 'No ✗'}`;
  // if allowed play sound
  if(allowed) document.getElementById('successAudio').play();
};

// Play success sound button
document.getElementById('playSoundBtn').onclick = () => {
  document.getElementById('successAudio').play();
};
