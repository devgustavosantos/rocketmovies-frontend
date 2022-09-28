import { createContext, useContext, useState } from "react";

import { api } from "../services/api";

const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [userInfos, setUserInfos] = useState(null);

  async function signIn(email, password) {
    try {
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data;

      setUserInfos(user);
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível logar. Por favor tente novamente mais tarde.");
      }
    }
  }

  return (
    <AuthContext.Provider value={{ userInfos, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
