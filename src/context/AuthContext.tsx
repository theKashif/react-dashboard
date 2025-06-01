// import Cores
import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Shape of authentication context
interface AuthContextType {
  user: any; // Can be improved later with user type
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

// Create the context with a default value
const AuthContext = React.createContext<AuthContextType>({} as AuthContextType);

// Provider component that wraps the entire app and provides auth state to all children
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();

  // State to store logged-in user
  const [user, setUser] = useState<any>(null);

  // Check localStorage when app loads to keep user logged in
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Function to handle login using dummyjson API
  const login = async (username: string, password: string) => {
    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      // Save user in state and localStorage for persistence
      setUser(data);
      localStorage.setItem("user", JSON.stringify(data));

      // Navigate to dashboard after successful login
      navigate("/dashboard");
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  // Function to logout the user
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/login");
  };

  // isAuthenticated = whether the user is logged in or not
  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use auth context in other components
export const useAuth = () => useContext(AuthContext);
