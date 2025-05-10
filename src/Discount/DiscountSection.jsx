import { FaShippingFast, FaGift, FaPercent } from "react-icons/fa";
import bgImg from "../assets/Discount/banner-image-bg.jpg";
import bannerImg from "../assets/Discount/banner-image3.png";
import DiscountTimer from "./DiscountTimer";

const DiscountSection = () => {
  return (
    <section
      className="w-full h-[600px] bg-cover bg-center flex justify-center items-center px-4 md:px-8"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="container w-full flex flex-col md:flex-row items-center justify-between px-4 md:px-8">
        {/* Left Image with Effect */}
        <div className="max-w-md md:w-1/2 flex justify-center">
          <img
            className="w-2/3 md:w-full transition-transform duration-500 hover:scale-105 drop-shadow-xl"
            src={bannerImg}
            alt="Discount"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            30% Discount On All Items! Hurry Up!!!
          </h1>

          {/* Discount Features with Icons */}
          <div className="flex justify-center md:justify-start gap-4 mt-2 text-pink-600 text-lg font-medium">
            <div className="flex items-center gap-2">
              <FaGift /> Free Gift
            </div>
            <div className="flex items-center gap-2">
              <FaShippingFast /> Fast Shipping
            </div>
            <div className="flex items-center gap-2">
              <FaPercent /> Extra 5% Off
            </div>
          </div>

          {/* Countdown Timer */}
          <DiscountTimer />

          {/* CTA Button */}
          <button className="btn btn-secondary px-6 py-3 rounded-full shadow-md hover:scale-105 transition">
            Shop Collection
          </button>
        </div>
      </div>
    </section>
  );
};

export default DiscountSection;
