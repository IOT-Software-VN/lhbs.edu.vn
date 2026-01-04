'use client'

import { motion, useInView } from 'motion/react'
import { useRef, useEffect, useState, useCallback } from 'react'
import Autoplay from 'embla-carousel-autoplay'
import { Carousel, CarouselContent, CarouselItem } from '@lhbs/ui'
import { cn } from '@lhbs/utils'
import { studentAchievementsData } from '../constants'
import { AchievementCard } from './achievement-card'

export function StudentAchievementsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [emblaApi, setEmblaApi] = useState<any>(null)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const autoplayPlugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: false }))

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)

    return () => {
      emblaApi.off('select', onSelect)
      emblaApi.off('reInit', onSelect)
    }
  }, [emblaApi, onSelect])

  const tripleData = [...studentAchievementsData, ...studentAchievementsData, ...studentAchievementsData]

  return (
    <section ref={ref} className='relative py-20 pb-32 overflow-hidden bg-[#01482a]'>
      {/* Background */}
      <div className='absolute inset-0 bg-[#01482a] z-0' />

      {/* SVG Definitions for Clip Paths */}
      <svg width='0' height='0' className='absolute'>
        <defs>
          {/* Main Card Shield Shape */}
          <clipPath id='big-shield-clip' clipPathUnits='objectBoundingBox'>
            <path d='M0,0.05 C0.3,0 0.7,0 1,0.05 V0.55 C1,0.8 0.5,1 0.5,1 C0.5,1 0,0.8 0,0.55 Z' />
          </clipPath>
          {/* Inner Photo Shield Shape */}
          <clipPath id='inner-shield-clip' clipPathUnits='objectBoundingBox'>
            <path d='M0.5,0 L1,0.15 V0.6 C1,0.85 0.5,1 0.5,1 C0.5,1 0,0.85 0,0.6 V0.15 Z' />
          </clipPath>
        </defs>
      </svg>

      {/* Title Section */}
      <div className='relative z-20 w-full px-6 mb-8 flex flex-col items-center'>
        <motion.div
          className='text-center'
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className='bg-brand-gold w-12 h-1 md:w-16 md:h-1.5 mb-4 rounded-full shadow-[0_0_15px_rgba(250,186,30,0.4)] mx-auto' />
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight drop-shadow-lg mb-3'>
            Thành tích học sinh
          </h2>
          <p className='text-white/80 text-sm md:text-base max-w-2xl mx-auto'>
            Tự hào với những thành tích xuất sắc của các em học sinh LHBS
          </p>
        </motion.div>
      </div>

      {/* Carousel Section */}
      <div className='relative w-full z-10 my-4'>
        {/* Horizontal Strip Background */}
        <div className='absolute top-1/2 left-0 w-full h-[280px] md:h-80 -translate-y-[45%] bg-[#006b3d] shadow-inner border-y border-brand-gold/20 z-0' />

        <Carousel
          setApi={setEmblaApi}
          plugins={[autoplayPlugin.current]}
          opts={{
            loop: true,
            align: 'center',
            containScroll: false,
            startIndex: studentAchievementsData.length
          }}
          className='w-full z-10'
        >
          <CarouselContent className='-ml-4 md:-ml-8 items-center py-10'>
            {tripleData.map((achievement, index) => {
              const isActive = index === selectedIndex
              const relativeIndex = index % studentAchievementsData.length

              return (
                <CarouselItem
                  key={`${achievement.id}-${index}`}
                  className='pl-4 md:pl-8 basis-[85%] md:basis-[45%] lg:basis-[30%] flex justify-center'
                >
                  <div
                    className={cn(
                      'relative h-[550px] md:h-[620px] transition-all duration-700',
                      isActive ? 'scale-105 z-20' : 'scale-90 opacity-60 grayscale-[0.8] z-0'
                    )}
                  >
                    <AchievementCard achievement={achievement} isActive={isActive} index={relativeIndex} />
                  </div>
                </CarouselItem>
              )
            })}
          </CarouselContent>
        </Carousel>

        {/* Pagination Dots */}
        <div className='flex gap-3 justify-center mt-8 md:mt-12'>
          {studentAchievementsData.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index + studentAchievementsData.length)}
              className={cn(
                'w-3 h-3 rounded-full transition-all duration-300',
                selectedIndex % studentAchievementsData.length === index
                  ? 'bg-brand-gold w-8'
                  : 'bg-white/30 hover:bg-white/50 cursor-pointer'
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
