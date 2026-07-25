import { Link, NavLink } from "react-router-dom";
import {
  Search,
  Heart,
  ShoppingCart,
  User,
  Menu,
} from "lucide-react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      {/* Container ki max-width ko responsive aur properly space out rakha hai */}
      <div className="max-w-300 mx-auto px-6">
        
        {/* FIX: Yahan 'justify-between' add kiya hai taake teeno sections barabar space lein */}
        <div className="h-21 flex items-center justify-between gap-4">

          {/* Logo (FIX: fixed width w-[220px] hata kar flex-1 kiya taake alignment kharab na ho) */}
          <div className="flex-1 flex justify-start">
            <Link
              to="/"
              className="text-[36px] font-extrabold tracking-tight flex items-center"
            >
              <span className="text-[#111827]">AUR</span>
              <span className="text-[#10B981]">EX</span>
            </Link>
          </div>

          {/* Navigation (Bilkul center mein rahega) */}
          <nav className="hidden lg:flex justify-center items-center">
            <ul className="flex items-center gap-10 text-[17px] font-medium">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `transition duration-300 ${
                      isActive
                        ? "text-[#10B981]"
                        : "text-[#111827] hover:text-[#10B981]"
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/products"
                  className="text-[#111827] hover:text-[#10B981] transition duration-300"
                >
                  Shop
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/categories"
                  className="text-[#111827] hover:text-[#10B981] transition duration-300"
                >
                  Categories
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/deals"
                  className="text-[#111827] hover:text-[#10B981] transition duration-300"
                >
                  Deals
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact"
                  className="text-[#111827] hover:text-[#10B981] transition duration-300"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* Icons (FIX: w-[220px] hata kar right-align kiya hai) */}
          <div className="hidden lg:flex flex-1 justify-end items-center gap-5">
            <button className="hover:text-[#10B981] transition text-[#111827]">
              <Search size={22} />
            </button>

            <button className="relative hover:text-[#10B981] transition text-[#111827]">
              <Heart size={22} />
              <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-[#10B981] text-white text-[10px] flex items-center justify-center">
                0
              </span>
            </button>

            <button className="relative hover:text-[#10B981] transition text-[#111827]">
              <ShoppingCart size={22} />
              <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-[#10B981] text-white text-[10px] flex items-center justify-center">
                0
              </span>
            </button>

            <button className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center text-[#111827] hover:bg-[#10B981] hover:text-white transition">
              <User size={20} />
            </button>
          </div>

          {/* Mobile Menu */}
          <button className="lg:hidden ml-auto text-[#111827]">
            <Menu size={30} />
          </button>

        </div>
      </div>
    </header>
  );
};

export default Navbar;