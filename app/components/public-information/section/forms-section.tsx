import { motion } from 'motion/react'
import { Download, FileText, Clock } from 'lucide-react'
import { useState } from 'react'
import { formDocuments, formCategories } from '../mock-data'
import { cn } from '@/lib/utils'
import PdfSimpleViewer from '../../shared-ui/pdf-viewer/PdfSimpleViewer'

export default function FormsSection() {
  const [activeCategory, setActiveCategory] = useState<string>('admission')

  const handleDownload = (pdfUrl: string) => {
    window.open(pdfUrl, '_blank')
  }

  const filteredForms = formDocuments.filter(form => form.category === activeCategory)

  return (
    <section className='w-full py-12 md:py-24 bg-white relative overflow-hidden'>
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-[0.03]'>
        <div className='absolute inset-0' style={{
          backgroundImage: `radial-gradient(circle at 20px 20px, #1e5338 2px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
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
          <div className='bg-[#faba1e] w-16 h-1 md:w-20 md:h-1.5 mb-4 md:mb-6 rounded-full shadow-[0_0_15px_rgba(250,186,30,0.4)]' />
          <p className='text-[#faba1e] text-sm md:text-base uppercase tracking-[0.15em] mb-3'>
            Biểu mẫu & Tài liệu
          </p>
          <h2 className='font-black uppercase tracking-tight drop-shadow-2xl text-[28px] leading-tight md:text-[40px] md:leading-tight lg:text-[48px] text-[#1e5338]'>
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
                  'flex items-center gap-2 px-4 md:px-6 py-2.5 md:py-3 rounded-full text-xs md:text-sm font-bold tracking-wider transition-all duration-300',
                  activeCategory === category.id
                    ? 'bg-[#1e5338] text-white shadow-lg scale-105'
                    : 'bg-transparent text-[#1e5338] hover:bg-gray-50'
                )}
              >
                <span className='text-lg'>{category.icon}</span>
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
          className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto'
        >
          {filteredForms.map((form, index) => (
            <motion.div
              key={form.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className='bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_50px_rgba(0,0,0,0.12)] transition-all duration-500 hover:-translate-y-2 h-full flex flex-col'>

                {/* Header */}
                <div className='bg-gradient-to-r from-lhbs-green to-lhbs-green-dark p-5 md:p-6 relative overflow-hidden'>
                  <div className='absolute top-0 right-0 w-32 h-32 bg-lhbs-yellow opacity-10 rounded-full -mr-16 -mt-16' />
                  <div className='relative z-10 flex items-start gap-4'>
                    <div className='flex-shrink-0 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center'>
                      <FileText className='w-6 h-6 text-white' />
                    </div>
                    <div className='flex-1'>
                      <h3 className='text-lg md:text-xl font-bold text-white leading-tight mb-1'>
                        {form.name}
                      </h3>
                      <div className='flex items-center gap-2 text-xs text-white/80'>
                        <Clock className='w-3 h-3' />
                        <span>Cập nhật: {form.lastUpdate}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className='p-5 md:p-6 flex-1 flex flex-col'>

                  {/* PDF Preview */}
                  <div className="mb-4 rounded-lg overflow-hidden border border-gray-100 shadow-sm">
                    <PdfSimpleViewer file={form.pdfUrl} height={200} />
                  </div>

                  <p className='text-sm md:text-base text-gray-600 leading-relaxed mb-4 flex-1'>
                    {form.description}
                  </p>

                  <div className='flex items-center justify-between mb-4 pt-4 border-t border-gray-100'>
                    <span className='text-sm text-gray-500 font-medium'>
                      Kích thước: {form.fileSize}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className='flex gap-3'>
                    <button
                      onClick={() => handleDownload(form.pdfUrl)}
                      className='flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-lhbs-yellow hover:bg-[#e5a812] text-lhbs-green font-bold text-sm md:text-base rounded-full transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg'
                    >
                      <Download className='w-4 h-4' />
                      <span>Tải xuống PDF</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredForms.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className='text-center py-12'
          >
            <FileText className='w-16 h-16 text-gray-300 mx-auto mb-4' />
            <p className='text-gray-500 text-lg'>
              Chưa có biểu mẫu nào trong danh mục này
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
