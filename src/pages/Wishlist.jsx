import { useContext } from "react";
import { Heart, ShoppingCart, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

import WishlistContext from "../context/WishlistContext";
import CartContext from "../context/CartContext";

const Wishlist = () => {
  const {
    wishlistItems,
    setWishlistItems,
  } = useContext(WishlistContext);

  const {
    cartItems,
    setCartItems,
  } = useContext(CartContext);

  const handleRemove = (id) => {
    const updatedWishlist = wishlistItems.filter(
      (item) => item.id !== id
    );

    setWishlistItems(updatedWishlist);
  };

  const handleAddToCart = (product) => {
    const existingItem = cartItems.find(
      (item) => item.id === product.id
    );

    if (existingItem) {
      const updatedCart = cartItems.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
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
  };

  return (
    <section className="min-h-screen bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1400px]">

        {/* Heading */}
        <div className="mb-12 text-center">
          <span className="inline-flex items-center rounded-full bg-emerald-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[2px] text-emerald-600">
            Saved Items
          </span>

          <h1 className="mt-5 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
            My <span className="text-emerald-500">Wishlist</span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-slate-500">
            Products you saved for later.
          </p>
        </div>

        {/* Empty Wishlist */}
        {wishlistItems.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-20 text-center shadow-sm">
            <Heart
              size={42}
              className="mx-auto text-slate-300"
            />

            <h2 className="mt-5 text-2xl font-bold text-slate-800">
              Your wishlist is empty
            </h2>

            <p className="mt-2 text-slate-500">
              Save products you love and find them here later.
            </p>

            <Link
              to="/products"
              className="mt-6 inline-flex rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-white transition hover:bg-emerald-600"
            >
              Explore Products
            </Link>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {wishlistItems.map((product) => (
              <div
                key={product.id}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Image */}
                <div className="relative flex h-52 items-center justify-center overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-44 object-contain transition duration-500 group-hover:scale-110"
                  />

                  <button
                    onClick={() =>
                      handleRemove(product.id)
                    }
                    aria-label="Remove from wishlist"
                    className="absolute right-4 top-4 rounded-full bg-white p-2 text-slate-600 shadow transition hover:bg-red-500 hover:text-white"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>

                {/* Content */}
                <div className="p-5">
                  <span className="text-sm font-medium text-emerald-500">
                    {product.category}
                  </span>

                  <h2 className="mt-2 line-clamp-1 text-lg font-bold text-slate-900">
                    {product.name}
                  </h2>

                  <div className="mt-3 flex items-center gap-3">
                    <span className="text-xl font-bold text-slate-900">
                      ${product.price}
                    </span>

                    {product.oldPrice && (
                      <span className="text-sm text-slate-400 line-through">
                        ${product.oldPrice}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() =>
                      handleAddToCart(product)
                    }
                    className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 py-3 font-semibold text-white transition hover:bg-emerald-600"
                  >
                    <ShoppingCart size={18} />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Wishlist;