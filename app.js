(function loadPayScripts() {
  const p = location.pathname.includes("/pages/") ? "../" : "";
  if (!document.querySelector('script[src$="js/config.js"]')) {
    const c = document.createElement("script");
    c.src = (location.hostname.indexOf("github.io") !== -1) ? "config.js" : (p + "js/config.js");
    document.head.appendChild(c);
  }
  if (!document.querySelector('script[src$="js/api.js"]')) {
    const a = document.createElement("script");
    a.src = (location.hostname.indexOf("github.io") !== -1) ? "api.js" : (p + "js/api.js");
    document.head.appendChild(a);
  }
  if (!document.querySelector('script[src*="checkout.razorpay.com"]')) {
    const r = document.createElement("script");
    r.src = "https://checkout.razorpay.com/v1/checkout.js";
    document.head.appendChild(r);
  }
})();

const NP = {
  getCity() { return localStorage.getItem("np_city") || "all"; },
  setCity(v) { localStorage.setItem("np_city", v); },
  qs(k) { return new URLSearchParams(location.search).get(k); },
  pathPrefix() {
    return location.pathname.includes("/pages/") ? "../" : "";
  },
  flat() {
    return location.hostname.indexOf("github.io") !== -1;
  },
  pg(name) {
    if (location.pathname.indexOf("/pages/") !== -1) return name;
    return this.flat() ? name : ("pages/" + name);
  },
  cityPic(id) {
    if (this.flat()) return id + ".jpg";
    return this.pathPrefix() + "media/cities/" + id + ".jpg";
  }
};

function npHeader(active) {
  const p = NP.pathPrefix();
  const city = NP.getCity();
  const opts = [`<option value="all"${city==="all"?" selected":""}>All Cities</option>`,`<option value="ncr"${city==="ncr"?" selected":""}>NCR (Delhi–Gurugram–Noida)</option>`]
    .concat(NP_DATA.cities.map(c => `<option value="${c.id}"${city===c.id?" selected":""}>${c.name}</option>`)).join("");
  if (!document.getElementById("ads-font")) {
    const l = document.createElement("link");
    l.id = "ads-font";
    l.rel = "stylesheet";
    l.href = "https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Manrope:wght@400;600;700;800&display=swap";
    document.head.appendChild(l);
  }
  return `
  <div class="ticker"><div class="ticker-track">✦ AFTER DARK SOCIETY ✦ AFTER DARK SOCIETY ✦ AFTER DARK SOCIETY ✦ AFTER DARK SOCIETY ✦</div></div>
  <header class="site-header">
    <div class="container header-inner">
      <a class="logo" href="${p}index.html">AFTER<span>DARK</span></a>
      <nav class="nav">
        <a class="${active==="clubs"?"active":""}" href="${NP.pg("clubs.html")}">Clubs</a>
        <a class="${active==="events"?"active":""}" href="${NP.pg("events.html")}">Parties</a>
        <a class="${active==="events"?"active":""}" href="${NP.pg("events.html")}">DJs</a>
        <a class="${active==="offers"?"active":""}" href="${NP.pg("offers.html")}">Offers</a>
        <a class="${active==="home"?"active":""}" href="${p}index.html#cities">Cities</a>
      </nav>
      <div class="header-actions">
        <select class="city-select" id="globalCity">${opts}</select>
        <button class="icon-btn" id="searchToggle" aria-label="Search">Search</button>
        <a class="btn btn-primary hide-sm" href="${NP.pg("list-club.html")}">List your club</a>
        <button class="icon-btn hamburger" id="hamburger">☰</button>
      </div>
    </div>
  </header>
  <div class="mobile-nav" id="mobileNav">
    <a href="${p}index.html">Home</a>
    <a href="${NP.pg("clubs.html")}">Explore Clubs</a>
    <a href="${NP.pg("events.html")}">Parties & Events</a>
    <a href="${NP.pg("offers.html")}">Offers</a>
    <a href="${NP.pg("about.html")}">About</a>
    <a href="${NP.pg("safety.html")}">Safety</a>
    <a href="${NP.pg("list-event.html")}">List Your Event</a>
    <a href="${NP.pg("list-club.html")}">Add club</a>
    <a href="${NP.pg("admin.html")}">Admin + Razorpay</a>
    <a href="${NP.pg("edit.html")}">Edit venue / time</a>
    <a href="${NP.pg("dashboard.html")}">Owner dashboard</a>
    <label class="meta" style="display:block;margin:16px 0 8px">City</label>
    <select class="city-select" id="mobileCity" style="width:100%">${opts}</select>
  </div>`;
}

