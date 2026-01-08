'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react'

const CONTACT_INFO = [
  {
    icon: Phone,
    label: 'Hotline',
    value: '0251 3 868 868',
    href: 'tel:02513868868'
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@lhbs.edu.vn',
    href: 'mailto:info@lhbs.edu.vn'
  },
  {
    icon: MapPin,
    label: 'Địa chỉ',
    value: 'Phường Thống Nhất, TP. Biên Hòa',
    href: 'https://maps.google.com'
  }
]

export function ContactCtaSection() {
  return (
    <section className='relative w-full py-16 md:py-24 bg-brand-green overflow-hidden'>
      {/* Background Effects */}
      <div className='absolute inset-0 bg-linear-to-br from-black/20 via-transparent to-black/10 pointer-events-none' />
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-gold rounded-full blur-[150px] opacity-[0.08] pointer-events-none' />

      {/* Subtle Pattern */}
      <div className='absolute inset-0 bg-[radial-gradient(#faba1e_0.5px,transparent_0.5px)] bg-size-[40px_40px] opacity-[0.03] pointer-events-none' />

      <div className='container mx-auto px-4 md:px-8 lg:px-16 relative z-10'>
        <div className='max-w-4xl mx-auto text-center'>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='mb-10'
          >
            <div className='bg-brand-gold w-16 h-1 md:w-20 md:h-1.5 mb-4 rounded-full shadow-[0_0_15px_rgba(250,186,30,0.4)] mx-auto' />
            <h2 className='text-2xl md:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight mb-4'>
              Có thắc mắc?
            </h2>
            <p className='text-white/80 text-base md:text-lg max-w-xl mx-auto'>
              Đội ngũ tư vấn của chúng tôi luôn sẵn sàng hỗ trợ và giải đáp mọi thắc mắc của bạn
            </p>
          </motion.div>

          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-10'
          >
            {CONTACT_INFO.map((info, index) => (
              <a
                key={index}
                href={info.href}
                className='group flex items-center gap-4 p-5 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1'
              >
                <div className='w-12 h-12 bg-brand-gold rounded-xl flex items-center justify-center shrink-0'>
                  <info.icon className='w-5 h-5 text-brand-green' />
                </div>
                <div className='text-left'>
                  <p className='text-white/60 text-xs uppercase tracking-wider mb-0.5'>{info.label}</p>
                  <p className='text-white font-bold text-sm md:text-base'>{info.value}</p>
                </div>
              </a>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              href='/#contact'
              className='inline-flex items-center gap-3 px-8 py-4 bg-brand-gold hover:bg-brand-gold-dark text-brand-green font-black rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 text-sm md:text-base uppercase tracking-wide'
            >
              <span>Liên hệ tư vấn ngay</span>
              <ArrowRight className='w-5 h-5' />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
