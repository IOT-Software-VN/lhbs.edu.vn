import { motion } from 'motion/react'
import { useState } from 'react'
import { campusData } from '../constants'
import { CampusCard } from './campus-card'
import { cn } from '@/lib/utils'

interface CampusInfoSectionProps {
  onNavigate?: (path: string) => void
}

export function CampusInfoSection({ onNavigate }: CampusInfoSectionProps) {
  const [activePreschool, setActivePreschool] = useState<number>(0)

  const highSchool = campusData[0]
  const preschools = campusData.slice(1)

  return (
    <section className='w-full py-12 md:py-24 bg-white relative overflow-hidden'>
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-[0.02]'>
        <div
          className='absolute inset-0'
          style={{
            backgroundImage: `radial-gradient(circle at 20px 20px, var(--color-brand-green) 2px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className='container mx-auto px-4 md:px-8 relative z-10 space-y-16 md:space-y-24'>
        {/* ========== PHẦN 1: TRƯỜNG PHỔ THÔNG ========== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Title */}
          <div className='flex flex-col items-center text-center mb-8 md:mb-12'>
            <div className='bg-brand-gold w-16 h-1 md:w-20 md:h-1.5 mb-4 md:mb-6 rounded-full shadow-[0_0_15px_rgba(250,186,30,0.4)]' />
            <p className='text-brand-gold text-sm md:text-base uppercase tracking-[0.15em] mb-3'>Bậc Phổ thông</p>
            <h2 className='font-black uppercase tracking-tight drop-shadow-2xl text-[28px] leading-tight md:text-[40px] md:leading-tight lg:text-[48px] text-brand-green'>
              {highSchool.shortName}
            </h2>
          </div>

          {/* Campus Info Split Layout */}
          <CampusCard campus={highSchool} />
        </motion.div>

        {/* ========== PHẦN 2: HỆ THỐNG MẦM NON ========== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Title */}
          <div className='flex flex-col items-center text-center mb-8 md:mb-12'>
            <div className='bg-brand-gold w-16 h-1 md:w-20 md:h-1.5 mb-4 md:mb-6 rounded-full shadow-[0_0_15px_rgba(250,186,30,0.4)]' />
            <p className='text-brand-gold text-sm md:text-base uppercase tracking-[0.15em] mb-3'>
              Hệ thống Mầm non - {preschools.length} cơ sở
            </p>
            <h2 className='font-black uppercase tracking-tight drop-shadow-2xl text-[28px] leading-tight md:text-[40px] md:leading-tight lg:text-[48px] text-brand-green'>
              Trường Mầm non Song ngữ Lạc Hồng
            </h2>
          </div>

          {/* Tabs cho 3 cơ sở mầm non */}
          <div className='flex justify-center mb-8 md:mb-12'>
            <div className='inline-flex flex-wrap justify-center gap-2 p-2 bg-gray-100 rounded-full'>
              {preschools.map((campus, index) => (
                <button
                  key={campus.id}
                  onClick={() => setActivePreschool(index)}
                  className={cn(
                    'px-5 md:px-8 py-2.5 md:py-3 rounded-full text-xs md:text-sm font-bold tracking-wider transition-all duration-300',
                    activePreschool === index
                      ? 'bg-brand-green text-white shadow-lg scale-105'
                      : 'bg-transparent text-brand-green hover:bg-white'
                  )}
                >
                  {campus.shortName}
                </button>
              ))}
            </div>
          </div>

          {/* Display selected preschool */}
          <CampusCard campus={preschools[activePreschool]} />
        </motion.div>
      </div>
    </section>
  )
}
