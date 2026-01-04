import { TheLHBSEdge } from '../components'
import { SubPageHero } from '@/components/common/sub-page-hero'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { TestimonialQuoteSection } from '@/components/common/testimonial-quote-section'
import { TESTIMONIALS } from '@/components/common/testimonials-data'
import { MILESTONE_BREADCRUMB_ITEMS } from '../constants'

export function MilestonePage() {
  return (
    <>
      <SubPageHero
        title='CỘT MỐC ĐÁNG NHỚ'
        subtitle='Hành trình vươn tầm xuất sắc của LHBS'
        backgroundImage='https://lhbs.edu.vn/wp-content/uploads/2025/02/IMG_8910.jpg'
      />

      {/* Breadcrumb Section */}
      <div className='w-full bg-[#013b1d] pt-12 pb-4 md:pt-20 md:pb-6 relative z-10'>
        <div className='container mx-auto px-4 md:px-8 lg:px-12'>
          <Breadcrumb
            textClassName='text-white '
            activeTextClassName='text-white font-medium'
            separatorClassName='text-white'
            items={MILESTONE_BREADCRUMB_ITEMS}
          />
        </div>
      </div>

      <TheLHBSEdge />
      <TestimonialQuoteSection testimonials={TESTIMONIALS} />
    </>
  )
}
