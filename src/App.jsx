import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import SharedLayout from "./Layouts/SharedLayout";
const HomePage = lazy(() => import("./Pages/HomePage/HomePage"));
const CataloguePage = lazy(() => import("./Pages/CataloguePage/CataloguePage"));
const FavoritePage = lazy(() => import("./Pages/FavoritePage/FavoritePage"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="catalogue" element={<CataloguePage />} />
        <Route path="favorites" element={<FavoritePage />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
