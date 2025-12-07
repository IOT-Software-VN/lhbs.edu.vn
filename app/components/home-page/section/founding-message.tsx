import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { ImQuotesRight } from 'react-icons/im'
import bgAcademicBilingual from '@/images/home-page/section-03-bg.png'
import founderImage from '@/images/home-page/section-03.png'

// ==================== SECTION 2: Founding Message ====================
export default function FoundingMessageSection({ onNavigate }: { onNavigate: (path: string) => void }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section
      id='founding-message-section'
      ref={ref}
      className='w-full min-h-screen bg-[#00602F] flex items-center justify-center relative snap-start font-sans overflow-hidden'
    >
      {/* Background Pattern - Fully Visible */}
      <div
        className='absolute inset-0 z-0'
        style={{
          backgroundImage: `url(${bgAcademicBilingual})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      <div className='w-full max-w-[1920px] mx-auto grid md:grid-cols-2 gap-0 items-stretch relative z-10 min-h-screen'>
        {/* Left: Founder Image */}
        <motion.div
          className='relative w-full h-[50vh] md:h-auto order-2 md:order-1'
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={founderImage}
            alt="The late People's Teacher, Dr. Do Huu Tai - Founder of LHBS"
            className='w-full h-full object-cover object-top'
            loading='lazy'
          />
        </motion.div>

        {/* Right: Content */}
        <motion.div
          className='relative p-8 md:p-16 lg:p-24 flex flex-col justify-center order-1 md:order-2 bg-[#00602F]/90 md:bg-transparent'
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Header Group */}
          <div className='mb-10'>
            <div className='bg-[#FABA1E] w-20 h-1.5 mb-6 rounded-full shadow-[0_0_15px_rgba(250,186,30,0.4)]' />
            <h3 className='text-xl md:text-2xl font-bold text-[#FABA1E] uppercase tracking-[0.2em] mb-4'>
              Founder's Message
            </h3>
            <h2 className='text-4xl md:text-5xl lg:text-7xl font-black text-white uppercase tracking-tight leading-none drop-shadow-2xl'>
              Educational <br /> Philosophy
            </h2>
          </div>

          {/* Quote Icon */}
          <div className='text-[#FABA1E] text-4xl md:text-6xl mb-6 opacity-80'>
            <ImQuotesRight />
          </div>

          {/* Body Copy */}
          <p className='text-white/90 text-lg md:text-xl font-light leading-relaxed mb-10'>
            LHBS is committed to creating a humanistic learning environment that nurtures and educates young generations
            to appreciate Vietnamese heritage and identity while embracing global knowledge, skills, and
            citizenship—contributing positively to themselves, their communities, and society.
          </p>

          {/* Attribution */}
          <div className='mb-12 border-l-4 border-[#FABA1E] pl-6'>
            <p className='text-xl md:text-2xl text-white font-bold uppercase tracking-wide mb-1'>Dr. Do Huu Tai</p>
            <p className='text-sm md:text-base text-[#FABA1E] uppercase tracking-wider font-semibold'>
              The late People's Teacher & Founder of LHBS
            </p>
          </div>

          {/* CTA Button */}
          <div>
            <motion.button
              onClick={() => onNavigate('/our-school/about-us')}
              className='group relative px-10 py-4 bg-[#FABA1E] text-[#1E5338] font-bold text-sm md:text-base uppercase tracking-widest rounded-sm 
                       hover:bg-white transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]'
            >
              <span className='relative z-10'>Learn More</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
