import { HeroTextChange } from "./../components/HeroTextChange";
import { Footer } from "./../components/footer";

import DisplayUrl from "@/components/displayURL";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <main className=" h-screen">
        <div className="z-20">
          <Navbar />
        </div>
        <section name="hero-cta" className="h-[87vh] overflow-hidden">
          <div className="absolute h-[87vh] w-full bg-black -z-10 blur-s overflow-hidden">
            <div className="h-full w-full bg-gradient-to-tr from-cyan-300 via-cyan-200 to-sky-500 scale-[1.25]"></div>
          </div>
          <div className="flex flex-col-reverse md:flex-row justify-center gap-2 h-full z-30 pt-[4rem] bg-black/20">
            <div
              name="shortener"
              className="h-[100%] md:w-1/2 w-full flex justify-center items-center"
            >
              <div className="w-full flex items-left flex-col justify-center text-payne-gray font-medium relative 20 px-12 -mt-[6rem]">
                <HeroTextChange />
                <DisplayUrl />
              </div>
            </div>
            <div className="px-10 md:w-1/2 w-full md:h-[100%] flex justify-start flex-col mt-[10%] text-gray-100">
              <h1 className=" text-3xl font-medium leading-[2em]">
                <span className="drop-shadow-md">Welcome to </span>
                <br />
                <span className="text-[2.5em] sm:text-[3em] font-semibold text-cyan-100 drop-shadow-md">
                  URL Shortener.
                </span>
              </h1>
              <div className="text-[2.25vh] font-medium drop-shadow-md">
                Streamline your digital presence in just a click.
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
