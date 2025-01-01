import React from 'react';
import { Link } from 'react-router-dom';

interface SidebarProps {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ sidebarOpen, toggleSidebar }) => {
  return (
    sidebarOpen && (
      <div className="fixed inset-0 bg-gray-700 bg-opacity-50 z-20 sm:hidden">
        <div className="absolute left-0 top-0 w-64 bg-white dark:bg-gray-800 h-full p-4">
          <button onClick={toggleSidebar} className="text-white">
            Close Sidebar
          </button>
          <ul>
            <li>
              <Link
                to="/dashboard"
                className="block text-gray-700 dark:text-gray-200 py-2"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/tasks"
                className="block text-gray-700 dark:text-gray-200 py-2"
              >
                Tasks
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                className="block text-gray-700 dark:text-gray-200 py-2"
              >
                Profile
              </Link>
            </li>
          </ul>
        </div>
      </div>
    )
  );
};

export default Sidebar;
