import { motion } from 'motion/react';

interface BVISHeroProps {
  onNavigate: (path: string) => void;
}

export function BVISHero({ onNavigate }: BVISHeroProps) {
  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1696238572906-2a85322d2152?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWxpbmd1YWwlMjBzY2hvb2wlMjBzdHVkZW50cyUyMGNhbXB1c3xlbnwxfHx8fDE3NjMwODQxNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="LHBS campus with students"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dark Overlay - black 20% opacity */}
      <div 
        className="absolute inset-0 z-10 bg-black"
        style={{
          opacity: 0.2
        }}
      />

      {/* Content Container */}
      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left spacer on desktop */}
          <div className="hidden lg:block lg:col-span-1" />
          
          {/* Right Content Column */}
          <motion.div 
            className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center py-12 lg:py-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Small Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-4"
            >
              <span className="font-['Arial'] text-white/90 text-sm md:text-base uppercase tracking-[0.15em]">
                Welcome to
              </span>
            </motion.div>

            {/* Main Title with Highlight */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-6 md:mb-8"
            >
              <h1 className="relative inline-block">
                {/* Highlight Background - LHBS yellow */}
                <span 
                  className="absolute inset-0 -left-3 -right-3 md:-left-4 md:-right-4 -top-1 -bottom-1 bg-[#FABA1E]"
                  style={{ zIndex: -1 }}
                />
                {/* Text - 40px mobile, 48px tablet, 64px desktop */}
                <span 
                  className="relative font-['Crimson_Pro'] text-[#1a5336] leading-tight px-3 md:px-4" 
                  style={{ 
                    fontSize: '48px',
                    lineHeight: '1.24'
                  }}
                >
                  Lac Hong Bilingual School
                </span>
              </h1>
            </motion.div>

            {/* Body Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="font-['Lexend_Deca'] text-white text-base md:text-lg leading-relaxed mb-8 md:mb-10 max-w-[600px]"
            >
              Lac Hong Bilingual School (LHBS) is a Vietnamese-owned independent school established in 2009, 
              providing high-quality education from kindergarten through grade 12. We nurture young minds with 
              a solid foundation of Vietnamese values while fostering global perspectives, preparing students 
              to become confident, compassionate, and capable citizens of the world.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <button
                onClick={() => onNavigate('/admissions')}
                className="px-8 md:px-10 h-12 bg-[#FABA1E] text-[#1a5336] font-['Arial'] font-bold uppercase text-sm md:text-base tracking-wider hover:bg-[#e5a812] transition-all focus:outline-none focus:ring-2 focus:ring-[#FABA1E] focus:ring-offset-2 focus:ring-offset-transparent"
              >
                Enquire Now
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}