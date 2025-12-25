import { motion } from 'motion/react'

export default function MissionSection() {
  return (
    <section className='relative w-full bg-[#00602f] font-sans py-16 md:py-24 lg:py-32 overflow-hidden'>
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-10 pointer-events-none'>
        <div className='absolute inset-0' style={{
          backgroundImage: `radial-gradient(circle at 20px 20px, white 2px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Glow Effect */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FDB913]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#FDB913]/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

      <div className='relative w-full max-w-[1200px] mx-auto px-4 md:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Header */}
          <div className="flex flex-col items-center">
            <div className='bg-[#FDB913] w-12 h-1 md:w-16 md:h-1.5 mb-4 rounded-full shadow-[0_0_15px_rgba(253,185,19,0.4)]' />
          </div>

          {/* Main Title 60px */}
          <h2 className='text-[32px] md:text-[48px] lg:text-[60px] font-black text-white uppercase tracking-tight leading-tight md:leading-tight mb-8 md:mb-12 max-w-5xl mx-auto drop-shadow-lg'>
            SỨ MẠNG
          </h2>

          {/* Detailed Description */}
          <div className="max-w-4xl mx-auto space-y-6 text-base md:text-xl text-white/90 font-light leading-relaxed">
            <p>
              Trường Song ngữ Lạc Hồng nuôi dưỡng <span className="font-bold text-[#FDB913]">tinh thần học hỏi suốt đời</span>, bồi dưỡng nhân cách và hình thành bản lĩnh hội nhập thông qua <span className="font-bold text-[#FDB913]">nền giáo dục song ngữ toàn diện</span>, kết hợp hài hòa giá trị văn hóa Việt Nam với tinh hoa giáo dục quốc tế.
            </p>
            <p>
              Nhà trường giúp học sinh phát triển <span className="font-bold text-[#FDB913]">trí tuệ, cảm xúc và năng lực toàn cầu</span> để sống nhân ái, tự tin và đóng góp tích cực cho xã hội.
            </p>
          </div>

          {/* Decorative Element */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-px w-32 md:w-64 bg-gradient-to-r from-transparent via-[#FDB913] to-transparent mx-auto mt-12 md:mt-16 opacity-50"
          />

        </motion.div>
      </div>
    </section>
  )
}
