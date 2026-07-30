import { Routes, Route } from "react-router-dom";
import AnnouncementBar from "./components/layout/AnnouncementBar";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Support from "./pages/Support";
import About from "./pages/About";
import Contact from "./pages/Contact";
function App() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
<Route path="/support" element={<Support />} />
<Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;