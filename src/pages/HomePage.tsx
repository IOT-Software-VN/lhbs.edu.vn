import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { BVISHero } from '../components/BVISHero';
import { AcademicExcellenceSection } from '../components/AcademicExcellenceSection';
import { BookTourCTA } from '../components/BookTourCTA';
import { EducationPillarsSection } from '../components/EducationPillarsSection';
import { LHBSLifeVideoSection } from '../components/LHBSLifeVideoSection';
import { AcademicBilingualSection } from '../components/AcademicBilingualSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { NewsEventsSection } from '../components/NewsEventsSection';
import { LetsBeginCTA } from '../components/LetsBeginCTA';
import { Footer } from '../components/Footer';
import heroImage from '../assets/hero-01.jpg';
import founderImage from '../assets/hero-01.jpg';
import founderPortrait from '../assets/Section-03.png';
import educationImage from '../assets/hero-01.jpg';
import items01 from '../assets/items-01.png';
import items02 from '../assets/items-02.png';
import items03 from '../assets/items-03.png';
import anniversaryImage from '../assets/anyver.png';


export function HomePage({ onNavigate }: { onNavigate: (path: string) => void }) {
  const [showPillarModal, setShowPillarModal] = useState<number | null>(null);
  
  return (
    <div className="relative bg-[#fffae9]">
      {/* Hero Section - Full-width BVIS style */}
      <BVISHero onNavigate={onNavigate} />
      
      {/* Section 1: Solid Education Foundation */}
      <SolidEducationSection onNavigate={onNavigate} />
      
      {/* Section 2: Founding Message */}
      <FoundingMessageSection onNavigate={onNavigate} />

       {/* Section 2.5: 15 Years Anniversary */}
      <AnniversarySection onNavigate={onNavigate} />
      
      {/* Section 3: LHBS UNIQUE Education Pillars */}
      <EducationPillarsSection />
      
      {/* Pillar Modal */}
      {showPillarModal !== null && (
        <PillarModal pillarIndex={showPillarModal} onClose={() => setShowPillarModal(null)} />
      )}
      
      {/* Section 4: LHBS Life Video */}
      <LHBSLifeVideoSection />
      
      {/* Section 5: Academic & Bilingual Identity */}
      <AcademicBilingualSection onNavigate={onNavigate} />
      
      {/* Section 6: Book a School Tour CTA */}
      <BookTourCTA onNavigate={onNavigate} />
      
      {/* Section 7: What Our Community Says */}
      <TestimonialsSection />
      
      {/* Section 8: News & Events */}
      <NewsEventsSection onNavigate={onNavigate} />
      
      {/* Section 9: Let's Begin CTA */}
      <LetsBeginCTA onNavigate={onNavigate} />
    </div>
  );
}

