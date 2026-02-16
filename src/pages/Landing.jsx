
import FeaturesCarousel from "../components/FeaturesCarousel";
import Footer from "../components/Footer";

function Landing() {
  return (
    <div className="mx-auto flex flex-col">
      
      <main className="flex-1 px-6 pt-10 pb-6">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">
            Life sharing,<br />
            <span className="text-indigo-600 dark:text-indigo-400">
              costs splitting.
            </span>
          </h2>

          <p className="text-slate-500 dark:text-slate-400">
            Everything you need to manage shared expenses.
          </p>
        </div>

        <FeaturesCarousel />
      </main>

      <Footer />

    </div>
  );
}


export default Landing;
