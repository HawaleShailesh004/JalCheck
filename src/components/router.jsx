import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import BrowsePage from "./pages/Browse/BrowsePage";
import Layout from "./Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="browse" element={<BrowsePage />} />
    </Route>
  )
);

export default router;