// ==================== SECTION 1: Solid Education Foundation ====================
function SolidEducationSection({ onNavigate }: { onNavigate: (path: string) => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const educationLevels = [
    { label: 'Galaxy KG+', link: '/academics/kindergarten' },
    { label: 'LHBS Primary School +', link: '/academics/primary' },
    { label: 'LHBS Secondary School +', link: '/academics/lower-secondary' },
    { label: 'LHBS High School +', link: '/academics/upper-secondary' }
  ];

  return (
    <motion.section
      ref={ref}
      className="relative py-24 px-4 md:px-20 max-w-[1440px] mx-auto bg-[#fffae9] overflow-hidden"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      {/* Decorative icon motif - bottom left */}
      <div 
        className="absolute bottom-8 left-8 text-9xl text-[#1a5336] opacity-[0.08] pointer-events-none select-none"
        aria-hidden="true"
      >
        🎓
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left: Text Content - 6 columns */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Title - Green background only on "Solid education" */}
          <h2 
            className=" text-[#1a5336] mb-6"
            style={{ fontSize: '48px', lineHeight: '1.24' }}
          >
            <span className="text-[#1a5336] bg-[#FABA1E] px-2 inline-block">
              Solid education
            </span>
            <span className="block mt-2">
              foundation to Future
            </span>
          </h2>
          
          {/* Body copy */}
          <p className=" text-base md:text-lg text-[#212121] mb-8 leading-relaxed max-w-[70ch]">
            At LHBS, we believe that a strong educational foundation is the cornerstone of lifelong success. 
            Our comprehensive programs span from early childhood through high school, providing a seamless journey 
            of bilingual excellence. Each stage is carefully designed to build upon the previous, ensuring students 
            develop critical thinking, cultural awareness, and global competence. We integrate Vietnamese heritage 
            with international standards, preparing young minds not just for academic achievement, but for meaningful 
            contribution to society.
          </p>
          
          {/* Education levels list */}
          <div className="space-y-3">
            {educationLevels.map((level, index) => (
              <EducationLevelItem
                key={index}
                label={level.label}
                link={level.link}
                onNavigate={onNavigate}
                delay={index * 0.1}
                isInView={isInView}
              />
            ))}
          </div>
        </motion.div>
        
        {/* Right: Image - 6 columns */}
        <motion.div
          className="relative h-[500px] md:h-[600px] overflow-hidden"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <img
            src={educationImage}
            alt="Students engaged in hands-on learning activities with educational materials"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}

// Education Level Item Component
interface EducationLevelItemProps {
  label: string;
  link: string;
  onNavigate: (path: string) => void;
  delay: number;
  isInView: boolean;
}

function EducationLevelItem({ label, link, onNavigate, delay, isInView }: EducationLevelItemProps) {
  return (
    <motion.button
      onClick={() => onNavigate(link)}
      className="w-full flex items-center justify-between px-4 md:px-6 h-[52px] md:h-[56px] border border-[#1a5336] text-left cursor-pointer hover:bg-[#fffae9]/60 transition-all group focus:outline-none focus:ring-2 focus:ring-[#FABA1E] focus:ring-offset-2"
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.6 + delay }}
      whileHover={{ borderColor: '#14432b' }}
    >
      <span className=" text-lg md:text-xl text-[#1a5336]">
        {label}
      </span>
      <motion.svg 
        className="w-5 h-5 text-[#1a5336]" 
        fill="none" 
        viewBox="0 0 24 24"
        initial={{ x: 0 }}
        whileHover={{ x: 2 }}
        transition={{ duration: 0.2 }}
      >
        <path 
          d="M9 6L15 12L9 18" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
      </motion.svg>
    </motion.button>
  );
}

