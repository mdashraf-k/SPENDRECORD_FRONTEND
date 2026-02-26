export default function PageLayout({ title, children }) {
  return (
    <div className="min-h-screen bg-[#0B1C2D] text-white px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 tracking-wide">
          {title}
        </h1>

        <div className="text-slate-300 space-y-6 leading-relaxed text-sm md:text-base">
          {children}
        </div>
      </div>
    </div>
  );
}
