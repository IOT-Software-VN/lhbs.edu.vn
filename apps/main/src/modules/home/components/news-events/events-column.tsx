import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import type { EventItem } from '../../types'

interface EventsColumnProps {
  eventItems: EventItem[]
  backgroundImage: string
}

export function EventsColumn({ eventItems, backgroundImage }: EventsColumnProps) {
  return (
    <div className='border-l-4 border-gray-100 pl-4 md:pl-6 flex flex-col relative group/col h-full'>
      <div className='absolute -left-1 top-0 w-1 h-12 bg-brand-gold group-hover/col:h-full transition-all duration-500 ease-in-out'></div>
      <h3 className='text-xl md:text-2xl font-black text-brand-green mb-4 md:mb-6 uppercase tracking-wide shrink-0'>
        Sự kiện
      </h3>

      {/* Main Image Item - Fixed Aspect Ratio */}
      <div className='mb-6 group shrink-0'>
        <Link href={eventItems[0].link} className='block'>
          <div className='relative overflow-hidden rounded-sm shadow-md'>
            <div className='aspect-video w-full overflow-hidden'>
              <Image
                src={eventItems[0].image || backgroundImage}
                alt={eventItems[0].title}
                fill
                unoptimized
                className='object-cover transition-transform duration-700 group-hover:scale-110'
                sizes='(max-width: 768px) 100vw, 33vw'
              />
            </div>
            <div className='absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent pointer-events-none' />
            <div className='absolute left-4 bottom-4 right-4 text-white pointer-events-none'>
              <div className='flex items-end gap-3'>
                <div className='text-white/90 font-black text-4xl leading-none'>
                  {(eventItems[0].date || '01/01').split('/')[0]}
                  <span className='block text-[10px] font-bold uppercase tracking-widest opacity-80 mt-1'>
                    {(eventItems[0].date || '01/01/2025').split('/').slice(1).join('-')}
                  </span>
                </div>
                <h4 className='text-sm md:text-base font-bold leading-tight line-clamp-2 drop-shadow-md group-hover:text-brand-gold transition-colors mb-1'>
                  {eventItems[0].title}
                </h4>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* List Items (Small Images) - Flexible Height */}
      <div className='grid grid-cols-2 gap-4 mb-6 grow content-start'>
        {eventItems.slice(1).map((item, index) => (
          <Link key={index} href={item.link} className='block cursor-pointer group/item flex-col h-full'>
            <div className='relative overflow-hidden w-full aspect-video rounded-sm mb-3 shadow-sm'>
              <Image
                src={item.image || backgroundImage}
                alt={item.title}
                fill
                unoptimized
                className='object-cover transition-transform duration-500 group-hover/item:scale-110'
                sizes='(max-width: 768px) 50vw, 20vw'
              />
            </div>
            <div className='shrink-0'>
              <h4 className='text-xs font-bold text-brand-green line-clamp-3 group-hover/item:text-brand-gold transition-colors uppercase leading-tight'>
                {item.title}
              </h4>
            </div>
          </Link>
        ))}
      </div>

      {/* View More Button */}
      <div className='mt-auto pt-2 shrink-0'>
        <Link
          href='/events'
          className='inline-flex items-center gap-3 px-6 py-2.5 bg-brand-green text-white font-bold uppercase tracking-wide text-xs rounded-full hover:bg-brand-gold hover:text-brand-green transition-all shadow-lg group/btn'
        >
          <span>Xem thêm</span>
          <ArrowRight className='w-3.5 h-3.5' />
        </Link>
      </div>
    </div>
  )
}
