import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  Search,
  Heart,
  ShoppingCart,
  User,
  Menu,
  X,
} from "lucide-react";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Shop" },
  { to: "/categories", label: "Categories" },
  { to: "/deals", label: "Deals" },
  { to: "/contact", label: "Contact" },
];

const EASE = [0.16, 1, 0.3, 1];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  // Jab menu khula ho, background scroll lock kar do (mobile full-screen menu ke liye zaroori)
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      {/* Container ki max-width ko responsive aur properly space out rakha hai */}
      <div className="max-w-300 mx-auto px-6">
        {/* FIX: Yahan 'justify-between' add kiya hai taake teeno sections barabar space lein */}
        <div className="h-21 flex items-center justify-between gap-4">
          {/* Logo — thora chota kiya, mobile aur desktop dono pe */}
          <div className="flex-1 flex justify-start">
            <Link
              to="/"
              onClick={closeMenu}
              className="text-[26px] sm:text-[28px] lg:text-[30px] font-extrabold tracking-tight flex items-center"
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

          {/* Mobile Menu Icon — click se toggle hota hai, X mein badalta hai */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="lg:hidden ml-auto text-[#111827] relative w-8 h-8 flex items-center justify-center z-[60]"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2, ease: EASE }}
                  className="absolute"
                >
                  <X size={26} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2, ease: EASE }}
                  className="absolute"
                >
                  <Menu size={26} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Full-Screen Menu — poori screen cover karta hai, koi backdrop-alignment issue nahi */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="lg:hidden fixed inset-0 z-50 bg-white flex flex-col overflow-y-auto"
          >
            {/* Apni hi top bar — logo repeat, taake user disoriented na ho */}
            <div className="h-21 flex items-center justify-between px-6 border-b border-gray-200 shrink-0">
              <span className="text-[26px] font-extrabold tracking-tight">
                <span className="text-[#111827]">AUR</span>
                <span className="text-[#10B981]">EX</span>
              </span>
            </div>

            <ul className="flex flex-col px-6 py-4">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.to}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, ease: EASE, delay: 0.05 * i }}
                  className="border-b border-gray-100 last:border-b-0"
                >
                  <NavLink
                    to={link.to}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `block py-4 text-[19px] font-medium transition duration-300 ${
                        isActive
                          ? "text-[#10B981]"
                          : "text-[#111827] hover:text-[#10B981]"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.li>
              ))}
            </ul>

            {/* Icons row — hamesha panel ke neeche pinned rehta hai, gray backdrop wala issue nahi ab */}
            <div className="mt-auto flex items-center justify-around border-t border-gray-100 px-6 py-5">
              <button className="flex flex-col items-center gap-1 text-[#111827] hover:text-[#10B981] transition">
                <Search size={20} />
                <span className="text-xs">Search</span>
              </button>

              <button className="relative flex flex-col items-center gap-1 text-[#111827] hover:text-[#10B981] transition">
                <Heart size={20} />
                <span className="text-xs">Wishlist</span>
                <span className="absolute -top-1 right-3 w-4 h-4 rounded-full bg-[#10B981] text-white text-[10px] flex items-center justify-center">
                  0
                </span>
              </button>

              <button className="relative flex flex-col items-center gap-1 text-[#111827] hover:text-[#10B981] transition">
                <ShoppingCart size={20} />
                <span className="text-xs">Cart</span>
                <span className="absolute -top-1 right-3 w-4 h-4 rounded-full bg-[#10B981] text-white text-[10px] flex items-center justify-center">
                  0
                </span>
              </button>

              <button className="flex flex-col items-center gap-1 text-[#111827] hover:text-[#10B981] transition">
                <User size={20} />
                <span className="text-xs">Account</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;