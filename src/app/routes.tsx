import { Route, Routes } from "react-router-dom";
import StudioLayout from "../components/layout/StudioLayout";
import DemoRoute from "../pages/DemoRoute";
import NotFoundPage from "../pages/NotFoundPage";
import StudioHome from "../pages/StudioHome";
import WorkflowPage from "../pages/WorkflowPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<StudioLayout />}>
        <Route index element={<StudioHome />} />
        <Route path="adding-a-demo" element={<WorkflowPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
      <Route path="demos/:demoSlug" element={<DemoRoute />} />
    </Routes>
  );
}
