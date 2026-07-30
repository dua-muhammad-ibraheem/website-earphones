import { useContext } from "react";
import CartContext from "../context/CartContext";

const Cart = () => {
  const { cartItems, setCartItems } = useContext(CartContext);

  const handleRemove = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };

  return (
    <section className="min-h-screen bg-slate-50 py-16">
      <div className="mx-auto max-w-[1340px] px-6 lg:px-10">
        <h1 className="mb-10 text-4xl font-black text-slate-900">
          Shopping Cart
        </h1>

        {cartItems.length === 0 ? (
          <p className="text-slate-600">
            Your cart is empty.
          </p>
        ) : (
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between rounded-2xl bg-white p-6 shadow-sm"
              >
                <div className="flex items-center gap-6">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-24 w-24 object-contain"
                  />

                  <div>
                    <h2 className="text-xl font-bold text-slate-900">
                      {item.name}
                    </h2>

                    <p className="text-slate-500">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <h3 className="mb-3 text-2xl font-bold text-emerald-500">
                    ${item.price}
                  </h3>

                  <button
                    onClick={() => handleRemove(item.id)}
                    className="rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600"
                  >
                    Remove
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

export default Cart;