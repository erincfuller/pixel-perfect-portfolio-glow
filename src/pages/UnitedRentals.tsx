
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from "../components/ui/button";
import { Link } from 'react-router-dom';

// Import placeholder images 
import projectImage from '/lovable-uploads/df9b97a3-b6c1-4b95-ac46-c0ca28c58a0e.png';
import legacyPlatformImage from '/lovable-uploads/df9b97a3-b6c1-4b95-ac46-c0ca28c58a0e.png';
import pathForwardImage from '/lovable-uploads/df9b97a3-b6c1-4b95-ac46-c0ca28c58a0e.png';
import featureImage from '/lovable-uploads/df9b97a3-b6c1-4b95-ac46-c0ca28c58a0e.png';
import reflectionImage from '/lovable-uploads/df9b97a3-b6c1-4b95-ac46-c0ca28c58a0e.png';

const UnitedRentals = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);

    // Add scroll animations
    const fadeElements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    fadeElements.forEach(el => {
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return <>
    <Header />
    <main className="overflow-hidden">
      {/* Project Hero Section */}
      <section className="pt-16 pb-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mb-2">
            <span className="text-primary-500 uppercase text-xs">Case Study</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-semibold mb-4">
                Rebuilding a legacy fleet management platform for speed, clarity, and scale
              </h1>
              <div className="grid grid-cols-1 gap-1 mb-4">
                <div className="flex gap-2 text-sm">
                  <span className="font-medium">Project Team:</span>
                  <span>Lead Product Strategist</span>
                </div>
                <div className="flex gap-2 text-sm">
                  <span className="font-medium">Client:</span>
                  <span>United Rentals</span>
                </div>
                <div className="flex gap-2 text-sm">
                  <span className="font-medium">Timeline:</span>
                  <span>December 2022 - Present</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-blue-600 rounded-lg p-4 relative z-10">
                <img 
                  src={projectImage} 
                  alt="United Rentals Dashboard" 
                  className="rounded-lg shadow-lg w-full" 
                />
              </div>
              <div className="absolute bg-blue-500 rounded-lg w-4/5 h-full top-4 left-4 -z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* At a glance section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="mb-12 animate-on-scroll text-center">
              <h2 className="text-2xl font-semibold mb-4">At a glance</h2>
              <p className="text-neutral-700 text-sm">
                As the largest equipment rental company in North America, United Rentals needed a streamlined platform to manage their vast inventory and improve customer experience.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 my-12">
              <div className="animate-on-scroll">
                <div className="text-2xl md:text-3xl font-bold">↑40%</div>
                <div className="text-sm text-neutral-700">Platform</div>
              </div>
              <div className="animate-on-scroll">
                <div className="text-2xl md:text-3xl font-bold">3x</div>
                <div className="text-sm text-neutral-700">Customer satisfaction</div>
              </div>
              <div className="animate-on-scroll">
                <div className="text-2xl md:text-3xl font-bold">↑60%</div>
                <div className="text-sm text-neutral-700">Data load completion</div>
              </div>
              <div className="animate-on-scroll">
                <div className="text-2xl md:text-3xl font-bold">100%</div>
                <div className="text-sm text-neutral-700">API compatibility</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <div className="text-primary-500 font-medium mb-2 uppercase tracking-wide text-xs">
                The Challenge
              </div>
              <h2 className="text-2xl font-semibold mb-4">Outdated legacy platform ripe for transformation</h2>
              <p className="text-neutral-700 text-sm mb-6">
                United Rentals faced significant challenges with their digital platforms, including inconsistent user experiences, siloed data, and inefficiencies in the rental process.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <div className="mt-1 text-primary-500">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="4" cy="4" r="4" fill="currentColor" />
                    </svg>
                  </div>
                  <p className="text-sm">Slow performance impacting customer service</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="mt-1 text-primary-500">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="4" cy="4" r="4" fill="currentColor" />
                    </svg>
                  </div>
                  <p className="text-sm">Inconsistent data across multiple platforms</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="mt-1 text-primary-500">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="4" cy="4" r="4" fill="currentColor" />
                    </svg>
                  </div>
                  <p className="text-sm">Difficult user experience for staff</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-blue-600 rounded-lg p-4 relative z-10">
                <img 
                  src={legacyPlatformImage} 
                  alt="Legacy Platform" 
                  className="rounded-lg shadow-lg w-full" 
                />
              </div>
              <div className="absolute bg-blue-500 rounded-lg w-4/5 h-full top-4 left-4 -z-0"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Path Forward Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="animate-on-scroll mb-8">
            <h2 className="text-2xl font-semibold">Path forward</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src={pathForwardImage}
                alt="Path Forward" 
                className="rounded-lg shadow-lg w-full" 
              />
            </div>
            <div className="animate-on-scroll order-1 md:order-2">
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <div className="mt-1 text-primary-500">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="4" cy="4" r="4" fill="currentColor" />
                    </svg>
                  </div>
                  <p className="text-sm">Unified tech stack for consistent performance</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="mt-1 text-primary-500">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="4" cy="4" r="4" fill="currentColor" />
                    </svg>
                  </div>
                  <p className="text-sm">Centralized data infrastructure</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="mt-1 text-primary-500">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="4" cy="4" r="4" fill="currentColor" />
                    </svg>
                  </div>
                  <p className="text-sm">Intuitive interface for quick adoption</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Setting a New Standard Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="animate-on-scroll mb-8 max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-semibold">Setting a New Standard</h2>
            <p className="text-neutral-700 text-sm mt-2">
              Our redesign established new benchmarks for efficiency and usability across the rental equipment industry
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-sm animate-on-scroll">
              <div className="w-12 h-12 rounded-md bg-red-100 flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 5v14M5 12h14" stroke="#FF6B6B" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="font-medium mb-2">Streamlined Workflows</h3>
              <p className="text-sm text-neutral-700">
                Reduced time-to-completion for common tasks by 65%, allowing staff to manage more rentals with less effort.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm animate-on-scroll">
              <div className="w-12 h-12 rounded-md bg-red-100 flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 5v14M5 12h14" stroke="#FF6B6B" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="font-medium mb-2">Unified Experience</h3>
              <p className="text-sm text-neutral-700">
                Consistent design system created continuity across all platforms, reducing training time by 40%.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm animate-on-scroll">
              <div className="w-12 h-12 rounded-md bg-red-100 flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 5v14M5 12h14" stroke="#FF6B6B" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="font-medium mb-2">Scalable Architecture</h3>
              <p className="text-sm text-neutral-700">
                Future-proof design accommodates growing inventory and expanding feature set with no performance degradation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Language Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <div className="text-primary-500 font-medium mb-2 uppercase tracking-wide text-xs">
                Design System
              </div>
              <h2 className="text-2xl font-semibold mb-4">New design language for scalability</h2>
              <p className="text-neutral-700 text-sm mb-6">
                We developed a comprehensive design system that accommodates the complex data relationships and workflow needs while maintaining visual clarity.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-red-50 aspect-square rounded-lg"></div>
              <div className="bg-red-100 aspect-square rounded-lg"></div>
              <div className="bg-blue-50 aspect-square rounded-lg"></div>
              <div className="bg-blue-500 aspect-square rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Feature Highlights */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="animate-on-scroll mb-12">
            <h2 className="text-2xl font-semibold">Feature Highlights</h2>
          </div>
          
          <div className="relative">
            <div className="bg-blue-600 rounded-lg p-6 relative z-10">
              <img 
                src={featureImage} 
                alt="Feature Highlights" 
                className="rounded-lg w-full" 
              />
              
              {/* Feature callouts */}
              <div className="absolute -left-3 top-1/4 flex items-center">
                <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
                  <span className="text-white text-xs">1</span>
                </div>
                <div className="ml-2 bg-white p-3 rounded-lg shadow-lg max-w-xs">
                  <p className="text-xs font-medium">Real-time fleet updates</p>
                  <p className="text-xs text-neutral-600">Track equipment status and location instantly</p>
                </div>
              </div>
              
              <div className="absolute -right-3 top-1/3 flex items-center">
                <div className="mr-2 bg-white p-3 rounded-lg shadow-lg max-w-xs text-right">
                  <p className="text-xs font-medium">Maintenance scheduling</p>
                  <p className="text-xs text-neutral-600">Automated alerts and maintenance tracking</p>
                </div>
                <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
                  <span className="text-white text-xs">2</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Reflection Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-2xl font-semibold mb-4">Reflection</h2>
              <p className="text-neutral-700 text-sm mb-6">
                This project demonstrated how thoughtful UX design and architecture can transform operational efficiency. The redesigned platform not only improved internal workflows but also enhanced customer satisfaction through faster service and more accurate information.
              </p>
            </div>
            <div>
              <img 
                src={reflectionImage} 
                alt="Reflection"
                className="rounded-lg shadow-lg w-full" 
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Interested in more? */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="animate-on-scroll mb-8">
            <h2 className="text-2xl font-semibold">Interested in more?</h2>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start gap-2">
              <div className="mt-1 text-primary-500">
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="4" cy="4" r="4" fill="currentColor" />
                </svg>
              </div>
              <Link to="/projects/common-pass" className="text-primary-500 hover:underline">
                View CommonPass Project
              </Link>
            </div>
            <div className="flex items-start gap-2">
              <div className="mt-1 text-primary-500">
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="4" cy="4" r="4" fill="currentColor" />
                </svg>
              </div>
              <Link to="/projects/find-food" className="text-primary-500 hover:underline">
                View FindFood Project
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>;
};

export default UnitedRentals;