function npFooter() {
  const p = NP.pathPrefix();
  return `
  <footer class="site-footer">
    <div class="container footer-grid">
      <div>
        <div class="logo">AFTER<span>DARK</span></div>
        <p class="meta" style="margin-top:6px">SOCIETY</p>
        <p style="color:var(--muted);margin-top:10px;max-width:36ch">After Dark Society — India nightlife for clubs, DJ nights, live rooms and tables.</p>
      </div>
      <div>
        <strong>Explore</strong>
        <a href="${NP.pg("about.html")}">About</a>
        <a href="${NP.pg("clubs.html")}">Explore Clubs</a>
        <a href="${NP.pg("events.html")}">Events</a>
        <a href="${NP.pg("offers.html")}">Offers</a>
        <a href="${NP.pg("safety.html")}">Nightlife Safety</a>
      </div>
      <div>
        <strong>Partners</strong>
        <a href="${NP.pg("admin.html")}">Admin + Razorpay</a>
        <a href="${NP.pg("list-event.html")}">List Your Event</a>
        <a href="${NP.pg("list-club.html")}">List Your Club</a>
        <a href="${NP.pg("edit.html")}">Edit listings</a>
        <a href="${NP.pg("dashboard.html")}">Owner Dashboard</a>
        <a href="${NP.pg("about.html")}#contact">Contact</a>
      </div>
      <div>
        <strong>Legal & Social</strong>
        <a href="${NP.pg("privacy.html")}">Privacy Policy</a>
        <a href="${NP.pg("terms.html")}">Terms & Conditions</a>
        <a href="https://instagram.com" target="_blank">Instagram</a>
        <a href="https://facebook.com" target="_blank">Facebook</a>
        <a href="https://youtube.com" target="_blank">YouTube</a>
      </div>
    </div>
    <div class="container copy">© 2026 After Dark Society. All rights reserved.</div>
  <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
  </footer>
  <div class="modal" id="bookModal">
    <div class="modal-card">
      <h3>Book a Table</h3>
      <form id="bookForm">
        <input type="hidden" id="bookTarget">
        <div class="form-row"><label>Name</label><input required id="bkName"></div>
        <div class="form-row"><label>WhatsApp number</label><input required id="bkPhone" type="tel" placeholder="+91"></div>
        <div class="form-row"><label>Date</label><input required id="bkDate" type="date"></div>
        <div class="form-row"><label>Number of people</label><input required id="bkPeople" type="number" min="1" value="2"></div>
        <div class="form-row"><label>Table type</label>
          <select id="bkTable"><option>Standard</option><option>Booth</option><option>VIP</option><option>Poolside</option></select>
        </div>
        <div class="form-row"><label>Special service</label>
          <select id="bkService">
            <option value="0" data-price="0">None</option>
            <option value="table" data-price="3000">Dedicated Table — ₹3,000</option>
            <option value="screen" data-price="1500">Name on the screen — ₹1,500</option>
            <option value="dance" data-price="8000">2 female dance partners — ₹8,000</option>
            <option value="beer" data-price="2500">One bucket beer — ₹2,500</option>
            <option value="fire" data-price="2000">Fire gun shot — ₹2,000</option>
            <option value="escort" data-price="5000">Bouncer / escort — ₹5,000</option>
            <option value="pack" data-price="25000">Full package — ₹25,000</option>
          </select>
        </div>
        <div class="form-row"><label>Advance amount (₹)</label><input id="bkAmount" type="number" min="0" value="3000" readonly></div>
        <p class="meta" id="bkPriceHint">₹1,500 × 2 guests = ₹3,000</p>
        <input type="hidden" id="bkPay" value="razorpay">
        <p class="meta">Payment: Razorpay — UPI / Card / Netbanking</p>
        <div class="form-row"><label>Emergency contact (optional)</label><input id="bkEmergency" type="tel" placeholder="Friend or family phone"></div>
        <div class="form-row book-split">
          <label class="share-box"><input type="checkbox" id="bkShare"> Share night plan on WhatsApp</label>
        </div>
        <div class="form-row"><label>Special request</label><textarea id="bkNote" rows="3" placeholder="Allergies, birthday, song request…"></textarea></div>
        <p class="meta" id="rzpHint">Pay pe Razorpay window khulegi — UPI, card, netbanking.</p>
        <button class="btn btn-primary" type="submit" style="width:100%">Pay with Razorpay</button>
        <button class="btn btn-ghost" type="button" id="closeBook" style="width:100%;margin-top:8px">Cancel</button>
      </form>
    </div>
  </div>
  <div class="toast" id="toast"></div>`;
}

