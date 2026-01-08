'use client'

import { motion } from 'motion/react'
import { Download, Calendar, FileText, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import { ANNUAL_REPORTS } from '../constants'

export function FeaturedReportSection() {
  const featuredReport = ANNUAL_REPORTS.find((report) => report.featured) || ANNUAL_REPORTS[0]

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = featuredReport.pdfUrl
    link.download = featuredReport.title + '.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleViewOnline = () => {
    window.open(featuredReport.pdfUrl, '_blank')
  }

  return (
    <section className='relative w-full py-16 md:py-24 bg-white overflow-hidden'>
      {/* Subtle Background Pattern */}
      <div className='absolute inset-0 opacity-[0.02]'>
        <div
          className='absolute inset-0'
          style={{
            backgroundImage: `radial-gradient(circle at 20px 20px, var(--color-lhbs-green) 2px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className='container mx-auto px-4 md:px-8 lg:px-16 relative z-10'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='flex flex-col items-start mb-10 md:mb-14'
        >
          <div className='bg-brand-gold w-12 h-1 md:w-16 md:h-1.5 mb-4 rounded-full shadow-[0_0_15px_rgba(250,186,30,0.4)]' />
          <p className='text-brand-gold text-sm md:text-base uppercase tracking-[0.15em] mb-2 font-bold'>
            Báo cáo thường niên
          </p>
          <h2 className='text-2xl md:text-4xl lg:text-5xl font-black text-brand-green uppercase tracking-tight'>
            Năm học {featuredReport.year}
          </h2>
        </motion.div>

        {/* Featured Report Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center'
        >
          {/* Report Preview/Thumbnail */}
          <div className='relative group order-2 lg:order-1'>
            <div className='absolute -inset-4 bg-linear-to-r from-brand-gold/20 via-brand-green/10 to-brand-gold/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500' />

            <div className='relative bg-linear-to-br from-brand-green to-brand-green-dark rounded-2xl p-6 md:p-8 shadow-2xl overflow-hidden'>
              {/* Decorative Elements */}
              <div className='absolute top-0 right-0 w-40 h-40 bg-brand-gold/10 rounded-full -mr-20 -mt-20' />
              <div className='absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full -ml-16 -mb-16' />

              {/* Report Icon & Badge */}
              <div className='relative z-10'>
                <div className='flex items-center gap-3 mb-6'>
                  <div className='w-12 h-12 bg-brand-gold rounded-xl flex items-center justify-center shadow-lg'>
                    <FileText className='w-6 h-6 text-brand-green' />
                  </div>
                  <span className='px-3 py-1 bg-brand-gold text-brand-green text-xs font-black rounded-full uppercase tracking-wider'>
                    Mới nhất
                  </span>
                </div>

                {/* Report Cover Placeholder */}
                <div className='relative aspect-[3/4] max-h-[400px] bg-white/10 rounded-xl overflow-hidden mb-6 border border-white/20'>
                  {featuredReport.thumbnailUrl ? (
                    <Image src={featuredReport.thumbnailUrl} alt={featuredReport.title} fill className='object-cover' />
                  ) : (
                    <div className='absolute inset-0 flex flex-col items-center justify-center p-6 text-center'>
                      <div className='w-20 h-20 bg-brand-gold/20 rounded-2xl flex items-center justify-center mb-4'>
                        <FileText className='w-10 h-10 text-brand-gold' />
                      </div>
                      <p className='text-white font-bold text-lg mb-2'>Báo cáo thường niên</p>
                      <p className='text-white/70 text-sm'>{featuredReport.year}</p>
                    </div>
                  )}
                </div>

                {/* Meta Info */}
                <div className='flex items-center gap-4 text-white/70 text-sm'>
                  <div className='flex items-center gap-2'>
                    <Calendar className='w-4 h-4 text-brand-gold' />
                    <span>{featuredReport.publishDate}</span>
                  </div>
                  <div className='w-px h-4 bg-white/30' />
                  <span>{featuredReport.fileSize}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Report Info & Actions */}
          <div className='order-1 lg:order-2'>
            <h3 className='text-xl md:text-2xl lg:text-3xl font-bold text-brand-green mb-4 leading-tight'>
              {featuredReport.title}
            </h3>

            <p className='text-gray-600 text-base md:text-lg leading-relaxed mb-8'>{featuredReport.description}</p>

            {/* Key Highlights */}
            <div className='space-y-3 mb-8'>
              {['Tổng quan hoạt động giáo dục', 'Thành tích học sinh nổi bật', 'Kế hoạch phát triển tương lai'].map(
                (item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className='flex items-center gap-3'
                  >
                    <div className='w-2 h-2 bg-brand-gold rounded-full' />
                    <span className='text-gray-700 font-medium'>{item}</span>
                  </motion.div>
                )
              )}
            </div>

            {/* Action Buttons */}
            <div className='flex flex-col sm:flex-row gap-3'>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleDownload}
                className='flex items-center justify-center gap-2 px-6 py-3 bg-brand-green hover:bg-brand-green-dark text-white font-bold rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl'
              >
                <Download className='w-5 h-5' />
                <span>Tải xuống PDF</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleViewOnline}
                className='flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-brand-green text-brand-green font-bold rounded-full hover:bg-brand-green/5 transition-colors duration-300'
              >
                <ExternalLink className='w-5 h-5' />
                <span>Xem trực tuyến</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
