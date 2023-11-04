import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div className="grid h-screen w-screen grid-rows-[auto_1fr_auto] grid-cols-1">
      <Header />

      <main className="flex flex-col gap-[3.2rem] mb-16">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default AppLayout;
