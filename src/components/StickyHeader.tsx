import { motion } from 'motion/react';
import { Search, Menu, X } from 'lucide-react';
import { siteNavigation } from '../types/navigation';
import logoImage from '../assets/logo-lhbs-02.png';
interface StickyHeaderProps {
  scrolled: boolean;
  onMenuClick: () => void;
  onMenuClose: () => void;
  onLogoClick: () => void;
  onEnquireClick: () => void;
  menuOpen: boolean;
}

export function StickyHeader({ scrolled, onMenuClick, onMenuClose, onLogoClick, onEnquireClick, menuOpen }: StickyHeaderProps) {
  // Determine if header should be transparent (at top with menu closed)
  const isTransparent = !scrolled && !menuOpen;
  
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{ height: '72px' }}
      initial={{ y: 0 }}
      animate={{ 
        backgroundColor: isTransparent ? 'rgba(26, 83, 54, 0)' : 'rgba(26, 83, 54, 0.98)',
        backdropFilter: isTransparent ? 'blur(0px)' : 'blur(10px)'
      }}
    >
      <div className="h-full max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between gap-8 py-4">
        {/* Logo - Left */}
        <motion.button
          onClick={onLogoClick}
          className="flex-shrink-0 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#FABA1E] focus:ring-offset-2 focus:ring-offset-[#1a5336]"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          aria-label="Go to homepage"
        >
         <img 
              src={logoImage} 
              alt="LHBS - Lac Hong Bilingual School" 
              className="h-16 w-auto"
            />
        </motion.button>
        
        {/* Right - Actions */}
        <div className="flex items-center gap-3">
          {/* Primary CTA Button - Apply Now */}
          <motion.button
            onClick={onEnquireClick}
            className="rounded-full flex items-center justify-center px-6 h-12 bg-[#FABA1E] text-[#1a5336]  font-bold uppercase text-sm tracking-wider hover:bg-[#e5a812] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FABA1E] focus:ring-offset-2 focus:ring-offset-[#1a5336]"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Apply Now
          </motion.button>

          {/* Menu Icon */}
          <motion.button
            onClick={menuOpen ? onMenuClose : onMenuClick}
            className="p-2 text-white hover:text-[#FABA1E] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FABA1E] focus:ring-offset-2 focus:ring-offset-[#1a5336]"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
}