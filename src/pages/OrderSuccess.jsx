import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const OrderSuccess = () => {
  return (
    <section className="flex min-h-screen items-center justify-center bg-slate-50 px-6 py-16">
      <div className="w-full max-w-xl rounded-3xl bg-white p-10 text-center shadow-sm">

        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-emerald-100">
          <CheckCircle
            size={52}
            className="text-emerald-500"
          />
        </div>

        <h1 className="mt-8 text-4xl font-black text-slate-900">
          Order Placed Successfully!
        </h1>

        <p className="mt-4 leading-7 text-slate-600">
          Thank you for shopping with AUREX.
          <br />
          Your order has been received successfully.
        </p>

        <Link
          to="/products"
          className="mt-10 inline-block rounded-xl bg-emerald-500 px-8 py-4 font-semibold text-white transition hover:bg-emerald-600"
        >
          Continue Shopping
        </Link>
      </div>
    </section>
  );
};

export default OrderSuccess;