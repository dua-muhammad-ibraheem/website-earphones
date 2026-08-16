import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const savedUser = JSON.parse(
      localStorage.getItem("aurexUser")
    );

    if (!savedUser) {
      setError("No account found. Please create an account first.");
      return;
    }

    if (
      savedUser.email !== formData.email ||
      savedUser.password !== formData.password
    ) {
      setError("Invalid email or password.");
      return;
    }

    localStorage.setItem(
      "aurexLoggedIn",
      JSON.stringify({
        name: savedUser.name,
        email: savedUser.email,
      })
    );

    navigate("/");
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-slate-50 px-6 py-16">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-sm">

        {/* Heading */}
        <div className="text-center">
          <div className="mb-4 text-3xl font-black">
            <span className="text-[#111827]">AUR</span>
            <span className="text-[#10B981]">EX</span>
          </div>

          <h1 className="text-3xl font-black text-slate-900">
            Welcome Back
          </h1>

          <p className="mt-2 text-slate-500">
            Login to your AUREX account.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-5"
        >
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-emerald-500"
          />

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-emerald-500"
          />

          {/* Error */}
          {error && (
            <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full rounded-xl bg-emerald-500 py-3 font-semibold text-white transition hover:bg-emerald-600"
          >
            Login
          </button>
        </form>

        {/* Signup */}
        <p className="mt-6 text-center text-sm text-slate-500">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="font-semibold text-emerald-500 hover:text-emerald-600"
          >
            Sign Up
          </Link>
        </p>

      </div>
    </section>
  );
};

export default Login;