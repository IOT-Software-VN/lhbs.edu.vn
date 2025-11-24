import { motion, useScroll, useTransform } from 'motion/react';
import { useEffect, useState } from 'react';

interface ScrollIndicatorProps {
  targetSectionId?: string;
}

export function ScrollIndicator({ targetSectionId = 'solid-education-section' }: ScrollIndicatorProps) {
  const [isVisible, setIsVisible] = useState(true);
  const { scrollYProgress } = useScroll();
  
  const handleScrollClick = () => {
    const targetElement = document.getElementById(targetSectionId);
    if (targetElement) {
      // Get the current scroll position
      const currentScrollY = window.scrollY;
      const targetScrollY = targetElement.offsetTop;
      const distance = Math.abs(targetScrollY - currentScrollY);
      
      // Calculate duration based on distance for smoother animation
      const duration = Math.min(Math.max(distance / 3, 800), 1500);
      
      // Smooth scroll with custom easing
      const startTime = performance.now();
      const startScrollY = currentScrollY;
      
      const animateScroll = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation (easeInOutCubic)
        const easeProgress = progress < 0.5 
          ? 4 * progress * progress * progress 
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;
        
        const currentPosition = startScrollY + (targetScrollY - startScrollY) * easeProgress;
        window.scrollTo(0, currentPosition);
        
        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        }
      };
      
      requestAnimationFrame(animateScroll);
    }
  };

  // Monitor scroll to hide/show the component immediately
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (value) => {
      if (value > 0.02) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      onClick={handleScrollClick}
    >
      {/* Outer rotating circle with dotted border */}
      <div className="relative w-42 h-42 flex items-center justify-center">
        {/* Rotating dotted circle border */}
        <motion.svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 80 80"
          fill="none"
          animate={{ rotate: 360 }}
          transition={{
            duration: 8,
            ease: "linear",
            repeat: Infinity
          }}
        >
          <circle
            cx="40"
            cy="40"
            r="35"
            stroke="white"
            strokeWidth="1"
            strokeDasharray="1 1"
            fill="none"
            opacity="0.8"
          />
        </motion.svg>

        {/* Inner content area - stays stationary */}
        <div className="relative w-12 h-12 rounded-full flex items-center justify-center">
          {/* SCROLL text */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <span className="text-white text-[10px] font-[600] tracking-wider uppercase">
              SCROLL
            </span>
          </div>

          {/* Down arrow using external SVG */}
          <motion.img
            src="https://www.nordangliaeducation.com/static/assets/icons/scroll_arrow.svg"
            alt="Scroll down"
            className="w-11 h-11 filter brightness-0 invert"
            animate={{ y: [0, 3, 0] }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity
            }}
          />
        </div>
      </div>

      {/* Subtle glow effect */}
      <div className="absolute inset-0 w-20 h-20 rounded-full bg-white/5 blur-xl -z-10" />
    </motion.div>
  );
}