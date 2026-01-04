'use client'

import { motion } from 'motion/react'
import { FileText } from 'lucide-react'
import { useState } from 'react'
import { formDocuments, formCategories } from '../constants'
import { cn } from '@/lib/utils'
import { FormCard } from './form-card'

export function FormsSection() {
  const [activeCategory, setActiveCategory] = useState<string>('admission')
  const [failedIframes, setFailedIframes] = useState<Set<string>>(new Set())

  const handleDownload = (pdfUrl: string) => {
    window.open(pdfUrl, '_blank')
  }

  const handleIframeError = (formId: string) => {
    setFailedIframes((prev) => new Set(prev).add(formId))
  }

  const filteredForms = formDocuments.filter((form) => form.category === activeCategory)

  return (
    <section className='w-full py-12 md:py-24 bg-white relative overflow-hidden'>
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-[0.03]'>
        <div
          className='absolute inset-0'
          style={{
            backgroundImage: `radial-gradient(circle at 20px 20px, #1e5338 2px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className='container mx-auto px-4 md:px-8 relative z-10'>
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='flex flex-col items-center text-center mb-12 md:mb-16'
        >
          <div className='bg-brand-gold w-16 h-1 md:w-20 md:h-1.5 mb-4 md:mb-6 rounded-full shadow-[0_0_15px_rgba(250,186,30,0.4)]' />
          <p className='text-brand-gold text-sm md:text-base uppercase tracking-[0.15em] mb-3'>Biểu mẫu & Tài liệu</p>
          <h2 className='font-black uppercase tracking-tight drop-shadow-2xl text-[28px] leading-tight md:text-[40px] md:leading-tight lg:text-[48px] text-brand-green'>
            Biểu mẫu cho phụ huynh
          </h2>
          <p className='text-base md:text-lg text-gray-600 mt-4 max-w-2xl'>
            Tải xuống các biểu mẫu cần thiết cho các thủ tục liên quan đến học sinh
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='flex justify-center mb-12 md:mb-16'
        >
          <div className='inline-flex flex-wrap justify-center gap-2 md:gap-3 p-2 bg-white rounded-full border-2 border-gray-200 shadow-lg'>
            {formCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  'px-4 md:px-6 py-2.5 md:py-3 rounded-full text-xs md:text-sm font-bold tracking-wider transition-all duration-300',
                  activeCategory === category.id
                    ? 'bg-brand-green text-white shadow-lg scale-105'
                    : 'bg-transparent text-brand-green hover:bg-gray-50'
                )}
              >
                <span>{category.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Forms Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5'
        >
          {filteredForms.map((form, index) => (
            <FormCard
              key={form.id}
              form={form}
              index={index}
              failedIframes={failedIframes}
              onIframeError={handleIframeError}
              onDownload={handleDownload}
            />
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredForms.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='text-center py-12'>
            <FileText className='w-16 h-16 text-gray-300 mx-auto mb-4' />
            <p className='text-gray-500 text-lg'>Chưa có biểu mẫu nào trong danh mục này</p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
