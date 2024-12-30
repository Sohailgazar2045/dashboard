import { useState } from "react";
import { ChevronDown, User, Settings, LogOut, Sun, Moon } from "lucide-react";

const Header = ({ title }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    profileImage: "https://randomuser.me/api/portraits/men/3.jpg",
  };

  return (
    <header className="bg-white shadow-lg border-b border-gray-300 relative z-50">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Title */}
        <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>

        <div className="flex items-center space-x-4">
          {/* Theme Toggle Button */}
          {/* <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-200 transition-colors"
          >
            {isDarkMode ? (
              <Sun size={20} className="text-yellow-400" />
            ) : (
              <Moon size={20} className="text-gray-400" />
            )}
          </button> */}
          
          {/* User Profile */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <img
                src={user.profileImage}
                alt="User Profile"
                className="w-10 h-10 rounded-full"
              />
              <span className="text-gray-900 font-medium">{user.name}</span>
              <ChevronDown size={18} className="text-gray-500" />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded-lg shadow-lg z-50">
                <ul className="py-1">
                  <li>
                    <button
                      className="w-full flex items-center px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 transition-colors"
                      onClick={() => alert("Go to Profile Settings")}
                    >
                      <User
                        size={18}
                        className="mr-2 text-gray-400"
                        style={{ color: "#EC4899", minWidth: "20px" }}
                      />
                      Profile
                    </button>
                  </li>
                  <li>
                    <button
                      className="w-full flex items-center px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 transition-colors"
                      onClick={() => alert("Go to Settings")}
                    >
                      <Settings
                        size={18}
                        className="mr-2 text-gray-400"
                        style={{ color: "#6EE7B7", minWidth: "20px" }}
                      />
                      Settings
                    </button>
                  </li>
                  <li>
                    <button
                      className="w-full flex items-center px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 transition-colors"
                      onClick={() => alert("Logout")}
                    >
                      <LogOut
                        size={18}
                        className="mr-2 text-gray-400"
                        style={{ color: "#EF4444", minWidth: "20px" }}
                      />
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
