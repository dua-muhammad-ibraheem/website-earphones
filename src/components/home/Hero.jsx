

const Hero = () => {
  return (
    <section className="bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        
        {/* Left Side */}
        <div className="md:w-1/2">
          <span className="inline-block bg-[#DCFCE7] text-[#10B981] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            New Collection 2026
          </span>

          <h1 className="text-5xl font-bold text-[#111827] leading-tight">
            Premium Audio <br /> Experience
          </h1>

          <p className="text-gray-600 mt-6 text-lg">
            Discover the latest headphones, speakers and smart gadgets with
            premium sound quality.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-[#10B981] text-white px-7 py-3 rounded-lg hover:bg-[#059669] transition">
              Shop Now
            </button>

            <button className="border border-[#10B981] text-[#10B981] px-7 py-3 rounded-lg hover:bg-[#10B981] hover:text-white transition">
              Explore
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=700"
            alt="Headphone"
            className="w-[450px] object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;