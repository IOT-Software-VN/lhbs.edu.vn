import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { schoolData } from '../constants'
import { type SchoolLevel } from '../types'
import { TimelineNavigation } from './timeline-navigation'
import { LevelCard } from './level-card'

interface OverviewSectionProps {
  onNavigate: (path: string) => void
}

export function OverviewSection({ onNavigate }: OverviewSectionProps) {
  const [activeTab, setActiveTab] = useState<SchoolLevel>('preschool')

  return (
    <section id='overview' className='py-20 md:py-32 bg-white overflow-hidden relative'>
      {/* Background Decoration */}
      <div className='absolute top-0 right-0 w-1/3 h-1/3 bg-linear-to-b from-brand-gold/5 to-transparent rounded-bl-full -z-10' />

      <div className='max-w-screen-2xl mx-auto px-6 md:px-12'>
        {/* Title Section */}
        <div className='flex flex-col items-center mb-16 md:mb-20 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className='bg-brand-gold w-12 h-1 md:w-16 md:h-1.5 mb-4 rounded-full shadow-[0_0_15px_rgba(250,186,30,0.4)] mx-auto' />
            <h2 className='text-sm md:text-base font-bold text-brand-gold uppercase tracking-[0.2em] mb-3'>
              Lộ trình liền mạch
            </h2>
            <h1
              className='text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight 
            bg-linear-to-r from-[#006b3d] to-[#004d2c] 
            bg-clip-text text-transparent 
            inline-block uppercase 
            drop-shadow-sm'
            >
              TỔNG QUAN CHƯƠNG TRÌNH
            </h1>
            <p className='mt-6 text-gray-600 max-w-3xl mx-auto text-base md:text-lg leading-relaxed'>
              Hệ thống giáo dục LHBS cung cấp lộ trình đào tạo khép kín từ Mầm non đến Trung học Phổ thông, đảm bảo sự
              phát triển liên tục và bền vững cho từng học sinh.
            </p>
          </motion.div>
        </div>

        {/* Timeline Navigation */}
        <TimelineNavigation activeTab={activeTab} onTabChange={setActiveTab} />

        {/* REDESIGNED CONTENT SECTION: Single Premium Card */}
        <div className='max-w-6xl mx-auto relative'>
          <AnimatePresence mode='wait'>
            <LevelCard level={activeTab} onNavigate={onNavigate} />
          </AnimatePresence>

          {/* Bottom Row: Trust Indicators / Certificates (Dynamic) */}
          <div className='mt-16 border-t border-gray-100 pt-10'>
            <h4 className='text-center text-sm font-bold text-gray-400 uppercase tracking-widest mb-8'>
              Chương trình & Chứng chỉ
            </h4>
            <div className='flex flex-wrap justify-center gap-8 md:gap-16'>
              {schoolData[activeTab].certificates.map((cert, idx) => (
                <div key={idx} className='flex flex-col items-center gap-2 group cursor-default'>
                  <div className='p-4 bg-gray-50 rounded-2xl text-gray-400 group-hover:text-[#006b3d] group-hover:bg-[#006b3d]/10 transition-all duration-300 scale-100 group-hover:scale-110 shadow-sm group-hover:shadow-md border border-transparent group-hover:border-[#006b3d]/20'>
                    <cert.icon className='w-8 h-8 md:w-10 md:h-10' />
                  </div>
                  <span className='text-xs md:text-sm font-bold text-gray-500 text-center max-w-[120px] group-hover:text-lhbs-green-dark transition-colors'>
                    {cert.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
