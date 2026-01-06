import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import type { GalleryItem } from '../../types'

interface GalleryColumnProps {
  galleryItem: GalleryItem
}

export function GalleryColumn({ galleryItem }: GalleryColumnProps) {
  return (
    <div className='border-l-4 border-gray-100 pl-4 md:pl-6 flex flex-col relative group/col h-full'>
      <div className='absolute -left-1 top-0 w-1 h-12 bg-brand-gold group-hover/col:h-full transition-all duration-500 ease-in-out'></div>
      <h3 className='text-xl md:text-2xl font-black text-brand-green mb-4 md:mb-6 uppercase tracking-wide shrink-0'>
        Hình ảnh
      </h3>

      {/* Large Image - Takes remaining height */}
      <div className='group grow flex flex-col mb-4 relative'>
        <Link href={galleryItem.link} className='block w-full grow'>
          <div className='relative overflow-hidden rounded-sm shadow-md w-full h-full'>
            <Image
              src={galleryItem.image}
              alt={galleryItem.title}
              fill
              unoptimized
              className='object-cover transition-transform duration-700 group-hover:scale-110'
              sizes='(max-width: 768px) 100vw, 33vw'
            />
            {/* Gallery Icon Overlay */}
            <div className='absolute bottom-4 right-4 bg-black/40 p-2 rounded-lg backdrop-blur-xs'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='w-6 h-6 text-white'
              >
                <path
                  fillRule='evenodd'
                  d='M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
          </div>
        </Link>
      </div>

      {/* Title Below Image */}
      <Link href={galleryItem.link}>
        <h4 className='text-base font-bold text-brand-green leading-tight drop-shadow-sm group-hover:text-brand-gold transition-colors mb-6 cursor-pointer'>
          {galleryItem.title}
        </h4>
      </Link>

      {/* View More Button */}
      <div className='mt-auto pt-2 shrink-0'>
        <Link
          href='/gallery'
          className='inline-flex items-center gap-3 px-6 py-2.5 bg-brand-green text-white font-bold uppercase tracking-wide text-xs rounded-full hover:bg-brand-gold hover:text-brand-green transition-all shadow-lg group/btn'
        >
          <span>Xem thêm</span>
          <ArrowRight className='w-3.5 h-3.5' />
        </Link>
      </div>
    </div>
  )
}
