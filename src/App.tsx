import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
const Signup = lazy(() => import("./pages/auth/Signup"));
const Login = lazy(() => import("./pages/auth/Login"));
const UserLayout = lazy(() => import("./layout/user-layout/index"));
const AdminLayout = lazy(() => import("./layout/admin-layout/index"));
const Dashboard = lazy(() => import("./pages/user/Dashboard"));
const Inbound = lazy(() => import("./pages/user/Inbound"));

function App() {
  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
        <BrowserRouter>
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />

            {/* Users routes */}
            <Route path="/" element={<UserLayout />}>
              <Route path="/" index element={<Dashboard />} />
              <Route path="inbound" element={<Inbound />} />
            </Route>

            {/* Admin Routes */}
            <Route
              path="/administrator-panel"
              element={<AdminLayout />}
            ></Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
