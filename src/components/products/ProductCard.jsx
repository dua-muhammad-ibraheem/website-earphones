import { useState } from "react";
import { Heart, ShoppingCart, Star, Check } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const EASE = [0.16, 1, 0.3, 1];

const ProductCard = ({ product }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  const discount =
    product.oldPrice && product.oldPrice > product.price
      ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
      : null;

  const handleAddToCart = () => {
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1500);
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: EASE }}
      className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:border-emerald-200 transition-shadow duration-300"
    >
      {/* Image */}
      <div className="relative flex h-64 items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
        {/* Discount badge */}
        {discount && (
          <span className="absolute left-4 top-4 z-10 rounded-full bg-emerald-500 px-3 py-1 text-xs font-bold text-white shadow-sm">
            -{discount}%
          </span>
        )}

        {/* Wishlist toggle */}
        <button
          onClick={() => setIsWishlisted((prev) => !prev)}
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
          className={`absolute right-4 top-4 z-10 rounded-full p-2 shadow transition-all duration-300 ${
            isWishlisted
              ? "bg-emerald-500 text-white"
              : "bg-white text-slate-700 hover:bg-emerald-500 hover:text-white"
          }`}
        >
          <motion.span
            key={isWishlisted}
            initial={{ scale: 0.6 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="block"
          >
            <Heart size={18} fill={isWishlisted ? "currentColor" : "none"} />
          </motion.span>
        </button>

        <img
          src={product.image}
          alt={product.name}
          className="h-48 object-contain transition duration-500 ease-out group-hover:scale-110 group-hover:-translate-y-1"
        />
      </div>

      {/* Content */}
      <div className="space-y-3 p-6">
        <span className="text-sm font-medium text-emerald-500">
          {product.category}
        </span>

        <h3 className="text-xl font-bold text-slate-900 leading-snug line-clamp-1">
          {product.name}
        </h3>

        {/* Rating — accurately reflects product.rating instead of always showing 5 filled stars */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, index) => {
            const filled = index < Math.round(product.rating || 0);
            return (
              <Star
                key={index}
                size={16}
                fill={filled ? "currentColor" : "none"}
                className={filled ? "text-yellow-400" : "text-slate-300"}
              />
            );
          })}
          <span className="ml-2 text-sm text-slate-500">
            ({product.rating})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-3">
          <span className="text-2xl font-bold text-slate-900">
            ${product.price}
          </span>
          {product.oldPrice && (
            <span className="text-slate-400 line-through text-sm">
              ${product.oldPrice}
            </span>
          )}
        </div>

        {/* Buttons */}
        <div className="flex gap-3 pt-1">
          <Link
            to={`/product/${product.id}`}
            className="flex-1 rounded-xl border border-slate-300 py-3 text-center font-semibold transition-colors duration-300 hover:border-emerald-500 hover:text-emerald-500"
          >
            Details
          </Link>

          <motion.button
            onClick={handleAddToCart}
            whileTap={{ scale: 0.92 }}
            className={`relative w-14 rounded-xl p-3 text-white transition-colors duration-300 overflow-hidden ${
              justAdded ? "bg-emerald-600" : "bg-emerald-500 hover:bg-emerald-600"
            }`}
            aria-label="Add to cart"
          >
            <motion.span
              key={justAdded ? "check" : "cart"}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, ease: EASE }}
              className="flex items-center justify-center"
            >
              {justAdded ? <Check size={20} /> : <ShoppingCart size={20} />}
            </motion.span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;