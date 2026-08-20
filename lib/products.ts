export type Category = "Clean" | "Care" | "Carry";

export type Product = {
  id: string;
  name: string;
  subtitle: string;
  category: Category;
  price: number;
  repeatPrice: number;
  repeatInterval: string;
  image: string;
  credentials: string[];
  proof: string[];
};

export const PRODUCTS: Product[] = [
  {
    id: "laundry-sheets",
    name: "Laundry sheets",
    subtitle: "60 loads · plastic-light",
    category: "Clean",
    price: 18.90,
    repeatPrice: 17.01,
    repeatInterval: "every 6 weeks",
    image: "/p5.png",
    credentials: ["Pare verified", "Plastic-light", "Made in Switzerland"],
    proof: ["60 loads per compact pack", "Plastic-light refill format", "Made in Switzerland"],
  },
  {
    id: "all-purpose-cleaner",
    name: "All-purpose cleaner",
    subtitle: "Concentrate · 500ml",
    category: "Clean",
    price: 9.90,
    repeatPrice: 8.91,
    repeatInterval: "every 6 weeks",
    image: "/p7.png",
    credentials: ["Pare verified", "Plastic-light", "Plant-based"],
    proof: ["One bottle replaces 12 plastic bottles", "Biodegradable formula", "Refill available"],
  },
  {
    id: "hand-soap-refill",
    name: "Hand soap refill",
    subtitle: "Refill pouch · low waste",
    category: "Clean",
    price: 8.50,
    repeatPrice: 7.65,
    repeatInterval: "every 6 weeks",
    image: "/p3.png",
    credentials: ["Pare verified", "Plastic-light", "Made nearby"],
    proof: ["Refill pouch reduces plastic by 80%", "Gentle on skin", "No palm oil"],
  },
  {
    id: "toothpaste-tablets",
    name: "Toothpaste tablets",
    subtitle: "Fluoride-free · refill jar",
    category: "Care",
    price: 12.50,
    repeatPrice: 11.25,
    repeatInterval: "every 8 weeks",
    image: "/p1.png",
    credentials: ["Pare verified", "Plastic-free", "Made in Switzerland"],
    proof: ["Zero plastic packaging", "Fluoride-free formula", "Refillable glass jar"],
  },
  {
    id: "shampoo-bar",
    name: "Shampoo bar",
    subtitle: "50 washes · plastic-free",
    category: "Care",
    price: 14.50,
    repeatPrice: 13.05,
    repeatInterval: "every 6 weeks",
    image: "/p4.png",
    credentials: ["Pare verified", "Plastic-free", "Made nearby"],
    proof: ["50 washes per bar", "Zero plastic packaging", "Sulphate-free"],
  },
  {
    id: "reusable-food-wraps",
    name: "Reusable food wraps",
    subtitle: "Washable · made in Europe",
    category: "Carry",
    price: 15.00,
    repeatPrice: 13.50,
    repeatInterval: "every 12 weeks",
    image: "/p2.png",
    credentials: ["Pare verified", "Plastic-free", "Made in Europe"],
    proof: ["Replaces 1,000 plastic bags", "Machine washable", "Food safe wax coating"],
  },
  {
    id: "conditioner-bar",
    name: "Conditioner bar",
    subtitle: "60 washes · plastic-free",
    category: "Care",
    price: 13.50,
    repeatPrice: 12.15,
    repeatInterval: "every 8 weeks",
    image: "/p8.png",
    credentials: ["Pare verified", "Plastic-free"],
    proof: ["60 washes per bar", "No silicones", "Compostable wrapper"],
  },
  {
    id: "dish-soap-concentrate",
    name: "Dish soap concentrate",
    subtitle: "500ml · refillable",
    category: "Clean",
    price: 11.00,
    repeatPrice: 9.90,
    repeatInterval: "every 6 weeks",
    image: "/p9.png",
    credentials: ["Pare verified", "Plant-based"],
    proof: ["Makes 5L of dish soap", "Phosphate-free", "Refillable glass bottle"],
  },
  {
    id: "bamboo-toothbrush",
    name: "Bamboo toothbrush",
    subtitle: "Biodegradable · 2 pack",
    category: "Care",
    price: 8.00,
    repeatPrice: 7.20,
    repeatInterval: "every 12 weeks",
    image: "/p10.png",
    credentials: ["Plastic-free", "Biodegradable"],
    proof: ["Handle 100% bamboo", "Soft BPA-free bristles", "Compostable packaging"],
  },
  {
    id: "stainless-bottle",
    name: "Stainless steel bottle",
    subtitle: "500ml · lifetime guarantee",
    category: "Carry",
    price: 32.00,
    repeatPrice: 32.00,
    repeatInterval: "",
    image: "/p13.png",
    credentials: ["Pare verified", "Made in Europe"],
    proof: ["Lifetime guarantee", "BPA-free", "Double-wall insulation"],
  },
];

export const CATEGORIES = ["Clean", "Care", "Carry"] as const;

export function getProduct(id: string): Product | undefined {
  return PRODUCTS.find(p => p.id === id);
}

export function getByCategory(cat: Category): Product[] {
  return PRODUCTS.filter(p => p.category === cat);
}
