import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import CartContext from "../context/CartContext";

const Checkout = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    address: "",
    paymentMethod: "Cash on Delivery",
  });

  const [error, setError] = useState("");

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping = cartItems.length > 0 ? 20 : 0;
  const total = subtotal + shipping;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    if (cartItems.length === 0) {
      setError("Your cart is empty.");
      return;
    }

    const {
      fullName,
      email,
      phone,
      city,
      address,
    } = formData;

    if (
      !fullName.trim() ||
      !email.trim() ||
      !phone.trim() ||
      !city.trim() ||
      !address.trim()
    ) {
      setError("Please fill in all shipping information.");
      return;
    }

    setCartItems([]);

    navigate("/order-success");
  };

  if (cartItems.length === 0) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-slate-50 px-6 py-16">
        <div className="w-full max-w-xl rounded-3xl bg-white p-10 text-center shadow-sm">
          <h1 className="text-3xl font-black text-slate-900">
            Your Cart is Empty
          </h1>

          <p className="mt-3 text-slate-500">
            Add some products to your cart before checking out.
          </p>

          <button
            onClick={() => navigate("/products")}
            className="mt-8 rounded-xl bg-emerald-500 px-8 py-3 font-semibold text-white transition hover:bg-emerald-600"
          >
            Continue Shopping
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-slate-50 py-16">
      <form
        onSubmit={handlePlaceOrder}
        className="mx-auto grid max-w-[1340px] gap-10 px-6 lg:grid-cols-[2fr_1fr] lg:px-10"
      >
        {/* Shipping Information */}
        <div className="space-y-8">
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <h2 className="mb-8 text-3xl font-bold text-slate-900">
              Shipping Information
            </h2>

            {error && (
              <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                {error}
              </div>
            )}

            <div className="grid gap-6 md:grid-cols-2">
              {/* Full Name */}
              <div>
                <label className="mb-2 block font-medium text-slate-700">
                  Full Name
                </label>

                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
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
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
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
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
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
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
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
                name="address"
                value={formData.address}
                onChange={handleChange}
                rows="4"
                placeholder="Enter your complete address"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-emerald-500"
              />
            </div>
          </div>

          {/* Payment Method */}
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <h2 className="mb-6 text-2xl font-bold text-slate-900">
              Payment Method
            </h2>

            <label className="flex cursor-pointer items-center gap-4 rounded-xl border border-emerald-500 bg-emerald-50 p-4">
              <input
                type="radio"
                name="paymentMethod"
                value="Cash on Delivery"
                checked={
                  formData.paymentMethod === "Cash on Delivery"
                }
                onChange={handleChange}
                className="h-5 w-5 accent-emerald-500"
              />

              <div>
                <p className="font-semibold text-slate-900">
                  Cash on Delivery
                </p>

                <p className="text-sm text-slate-500">
                  Pay when your order arrives.
                </p>
              </div>
            </label>
          </div>
        </div>

        {/* Order Summary */}
        <aside className="h-fit rounded-2xl bg-white p-8 shadow-sm">
          <h2 className="mb-8 text-3xl font-bold text-slate-900">
            Order Summary
          </h2>

          <div className="space-y-5">
            {cartItems.map((item) => (
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
            ))}
          </div>

          <div className="mt-8 space-y-4 border-t border-slate-200 pt-6 text-slate-700">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal}</span>
            </div>

            <div className="flex justify-between">
              <span>Shipping</span>
              <span>${shipping}</span>
            </div>

            <div className="flex justify-between border-t border-slate-200 pt-4 text-xl font-bold text-slate-900">
              <span>Total</span>

              <span className="text-emerald-500">
                ${total}
              </span>
            </div>
          </div>

          <button
            type="submit"
            className="mt-8 w-full rounded-xl bg-emerald-500 py-4 font-semibold text-white transition hover:bg-emerald-600"
          >
            Place Order
          </button>
        </aside>
      </form>
    </section>
  );
};

export default Checkout;