import React, { useState } from "react";

const Bgchanger = () => {
  const [color, setColor] = useState("black");

  function handleColorChange(newCol) {
    setColor(newCol);
  }

  return (
    <div className={`w-full h-screen duration-200 bg-${color}`}>
      {color}
      <div className="flex flex-wrap fixed justify-center inset-x-0 bottom-12 px-2">
        <div className="flex flex-wrap px-3 py-2 bg-white shadow-lg gap-3 rounded-2xl justify-center">
          <button onClick={() => handleColorChange("red")} className="outline-none px-4 py-1 rounded-full bg-red-500 font-bold">
            Red
          </button>
          <button onClick={() => handleColorChange("green")} className='outline-none px-4 py-1 rounded-full bg-green-500 font-bold'>Green</button>
          <button onClick={() => handleColorChange("blue")} className='outline-none px-4 py-1 rounded-full bg-blue-500 font-bold'>Blue</button>
          <button onClick={() => handleColorChange("black")} className='outline-none px-4 py-1 rounded-full bg-black text-white  font-bold'>Black</button>
          <button onClick={() => handleColorChange("gray")} className='outline-none px-4 py-1 rounded-full bg-gray-500 font-bold'>Gray</button>
          <button onClick={() => handleColorChange("white")} className='outline-none px-4 py-1 rounded-full bg-white font-bold text-black'>White</button>
        </div>
      </div>
    </div>
  );
};

export default Bgchanger;
