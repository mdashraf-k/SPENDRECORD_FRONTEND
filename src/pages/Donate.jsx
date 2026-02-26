import { FaHeart, FaCopy } from "react-icons/fa";
import { IoIosCopy } from "react-icons/io";
import { Link } from "react-router-dom";
import { useState } from "react";
import qr from "../assets/qr.jpeg";
import Button from "../ui/Button";
import { FaArrowLeft } from "react-icons/fa";

function Donate() {
  const [copied, setCopied] = useState(false);
  const textToCopy = "9546572597-2@okbizaxis";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);

      // Reset "Copied" state after 2 seconds
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  return (
    <div>
      <div className="max-w-107.5 mx-auto min-h-screen relative flex flex-col bg-background-light dark:bg-background-dark border-x border-slate-200 dark:border-primary/10 ">
        <nav className="flex items-center justify-between px-6 py-4 mt-6">
          <Link to="/groups">
            <Button type="secondary">
              <FaArrowLeft />
            </Button>
          </Link>
          <h1 className="text-lg font-bold">Donate</h1>
          <div className="w-10"></div>
        </nav>
        <div className="flex-1 overflow-y-auto px-6 pb-32">
          <div className="mt-4 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-4 neon-glow">
              <span className=" text-3xl">
                <FaHeart />
              </span>
            </div>
            <h2 className="text-2xl font-800 tracking-tight dark:text-white mb-2">
              Support
              <span className="text-2xl pl-3 font-bold tracking-tight">
                Spend
                <span className="text-indigo-600 text-2xl dark:text-indigo-400">
                  Record
                </span>
              </span>
            </h2>

            <p className="text-slate-500 dark:text-slate-400 text-sm px-4 leading-relaxed">
              Help us keep SpendRecord free, ad-free, and growing. Your
              contributions power the servers for roommates worldwide.
            </p>
          </div>

          <div className="mt-10 flex flex-col items-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-linear-to-r from-primary via-primary/50 to-primary rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white p-2 rounded-xl shadow-xl">
                <img className="w-80 h-75" src={qr} />
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold mb-2">
                Scan to Pay via UPI
              </p>
              <div className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-primary/5 border border-slate-200 dark:border-primary/20 rounded-lg">
                <span className="text-2xl font-mono text-slate-600 dark:text-slate-300">
                  9546572597-2@okbizaxis
                </span>
                <button onClick={handleCopy} className=" text-2xl text-primary">
                  {copied ? <IoIosCopy /> : <FaCopy />}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 ios-blur bg-white/80 dark:bg-background-dark/80 border-t border-slate-200 dark:border-primary/10">
          <div className="flex flex-col gap-4">
            <p className="text-[10px] text-center text-slate-400">
              Secure payment processed via UPI gateway. No data is stored.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Donate;
