import { motion } from 'motion/react'

export default function VisionSection() {
  return (
    <section className='relative w-full h-[80vh] min-h-[600px] overflow-hidden font-sans group'>
      {/* Background Image - Full Cover */}
      {/* Background Video - Full Cover */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center transition-transform duration-[20s] group-hover:scale-110"
        >
          <source src="/video/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Overlay Gradient - Darker for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      </div>

      <div className='relative z-10 w-full max-w-[1920px] mx-auto px-4 md:px-12 lg:px-16 h-full flex items-center'>

        {/* Content Card - Overlapping Left */}
        <motion.div
          className='max-w-2xl bg-white/10 backdrop-blur-md border border-white/20 p-8 md:p-12 lg:p-16 rounded-3xl shadow-2xl'
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <div className='flex flex-col items-start mb-6 md:mb-8'>
            <div className='bg-[#FDB913] w-12 h-1 md:w-16 md:h-1.5 mb-4 rounded-full shadow-[0_0_15px_rgba(253,185,19,0.4)]' />
            {/* Main Title 60px */}
            <h2 className='text-[32px] md:text-[48px] lg:text-[60px] font-black text-white uppercase tracking-tight leading-none drop-shadow-md'>
              TẦM NHÌN
            </h2>
          </div>

          {/* Description */}
          <div className='space-y-6 text-base md:text-lg text-white/95 leading-relaxed font-light'>
            <p>
              Trường Song ngữ Lạc Hồng là <span className="font-bold text-[#FDB913]">trường song ngữ hàng đầu tại Đồng Nai</span>, nơi mỗi học sinh được nuôi dưỡng để phát triển toàn diện về trí tuệ, nhân cách và năng lực hội nhập toàn cầu trong thời đại số.
            </p>
            <p>
              Nhà trường gìn giữ và lan tỏa <span className="font-bold text-[#FDB913]">giá trị văn hóa Việt Nam</span>, đồng thời khơi dậy tư duy sáng tạo, tinh thần học tập suốt đời và ý thức trách nhiệm với cộng đồng, giúp học sinh trở thành những <span className="font-bold text-[#FDB913]">công dân nhân ái, tự tin, sáng tạo</span> và thích ứng trong thế giới không ngừng đổi thay.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
