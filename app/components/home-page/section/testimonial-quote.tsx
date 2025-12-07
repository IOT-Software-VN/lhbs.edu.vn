import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import tour360Bird from '@/images/home-page/section-news/360.png'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Testimonial {
  quote: string
  parentName: string
  parentWork: string
}

interface TestimonialQuoteSectionProps {
  onNavigate: (path: string) => void
}

export function TestimonialQuoteSection({ onNavigate }: TestimonialQuoteSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const testimonials: Testimonial[] = [
    {
      quote:
        'SSIS is not-for-profit. That says so much. All decisions are based on what is best for students and not how much it will cost.',
      parentName: 'STEFAN',
      parentWork: 'SSIS Parent'
    },
    {
      quote:
        'The holistic approach at LHBS develops students for life, building confidence and critical thinking skills.',
      parentName: 'MR. LE VAN DUC',
      parentWork: 'Software Engineer'
    },
    {
      quote: 'LHBS combines international curriculum with Vietnamese values, giving children the best of both worlds.',
      parentName: 'MRS. TRAN THI LAN',
      parentWork: 'Doctor'
    }
  ]

  return (
    <motion.section
      ref={ref}
      // Nền xám nhạt trung tính
      className='py-24 md:py-36 overflow-hidden relative bg-[#f2f2f28d]'
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      {/* --- BACKGROUND LAYER (Chim lạc 360) --- */}
      <div className='absolute -bottom-[2px] -right-[2px] z-10 w-[250px] md:w-[450px] lg:w-[600px] xl:w-[700px] pointer-events-auto transition-transform hover:scale-105 duration-500 origin-bottom-right will-change-transform'>
        <a
          href='https://360.lhu.edu.vn/'
          target='_blank'
          rel='noopener noreferrer'
          className='block w-full h-full relative group outline-none'
        >
          <img
            src={tour360Bird}
            alt='360 Tour Bird'
            className='w-full h-auto object-contain object-bottom-right block'
            style={{ display: 'block' }}
          />
        </a>
      </div>

      {/* --- CONTENT LAYER --- */}
      <div className='w-full px-4 md:px-12 lg:px-20 relative z-20'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='w-full mx-auto max-w-[1400px]'
        >
          <Carousel className='w-full flex items-center relative' opts={{ loop: true }}>
            {/* Nút Previous: Màu #1a5336 */}
            <CarouselPrevious
              className='absolute left-0 lg:-left-12 h-auto w-auto p-2 border-0 bg-transparent shadow-none hover:bg-transparent [&_svg]:size-10 md:[&_svg]:size-12 text-[#1a5336] hover:text-[#1a5336]/70 transition-colors cursor-pointer'
              variant='ghost'
            >
              <ChevronLeft strokeWidth={3} />
            </CarouselPrevious>

            <CarouselContent className='cursor-grab active:cursor-grabbing'>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className='flex flex-col md:flex-row items-start gap-5 md:gap-8 px-8 md:px-16 lg:px-24 py-4'>
                    {/* Icon Quote FontAwesome Solid: Màu #1a5336 */}
                    <div className='shrink-0 pt-1'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 448 512'
                        fill='currentColor'
                        className='w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-[#1a5336]'
                      >
                        <path d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V216z' />
                      </svg>
                    </div>

                    <div className='flex flex-col w-full'>
                      {/* Quote Text: Font Sans (Linear style), Medium weight, Màu #1a5336 */}
                      {/* Thay đổi: font-normal -> font-medium để tạo nét đậm đà hơn */}
                      {/* Thay đổi: text-[#0F2B4C] -> text-[#1a5336] */}
                      <blockquote className='font-sans text-xl md:text-2xl lg:text-[26px] xl:text-[30px] text-[#1a5336] leading-relaxed font-medium tracking-normal'>
                        {testimonial.quote}
                      </blockquote>

                      {/* Author Info */}
                      <div className='mt-6 md:mt-10 w-full flex justify-end items-center gap-2'>
                        <p className='text-[#1a5336] text-sm md:text-base font-bold tracking-wide uppercase'>
                          - {testimonial.parentName}
                          <span className='font-semibold text-[#1a5336] normal-case ml-1'>
                            , {testimonial.parentWork}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Nút Next: Màu #1a5336 */}
            <CarouselNext
              className='absolute right-0 lg:-right-12 h-auto w-auto p-2 border-0 bg-transparent shadow-none hover:bg-transparent [&_svg]:size-10 md:[&_svg]:size-12 text-[#1a5336] hover:text-[#1a5336]/70 transition-colors cursor-pointer'
              variant='ghost'
            >
              <ChevronRight strokeWidth={3} />
            </CarouselNext>
          </Carousel>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default TestimonialQuoteSection
