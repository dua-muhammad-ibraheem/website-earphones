import { useState } from "react";
import WishlistContext from "./WishlistContext";

const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        setWishlistItems,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistProvider;