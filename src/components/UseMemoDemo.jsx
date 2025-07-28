import { useMemo, useState } from "react";
import { findPrime } from "../utils/helper";

const UseMemoDemo = () => {
  const [text, setText] = useState(0);

  const [isDarkTheme, setIsDarkThem] = useState(true);

  // heavy operation

  // const prime = findPrime(text);
  const prime = useMemo(() => findPrime(text), [text]);

  return (
    <div
      className={
        "w-full h-172 m-6 p-2 border border-gray-900 rounded-xl " +
        (isDarkTheme && "bg-gray-900 text-white")
      }
    >
      <div className="flex m-2 p-2 justify-between">
        <h1 className="text-lg font-semibold">useMemo Demo</h1>
        <button
          className={
            "bg-black text-white rounded-2xl px-4 py-1 text-lg cursor-pointer hover:bg-gray-400 " +
            (isDarkTheme && "bg-slate-500")
          }
          onClick={() => setIsDarkThem(!isDarkTheme)}
        >
          {isDarkTheme ? "Light" : "Dark"}
        </button>
      </div>
      <div className="flex flex-col justify-center items-center h-[calc(100vh-300px)]">
        <input
          className="border border-gray-500 rounded-lg w-64 h-10 px-2"
          type="number"
          placeholder="Write number here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="py-4 text-lg">nth Prime: {prime}</div>
      </div>
    </div>
  );
};

export default UseMemoDemo;
