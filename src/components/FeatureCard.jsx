function FeatureCard({ iconBg, iconColor, title, description, children }) {
  return (
    <div className="
      min-w-[85%] snap-center
    ">
      <div className="
        bg-white dark:bg-slate-900
        p-6 rounded-3xl
        border border-slate-200 dark:border-slate-800
        shadow-sm
        flex flex-col
      ">
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${iconBg}`}>
          <span className={`text-xl ${iconColor}`}>★</span>
        </div>

        <h3 className="text-xl font-bold mb-2">{title}</h3>

        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
          {description}
        </p>

        <div className="mt-6">
          {children}
        </div>
      </div>
    </div>
  );
}

export default FeatureCard;
