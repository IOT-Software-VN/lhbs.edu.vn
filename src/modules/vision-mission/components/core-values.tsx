'use client'

import { useState } from 'react'
import { CORE_VALUES } from '../constants'
import { CoreValueTab } from './core-value-tab'
import { CoreValueDisplay } from './core-value-display'

export function CoreValuesSection() {
  const [activeTab, setActiveTab] = useState(0)
  const selectedValue = CORE_VALUES[activeTab]

  return (
    <section className='relative snap-start min-h-dvh h-auto w-full py-16 md:py-24 bg-lhbs-green-dark text-white overflow-hidden'>
      {/* Background Texture (Optional) */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none" />

      {/* Container */}
      <div className='container mx-auto px-4 md:px-8'>
        {/* Header Section */}
        <div className='flex flex-col items-start mb-6 md:mb-10'>
          <div className='bg-lhbs-yellow w-16 h-1 md:w-20 md:h-1.5 mb-4 rounded-full shadow-[0_0_15px_rgba(250,186,30,0.4)]' />
          <h2 className='text-[32px] md:text-[48px] lg:text-[60px] font-black uppercase tracking-tight leading-none drop-shadow-2xl'>
            Giá trị cốt lõi
          </h2>
          <p className='mt-4 text-base md:text-lg text-white/90 max-w-2xl font-light'>
            Những giá trị làm nên bản sắc và tinh thần Lạc Hồng
          </p>
        </div>

        {/* Main Content Area: Split Layout */}
        <div className='flex flex-col lg:flex-row gap-8 lg:gap-24 items-start'>
          {/* Image & Text Display (Left Desktop, Bottom Mobile) */}
          <div className='flex-1 w-full order-2 lg:order-1'>
            <CoreValueDisplay value={selectedValue} activeTab={activeTab} />
          </div>

          {/* Tabs (Right Desktop, Top Mobile) */}
          <div className='w-full lg:w-[110px] xl:w-[130px] flex flex-row lg:flex-col gap-3 lg:gap-5 justify-center lg:justify-start order-1 lg:order-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-hide'>
            {CORE_VALUES.map((value, index) => (
              <CoreValueTab
                key={value.id}
                value={value}
                index={index}
                isActive={activeTab === index}
                onClick={() => setActiveTab(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
