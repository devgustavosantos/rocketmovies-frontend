import { createContext, useContext, useState, useEffect } from "react";

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

      localStorage.setItem("@rocketmovies:user", JSON.stringify(user));
      localStorage.setItem("@rocketmovies:token", token);
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível logar. Por favor tente novamente mais tarde.");
      }
    }
  }

  function signOut() {
    setUserInfos(null);
    localStorage.removeItem("@rocketmovies:user");
    localStorage.removeItem("@rocketmovies:token");
  }

  useEffect(() => {
    const user = localStorage.getItem("@rocketmovies:user");
    const token = localStorage.getItem("@rocketmovies:token");

    if (user && token) {
      setUserInfos(user);
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  }, []);

  return (
    <AuthContext.Provider value={{ userInfos, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
