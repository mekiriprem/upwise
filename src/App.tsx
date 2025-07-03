import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServicesGrid from './components/ServicesGrid';
import ClientTrust from './components/ClientTrust';
import WhyUpwise from './components/WhyUpwise';
import TrainingPackages from './components/TrainingPackages';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
// import TeamBuildingShowcase from './components/TeamBuildingShowcase';
import HeaderScrolling from './components/headerScrolling';
import AboutUs from './components/AboutUs';
import BrandIdentityCard from './components/BrandIdentityCard';

function App() {
  return (
    <div className="font-inter">
      {/* <TeamBuildingShowcase /> */}
      {/* <div style={{ height: '200px' }}>

      </div> */}
      
      <Header />
      <main>
        <HeaderScrolling />
        {/* <Hero /> */}
        <ServicesGrid />
        <ClientTrust />
        <WhyUpwise />
        <Testimonials />
        <AboutUs/>
        <TrainingPackages />

        {/* <BrandIdentityCard /> */}
        
        <CTASection />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;