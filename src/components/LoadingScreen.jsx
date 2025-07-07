import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [title, setTitle] = useState("");
  const fullTitle = "Sam Azuri";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTitle(fullTitle.substring(0, index));
      index++;

      if (index > fullTitle.length) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 2000);
      }
    }, 300);

    return () => clearInterval(interval);
  }, [onComplete]);

  
  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50 text-white">

      <img
        src="/media/logo.jpg"
        alt="Sam Azuri Logo"
        className="w-24 h-24 rounded-full mb-6 animate-bounce shadow-lg"
      />

      <h1 className="text-7xl lg:text-9xl font-bold font-mono">
        {title}
        <span className="animate-blink ml-2">.</span>
      </h1>

      <p className="mt-4 text-lg md:text-xl font-light font-serif tracking-wide text-gray-300">
        Makeup. Artistry. Confidence.
      </p>
    </div>
  );
};

export default LoadingScreen;


