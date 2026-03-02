import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import MainLayout from "../layout/MainLayout";
import routes from "./routes";

function AppRoutes() {
  const { user, loading } = useAuth();

  if (loading) return null;

  return (
    <Routes>
      <Route element={<MainLayout />}>
        {routes.map(({ path, element }, index) => {
          if (path === "/account") {
            return (
              <Route
                key={index}
                path={path}
                element={
                  user ? element : <Navigate to="/login-register" replace />
                }
              />
            );
          }

          if (path === "/login-register") {
            return (
              <Route
                key={index}
                path={path}
                element={user ? <Navigate to="/account" replace /> : element}
              />
            );
          }

          return <Route key={index} path={path} element={element} />;
        })}
      </Route>
    </Routes>
  );
}

export default AppRoutes;
