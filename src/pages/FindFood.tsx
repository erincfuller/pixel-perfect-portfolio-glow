import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from "../components/ui/button";
import { Link } from 'react-router-dom';
import { Card } from "../components/ui/card";
import { ArrowUp, FileImage, Filter, MapPin, Users } from "lucide-react";

// Import placeholder image
import placeholderImage from '/lovable-uploads/8676a27d-b10d-44c2-99e4-785fed8f1739.png';
import tabletMockup from '/lovable-uploads/ec0d9b50-4293-44a1-ba1c-37273bd2d428.png';
const FindFood = () => {
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
      <main>
        {/* Section 1: Hero / Project Overview */}
        <section className="py-16 bg-neutral-50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="animate-on-scroll">
                <div className="text-primary-500 font-medium mb-2 uppercase tracking-wide text-sm">
                  Find Food
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-8">
                  Empowering Digital Access to Food Resources
                </h1>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm text-neutral-700 mb-1">Project Type</h4>
                    <p className="font-medium">Case Study</p>
                  </div>
                  <div>
                    <h4 className="text-sm text-neutral-700 mb-1">Client</h4>
                    <p className="font-medium">Pittsburgh Community Food Bank</p>
                  </div>
                  <div>
                    <h4 className="text-sm text-neutral-700 mb-1">Role</h4>
                    <p className="font-medium">UX/UI Designer, Design Thinking Consultant</p>
                  </div>
                  <div>
                    <h4 className="text-sm text-neutral-700 mb-1">Timeline</h4>
                    <p className="font-medium">February 2020 - May 2020</p>
                  </div>
                </div>
              </div>
              
              <div className="relative animate-on-scroll">
                <div className="absolute inset-0 bg-blue-500 rounded-3xl opacity-20 blur-xl"></div>
                <div className="relative flex justify-center">
                  <img src={tabletMockup} alt="Find Food Platform" className="max-w-full h-auto z-10 transform rotate-6" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: The Challenge */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-3 animate-on-scroll">
                <div className="text-primary-500 font-medium mb-2 uppercase tracking-wide text-sm">
                  The Challenge
                </div>
                <h2 className="text-3xl font-bold mb-6">
                  How might we help more people find the food resources they need—
                  quickly, easily, and with dignity?
                </h2>
                <p className="text-neutral-700 mb-4">
                  During the COVID-19 pandemic, food insecurity rose dramatically across America. 
                  The Pittsburgh Community Food Bank saw a 543% increase in calls from individuals seeking assistance. 
                  They needed a better way to connect people to food resources.
                </p>
                <p className="text-neutral-700">
                  People couldn't easily find what food pantries were near them, when they were open, 
                  or what eligibility requirements they needed to meet. As a result, people went hungry, 
                  and food pantries sat with excess food.
                </p>
              </div>
              
              <div className="md:col-span-2 animate-on-scroll">
                <img src={placeholderImage} alt="Food Insecurity Map" className="rounded-lg shadow-md w-full h-auto" />
                <p className="text-xs text-neutral-500 mt-2 text-right">Source: Feeding America</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: The Solution */}
        <section className="py-16 bg-neutral-50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto text-center animate-on-scroll">
              <div className="text-primary-500 font-medium mb-2 uppercase tracking-wide text-sm">
                Solution
              </div>
              <h2 className="text-3xl font-bold mb-6">
                A Responsive, Filterable, Personalized Food Finder
              </h2>
              <p className="text-neutral-700 mb-12">
                We designed and built an intuitive platform that connects users with food resources based on 
                their specific location, needs, eligibility, and preferences. The user-centric solution helps 
                eliminate barriers and creates a dignified experience for people seeking food assistance.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto mb-12 animate-on-scroll">
              <img src={tabletMockup} alt="Food Finder Interface" className="rounded-lg shadow-lg max-w-full mx-auto" />
            </div>
            
            <div className="text-center animate-on-scroll">
              <Button asChild className="mt-6">
                <a href="#" className="bg-primary-500 hover:bg-primary-600 text-white flex items-center gap-2">
                  Access Pittsburgh Food Finder
                  <ArrowUp className="h-4 w-4 rotate-45" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Section 4: My Role / Responsibilities */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
              <div className="animate-on-scroll">
                <div className="text-primary-500 font-medium mb-2 uppercase tracking-wide text-sm">
                  Responsibilities
                </div>
                <h2 className="text-3xl font-bold mb-6">My Role</h2>
                <p className="text-neutral-700">
                  I led a cross-functional team through discovery, research, design, 
                  prototyping, and development. Using a human-centered approach, 
                  we rapidly went from initial prototyping to a fully accessible design 
                  serving the most vulnerable populations.
                </p>
              </div>
              
              <div className="space-y-6 animate-on-scroll">
                <div className="flex gap-4 items-start">
                  <div className="bg-primary-100 p-3 rounded-lg mt-1">
                    <Users className="h-5 w-5 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Led user research across 20 interviews, 15 surveys, and on-site observations</h3>
                    <p className="text-neutral-700 text-sm">Collected insights from food bank clients, staff, and community members</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-primary-100 p-3 rounded-lg mt-1">
                    <MapPin className="h-5 w-5 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Defined design strategy based on real user pain points</h3>
                    <p className="text-neutral-700 text-sm">Created user flows, wireframes, and priorities for development</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-primary-100 p-3 rounded-lg mt-1">
                    <FileImage className="h-5 w-5 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Owned prototyping and client review cycles</h3>
                    <p className="text-neutral-700 text-sm">Facilitated stakeholder sessions to gather feedback and refine designs</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-primary-100 p-3 rounded-lg mt-1">
                    <Filter className="h-5 w-5 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Facilitated A/B testing and usability training</h3>
                    <p className="text-neutral-700 text-sm">Improved feature adoption, site usage, and product impact</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Process & Approach */}
        <section className="py-16 bg-neutral-50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-12 animate-on-scroll">
              <div className="text-primary-500 font-medium mb-2 uppercase tracking-wide text-sm">
                Process & Approach
              </div>
              <h2 className="text-3xl font-bold">From Research to Impact</h2>
              <p className="mt-4 max-w-2xl mx-auto text-neutral-700">
                Through multiple rounds of research and testing, we created a resilient solution
                that met the needs of our diverse user base.
              </p>
            </div>
            
            {/* Feature Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 animate-on-scroll">
              <Card className="p-6 bg-white">
                <div className="bg-primary-100 p-4 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                  <Filter className="h-6 w-6 text-primary-500" />
                </div>
                <h3 className="font-bold text-lg mb-2">Filterable Results</h3>
                <p className="text-neutral-700">
                  Enabling users to quickly find resources based on location, service type, and eligibility requirements
                </p>
              </Card>
              
              <Card className="p-6 bg-white">
                <div className="bg-primary-100 p-4 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                  <FileImage className="h-6 w-6 text-primary-500" />
                </div>
                <h3 className="font-bold text-lg mb-2">Mobile Accessibility</h3>
                <p className="text-neutral-700">
                  Ensuring everyone can access resources regardless of device or connectivity limitations
                </p>
              </Card>
              
              <Card className="p-6 bg-white">
                <div className="bg-primary-100 p-4 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                  <Users className="h-6 w-6 text-primary-500" />
                </div>
                <h3 className="font-bold text-lg mb-2">Personalized Schedules</h3>
                <p className="text-neutral-700">
                  Allowing users to save locations and receive updates about operating hours and special events
                </p>
              </Card>
            </div>
            
            {/* Images Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-on-scroll">
              <div className="aspect-video bg-white p-4 rounded-lg">
                <img src={placeholderImage} alt="Desktop user testing session" className="rounded w-full h-full object-cover" />
                <p className="mt-2 text-sm text-neutral-700 text-center">User testing the core prototypes</p>
              </div>
              
              <div className="aspect-video bg-white p-4 rounded-lg">
                <img src={placeholderImage} alt="Mobile prototypes" className="rounded w-full h-full object-cover" />
                <p className="mt-2 text-sm text-neutral-700 text-center">Mobile prototypes for testing</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Reflection */}
        <section className="py-16 bg-white border-t border-neutral-200">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="md:col-span-2 animate-on-scroll">
                <div className="text-primary-500 font-medium mb-2 uppercase tracking-wide text-sm">
                  Reflection
                </div>
                <h2 className="text-3xl font-bold mb-6">What We Learned</h2>
                <p className="text-neutral-700 mb-4">
                  Design systems built around inclusive solutions address
                  the broadest range of users and create the most impact. By prioritizing the needs
                  of users with the highest barriers to entry, we created a more robust solution for everyone.
                </p>
                <p className="text-neutral-700">
                  <Link to="/contact" className="text-primary-500 hover:underline">
                    Interested in a deeper dive? Contact me…
                  </Link>
                </p>
              </div>
              
              <div className="md:col-span-1 animate-on-scroll">
                <Card className="p-6 bg-neutral-50 border-0">
                  <p className="text-lg italic mb-4">
                    "So many people come to me to ask 'How do I get help? Where do I go? Who to contact?' 
                    This redesign will really help them find the answers themselves."
                  </p>
                  <div className="flex items-center">
                    <div className="bg-primary-100 h-10 w-10 rounded-full flex items-center justify-center mr-3">
                      <Users className="h-4 w-4 text-primary-500" />
                    </div>
                    <span className="font-medium">FoodBank Employee</span>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Next Project */}
        <section className="py-16 bg-neutral-50">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <h2 className="text-2xl font-bold mb-8">Interested in more?</h2>
            <Button asChild>
              <Link to="/projects/united-rentals" className="bg-primary-500 hover:bg-primary-600 text-white flex items-center gap-2 mx-auto">
                View United Rentals Project
                <ArrowUp className="h-4 w-4 rotate-45" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>;
};
export default FindFood;