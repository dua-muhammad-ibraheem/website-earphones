import { Link } from "react-router-dom";


function Footer() {
  return (
    <footer className="bg-black text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold">
              AUR<span className="text-emerald-500">EX</span>
            </h2>

            <p className="text-gray-400 mt-4 text-sm leading-6">
              Premium audio products designed to elevate your everyday
              listening experience.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-semibold mb-4">Shop</h3>

            <ul className="space-y-3 text-sm text-gray-400">
             <div>
  <h3 className="font-semibold mb-4">Shop</h3>

  <ul className="space-y-3 text-sm text-gray-400">
    <li>
      <Link to="/products">Headphones</Link>
    </li>

    <li>
      <Link to="/products">Earbuds</Link>
    </li>

    <li>
      <Link to="/products">Speakers</Link>
    </li>

    <li>
      <Link to="/products">Accessories</Link>
    </li>
  </ul>
</div>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>

            <ul className="space-y-3 text-sm text-gray-400">
             <li>
  <Link to="/about" className="hover:text-emerald-500 transition-colors duration-200">About Us</Link>
</li>

<li>
  <Link to="/contact" className="hover:text-emerald-500 transition-colors duration-200">Contact</Link>
</li>

<li>
  <Link to="/support" className="hover:text-emerald-500 transition-colors duration-200">Support</Link>
</li>

<li>
  <Link to="/wishlist" className="hover:text-emerald-500 transition-colors duration-200">Wishlist</Link>
</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>

            <ul className="space-y-3 text-sm text-gray-400">
              <li>Shipping & Delivery</li>
              <li>Returns & Refunds</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center">
          <p className="text-sm text-gray-500">
            © 2026 AUREX. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;