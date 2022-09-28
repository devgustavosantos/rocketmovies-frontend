import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import { useAuth } from "../hooks/auth";

export function Routes() {
  const { userInfos } = useAuth();
  return (
    <BrowserRouter>{userInfos ? <AppRoutes /> : <AuthRoutes />}</BrowserRouter>
  );
}
