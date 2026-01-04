import Image from 'next/image'
import { motion } from 'motion/react'
import { CheckCircle2, ChevronRight, Star } from 'lucide-react'
import { schoolData } from '../constants'
import { SchoolLevel } from '../types'
import { SchoolIcon } from './school-icon'

const cardlhbs = '/images/base/card-lhbs.png'

interface LevelCardProps {
  level: SchoolLevel
  onNavigate: (path: string) => void
}

export function LevelCard({ level, onNavigate }: LevelCardProps) {
  return (
    <motion.div
      key={level}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className='relative w-full overflow-hidden rounded-[2.5rem] bg-linear-to-br from-[#006b3d] to-[#004d2c] shadow-2xl group min-h-[500px]'
    >
      {/* Background Effects */}
      <div className='absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold rounded-full blur-[120px] opacity-[0.15] -mr-32 -mt-32 pointer-events-none' />
      <div className='absolute bottom-0 left-0 w-[400px] h-[400px] bg-white rounded-full blur-[100px] opacity-[0.08] -ml-20 -mb-20 pointer-events-none' />

      {/* Logo Watermark */}
      <Image
        src={cardlhbs}
        alt='LHBS Logo'
        width={600}
        height={600}
        className='absolute bottom-0 right-0 w-auto h-32 md:h-56 object-contain opacity-10 pointer-events-none translate-x-[10%] translate-y-[10%] z-0'
      />

      <div className='relative z-10 p-8 md:p-12 lg:p-16 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
        {/* Left Column: Core Info */}
        <div className='space-y-8'>
          <div>
            <div className='inline-flex items-center gap-2 px-4 py-1.5 bg-brand-gold/20 border border-brand-gold/30 rounded-full text-brand-gold text-xs font-bold uppercase tracking-widest backdrop-blur-sm mb-6 shadow-inner'>
              <SchoolIcon level={level} />
              <span>{schoolData[level].grade}</span>
            </div>
            <h2 className='text-3xl md:text-5xl font-bold text-white mb-6 leading-tight'>{schoolData[level].title}</h2>
            <p className='text-lg text-white/90 leading-relaxed font-light text-justify'>
              {schoolData[level].description}
            </p>
          </div>

          <button
            onClick={() => onNavigate(schoolData[level].link)}
            className='group/btn inline-flex items-center gap-3 px-8 py-3.5 bg-white text-lhbs-green-dark font-bold text-sm uppercase tracking-widest rounded-full hover:bg-brand-gold hover:text-[#003820] transition-all duration-300 shadow-lg hover:shadow-brand-gold/30'
          >
            Tìm hiểu chi tiết
            <ChevronRight className='w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform' />
          </button>
        </div>

        {/* Right Column: Competencies */}
        <div className='bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-8 shadow-2xl relative z-10'>
          <div className='flex items-center gap-3 mb-6'>
            <div className='p-2 bg-brand-gold/20 rounded-lg text-brand-gold'>
              <Star className='w-5 h-5 fill-current' />
            </div>
            <h3 className='text-lg font-bold text-white uppercase tracking-wider'>Khung năng lực cốt lõi</h3>
          </div>

          <ul className='space-y-4'>
            {schoolData[level].competencies.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + index * 0.1 }}
                className='flex items-start gap-4 group/item'
              >
                <div className='mt-1 p-0.5 rounded-full bg-brand-gold/20 text-brand-gold group-hover/item:bg-brand-gold group-hover/item:text-[#004d2c] transition-colors'>
                  <CheckCircle2 className='w-4 h-4' />
                </div>
                <span className='text-white/90 text-sm md:text-base font-medium leading-normal'>{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}
