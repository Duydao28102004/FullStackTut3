import React, { useState } from 'react';

const Home = () => {
  const [input, setInput] = useState('');
  
  const handleClick = (value) => {
    setInput(input + value);
  };

  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput('Error');
    }
  };

  const clearInput = () => {
    setInput('');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <div className="text-right mb-4 text-2xl">
          {input || "0"}
        </div>
        <div className="grid grid-cols-4 gap-4">
          <button onClick={() => handleClick('7')} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded;">7</button>
          <button onClick={() => handleClick('8')} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded;">8</button>
          <button onClick={() => handleClick('9')} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded;">9</button>
          <button onClick={() => handleClick('/')} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded;">/</button>

          <button onClick={() => handleClick('4')} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded;">4</button>
          <button onClick={() => handleClick('5')} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded;">5</button>
          <button onClick={() => handleClick('6')} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded;">6</button>
          <button onClick={() => handleClick('*')} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded;">*</button>

          <button onClick={() => handleClick('1')} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded;">1</button>
          <button onClick={() => handleClick('2')} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded;tn">2</button>
          <button onClick={() => handleClick('3')} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded;">3</button>
          <button onClick={() => handleClick('-')} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded;">-</button>

          <button onClick={() => handleClick('0')} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded;">0</button>
          <button onClick={clearInput} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded;">C</button>
          <button onClick={calculate} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded;">=</button>
          <button onClick={() => handleClick('+')} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded;">+</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
