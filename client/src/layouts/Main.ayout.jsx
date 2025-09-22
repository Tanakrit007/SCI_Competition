import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
        <div className="fixed top-0 left-0 right-0"></div>
        <main className="fiex-grow container mx-auto px-4 py-8 mt-16 mb-20 min-h-[calc(100vh-9rem)]">
            <Outlet />
        </main>
    </div>
    );
};

export default MainLayout;