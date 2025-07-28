import React, { useEffect, useRef, useState } from "react";

const UseRefDemo = () => {
  const [y, setY] = useState(0);

  let x = 0;

  const z = useRef(0);

  /**
   *  It's not like => z = 0
   *  z = { current: 0 }
   */

  console.log("Rendering...");

  const i = useRef(null);

  useEffect(() => {
    i.current = setInterval(() => {
      // console.log("Hello There!", Math.random());
    }, 1000);

    return () => clearInterval(i.current);
  }, []);

  return (
    <div className="w-full h-172 m-6 p-2 border border-gray-900 rounded-xl">
      <div className="flex m-2 p-2 justify-between">
        <h1 className="text-lg font-semibold">useRef Demo</h1>
        <button
          className="bg-red-900 rounded-2xl px-4 py-1 text-lg text-white cursor-pointer hover:bg-gray-400"
          onClick={() => clearInterval(i.current)}
        >
          Stop Printing
        </button>
      </div>
      <div className="flex flex-col justify-center items-center h-[calc(100vh-300px)]">
        <div className="flex items-center">
          <span className="text-lg text-right">
            Let<span className="invisible">""</span>
          </span>
          <button
            className="border bg-black text-white rounded-lg px-4 py-0.5 m-2 cursor-pointer hover:bg-gray-400"
            onClick={() => {
              x = x + 1;
              console.log("x = " + x);
            }}
          >
            Increase x
          </button>
          <span className="text-lg">= {x}</span>
        </div>
        <div className="flex items-center">
          <span className="text-lg">State</span>
          <button
            className="border bg-black text-white rounded-lg px-4 py-0.5 m-2 cursor-pointer hover:bg-gray-400"
            onClick={() => setY(y + 1)}
          >
            Increase y
          </button>
          <span className="text-lg">= {y}</span>
        </div>
        <div className="flex items-center">
          <span className="text-lg">
            Ref<span className="invisible">""</span>
          </span>
          <button
            className="border bg-black text-white rounded-lg px-4 py-0.5 m-2 cursor-pointer hover:bg-gray-400"
            onClick={() => {
              z.current = z.current + 1;
              console.log("z = " + z.current);
            }}
          >
            Increase z
          </button>
          <span className="text-lg">= {z.current}</span>
        </div>
      </div>
    </div>
  );
};

export default UseRefDemo;
