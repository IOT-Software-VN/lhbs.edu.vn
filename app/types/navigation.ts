export interface NavChild {
  id: string
  label: string
  path: string
  description?: string
}

export interface NavParent {
  id: string
  label: string
  path: string
  description: string
  children: NavChild[]
  cta?: {
    text: string
    path: string
  }
}

// More/Additional Links (right column in mega menu)
export interface MoreLink {
  label: string
  path: string
}

// Discover More Links
export const moreLinks: MoreLink[] = [
  { label: 'Thư viện ảnh', path: '/gallery' },
  { label: 'Tuyển dụng', path: '/careers' },
  { label: 'Liên hệ nhanh', path: '/contact' },
  { label: 'Tham quan 360 độ', path: '/virtual-tour' }
]

// External School Websites
export interface SchoolWebsite {
  label: string
  url: string
  description?: string
}

export const schoolWebsites: SchoolWebsite[] = [
  { 
    label: 'Khối Phổ thông (Cấp 1-2-3)', 
    url: 'https://school.lhbs.edu.vn',
    description: 'Primary & Secondary School'
  },
  { 
    label: 'Mầm non Galaxy (Biên Hòa)', 
    url: 'https://bienhoa.galaxy.lhbs.edu.vn',
    description: 'Galaxy Kindergarten - Bien Hoa Campus'
  },
  { 
    label: 'Mầm non Galaxy (Long Khánh)', 
    url: 'https://longkhanh.galaxy.lhbs.edu.vn',
    description: 'Galaxy Kindergarten - Long Khanh Campus'
  }
]

// New navigation structure based on updated concept
export const siteNavigation: NavParent[] = [
  {
    id: 'about-us',
    label: 'Về Chúng Tôi',
    path: '/about-us',
    description: 'Giới thiệu về LHBS',
    children: [
      {
        id: 'vision-mission',
        label: 'Tầm nhìn - Sứ mệnh - Giá trị cốt lõi',
        path: '/about-us/vision-mission-values',
        description: 'Vision, Mission and Core Values'
      },
      {
        id: 'history',
        label: 'Lịch sử hình thành',
        path: '/about-us/history',
        description: 'Our Foundation History'
      },
      {
        id: 'milestones',
        label: 'Các cột mốc đáng nhớ',
        path: '/about-us/milestones',
        description: 'Memorable Milestones'
      },
      {
        id: 'leadership',
        label: 'Ban lãnh đạo & Ban giám hiệu',
        path: '/about-us/leadership',
        description: 'Board of Directors & Principal Team'
      },
      {
        id: 'public-info',
        label: 'Công khai thông tin',
        path: '/about-us/public-information',
        description: 'Public Information & Reports'
      }
    ]
  },
  {
    id: 'system-training',
    label: 'Hệ Thống & Đào Tạo',
    path: '/system-training',
    description: 'Tìm hiểu về hệ thống giáo dục',
    children: [
      {
        id: 'curriculum-framework',
        label: 'Lộ trình học tập toàn hệ thống',
        path: '/system-training/curriculum-framework',
        description: 'Complete Educational Framework'
      },
      {
        id: 'news-events',
        label: 'Tin tức & Sự kiện',
        path: '/news-events',
        description: 'Latest News and Events'
      },
      {
        id: 'campus-intro',
        label: 'Giới thiệu hệ thống cơ sở',
        path: '/system-training/campus-introduction',
        description: 'Campus System Overview'
      }
    ]
  }
]
