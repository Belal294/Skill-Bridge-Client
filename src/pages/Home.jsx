
import Features from '../components/Features';
import Services from '../Serice-Product/Product';
import DiscountSection from '../Discount/DiscountSection';
import Category from '../components/categories/Category';
import SectionOne from '../components/Carousel/SectionOne';
import SectionTwo from '../components/Carousel/SectionTwo';
import ContactForm from '../layouts/ContactForm';
import HeroCarousel from '../components/Carousel/HeroCarousel';

const Home = () => {
  return (
    <div>
      <HeroCarousel />
      <Features />
      <SectionOne />
      <Category />
      <Services />
      <SectionTwo />
      <DiscountSection />
      <ContactForm />
    </div>
  );
};

export default Home;