// ==================== SECTION 2: Founding Message ====================
function FoundingMessageSection({ onNavigate }: { onNavigate: (path: string) => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.section
      ref={ref}
      className="py-24 px-4 md:px-20 max-w-[1440px] mx-auto"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
    >
      <div className="grid md:grid-cols-2 gap-16 items-stretch">
        {/* Left: Portrait Image - 6 columns */}
        <motion.div
          className="relative h-[500px] md:h-auto overflow-hidden order-2 md:order-1"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={founderPortrait}
            alt="The late People's Teacher, Dr. Do Huu Tai - Founder of LHBS"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
        
        {/* Right: Content with Green Background - 6 columns */}
        <motion.div
          className="relative bg-[#1a5336] p-8 md:p-12 flex flex-col justify-center order-1 md:order-2"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Decorative quote mark */}
          <div className="text-[#fffae9] text-6xl md:text-7xl mb-4 leading-none font-serif opacity-40">
            "
          </div>
          
          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#fffae9] mb-6">
            For ourself, our community, and our society
          </h2>
          
          {/* Body copy */}
          <p className="text-base md:text-lg text-[#fffae9]/90 mb-8 leading-relaxed">
            LHBS is committed to creating a humanistic learning environment that nurtures and educates young generations to appreciate Vietnamese heritage and identity while embracing global knowledge, skills, and citizenship—contributing positively to themselves, their communities, and society.
          </p>
          
          {/* Attribution */}
          <div className="mb-8">
            <p className=" text-sm md:text-base text-[#fffae9] font-semibold mb-1">
              The late People's Teacher, Dr. Do Huu Tai
            </p>
            <p className=" text-xs md:text-sm text-[#fffae9]/70">
              Founder of Lac Hong Bilingual Primary - Secondary - High School
            </p>
          </div>
          
          {/* CTA Button */}
          <div>
            <motion.button
              onClick={() => onNavigate('/our-school/leadership')}
              className="px-8 h-12 border-2 border-[#fffae9] text-[#fffae9]  font-bold cursor-pointer hover:bg-[#fffae9] hover:text-[#1a5336] transition-colors w-full md:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              LEARN MORE
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

// ==================== SECTION 2.5: 15 Years Anniversary ====================
function AnniversarySection({ onNavigate }: { onNavigate: (path: string) => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.section
      ref={ref}
      className="py-24 px-4 md:px-20 max-w-[1440px] mx-auto bg-[#fffae9]"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
    >
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Left: Anniversary Image - 6 columns */}
        <motion.div
          className="relative h-[500px] md:h-[600px] overflow-hidden"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={anniversaryImage}
            alt="Student holding trophy celebrating 15 years of LHBS excellence"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
        
        {/* Right: Content - 6 columns */}
        <motion.div
          className="relative flex flex-col justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Title with highlight */}
          <h2 className="font-['SVN-Gotham'] text-3xl md:text-4xl lg:text-5xl text-[#1a5336] mb-6 leading-tight">
            15 years{' '}
            <span 
              className="relative inline-block px-2 bg-[#FABA1E]"
            >
              and continuing
            </span>
            {' '}to educate
          </h2>
          
          {/* Body copy - 3 paragraphs */}
          <div className="space-y-4 mb-8">
            <p className=" text-base md:text-lg text-[#212121] leading-relaxed">
              Founded in 2011, Lac Hong Bilingual School offers a modern education to unlock students' potential through innovative methods.
            </p>
            
            <p className=" text-base md:text-lg text-[#212121] leading-relaxed">
              We celebrate each student's unique dreams and talents, providing a Learning Pathways that builds a foundation in academics, 21st-century skills, English proficiency, and values, fostering Global Citizens.
            </p>
            
            <p className=" text-base md:text-lg text-[#212121] leading-relaxed">
              Our transparent international learning pathways address parental concerns, guiding students to success and future leadership roles.
            </p>
          </div>
          
          {/* CTA Button */}
          <div>
            <motion.button
              onClick={() => onNavigate('/our-school/about-us')}
              className="px-8 h-12 bg-[#FABA1E] text-[#1a5336]  font-bold cursor-pointer hover:bg-[#e5a812] transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn more
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}


// ==================== PILLAR MODAL ====================
function PillarModal({ pillarIndex, onClose }: { pillarIndex: number; onClose: () => void }) {
  const pillars = [
    {
      title: 'Academic Excellence',
      icon: '🎓',
      description: 'We provide a rigorous, engaging curriculum that challenges students to think deeply, ask questions, and develop a genuine passion for learning across all disciplines.',
      points: [
        'International curriculum standards',
        'Personalized learning approaches',
        'Critical thinking development',
        'Research-based methodologies'
      ]
    },
    {
      title: 'Truly Bilingual',
      icon: '🌏',
      description: 'Our bilingual program seamlessly integrates Vietnamese and English, enabling students to think, communicate, and excel in both languages naturally.',
      points: [
        'Balanced Vietnamese-English instruction',
        'Native-speaking teachers',
        'Cultural integration',
        'Language immersion approach'
      ]
    },
    {
      title: 'International Curiosity',
      icon: '🔍',
      description: 'We foster a spirit of inquiry and exploration, encouraging students to discover, question, and understand the world around them.',
      points: [
        'Project-based learning',
        'Global perspectives',
        'Scientific exploration',
        'Creative problem-solving'
      ]
    },
    {
      title: 'Global Mindset',
      icon: '🌐',
      description: 'Students develop cultural awareness, international perspectives, and the skills to thrive in an interconnected world.',
      points: [
        'Cross-cultural competence',
        'International partnerships',
        'Study abroad opportunities',
        'Global citizenship values'
      ]
    },
    {
      title: 'Engaged Citizenship',
      icon: '🤝',
      description: 'We cultivate responsible, compassionate citizens who contribute positively to their communities and society.',
      points: [
        'Community service programs',
        'Leadership development',
        'Social responsibility',
        'Environmental stewardship'
      ]
    }
  ];

  const pillar = pillars[pillarIndex];

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        initial={{ scale: 0.9, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 50 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-4">
              <div className="text-6xl">{pillar.icon}</div>
              <h2 className=" text-4xl text-[#1a5336]">{pillar.title}</h2>
            </div>
            <button
              onClick={onClose}
              className="text-3xl text-[#666] hover:text-[#1a5336] transition-colors"
            >
              ×
            </button>
          </div>
          
          <p className=" text-lg text-[#212121] mb-6 leading-relaxed">
            {pillar.description}
          </p>
          
          <h3 className=" text-2xl text-[#1a5336] mb-4">Key Features:</h3>
          <ul className="space-y-3 mb-8">
            {pillar.points.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-[#FABA1E] text-xl">✓</span>
                <span className=" text-[#212121]">{point}</span>
              </li>
            ))}
          </ul>
          
          <button
            onClick={onClose}
            className="w-full px-8 py-4 bg-[#1a5336] text-white  font-bold hover:bg-[#14432b] transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}