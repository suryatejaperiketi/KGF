import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "../Styles/AdminSidebar.css";

function AdminSidebar() {
  const [openMenus, setOpenMenus] = useState({

  });

  const toggleMenu = (menu) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  return (
    <div className="admin-sidebar">
      <ul className="admin-sidebar-menu">
        <li>
          <NavLink
            to="/admindashboard/admindashboardhome"
            className={({ isActive }) =>
              isActive ? "admin-menu-item active" : "admin-menu-item"
            }
          >
            Registrations
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/admindashboard/blood-donors"
            className={({ isActive }) =>
              isActive ? "admin-menu-item active" : "admin-menu-item"
            }
          >
            Blood Donors
          </NavLink>
        </li>
        
        <li>
          <NavLink
            to="/admindashboard/events"
            className={({ isActive }) =>
              isActive ? "admin-menu-item active" : "admin-menu-item"
            }
          >
            Events
          </NavLink>

        </li>
        <li>
          <NavLink
            to="/admindashboard/jobs"
            className={({ isActive }) =>
              isActive ? "admin-menu-item active" : "admin-menu-item"
            }
          >
            Jobs
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/admindashboard/donations"
            className={({ isActive }) =>
              isActive ? "admin-menu-item active" : "admin-menu-item"
            }
          >
            Donations
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/admindashboard/board-members"
            className={({ isActive }) =>
              isActive ? "admin-menu-item active" : "admin-menu-item"
            }
          >
            Board Members
          </NavLink>
        </li>
        <li>
          <div
            className="admin-menu-item toggle-menu"
            onClick={() => toggleMenu("partners")}
          >
            Our Partners{" "}
            {openMenus.partners ? <FaChevronUp /> : <FaChevronDown />}
          </div>

          {openMenus.partners && (
            <ul className="submenu">
              <li>
                <NavLink
                  to="/admindashboard/collegesschools"
                  className={({ isActive }) =>
                    isActive ? "submenu-link active" : "submenu-link"
                  }
                >
                  Colleges & Schools
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/admindashboard/hospitals"
                  className={({ isActive }) =>
                    isActive ? "submenu-link active" : "submenu-link"
                  }
                >
                  Hospitals
                </NavLink>
              </li>
            </ul>
          )}
        </li>

      </ul>
    </div>
  );
}

export default AdminSidebar;