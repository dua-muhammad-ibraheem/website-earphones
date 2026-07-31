import { useContext } from "react";
import CartContext from "../context/CartContext";

const Checkout = () => {
  // Cart Data
  const { cartItems } = useContext(CartContext);

  // Calculate Subtotal
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Fixed Shipping Charges
  const shipping = cartItems.length > 0 ? 20 : 0;

  // Final Total
  const total = subtotal + shipping;

  return (
    <section className="min-h-screen bg-slate-50 py-16">

      {/* Main Container */}
      <div className="mx-auto grid max-w-[1340px] gap-10 px-6 lg:grid-cols-[2fr_1fr] lg:px-10">

                {/* ================= Shipping Information ================= */}
        <div className="rounded-2xl bg-white p-8 shadow-sm">

          <h2 className="mb-8 text-3xl font-bold text-slate-900">
            Shipping Information
          </h2>

          <div className="grid gap-6 md:grid-cols-2">

            {/* Full Name */}
            <div>
              <label className="mb-2 block font-medium text-slate-700">
                Full Name
              </label>

              <input
                type="text"
                placeholder="John Doe"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-emerald-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block font-medium text-slate-700">
                Email
              </label>

              <input
                type="email"
                placeholder="john@email.com"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-emerald-500"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="mb-2 block font-medium text-slate-700">
                Phone
              </label>

              <input
                type="text"
                placeholder="+92 300 1234567"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-emerald-500"
              />
            </div>

            {/* City */}
            <div>
              <label className="mb-2 block font-medium text-slate-700">
                City
              </label>

              <input
                type="text"
                placeholder="Karachi"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-emerald-500"
              />
            </div>

          </div>

          {/* Address */}
          <div className="mt-6">

            <label className="mb-2 block font-medium text-slate-700">
              Address
            </label>

            <textarea
              rows="4"
              placeholder="Enter your complete address"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-emerald-500"
            ></textarea>

          </div>
        {/* ================= Order Summary ================= */}
        <div className="rounded-2xl bg-white p-8 shadow-sm h-fit">

          <h2 className="mb-8 text-3xl font-bold text-slate-900">
            Order Summary
          </h2>

          {/* Cart Items */}
          <div className="space-y-5">

            {cartItems.length === 0 ? (

              <p className="text-slate-500">
                Your cart is empty.
              </p>

            ) : (

              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b border-slate-200 pb-4"
                >
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      {item.name}
                    </h3>

                    <p className="text-sm text-slate-500">
                      Qty: {item.quantity}
                    </p>
                  </div>

                  <span className="font-bold text-emerald-500">
                    ${item.price * item.quantity}
                  </span>
                </div>
              ))

            )}

          </div>

          {/* Price Details */}
          <div className="mt-8 space-y-3 border-t border-slate-200 pt-6">

            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal}</span>
            </div>

            <div className="flex justify-between">
              <span>Shipping</span>
              <span>${shipping}</span>
            </div>

            <div className="flex justify-between text-xl font-bold">
              <span>Total</span>
              <span className="text-emerald-500">
                ${total}
              </span>
            </div>

          </div>

          {/* Place Order Button */}
          <button className="mt-8 w-full rounded-xl bg-emerald-500 py-4 font-semibold text-white transition hover:bg-emerald-600">
            Place Order
          </button>


        </div>
        </div>
        
      </div>
            </div>
    </section>
  );
};

export default Checkout;