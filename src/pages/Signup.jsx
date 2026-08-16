import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
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

    const existingUser = JSON.parse(
      localStorage.getItem("aurexUser")
    );

    if (
      existingUser &&
      existingUser.email === formData.email
    ) {
      setError("An account with this email already exists.");
      return;
    }

    localStorage.setItem(
      "aurexUser",
      JSON.stringify(formData)
    );

    navigate("/login");
  };

  return (
    <section className="min-h-screen bg-slate-50 flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-sm">

        <h1 className="text-3xl font-black text-slate-900">
          Create Account
        </h1>

        <p className="mt-2 text-slate-500">
          Create your AUREX account.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-5"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            required
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-emerald-500"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-emerald-500"
          />

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-emerald-500"
          />

          {error && (
            <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full rounded-xl bg-emerald-500 py-3 font-semibold text-white transition hover:bg-emerald-600"
          >
            Create Account
          </button>
        </form>

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