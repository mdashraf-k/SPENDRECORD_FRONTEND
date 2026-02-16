import { useDarkMode } from "../hooks/useDarkMode";
import { Link } from "react-router-dom";
import Button from "../../ui/Button";


function Navbar() {
  const [isDark, setIsDark] = useDarkMode();

  return (
    <nav
      className="
      sticky top-0 z-50
      flex items-center justify-between
      px-6 py-4
      bg-white/80 dark:bg-slate-900/80
      backdrop-blur-md
      border-b border-slate-200 dark:border-slate-800
    "
    >
      <div className="flex items-center gap-2">
        <span className="text-xl font-bold tracking-tight">
          Spend
          <span className="text-indigo-600 dark:text-indigo-400">Record</span>
        </span>
      </div>

      <div className="flex items-center gap-3">
        <Button type="round" OnClick={() => setIsDark(!isDark)}>{isDark ? "🌞" : "🌛"}</Button>
        <Link
          to="/signup"
          className="
          text-sm font-semibold
          text-indigo-600 dark:text-indigo-400
          px-3 py-1.5 rounded-lg
          hover:bg-indigo-50 dark:hover:bg-indigo-500/10
          transition-colors
        "
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
}
export default Navbar;

