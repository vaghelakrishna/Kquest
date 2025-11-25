import React from "react";

export default function HeroSec() {
  return (
    <main className="w-full bg-white text-black">
      {/* subtle grid */}
      <div className="relative bg-white 
        bg-[radial-gradient(circle,#0000000a_1px,transparent_1px)]
        bg-size-[20px_20px]
      ">

        <section className="container mx-auto py-24 md:py-32 text-center space-y-8">

          {/* Floating Icons */}
          <img
            src="./src/assets/day-9.png"
            className="absolute left-10 top-20 w-12 opacity-80 rotate-6"
          />
          <img
            src="./src/assets/day-9.png"
            className="absolute right-10 top-32 w-14 opacity-80 -rotate-6"
          />

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight max-w-3xl mx-auto">
            <span className="font-serif italic">I'm on a mission to complete</span>
            <br />
            🔥 <span className="font-bold">THE QUEST</span>{" "}
            <span className="font-serif italic">within</span>{" "}
            <span className="underline decoration-yellow-300">6 Months</span>
          </h1>

          {/* Sub text */}
          <p className="text-lg text-neutral-700 max-w-xl mx-auto">
            Complete 500 DSA Problems, Earn ₹300,000 & Transform My Body.
          </p>

          {/* CTA */}
          <button className="
            bg-black text-white px-6 py-3 rounded-lg 
            shadow-[0_4px_16px_rgba(0,0,0,0.25)] 
            hover:scale-[1.02] transition
          ">
            See the journey →
          </button>

          {/* Timer */}
          <div className="mt-6">
            <p className="border px-4 py-3 rounded-xl text-lg inline-block">
              0 days, 0 hours, 0 minutes, 0 seconds, 0 ms
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
