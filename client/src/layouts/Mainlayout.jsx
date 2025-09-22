import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar"; // ✅ import Navbar ที่คุณสร้างไว้

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar /> {/* ✅ ใช้ component Navbar */}
      </div>

      {/* Main content */}
      <main className="flex-grow container mx-auto px-4 py-4 mt-16 mb-20 min-h-[calc(100vh-9rem)]">
        <Outlet />
      </main>

      {/* Footer */}
      <div className="fixed bottom-0 left-0 right-0 z-50">Footer</div>
    </div>
  );
};

export default MainLayout;
