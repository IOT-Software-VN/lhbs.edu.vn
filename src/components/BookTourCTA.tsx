import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import busIllustration from '../assets/school-bus.png';

interface BookTourCTAProps {
  onNavigate: (path: string) => void;
}

export function BookTourCTA({ onNavigate }: BookTourCTAProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  const tourTitle = "Book a school tour!";
  const tourDesc = "Give the solid foundation for your child. Start today…";
  const ctaText = "BOOK YOUR VISIT";
  const ctaLink = "/admissions/apply-now";

  return (
    <motion.section
      ref={ref}
      className="content-center overflow-hidden relative"
      style={{ 
        minHeight: '380px'
      }}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      {/* Background Image */}
      <img 
        src="https://sna.edu.vn/wp-content/uploads/2025/03/book-a-tour-bg.png"
        alt="School calendar background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Blur overlay for right 40% area with gradient fade */}
      <div 
        className="absolute top-0 right-0 w-[40%] h-full pointer-events-none"
        style={{
          backdropFilter: 'blur(6px)',
          background: 'linear-gradient(to left, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4), transparent)'
        }}
      />
      
      {/* Container with max-width */}
      <div className="max-w-[1440px] mx-auto h-full relative">

        {/* Right Content Area (40%) */}
        <div className="relative h-full flex items-center justify-end px-4 md:px-8 lg:px-20 py-16 md:py-20">
          <motion.div
            className="max-w-[640px] w-full lg:w-[40%] z-10"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Title */}
            <h2 className=" text-5xl md:text-6xl lg:text-7xl text-[#fffae9] mb-6 text-[48px]" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7), 0 0 8px rgba(0, 0, 0, 0.3)' }}>
              {tourTitle}
            </h2>
            
            {/* Lead Copy */}
            <p className=" text-base md:text-lg text-[#fffae9]/90 mb-8 leading-relaxed max-w-[70ch]" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.6)' }}>
              {tourDesc}
            </p>
            
            {/* CTA Button - Outline on Dark */}
            <motion.button
              onClick={() => onNavigate(ctaLink)}
              className="px-8 h-12 border-2 border-[#fffae9] text-[#fffae9]  font-bold cursor-pointer hover: transition-all focus:outline-none focus:ring-2 focus:ring-[#FABA1E] focus:ring-offset-2 focus:ring-offset-[#1a5336] w-full md:w-auto"
              aria-label={ctaText}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {ctaText}
            </motion.button>
          </motion.div>
        </div>

        {/* Mobile: Additional Overlay for Contrast (if needed) */}
        <div 
          className="absolute inset-0 bg-black/20 md:hidden pointer-events-none"
          aria-hidden="true"
        />
      </div>
    </motion.section>
  );
}