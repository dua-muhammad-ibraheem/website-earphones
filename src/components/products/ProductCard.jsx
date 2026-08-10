import { useContext, useState } from "react";
import { Heart, ShoppingCart, Star, Check } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import CartContext from "../../context/CartContext";
import WishlistContext from "../../context/WishlistContext";

const EASE = [0.16, 1, 0.3, 1];

const ProductCard = ({ product }) => {
  const [justAdded, setJustAdded] = useState(false);

  const { cartItems, setCartItems } = useContext(CartContext);

  const { wishlistItems, setWishlistItems } =
    useContext(WishlistContext);

  const isWishlisted = wishlistItems.some(
    (item) => item.id === product.id
  );

  const discount =
    product.oldPrice && product.oldPrice > product.price
      ? Math.round(
          ((product.oldPrice - product.price) / product.oldPrice) * 100
        )
      : null;

  const handleWishlist = () => {
    if (isWishlisted) {
      const updatedWishlist = wishlistItems.filter(
        (item) => item.id !== product.id
      );

      setWishlistItems(updatedWishlist);
    } else {
      setWishlistItems([
        ...wishlistItems,
        product,
      ]);
    }
  };

  const handleAddToCart = () => {
    const existingItem = cartItems.find(
      (item) => item.id === product.id
    );

    if (existingItem) {
      const updatedCart = cartItems.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

      setCartItems(updatedCart);
    } else {
      setCartItems([
        ...cartItems,
        {
          ...product,
          quantity: 1,
        },
      ]);
    }

    setJustAdded(true);

    setTimeout(() => {
      setJustAdded(false);
    }, 1500);
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: EASE }}
      className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-shadow duration-300 hover:border-emerald-200 hover:shadow-xl"
    >
      {/* Image */}
      <div className="relative flex h-56 items-center justify-center overflow-hidden bg-white">
        {/* Discount Badge */}
        {discount && (
          <span className="absolute left-4 top-4 z-10 rounded-full bg-emerald-500 px-3 py-1 text-xs font-bold text-white">
            -{discount}%
          </span>
        )}

        {/* Wishlist */}
        <button
          onClick={handleWishlist}
          aria-label={
            isWishlisted
              ? "Remove from wishlist"
              : "Add to wishlist"
          }
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
            transition={{
              duration: 0.25,
              ease: EASE,
            }}
            className="block"
          >
            <Heart
              size={18}
              fill={
                isWishlisted
                  ? "currentColor"
                  : "none"
              }
            />
          </motion.span>
        </button>

        <img
          src={product.image}
          alt={product.name}
          className="h-48 object-contain transition duration-500 ease-out group-hover:-translate-y-1 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="space-y-3 p-6">
        <span className="text-sm font-medium text-emerald-500">
          {product.category}
        </span>

        <h3 className="line-clamp-1 text-xl font-bold leading-snug text-slate-900">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, index) => {
            const filled =
              index < Math.round(product.rating || 0);

            return (
              <Star
                key={index}
                size={16}
                fill={
                  filled
                    ? "currentColor"
                    : "none"
                }
                className={
                  filled
                    ? "text-yellow-400"
                    : "text-slate-300"
                }
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
            <span className="text-sm text-slate-400 line-through">
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
            className={`relative w-14 overflow-hidden rounded-xl p-3 text-white transition-colors duration-300 ${
              justAdded
                ? "bg-emerald-600"
                : "bg-emerald-500 hover:bg-emerald-600"
            }`}
            aria-label="Add to cart"
          >
            <motion.span
              key={justAdded ? "check" : "cart"}
              initial={{
                opacity: 0,
                scale: 0.6,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.2,
                ease: EASE,
              }}
              className="flex items-center justify-center"
            >
              {justAdded ? (
                <Check size={20} />
              ) : (
                <ShoppingCart size={20} />
              )}
            </motion.span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;