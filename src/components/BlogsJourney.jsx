import React from "react";

const blogs = [
  {
    day: 9,
    title: "Coming back to track",
    mood: "🔥",
    money: 0,
    dsa: 0,
    desc: "Coming back to track | The Quest | Ramxcodes | Ramkrishna Swarnkar",
    date: "February 24, 2025",
  },
  {
    day: 9,
    title: "Coming back to track",
    mood: "🔥",
    money: 0,
    dsa: 0,
    desc: "Coming back to track | The Quest | Ramxcodes | Ramkrishna Swarnkar",
    date: "February 24, 2025",
  },
  {
    day: 9,
    title: "Still a Long Way to Go",
    mood: "😭",
    money: 0,
    dsa: 0,
    desc: "Still a Long Way to Go. | The Quest | Ramxcodes | Ramkrishna Swarnkar",
    date: "February 23, 2025",
  },
  {
    day: 9,
    title: "let's see how far i can go",
    mood: "🔥",
    money: 0,
    dsa: 0,
    desc: "Game mode on - Be stronger than your excuses.",
    date: "February 22, 2025",
  },
  {
    day: 9,
    title: "BREAK",
    mood: "😭",
    money: 0,
    dsa: 0,
    desc: "ON A BREAK",
    date: "February 21, 2025",
  },
  {
    day: 9,
    title: "Grow and Glow",
    mood: "🔥",
    money: 0,
    dsa: 0,
    desc: "Game mode on - Be stronger than your excuses.",
    date: "February 20, 2025",
  },
  {
    day: 9,
    title: "Time to get back on track",
    mood: "😭",
    money: 0,
    dsa: 0,
    desc: "Game mode on - Be stronger than your excuses.",
    date: "February 19, 2025",
  },
  {
    day: 9,
    title: "I've Gotta Get Stronger",
    mood: "🔥",
    money: 0,
    dsa: 0,
    desc: "Game mode on - Be stronger than your excuses.",
    date: "February 18, 2025",
  },
  {
    day: 9,
    title: "It's Like a Game",
    mood: "🔥",
    money: 0,
    dsa: 0,
    desc: "Game mode on - Be stronger than your excuses.",
    date: "February 17, 2025",
  },
  {
    day: 9,
    title: "Starting Strong",
    mood: "😭",
    money: 0,
    dsa: 0,
    desc: "First day of the challenge",
    date: "February 16, 2025",
  },
];

export default function BlogsJourney() {
  return (
    <main
      className="w-full min-h-screen bg-white text-black
      bg-[radial-gradient(circle,#00000008_1px,transparent_1px)]
      [background-size:20px_20px]"
    >
      <div className="container mx-auto max-w-5xl py-16">

        {/* Heading */}
        <header className="text-center space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Blogs & Journey
          </h1>
          <p className="text-lg text-neutral-600">
            New day, new challenges — and another chapter in The Quest.
          </p>
        </header>

        {/* Streak */}
        <div className="flex justify-center mt-6">
          <span className="rounded-full bg-yellow-300 px-4 py-1 text-xs font-semibold text-black shadow">
            Longest Streak: 0 Days
          </span>
        </div>

        {/* Grid */}
        <div className="grid gap-10 sm:grid-cols-2 mt-12">
          {blogs.map((b, i) => (
            <article
              key={i}
              className="group bg-white rounded-xl p-4 shadow-sm
              hover:shadow-xl transition-all border border-neutral-200
              hover:-translate-y-1"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-lg">
                <img
                  src={`./src/assets/day-${b.day}.png`}
                  className="rounded-lg w-full object-cover group-hover:scale-105 transition"
                />
              </div>

              {/* Tags */}
              <div className="flex gap-2 mt-3">
                <span className="border rounded-md px-2 py-1 text-xs">
                  🤔 {b.dsa}
                </span>
                <span className="border rounded-md px-2 py-1 text-xs">
                  💸 {b.money}
                </span>
                <span className="border rounded-md px-2 py-1 text-xs">
                  💪🏻 {b.mood}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-xl font-bold mt-2">
                Day {b.day} — {b.title}
              </h2>

              {/* Desc */}
              <p className="text-neutral-600 text-sm">{b.desc}</p>
              <p className="text-neutral-500 text-xs">{b.date}</p>

              <a className="absolute inset-0" href={`/blog/day-${b.day}`}>
                <span className="sr-only">View</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
