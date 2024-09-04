import React from "react";

const Hero = () => {
  return (
    <>
      <div className="h-screen w-screen text-black  px-14 py-5 bg-gray-300">
        <nav className="w-full h-[10vh] border-2 border-black flex justify-between items-center font-bold">
          <h3>Bee</h3>
          <ul className="flex gap-16">
            <li>Honey</li>
            <li>About</li>
            <li>Click</li>
          </ul>
        </nav>
        <div className="h-[85vh] border-2 border-black flex justify-center items-center flex-col gap-24">
          <header>
            <h1 className="text-8xl text-pink-500 font-black">
              Blossoms Honey
            </h1>
          </header>
          <main className="h-full w-screen flex">
            <aside>
              <p>
                Honey is a natural sweetener made by bees from the nectar of
                flowers. It never spoils, has been found in ancient Egyptian
                tombs still edible, and has antibacterial properties. Rich in
                antioxidants, honey can soothe sore throats and boost the immune
                system. It's also a natural energy source, providing quick fuel
                during workouts or busy days.
              </p>
              <div className="flex gap-5">
                <button className="bg-pink-500 text-white font-bold rounded-xl px-6 py-3">
                  Buy it now
                </button>
                <button className="bg-pink-200 text-pink-500 font-bold rounded-xl px-6 py-3">
                  Buy it now
                </button>
              </div>
            </aside>
            <aside>
              <script
                type="module"
                src="https://unpkg.com/@splinetool/viewer@1.9.23/build/spline-viewer.js"
              ></script>
              <spline-viewer url="https://prod.spline.design/fmFq2aCyDXWvEGFR/scene.splinecode"></spline-viewer>
            </aside>
          </main>
        </div>
      </div>
    </>
  );
};

export default Hero;
