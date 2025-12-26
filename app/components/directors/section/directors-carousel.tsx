import { motion } from 'motion/react'
import { useState } from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { cn } from '@/lib/utils'

// Types
interface Director {
  id: string | number
  image: string
  name: string
  role1: string
  role2?: string
}

const leadershipData: Director[] = [
  {
    id: 1,
    image: 'https://lhbs.edu.vn/wp-content/uploads/2021/06/197923928_1977389272413160_177191815206870043_n-min.jpg',
    name: 'Bà Nguyễn Thị Lan Hương',
    role1: 'Chủ tịch Hội đồng quản trị Công ty TNHH Hương Nguyên',
    role2: 'Chủ đầu tư Trường TH-THCS-THPT Song ngữ Lạc Hồng'
  },
  {
    id: 2,
    image: 'https://lhbs.edu.vn/wp-content/uploads/2021/07/122482938_1797344593750963_7347811336665844878_n.jpg',
    name: 'ThS. Lê Hoàng Bình',
    role1: 'Hiệu trưởng Nhà trường',
    role2: 'Giám đốc Điều hành'
  },
  {
    id: 3,
    image: 'https://lhbs.edu.vn/wp-content/uploads/2021/06/197923928_1977389272413160_177191815206870043_n-min.jpg',
    name: 'Ông Trương Quang Mẫn',
    role1: 'Phó Hiệu trưởng',
    role2: 'Phụ trách Chuyên môn'
  },
  {
    id: 4,
    image: 'https://lhbs.edu.vn/wp-content/uploads/2021/07/122482938_1797344593750963_7347811336665844878_n.jpg',
    name: 'Bà Nguyễn Thị Ngọc',
    role1: 'Giám đốc Tài chính',
    role2: ''
  }
]

const preschoolData: Director[] = [
  {
    id: 'p1',
    image: 'https://lhbs.edu.vn/wp-content/uploads/2021/07/122482938_1797344593750963_7347811336665844878_n.jpg',
    name: 'Cô Nguyễn Thị Hoa',
    role1: 'Hiệu phó Mầm non',
    role2: ''
  },
  {
    id: 'p2',
    image: 'https://lhbs.edu.vn/wp-content/uploads/2021/06/197923928_1977389272413160_177191815206870043_n-min.jpg',
    name: 'Thầy Trần Văn B',
    role1: 'Tổ trưởng chuyên môn',
    role2: ''
  }
]

const highSchoolData: Director[] = [
  {
    id: 'h1',
    image: 'https://lhbs.edu.vn/wp-content/uploads/2021/06/197923928_1977389272413160_177191815206870043_n-min.jpg',
    name: 'Thầy Nguyễn Văn C',
    role1: 'Hiệu phó Phổ thông',
    role2: ''
  },
  {
    id: 'h2',
    image: 'https://lhbs.edu.vn/wp-content/uploads/2021/07/122482938_1797344593750963_7347811336665844878_n.jpg',
    name: 'Cô Lê Thị D',
    role1: 'Tổ trưởng Toán',
    role2: ''
  }
]


type Category = 'leadership' | 'preschool' | 'highschool'

export default function DirectorsCarousel() {
  const [activeCategory, setActiveCategory] = useState<Category>('leadership')

  const getData = () => {
    switch (activeCategory) {
      case 'leadership': return leadershipData
      case 'preschool': return preschoolData
      case 'highschool': return highSchoolData
      default: return leadershipData
    }
  }

  const items = getData()

  return (
    <section className='relative w-full py-20 pb-32 bg-[#FABA1E] overflow-hidden transition-colors duration-500'>
      {/* Background Strip - Restored "UI background nền phía dưới" effect */}
      {/* Using a lighter/white strip to create depth behind the cards, similar to the original green/dark strip */}
      <div className='absolute top-1/2 left-0 w-full h-[280px] md:h-[320px] -translate-y-[40%] bg-white/20 shadow-inner border-y border-white/30 z-0 backdrop-blur-sm' />

      <div className='container mx-auto px-4 md:px-8 max-w-[1400px] relative z-10'>

        {/* TABS */}
        <div className='flex flex-wrap justify-center gap-4 mb-16 relative z-20'>
          {[
            { id: 'leadership', label: 'BAN LÃNH ĐẠO' },
            { id: 'preschool', label: 'MẦM NON' },
            { id: 'highschool', label: 'PHỔ THÔNG' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id as Category)}
              className={cn(
                'px-6 py-3 rounded-full text-sm md:text-base font-bold tracking-wider transition-all duration-300 border-2',
                activeCategory === tab.id
                  ? 'bg-white text-[#FABA1E] border-white shadow-lg scale-105'
                  : 'bg-transparent text-white border-white/50 hover:bg-white/10 hover:border-white'
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* CAROUSEL */}
        <div className='relative px-4 md:px-12'>
          <Carousel
            opts={{
              align: 'start',
              loop: items.length > 4,
            }}
            className='w-full'
          >
            <CarouselContent className='-ml-4 md:-ml-6 py-10'>
              {items.map((item, index) => (
                <CarouselItem
                  key={`${activeCategory}-${item.id}-${index}`}
                  className='pl-4 md:pl-6 sm:basis-1/2 lg:basis-1/4'
                >
                  <div className='group relative h-full'>
                    {/* CARD UI */}
                    <div className={cn(
                      'bg-white rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-500 hover:-translate-y-2',
                      // Restored "Shadow Vàng" effect for items - applied generally to keep style consistent active/inactive
                      'shadow-[0_20px_50px_rgba(200,140,20,0.25)] hover:shadow-[0_30px_60px_rgba(200,140,20,0.4)]'
                    )}>

                      {/* IMAGE */}
                      <div className='relative w-full aspect-[4/5] overflow-hidden'>
                        <img
                          src={item.image}
                          alt={item.name}
                          className='w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110'
                        />
                        {/* Inner Glow Effect - Restored from user request */}
                        <div className='absolute inset-0 shadow-[inset_0_0_40px_rgba(250,186,30,0.3)] pointer-events-none' />
                      </div>

                      {/* CONTENT */}
                      <div className='p-6 flex-1 flex flex-col items-center text-center'>
                        <h3 className='text-lg md:text-xl font-bold text-[#1E5338] mb-3 uppercase leading-tight'>
                          {item.name}
                        </h3>

                        <div className='w-12 h-0.5 bg-[#FABA1E] mb-3 opacity-50' />

                        <p className='text-sm md:text-base text-[#555] font-semibold mb-1 leading-snug'>
                          {item.role1}
                        </p>

                        {item.role2 && (
                          <p className='text-sm md:text-base text-[#777] leading-snug'>
                            {item.role2}
                          </p>
                        )}
                      </div>

                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="left-0 md:-left-4 bg-white/20 hover:bg-white text-white hover:text-[#FABA1E] border-none" />
            <CarouselNext className="right-0 md:-right-4 bg-white/20 hover:bg-white text-white hover:text-[#FABA1E] border-none" />

          </Carousel>
        </div>

      </div>
    </section>
  )
}
