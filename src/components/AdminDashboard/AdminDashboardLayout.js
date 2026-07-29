import React from "react";
import "../Styles/DashboardLayout.css";
import AdminSidebar from "./AdminSidebar";
import AdminDashboardRoutes from "./AdminDashboardRoutes";
import AdminNavbar from "./AdminNavbar";

function AdminDashboardLayout() {
  return (
    <div className="admin-layout">
      <AdminNavbar/>
      <AdminSidebar/>
      <main className="admin-main-content">
        <AdminDashboardRoutes/>
      </main>
    </div>
  );
}

export default AdminDashboardLayout;
