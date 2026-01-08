'use client'

import { motion } from 'motion/react'
import { Download, FileText, Calendar, ExternalLink } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@lhbs/utils'
import { ANNUAL_REPORTS, DOCUMENTS, DOCUMENT_CATEGORIES } from '../constants'
import type { DocumentCategory } from '../types'

export function DocumentsSection() {
  const [activeCategory, setActiveCategory] = useState<DocumentCategory | 'report'>('report')

  const getDocuments = () => {
    if (activeCategory === 'report') {
      // Return non-featured annual reports
      return ANNUAL_REPORTS.filter((r) => !r.featured).map((report) => ({
        id: report.id,
        name: report.title,
        category: 'report' as const,
        description: report.description,
        pdfUrl: report.pdfUrl,
        fileSize: report.fileSize,
        lastUpdate: report.publishDate
      }))
    }
    return DOCUMENTS.filter((doc) => doc.category === activeCategory)
  }

  const filteredDocuments = getDocuments()

  const handleDownload = (pdfUrl: string) => {
    window.open(pdfUrl, '_blank')
  }

  return (
    <section className='relative w-full py-16 md:py-24 bg-white overflow-hidden'>
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-[0.02]'>
        <div
          className='absolute inset-0'
          style={{
            backgroundImage: `radial-gradient(circle at 20px 20px, #1e5338 2px, transparent 0)`,
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
          className='text-center mb-12 md:mb-16'
        >
          <div className='bg-brand-gold w-16 h-1 md:w-20 md:h-1.5 mb-4 rounded-full shadow-[0_0_15px_rgba(250,186,30,0.4)] mx-auto' />
          <p className='text-brand-gold text-sm md:text-base uppercase tracking-[0.15em] mb-3 font-bold'>
            Tài liệu & Biểu mẫu
          </p>
          <h2 className='text-2xl md:text-4xl lg:text-5xl font-black text-brand-green uppercase tracking-tight mb-4'>
            Kho tài liệu
          </h2>
          <p className='text-gray-600 text-base md:text-lg max-w-2xl mx-auto'>
            Truy cập các báo cáo, chính sách và biểu mẫu chính thức của nhà trường
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='flex justify-center mb-10 md:mb-14'
        >
          <div className='inline-flex flex-wrap justify-center gap-2 md:gap-3 p-2 bg-gray-100 rounded-2xl'>
            {DOCUMENT_CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id as DocumentCategory | 'report')}
                className={cn(
                  'px-5 md:px-8 py-3 rounded-xl text-sm md:text-base font-bold tracking-wide transition-all duration-300',
                  activeCategory === category.id
                    ? 'bg-brand-green text-white shadow-lg'
                    : 'bg-transparent text-brand-green hover:bg-white'
                )}
              >
                {category.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Documents Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6'
        >
          {filteredDocuments.map((doc, index) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className='group'
            >
              <div className='bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1 h-full flex flex-col'>
                {/* Header */}
                <div className='bg-linear-to-r from-brand-green to-brand-green-dark p-5 relative overflow-hidden'>
                  <div className='absolute top-0 right-0 w-20 h-20 bg-brand-gold opacity-10 rounded-full -mr-10 -mt-10' />

                  <div className='relative z-10 flex items-start gap-4'>
                    <div className='shrink-0 w-11 h-11 bg-white/15 backdrop-blur-sm rounded-xl flex items-center justify-center'>
                      <FileText className='w-5 h-5 text-white' />
                    </div>
                    <div className='flex-1 min-w-0'>
                      <h3 className='text-base font-bold text-white leading-snug line-clamp-2 min-h-[2.5rem]'>
                        {doc.name}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className='flex-1 flex flex-col p-5'>
                  <p className='text-sm text-gray-600 leading-relaxed mb-4 flex-1 line-clamp-2'>{doc.description}</p>

                  {/* Meta Info */}
                  <div className='flex items-center gap-3 text-xs text-gray-500 mb-4 pb-4 border-b border-gray-100'>
                    <div className='flex items-center gap-1.5'>
                      <Calendar className='w-3.5 h-3.5 text-brand-gold' />
                      <span>{doc.lastUpdate}</span>
                    </div>
                    <span>•</span>
                    <span>{doc.fileSize}</span>
                  </div>

                  {/* Actions */}
                  <div className='flex gap-2'>
                    <button
                      onClick={() => handleDownload(doc.pdfUrl)}
                      className='flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-brand-gold hover:bg-brand-gold-dark text-brand-green font-bold text-sm rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-sm hover:shadow-md'
                    >
                      <Download className='w-4 h-4' />
                      <span>Tải xuống</span>
                    </button>
                    <button
                      onClick={() => handleDownload(doc.pdfUrl)}
                      className='w-11 h-11 flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-xl transition-colors duration-300'
                      title='Xem trực tuyến'
                    >
                      <ExternalLink className='w-4 h-4' />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredDocuments.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='text-center py-16'>
            <div className='w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6'>
              <FileText className='w-10 h-10 text-gray-300' />
            </div>
            <h3 className='text-xl font-bold text-gray-700 mb-2'>Chưa có tài liệu</h3>
            <p className='text-gray-500'>Danh mục này đang được cập nhật. Vui lòng quay lại sau.</p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
