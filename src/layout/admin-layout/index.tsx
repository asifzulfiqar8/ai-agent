import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <section className="bg-[#F5F2FF] w-screen h-screen grid place-items-center overflow-hidden">
      <section className="h-[calc(100vh-16px)] w-[calc(100vw-16px)] flex gap-4">
        Admin Aside
        <div className="flex-1">
          Admin Header
          <main className="h-[calc(100vh-32px)] overflow-y-scroll overflow-x-hidden scroll-0 pt-4 rounded-lg">
            <Outlet />
          </main>
        </div>
      </section>
    </section>
  );
};

export default AdminLayout;
