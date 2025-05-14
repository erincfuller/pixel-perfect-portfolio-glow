import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from "../components/ui/button";
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Plus, Check } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../components/ui/carousel";

// Import placeholder images 
import projectImage from '/lovable-uploads/ec29fc27-9e59-40cd-9397-4f4bb2004a79.png';
import legacyPlatformImage from '/lovable-uploads/58fcb399-a5b1-48ac-a2f4-4f10e03e9881.png';
import pathForwardImage from '/lovable-uploads/75dd3cea-e1c7-4a90-a4c5-0f86987799c1.png'; // Updated image
import featureImage from '/lovable-uploads/2f1b5b20-5794-45be-978a-62682f475af8.png';
import reflectionImage from '/lovable-uploads/b3297883-aba2-4d3d-95c1-bf85a6c0c6ca.png';
import blueBackground from '/lovable-uploads/22f618eb-d284-4973-8a58-e5640ce17a75.png';
const UnitedRentals = () => {
  const [api, setApi] = useState<{
    scrollNext: () => void;
    scrollPrev: () => void;
  } | null>(null);
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
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

  // Set up carousel autoplay
  useEffect(() => {
    if (isPaused || !api) return;
    const interval = setInterval(() => {
      api.scrollNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [api, isPaused]);

  // Track current slide
  useEffect(() => {
    if (!api) return;
    const handleSelect = () => {
      // Get current index from embla carousel
      const emblaApi = (api as any).carouselRef?.current?.emblaApi;
      if (emblaApi) {
        const selectedIndex = emblaApi.selectedScrollSnap();
        setCurrent(selectedIndex);
      }
    };

    // Add event listeners
    (api as any).on?.("select", handleSelect);
    return () => {
      (api as any).off?.("select", handleSelect);
    };
  }, [api]);

  // Create dot indicators 
  const dotIndicators = [0, 1, 2].map(idx => <button key={idx} onClick={() => {
    if (!api) return;
    // Logic to scroll to specific slide
    const emblaApi = (api as any).carouselRef?.current?.emblaApi;
    if (emblaApi) {
      emblaApi.scrollTo(idx);
    }
  }} className={`w-2 h-2 rounded-full mx-1 transition-all duration-300 ${current === idx ? "bg-primary-500 scale-125" : "bg-neutral-300"}`} aria-label={`Go to slide ${idx + 1}`} />);
  return <>
    <Header />
    <main className="overflow-hidden">
      {/* Project Hero Section */}
      <section className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <div className="mb-2">
                <span className="text-primary-500 uppercase text-sm font-medium tracking-wide">United Rentals</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 leading-tight">
                Rebuilding a legacy fleet management platform for speed, clarity, and scale
              </h1>
              <div className="space-y-2 text-neutral-700">
                <div className="flex gap-2">
                  <span className="font-medium">Project Type:</span>
                  <span>B2B · Construction Tech</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-medium">Role:</span>
                  <span>Product Strategist and Designer</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-medium">Timeline:</span>
                  <span>Jan 2023 – Present</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-medium">Product:</span>
                  <span>Total Control®</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 w-full h-full bg-blue-600 rounded-2xl overflow-hidden">
                <img src={blueBackground} alt="Blue background" className="w-full h-full object-cover" />
              </div>
              <div className="relative z-10 transform -rotate-6 hover:scale-105 transition-transform duration-300">
                <img src={projectImage} alt="United Rentals Dashboard on Tablet" className="w-full drop-shadow-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* At a glance section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="mb-12 animate-on-scroll text-center">
              <div className="mb-2">
                <span className="text-primary-500 uppercase text-sm font-medium tracking-wide">Impact</span>
              </div>
              <h2 className="text-4xl font-semibold mb-4">At a glance</h2>
              <p className="text-neutral-700 text-sm">This project was a major overhaul, a rethink of how mission-critical users get work done under pressure. The results speak for themselves: faster workflows, happier users, and a system built to evolve.</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 my-12 bg-neutral-100 px-8 md:p-8 rounded-lg">
              <div className="animate-on-scroll">
                <div className="text-3xl md:text-3xl font-bold text-center">↓ 40%</div>
                <div className="text-sm text-neutral-700 text-center font-bold">Time to pay metric 
                  <p className="font-light">Indicating improved UX</p>
                </div>
              </div>
              <div className="animate-on-scroll">
                <div className="text-3xl md:text-3xl font-bold text-center">↑ 3x</div>
                <div className="text-sm text-neutral-700 text-center font-bold">Customer completed payments
                  <p className="font-light">Indicating flow efficiency</p>
                </div>
              </div>
              <div className="animate-on-scroll">
                <div className="text-3xl md:text-3xl font-bold text-center">↓ 60%</div>
                <div className="text-sm text-neutral-700 text-center font-bold">Rage clicks
                  <p className="font-light">Indicating overall satisfaction</p>
                </div>
              </div>
              <div className="animate-on-scroll">
                <div className="text-3xl md:text-3xl font-bold text-center">100%</div>
                <div className="text-sm text-neutral-700 text-center font-bold">Fully Responsive
                  <p className="font-light">Critical for our field users</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <div className="text-primary-500 font-medium mb-2 uppercase tracking-wide">
                THE OPPORTUNITY
              </div>
              <h2 className="text-3xl font-semibold mb-4">Outdated legacy platform ripe for transformation</h2>
              <p className="text-neutral-700 mb-6">
                TotalControl was a 15+ year-old legacy platform that enterprise customers depended on to manage projects, invoices, and operations. But its outdated, non-responsive interface made critical tasks slow, frustrating, and hard to complete—especially on the go.
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center text-primary-500">
                    <Plus size={14} />
                  </div>
                  <p className="">Slow, clunky, and visually outdated</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center text-primary-500">
                    <Plus size={14} />
                  </div>
                  <p className="">Not mobile responsive — frustrating for field operator</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center text-primary-500">
                    <Plus size={14} />
                  </div>
                  <p className="">Inefficient workflows leading to delayed task completion</p>
                </div>
              </div>
              
              <p className="text-neutral-700">
                The mission was clear: Rebuild the experience for modern users — faster, scalable, and ready for the field —without disrupting the workflows that customers had relied on for over a decade.
              </p>
            </div>
            <div className="relative">
              <div className="bg-blue-600 rounded-lg p-4 relative z-10">
                <img src={legacyPlatformImage} alt="Legacy Platform Screenshot" className="rounded-lg shadow-lg w-full" />
              </div>
              <div className="absolute bg-blue-500 rounded-lg w-full h-full top-4 left-4 -z-0"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Path Forward Section - UPDATED with new image */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div className="animate-on-scroll">
              <div className="uppercase text-primary-500 tracking-wide text-sm font-medium">
                ROADMAPPING
              </div>
              <h2 className="text-3xl font-semibold mt-2">Path forward</h2>
            </div>
            
            <div className="animate-on-scroll">
              <p className="text-neutral-700 mb-8">
                We moved forward and roadmapping and design with three core objectives
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-50 flex items-center justify-center text-primary-500">
                    <span>1</span>
                  </div>
                  <p className="text-neutral-800">
                    Achieve feature parity with the legacy system
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-50 flex items-center justify-center text-primary-500">
                    <span>2</span>
                  </div>
                  <p className="text-neutral-800">Streamline and enhance UX flows for speed and clarity</p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-50 flex items-center justify-center text-primary-500">
                    <span>3</span>
                  </div>
                  <p className="text-neutral-800">Build for scale, mobile use, and future tech integration</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Full-width Miro board image */}
          <div className="w-full rounded-lg shadow-sm overflow-hidden">
            <img src="https://github.com/erincfuller/erincfuller.github.io/blob/main/UnitedRentals-Miro.png?raw=true" alt="Total Control Legacy Feature Inventory Miro board" className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* Setting a New Standard Section */}
      <section className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="animate-on-scroll mb-8 max-w-2xl mx-auto text-center">
            <div className="text-primary-500 font-medium mb-2 uppercase tracking-wide">
                Proccess & Approach
              </div>
            <h2 className="text-3xl font-semibold">Setting a New Standard</h2>
            <p className="text-neutral-700  mt-2">This project marked a turning point for how United Rentals approached product development—shifting from a historically waterfall process to a more iterative, user-centered way of working. I championed new practices like design-to-dev alignment using Figma DevMode, and standing up UAT practice as a standard quality gate. These foundational shifts not only improved this project's outcomes but also laid the groundwork for a stronger, more agile tech organization moving forward.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-sm animate-on-scroll">
              <div className="w-12 h-12 rounded-md bg-red-100 flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 5v14M5 12h14" stroke="#FF6B6B" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="font-medium mb-2">Research and Benchmarking</h3>
              <p className="text-sm text-neutral-700">I preformed competitive and analogous research across leading B2B platforms to understand modern user expectations around speed, accessibility, and interaction patterns. This helped us define a future-ready UX standard that not only caught up to industry leaders but set United Rentals apart in how it serves its enterprise customers.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm animate-on-scroll">
              <div className="w-12 h-12 rounded-md bg-red-100 flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 5v14M5 12h14" stroke="#FF6B6B" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="font-medium mb-2">Design Workflow Improvement</h3>
              <p className="text-sm text-neutral-700">To ship with confidence and speed, I championed several process improvements that transformed how design and engineering collaborated: 

• Figma DevMode: Streamlined design-to-dev handoffs, giving engineers direct access to specs, tokens, and component logic. 

• Component-Based Design System: Built out a scalable UI library to ensure consistency across workflows and future features. 

• User Acceptance Testing (UAT): Established a formal UAT process—new to United Rentals—to validate every release and prevent regressions before launch.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm animate-on-scroll">
              <div className="w-12 h-12 rounded-md bg-red-100 flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 5v14M5 12h14" stroke="#FF6B6B" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="font-medium mb-2">Internal and Closed-Beta Pilots </h3>
              <p className="text-sm text-neutral-700">We kicked off with targeted internal pilots, working directly with our national and strategic account sales reps—the team closest to customer pain points and day-to-day product friction. Their insights helped us quickly validate early concepts, identify high-impact workflows to prioritize, and pressure-test where the legacy experience was breaking down. This early partnership ensured our redesign wasn't happening in a vacuum, but deeply grounded in real user and customer feedback - also augmented by digital means like surveys and user analytics.</p>
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
              <h2 className="text-3xl font-semibold mb-4">New design language for scalability</h2>
              <p className="text-neutral-700 text-sm mb-6">
                We developed a comprehensive design system that accommodates the complex data relationships and workflow needs while maintaining visual clarity.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[url('https://github.com/erincfuller/erincfuller.github.io/blob/main/Building1.png?raw=true')] bg-cover bg-center aspect-[3/4] rounded-lg"></div>
              <div className="bg-[url('https://github.com/erincfuller/erincfuller.github.io/blob/main/Building2.png?raw=true')] bg-cover bg-center aspect-[3/4] rounded-lg"></div>
              
              
            </div>
          </div>
        </div>
      </section>
      
      {/* Feature Highlights */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="animate-on-scroll mb-12 text-center">
            <h2 className="text-3xl font-semibold">Feature Highlights</h2>
          </div>
          
          <div className="relative" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
            <Carousel className="w-full max-w-5xl mx-auto" setApi={setApi} opts={{
              align: "center",
              loop: true
            }}>
              <CarouselContent className="h-[400px] sm:h-[500px] md:h-[600px]">
                <CarouselItem>
                  <div className="h-full w-full bg-primary-50 rounded-xl flex items-center justify-center">
                    <img src="https://github.com/erincfuller/erincfuller.github.io/blob/main/Feature3.png?raw=true" alt="Real-time fleet dashboard" className="object-contain rounded-xl w-full h-full" />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="h-full w-full bg-primary-50 rounded-xl flex items-center justify-center">
                    <img src="https://github.com/erincfuller/erincfuller.github.io/blob/main/Feature1.png?raw=true" alt="Equipment management" className="object-contain rounded-xl w-full h-full" />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="h-full w-full bg-primary-50 rounded-xl flex items-center justify-center">
                    <img src="https://github.com/erincfuller/erincfuller.github.io/blob/main/Feature2.png?raw=true" alt="Invoice Management" className="object-contain rounded-xl w-full h-full" />
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="h-12 w-12 border-none bg-primary-500 text-white opacity-0 hover:opacity-100 transition-all duration-300 hover:scale-105 left-4 md:left-2" />
              <CarouselNext className="h-12 w-12 border-none bg-primary-500 text-white opacity-0 hover:opacity-100 transition-all duration-300 hover:scale-105 right-4 md:right-2" />
            </Carousel>
            
            <div className="flex justify-center mt-6 space-x-2">
              {dotIndicators}
            </div>
          </div>
        </div>
      </section>
      
      {/* Reflection Section */}
      <section className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="bg-white p-12 rounded-xl shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
              <div className="md:col-span-3 animate-on-scroll">
                <h2 className="text-3xl font-semibold mb-6">Reflection</h2>
                <p className="text-neutral-700">
                  This project was more than a product redesign—it was a shift in how United Rentals 
                  builds, tests, and scales technology. By combining customer insight with stronger 
                  delivery practices, we didn't just improve the user experience—we set a new bar for 
                  product development at scale. The measurable impact on user efficiency and 
                  satisfaction proved that our investments paid off. Most importantly, we left the 
                  organization with new tools, processes, and mindsets that will continue to 
                  strengthen future product work.
                </p>
              </div>
              <div className="md:col-span-2 relative">
                <div className="bg-blue-600 rounded-lg relative z-10 transform md:translate-x-4">
                  <img src={reflectionImage} alt="Notification Journey mobile UI" className="rounded-lg shadow-lg w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Interested in more? */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Left Column (65% width) */}
            <div className="md:col-span-7 animate-on-scroll">
              <h2 className="text-3xl font-semibold">Interested in more?</h2>
            </div>
            
            {/* Right Column (35% width) */}
            <div className="md:col-span-5 animate-on-scroll">
              <div className="mb-4">
                <span className="text-primary-500 font-medium">Interested in more?</span> Contact me for the case study's with additional insights and artifacts:
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-50 flex items-center justify-center text-primary-500">
                    <Check size={16} />
                  </div>
                  <span>Voice of the customer insights</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-50 flex items-center justify-center text-primary-500">
                    <Check size={16} />
                  </div>
                  <span>Deep dive on process of one feature</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-50 flex items-center justify-center text-primary-500">
                    <Check size={16} />
                  </div>
                  <span>Design thinking lunch and learn</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>;
};
export default UnitedRentals;