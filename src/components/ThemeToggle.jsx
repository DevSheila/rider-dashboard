import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { PiMoonFill, PiSunFill } from "react-icons/pi";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <button
        onClick={toggleTheme}
        aria-label="Toggle Theme"
        className="flex items-start gap-2 p-2 rounded-lg transition-all duration-300 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600"
      >
        {theme === "dark" ? (
          <>
            <span className="text-gray-900 dark:text-gray-200">Light</span>

            <PiSunFill className="text-yellow-400 text-xl transition-transform duration-300 transform scale-110" />
          </>
        ) : (
          <>
            <span className="text-gray-900 dark:text-gray-200">Dark</span>

            <PiMoonFill className="text-gray-900 text-xl transition-transform duration-300 transform scale-110" />
          </>
        )}
      </button>
    </div>
  );
};

export default ThemeToggle;
