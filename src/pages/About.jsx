import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white text-black font-poppins min-h-screen">
      <Navbar />
    <section className="min-h-screen bg-white text-black px-6 md:px-20 py-16 flex flex-col md:flex-row items-center justify-between gap-12 mt-20">
      <div className="flex-1">
        <img
          src="/media/samu.jpg"
          alt="Sam Azuri"
          className="rounded-lg shadow-lg w-full md:w-[400px] object-cover"
        />
      </div>

      <div className="flex-1">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black font-script">
          Meet The Founder of Sam Azuri
        </h2>
        <p className="text-lg mb-4">
          I'm Samu Mncube, a passionate makeup artist and beauty educator based in South Africa. For over 10 years, I've been helping women feel confident, empowered, and radiant through the power of makeup.
        </p>
        <p className="text-lg mb-4">
          From weddings and editorial shoots to private classes and one-on-one sessions, my mission is to enhance your natural beauty and help you feel your absolute best — inside and out.
        </p>
        <p className="text-lg mb-4">
          I believe makeup is more than just glam — it's art, self-expression, and transformation. Let’s create something magical together!
        </p>

        <button
          onClick={() => navigate("/")}
          className="mt-6 bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition"
        >
          Back to Home
        </button>
      </div>
    </section>
    </div>
  );
};

export default About;
