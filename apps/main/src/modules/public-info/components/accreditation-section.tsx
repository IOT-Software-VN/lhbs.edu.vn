'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import { ACCREDITATIONS } from '../constants'

export function AccreditationSection() {
  return (
    <section className='relative w-full py-16 md:py-20 bg-gray-50 overflow-hidden'>
      {/* Background Effects */}
      <div className='absolute top-0 left-0 right-0 h-32 bg-linear-to-b from-white to-transparent pointer-events-none' />
      <div className='absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-white to-transparent pointer-events-none' />

      <div className='container mx-auto px-4 md:px-8 lg:px-16 relative z-10'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-12 md:mb-16'
        >
          <div className='bg-brand-gold w-16 h-1 md:w-20 md:h-1.5 mb-4 rounded-full shadow-[0_0_15px_rgba(250,186,30,0.4)] mx-auto' />
          <p className='text-brand-gold text-sm md:text-base uppercase tracking-[0.15em] mb-3 font-bold'>
            Chứng nhận & Kiểm định
          </p>
          <h2 className='text-2xl md:text-4xl lg:text-5xl font-black text-brand-green uppercase tracking-tight mb-4'>
            Được công nhận bởi
          </h2>
          <p className='text-gray-600 text-base md:text-lg max-w-2xl mx-auto'>
            Trường Song ngữ Lạc Hồng tự hào được công nhận và kiểm định bởi các tổ chức giáo dục uy tín
          </p>
        </motion.div>

        {/* Accreditation Logos Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto'>
          {ACCREDITATIONS.map((accreditation, index) => (
            <motion.div
              key={accreditation.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='group'
            >
              <div className='relative bg-white rounded-2xl p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 text-center h-full flex flex-col items-center justify-center border border-gray-100'>
                {/* Logo Container */}
                <div className='relative w-24 h-24 md:w-32 md:h-32 mb-4 grayscale group-hover:grayscale-0 transition-all duration-500'>
                  <Image
                    src={accreditation.logoUrl}
                    alt={accreditation.name}
                    fill
                    className='object-contain'
                    onError={(e) => {
                      // Fallback to placeholder if image fails
                      const target = e.target as HTMLImageElement
                      target.src = '/images/base/placeholder.png'
                    }}
                  />
                </div>

                {/* Name & Description */}
                <h3 className='text-base md:text-lg font-bold text-brand-green mb-2'>{accreditation.name}</h3>
                {accreditation.description && (
                  <p className='text-gray-500 text-sm leading-relaxed'>{accreditation.description}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
