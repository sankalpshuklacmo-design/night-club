const NP_DATA = {
  cities: [
    { id: "lucknow", name: "Lucknow", clubs: 42, events: 18, image: "https://images.unsplash.com/photo-1572116469696-31de0f17cc88?w=800&q=80" },
    { id: "delhi", name: "Delhi", clubs: 86, events: 54, image: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=800&q=80" },
    { id: "mumbai", name: "Mumbai", clubs: 112, events: 71, image: "https://images.unsplash.com/photo-1571266028243-d220c9c3b31f?w=800&q=80" },
    { id: "bangalore", name: "Bangalore", clubs: 94, events: 63, image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80" },
    { id: "hyderabad", name: "Hyderabad", clubs: 51, events: 29, image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80" },
    { id: "pune", name: "Pune", clubs: 47, events: 24, image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80" },
    { id: "jaipur", name: "Jaipur", clubs: 28, events: 14, image: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800&q=80" },
    { id: "chandigarh", name: "Chandigarh", clubs: 22, events: 11, image: "https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?w=800&q=80" },
    { id: "goa", name: "Goa", clubs: 38, events: 41, image: "https://images.unsplash.com/photo-1506157786151-b8491531f348?w=800&q=80" },
    { id: "kolkata", name: "Kolkata", clubs: 33, events: 19, image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80" },
    { id: "chennai", name: "Chennai", clubs: 29, events: 16, image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b345?w=800&q=80" },
    { id: "ahmedabad", name: "Ahmedabad", clubs: 21, events: 12, image: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=800&q=80" },
    { id: "gurgaon", name: "Gurugram", clubs: 44, events: 27, image: "https://images.unsplash.com/photo-1459749411177-04de304203af?w=800&q=80" },
    { id: "noida", name: "Noida", clubs: 26, events: 15, image: "https://images.unsplash.com/photo-1519671482749-fd09be7cda1f?w=800&q=80" },
    { id: "indore", name: "Indore", clubs: 18, events: 9, image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80" },
    { id: "kochi", name: "Kochi", clubs: 16, events: 11, image: "https://images.unsplash.com/photo-1415201364774-f6f0bb35bef6?w=800&q=80" },
    { id: "udaipur", name: "Udaipur", clubs: 12, events: 8, image: "https://images.unsplash.com/photo-1485875437342-9b39470b3d95?w=800&q=80" },
    { id: "dehradun", name: "Dehradun", clubs: 10, events: 6, image: "https://images.unsplash.com/photo-1572116469696-31de0f17cc89?w=800&q=80" }
  ],
  clubs: [
    {
      id: "club-mirage",
      name: "Club Mirage",
      city: "lucknow",
      area: "Gomti Nagar",
      address: "TC-34, Vibhuti Khand, Gomti Nagar, Lucknow 226010",
      rating: 4.6,
      reviewsCount: 312,
      genres: ["EDM", "Bollywood", "Commercial"],
      open: "21:00",
      close: "03:00",
      entry: 1500,
      age: 21,
      dress: "Smart casual / Club wear. No shorts or flip-flops.",
      phone: "+91 98765 43210",
      instagram: "https://instagram.com",
      maps: "https://maps.google.com/?q=Gomti+Nagar+Lucknow",
      image: "https://images.unsplash.com/photo-1572116469696-31de0f17cc88?w=1200&q=80",
      photos: [
        "https://images.unsplash.com/photo-1571266028243-d220c9c3b31f?w=800&q=80",
        "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80",
        "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80",
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80"
      ],
      hours: { mon: "21:00–03:00", tue: "Closed", wed: "21:00–03:00", thu: "21:00–03:00", fri: "21:00–04:00", sat: "21:00–04:00", sun: "20:00–02:00" },
      closedDays: ["tue"]
    },
    {
      id: "sky-lounge",
      name: "Sky Lounge",
      city: "delhi",
      area: "Connaught Place",
      address: "Level 12, Palika Tower, Connaught Place, New Delhi 110001",
      rating: 4.8,
      reviewsCount: 541,
      genres: ["House", "Techno", "Live Music"],
      open: "20:00",
      close: "02:00",
      entry: 2000,
      age: 23,
      dress: "Premium smart casual. Jackets preferred.",
      phone: "+91 98100 11223",
      instagram: "https://instagram.com",
      maps: "https://maps.google.com/?q=Connaught+Place+Delhi",
      image: "https://images.unsplash.com/photo-1485872299829-c201d4a8c0d1?w=1200&q=80",
      photos: [
        "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800&q=80",
        "https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?w=800&q=80",
        "https://images.unsplash.com/photo-1506157786151-b8491531f348?w=800&q=80"
      ],
      hours: { mon: "Closed", tue: "20:00–01:00", wed: "20:00–01:00", thu: "20:00–02:00", fri: "20:00–03:00", sat: "20:00–03:00", sun: "19:00–01:00" },
      closedDays: ["mon"]
    },
    {
      id: "the-vault",
      name: "The Vault",
      city: "mumbai",
      area: "Bandra West",
      address: "14, Linking Road, Bandra West, Mumbai 400050",
      rating: 4.5,
      reviewsCount: 428,
      genres: ["Hip-Hop", "R&B", "Commercial"],
      open: "22:00",
      close: "04:00",
      entry: 2500,
      age: 21,
      dress: "All black / designer club wear.",
      phone: "+91 98200 44556",
      instagram: "https://instagram.com",
      maps: "https://maps.google.com/?q=Bandra+West+Mumbai",
      image: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=1200&q=80",
      photos: [
        "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=800&q=80",
        "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80"
      ],
      hours: { mon: "22:00–03:00", tue: "22:00–03:00", wed: "22:00–03:00", thu: "22:00–04:00", fri: "22:00–05:00", sat: "22:00–05:00", sun: "21:00–03:00" },
      closedDays: []
    },
    {
      id: "neon-district",
      name: "Neon District",
      city: "bangalore",
      area: "Indiranagar",
      address: "100 Feet Road, Indiranagar, Bengaluru 560038",
      rating: 4.7,
      reviewsCount: 389,
      genres: ["EDM", "Techno", "Trance"],
      open: "21:00",
      close: "03:30",
      entry: 1800,
      age: 21,
      dress: "Street luxury. Sneakers allowed if clean.",
      phone: "+91 98450 77889",
      instagram: "https://instagram.com",
      maps: "https://maps.google.com/?q=Indiranagar+Bangalore",
      image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1200&q=80",
      photos: [
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
        "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80"
      ],
      hours: { mon: "Closed", tue: "Closed", wed: "21:00–02:00", thu: "21:00–03:00", fri: "21:00–04:00", sat: "21:00–04:00", sun: "20:00–02:00" },
      closedDays: ["mon", "tue"]
    },
    {
      id: "black-room",
      name: "Black Room",
      city: "hyderabad",
      area: "HITEC City",
      address: "Cyber Towers Circle, HITEC City, Hyderabad 500081",
      rating: 4.4,
      reviewsCount: 201,
      genres: ["Techno", "Minimal", "House"],
      open: "21:30",
      close: "03:00",
      entry: 1200,
      age: 21,
      dress: "Dark formal / all-black preferred.",
      phone: "+91 90000 22334",
      instagram: "https://instagram.com",
      maps: "https://maps.google.com/?q=HITEC+City+Hyderabad",
      image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=1200&q=80",
      photos: [
        "https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?w=800&q=80"
      ],
      hours: { mon: "Closed", tue: "21:30–02:00", wed: "21:30–02:00", thu: "21:30–03:00", fri: "21:30–04:00", sat: "21:30–04:00", sun: "Closed" },
      closedDays: ["mon", "sun"]
    },
    {
      id: "elevate-club",
      name: "Elevate Club",
      city: "pune",
      area: "Koregaon Park",
      address: "North Main Road, Koregaon Park, Pune 411001",
      rating: 4.3,
      reviewsCount: 176,
      genres: ["Bollywood", "Commercial", "Hip-Hop"],
      open: "20:30",
      close: "02:30",
      entry: 999,
      age: 21,
      dress: "Smart casual.",
      phone: "+91 98810 33445",
      instagram: "https://instagram.com",
      maps: "https://maps.google.com/?q=Koregaon+Park+Pune",
      image: "https://images.unsplash.com/photo-1438557068880-c5f474830377?w=1200&q=80",
      photos: [
        "https://images.unsplash.com/photo-1506157786151-b8491531f348?w=800&q=80"
      ],
      hours: { mon: "20:30–01:00", tue: "20:30–01:00", wed: "20:30–02:00", thu: "20:30–02:30", fri: "20:30–03:00", sat: "20:30–03:00", sun: "19:30–01:00" },
      closedDays: []
    },
    {
      id: "pulse-goa",
      name: "Pulse Goa",
      city: "goa",
      area: "Vagator",
      address: "Ozran Beach Road, Vagator, Goa 403502",
      rating: 4.9,
      reviewsCount: 802,
      genres: ["EDM", "Techno", "Live Music"],
      open: "18:00",
      close: "06:00",
      entry: 2000,
      age: 18,
      dress: "Beach glam / festival wear.",
      phone: "+91 98221 66778",
      instagram: "https://instagram.com",
      maps: "https://maps.google.com/?q=Vagator+Goa",
      image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1200&q=80",
      photos: [
        "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80",
        "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80"
      ],
      hours: { mon: "18:00–04:00", tue: "18:00–04:00", wed: "18:00–05:00", thu: "18:00–05:00", fri: "16:00–06:00", sat: "16:00–06:00", sun: "16:00–05:00" },
      closedDays: []
    },
    {
      id: "amber-jaipur",
      name: "Amber After Dark",
      city: "jaipur",
      area: "C Scheme",
      address: "MI Road, C Scheme, Jaipur 302001",
      rating: 4.2,
      reviewsCount: 98,
      genres: ["Bollywood", "Sufi", "Live Music"],
      open: "20:00",
      close: "01:30",
      entry: 800,
      age: 21,
      dress: "Ethnic chic or smart casual.",
      phone: "+91 94140 11223",
      instagram: "https://instagram.com",
      maps: "https://maps.google.com/?q=C+Scheme+Jaipur",
      image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200&q=80",
      photos: [
        "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=800&q=80"
      ],
      hours: { mon: "Closed", tue: "20:00–01:00", wed: "20:00–01:00", thu: "20:00–01:30", fri: "20:00–02:00", sat: "20:00–02:00", sun: "19:00–00:30" },
      closedDays: ["mon"]
    }
  ],
  events: [
    { id: "ev-neon-fridays", name: "Neon Fridays", clubId: "club-mirage", dateOffset: 0, start: "22:00", end: "03:00", dj: "DJ Arjun", price: 1500, interested: 486, tags: ["Tonight", "EDM", "DJ Night"], image: "https://images.unsplash.com/photo-1571266028243-d220c9c3b31f?w=800&q=80" },
    { id: "ev-sky-house", name: "Skyline House Session", clubId: "sky-lounge", dateOffset: 0, start: "21:00", end: "02:00", dj: "Naina K", price: 2000, interested: 312, tags: ["Tonight", "Techno", "DJ Night"], image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80" },
    { id: "ev-vault-hip", name: "Bandra After Hours", clubId: "the-vault", dateOffset: 1, start: "22:30", end: "04:00", dj: "MC Rehan", price: 2500, interested: 540, tags: ["Tomorrow", "Hip-Hop"], image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80" },
    { id: "ev-nd-techno", name: "Warehouse 038", clubId: "neon-district", dateOffset: 2, start: "21:00", end: "04:00", dj: "Luna Pulse", price: 1800, interested: 721, tags: ["This Weekend", "Techno", "EDM"], image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80" },
    { id: "ev-elevate-bolly", name: "Desi Saturdays", clubId: "elevate-club", dateOffset: 2, start: "21:00", end: "02:30", dj: "DJ Rhea", price: 999, interested: 264, tags: ["This Weekend", "Bollywood", "Ladies Night"], image: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800&q=80" },
    { id: "ev-goa-sunrise", name: "Vagator Sunrise", clubId: "pulse-goa", dateOffset: 0, start: "23:00", end: "06:00", dj: "KSHMR Tribute Set", price: 2000, interested: 1104, tags: ["Tonight", "EDM", "Live Music"], image: "https://images.unsplash.com/photo-1506157786151-b8491531f348?w=800&q=80" },
    { id: "ev-black-min", name: "Afterdark Minimal", clubId: "black-room", dateOffset: 1, start: "22:00", end: "03:00", dj: "Aarav Seth", price: 1200, interested: 155, tags: ["Tomorrow", "Techno"], image: "https://images.unsplash.com/photo-1459749411177-04de304203af?w=800&q=80" },
    { id: "ev-amber-sufi", name: "Moonlit Qawwali Night", clubId: "amber-jaipur", dateOffset: 3, start: "20:30", end: "01:00", dj: "Live: The Amber Ensemble", price: 800, interested: 97, tags: ["Live Music", "This Weekend"], image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80" },
    { id: "ev-ladies-sky", name: "Velvet Ladies Night", clubId: "sky-lounge", dateOffset: 0, start: "20:00", end: "01:00", dj: "DJ Meher", price: 0, interested: 890, tags: ["Tonight", "Ladies Night", "Free Entry"], image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80" },
    { id: "ev-couple-vault", name: "Couples Only Thursday", clubId: "the-vault", dateOffset: 0, start: "21:00", end: "03:00", dj: "Twin Beats", price: 1999, interested: 210, tags: ["Tonight", "Couple Entry", "Hip-Hop"], image: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=800&q=80" }
  ],
  offers: [
    { id: "off-ladies", title: "Ladies Night", clubId: "sky-lounge", details: "Free entry + 1 complimentary drink for women before 11 PM.", valid: "Every Wednesday & Friday, 20:00–23:00", tag: "Ladies Night" },
    { id: "off-couple", title: "Couple Entry", clubId: "the-vault", details: "Couple cover ₹1,999 instead of ₹4,000. Includes one mixer.", valid: "Thu–Sat till midnight", tag: "Couple Entry" },
    { id: "off-early", title: "Early Bird", clubId: "club-mirage", details: "50% off cover if you check in before 10:30 PM.", valid: "Weeknights only", tag: "Early Bird" },
    { id: "off-happy", title: "Happy Hours", clubId: "elevate-club", details: "1+1 on house pours and selected cocktails.", valid: "20:30–22:00 daily", tag: "Happy Hours" },
    { id: "off-student", title: "Student Night", clubId: "neon-district", details: "₹499 entry with valid college ID. No cover after 1 AM.", valid: "Wednesdays", tag: "Student Night" },
    { id: "off-weekend", title: "Weekend Offers", clubId: "pulse-goa", details: "Group of 6+ gets a complimentary starter platter and priority queue.", valid: "Fri–Sun", tag: "Weekend Offers" }
  ],
  safetyHelplines: [
    { name: "National Emergency", number: "112", note: "Police, fire, ambulance" },
    { name: "Women Helpline", number: "1091", note: "24×7 support" },
    { name: "Women Helpline (NCW)", number: "7827170170", note: "WhatsApp / call" },
    { name: "Ambulance", number: "108", note: "Medical emergency" },
    { name: "Police", number: "100", note: "Local police" },
    { name: "Cybercrime", number: "1930", note: "Online abuse / fraud" }
  ],
  reviews: [
    { clubId: "club-mirage", name: "Riya S.", rating: 5, text: "Lights, sound and crowd were all on point. Security was professional." },
    { clubId: "club-mirage", name: "Aman T.", rating: 4, text: "Great Bollywood-EDM mix. Queue moved slowly after midnight." },
    { clubId: "sky-lounge", name: "Kabir M.", rating: 5, text: "Best terrace views in CP. House set was immaculate." },
    { clubId: "the-vault", name: "Sana P.", rating: 4, text: "Hip-hop night slaps. Cover is steep but the room delivers." },
    { clubId: "neon-district", name: "Dev K.", rating: 5, text: "Proper warehouse energy. Luna Pulse destroyed the room." }
  ]
};

const NP_SAFETY_DEFAULT = {
  verified: true,
  cctv: true,
  securityStaff: true,
  femaleStaff: false,
  wellLitExit: true,
  metalDetector: false,
  bagCheck: true,
  firstAid: true,
  lastEntry: "01:30",
  cabStand: true,
  safetyScore: 4.2
};

const NP_SAFETY_OVERRIDE = {
  "sky-lounge": { femaleStaff: true, metalDetector: true, safetyScore: 4.7, lastEntry: "01:00" },
  "club-mirage": { femaleStaff: true, safetyScore: 4.4, lastEntry: "02:00" },
  "the-vault": { metalDetector: true, bagCheck: true, safetyScore: 4.3, lastEntry: "02:30" },
  "neon-district": { femaleStaff: true, safetyScore: 4.5, lastEntry: "02:00" },
  "pulse-goa": { firstAid: true, wellLitExit: true, cabStand: true, safetyScore: 4.6, lastEntry: "05:00" },
  "elevate-club": { femaleStaff: true, safetyScore: 4.1, lastEntry: "01:30" }
};

NP_DATA.clubs.forEach(c => {
  c.safety = { ...NP_SAFETY_DEFAULT, ...(NP_SAFETY_OVERRIDE[c.id] || {}) };
});

function npCityName(id) {
  const c = NP_DATA.cities.find(x => x.id === id);
  return c ? c.name : id;
}
function npCityImage(id) {
  const c = NP_DATA.cities.find(x => x.id === id);
  if (c && c.image) return c.image;
  return "https://picsum.photos/seed/span-" + (id || "night") + "/800/500";
}
function npUserClubs() {
  try { return JSON.parse(localStorage.getItem("np_user_clubs") || "[]"); } catch (e) { return []; }
}
function npUserEvents() {
  try { return JSON.parse(localStorage.getItem("np_user_events") || "[]"); } catch (e) { return []; }
}
function npOverrides(key) {
  try { return JSON.parse(localStorage.getItem(key) || "{}"); } catch (e) { return {}; }
}
function npSetOverride(storeKey, id, patch) {
  const all = npOverrides(storeKey);
  all[id] = Object.assign({}, all[id] || {}, patch);
  localStorage.setItem(storeKey, JSON.stringify(all));
}
function applyOverrides(list, storeKey) {
  const ov = npOverrides(storeKey);
  return list.map(item => ov[item.id] ? Object.assign({}, item, ov[item.id]) : item);
}
function npAllClubs(includePending) {
  const gone = npDeletedIds("np_deleted_clubs");
  const list = applyOverrides(npUserClubs(), "np_club_edits")
    .filter(c => !gone.includes(c.id));
  if (includePending) return list;
  return list.filter(c => c.approved !== false);
}
function npDeletedIds(key) {
  try { return JSON.parse(localStorage.getItem(key) || "[]"); } catch (e) { return []; }
}
function npRemoveClub(id) {
  const ids = npDeletedIds("np_deleted_clubs");
  if (!ids.includes(id)) {
    ids.push(id);
    localStorage.setItem("np_deleted_clubs", JSON.stringify(ids));
  }
  localStorage.setItem("np_user_clubs", JSON.stringify(npUserClubs().filter(c => c.id !== id)));
}
function npRemoveEvent(id) {
  const ids = npDeletedIds("np_deleted_events");
  if (!ids.includes(id)) {
    ids.push(id);
    localStorage.setItem("np_deleted_events", JSON.stringify(ids));
  }
  localStorage.setItem("np_user_events", JSON.stringify(npUserEvents().filter(e => e.id !== id)));
}
function npAllEvents(includePending) {
  const gone = npDeletedIds("np_deleted_events");
  const list = applyOverrides(NP_DATA.events.concat(npUserEvents()), "np_event_edits")
    .filter(e => !gone.includes(e.id));
  if (includePending) return list;
  return list.filter(e => e.approved !== false);
}
function npClub(id) {
  return npAllClubs().find(c => c.id === id);
}
function npUserOffers() {
  try { return JSON.parse(localStorage.getItem("np_user_offers") || "[]"); } catch (e) { return []; }
}
function npSaveUserOffer(o) {
  const list = npUserOffers();
  const i = list.findIndex(x => x.id === o.id);
  if (i >= 0) list[i] = Object.assign({}, list[i], o);
  else list.unshift(o);
  localStorage.setItem("np_user_offers", JSON.stringify(list));
}
function npRemoveOffer(id) {
  const ids = npDeletedIds("np_deleted_offers");
  if (!ids.includes(id)) {
    ids.push(id);
    localStorage.setItem("np_deleted_offers", JSON.stringify(ids));
  }
  localStorage.setItem("np_user_offers", JSON.stringify(npUserOffers().filter(o => o.id !== id)));
}
function npAllOffers() {
  const gone = npDeletedIds("np_deleted_offers");
  const ov = npOverrides("np_offer_edits");
  return NP_DATA.offers.concat(npUserOffers())
    .filter(o => !gone.includes(o.id))
    .map(o => ov[o.id] ? Object.assign({}, o, ov[o.id]) : o);
}
function npSaveUserEvent(ev) {
  const list = npUserEvents();
  list.unshift(ev);
  localStorage.setItem("np_user_events", JSON.stringify(list));
}
function npSaveUserClub(club) {
  const list = npUserClubs();
  if (!list.some(c => c.id === club.id)) {
    list.unshift(club);
    localStorage.setItem("np_user_clubs", JSON.stringify(list));
  }
}
function npPatchUserEvent(id, patch) {
  localStorage.setItem("np_user_events", JSON.stringify(npUserEvents().map(e => e.id === id ? Object.assign({}, e, patch) : e)));
}
function npPatchUserClub(id, patch) {
  localStorage.setItem("np_user_clubs", JSON.stringify(npUserClubs().map(c => c.id === id ? Object.assign({}, c, patch) : c)));
}
function npEventDate(offset) {
  const d = new Date();
  d.setDate(d.getDate() + offset);
  return d;
}
function npFmtDate(d) {
  return d.toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "short" });
}
function npDayKey() {
  return ["sun", "mon", "tue", "wed", "thu", "fri", "sat"][new Date().getDay()];
}
function npIsOpenNow(club) {
  const key = npDayKey();
  if (club.closedDays && club.closedDays.includes(key)) return false;
  const now = new Date();
  const [oh, om] = club.open.split(":").map(Number);
  const [ch, cm] = club.close.split(":").map(Number);
  const start = oh * 60 + om;
  let end = ch * 60 + cm;
  const cur = now.getHours() * 60 + now.getMinutes();
  if (end <= start) {
    return cur >= start || cur <= end;
  }
  return cur >= start && cur <= end;
}
