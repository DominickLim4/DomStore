import Link from "next/link";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

type Category = {
  title: string;
  slug: string;
};

const categoriesData: Category[] = [
  {
    "title": "Camisetas",
    "slug": "/shop?category=camisetas"
  },
  {
    "title": "Bermudas",
    "slug": "/shop?category=bermudas"
  },
  {
    "title": "Camisas",
    "slug": "/shop?category=camisas"
  },
  {
    "title": "Moletom com capuz",
    "slug": "/shop?category=moletom-com-capuz"
  },
  {
    "title": "Jeans",
    "slug": "/shop?category=jeans"
  },
];

const CategoriesSection = () => {
  return (
    <div className="flex flex-col space-y-0.5 text-black/60">
      {categoriesData.map((category, idx) => (
        <Link
          key={idx}
          href={category.slug}
          className="flex items-center justify-between py-2"
        >
          {category.title} <MdKeyboardArrowRight />
        </Link>
      ))}
    </div>
  );
};

export default CategoriesSection;
