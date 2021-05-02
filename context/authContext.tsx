import React, { createContext, useContext, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

//types
interface IUser {
  id: number;
  username: string;
  email: string;
}

interface IContextProps {
  user: IUser | null;
  error: any;
  login: (identifier: string, password: string) => Promise<void>;
}

//create Context
const AuthContext = createContext<Partial<IContextProps>>({});

//create Provider
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const router = useRouter();
  //Login
  //fetch to next api route, because there we store the cookie backendish
  const login = async (identifier: string, password: string) => {
    try {
      const res = await axios.post(`/api/login`, {
        identifier,
        password,
      });
      console.log(res);
      //   setUser(data);
      //   router.push("/");
    } catch (error) {
      console.log(error);
      setError(error.response.data.message[0].messages[0].message);
    }
  };

  //Logout

  //logged in user
  return (
    <AuthContext.Provider value={{ user, login, error }}>
      {children}
    </AuthContext.Provider>
  );
};

//create custom hook context
export const useAuth = () => {
  return useContext(AuthContext);
};