function bindChrome() {
  const cityEl = document.getElementById("globalCity");
  if (cityEl) cityEl.addEventListener("change", e => {
    NP.setCity(e.target.value);
    location.reload();
  });
  const mCity = document.getElementById("mobileCity");
  if (mCity) mCity.addEventListener("change", e => {
    NP.setCity(e.target.value);
    location.reload();
  });
  const ham = document.getElementById("hamburger");
  const mob = document.getElementById("mobileNav");
  if (ham && mob) ham.addEventListener("click", () => mob.classList.toggle("open"));
  const st = document.getElementById("searchToggle");
  if (st) st.addEventListener("click", () => {
    const p = NP.pathPrefix();
    location.href = NP.pg("clubs.html") + "?focus=1";
  });
  const close = document.getElementById("closeBook");
  if (close) close.onclick = () => document.getElementById("bookModal").classList.remove("open");
  function npCalcAdvance() {
    const people = Math.max(1, Number(document.getElementById("bkPeople").value || 1));
    const sel = document.getElementById("bkService");
    const extra = Number((sel.options[sel.selectedIndex] && sel.options[sel.selectedIndex].dataset.price) || 0);
    const base = sel.value === "pack" ? 25000 : (1500 * people + extra);
    document.getElementById("bkAmount").value = base;
    const hint = document.getElementById("bkPriceHint");
    if (hint) hint.textContent = sel.value === "pack" ? "Package ₹25,000" : ("₹1,500 × " + people + " guests + services = ₹" + base.toLocaleString("en-IN"));
  }
  const pe = document.getElementById("bkPeople");
  const se = document.getElementById("bkService");
  if (pe) pe.addEventListener("input", npCalcAdvance);
  if (se) se.addEventListener("change", npCalcAdvance);
  const form = document.getElementById("bookForm");
  if (form) form.addEventListener("submit", e => {
    e.preventDefault();
    const method = document.getElementById("bkPay").value;
    const amt = Number(document.getElementById("bkAmount").value || 0);
    const name = document.getElementById("bkName").value;
    const phone = document.getElementById("bkPhone").value;
    const venue = document.getElementById("bookTarget").value;
    const bookingPayload = {
      name, phone, venue, method, amount: amt,
      date: document.getElementById("bkDate").value,
      people: document.getElementById("bkPeople").value,
      table: document.getElementById("bkTable").value,
      emergency: document.getElementById("bkEmergency").value
    };
    startRazorpay({ amount: amt, name, phone, venue, method: "razorpay", bookingPayload });
  });
}

