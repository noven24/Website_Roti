import React from "react";
import { ShoppingCart } from "lucide-react";

const categories = [
  {
    name: "Breads",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=600",
  },
  {
    name: "Traditional Snacks",
    image:
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&q=80&w=600",
  },
  {
    name: "Chiffon & Roll Cakes",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=600",
  },
  {
    name: "Donuts",
    image:
      "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=600",
  },
  {
    name: "Pastry and Danish",
    image:
      "https://plus.unsplash.com/premium_photo-1673282160288-9d5381f471af?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Pudding",
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=600",
  },
  {
    name: "Cakes",
    image:
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&q=80&w=600",
  },
  {
    name: "Lapis",
    image:
      "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&q=80&w=600",
  },
  {
    name: "Cookies",
    image:
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&q=80&w=600",
  },
  {
    name: "Snack Box",
    image:
      "https://images.unsplash.com/photo-1587668178277-295251f900ce?auto=format&fit=crop&q=80&w=600",
  },
];

const Categories = () => {
  return (
    <section className="py-12 bg-white flex flex-col items-center">
      {/* Red Cart Icon matching reference */}
      <div className="mb-4 text-brand-primary mt-4">
        <ShoppingCart size={64} strokeWidth={1.5} />
      </div>

      {/* Title */}
      <h2 className="text-[26px] font-normal text-brand-dark tracking-wide mb-10 font-sans">
        Shop By Categories
      </h2>

      {/* Grid */}
      <div className="max-w-[1100px] w-full mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group cursor-pointer border border-gray-200 bg-white flex flex-col hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-full aspect-square overflow-hidden bg-gray-50 flex items-center justify-center relative">
                {/* Collage overlay simulation for specific items if you look closely at the Holland Bakery site, some uses collages. We use single expressive images here for clean layout */}
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  loading="lazy"
                />
              </div>
              <div className="border-t border-gray-200 py-3 text-center bg-white">
                <h3 className="text-[14px] text-gray-800 font-medium tracking-tight">
                  {category.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
