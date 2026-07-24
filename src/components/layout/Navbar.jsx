import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-[#111827] text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="text-2xl font-bold text-[#10B981]"
        >
          TechNest
        </Link>

        <ul className="flex items-center gap-8">
          <li>
            <Link to="/" className="hover:text-[#10B981] transition">
              Home
            </Link>
          </li>

          <li>
            <Link to="/products" className="hover:text-[#10B981] transition">
              Products
            </Link>
          </li>

          <li>
            <Link to="/wishlist" className="hover:text-[#10B981] transition">
              Wishlist
            </Link>
          </li>

          <li>
            <Link to="/cart" className="hover:text-[#10B981] transition">
              Cart
            </Link>
          </li>

          <li>
            <Link to="/login" className="hover:text-[#10B981] transition">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;