import {
  BarChart2,
  Bell,
  CreditCard,
  FileText,
  Home,
  MessageSquare,
} from "lucide-react";

export const ratedhostels = [
  {
    id: "1",
    imageurl:
      "https://bez5btbsbycwy9xv.public.blob.vercel-storage.com/kasol.jpg",
    label: "kasol",
    price: "2000",
    city: "pokuaase",
    rating: "5.5",
  },
  {
    id: "2",
    imageurl:
      "https://bez5btbsbycwy9xv.public.blob.vercel-storage.com/evandylegon.jpg",
    label: "evandy legon",
    price: "3000",
    city: "legon",
    rating: "5.5",
  },
  {
    id: "3",
    imageurl:
      "https://bez5btbsbycwy9xv.public.blob.vercel-storage.com/guss.jpeg",
    label: "guss",
    price: "4000",
    city: "ho",
    rating: "5.5",
  },
  {
    id: "4",
    imageurl:
      "https://bez5btbsbycwy9xv.public.blob.vercel-storage.com/hostel.jpg",
    label: "Mason",
    rating: "5.5",
    price: "5000",
    city: "kumasi",
  },
  {
    id: "1",
    imageurl:
      "https://bez5btbsbycwy9xv.public.blob.vercel-storage.com/victorytowers1.jpeg",
    label: "victory towers",
    price: "8000",
    city: "kumasi",
    rating: "5.5",
  },
];

export const dashboardlinks = [
  { name: "Dashboard", href: "/", icon: Home },
  { name: "Charts", href: "/charts", icon: BarChart2 },
  { name: "Chat", href: "/chat", icon: MessageSquare },
  { name: "Payments", href: "/payments", icon: CreditCard },
  { name: "Notifications", href: "/notifications", icon: Bell },
  { name: "Content", href: "/content", icon: FileText },
];
export const adminlinks = [
  { name: "Dashboard", href: "/", icon: Home },
  { name: "Charts", href: "/charts", icon: BarChart2 },
  { name: "Chat", href: "/chat", icon: MessageSquare },
  { name: "Payments", href: "/payments", icon: CreditCard },
  { name: "Notifications", href: "/notifications", icon: Bell },
  { name: "Content", href: "/content", icon: FileText },
];

export const colortheme = {
  primary: "#6D28D9",
  secondary: "#6B5CF6",
  accent: "#FACC15",
  background: "#FAF5FF",
  card: "#FFFFFF",
  text: "#1E1B4B",
};

export const sponsors = [
  {
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/9/9a/Vercel_logo_2025.svg",
    name: "Vercel",
  },
  { imageUrl: "/supabasel.svg", name: "Supabase" },
  {
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg",
    name: "Airbnb",
  },
  {
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/0/0b/Paystack_Logo.png",
    name: "Paystack",
  },
  { imageUrl: "/knust.png", name: "KNUST" },
];

export const bookings = [
  {
    id: "1",
    hostelName: "evandy",
    applicant: "marcus oware",
    type: "monthly",
    startingDate: "12-05-25",
    course: "computer science",
  },
  {
    id: "2",
    hostelName: "wangyingo",
    applicant: "kofi oware",
    type: "monthly",
    startingDate: "12-05-25",
    course: "computer science",
  },
  {
    id: "3",
    hostelName: "victory towers",
    applicant: "esther oware",
    type: "monthly",
    startingDate: "12-05-25",
    course: "computer science",
  },
  {
    id: "4",
    hostelName: "franco hostel",
    applicant: "emma oware",
    type: "monthly",
    startingDate: "12-05-25",
    course: "computer science",
  },
  {
    id: "5",
    hostelName: "amen hostel",
    applicant: "joe lantern",
    type: "monthly",
    startingDate: "12-05-25",
    course: "computer science",
  },
];
