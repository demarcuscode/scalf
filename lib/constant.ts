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
