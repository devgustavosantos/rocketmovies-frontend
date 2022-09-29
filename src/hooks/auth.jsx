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

  async function updateUser({ user, avatar }) {
    try {
      if (avatar) {
        const fileForm = new FormData();
        fileForm.append("avatar", avatar);

        const response = await api.patch("/users/avatar", fileForm);

        setUserInfos(response.data);

        localStorage.setItem(
          "@rocketmovies:user",
          JSON.stringify(response.data)
        );
      }
      const response = await api.put("/users", user);

      setUserInfos(response.data);

      localStorage.setItem("@rocketmovies:user", JSON.stringify(response.data));

      alert("Dados atualizados com sucesso");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert(
          "Não foi possível atualizar. Por favor tente novamente mais tarde."
        );
      }
    }
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("@rocketmovies:user"));
    const token = localStorage.getItem("@rocketmovies:token");

    if (user && token) {
      setUserInfos(user);
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  }, []);

  return (
    <AuthContext.Provider value={{ userInfos, signIn, signOut, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
