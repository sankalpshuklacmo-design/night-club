/**
 * After Dark Society — local / VPS backend
 * Run: cd nightpulse && npm install && npm start
 * API: http://localhost:8787/api
 */
const fs = require("fs");
const path = require("path");
const http = require("http");

const PORT = process.env.PORT || 8787;
const DB = path.join(__dirname, "db.json");

function seed() {
  return { clubs: [], events: [], bookings: [], listedClubs: [] };
}
function readDb() {
  try { return JSON.parse(fs.readFileSync(DB, "utf8")); }
  catch { const s = seed(); writeDb(s); return s; }
}
function writeDb(db) {
  fs.writeFileSync(DB, JSON.stringify(db, null, 2));
}

function json(res, code, body) {
  res.writeHead(code, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS"
  });
  res.end(JSON.stringify(body));
}

function body(req) {
  return new Promise((resolve, reject) => {
    let raw = "";
    req.on("data", c => { raw += c; if (raw.length > 1e6) req.destroy(); });
    req.on("end", () => {
      try { resolve(raw ? JSON.parse(raw) : {}); }
      catch (e) { reject(e); }
    });
  });
}

const server = http.createServer(async (req, res) => {
  if (req.method === "OPTIONS") return json(res, 200, { ok: true });
  const url = new URL(req.url, "http://localhost");
  const db = readDb();

  try {
    if (req.method === "GET" && url.pathname === "/api/health") {
      return json(res, 200, { ok: true, bookings: db.bookings.length, events: db.events.length });
    }
    if (req.method === "GET" && url.pathname === "/api/events") {
      return json(res, 200, { events: db.events });
    }
    if (req.method === "GET" && url.pathname === "/api/clubs") {
      return json(res, 200, { clubs: db.listedClubs });
    }
    if (req.method === "GET" && url.pathname === "/api/bookings") {
      return json(res, 200, { bookings: db.bookings });
    }
    if (req.method === "POST" && url.pathname === "/api/events") {
      const p = await body(req);
      if (!p.name) return json(res, 400, { error: "name required" });
      const row = { id: "ev-" + Date.now(), ...p, createdAt: new Date().toISOString() };
      db.events.unshift(row);
      writeDb(db);
      return json(res, 201, { ok: true, event: row });
    }
    if (req.method === "POST" && url.pathname === "/api/clubs") {
      const p = await body(req);
      if (!p.name) return json(res, 400, { error: "name required" });
      const row = { id: "club-" + Date.now(), ...p, createdAt: new Date().toISOString() };
      db.listedClubs.unshift(row);
      writeDb(db);
      return json(res, 201, { ok: true, club: row });
    }
    if (req.method === "POST" && url.pathname === "/api/bookings") {
      const p = await body(req);
      if (!p.name || !p.phone) return json(res, 400, { error: "name and phone required" });
      const row = {
        id: "SP" + Date.now().toString().slice(-8),
        ...p,
        status: p.paymentId ? "paid" : "requested",
        createdAt: new Date().toISOString()
      };
      db.bookings.unshift(row);
      writeDb(db);
      return json(res, 201, { ok: true, booking: row });
    }
    if (req.method === "POST" && url.pathname === "/api/pay/order") {
      const p = await body(req);
      const key = process.env.RAZORPAY_KEY_ID || "";
      const secret = process.env.RAZORPAY_KEY_SECRET || "";
      if (!secret) {
        return json(res, 200, {
          ok: true,
          demo: true,
          message: "Set RAZORPAY_KEY_SECRET on the server to create real orders.",
          amount: p.amount || 0
        });
      }
      const auth = Buffer.from(key + ":" + secret).toString("base64");
      const paise = Math.max(100, Math.round(Number(p.amount || 0) * 100));
      const rz = await fetch("https://api.razorpay.com/v1/orders", {
        method: "POST",
        headers: { Authorization: "Basic " + auth, "Content-Type": "application/json" },
        body: JSON.stringify({ amount: paise, currency: "INR", receipt: "span-" + Date.now() })
      });
      const data = await rz.json();
      if (!rz.ok) return json(res, 400, { error: data.error || data });
      return json(res, 200, { ok: true, order: data });
    }
    json(res, 404, { error: "not found" });
  } catch (err) {
    json(res, 500, { error: String(err.message || err) });
  }
});

server.listen(PORT, () => {
  console.log("After Dark Society API on http://localhost:" + PORT);
});
