import sneakers from "../assets/sneakers.webp";
import skincare from "../assets/skincare.webp";
import latte from "../assets/latte.webp";
import headphones from "../assets/headphones.webp";
import plants from "../assets/plants.webp";
import flowers from "../assets/flowers.webp";
import pottery from "../assets/pottery.webp";
import serum from "../assets/serum.webp";
import coffee from "../assets/coffee.webp";
import earbuds from "../assets/earbuds.webp";

export interface ReelItem {
  id: string;
  title: string;
  category: string;
  poster: string;
  alt: string;
  videoSrc?: string;
}

export const reelItems: ReelItem[] = [
  {
    id: "sneaker-study",
    title: "Everyday, elevated",
    category: "Footwear",
    poster: sneakers,
    alt: "A vivid red sneaker photographed against a soft studio background",
  },
  {
    id: "skin-reset",
    title: "The skin reset",
    category: "Skincare",
    poster: skincare,
    alt: "Clean skincare bottles arranged for a bright product photograph",
  },
  {
    id: "slow-pour",
    title: "A slower morning",
    category: "Coffee",
    poster: latte,
    alt: "A freshly made coffee drink in warm morning light",
  },
  {
    id: "sound-form",
    title: "Sound, in form",
    category: "Audio",
    poster: headphones,
    alt: "Premium over-ear headphones photographed as a product still",
  },
  {
    id: "little-jungle",
    title: "A little more green",
    category: "Home & garden",
    poster: plants,
    alt: "A leafy houseplant in a minimal ceramic pot",
  },
  {
    id: "wild-bloom",
    title: "Made to make someone’s day",
    category: "Flowers",
    poster: flowers,
    alt: "A colorful bouquet of fresh flowers",
  },
  {
    id: "made-by-hand",
    title: "Made by hand",
    category: "Ceramics",
    poster: pottery,
    alt: "Handmade ceramic pottery arranged in a studio",
  },
  {
    id: "daily-drop",
    title: "Your daily drop",
    category: "Skincare",
    poster: serum,
    alt: "A minimal skincare product photographed on a light background",
  },
  {
    id: "coffee-ritual",
    title: "The coffee ritual",
    category: "Coffee",
    poster: coffee,
    alt: "Coffee and brewing equipment arranged for a coffee ritual",
  },
  {
    id: "studio-sound",
    title: "Find your focus",
    category: "Audio",
    poster: earbuds,
    alt: "Modern wireless earbuds photographed on a clean surface",
  },
];

export const workItems = [
  {
    title: "A brighter first step",
    brand: "SOLE STUDY",
    category: "Footwear · Product story",
    image: sneakers,
    alt: "Bright red sneaker for a footwear campaign concept",
  },
  {
    title: "Small moments, well made",
    brand: "SUNDAY FORM",
    category: "Home · Maker story",
    image: pottery,
    alt: "Hand-finished ceramics for a maker story concept",
  },
  {
    title: "A ritual worth keeping",
    brand: "GOOD KIND",
    category: "Beauty · Launch concept",
    image: skincare,
    alt: "Skincare products for a beauty launch concept",
  },
];
