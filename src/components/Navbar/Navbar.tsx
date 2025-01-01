import React, { useState } from 'react';
import { Menu, X, Sun, Moon, ChevronDown } from 'lucide-react';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  const toggleTheme = () => setIsDark(!isDark);
  const toggleLoginModal = () => setIsLoginModalOpen(!isLoginModalOpen);
  const toggleSignupModal = () => setIsSignupModalOpen(!isSignupModalOpen);

  return (
    <>
      <nav className="bg-white dark:bg-gray-900 fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Streakly
              </h1>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <div className="flex space-x-8">
                <a href="#features" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500">
                  Features
                </a>
                <a href="#pricing" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500">
                  Pricing
                </a>
                <div className="relative">
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500"
                  >
                    Resources
                    <ChevronDown className="ml-1 w-4 h-4" />
                  </button>
                  {isDropdownOpen && (
                    <div className="absolute top-10 right-0 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2">
                      <a href="#docs" className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                        Documentation
                      </a>
                      <a href="#blog" className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                        Blog
                      </a>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <button
                  onClick={toggleTheme}
                  className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
                >
                  {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>

                <button
                  onClick={toggleLoginModal}
                  className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500"
                >
                  Log in
                </button>
                <button
                  onClick={toggleSignupModal}  
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Sign up
                </button>
              </div>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 pb-4">
            <div className="px-4 space-y-4">
              <a href="#features" className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500">
                Features
              </a>
              <a href="#pricing" className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500">
                Pricing
              </a>
              <a href="#docs" className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500">
                Documentation
              </a>
              <a href="#blog" className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500">
                Blog
              </a>
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={toggleLoginModal}
                  className="w-full px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500"
                >
                  Log in
                </button>
                <button
                  onClick={toggleSignupModal}  
                  className="w-full mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Sign up
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      <LoginModal isOpen={isLoginModalOpen} toggleModal={toggleLoginModal} />
      <SignupModal isOpen={isSignupModalOpen} toggleModal={toggleSignupModal} />
    </>
  );
};

export default Navbar;
