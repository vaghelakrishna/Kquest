function ProgressCard({ title, current, total }) {
  const percent = (current / total) * 100;

  return (
    <div className="bg-black border border-purple-700/20 rounded-xl p-6 w-full max-w-sm">
      <h2 className="text-2xl font-semibold text-purple-300 mb-2">{title}</h2>

      <p className="text-gray-400">
        Progress &nbsp;
        <span className="text-white">{current}</span> / {total}
      </p>

      <div className="w-full h-2 bg-gray-700 rounded-full mt-3">
        <div
          className="h-full bg-purple-400 rounded-full transition-all"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressCard;
