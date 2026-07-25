import { ArrowRight, Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] w-full">

      {/* Background Blur */}
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-emerald-200 blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-emerald-100 blur-3xl opacity-60"></div>

      {/* FIXED MAX-WIDTH & PADDING: Navbar ke frame se perfectly line-up karne ke liye */}
      <div className="max-w-335 mx-auto px-6 lg:px-10 py-20">

        <div className="grid lg:grid-cols-2 items-center gap-14">

          {/* LEFT CONTENT */}
          <div>
            <span className="inline-flex items-center rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-600">
              New Collection 2026
            </span>

            <h1 className="mt-7 text-5xl lg:text-7xl font-black leading-tight text-slate-900">
              Premium
              <br />
              Audio
              <span className="text-emerald-500">
                {" "}Experience
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
              Discover premium headphones, Bluetooth speakers and
              smart gadgets designed for music lovers who never
              compromise on sound quality.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-5">
              <button className="group flex items-center gap-2 rounded-xl bg-emerald-500 px-8 py-4 font-semibold text-white shadow-xl transition hover:-translate-y-1 hover:bg-emerald-600 cursor-pointer">
                Shop Now
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </button>

              <button className="rounded-xl border border-slate-300 px-8 py-4 font-semibold text-slate-800 transition hover:border-emerald-500 hover:text-emerald-500 cursor-pointer">
                Explore Products
              </button>
            </div>

            {/* Stats */}
            <div className="mt-14 flex flex-wrap gap-10">
              <div>
                <h3 className="text-3xl font-bold text-slate-900">25K+</h3>
                <p className="text-slate-500">Happy Customers</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-slate-900">4.9★</h3>
                <p className="text-slate-500">Average Rating</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-slate-900">2 Years</h3>
                <p className="text-slate-500">Warranty</p>
              </div>
            </div>
          </div>

          {/* RIGHT MEDIA BOX */}
          <div className="relative flex justify-center">
            
            {/* Background Circle */}
            <div className="absolute h-120 w-120 rounded-full bg-emerald-100 blur-3xl opacity-70"></div>

            {/* Sale Badge */}
            <div className="absolute right-2 top-8 z-20 rounded-2xl bg-white px-5 py-4 shadow-2xl">
              <p className="text-3xl font-black text-emerald-500">30%</p>
              <p className="text-sm font-semibold text-slate-700">OFF</p>
            </div>

            {/* Image */}
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900"
              alt="Premium Headphones"
              className="relative z-10 w-130 object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]"
            />

            {/* Rating Card */}
            <div className="absolute left-0 bottom-10 z-20 rounded-2xl bg-white p-5 shadow-2xl">
              <div className="flex items-center gap-1 text-yellow-400">
                <Star fill="currentColor" size={18} />
                <Star fill="currentColor" size={18} />
                <Star fill="currentColor" size={18} />
                <Star fill="currentColor" size={18} />
                <Star fill="currentColor" size={18} />
              </div>

              <h3 className="mt-2 text-lg font-bold text-slate-900">
                4.9 Rating
              </h3>
              <p className="text-sm text-slate-500">
                Trusted by 25,000+ Customers
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;