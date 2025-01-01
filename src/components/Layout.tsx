import React from 'react';
import { Outlet } from 'react-router-dom';
import TaskSidebar from './Sidebar/TaskSidebar';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center">
          <h1 className="text-2xl font-bold text-gray-900">Task Tracker</h1>
        </div>
      </header>

      <div className="flex">
        <TaskSidebar />
        {/* Main Content */}
        <main className="flex-1 ml-64 p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;