import { Link } from "react-router-dom";
import Button from "../../ui/Button";

function Footer() {
  return (
    <footer
      className="mt-auto p-6 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 "
    >
      <div className="flex flex-col gap-3">
        <Link to="/groups">
          <Button type="primary">Log in</Button>
        </Link>
      </div>

      <p
        className="
        text-center mt-4 text-xs uppercase tracking-widest
        text-slate-400 dark:text-slate-600 font-bold
      "
      >
        Joined by 50,000+ roommates
      </p>
    </footer>
  );
}

export default Footer;
