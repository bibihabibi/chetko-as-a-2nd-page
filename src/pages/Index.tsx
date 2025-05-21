
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

    // Smooth scrolling for all anchor links
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && link.hash && link.hash.startsWith('#') && link.href.includes(window.location.pathname)) {
        e.preventDefault();
        const targetId = link.hash.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
          history.pushState(null, '', link.hash);
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);

    return () => {
      document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.unobserve(el);
      });
      document.removeEventListener('click', handleSmoothScroll);
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
