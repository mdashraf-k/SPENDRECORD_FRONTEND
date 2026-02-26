import { Link } from "react-router-dom";
import Button from "../ui/Button";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-100 w-full dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2 lg:col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-tight">
                Spend
                <span className="text-indigo-600 dark:text-indigo-400">
                  Record
                </span>
              </span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 max-w-xs text-sm leading-relaxed">
              SpendRecord is the world's most trusted expense splitting app for
              households and friends. Built for transparency and fairness.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://x.com/spendrecord" target="_blank"><FaXTwitter size={26}/>
              </a>
                
              <a href="https://www.instagram.com/spendrecord/?hl=en" target="_blank">
                <FaInstagram size={26}/>
              </a>
            </div>
          </div>

          <div>
            <h5 className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-6">
              Product
            </h5>
            <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
              <li>
                <Link to="/features" className="hover:text-primary transition-colors" href="#">
                  Features
                </Link>
              </li>
              
              <li>
                <Link to="/security" className="hover:text-primary transition-colors" href="#">
                  Security
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-6">
              Company
            </h5>
            <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
              <li>
                <Link to="/about" className="hover:text-primary transition-colors" href="#">
                  About Us
                </Link>
              </li>
              
              <li>
                <Link to="/blog" className="hover:text-primary transition-colors" href="#">
                  Blog
                </Link>
              </li>
              
            </ul>
          </div>

          <div>
            <h5 className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-6">
              Support
            </h5>
            <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400 mb-8">
              <li>
                <Link to="/help_center" className="hover:text-primary transition-colors" href="#">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/contact_us" className="hover:text-primary transition-colors" href="#">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/community" className="hover:text-primary transition-colors" href="#">
                  Community
                </Link>
              </li>
            </ul>
            <h5 className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-6">
              Legal
            </h5>
            <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
              <li>
                <Link to="/privacy_policy" className="hover:text-primary transition-colors" href="#">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms_of_services" className="hover:text-primary transition-colors" href="#">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            © 2026 SpendRecord Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              className="text-xs text-slate-500 dark:text-slate-400 hover:text-primary"
              href="#"
            >
              Status
            </a>
            <a
              className="text-xs text-slate-500 dark:text-slate-400 hover:text-primary"
              href="#"
            >
              Cookies
            </a>
            <a
              className="text-xs text-slate-500 dark:text-slate-400 hover:text-primary"
              href="#"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
