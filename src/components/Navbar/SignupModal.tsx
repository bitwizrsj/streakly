import React, { useState } from 'react';
import { X, Mail, Lock, User } from 'lucide-react';

interface SignupModalProps {
  isOpen: boolean;
  toggleModal: () => void;
}

const SignupModal: React.FC<SignupModalProps> = ({ isOpen, toggleModal }) => {
  if (!isOpen) return null;

  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const toggleSignupModal = () => setIsSignupModalOpen(!isSignupModalOpen);


  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50"
      onClick={(e) => e.target === e.currentTarget && toggleModal()}
    >
      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl w-full max-w-md mx-4 relative transform transition-all">
        <button
          onClick={toggleModal}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Create Account</h2>
          <p className="text-gray-500 dark:text-gray-400">Join us and start tracking your habits</p>
        </div>

        <form className="space-y-6">
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Full name"
              className="w-full pl-12 pr-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition-all"
            />
          </div>

          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="email"
              placeholder="Email address"
              className="w-full pl-12 pr-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white transition-all"
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-12 pr-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white transition-all"
            />
          </div>

          <div className="flex items-center">
            <input type="checkbox" className="w-4 h-4 text-green-600 rounded border-gray-300 focus:ring-green-500" />
            <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
              I agree to the <a href="#" className="text-green-600 hover:text-green-700">Terms</a> and <a href="#" className="text-green-600 hover:text-green-700">Privacy Policy</a>
            </span>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Create account
          </button>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200 dark:border-gray-600"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white dark:bg-gray-800 text-gray-500">Or sign up with</span>
            </div>
          </div>

          <div className="flex space-x-4">
            <button className="flex-1 py-3 px-4 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              Google
            </button>
            <button className="flex-1 py-3 px-4 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              GitHub
            </button>
          </div>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          Already have an account?{' '}
          <a href="#" onClick={toggleSignupModal} className="text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignupModal;