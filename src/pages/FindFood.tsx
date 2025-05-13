
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from "../components/ui/button";
import { Link } from 'react-router-dom';

// Import placeholder image
import projectImage from '/lovable-uploads/ec0d9b50-4293-44a1-ba1c-37273bd2d428.png';

const FindFood = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Add scroll animations
    const fadeElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
    });
    
    fadeElements.forEach((el) => {
      observer.observe(el);
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main>
        {/* Project Hero Section */}
        <section className="pt-32 pb-16 bg-neutral-100">
          <div className="container mx-auto px-4 md:px-8">
            <div className="mb-8">
              <span className="text-primary-500 font-medium">CASE STUDY</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Empowering Digital Access to Food Resources
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div>
                <h4 className="text-sm text-neutral-700 mb-1">Project Team</h4>
                <p className="font-medium">Design Thinking Consultant</p>
              </div>
              <div>
                <h4 className="text-sm text-neutral-700 mb-1">Client</h4>
                <p className="font-medium">Pittsburgh Community Food Bank</p>
              </div>
              <div>
                <h4 className="text-sm text-neutral-700 mb-1">Timeline</h4>
                <p className="font-medium">February 2020 - May 2020</p>
              </div>
            </div>
            <div className="mt-12">
              <img 
                src={projectImage} 
                alt="Find Food Platform" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </section>

        {/* Challenge Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="mb-12 animate-on-scroll">
                <div className="text-primary-500 font-medium mb-2 uppercase tracking-wide text-sm">
                  The Challenge
                </div>
                <h2 className="text-3xl font-bold mb-4">How might we help more people find the food resources they need—quickly, easily, and with dignity?</h2>
              </div>
              
              <div className="mt-10 animate-on-scroll">
                <p className="text-neutral-700 mb-6">
                  During the COVID-19 pandemic, food insecurity rose dramatically across America. The Pittsburgh Community Food Bank saw 543% increase in calls from individuals seeking assistance. They needed a better way to connect people to food resources, but were limited by outdated systems and processes.
                </p>
                <p className="text-neutral-700">
                  The existing solution was a simple PDF map that was difficult to navigate, often outdated, and lacked important information about eligibility and services. This created barriers for those seeking help.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-16 bg-neutral-50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-12 animate-on-scroll">
              <div className="text-primary-500 font-medium mb-2 uppercase tracking-wide text-sm">
                The Solution
              </div>
              <h2 className="text-3xl font-bold mb-4">A Responsive, Filterable, Personalized Food Finder</h2>
              <p className="max-w-2xl mx-auto">
                We designed and built an intuitive platform that connects users with food resources based on their specific location, needs, eligibility, and preferences.
              </p>
            </div>
            
            <div className="mt-16 flex justify-center animate-on-scroll">
              <img 
                src={projectImage} 
                alt="Food Finder Interface" 
                className="rounded-lg shadow-lg max-w-full"
              />
            </div>
            
            <div className="max-w-3xl mx-auto mt-16 text-center animate-on-scroll">
              <p className="text-neutral-700">
                The Find Food Finder allows users to easily navigate to local food resources by combining interactive maps, customizable filters, and a user-centered design focused on dignity and accessibility.
              </p>
              
              <Button asChild className="mt-8">
                <a href="#" className="bg-primary-500 hover:bg-primary-600 text-white flex items-center gap-2 w-fit mx-auto">
                  Access Pittsburgh Food Finder
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 10H15M15 10L10 5M15 10L10 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Next Project */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <h2 className="text-2xl font-bold mb-8">Next Project</h2>
            <Button asChild>
              <Link to="/projects/united-rentals" className="bg-primary-500 hover:bg-primary-600 text-white flex items-center gap-2 w-fit mx-auto">
                View United Rentals Project
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 10H15M15 10L10 5M15 10L10 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default FindFood;
