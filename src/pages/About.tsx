
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from "../components/ui/button";
import { Link } from 'react-router-dom';

// Import placeholder image
import profileImage from '/lovable-uploads/be434163-26fb-460e-924d-88c4f9ff34c8.png';

const About = () => {
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
        {/* About Hero */}
        <section className="pt-32 pb-16 bg-neutral-100">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  About Me
                </h1>
                <p className="text-neutral-700 mb-6">
                  I'm a product strategist with over 10 years of experience building user-centered digital products. My unique background in both design and business allows me to bridge the gap between user needs and business objectives.
                </p>
                <p className="text-neutral-700">
                  I specialize in transforming complex challenges into intuitive digital solutions that drive measurable results.
                </p>
              </div>
              <div className="md:w-1/2">
                <img 
                  src={profileImage} 
                  alt="Product Strategist Portrait" 
                  className="rounded-lg shadow-lg w-full max-w-md mx-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Skills & Expertise */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-12 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
              <p className="text-neutral-700 max-w-2xl mx-auto">
                My expertise spans product strategy, design thinking, and technical execution. I leverage these skills to deliver comprehensive solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              <div className="bg-neutral-50 p-6 rounded-lg animate-on-scroll">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 3V21M3 17H21M21 13C21 7.5 16 3 10.5 3C8.5 3 6.5 3.5 5 4.5" stroke="#FF7D5F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Product Strategy</h3>
                <p className="text-neutral-700">
                  Market research, competitive analysis, roadmap planning, and feature prioritization.
                </p>
              </div>
              
              <div className="bg-neutral-50 p-6 rounded-lg animate-on-scroll">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="#FF7D5F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12.0004 5C7.52281 5 3.73253 7.94288 2.45825 12C3.73251 16.0571 7.52281 19 12.0005 19C16.4781 19 20.2684 16.0571 21.5426 12C20.2684 7.94291 16.4781 5 12.0004 5Z" stroke="#FF7D5F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">UX Design</h3>
                <p className="text-neutral-700">
                  User research, wireframing, prototyping, usability testing, and accessibility.
                </p>
              </div>
              
              <div className="bg-neutral-50 p-6 rounded-lg animate-on-scroll">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 3H5C3.89543 3 3 3.89543 3 5V9M9 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V9M9 3L3 9M9 14C9 15.6569 10.3431 17 12 17C13.6569 17 15 15.6569 15 14C15 12.3431 13.6569 11 12 11C10.3431 11 9 12.3431 9 14Z" stroke="#FF7D5F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Product Development</h3>
                <p className="text-neutral-700">
                  Agile methodologies, sprint planning, technical requirements, and cross-functional collaboration.
                </p>
              </div>
              
              <div className="bg-neutral-50 p-6 rounded-lg animate-on-scroll">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8H17C18.1046 8 19 8.89543 19 10V16C19 17.1046 18.1046 18 17 18H7C5.89543 18 5 17.1046 5 16V10C5 8.89543 5.89543 8 7 8H8M16 8V6C16 4.89543 15.1046 4 14 4H10C8.89543 4 8 4.89543 8 6V8M16 8H8M12 11V15M15 13H9" stroke="#FF7D5F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Leadership</h3>
                <p className="text-neutral-700">
                  Team management, stakeholder communication, mentorship, and organizational strategy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-neutral-50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="animate-on-scroll">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="mr-4 text-primary-500">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 8L10.7829 13.5215C11.5 14 12.5 14 13.2171 13.5215L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <a href="mailto:erincfuller@gmail.com" className="text-primary-500 hover:underline">erincfuller@gmail.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 text-primary-500">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 13V6C21 4.89543 20.1046 4 19 4H5C3.89543 4 3 4.89543 3 6V13M21 13V18C21 19.1046 20.1046 20 19 20H5C3.89543 20 3 19.1046 3 18V13M21 13H3M10 8H14M9 16H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">LinkedIn</h3>
                      <a href="https://www.linkedin.com/in/erincfuller" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:underline">linkedin.com/in/erincfuller</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 text-primary-500">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.9896 14.5C13.3768 14.5 14.5 13.3768 14.5 11.9896C14.5 10.6024 13.3768 9.47922 11.9896 9.47922C10.6024 9.47922 9.47922 10.6024 9.47922 11.9896C9.47922 13.3768 10.6024 14.5 11.9896 14.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M11.99 5C15.979 5 19.5 7.58 19.5 12C19.5 16.42 15.979 19 11.99 19C8.00098 19 4.5 16.42 4.5 12C4.5 9.88 5.50526 8 7.34338 6.71" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">Based In</h3>
                      <p>New York City</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA - Commented Out */}
        {/* <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto text-center animate-on-scroll">
              <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
              <p className="text-neutral-700 mb-8">
                I'm always open to discussing product strategy, design challenges, or potential collaborations.
              </p>
              <Button asChild>
                <Link to="/contact" className="bg-primary-500 hover:bg-primary-600 text-white flex items-center gap-2 w-fit mx-auto">
                  Get In Touch
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 10H15M15 10L10 5M15 10L10 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </Button>
            </div>
          </div>
        </section> */}
      </main>
      <Footer />
    </>
  );
};

export default About;
