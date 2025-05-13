
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from "../components/ui/button";
import { Link } from 'react-router-dom';

// Import placeholder image
import projectImage from '/lovable-uploads/df9b97a3-b6c1-4b95-ac46-c0ca28c58a0e.png';

const UnitedRentals = () => {
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
              Rebuilding a legacy fleet management platform for speed, clarity, and scale
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div>
                <h4 className="text-sm text-neutral-700 mb-1">Project Team</h4>
                <p className="font-medium">Lead Product Strategist</p>
              </div>
              <div>
                <h4 className="text-sm text-neutral-700 mb-1">Client</h4>
                <p className="font-medium">United Rentals</p>
              </div>
              <div>
                <h4 className="text-sm text-neutral-700 mb-1">Timeline</h4>
                <p className="font-medium">December 2022 - Present</p>
              </div>
            </div>
            <div className="mt-12">
              <img 
                src={projectImage} 
                alt="United Rentals Dashboard" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </section>

        {/* At a glance section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="mb-12 animate-on-scroll">
                <h2 className="text-3xl font-bold mb-4">At a glance</h2>
                <p className="text-neutral-700">
                  As the largest equipment rental company in North America, United Rentals needed a streamlined platform to manage their vast inventory and improve customer experience.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 my-12">
                <div className="animate-on-scroll">
                  <div className="text-3xl md:text-4xl font-bold">↑40%</div>
                  <div className="text-sm text-neutral-700">Platform efficiency</div>
                </div>
                <div className="animate-on-scroll">
                  <div className="text-3xl md:text-4xl font-bold">3x</div>
                  <div className="text-sm text-neutral-700">Customer satisfaction</div>
                </div>
                <div className="animate-on-scroll">
                  <div className="text-3xl md:text-4xl font-bold">↑60%</div>
                  <div className="text-sm text-neutral-700">Data load completion</div>
                </div>
                <div className="animate-on-scroll">
                  <div className="text-3xl md:text-4xl font-bold">100%</div>
                  <div className="text-sm text-neutral-700">API compatibility</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Challenge Section */}
        <section className="py-16 bg-neutral-50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="mb-12 animate-on-scroll">
                <div className="text-primary-500 font-medium mb-2 uppercase tracking-wide text-sm">
                  The Challenge
                </div>
                <h2 className="text-3xl font-bold mb-4">Outdated legacy platform ripe for transformation</h2>
                <p className="text-neutral-700">
                  United Rentals faced significant challenges with their digital platforms, including inconsistent user experiences, siloed data, and inefficiencies in the rental process. The company needed a unified strategy to improve customer satisfaction and streamline operations.
                </p>
              </div>

              <div className="space-y-4 animate-on-scroll">
                <div className="flex items-start">
                  <div className="mr-3 text-primary-500 mt-1">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="8" cy="8" r="8" fill="currentColor"/>
                    </svg>
                  </div>
                  <p>Slow performance impacting customer service</p>
                </div>
                <div className="flex items-start">
                  <div className="mr-3 text-primary-500 mt-1">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="8" cy="8" r="8" fill="currentColor"/>
                    </svg>
                  </div>
                  <p>Inconsistent data across multiple platforms</p>
                </div>
                <div className="flex items-start">
                  <div className="mr-3 text-primary-500 mt-1">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="8" cy="8" r="8" fill="currentColor"/>
                    </svg>
                  </div>
                  <p>Difficult user experience for staff</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="mb-12 animate-on-scroll">
                <div className="text-primary-500 font-medium mb-2 uppercase tracking-wide text-sm">
                  Impact
                </div>
                <h2 className="text-3xl font-bold mb-4">Measurable Results</h2>
                <p className="text-neutral-700">
                  The implementation of our unified digital platform has delivered significant improvements across key metrics.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                <div className="bg-neutral-50 p-6 rounded-lg shadow-sm animate-on-scroll">
                  <div className="text-primary-500 text-4xl font-bold">35%</div>
                  <div className="mt-2 font-medium">Increase in online rentals</div>
                  <p className="mt-2 text-sm text-neutral-700">
                    More customers are choosing to complete their rentals online rather than in-store.
                  </p>
                </div>
                
                <div className="bg-neutral-50 p-6 rounded-lg shadow-sm animate-on-scroll">
                  <div className="text-primary-500 text-4xl font-bold">42%</div>
                  <div className="mt-2 font-medium">Reduction in call center volume</div>
                  <p className="mt-2 text-sm text-neutral-700">
                    Self-service features have reduced the need for customer support calls.
                  </p>
                </div>
              </div>
              
              <div className="bg-neutral-50 p-8 rounded-lg shadow-sm mt-12 animate-on-scroll">
                <h3 className="text-xl font-bold mb-4">Client Testimonial</h3>
                <blockquote className="text-neutral-700 italic mb-4">
                  "The digital transformation of our rental platform has exceeded our expectations. Not only have we seen dramatic improvements in customer satisfaction, but we've also experienced operational efficiencies that have positively impacted our bottom line."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-neutral-200 mr-4"></div>
                  <div>
                    <div className="font-medium">John Smith</div>
                    <div className="text-sm text-neutral-700">CTO, United Rentals</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Next Project */}
        <section className="py-16 bg-neutral-100">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <h2 className="text-2xl font-bold mb-8">Next Project</h2>
            <Button asChild>
              <Link to="/projects/common-pass" className="bg-primary-500 hover:bg-primary-600 text-white flex items-center gap-2 w-fit mx-auto">
                View CommonPass Project
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

export default UnitedRentals;
