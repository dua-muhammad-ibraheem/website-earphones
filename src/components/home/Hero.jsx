import { ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  // Smooth, premium easing curve (easeOutExpo-ish) — no springs, no recalculation jitter
  const EASE = [0.16, 1, 0.3, 1];

  // Parent container orchestrates the left-side children with a stagger
  const leftContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: EASE },
    },
  };

  // Single source of truth for the image reveal — no duplicate animation on the <img>
  const imageWrap = {
    hidden: { opacity: 0, x: 60, scale: 0.94 },
    show: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.9, ease: EASE },
    },
  };

  // Badge entrance — fires AFTER the image settles (delay)
  const badge = (delay) => ({
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: EASE, delay },
    },
  });

  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] min-h-[calc(100vh-120px)] lg:h-[calc(100vh-130px)] flex items-center">
      {/* Background Blur — isolated on its own GPU layer so it doesn't repaint with the animation */}
      <div className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-emerald-200/50 blur-[120px] transform-gpu will-change-transform" />
      <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-emerald-100/60 blur-[130px] transform-gpu will-change-transform" />

      {/* Container */}
      <div className="mx-auto w-full max-w-[1340px] px-6 lg:px-10 py-4 lg:py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-8">
          {/* LEFT SIDE */}
          <motion.div
            variants={leftContainer}
            initial="hidden"
            animate="show"
            className="order-2 lg:order-1"
          >
            <motion.span
              variants={fadeUp}
              className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-xs sm:text-sm font-semibold text-emerald-600"
            >
              New Collection 2026
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-black leading-tight"
            >
              Premium
              <br />
              Audio <span className="text-emerald-500">Experience</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-xl text-base sm:text-lg leading-7 text-slate-600"
            >
              Discover premium headphones, Bluetooth speakers and smart gadgets
              designed for music lovers who never compromise on sound quality.
            </motion.p>

            {/* Buttons */}
            <motion.div variants={fadeUp} className="mt-6 flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2, ease: EASE }}
                className="flex justify-center items-center gap-2 rounded-xl bg-emerald-500 px-8 py-4 font-semibold text-white shadow-xl"
              >
                Shop Now
                <ArrowRight size={18} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2, ease: EASE }}
                className="rounded-xl border border-slate-300 px-8 py-4 font-semibold text-slate-800"
              >
                Explore Products
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              className="grid grid-cols-3 gap-3 mt-8 -ml-2 lg:ml-0 lg:flex lg:gap-10"
            >
              <div className="bg-white rounded-2xl shadow-lg p-4 text-center h-[120px] flex flex-col justify-center lg:bg-transparent lg:shadow-none lg:p-0 lg:h-auto lg:min-w-[150px]">
                <h3 className="text-3xl sm:text-4xl lg:text-3xl xl:text-4xl font-black text-slate-900">
                  25K+
                </h3>
                <p className="mt-1 text-slate-500">Happy Customers</p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-4 text-center h-[120px] flex flex-col justify-center lg:bg-transparent lg:shadow-none lg:p-0 lg:h-auto lg:min-w-[150px]">
                <h3 className="text-3xl sm:text-4xl lg:text-3xl xl:text-4xl font-black text-slate-900">
                  4.9★
                </h3>
                <p className="mt-1 text-slate-500">Average Rating</p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-4 text-center h-[120px] flex flex-col justify-center lg:bg-transparent lg:shadow-none lg:p-0 lg:h-auto lg:min-w-[150px]">
                <h3 className="text-3xl sm:text-4xl lg:text-3xl font-black text-slate-900 whitespace-nowrap">
                  2 Years
                </h3>
                <p className="mt-1 text-slate-500">Warranty</p>
              </div>
            </motion.div>
          </motion.div>

          {/* ---------- RIGHT STARTS HERE ---------- */}
          <motion.div
            variants={imageWrap}
            initial="hidden"
            animate="show"
            className="relative flex justify-center items-center h-[340px] sm:h-[430px] lg:h-[520px] order-first lg:order-last transform-gpu"
          >
            {/* Background Glow */}
            <div className="absolute h-[420px] w-[420px] rounded-full bg-emerald-100 blur-[110px] opacity-80 transform-gpu will-change-transform" />

            {/* 30% OFF Card */}
            <motion.div
              variants={badge(0.55)}
              initial="hidden"
              animate="show"
              className="absolute top-6 right-2 sm:right-6 lg:top-3 lg:right-8 z-20 rounded-2xl bg-white px-5 py-4 shadow-2xl transform-gpu will-change-transform"
              style={{ animation: "aurex-float-a 4.5s ease-in-out 0.6s infinite" }}
            >
              <h3 className="text-4xl font-black text-emerald-500">30%</h3>
              <p className="font-semibold text-slate-600">OFF</p>
            </motion.div>

            {/* Rating Card */}
            <motion.div
              variants={badge(0.7)}
              initial="hidden"
              animate="show"
              className="absolute left-0 bottom-8 z-20 hidden lg:block rounded-2xl bg-white p-5 shadow-2xl transform-gpu will-change-transform"
              style={{ animation: "aurex-float-b 5s ease-in-out 0.8s infinite" }}
            >
              <div className="flex gap-1 text-yellow-400">
                <Star fill="currentColor" size={18} />
                <Star fill="currentColor" size={18} />
                <Star fill="currentColor" size={18} />
                <Star fill="currentColor" size={18} />
                <Star fill="currentColor" size={18} />
              </div>
              <h3 className="mt-2 text-lg font-bold text-slate-900">4.9 Rating</h3>
              <p className="text-sm text-slate-500">Trusted by 25K+ Customers</p>
            </motion.div>

            {/* Free Shipping Card */}
            <motion.div
              variants={badge(0.85)}
              initial="hidden"
              animate="show"
              className="absolute right-4 bottom-8 z-20 hidden lg:block rounded-2xl bg-white px-5 py-4 shadow-2xl transform-gpu will-change-transform"
              style={{ animation: "aurex-float-c 4.8s ease-in-out 1s infinite" }}
            >
              <h4 className="font-bold text-slate-900">Free Shipping</h4>
              <p className="text-sm text-slate-500">On Orders Over $100</p>
            </motion.div>

            {/* Product Image — single animation source (parent controls the reveal) */}
            <img
              src="/ChatGPT Image Jul 27, 2026, 03_55_01 AM.png"
              alt="Premium Headphones"
              className="relative z-10 w-[230px] sm:w-[300px] md:w-[360px] lg:w-[430px] xl:w-[470px] object-contain transform-gpu"
            />
          </motion.div>
        </div>
      </div>

      {/* Lightweight CSS keyframes for the infinite float — cheaper than JS-driven repeat animations */}
      <style>{`
        @keyframes aurex-float-a {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes aurex-float-b {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(10px); }
        }
        @keyframes aurex-float-c {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="aurex-float"] { animation: none !important; }
        }
      `}</style>
    </section>
  );
};

export default Hero;