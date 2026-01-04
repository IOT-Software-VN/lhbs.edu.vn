import Image from 'next/image'
import { motion } from 'motion/react'
import type { StudentAchievement } from '../types'

interface AchievementCardProps {
  achievement: StudentAchievement
  isActive: boolean
  index: number
}

export function AchievementCard({ achievement, isActive, index }: AchievementCardProps) {
  return (
    <div
      className='relative w-full h-full flex items-center justify-center px-4 md:px-8'
      style={{ perspective: '1000px' }}
    >
      <motion.div
        className='relative w-full max-w-xs md:max-w-sm h-auto'
        initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
        animate={
          isActive ? { opacity: 1, scale: 1, rotateY: 0 } : { opacity: 0.4, scale: 0.85, rotateY: index < 2 ? 10 : -10 }
        }
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Main Card Background with Shield Clip */}
        <div
          className='relative bg-linear-to-b from-[#0f5a38] to-[#073a21] shadow-[0_20px_60px_rgba(0,0,0,0.6)]'
          style={{ clipPath: 'url(#big-shield-clip)', aspectRatio: '3/4' }}
        >
          {/* Decorative Gradient Glow */}
          <div
            className='absolute inset-0 bg-linear-to-br from-brand-gold/10 via-transparent to-brand-gold/5 pointer-events-none'
            style={{ clipPath: 'url(#big-shield-clip)' }}
          />

          {/* Content Container */}
          <div className='relative z-10 w-full h-full flex flex-col items-center justify-between py-6 px-4'>
            {/* Logo at Top */}
            <div className='mb-6 relative w-auto h-10 md:h-12'>
              <Image
                src='/images/base/logo-head.png'
                alt='LHBS'
                width={100}
                height={100}
                className='h-full w-auto object-contain'
              />
            </div>

            {/* Center Visual: Inner Shield + Photo */}
            <div className='relative w-40 h-48 md:w-48 md:h-56 mb-auto flex items-center justify-center'>
              {/* Side Wreaths (Green) */}
              <svg
                className='absolute -left-12 top-1/2 -translate-y-1/2 h-[90%] w-auto text-[#0a4a2e] drop-shadow-sm opacity-50'
                viewBox='0 0 50 100'
                fill='currentColor'
              >
                <path d='M40,100 C10,70 0,40 20,0 C30,20 25,60 40,100 Z' />
                <circle cx='10' cy='20' r='5' />
                <circle cx='15' cy='40' r='6' />
                <circle cx='10' cy='60' r='5' />
                <circle cx='20' cy='80' r='4' />
              </svg>
              <svg
                className='absolute -right-12 top-1/2 -translate-y-1/2 h-[90%] w-auto text-[#0a4a2e] drop-shadow-sm opacity-50 scale-x-[-1]'
                viewBox='0 0 50 100'
                fill='currentColor'
              >
                <path d='M40,100 C10,70 0,40 20,0 C30,20 25,60 40,100 Z' />
                <circle cx='10' cy='20' r='5' />
                <circle cx='15' cy='40' r='6' />
                <circle cx='10' cy='60' r='5' />
                <circle cx='20' cy='80' r='4' />
              </svg>

              {/* Inner Photo Container */}
              <div className='relative w-full h-full p-1.5'>
                {/* Photo Mask */}
                <div className='relative w-full h-full bg-white' style={{ clipPath: 'url(#inner-shield-clip)' }}>
                  <Image
                    src={achievement.image}
                    alt={achievement.name}
                    fill
                    className='object-cover object-top'
                    sizes='(max-width: 768px) 100vw, 33vw'
                  />
                </div>
                {/* Photo Border */}
                <svg
                  viewBox='0 0 100 100'
                  className='absolute inset-1.5 w-full h-full pointer-events-none z-20'
                  preserveAspectRatio='none'
                >
                  <path
                    d='M50,0 L100,15 V60 C100,85 50,100 50,100 C50,100 0,85 0,60 V15 Z'
                    fill='none'
                    stroke='#FABA1E'
                    strokeWidth='3'
                    vectorEffect='non-scaling-stroke'
                    className='drop-shadow-md'
                  />
                </svg>
              </div>
            </div>

            {/* Bottom Text */}
            <div className='text-center w-full mt-4 flex flex-col items-center justify-end h-32 md:h-36 pb-4'>
              <p
                className='text-white text-2xl md:text-3xl italic mb-1 drop-shadow-md'
                style={{ fontFamily: '"Great Vibes", cursive' }}
              >
                Chúc mừng
              </p>
              <style>{`@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');`}</style>

              <h3 className='font-black text-brand-gold uppercase leading-[0.9] mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] tracking-wide text-2xl md:text-[28px]'>
                {achievement.name}
              </h3>

              <div className='w-24 h-px bg-linear-to-r from-transparent via-brand-gold to-transparent mb-2 opacity-70' />

              <p className='text-white/90 text-[10px] md:text-xs font-bold uppercase tracking-widest leading-tight line-clamp-2 max-w-[80%] drop-shadow-sm'>
                {achievement.achievement}
              </p>

              <div className='mt-3 text-brand-gold/50 text-[8px] tracking-[0.3em] font-medium uppercase'>
                lhbs.edu.vn
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
