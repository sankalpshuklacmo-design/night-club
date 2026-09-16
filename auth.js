async function npHashPin(pin) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode("span.v1." + pin));
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, "0")).join("");
}
function npDigits(n) { return String(n || "").replace(/\D/g, ""); }
function npAuthUnlocked() {
  if (sessionStorage.getItem("np_admin_ok") !== "1") return false;
  const at = Number(sessionStorage.getItem("np_admin_at") || 0);
  if (Date.now() - at > 30 * 60 * 1000) {
    sessionStorage.removeItem("np_admin_ok");
    return false;
  }
  return true;
}
function npAuthLockCheck() {
  return Date.now() < Number(localStorage.getItem("np_lock_until") || 0);
}
function npAuthHtml(title) {
  return `<div id="npGate" class="card" style="padding:22px;max-width:520px;margin:40px auto">
    <h3 id="gateTitle">${title || "Owner login"}</h3>
    <p class="meta" style="margin:8px 0 14px">Wahi PIN + recovery WhatsApp jo Admin mein set hai.</p>
    <div id="loginBox">
      <div class="form-row" id="phoneSetupRow"><label>Recovery WhatsApp</label><input id="setupPhone" type="tel" placeholder="+91"></div>
      <div class="form-row"><label>PIN</label><input id="pin" type="password" inputmode="numeric" placeholder="••••"></div>
      <div class="card-actions">
        <button class="btn btn-primary" type="button" id="gateGo">Continue</button>
        <button class="btn btn-ghost" type="button" id="resetPin">Forgot PIN — OTP</button>
      </div>
    </div>
    <div id="otpBox" style="display:none">
      <div class="form-row"><label>Registered WhatsApp</label><input id="otpPhone" type="tel"></div>
      <button class="btn btn-primary" type="button" id="sendOtp">Send OTP</button>
      <div class="form-row" style="margin-top:12px"><label>OTP</label><input id="otpCode" inputmode="numeric"></div>
      <div class="card-actions">
        <button class="btn btn-primary" type="button" id="verifyOtp">Verify & reset PIN</button>
        <button class="btn btn-ghost" type="button" id="otpCancel">Back</button>
      </div>
    </div>
  </div>`;
}
function npAuthBind(onOk) {
  const PIN_KEY = "np_admin_pin";
  const PHONE_KEY = "np_admin_phone";
  if (localStorage.getItem(PIN_KEY)) {
    const row = document.getElementById("phoneSetupRow");
    if (row) row.style.display = "none";
  } else {
    document.getElementById("gateTitle").textContent = "Set PIN + WhatsApp";
  }
  if (npAuthUnlocked()) { onOk(); return; }
  document.getElementById("gateGo").onclick = async () => {
    if (npAuthLockCheck()) return showToast("Locked. 15 min.");
    const pin = document.getElementById("pin").value.trim();
    if (pin.length < 4) return showToast("PIN 4+ digit");
    const saved = localStorage.getItem(PIN_KEY);
    const hashed = await npHashPin(pin);
    if (!saved) {
      let ph = localStorage.getItem(PHONE_KEY) || "";
      if (!ph) {
        ph = npDigits(document.getElementById("setupPhone").value);
        if (ph.length < 10) return showToast("WhatsApp 10 digit");
        localStorage.setItem(PHONE_KEY, ph);
      }
      localStorage.setItem(PIN_KEY, hashed);
      sessionStorage.setItem("np_admin_ok", "1");
      sessionStorage.setItem("np_admin_at", String(Date.now()));
      onOk();
      return;
    }
    if (saved !== hashed && saved !== pin) {
      const n = Number(localStorage.getItem("np_fail_n") || 0) + 1;
      localStorage.setItem("np_fail_n", String(n));
      if (n >= 5) localStorage.setItem("np_lock_until", String(Date.now() + 15 * 60 * 1000));
      return showToast("Galat PIN");
    }
    if (saved === pin) localStorage.setItem(PIN_KEY, hashed);
    localStorage.removeItem("np_fail_n");
    sessionStorage.setItem("np_admin_ok", "1");
    sessionStorage.setItem("np_admin_at", String(Date.now()));
    onOk();
  };
  document.getElementById("resetPin").onclick = () => {
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("otpBox").style.display = "block";
    const saved = localStorage.getItem(PHONE_KEY) || "";
    document.getElementById("otpPhone").value = saved;
    if (saved) setTimeout(() => document.getElementById("sendOtp").click(), 200);
  };
  document.getElementById("otpCancel").onclick = () => {
    document.getElementById("loginBox").style.display = "block";
    document.getElementById("otpBox").style.display = "none";
  };
  document.getElementById("sendOtp").onclick = () => {
    const saved = localStorage.getItem(PHONE_KEY) || "";
    const entered = npDigits(document.getElementById("otpPhone").value) || saved;
    if (entered.slice(-10) !== saved.slice(-10)) return showToast("Registered number nahi");
    const otp = String(Math.floor(100000 + Math.random() * 900000));
    sessionStorage.setItem("np_otp", otp);
    sessionStorage.setItem("np_otp_exp", String(Date.now() + 5 * 60 * 1000));
    const msg = "After Dark Society admin OTP: " + otp + " — 5 min valid.";
    location.href = waLink(entered, msg);
    showToast("WhatsApp khula. Send dabao.");
  };
  document.getElementById("verifyOtp").onclick = () => {
    const otp = sessionStorage.getItem("np_otp");
    if (document.getElementById("otpCode").value.trim() !== otp) return showToast("Galat OTP");
    localStorage.removeItem(PIN_KEY);
    sessionStorage.removeItem("np_admin_ok");
    showToast("Naya PIN set karo");
    document.getElementById("otpBox").style.display = "none";
    document.getElementById("loginBox").style.display = "block";
    document.getElementById("phoneSetupRow").style.display = "none";
  };
}
