import Image from 'next/image'
import { motion, AnimatePresence } from 'motion/react'
import { Play, Pause, VolumeX } from 'lucide-react'
import type { CoreValue } from '../types'

interface CoreValueDisplayProps {
  value: CoreValue
  activeTab: number
}

export function CoreValueDisplay({ value, activeTab }: CoreValueDisplayProps) {
  return (
    <div className='flex flex-col gap-8 md:gap-10'>
      {/* Top Row: Image & Tabs */}
      <div className='flex-1 w-full lg:w-[75%]'>
        <AnimatePresence mode='wait'>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.4 }}
          >
            {/* Video/Image Container */}
            <div className='relative w-full aspect-video md:aspect-21/9 lg:aspect-21/9 overflow-hidden shadow-2xl bg-black/20 group'>
              <Image
                src={value.image}
                alt={value.title}
                fill
                className='object-cover transition-transform duration-700 group-hover:scale-105'
              />
              <div className='absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-60' />

              {/* Play Button */}
              <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <div className='w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/50 cursor-pointer hover:bg-white/30 hover:scale-110 transition-all'>
                  <Play className='w-8 h-8 text-white ml-1' fill='white' />
                </div>
              </div>

              {/* Controls (Visual only) */}
              <div className='absolute bottom-4 right-6 flex gap-3'>
                <div className='p-2 rounded-full bg-black/40 backdrop-blur-md text-white/80 hover:text-white cursor-pointer'>
                  <Pause className='w-5 h-5' />
                </div>
                <div className='p-2 rounded-full bg-black/40 backdrop-blur-md text-white/80 hover:text-white cursor-pointer'>
                  <VolumeX className='w-5 h-5' />
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Row: Text Description */}
      <div className='w-full lg:w-[75%]'>
        <AnimatePresence mode='wait'>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.4 }}
          >
            <div>
              <h3 className='text-2xl md:text-3xl font-black uppercase mb-3 text-lhbs-yellow'>{value.title}</h3>
              <p className='text-base md:text-lg font-light leading-relaxed text-white/90 max-w-4xl'>
                {value.description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
