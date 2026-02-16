import { Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import routes from "./routes";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        {routes.map(({ path, element }, index) => (
          <Route key={index} path={path} element={element} />
        ))}
      </Route>
    </Routes>
  );
}

export default AppRoutes;
