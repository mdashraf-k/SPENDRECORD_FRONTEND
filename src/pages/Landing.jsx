// import FeaturesCarousel from "../components/FeaturesCarousel";
import { Link } from "react-router";
import Footer from "../components/Footer";
import Button from "../ui/Button";
import { FaDownload } from "react-icons/fa";
import { GrSchedule } from "react-icons/gr";
import { MdGroups } from "react-icons/md";
import { MdOutlineDescription } from "react-icons/md";

function Landing() {
  return (
    <>
      <main>
        <section class="relative overflow-hidden pt-12 pb-20 px-4">
          <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="flex flex-col gap-8">
              <div class="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1 w-fit">
                <span class="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                <span class="text-xs font-bold uppercase tracking-wider text-primary">
                  New: Automated Recurring Bills
                </span>
              </div>
              <div class="flex flex-col gap-4">
                <h1 class="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight text-slate-900 dark:text-white">
                  Split Expenses,
                  <span class="text-primary">Not Friendships</span>
                </h1>
                <p class="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
                  The premium way for modern roommates to track shared costs,
                  settle debts, and keep the harmony in the house.
                </p>
              </div>
              <div class="flex flex-col sm:flex-row gap-4">
                <button class="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-xl shadow-primary/25">
                  <FaDownload/>
                  Download Now
                </button>
                <button class="flex items-center justify-center gap-2 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-900 dark:text-white px-8 py-4 rounded-xl text-lg font-bold transition-all">
                  See how it works
                </button>
              </div>
              <div class="flex items-center gap-4 pt-4">
                <div class="flex -space-x-3">
                  <div class="h-10 w-10 rounded-full border-2 border-background-dark bg-slate-300 dark:bg-slate-700 overflow-hidden">
                    <img
                      alt="User"
                      data-alt="Close up portrait of a smiling woman"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8QfAKenPxaZHFE7-rgx597K2pjVPoovf2B5mFWqAMbs1npqIbI9saYA7R-LRfpk8TZ1vSkEqWFCq-HmrHtns71RAvSeEKzLpyoT4GCKT6OzrEQ1o0jSjzHadEtPkZUJkLzx3sOTPNHT_Z3wqKsfnl1sZt808rxsnMR2lJ1_su89e6sYEW5DF86IWZxX9iS-w8kHB4l3O4BRvLrV5JXQPmF4PAVtOcAEPTARdn3fBZdtickJUwvBsHLOIZ4wZJ4n5jdKzG24Ae63CN"
                    />
                  </div>
                  <div class="h-10 w-10 rounded-full border-2 border-background-dark bg-slate-300 dark:bg-slate-700 overflow-hidden">
                    <img
                      alt="User"
                      data-alt="Close up portrait of a smiling man"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJefQtmBBkqQ0ZXKqya45wQCPM4TPYqo7zUxhf6GPq7NItmJBA4IJNTuK_N0OgaSOZt5nft9TJ3iSAM0OeK7YLFWsAiAIhlQR4KeSTkrTYYbYS9cZps2iYHDvUPng0Xy7GXqqONB2izBDXoOghFJFJWHn75Dm_z_quguiAasoy1sQUDQCxbad8Crn5YnIikTnJ8w78Gr5OZ66XcOfNkxffC45F9gxVHp6RNGKZxnjp2CmbRgysysw6fCgvcnd42-cdtQaVa49NFStf"
                    />
                  </div>
                  <div class="h-10 w-10 rounded-full border-2 border-background-dark bg-slate-300 dark:bg-slate-700 overflow-hidden">
                    <img
                      alt="User"
                      data-alt="Close up portrait of a woman with curly hair"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEC3M7uKXtA9fHC99AHmO3b88wx3MlrT0GELWBri-ebQzTtCUXT4rU2XznmJqySk31qnkQH_gNlXSIJcmOJWBYkXgr1r4qAMmnfMHOuAbwtGovOWhhyOo8rJyxlWmJphpfHgmkG3cPLigAXDJkScSRxHIZq6vrJ32isjsp_aX-9WwaYzbCRll5feJ1FrF_N619lw3N0qLPwZ6OZcbfahNLzeRAMmuYYHasaiu5uFi4BHVBJw2zef0A0Ku3h8F5X4pzUZJ7KJziPVN0"
                    />
                  </div>
                </div>
                <p class="text-sm text-slate-500 dark:text-slate-400 font-medium">
                  Joined by 
                  <span class="text-slate-900 dark:text-white font-bold">
                    12k+ roommates
                  </span>
                  this month
                </p>
              </div>
            </div>
            
          </div>
        </section>

        <section class="py-24 px-4 bg-slate-100 dark:bg-slate-900/40">
          <div class="max-w-7xl mx-auto">
            <div class="text-center mb-16 space-y-4">
              <h2 class="text-primary font-bold tracking-widest text-sm uppercase">
                Powerful Features
              </h2>
              <h3 class="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
                Designed for Household Harmony
              </h3>
              <p class="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
                Say goodbye to awkward conversations about money and hello to
                seamless expense management.
              </p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div class="group p-8 rounded-3xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/5">
                <div class="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  
                    <GrSchedule size={26}/>
                  
                </div>
                <h4 class="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  Real-time Tracking
                </h4>
                <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
                  See every expense as it happens. Instant sync across all
                  devices means everyone is always on the same page.
                </p>
              </div>

              <div class="group p-8 rounded-3xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/5">
                <div class="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <MdGroups size={26}/>
                </div>
                <h4 class="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  Group Management
                </h4>
                <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Easily organize multiple roommate groups, shared living
                  spaces, or even split vacation costs with friends.
                </p>
              </div>

              <div class="group p-8 rounded-3xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/5">
                <div class="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <MdOutlineDescription size={26} />
                </div>
                <h4 class="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  Settlement Reports
                </h4>
                <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Generate professional monthly reports and settle debts fairly
                  with one click via integrated payment providers.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section class="py-24 px-4 overflow-hidden relative">
          <div class="max-w-7xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 flex flex-col items-center text-center relative overflow-hidden">
            <div class="absolute inset-0 bg-primary/40 mix-blend-overlay opacity-30"></div>
            <div class="relative z-10 space-y-8 max-w-3xl">
              <h2 class="text-4xl md:text-6xl font-black text-white leading-tight">
                Ready to start tracking?
              </h2>
              <p class="text-white/80 text-lg md:text-xl font-medium">
                Join thousands of roommates using SpendRecord to manage their
                homes better and stay friends for longer.
              </p>
              <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/login">
                  <Button type="landingButton">Get Started for Free</Button>
                </Link>
                <Link to="/contact_us">
                  <Button type="startToTalk">Speak to Support</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Landing;
