import { useParams } from "react-router-dom";
import { useState, useContext } from "react";

import dummyProducts from "../data/products";
import CartContext from "../context/CartContext";
import WishlistContext from "../context/WishlistContext";

const ProductDetails = () => {
  const { id } = useParams();

  const { cartItems, setCartItems } = useContext(CartContext);
  const { wishlistItems, setWishlistItems } =
    useContext(WishlistContext);

  const [quantity, setQuantity] = useState(1);

  const features = [
    "Active Noise Cancellation",
    "Bluetooth 5.3",
    "30 Hours Battery Life",
    "Fast USB-C Charging",
    "1 Year Warranty",
  ];

  const product = dummyProducts.find(
    (item) => item.id === Number(id)
  );

  const handleAddToCart = () => {
    const existingItem = cartItems.find(
      (item) => item.id === product.id
    );

    if (existingItem) {
      const updatedCart = cartItems.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + quantity,
            }
          : item
      );

      setCartItems(updatedCart);
    } else {
      setCartItems([
        ...cartItems,
        {
          ...product,
          quantity,
        },
      ]);
    }

    alert("Product added to cart!");
  };

  const handleAddToWishlist = () => {
    const exists = wishlistItems.find(
      (item) => item.id === product.id
    );

    if (exists) {
      alert("Already in wishlist!");
      return;
    }

    setWishlistItems([
      ...wishlistItems,
      product,
    ]);

    alert("Product added to wishlist!");
  };

  if (!product) {
    return (
      <div className="py-20 text-center">
        Product not found.
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-slate-50 py-16">
      <div className="mx-auto grid max-w-[1340px] gap-12 px-6 lg:grid-cols-2 lg:px-10">

        {/* Product Image */}

        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <img
            src={product.image}
            alt={product.name}
            className="mx-auto h-[420px] object-contain"
          />
        </div>

        {/* Product Info */}

        <div>
          <span className="text-sm font-semibold uppercase tracking-[3px] text-emerald-500">
            Headphones
          </span>

          <h1 className="mt-3 text-5xl font-black text-slate-900">
            {product.name}
          </h1>

          <div className="mt-5 flex items-center gap-4">
            <span className="text-4xl font-bold text-slate-900">
              ${product.price}
            </span>

            <span className="text-xl text-slate-400 line-through">
              ${product.oldPrice}
            </span>
          </div>

          <p className="mt-8 leading-8 text-slate-600">
            Experience industry-leading noise cancellation,
            premium sound quality and all-day comfort.
            Perfect for music lovers, professionals and travel.
          </p>

          {/* Quantity */}

          <div className="mt-10">
            <h3 className="mb-3 text-lg font-semibold text-slate-900">
              Quantity
            </h3>

            <div className="flex w-fit items-center overflow-hidden rounded-xl border border-slate-300">
              <button
                onClick={() =>
                  setQuantity((prev) =>
                    prev > 1 ? prev - 1 : 1
                  )
                }
                className="px-5 py-3 text-xl font-bold hover:bg-slate-100"
              >
                -
              </button>

              <span className="border-x border-slate-300 px-6 py-3 font-semibold">
                {quantity}
              </span>

              <button
                onClick={() =>
                  setQuantity((prev) => prev + 1)
                }
                className="px-5 py-3 text-xl font-bold hover:bg-slate-100"
              >
                +
              </button>
            </div>
          </div>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap gap-4">
            <button
              onClick={handleAddToCart}
              className="rounded-xl bg-emerald-500 px-8 py-3 font-semibold text-white hover:bg-emerald-600"
            >
              Add to Cart
            </button>

            <button
              onClick={handleAddToWishlist}
              className="rounded-xl border border-pink-500 px-8 py-3 font-semibold text-pink-500 hover:bg-pink-500 hover:text-white"
            >
              Add to Wishlist
            </button>

            <button className="rounded-xl border border-slate-300 px-8 py-3 font-semibold hover:bg-slate-100">
              Buy Now
            </button>
          </div>

          {/* Features */}

          <div className="mt-12">
            <h3 className="mb-4 text-xl font-bold text-slate-900">
              Features
            </h3>

            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-slate-700"
                >
                  <span className="text-emerald-500">
                    ✔
                  </span>

                  {feature}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductDetails;