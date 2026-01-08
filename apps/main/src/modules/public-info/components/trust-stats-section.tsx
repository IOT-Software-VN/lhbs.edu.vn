'use client'

import { motion, useInView, animate } from 'motion/react'
import { useRef, useEffect } from 'react'
import { Calendar, Users, GraduationCap, Award } from 'lucide-react'
import { TRUST_STATISTICS } from '../constants'

const ICONS = {
  calendar: Calendar,
  users: Users,
  graduation: GraduationCap,
  award: Award
} as const

function RollingNumber({ value, isPercentage = false }: { value: string; isPercentage?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: false, margin: '-50px' })

  const numericValue = parseInt(value.replace(/[^0-9]/g, '')) || 0
  const hasComma = value.includes(',')

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (isInView) {
      const controls = animate(0, numericValue, {
        duration: 2.5,
        ease: 'circOut',
        onUpdate(val) {
          const rounded = Math.round(val)
          const formatted = hasComma ? rounded.toLocaleString('en-US') : rounded.toString()
          node.textContent = isPercentage ? `${formatted}%` : formatted
        }
      })
      return () => controls.stop()
    } else {
      node.textContent = isPercentage ? '0%' : '0'
    }
  }, [isInView, numericValue, isPercentage, hasComma])

  return (
    <span ref={ref} className='tabular-nums'>
      {isPercentage ? '0%' : '0'}
    </span>
  )
}

export function TrustStatsSection() {
  return (
    <section className='relative w-full py-16 md:py-20 bg-brand-green overflow-hidden'>
      {/* Background Effects */}
      <div className='absolute inset-0 bg-linear-to-b from-black/10 via-transparent to-black/10 pointer-events-none' />
      <div className='absolute top-0 right-0 w-[400px] h-[400px] bg-brand-gold rounded-full blur-[120px] opacity-[0.08] -mr-[200px] -mt-[200px] pointer-events-none' />
      <div className='absolute bottom-0 left-0 w-[300px] h-[300px] bg-white rounded-full blur-[100px] opacity-[0.05] -ml-[150px] -mb-[150px] pointer-events-none' />

      {/* Subtle Pattern */}
      <div className='absolute inset-0 bg-[radial-gradient(#faba1e_0.5px,transparent_0.5px)] bg-size-[40px_40px] opacity-[0.03] pointer-events-none' />

      <div className='container mx-auto px-4 md:px-8 lg:px-16 relative z-10'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-12'
        >
          <div className='bg-brand-gold w-16 h-1 md:w-20 md:h-1.5 mb-4 rounded-full shadow-[0_0_15px_rgba(250,186,30,0.4)] mx-auto' />
          <p className='text-brand-gold text-sm md:text-base uppercase tracking-[0.15em] mb-3 font-bold'>
            Minh bạch & Uy tín
          </p>
          <h2 className='text-2xl md:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight'>
            Con số tự hào
          </h2>
        </motion.div>

        {/* Statistics Grid */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8'>
          {TRUST_STATISTICS.map((stat, index) => {
            const Icon = ICONS[stat.icon]
            const isPercentage = stat.id === 'graduation-rate'

            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className='relative flex flex-col items-center text-center group'
              >
                {/* Icon Container */}
                <div className='w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-brand-gold/10 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:bg-brand-gold/20 transition-colors duration-300'>
                  <Icon className='w-7 h-7 md:w-8 md:h-8 text-brand-gold' />
                </div>

                {/* Number */}
                <div className='text-4xl md:text-5xl lg:text-6xl font-black text-brand-gold mb-2 drop-shadow-[0_4px_10px_rgba(250,186,30,0.3)]'>
                  <RollingNumber value={stat.value} isPercentage={isPercentage} />
                  {isPercentage && <span>%</span>}
                </div>

                {/* Label */}
                <p className='text-white/80 text-sm md:text-base font-medium uppercase tracking-wider'>{stat.label}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
