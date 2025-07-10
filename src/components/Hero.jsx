import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate(); 

  return (
    <section className="py-20 mt-20 bg-white flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-5xl md:text-7xl font-script text-black-600 mb-4">Sum Azuri</h1>
      <p className="text-lg md:text-2xl text-black max-w-md mb-8">
        Redefining beauty one face at a time with Samu M.
      </p>
      <button
        className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition"
        onClick={() => navigate("/about")}
      >
        About Sum Azuri
      </button>
    </section>
  );
};

export default Hero;



