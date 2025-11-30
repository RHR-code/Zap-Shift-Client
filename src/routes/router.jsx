import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import Coverage from "../pages/coverage/Coverage";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/auth/Login/Login";
import Register from "../pages/auth/Register/Register";
import Rider from "../pages/rider/rider";
import PrivateRoute from "./PrivateRoute";
import SendParcel from "../pages/sendParcel/SendParcel";
import DashboardLayout from "../layouts/DashboardLayout";
import MyParcels from "../pages/dashboard/MyParcels/MyParcels";
import Payment from "../pages/dashboard/Payment/Payment";
import PaymentSuccess from "../pages/dashboard/Payment/PaymentSuccess";
import PaymentCancelled from "../pages/dashboard/Payment/PaymentCancelled";
import PaymentHistory from "../pages/dashboard/paymentHistory/PaymentHistory";
import ApproveRiders from "../pages/dashboard/ApproveRiders/ApproveRiders";
import UsersManagement from "../pages/dashboard/UsersManagement/UsersManagement";
import AdminRoute from "./AdminRoute";
import AssignRIders from "../pages/dashboard/AssignRiders/AssignRIders";

export const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<RootLayout />}>
      <Route index={true} Component={Home} />
      <Route
        path="coverage"
        loader={() => fetch("./serviceCenter.json").then((res) => res.json())}
        Component={Coverage}
      />
      <Route
        path="send-parcel"
        loader={() => fetch("./serviceCenter.json").then((res) => res.json())}
        element={
          <PrivateRoute>
            <SendParcel />
          </PrivateRoute>
        }
      />
      <Route
        path="rider"
        loader={() => fetch("./serviceCenter.json").then((res) => res.json())}
        element={
          <PrivateRoute>
            <Rider />
          </PrivateRoute>
        }
      />
    </Route>,
    <Route path="/" element={<AuthLayout />}>
      <Route path="login" Component={Login} />
      <Route path="register" Component={Register} />
    </Route>,
    <Route
      path="dashboard"
      element={
        <PrivateRoute>
          <DashboardLayout />
        </PrivateRoute>
      }
    >
      <Route path="my-parcels" Component={MyParcels} />
      <Route path="payment-history" Component={PaymentHistory} />
      <Route path="payment/:parcelId" Component={Payment} />
      <Route
        path="approve-riders"
        element={
          <AdminRoute>
            <ApproveRiders />
          </AdminRoute>
        }
      />
      <Route
        path="assign-riders"
        element={
          <AdminRoute>
            <AssignRIders />
          </AdminRoute>
        }
      />
      <Route
        path="users-management"
        element={
          <AdminRoute>
            <UsersManagement />
          </AdminRoute>
        }
      />
      <Route path="payment-success" Component={PaymentSuccess} />
      <Route path="payment-cancelled" Component={PaymentCancelled} />
    </Route>,
  ])
);
