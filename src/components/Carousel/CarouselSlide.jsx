import bgImg from "../../assets/Discount/banner-image-bg.jpg";

const CarouselSlide = ({ title, subtitle, image }) => {
  return (
    <section
      className="w-full h-[400px] md:h-[500px] lg:h-[600px] bg-cover bg-center flex justify-center items-center px-4 md:px-8"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-8 px-4 md:px-8">
        {/* Left Content */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-5">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 drop-shadow-md">
            {title}
          </h1>
          <p className="text-gray-700 text-lg">{subtitle}</p>
          <button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-secondary px-6 py-3 rounded-full shadow-lg transition-transform duration-200"
          >
            Shop Product
          </button>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="overflow-hidden rounded-2xl shadow-xl group">
            <img
              src={image}
              alt={title}
              className="max-w-full md:max-w-md transition-transform duration-700 ease-in-out group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarouselSlide;
