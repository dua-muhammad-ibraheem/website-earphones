import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { getCategories } from "../../services/categoryService";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getCategories();
      setCategories(data);
    };

    fetchCategories();
  }, []);

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      {/* Decorative background accents — matches the Hero section's identity so the page feels cohesive */}
      <div className="pointer-events-none absolute -top-20 left-1/2 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-emerald-50 blur-[100px]" />

      <div className="relative mx-auto max-w-[1340px] px-6 lg:px-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 flex flex-col items-center text-center"
        >
          <span className="inline-flex items-center rounded-full bg-emerald-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[2px] text-emerald-600">
            Categories
          </span>

          {/* Badge aur heading ke beech breathing room diya (mt-4 -> mt-6) */}
          <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-slate-900">
            Shop by <span className="text-emerald-500">Category</span>
          </h2>

          {/* Divider ab heading ke zyada qareeb hai (mt-5 -> mt-3) */}
          <div className="mt-3 h-1 w-16 rounded-full bg-emerald-500" />

          <p className="mt-5 max-w-xl text-base sm:text-lg leading-7 sm:leading-8 text-slate-500">
            Find the perfect audio products for every lifestyle, whether
            you're a gamer, music lover or professional.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
            >
              <CategoryCard category={category} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;