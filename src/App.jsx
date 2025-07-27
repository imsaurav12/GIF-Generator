import React from 'react';
import Random from './components/Random';
import Tag from './components/Tag';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] flex flex-col items-center px-4 py-10">
      
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-10 tracking-wide">
        <span className="text-cyan-400">GIF</span> GENERATOR
      </h1>
      
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 w-full max-w-6xl">
        <Random />
        <Tag />
      </div>
    </div>
  );
};

export default App;
