import React from "react";

export default function Quest() {
  return (
    <main className="w-full bg-white text-black">
      {/* Subtle grid */}
      <div
        className="relative bg-white 
        bg-[radial-gradient(circle,#0000000a_1px,transparent_1px)]
        bg-size-[20px_20px]"
      >
        <section className="container mx-auto py-20 md:py-28 space-y-12 max-w-3xl">

          {/* Heading */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold">
              🌟 kQuest
            </h1>
            <p className="text-lg text-neutral-600">
              A mission to level up before turning 20.
            </p>
          </div>

          {/* Block */}
          <div className="bg-white border border-black/10 rounded-2xl p-6 md:p-10 shadow-sm space-y-6">
            <h2 className="text-2xl font-semibold">🔥 What is kQuest?</h2>
            <p className="text-neutral-700 leading-relaxed">
              kQuest is my personal 6-month challenge focused on building a smarter,
              stronger, and more disciplined version of myself — across DSA, income,
              and physique.
            </p>

            <p className="text-neutral-700 leading-relaxed">
              This journey is all about consistency, learning deeply, building real 
              projects, improving health, and growing financially.
            </p>
          </div>

          {/* Pillars */}
          <div className="grid gap-6">
            {/* 1 */}
            <div className="bg-white border border-black/10 rounded-2xl p-6 shadow-sm space-y-3">
              <h3 className="text-xl font-semibold">⚡ 1. DSA & JavaScript Mastery</h3>
              <p className="text-neutral-700">
                Solving 2–3 DSA problems daily + mastering JS deeply.
                <br /> <b>Goal:</b> 500+ problems & full interview-readiness.
              </p>
            </div>

            {/* 2 */}
            <div className="bg-white border border-black/10 rounded-2xl p-6 shadow-sm space-y-3">
              <h3 className="text-xl font-semibold">💰 2. Income Growth</h3>
              <p className="text-neutral-700">
                Working on freelance gigs & real client projects.
                <br /> <b>Goal:</b> Earn ₹3,00,000.
              </p>
            </div>

            {/* 3 */}
            <div className="bg-white border border-black/10 rounded-2xl p-6 shadow-sm space-y-3">
              <h3 className="text-xl font-semibold">🏋️‍♂️ 3. Physique & Fitness</h3>
              <p className="text-neutral-700">
                Building a clean, aesthetic body through consistent workouts.
                <br /> <b>Goal:</b> 5 days/week training + stamina improvement.
              </p>
            </div>
          </div>

          {/* Why section */}
          <div className="bg-white border border-black/10 rounded-2xl p-6 md:p-8 shadow-sm space-y-4">
            <h2 className="text-2xl font-semibold">🧠 Why am I doing this?</h2>
            <p className="text-neutral-700 leading-relaxed">
              Because I’m tired of playing life on easy mode.  
              It’s time to build discipline, push limits, and actually transform
              my body, mind, and career.
            </p>

            <blockquote className="border-l-4 border-yellow-400 pl-4 italic text-neutral-800">
              “I created a version of myself that I’m proud of.”
            </blockquote>
          </div>

          {/* Progress */}
          <div className="text-center space-y-4">
            <h3 className="text-xl font-semibold">📊 Track My Progress</h3>
            <p className="text-neutral-700">
              Daily updates on DSA, earnings, workouts, learnings & struggles.
            </p>

            <a
              href="/journey"
              className="inline-block mt-4 bg-black text-white px-6 py-3 rounded-lg hover:scale-105 transition shadow-[0_4px_16px_rgba(0,0,0,0.2)]"
            >
              See the progress →
            </a>
          </div>

        </section>
      </div>
    </main>
  );
}
