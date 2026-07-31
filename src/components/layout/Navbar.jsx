import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Search, Heart, ShoppingCart, User, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Shop" },
  { to: "/about", label: "About" },
  { to: "/support", label: "Support" },
  { to: "/contact", label: "Contact" },
];

const EASE = [0.16, 1, 0.3, 1];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="flex h-20 items-center justify-between gap-4">
                    {/* Logo */}
          <div className="flex flex-1 justify-start">
            <Link
              to="/"
              onClick={closeMenu}
              className="flex items-center text-[26px] font-extrabold tracking-tight sm:text-[28px] lg:text-[30px]"
            >
              <span className="text-[#111827]">AUR</span>
              <span className="text-[#10B981]">EX</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center justify-center lg:flex">
            <ul className="flex items-center gap-10 text-[17px] font-medium">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `transition duration-300 ${
                        isActive
                          ? "text-[#10B981]"
                          : "text-[#111827] hover:text-[#10B981]"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop Icons */}
          <div className="hidden flex-1 items-center justify-end gap-5 lg:flex">
            <button className="text-[#111827] transition hover:text-[#10B981]">
              <Search size={22} />
            </button>

            <Link
              to="/wishlist"
              className="relative text-[#111827] transition hover:text-[#10B981]"
            >
              <Heart size={22} />
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#10B981] text-[10px] text-white">
                0
              </span>
            </Link>

            <Link
              to="/cart"
              className="relative text-[#111827] transition hover:text-[#10B981]"
            >
              <ShoppingCart size={22} />
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#10B981] text-[10px] text-white">
                0
              </span>
            </Link>

            <button className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 text-[#111827] transition hover:bg-[#10B981] hover:text-white">
              <User size={20} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="relative z-[60] ml-auto flex h-8 w-8 items-center justify-center text-[#111827] lg:hidden"
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
            <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-white lg:hidden"
          >
            {/* Mobile Header */}
            <div className="flex h-20 items-center justify-between border-b border-gray-200 px-6">
              <span className="text-[26px] font-extrabold tracking-tight">
                <span className="text-[#111827]">AUR</span>
                <span className="text-[#10B981]">EX</span>
              </span>

              <button
                onClick={closeMenu}
                className="text-[#111827]"
              >
                <X size={26} />
              </button>
            </div>

            {/* Mobile Navigation */}
            <ul className="flex flex-col px-6 py-4">
              {NAV_LINKS.map((link, index) => (
                <motion.li
                  key={link.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.05,
                    ease: EASE,
                  }}
                  className="border-b border-gray-100 last:border-none"
                >
                  <NavLink
                    to={link.to}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `block py-4 text-[19px] font-medium transition ${
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

            {/* Mobile Bottom Icons */}
            <div className="mt-auto flex items-center justify-around border-t border-gray-200 px-6 py-5">
              <button className="flex flex-col items-center gap-1 text-[#111827] hover:text-[#10B981]">
                <Search size={20} />
                <span className="text-xs">Search</span>
              </button>

              <Link
                to="/wishlist"
                onClick={closeMenu}
                className="relative flex flex-col items-center gap-1 text-[#111827] hover:text-[#10B981]"
              >
                <Heart size={20} />
                <span className="text-xs">Wishlist</span>

                <span className="absolute -top-1 right-3 flex h-4 w-4 items-center justify-center rounded-full bg-[#10B981] text-[10px] text-white">
                  0
                </span>
              </Link>

              <Link
                to="/cart"
                onClick={closeMenu}
                className="relative flex flex-col items-center gap-1 text-[#111827] hover:text-[#10B981]"
              >
                <ShoppingCart size={20} />
                <span className="text-xs">Cart</span>

                <span className="absolute -top-1 right-3 flex h-4 w-4 items-center justify-center rounded-full bg-[#10B981] text-[10px] text-white">
                  0
                </span>
              </Link>

              <button className="flex flex-col items-center gap-1 text-[#111827] hover:text-[#10B981]">
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