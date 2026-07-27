import { ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  // Animation Variants

  const left = {
    hidden: {
      opacity: 0,
      x: -60,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const image = {
    hidden: {
      opacity: 0,
      x: 80,
      scale: 0.9,
    },
    show: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] min-h-[calc(100vh-120px)] lg:h-[calc(100vh-130px)] flex items-center">
      {/* Background Blur */}

      <div className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-emerald-200/50 blur-[140px]" />

      <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-emerald-100/60 blur-[150px]" />

      {/* Container */}

      <div className="mx-auto w-full max-w-[1340px] px-6 lg:px-10 py-4 lg:py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-8">
          {/* LEFT SIDE */}

          <motion.div
            variants={left}
            initial="hidden"
            animate="show"
            className="order-2 lg:order-1"
          >
            <span className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-xs sm:text-sm font-semibold text-emerald-600">
              New Collection 2026
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-black leading-tight">
              Premium
              <br />
              Audio <span className="text-emerald-500">Experience</span>
            </h1>

            <p className="mt-4 max-w-xl text-base sm:text-lg leading-7 text-slate-600">
              Discover premium headphones, Bluetooth speakers and smart gadgets
              designed for music lovers who never compromise on sound quality.
            </p>

            {/* Buttons */}

            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="flex justify-center items-center gap-2 rounded-xl bg-emerald-500 px-8 py-4 font-semibold text-white shadow-xl"
              >
                Shop Now
                <ArrowRight size={18} />
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="rounded-xl border border-slate-300 px-8 py-4 font-semibold text-slate-800"
              >
                Explore Products
              </motion.button>
            </div>

            {/* Stats */}
<div className="grid grid-cols-3 gap-3 mt-8 -ml-2 lg:ml-0 lg:flex lg:gap-10">
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
            </div>
          </motion.div>

          {/* ---------- RIGHT STARTS HERE ---------- */}

          <motion.div
            variants={image}
            initial="hidden"
            animate="show"
            className="relative flex justify-center items-center h-[340px] sm:h-[430px] lg:h-[520px] order-first lg:order-last"
          >
            {/* Background Glow */}

            <div className="absolute h-[420px] w-[420px] rounded-full bg-emerald-100 blur-[120px] opacity-80" />

            {/* 30% OFF Card */}

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute top-6 right-2 sm:right-6 lg:top-3 lg:right-8 z-20 rounded-2xl bg-white px-5 py-4 shadow-2xl"
            >
              <h3 className="text-4xl font-black text-emerald-500">30%</h3>

              <p className="font-semibold text-slate-600">OFF</p>
            </motion.div>

            {/* Rating Card */}

            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute left-0 bottom-8 z-20 hidden lg:block rounded-2xl bg-white p-5 shadow-2xl"
            >
              <div className="flex gap-1 text-yellow-400">
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
                Trusted by 25K+ Customers
              </p>
            </motion.div>

            {/* Free Shipping Card */}

            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
              }}
              className="absolute right-4 bottom-8 z-20 hidden lg:block rounded-2xl bg-white px-5 py-4 shadow-2xl"
            >
              <h4 className="font-bold text-slate-900">Free Shipping</h4>

              <p className="text-sm text-slate-500">On Orders Over $100</p>
            </motion.div>

            {/* Product Image */}

            <motion.img
              src="/ChatGPT Image Jul 27, 2026, 03_55_01 AM.png"
              alt="Premium Headphones"
              className="relative z-10 w-[230px] sm:w-[300px] md:w-[360px] lg:w-[430px] xl:w-[470px] object-contain"
              initial={{
                opacity: 0,
                y: 60,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 1,
                ease: "easeOut",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
