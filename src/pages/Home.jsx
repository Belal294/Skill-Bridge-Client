
import Features from '../components/Features';
import Services from '../Serice-Product/Product';
import DiscountSection from '../Discount/DiscountSection';
import Category from '../components/categories/Category';
import SectionOne from '../components/Carousel/SectionOne';
import SectionTwo from '../components/Carousel/SectionTwo';
import ContactForm from '../layouts/ContactForm';
import HeroCarousel from '../components/Carousel/HeroCarousel';
import Footer from '../components/CarouselSection/Footer';
import HeroSection from '../components/CarouselSection/HeroSection'
import ClientsSection from '../components/CarouselSection/ClientsSection';
import FeaturesSection from '../components/CarouselSection/FeaturesSection';
import CategorySection from '../components/CarouselSection/CategorySection';
import AccountProfileSection from '../components/CarouselSection/AccountProfileSection';
import TestimonialsSection from '../components/CarouselSection/TestimonialsSection';

const Home = () => {
  return (
    <div>
      <HeroSection/>
      {/* <HeroCarousel /> */}
      
      {/* <Features /> */}
      <ClientsSection/>
      {/* <SectionOne /> */}
      <FeaturesSection/>
      {/* <Category /> */}
      <CategorySection/>
      {/* <Services /> */}
      <AccountProfileSection/>
      <TestimonialsSection/>
      <SectionTwo />
      {/* <DiscountSection /> */}
      {/* <ContactForm /> */}
      {/* <Footer/> */}
      <Footer/>
    </div>
  );
};

export default Home;
