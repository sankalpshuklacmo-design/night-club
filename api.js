// Netlify: /.netlify/functions/api  + redirects /api/*
// Persistence here is per-instance. For durable data run server/index.js on a VPS
// or connect Supabase. Bookings still save from the browser as backup.

const memory = global.__SPAN_MEM || { events: [], clubs: [], bookings: [] };
global.__SPAN_MEM = memory;

exports.handler = async (event) => {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS"
  };
  if (event.httpMethod === "OPTIONS") return { statusCode: 200, headers, body: "{}" };

  const path = (event.path || "").replace("/.netlify/functions/api", "").replace(/^\/api/, "") || "/";
  let payload = {};
  try { payload = event.body ? JSON.parse(event.body) : {}; } catch (e) {}

  if (event.httpMethod === "GET" && path.includes("health")) {
    return { statusCode: 200, headers, body: JSON.stringify({ ok: true, mode: "netlify-fn" }) };
  }
  if (event.httpMethod === "POST" && path.includes("events")) {
    const row = { id: "ev-" + Date.now(), ...payload, createdAt: new Date().toISOString() };
    memory.events.unshift(row);
    return { statusCode: 201, headers, body: JSON.stringify({ ok: true, event: row }) };
  }
  if (event.httpMethod === "POST" && path.includes("clubs")) {
    const row = { id: "club-" + Date.now(), ...payload, createdAt: new Date().toISOString() };
    memory.clubs.unshift(row);
    return { statusCode: 201, headers, body: JSON.stringify({ ok: true, club: row }) };
  }
  if (event.httpMethod === "POST" && path.includes("bookings")) {
    const row = { id: "SP" + Date.now().toString().slice(-8), ...payload, createdAt: new Date().toISOString() };
    memory.bookings.unshift(row);
    return { statusCode: 201, headers, body: JSON.stringify({ ok: true, booking: row }) };
  }
  if (event.httpMethod === "POST" && path.includes("pay")) {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        ok: true,
        demo: true,
        message: "Add RAZORPAY_KEY_SECRET and run node server/index.js for real orders."
      })
    };
  }
  if (event.httpMethod === "GET" && path.includes("bookings")) {
    return { statusCode: 200, headers, body: JSON.stringify({ bookings: memory.bookings }) };
  }
  return { statusCode: 200, headers, body: JSON.stringify({ ok: true, path }) };
};
