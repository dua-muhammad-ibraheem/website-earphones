import { useContext } from "react";
import WishlistContext from "../context/WishlistContext";

const Wishlist = () => {
  const { wishlistItems, setWishlistItems } = useContext(WishlistContext);

  const removeFromWishlist = (id) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== id));
  };

  return (
    <section className="min-h-screen bg-slate-50 py-16">
      <div className="mx-auto max-w-[1340px] px-6 lg:px-10">
        <h1 className="mb-10 text-4xl font-black text-slate-900">Wishlist</h1>

        {wishlistItems.length === 0 ? (
          <p className="text-slate-600">Your wishlist is empty.</p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {wishlistItems.map((item) => (
              <div key={item.id} className="rounded-2xl bg-white p-6 shadow-sm">
                <img
                  src={item.image}
                  alt={item.name}
                  className="mx-auto h-52 object-contain"
                />

                <h2 className="mt-5 text-xl font-bold text-slate-900">
                  {item.name}
                </h2>

                <p className="mt-2 text-emerald-500 text-2xl font-bold">
                  ${item.price}
                </p>

                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="mt-5 w-full rounded-lg bg-red-500 py-2 text-white transition hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Wishlist;
