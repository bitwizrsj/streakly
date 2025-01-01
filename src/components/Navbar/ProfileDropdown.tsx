import React from 'react';
import { Link } from 'react-router-dom';
import { User, Settings, Bell, LogOut } from 'lucide-react';

interface ProfileDropdownProps {
  profileDropdownOpen: boolean;
  toggleProfileDropdown: () => void;
}

const ProfileDropdown: React.FC<ProfileDropdownProps> = ({ profileDropdownOpen, toggleProfileDropdown }) => {
  return (
    <div className="relative">
      <button
        className="p-2 rounded-full text-gray-500 dark:text-gray-400"
        onClick={toggleProfileDropdown}
      >
        <img
          src="https://www.w3schools.com/w3images/avatar2.png" // Sample image, replace with actual user profile picture
          alt="Profile"
          className="w-8 h-8 rounded-full"
        />
      </button>
      {profileDropdownOpen && (
        <div className="absolute right-0 mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg w-48">
          <ul>
            <li>
              <Link
                to="/profile"
                className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                <User className="w-4 h-4 inline mr-2" />
                Profile
              </Link>
            </li>
            <li>
              <Link
                to="/settings"
                className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                <Settings className="w-4 h-4 inline mr-2" />
                Settings
              </Link>
            </li>
            <li>
              <Link
                to="/notifications"
                className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                <Bell className="w-4 h-4 inline mr-2" />
                Notifications
              </Link>
            </li>
            <li>
              <button
                onClick={() => alert('Logging out...')}
                className="block w-full px-4 py-2 text-gray-700 dark:text-gray-200 text-left hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                <LogOut className="w-4 h-4 inline mr-2" />
                Log out
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
