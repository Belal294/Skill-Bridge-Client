// src/pages/Home.jsx
import Features from '../components/Features';
import HeroCarousel from '../components/carousel/HeroCarousel';
import Services from '../../src/Serice-Product/Product';
import DiscountSection from '../Discount/DiscountSection';
import Category from '../components/categories/Category';
import SectionOne from '../components/Carousel/SectionOne'
import SectionTwo from '../components/Carousel/SectionTwo';
import ContactForm from '../layouts/ContactForm';

const Home = () => {
  return (
    <div>
      <HeroCarousel/>
      <Features/>
      <SectionOne/>
      <Category/>
      <Services/>
      <SectionTwo/>
      <DiscountSection/>
      <ContactForm/>
        
    </div>
  );
};

export default Home;