function startRazorpay({ amount, name, phone, venue, method, bookingPayload }) {
  const key = localStorage.getItem("np_razorpay_key") || (window.NP_CONFIG && window.NP_CONFIG.razorpayKey) || "";
  if (!key) {
    document.getElementById("bookModal").classList.remove("open");
    showToast("Razorpay connect nahi hai. Admin → Payments mein Key ID save karo.");
    return;
  }
  if (!window.Razorpay) {
    showToast("Razorpay script load nahi hua. Page refresh karo.");
    return;
  }
  const paise = Math.max(1, Math.round(amount * 100));
  const rzp = new Razorpay({
    key,
    amount: paise,
    currency: "INR",
    name: "After Dark Society",
    description: "Advance booking — " + (venue || "table"),
    prefill: { name, contact: phone },
    notes: { venue, method },
    theme: { color: "#7a2cff" },
    handler: function (res) {
      document.getElementById("bookModal").classList.remove("open");
      saveLocalBooking({ ...(bookingPayload || {}), paymentId: res.razorpay_payment_id, status: "paid" });
      if (window.NPApi) NPApi.createBooking({ ...(bookingPayload || {}), paymentId: res.razorpay_payment_id, status: "paid" });
      showToast("Paid. Payment ID " + res.razorpay_payment_id);
    },
    modal: { ondismiss: function () { showToast("Payment cancelled."); } }
  });
  rzp.open();
}

function bookingWhatsAppText(rec) {
  return [
    "After Dark Society — Booking confirm",
    "Booking ID: " + rec.id,
    "Name: " + (rec.name || ""),
    "WhatsApp: " + (rec.phone || ""),
    "Venue: " + (rec.venue || ""),
    "Date: " + (rec.date || ""),
    "People: " + (rec.people || ""),
    "Table: " + (rec.table || ""),
    "Amount: Rs " + (rec.amount || 0),
    "Status: " + (rec.status || ""),
    rec.paymentId ? ("Payment ID: " + rec.paymentId) : "",
    rec.emergency ? ("Emergency: " + rec.emergency) : "",
    "Keep this ID at the door."
  ].filter(Boolean).join("\n");
}
function openBookingWhatsApp(rec) {
  const text = bookingWhatsAppText(rec);
  if (rec.phone) window.open(waLink(rec.phone, text), "_blank");
  const biz = localStorage.getItem("np_wa") || "";
  const a = String(rec.phone || "").replace(/\D/g, "");
  const b = biz.replace(/\D/g, "");
  if (b && b !== a) setTimeout(() => window.open(waLink(biz, "NEW BOOKING\n" + text), "_blank"), 700);
}
function saveLocalBooking(row) {
  const id = "SP" + Date.now().toString().slice(-6);
  const rec = Object.assign({ id, createdAt: new Date().toISOString() }, row);
  const list = JSON.parse(localStorage.getItem("np_bookings") || "[]");
  list.unshift(rec);
  localStorage.setItem("np_bookings", JSON.stringify(list));
  if (rec.status === "paid" || rec.paymentId) {
    const pays = JSON.parse(localStorage.getItem("np_payments") || "[]");
    pays.unshift({ id, amount: rec.amount, status: "paid", paymentId: rec.paymentId, venue: rec.venue, name: rec.name });
    localStorage.setItem("np_payments", JSON.stringify(pays));
  }
  openBookingWhatsApp(rec);
  return rec;
}

function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 2800);
}

function openBooking(label, amount) {
  document.getElementById("bookTarget").value = label || "";
  if (amount && document.getElementById("bkAmount")) document.getElementById("bkAmount").value = amount;
  document.getElementById("bookModal").classList.add("open");
}

function maskPhone(n) {
  const d = String(n || "").replace(/\D/g, "");
  if (d.length < 4) return "••••";
  return "••••••" + d.slice(-4);
}

function waLink(phone, text) {
  const n = (phone || "+919876543210").replace(/\D/g, "");
  return `https://wa.me/${n}?text=${encodeURIComponent(text || "Hi, I found you on After Dark Society.")}`;
}

function filterClubs({ city, q, genre, price, rating, openNow } = {}) {
  return npAllClubs().filter(c => {
    if (city && city !== "all") {
      if (city === "ncr") {
        if (!["delhi","gurgaon","noida"].includes(c.city)) return false;
      } else if (c.city !== city) return false;
    }
    if (q) {
      const s = (c.name + " " + c.area + " " + c.genres.join(" ")).toLowerCase();
      if (!s.includes(q.toLowerCase())) return false;
    }
    if (genre && genre !== "all" && !c.genres.some(g => g.toLowerCase() === genre.toLowerCase())) return false;
    if (price === "lt1000" && c.entry >= 1000) return false;
    if (price === "1to2" && (c.entry < 1000 || c.entry > 2000)) return false;
    if (price === "gt2000" && c.entry <= 2000) return false;
    if (rating && c.rating < Number(rating)) return false;
    if (openNow && !npIsOpenNow(c)) return false;
    return true;
  });
}

