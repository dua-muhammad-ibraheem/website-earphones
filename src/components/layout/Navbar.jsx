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
      <div className="max-w-[1200px] mx-auto px-6">

        <div className="h-[84px] flex items-center">

          {/* Logo */}
          <div className="w-[220px] flex-shrink-0">
            <Link
              to="/"
              className="text-[36px] font-extrabold tracking-tight"
            >
              <span className="text-[#111827]">AUR</span>
              <span className="text-[#10B981]">EX</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex flex-1 justify-center">
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

          {/* Icons */}
          <div className="hidden lg:flex w-[220px] justify-end items-center gap-5">

            <button className="hover:text-[#10B981] transition">
              <Search size={22} />
            </button>

            <button className="relative hover:text-[#10B981] transition">
              <Heart size={22} />
              <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-[#10B981] text-white text-[10px] flex items-center justify-center">
                0
              </span>
            </button>

            <button className="relative hover:text-[#10B981] transition">
              <ShoppingCart size={22} />
              <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-[#10B981] text-white text-[10px] flex items-center justify-center">
                0
              </span>
            </button>

            <button className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#10B981] hover:text-white transition">
              <User size={20} />
            </button>

          </div>

          {/* Mobile Menu */}
          <button className="lg:hidden ml-auto">
            <Menu size={30} />
          </button>

        </div>
      </div>
    </header>
  );
};

export default Navbar;