import { createContext, useState } from "react";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
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

export default WishlistContext;