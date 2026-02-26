import { useDarkMode } from "../hooks/useDarkMode";
import { Link } from "react-router-dom";
import Button from "../ui/Button";
import { FaRupeeSign } from "react-icons/fa";

function Navbar({ button_detail, url }) {
  const [isDark, setIsDark] = useDarkMode();

  return (
    <nav
      className="
      fixed top-0 left-0 right-0 z-50
      max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto
      flex items-center justify-between
      px-4 sm:px-6 md:px-8 py-2.5
      bg-white/80 dark:bg-slate-900/80
      backdrop-blur-md
      border-b border-slate-200 dark:border-slate-800
    "
    >
      <Link to="/">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight">
            Spend
            <span className="text-indigo-600 dark:text-indigo-400">Record</span>
          </span>
        </div>
      </Link>

      <div className="flex items-center gap-3">
        <Button type="round" OnClick={() => setIsDark(!isDark)}>
          {isDark ? "🌞" : "🌛"}
        </Button>
        <Link
          to={url}
          className="
          text-sm font-semibold
          text-indigo-600 dark:text-indigo-400
          px-3 py-1.5 rounded-lg
          hover:bg-indigo-50 dark:hover:bg-indigo-500/10
          transition-colors
        "
        >
          {button_detail ? (
            button_detail
          ) : (
            <Button type="round">
              <FaRupeeSign />
            </Button>
          )}
        </Link>
      </div>
    </nav>
  );
}
export default Navbar;
