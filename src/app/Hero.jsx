import React from "react";
import Bee from "./Bee";

const Hero = () => {
  return (
    <div className="h-screen relative overflow-hidden w-screen text-black px-16 py-5 bg-gray-300">
      {/* Base layer */}
      <div className="absolute inset-0 px-16 py-5 z-10">
        <nav className="w-full h-[5vh] px-2 flex justify-between items-center font-bold">
          <h3>Bee</h3>
          <ul className="flex gap-16">
            <li>Honey</li>
            <li>About</li>
            <li>Click</li>
          </ul>
        </nav>
        <header className="relative top-[15%]">
          <h1 className="text-9xl tracking-[24px] text-pink-500 font-black">
            Blossoms Honey
          </h1>
        </header>
      </div>

      {/* Middle layer */}
      <div className="absolute inset-0 z-20 flex justify-center items-center">
        <Bee />
      </div>

      {/* Top layer */}
      <div className="absolute top-[15%] inset-0 z-30 px-16 py-5 pointer-events-none">
        <div className="h-screen flex items-center">
          <aside className="w-[25%] pointer-events-auto">
            <p className="text-justify mb-5">
              Honey is a natural sweetener made by bees from the nectar of
              flowers. It never spoils, has been found in ancient Egyptian tombs
              still edible, and has antibacterial properties. Rich in
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
        </div>
      </div>
    </div>
  );
};

export default Hero;
