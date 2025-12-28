import { motion } from 'motion/react'
import { Download, FileText, Calendar } from 'lucide-react'
import { annualReports } from '../mock-data'

export default function ArchiveReportsSection() {
  const archiveReports = annualReports.filter(report => !report.featured)

  const handleDownload = (pdfUrl: string) => {
    window.open(pdfUrl, '_blank')
  }

  if (archiveReports.length === 0) return null

  return (
    <section className='w-full py-12 md:py-24 bg-[#f8f9fa] relative overflow-hidden'>
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-[0.02]'>
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
            Lưu trữ
          </p>
          <h2 className='font-black uppercase tracking-tight drop-shadow-2xl text-[28px] leading-tight md:text-[40px] md:leading-tight lg:text-[48px] text-[#1e5338]'>
            Báo cáo các năm trước
          </h2>
        </motion.div>

        {/* Reports Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
          {archiveReports.map((report, index) => (
            <motion.div
              key={report.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className='bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_50px_rgba(0,0,0,0.12)] transition-all duration-500 hover:-translate-y-2 h-full flex flex-col'>
                
                {/* PDF Preview Area */}
                <div className='relative aspect-[4/3] bg-gradient-to-br from-[#1e5338]/5 to-[#00602f]/5 flex items-center justify-center cursor-pointer group'
                     onClick={() => handleDownload(report.pdfUrl)}>
                  <div className='text-center'>
                    <FileText className='w-16 h-16 md:w-20 md:h-20 text-[#1e5338]/30 mx-auto mb-3 group-hover:scale-110 group-hover:text-[#faba1e]/50 transition-all duration-300' />
                    <span className='text-[#1e5338] font-bold text-sm md:text-base group-hover:text-[#faba1e] transition-colors'>
                      Nhấn để xem
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className='p-5 md:p-6 flex-1 flex flex-col'>
                  {/* Year Badge */}
                  <div className='mb-3'>
                    <span className='inline-flex px-4 py-1.5 bg-[#1e5338]/10 text-[#1e5338] text-xs md:text-sm font-black rounded-full'>
                      {report.year}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className='text-lg md:text-xl font-bold text-[#1e5338] mb-3 leading-tight'>
                    {report.title}
                  </h3>

                  {/* Description */}
                  <p className='text-sm md:text-base text-gray-600 leading-relaxed mb-4 flex-1'>
                    {report.description}
                  </p>

                  {/* Meta Info */}
                  <div className='space-y-2 mb-4 pt-4 border-t border-gray-100'>
                    <div className='flex items-center gap-2 text-sm text-gray-500'>
                      <Calendar className='w-4 h-4' />
                      <span>{report.publishDate}</span>
                    </div>
                    <div className='flex items-center gap-2 text-sm text-gray-500'>
                      <FileText className='w-4 h-4' />
                      <span>{report.fileSize}</span>
                    </div>
                  </div>

                  {/* Download Button */}
                  <button
                    onClick={() => handleDownload(report.pdfUrl)}
                    className='w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#1e5338] hover:bg-[#163d2a] text-white font-bold text-sm md:text-base rounded-full transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg'
                  >
                    <Download className='w-4 h-4' />
                    <span>Tải xuống</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
