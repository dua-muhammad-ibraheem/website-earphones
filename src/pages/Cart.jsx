import { useContext } from "react";
import CartContext from "../context/CartContext";
import { Link } from "react-router-dom";
const Cart = () => {
  const { cartItems, setCartItems } = useContext(CartContext);

  const handleRemove = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };

  const increaseQuantity = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );

    setCartItems(updatedCart);
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: item.quantity > 1 ? item.quantity - 1 : 1,
          }
        : item
    );

    setCartItems(updatedCart);
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping = cartItems.length > 0 ? 20 : 0;
  const total = subtotal + shipping;

  return (
    <section className="min-h-screen bg-slate-50 py-16">
      <div className="mx-auto max-w-[1340px] px-6 lg:px-10">
        <h1 className="mb-10 text-4xl font-black text-slate-900">
          Shopping Cart
        </h1>

        {cartItems.length === 0 ? (
          <p className="text-slate-600">Your cart is empty.</p>
        ) : (
          <div className="grid gap-8 lg:grid-cols-[1fr_350px]">

            {/* Products */}
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

                      <p className="mt-1 text-slate-500">
                        ${item.price}
                      </p>

                      <div className="mt-4 flex w-fit items-center overflow-hidden rounded-lg border border-slate-300">
                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          className="px-4 py-2 hover:bg-slate-100"
                        >
                          -
                        </button>

                        <span className="border-x border-slate-300 px-5 py-2 font-semibold">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() => increaseQuantity(item.id)}
                          className="px-4 py-2 hover:bg-slate-100"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <h3 className="mb-3 text-2xl font-bold text-emerald-500">
                      ${item.price * item.quantity}
                    </h3>

                    <button
                      onClick={() => handleRemove(item.id)}
                      className="rounded-lg bg-red-500 px-4 py-2 text-white transition hover:bg-red-600"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <aside className="h-fit rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="mb-6 text-2xl font-bold text-slate-900">
                Order Summary
              </h2>

              <div className="space-y-4 text-slate-700">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal}</span>
                </div>

                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>${shipping}</span>
                </div>

                <hr />

                <div className="flex justify-between text-xl font-bold text-slate-900">
                  <span>Total</span>
                  <span>${total}</span>
                </div>
              </div>

          <Link
  to="/checkout"
  className="mt-8 block w-full rounded-xl bg-emerald-500 py-3 text-center font-semibold text-white transition hover:bg-emerald-600"
>
  Proceed to Checkout
</Link>
            </aside>

          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;