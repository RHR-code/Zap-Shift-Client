import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import Coverage from "../pages/coverage/Coverage";

export const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<RootLayout />}>
      <Route index={true} Component={Home} />
      <Route
        path="coverage"
        loader={() => fetch("./serviceCenter.json").then((res) => res.json())}
        Component={Coverage}
      />
    </Route>,
  ])
);
