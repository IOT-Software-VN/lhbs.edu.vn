import { MapPin, Phone, Mail, Globe, Facebook } from 'lucide-react'
import type { CampusInfo } from '../types'

interface CampusCardProps {
  campus: CampusInfo
}

export function CampusCard({ campus }: CampusCardProps) {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-[0_10px_50px_rgba(0,0,0,0.08)]'>
      {/* LEFT: Google Map */}
      <div className='relative h-[350px] md:h-[450px] lg:h-auto lg:min-h-[500px]'>
        <iframe
          src={campus.mapEmbedUrl}
          width='100%'
          height='100%'
          style={{ border: 0 }}
          allowFullScreen
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
          title={`Bản đồ ${campus.shortName}`}
          className='absolute inset-0 w-full h-full'
        />
      </div>

      {/* RIGHT: Campus Information */}
      <div className='p-8 md:p-10 lg:p-12 flex flex-col justify-center'>
        {/* Header */}
        <div className='mb-4 w-20 h-1 bg-brand-gold rounded-full' />

        <div>
          <h3 className='text-2xl md:text-3xl lg:text-4xl font-black text-brand-green mb-3 leading-tight'>
            {campus.name}
          </h3>
        </div>

        {/* Contact Details */}
        <div className='space-y-5 mb-8'>
          {/* Address */}
          <div className='flex items-start gap-4'>
            <div className='shrink-0 w-10 h-10 bg-brand-gold/10 rounded-full flex items-center justify-center'>
              <MapPin className='w-5 h-5 text-brand-green' />
            </div>
            <div>
              <p className='text-xs md:text-sm text-gray-500 uppercase tracking-wide mb-1 font-bold'>Địa chỉ</p>
              <p className='text-base md:text-lg text-gray-800 leading-relaxed'>{campus.address}</p>
            </div>
          </div>

          {/* Phone */}
          <div className='flex items-start gap-4'>
            <div className='shrink-0 w-10 h-10 bg-brand-gold/10 rounded-full flex items-center justify-center'>
              <Phone className='w-5 h-5 text-brand-green' />
            </div>
            <div>
              <p className='text-xs md:text-sm text-gray-500 uppercase tracking-wide mb-1 font-bold'>Điện thoại</p>
              <a
                href={`tel:${campus.phone.replace(/\s/g, '')}`}
                className='text-base md:text-lg text-brand-green hover:text-brand-gold transition-colors font-semibold'
              >
                {campus.phone}
              </a>
            </div>
          </div>

          {/* Email */}
          <div className='flex items-start gap-4'>
            <div className='shrink-0 w-10 h-10 bg-brand-gold/10 rounded-full flex items-center justify-center'>
              <Mail className='w-5 h-5 text-brand-green' />
            </div>
            <div>
              <p className='text-xs md:text-sm text-gray-500 uppercase tracking-wide mb-1 font-bold'>Email</p>
              <a
                href={`mailto:${campus.email}`}
                className='text-base md:text-lg text-brand-green hover:text-brand-gold transition-colors font-medium'
              >
                {campus.email}
              </a>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className='flex flex-col sm:flex-row gap-4'>
          <a
            target='_blank'
            href={campus.website}
            rel='noopener noreferrer'
            className='flex-1 flex items-center justify-center gap-3 px-8 py-4 bg-brand-gold hover:bg-[#e5a812] text-brand-green font-bold text-base rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl'
          >
            <Globe className='w-5 h-5' />
            <span>Truy cập Website</span>
          </a>

          <a
            href={campus.facebook}
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center justify-center gap-3 px-8 py-4 bg-brand-green hover:bg-[#163d2a] text-white font-bold text-base rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl'
          >
            <Facebook className='w-5 h-5' />
            <span>Facebook</span>
          </a>
        </div>
      </div>
    </div>
  )
}