function filterEvents({ city, tag, q } = {}) {
  return npAllEvents().filter(ev => {
    const club = npClub(ev.clubId);
    if (city && city !== "all") {
      if (city === "ncr") {
        if (!club || !["delhi","gurgaon","noida"].includes(club.city)) return false;
      } else if (!club || club.city !== city) return false;
    }
    if (tag && tag !== "all" && !ev.tags.includes(tag)) return false;
    if (q) {
      const s = (ev.name + " " + ev.dj + " " + club.name).toLowerCase();
      if (!s.includes(q.toLowerCase())) return false;
    }
    return true;
  });
}

function clubCard(c) {
  const p = NP.pathPrefix();
  const fallback = p + "media/posters/" + (["crowd.jpg","bar.jpg","velvet.jpg"][Math.abs(c.name.length) % 3]);
  return `<article class="card">
    <div class="card-media">
      <img src="${c.image}" alt="${c.name}" onerror="this.onerror=null;this.src='${fallback}'">
      <span class="badge">${npIsOpenNow(c) ? "Open Now" : "See hours"}</span>
    </div>
    <div class="card-body">
      <h3>${c.name}</h3>
      <div class="meta">
        <span>${npCityName(c.city)} · ${c.area}</span>
        <span class="stars">★ ${c.rating}</span>
        <span>${c.genres[0]}</span>
        <span>${c.open} – ${c.close}</span>
        <span>Entry ₹${c.entry.toLocaleString("en-IN")}</span>
        ${c.safety && c.safety.verified ? `<span class="safety-pill">Verified venue</span>` : ""}
        ${c.safety ? `<span class="safety-pill">Safety ${c.safety.safetyScore}</span>` : ""}
      </div>
      <div class="card-actions">
        <a class="btn btn-ghost" href="${NP.pg("club.html")}?id=${c.id}">View Club</a>
        <button class="btn btn-primary" data-book="${c.name}" data-amount="${c.entry}">Book & pay</button>
      </div>
    </div>
  </article>`;
}

function eventCard(ev) {
  const p = NP.pathPrefix();
  const club = npClub(ev.clubId) || { name: "Venue", city: "lucknow", image: "" };
  const d = npFmtDate(npEventDate(ev.dateOffset));
  const cityId = club.city || "lucknow";
  const pic = (club.image) || npCityImage(cityId);
  return `<article class="card">
    <div class="card-media">
      <img src="${pic}" alt="${club ? npCityName(club.city) : ev.name}">
      <span class="badge">${ev.tags[0]}</span>
    </div>
    <div class="card-body">
      <h3>${ev.name}</h3>
      <div class="meta">
        <span>${club.name} · ${npCityName(club.city)}</span>
        <span>${d}</span>
        <span>${ev.start} – ${ev.end}</span>
        <span>${ev.dj}</span>
        <span>${ev.price ? "₹" + ev.price.toLocaleString("en-IN") : "Free Entry"}</span>
        <span>${ev.interested.toLocaleString("en-IN")} interested</span>
      </div>
      <div class="card-actions">
        <a class="btn btn-ghost" href="${NP.pg("event.html")}?id=${ev.id}">View Event</a>
        <button class="btn btn-primary" data-book="${ev.name}" data-amount="${ev.price}">Pay & book</button>
      </div>
    </div>
  </article>`;
}

function cityCard(c) {
  const p = NP.pathPrefix();
  const src = NP.cityPic(c.id);
  return `<a class="card city-card" href="${NP.pg("clubs.html")}?city=${c.id}" onclick="NP.setCity('${c.id}')">
    <div class="card-media"><img src="${src}" alt="${c.name}"></div>
    <div class="card-body">
      <h3>${c.name}</h3>
      <div class="meta">${c.clubs} clubs · ${c.events} events</div>
    </div>
  </a>`;
}

document.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-book]");
  if (btn) openBooking(btn.getAttribute("data-book"), btn.getAttribute("data-amount"));
});
