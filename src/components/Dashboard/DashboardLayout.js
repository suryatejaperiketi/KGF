import React from "react";
import "../Styles/DashboardLayout.css";
import Sidebar from "./Sidebar";
import DashboardRoutes from "./DashboardRoutes";
import AdminNav from "./AdminNav";

function DashboardLayout() {
  return (
    <div className="admin-layout">
      <AdminNav/>
      <Sidebar />

      <main className="admin-main-content">
        <DashboardRoutes/>
      </main>
    </div>
  );
}

export default DashboardLayout;
