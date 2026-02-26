

function Button({ children, type, OnClick }) {

  const styles = {
    primary:
      " w-full bg-primary text-slate-900 font-bold py-4 mb-4 rounded-xl shadow-lg shadow-primary/20 hover:brightness-105 active:scale-[0.98] transition-all flex items-center justify-center gap-2  ",
    secondary:
      "text-black hover:text-slate-900 dark:text-slate-400 text-xl transition-colors",
    round:
      "p-2 text-xl rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors",

    small : "w-12 bg-primary text-slate-900 font-bold py-4 mb-4 rounded-xl  hover:brightness-105 transition-all flex items-center justify-center gap-2",

    landingButton : "bg-white text-primary px-8 py-4 rounded-xl text-lg font-bold hover:bg-slate-100 transition-colors shadow-xl shadow-black/10",

    startToTalk: "bg-primary-dark/20 border-2 border-white/30 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-white/10 transition-colors"
  };

  return (
    <button className={styles[type] || styles.primary} type="button" onClick={OnClick}>
      {children}
    </button>
  );
}

export default Button;
