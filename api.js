const NPApi = {
  base() {
    const cfg = window.NP_CONFIG || {};
    if (cfg.apiBase) return cfg.apiBase.replace(/\/$/, "");
    return "";
  },
  async req(path, opts) {
    const url = this.base() + path;
    try {
      const res = await fetch(url, {
        headers: { "Content-Type": "application/json", ...(opts && opts.headers) },
        ...opts
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "API " + res.status);
      return data;
    } catch (err) {
      console.warn("API fallback", path, err.message);
      return null;
    }
  },
  async createEvent(payload) {
    return this.req("/api/events", { method: "POST", body: JSON.stringify(payload) });
  },
  async createClub(payload) {
    return this.req("/api/clubs", { method: "POST", body: JSON.stringify(payload) });
  },
  async createBooking(payload) {
    return this.req("/api/bookings", { method: "POST", body: JSON.stringify(payload) });
  },
  async createOrder(payload) {
    return this.req("/api/pay/order", { method: "POST", body: JSON.stringify(payload) });
  }
};
