import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <section className="bg-[#F5F2FF] w-screen h-screen grid place-items-center overflow-hidden">
      <section className="h-[calc(100vh-16px)] w-[calc(100vw-16px)] flex gap-4 overflow-hidden">
        Aside
        <div className="flex-1">
          Header
          <main className="h-[calc(100vh-32px)] overflow-y-scroll overflow-x-hidden pt-4 scroll-0 rounded-lg">
            <Outlet />
          </main>
        </div>
      </section>
    </section>
  );
};

export default UserLayout;
