import { useState } from 'react'
import { SCHOOL_LEVELS } from '@/components/home-page/mock-data'
import { motion, AnimatePresence } from 'motion/react'

export default function EducationLevel() {
  const [activeIndex, setActiveIndex] = useState(0) // Always one active

  return (
    <section id='solid-education-level' className='w-full h-screen flex overflow-hidden relative bg-[#050505]'>
      {/* 
        Flex Layout logic:
        - Active item: ~60% width
        - Inactive items: Share remaining ~40%
      */}
      {SCHOOL_LEVELS.map((item, index) => {
        const isActive = index === activeIndex
        // Active: 60%, Others: 40% / (N-1)
        const widthPercentage = isActive ? '60%' : `${40 / (SCHOOL_LEVELS.length - 1)}%`

        return (
          <div
            key={item.id}
            onMouseEnter={() => setActiveIndex(index)}
            className={`
              relative h-full transition-[flex-basis] duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]
              flex flex-col justify-end overflow-hidden group cursor-pointer 
              border-l first:border-l-0 border-white/10
            `}
            style={{ flexBasis: widthPercentage }}
          >
            {/* Background Image with Continuous Ken Burns Effect */}
            <div className='absolute inset-0 overflow-hidden'>
              <motion.div
                className={`
                  absolute inset-0 bg-cover bg-center will-change-transform
                  ${isActive ? '' : 'grayscale-[30%] group-hover:grayscale-0 transition-all duration-500'}
                `}
                style={{ backgroundImage: `url(${item.image})` }}
                animate={{ scale: [1, 1.15] }}
                transition={{
                  duration: 20,
                  ease: 'linear',
                  repeat: Infinity,
                  repeatType: 'reverse'
                }}
              />
              {/* Overlay */}
              <div
                className={`
                  absolute inset-0 bg-black/30 transition-all duration-700
                  ${isActive ? 'opacity-30' : 'opacity-60 group-hover:opacity-40'}
                `}
              />
              {/* Gradient */}
              <div
                className={`
                  absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent 
                  transition-all duration-500
                  ${isActive ? 'h-[80%] opacity-100' : 'h-[60%] opacity-90'}
                `}
              />
            </div>

            {/* Vertical Title (Collapsed State) */}
            <AnimatePresence>
              {!isActive && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.5 } }}
                  exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
                  className={`
                  absolute inset-0 flex flex-col items-center justify-end pb-12 pointer-events-none
                `}
                >
                  <div className='flex flex-col items-center gap-6 mb-8'>
                    {/* Vertical Line */}
                    <div className='w-px h-24 bg-white/70' />

                    <h2
                      className='
                        text-3xl md:text-5xl font-black text-white uppercase tracking-widest whitespace-nowrap
                        [writing-mode:vertical-rl] rotate-180 drop-shadow-2xl
                      '
                      style={{ textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}
                    >
                      {item.subtitle || item.title}
                    </h2>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Expanded Content (Active State) */}
            <AnimatePresence mode='wait'>
              {isActive && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
                  className='relative z-10 px-8 md:px-12 lg:px-16 py-12 md:py-16 flex flex-col justify-end h-full w-full max-w-[90%] md:max-w-4xl'
                >
                  {/* Top Accent */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: 120 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className='h-2 bg-[#FABA1E] mb-10'
                  />

                  {/* Title */}
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
                    className='text-5xl md:text-6xl lg:text-8xl font-black text-white mb-8 leading-[0.8] drop-shadow-2xl origin-bottom'
                  >
                    {item.title}
                  </motion.h3>

                  <div className='space-y-6 mb-12 max-w-2xl'>
                    {item.descriptions.map((line, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                        className='flex items-start'
                      >
                        <span className='text-[#FABA1E] mr-4 mt-2 text-xl'>•</span>
                        <p className='text-white/90 text-sm md:text-xl font-medium leading-relaxed drop-shadow-lg'>
                          {line}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className='flex flex-wrap gap-4'
                  >
                    {index === 0 ? (
                      <>
                        <a
                          href='https://bh-galaxykg-lhbs-iotsoftvn-com.vercel.app/'
                          target='_blank'
                          rel='noreferrer'
                          className='px-10 py-5 bg-[#FABA1E] text-[#1E5338] font-bold rounded-sm hover:bg-white transition-all uppercase tracking-widest text-sm shadow-2xl hover:-translate-y-1 block md:inline-block text-center w-full md:w-auto'
                        >
                          Bien Hoa
                        </a>
                        <a
                          href='https://lk-galaxykg-lhbs-iotsoftvn-com.vercel.app/'
                          target='_blank'
                          rel='noreferrer'
                          className='px-10 py-5 bg-[#FABA1E] text-[#1E5338] font-bold rounded-sm hover:bg-white transition-all uppercase tracking-widest text-sm shadow-2xl hover:-translate-y-1 block md:inline-block text-center w-full md:w-auto'
                        >
                          Long Khanh
                        </a>
                      </>
                    ) : (
                      <a
                        href={item.learnMoreUrl}
                        target='_blank'
                        rel='noreferrer'
                        className='px-12 py-5 border-2 border-[#FABA1E] text-[#FABA1E] font-bold rounded-sm hover:bg-[#FABA1E] hover:text-[#1E5338] transition-all uppercase tracking-widest text-sm shadow-xl hover:-translate-y-1 block md:inline-block text-center w-full md:w-auto'
                      >
                        Discover More
                      </a>
                    )}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </section>
  )
}
