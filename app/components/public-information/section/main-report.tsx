import { motion } from 'motion/react'
import { Download, FileText, Calendar, FileCheck, ExternalLink } from 'lucide-react'
import { annualReports } from '../mock-data'

export default function MainReportSection() {
  const featuredReport = annualReports.find(report => report.featured) || annualReports[0]
  
  // Convert Google Drive link to embed format
  const embedUrl = 'https://drive.google.com/file/d/1VqB7ZCmRUQFG2zu5Ucv35mqUR76N5kFf/preview'

  const handleDownload = () => {
    window.open(featuredReport.pdfUrl, '_blank')
  }

  const handleOpenFullscreen = () => {
    window.open(embedUrl.replace('/preview', '/view'), '_blank')
  }

  return (
    <section className='w-full py-12 md:py-20 bg-white relative overflow-hidden'>
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-[0.03]'>
        <div className='absolute inset-0' style={{
          backgroundImage: `radial-gradient(circle at 20px 20px, #1e5338 2px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className='w-full px-4 md:px-6 lg:px-8 relative z-10'>
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='flex flex-col items-center text-center mb-8 md:mb-12'
        >
          <div className='bg-[#faba1e] w-16 h-1 md:w-20 md:h-1.5 mb-4 md:mb-6 rounded-full shadow-[0_0_15px_rgba(250,186,30,0.4)]' />
          <p className='text-[#faba1e] text-sm md:text-base uppercase tracking-[0.15em] mb-3'>
            Báo cáo chính thức
          </p>
          <h2 className='font-black uppercase tracking-tight drop-shadow-2xl text-[28px] leading-tight md:text-[40px] md:leading-tight lg:text-[48px] text-[#1e5338]'>
            Báo cáo thường niên
          </h2>
        </motion.div>

        {/* Title & Meta Info Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className='max-w-7xl mx-auto mb-6 md:mb-8'
        >
          <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-4 md:p-6 bg-gradient-to-r from-[#1e5338] to-[#00602f] rounded-2xl'>
            <div className='flex items-center gap-4'>
              <div className='flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center'>
                <FileText className='w-6 h-6 md:w-7 md:h-7 text-white' />
              </div>
              <div>
                <div className='flex items-center gap-2 mb-1'>
                  <span className='px-3 py-1 bg-[#faba1e] text-[#1e5338] text-xs font-black rounded-full uppercase'>
                    Mới nhất
                  </span>
                  <span className='text-white/80 text-xs md:text-sm'>
                    {featuredReport.year}
                  </span>
                </div>
                <h3 className='text-lg md:text-xl lg:text-2xl font-bold text-white leading-tight'>
                  {featuredReport.title}
                </h3>
              </div>
            </div>
            
            <div className='flex gap-3'>
              <button
                onClick={handleOpenFullscreen}
                className='flex items-center gap-2 px-4 md:px-6 py-2.5 md:py-3 bg-white/20 hover:bg-white/30 text-white font-bold text-sm rounded-full transition-all duration-300'
              >
                <ExternalLink className='w-4 h-4' />
                <span className='hidden sm:inline'>Mở rộng</span>
              </button>
              <button
                onClick={handleDownload}
                className='flex items-center gap-2 px-4 md:px-6 py-2.5 md:py-3 bg-[#faba1e] hover:bg-[#e5a812] text-[#1e5338] font-bold text-sm rounded-full transition-all duration-300'
              >
                <Download className='w-4 h-4' />
                <span>Tải xuống</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* PDF Viewer - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='max-w-7xl mx-auto'
        >
          <div className='relative w-full bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)]'>
            {/* PDF Embed */}
            <div className='relative w-full' style={{ height: 'calc(100vh - 200px)', minHeight: '600px' }}>
              <iframe
                src={embedUrl}
                className='absolute inset-0 w-full h-full'
                title={featuredReport.title}
                allow='autoplay'
              />
            </div>
          </div>

          {/* Info Footer */}
          <div className='mt-6 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-600'>
            <div className='flex items-center gap-2'>
              <Calendar className='w-4 h-4 text-[#faba1e]' />
              <span>Công bố: <strong>{featuredReport.publishDate}</strong></span>
            </div>
            <div className='hidden sm:block w-px h-4 bg-gray-300' />
            <div className='flex items-center gap-2'>
              <FileCheck className='w-4 h-4 text-[#faba1e]' />
              <span>Kích thước: <strong>{featuredReport.fileSize}</strong></span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
