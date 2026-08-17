import { createContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(() => {
    const savedUser = localStorage.getItem("aurexLoggedIn");

    return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = (user) => {
    localStorage.setItem(
      "aurexLoggedIn",
      JSON.stringify(user)
    );

    setLoggedInUser(user);
  };

  const logout = () => {
    localStorage.removeItem("aurexLoggedIn");
    setLoggedInUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        loggedInUser,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;