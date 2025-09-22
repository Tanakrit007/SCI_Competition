import React from "react"; // ✅ ต้องมี
import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routers/router.jsx"; // แก้ path ให้ตรงกับไฟล์จริง

function App() {
  return <RouterProvider router={router} />;
}

export default App;
