import { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Heart, ShoppingCart, Star, ArrowLeft, Check } from "lucide-react";
import { motion } from "framer-motion";

import dummyProducts from "../data/products";
import CartContext from "../context/CartContext";
import WishlistContext from "../context/WishlistContext";

const EASE = [0.16, 1, 0.3, 1];

const ProductDetails = () => {
  const { id } = useParams();

  const product = dummyProducts.find(
    (item) => item.id === Number(id)
  );

  const { cartItems, setCartItems } = useContext(CartContext);
  const { wishlistItems, setWishlistItems } =
    useContext(WishlistContext);

  const [quantity, setQuantity] = useState(1);
  const [justAdded, setJustAdded] = useState(false);

  // Product not found
  if (!product) {
    return (
      <section className="min-h-screen bg-slate-50 px-4 py-20">
        <div className="mx-auto max-w-3xl rounded-3xl bg-white p-10 text-center shadow-sm">
          <h1 className="text-3xl font-bold text-slate-900">
            Product Not Found
          </h1>

          <p className="mt-3 text-slate-500">
            Sorry, this product doesn't exist.
          </p>

          <Link
            to="/products"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-white transition hover:bg-emerald-600"
          >
            <ArrowLeft size={18} />
            Back to Products
          </Link>
        </div>
      </section>
    );
  }

  const discount =
    product.oldPrice && product.oldPrice > product.price
      ? Math.round(
          ((product.oldPrice - product.price) /
            product.oldPrice) *
            100
        )
      : null;

  const isWishlisted = wishlistItems.some(
    (item) => item.id === product.id
  );

  const handleWishlist = () => {
    if (isWishlisted) {
      setWishlistItems(
        wishlistItems.filter((item) => item.id !== product.id)
      );
    } else {
      setWishlistItems([...wishlistItems, product]);
    }
  };

  const handleAddToCart = () => {
    const existingItem = cartItems.find(
      (item) => item.id === product.id
    );

    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + quantity,
              }
            : item
        )
      );
    } else {
      setCartItems([
        ...cartItems,
        {
          ...product,
          quantity,
        },
      ]);
    }
    
 setQuantity(1);

    setJustAdded(true);

    setTimeout(() => {
      setJustAdded(false);
    }, 1500);
  };

  return (
    <section className="min-h-screen bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-[1200px] px-4 lg:px-8">

        {/* Back */}
        <Link
          to="/products"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-emerald-500"
        >
          <ArrowLeft size={18} />
          Back to Products
        </Link>

        {/* Main Product */}
        <div className="grid gap-10 rounded-3xl bg-white p-6 shadow-sm sm:p-8 lg:grid-cols-2 lg:p-10">

          {/* Image */}
          <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden rounded-3xl bg-slate-50">

            {discount && (
              <span className="absolute left-5 top-5 z-10 rounded-full bg-emerald-500 px-4 py-2 text-sm font-bold text-white">
                -{discount}%
              </span>
            )}

            <button
              onClick={handleWishlist}
              aria-label={
                isWishlisted
                  ? "Remove from wishlist"
                  : "Add to wishlist"
              }
              className={`absolute right-5 top-5 z-10 rounded-full p-3 shadow-md transition ${
                isWishlisted
                  ? "bg-emerald-500 text-white"
                  : "bg-white text-slate-700 hover:bg-emerald-500 hover:text-white"
              }`}
            >
              <Heart
                size={22}
                fill={
                  isWishlisted
                    ? "currentColor"
                    : "none"
                }
              />
            </button>

            <motion.img
              src={product.image}
              alt={product.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                ease: EASE,
              }}
              className="h-[350px] w-full object-contain p-8 transition duration-500 hover:scale-105"
            />
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center">

            <span className="text-sm font-bold uppercase tracking-[2px] text-emerald-500">
              {product.category}
            </span>

            <h1 className="mt-4 text-4xl font-black leading-tight text-slate-900 sm:text-5xl">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="mt-5 flex items-center gap-1">
              {[...Array(5)].map((_, index) => {
                const filled =
                  index < Math.round(product.rating);

                return (
                  <Star
                    key={index}
                    size={19}
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

              <span className="ml-2 text-sm font-medium text-slate-500">
                {product.rating} / 5
              </span>
            </div>

            {/* Price */}
            <div className="mt-7 flex items-baseline gap-4">
              <span className="text-4xl font-black text-slate-900">
                ${product.price}
              </span>

              {product.oldPrice && (
                <span className="text-lg text-slate-400 line-through">
                  ${product.oldPrice}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="mt-6 max-w-xl leading-7 text-slate-500">
              Experience premium sound quality with the{" "}
              {product.name}. Designed for comfortable everyday
              listening with a clean and modern design.
            </p>

            {/* Quantity */}
            <div className="mt-8">
              <p className="mb-3 text-sm font-semibold text-slate-800">
                Quantity
              </p>

              <div className="flex w-fit items-center overflow-hidden rounded-xl border border-slate-300">
                <button
                  onClick={() =>
                    setQuantity((prev) =>
                      Math.max(1, prev - 1)
                    )
                  }
                  className="px-5 py-3 text-lg transition hover:bg-slate-100"
                >
                  −
                </button>

                <span className="border-x border-slate-300 px-6 py-3 font-bold">
                  {quantity}
                </span>

                <button
                  onClick={() =>
                    setQuantity((prev) => prev + 1)
                  }
                  className="px-5 py-3 text-lg transition hover:bg-slate-100"
                >
                  +
                </button>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex gap-4">

              <motion.button
                onClick={handleAddToCart}
                whileTap={{ scale: 0.97 }}
                className={`flex flex-1 items-center justify-center gap-2 rounded-xl py-4 font-bold text-white transition ${
                  justAdded
                    ? "bg-emerald-600"
                    : "bg-emerald-500 hover:bg-emerald-600"
                }`}
              >
                {justAdded ? (
                  <>
                    <Check size={20} />
                    Added to Cart
                  </>
                ) : (
                  <>
                    <ShoppingCart size={20} />
                    Add to Cart
                  </>
                )}
              </motion.button>

              <button
                onClick={handleWishlist}
                className={`rounded-xl border px-5 transition ${
                  isWishlisted
                    ? "border-emerald-500 bg-emerald-50 text-emerald-500"
                    : "border-slate-300 text-slate-700 hover:border-emerald-500 hover:text-emerald-500"
                }`}
              >
                <Heart
                  size={22}
                  fill={
                    isWishlisted
                      ? "currentColor"
                      : "none"
                  }
                />
              </button>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;