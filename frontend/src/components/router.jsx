import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import BrowsePage from "./pages/Browse/BrowsePage";
import Layout from "./Layout";
import ProductDetailsPage from "./pages/Product/ProductDetailsPage";
import Signup from "./pages/Authentication/Signup";
import AssessmentTool from "./pages/AssesmentTool";
import AboutPage from "./pages/About";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="browse" element={<BrowsePage />} />

      <Route path="product-details/:title" element={<ProductDetailsPage />} />
      <Route path="signup" element={<Signup />} />
      <Route path="assessment" element={<AssessmentTool />} />
      <Route path="about" element={<AboutPage />} />
    </Route>
  )
);

export default router;
