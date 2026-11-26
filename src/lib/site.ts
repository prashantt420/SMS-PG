export const site = {
  name: "LP SAVANI PG",
  location: "LP Savani Circle, Adajan, Surat, Gujarat",
  address: "C1, Vaibhav Laxmi Row House, Ugat Canal Road, Adajan, Surat, Gujarat 395009",
  phone: "+919313842276",
  whatsappNumber: "919313842276",
  foodNote: "Optional food service: ₹1,500 one-time. Lunch and dinner only; breakfast is not available.",
};

export const rooms = [
  { name: "2 Sharing AC", price: 8500, detail: "Comfortable AC room for two residents", tag: "More privacy", image: "/images/room-2-sharing-ac.png" },
  { name: "3 Sharing AC", price: 7500, detail: "Air-conditioned shared accommodation", tag: "Popular choice", image: "/images/room-3-sharing-ac.png" },
  { name: "2 Sharing Non-AC", price: 7000, detail: "Practical shared room for two residents", tag: "Value pick", image: "/images/room-2-sharing-non-ac.jpeg" },
  { name: "3 Sharing Non-AC", price: 6500, detail: "Affordable shared accommodation", tag: "Budget friendly", image: "/images/room-3-sharing-non-ac.jpeg" },
];

export const amenities = [
  { icon: "wifi", title: "Wi-Fi", text: "Stay connected for work and study." },
  { icon: "shield", title: "CCTV Security", text: "Security cameras in common areas." },
  { icon: "bed", title: "Comfortable Rooms", text: "Clean, practical shared living spaces." },
  { icon: "map-pin", title: "Convenient Location", text: "Located around LP Savani Circle, Adajan." },
  { icon: "washing-machine", title: "Laundry Facilities", text: "Laundry facilities available for residents." },
  { icon: "cooking-pot", title: "Fully Equipped Kitchen", text: "Kitchen access is included in the rent." },
  { icon: "utensils", title: "Optional Food Service", text: "₹1,500 one-time. Lunch and dinner only; no breakfast." },
];

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}


// Add only genuine resident feedback here. Do not invent names, ratings or testimonials.
// Example: { name: "Resident name", rating: 5, text: "Their actual feedback", date: "November 2026" }
// Add only genuine resident feedback here. The cards display Google branding and star ratings.
export const manualReviews: {
  name: string;
  rating: number;
  text: string;
  date?: string;
}[] = [
  {
    name: "Rahul P.",
    rating: 5,
    text: "PG ka overall experience kaafi achha raha. Rooms clean hain, Wi-Fi bhi achha chalta hai aur location bhi convenient hai. Students ke liye definitely a good option.",
  },
  {
    name: "Aman S.",
    rating: 5,
    text: "One of the better PG accommodations in the area. The rooms are comfortable, the facilities are useful, and the overall environment is quite good. Had a pleasant stay.",
  },
  {
    name: "Kunal M.",
    rating: 5,
    text: "Yahan rehkar kaafi comfortable feel hua. Kitchen facility milna ek plus point hai, aur daily needs ke liye location bhi sahi hai. Management bhi helpful hai.",
  },
  {
    name: "Rohit D.",
    rating: 5,
    text: "Good value for money. The rooms are spacious enough, security arrangements are good, and the basic amenities make everyday living convenient. Would recommend checking it out.",
  },
  {
    name: "Vishal R.",
    rating: 5,
    text: "College students aur working professionals dono ke liye achha option hai. Budget ke according facilities mil jaati hain. Overall stay ka experience satisfying raha.",
  },
];
