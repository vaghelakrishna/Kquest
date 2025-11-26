import ProgressCard from "./progressCard";
import { useEffect, useState } from "react";

export default function HomeSection() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const start = new Date("2025-02-16");

    setInterval(() => {
      const now = new Date();
      const diff = now - start;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      const ms = diff % 1000;

      setTime(`${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds, ${ms} ms`);
    }, 50);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center gap-10 pt-16 text-white bg-white">

      {/* Timer */}
      <p className="border border-purple-700/20 px-6 py-3 rounded-lg bg-black text-lg text-purple-300">
        {time}
      </p>

      {/* Cards */}
      <div className="sm:flex-col items-center flex gap-6  justify-center md:flex-row max-w-5xl w-full">
        <ProgressCard title="DSA in JS" current={0} total={500} />
        <ProgressCard title="Money" current={0} total={300000} />
        <ProgressCard title="Physique" current={5} total={177} />
      </div>

      {/* Button */}
      <button className="mt-4 px-8 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 transition">
        See the journey
      </button>
    </div>
  );
}
