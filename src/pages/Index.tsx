
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Mission from '@/components/Mission';
import Members from '@/components/Members';
import Stories from '@/components/Stories';
import Initiatives from '@/components/Initiatives';
import Team from '@/components/Team';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Scroll animation observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);
  
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Mission />
        <Members />
        <Stories />
        <Initiatives />
        <Team />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
};

export default Index;
