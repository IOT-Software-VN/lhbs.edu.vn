import { motion } from 'motion/react'

export default function WelcomeSection() {
    return (
        <section className='w-full h-screen snap-start bg-white flex items-center'>
            <div className='container mx-auto px-4 md:px-8 lg:px-12'>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className='max-w-4xl mx-auto text-center'
                >
                    {/* Decorative Top Line */}
                    <div className='flex justify-center mb-8 md:mb-12'>
                        <div className='bg-[#FDB913] w-16 h-1 rounded-full' />
                    </div>

                    {/* Content */}
                    <p className='text-lg md:text-2xl lg:text-3xl text-[#1E5338] font-light leading-relaxed md:leading-relaxed lg:leading-relaxed'>
                        Trường Song ngữ Lạc Hồng cam kết kiến tạo một <span className='font-bold text-[#FDB913]'>môi trường học tập</span> - nơi nuôi dưỡng, hướng dẫn và giáo dục thế hệ trẻ biết <span className='font-bold text-[#FDB913]'>trân trọng cội nguồn và bản sắc dân tộc Việt Nam</span>, sẵn sàng <span className='font-bold text-[#FDB913]'>hội nhập quốc tế</span> với kiến thức, kỹ năng và phẩm chất <span className='font-bold text-[#FDB913]'>công dân toàn cầu</span>, mang đến những thay đổi tích cực trong tương lai cho bản thân và cộng đồng
                    </p>

                    {/* Optional decorative bottom */}
                    <div className='mt-8 md:mt-12 opacity-30'>
                        <div className='w-1.5 h-1.5 bg-[#1E5338] rounded-full mx-auto mb-2' />
                        <div className='w-1 h-32 bg-gradient-to-b from-[#1E5338] to-transparent mx-auto' />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
