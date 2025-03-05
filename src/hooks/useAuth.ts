// import { useState, useEffect, createContext, useContext, ReactNode } from "react";
// import { loginUser } from "@/services/api";

// // Define user type
// interface User {
//   token: string;
//   [key: string]: any; // Extend with more user properties if needed
// }

// // Define authentication context type
// interface AuthContextType {
//   user: User | null;
//   login: (credentials: { email: string; password: string }) => Promise<void>;
//   logout: () => void;
// }

// // Create context with a default empty object to avoid `undefined` issues
// const AuthContext = createContext<AuthContextType | null>(null);

// // Define provider props
// interface AuthProviderProps {
//   children: ReactNode;
// }

// // AuthProvider component
// export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
//   const [user, setUser] = useState<User | null>(null);

//   const login = async (credentials: { email: string; password: string }) => {
//     try {
//       const { data } = await loginUser(credentials);
//       localStorage.setItem("token", data.token);
//       setUser(data.user);
//     } catch (error) {
//       console.error("Login failed:", error);
//     }
//   };

//   const logout = () => {
//     localStorage.removeItem("token");
//     setUser(null);
//   };

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       // Ideally, fetch user data from an API
//       setUser({ token } as User);
//     }
//   }, []);

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // Custom hook to use authentication context
// export const useAuth = (): AuthContextType => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// };
