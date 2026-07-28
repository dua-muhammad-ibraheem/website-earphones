import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.3,
      }}
    >
      <Link
        to={`/products?category=${category.slug}`}
        className="group block overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-emerald-500 hover:shadow-2xl"
      >
        {/* Image Area */}

        <div className="flex h-60 items-center justify-center overflow-hidden bg-slate-50">
          <img
            src={category.image}
            alt={category.name}
            className="h-44 w-44 object-contain transition duration-500 group-hover:scale-110"
          />
        </div>

      {/* Content */}

<div className="space-y-3 p-6">
  <div>
    <h3 className="text-2xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-emerald-500">
      {category.name}
    </h3>

    <p className="mt-2 text-sm text-slate-500">
      {category.productCount} Products
    </p>
  </div>

  <div className="flex items-center gap-2 font-semibold text-emerald-500">
    <span>Explore</span>

    <ArrowRight
      size={18}
      className="transition-transform duration-300 group-hover:translate-x-2"
    />
  </div>
</div>
      </Link>
    </motion.div>
  );
};

export default CategoryCard;