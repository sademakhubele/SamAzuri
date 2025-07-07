import { Navbar } from "../components/Navbar";


const Gallery = () => {
    const images =[
        "media/image7.jpg",
        "media/image1.jpg",
        "media/image3.jpg",
        "media/image5.jpg",
        "media/image6.jpg",
        "media/image8.jpg",
        "media/image9.jpg",
        "media/image11.jpg",
        "media/image10.jpg"
    ];

    return (
        <div>
             <Navbar />

      <section className="mt-20 px-6 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Beautiful Clients</h2>
        <p className="max-w-xl mx-auto text-lg mb-12">
          A collection of our work from weddings to photoshoots. Real beauty, real results.
        </p>

         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`${index + 1}`}
              className="w-full h-auto rounded-lg border border-solid-black shadow-lg object-cover transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
            />
          ))}
        </div>
      </section>
        </div>
    )
}

export default Gallery;