import { Route, Routes } from "react-router-dom";
import Home from "../pages/homePage";
import Register from "../pages/registerPage";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={< Register/>} />
    </Routes>
  );
};
