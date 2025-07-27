import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FiDownload } from 'react-icons/fi';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {
  const [gif, setGif] = useState('');

  async function fetchData() {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const { data } = await axios.get(url);
    const imageSource = data.data.images.downsized_large.url;
    setGif(imageSource);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-full max-w-[500px] min-h-[500px] bg-[#1e1e2f] rounded-2xl p-4 border border-[#2e2e3e] shadow-xl flex flex-col items-center gap-4 text-gray-100 transition-all duration-300">
      <h1 className="text-3xl font-bold underline text-indigo-300 tracking-wide">
        A Random GIF
      </h1>

      <img
        src={gif}
        alt="Random GIF"
        className="w-full h-[300px] object-cover rounded-md"
      />

      <div className="h-[40px]"></div>

      <div className="flex gap-4 mt-auto">
        <button
          onClick={fetchData}
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-6 rounded-xl transition-all duration-200"
        >
          Generate GIF
        </button>

        {gif && (
          <a
            href={gif}
            download="random.gif"
            className="bg-emerald-500 hover:bg-emerald-600 p-2 rounded-xl transition-all duration-200 flex items-center justify-center"
            target="_blank"
            rel="noopener noreferrer"
            title="Download GIF"
          >
            <FiDownload size={22} />
          </a>
        )}
      </div>
    </div>
  );
};

export default Random;
