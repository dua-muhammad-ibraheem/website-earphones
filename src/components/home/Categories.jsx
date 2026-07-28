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
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[1340px] px-6 lg:px-10">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[3px] text-emerald-500">
            Categories
          </span>

          <h2 className="mt-3 text-4xl font-black text-slate-900">
            Shop by Category
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Find the perfect audio products for every lifestyle,
            whether you're a gamer, music lover or professional.
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