import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <section className="min-h-screen bg-slate-50 flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-black text-slate-900">
          Create Account
        </h1>

        <p className="mt-2 text-slate-500">
          Create your AUREX account.
        </p>

        <div className="mt-8 space-y-5">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-emerald-500"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-emerald-500"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-emerald-500"
          />

          <button className="w-full rounded-xl bg-emerald-500 py-3 font-semibold text-white hover:bg-emerald-600">
            Create Account
          </button>
        </div>

        <p className="mt-6 text-center text-sm text-slate-500">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-emerald-500"
          >
            Login
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Signup;