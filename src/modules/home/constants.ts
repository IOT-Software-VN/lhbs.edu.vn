import type { LucideIcon } from 'lucide-react'
import { TrendingUp, HeartHandshake, MonitorSmartphone } from 'lucide-react'

export interface SchoolLevel {
  id: string
  title: string
  subtitle: string
  descriptions: string[]
  image: string
  slug: string
  learnMoreUrl?: string
}

export interface NewsItem {
  image?: string
  date: string
  title: string
  link: string
}

export interface EventItem {
  image?: string
  date?: string
  title: string
  link: string
}

export interface GalleryItem {
  image: string
  title: string
  link: string
}

export interface UniversityLogo {
  id: number
  name: string
  image: string
}

export interface WhyChooseItem {
  icon: LucideIcon
  title: string
  description: string
  fullDescription: string
  image: string
  alt: string
  points: string[]
}

export const NEWS_ITEMS: NewsItem[] = [
  {
    image: 'https://lhbs.edu.vn/wp-content/uploads/2025/11/578369959_810928768235932_2189832322315432240_n.jpg',
    date: '06/09/2025',
    title: 'Thư gửi học sinh LHBS nhân dịp khai giảng năm học mới',
    link: '/news/1'
  },
  {
    date: '04/09/2025',
    title: 'LHBS khởi động mạng lưới chuyên gia giáo dục chuyên nghiệp',
    link: '/news/2'
  },
  {
    date: '29/05/2025',
    title: 'Giáo dục song ngữ là gì? Lợi ích của trường song ngữ',
    link: '/news/3'
  }
]

export const EVENT_ITEMS: EventItem[] = [
  {
    image: 'https://lhbs.edu.vn/wp-content/uploads/2025/11/2.jpg',
    date: '22/04/2025',
    title: 'Giai đoạn "Terrible Twos" kéo dài bao lâu? Mẹo nuôi con',
    link: '/events/1'
  },
  {
    image: 'https://lhbs.edu.vn/wp-content/uploads/2025/11/576931936_808502421811900_4863998363654667053_n.jpg',
    title: '10 phương pháp học tập hiệu quả cho học sinh',
    link: '/events/2'
  },
  {
    image: 'https://lhbs.edu.vn/wp-content/uploads/2025/11/578369959_810928768235932_2189832322315432240_n.jpg',
    title: 'Giáo dục toàn diện là gì? Các yếu tố chính',
    link: '/events/3'
  }
]

export const GALLERY_ITEM: GalleryItem = {
  image: 'https://lhbs.edu.vn/wp-content/uploads/2025/11/578369959_810928768235932_2189832322315432240_n.jpg',
  title: 'Học sinh LHBS tham gia các hoạt động giáo dục toàn diện',
  link: '/gallery/1'
}

export const UNIVERSITY_LOGOS: UniversityLogo[] = [
  {
    id: 1,
    name: 'English Central',
    image: 'https://www.englishcentral.com/dist/all/20251203121549/assets/ec-logo.53e56416598b3d50cbe5.png'
  },
  {
    id: 2,
    name: 'STEM',
    image:
      'https://images.ctfassets.net/pc40tpn1u6ef/53uHpRwHaK9sso1qyHHEac/ff0836356ad19c1610be81b5ae6f06d4/STEM-Logo-220801.svg'
  },
  {
    id: 3,
    name: 'ASI',
    image: 'https://advantagesschool.com/wp-content/uploads/2022/10/asi-logo.png'
  },
  {
    id: 4,
    name: 'Cambridge',
    image: 'https://www.cambridgeassessment.org.uk/Images/Simon-brand-blog-newest-logo.png'
  }
]

export const SCHOOL_LEVELS: SchoolLevel[] = [
  {
    id: 'galaxy-kc',
    title: 'MẦM NON',
    subtitle: '18 tháng - 3 tuổi',
    descriptions: [
      'Chương trình mầm non hiện đại với phương pháp quốc tế.',
      'Chương trình tích hợp kết hợp Bộ GD&ĐT và chuẩn toàn cầu.',
      'Tập trung phát triển thể chất, nhân cách và kỹ năng xã hội.'
    ],
    image: '/images/home-page/cac-cap-hoc-section/program-03.png',
    slug: '/campus/galaxy-kc'
  },

  {
    id: 'elementary',
    title: 'TIỂU HỌC',
    subtitle: 'Lớp 1 - Lớp 5',
    descriptions: [
      'Chương trình song ngữ toàn diện với nền tảng vững chắc.',
      'Phát triển toàn diện nhấn mạnh sáng tạo và tư duy logic.',
      'Hoạt động hấp dẫn xây dựng sự tự tin và khám phá.'
    ],
    image: '/images/home-page/cac-cap-hoc-section/program-02.png',
    slug: '/campus/elementary',
    learnMoreUrl: 'https://school-lhbs-iotsoftvn-com.vercel.app/primary-school'
  },

  {
    id: 'middle',
    title: 'TRUNG HỌC CƠ SỞ',
    subtitle: 'Lớp 6 - Lớp 9',
    descriptions: [
      'Chương trình học thuật tập trung kỹ năng tư duy phản biện.',
      'Học tập dựa trên dự án khuyến khích làm việc nhóm và đổi mới.',
      'Chuẩn bị cho những thách thức học thuật cao hơn.'
    ],
    image: '/images/home-page/cac-cap-hoc-section/program.jpg',
    slug: '/campus/middle-school',
    learnMoreUrl: 'https://school-lhbs-iotsoftvn-com.vercel.app/secondary-school'
  },

  {
    id: 'highschool',
    title: 'TRUNG HỌC PHỔ THÔNG',
    subtitle: 'Lớp 10 - Lớp 12',
    descriptions: [
      'Chương trình học thuật nâng cao phù hợp chuẩn quốc tế.',
      'Định hướng chuyên biệt cho con đường đại học và nghề nghiệp.',
      'Cơ hội lãnh đạo và xuất sắc trong hoạt động ngoại khóa.'
    ],
    image: '/images/home-page/cac-cap-hoc-section/program-01.png',
    slug: '/campus/high-school',
    learnMoreUrl: 'https://school-lhbs-iotsoftvn-com.vercel.app/high-school'
  }
]

export const WHY_CHOOSE_DATA: WhyChooseItem[] = [
  {
    icon: TrendingUp,
    title: 'Lộ trình học\u00A0tập cá\u00A0nhân\u00A0hóa',
    description: 'Mỗi học sinh được thiết kế chương trình học phù hợp với năng lực và mục tiêu phát triển riêng.',
    fullDescription:
      'LHBS cam kết mang đến cho mỗi học sinh một lộ trình học tập được thiết kế riêng, phù hợp với năng lực, sở thích và mục tiêu phát triển cá nhân. Chúng tôi tin rằng mỗi em đều có tiềm năng riêng biệt cần được phát huy.',
    image: 'https://lhbs.edu.vn/wp-content/uploads/2025/11/578369959_810928768235932_2189832322315432240_n.jpg',
    alt: 'Lộ trình học tập cá nhân hóa tại LHBS',
    points: [
      'Đánh giá năng lực và sở thích cá nhân',
      'Thiết kế chương trình học phù hợp',
      'Theo dõi tiến độ và điều chỉnh linh hoạt',
      'Hỗ trợ phát triển toàn diện'
    ]
  },
  {
    icon: HeartHandshake,
    title: 'Lấy\u00A0học\u00A0sinh\u00A0làm trung\u00A0tâm',
    description: 'Phương pháp giảng dạy chủ động, khuyến khích tư duy sáng tạo độc lập và phát triển kỹ năng.',
    fullDescription:
      'Triết lý giáo dục của LHBS đặt học sinh vào trung tâm của mọi hoạt động. Chúng tôi khuyến khích học sinh chủ động trong học tập, phát triển tư duy phản biện và kỹ năng giải quyết vấn đề thực tế.',
    image: 'https://lhbs.edu.vn/wp-content/uploads/2025/11/576931936_808502421811900_4863998363654667053_n.jpg',
    alt: 'Lấy học sinh làm trung tâm tại LHBS',
    points: [
      'Phương pháp học tập tích cực',
      'Khuyến khích tư duy sáng tạo',
      'Phát triển kỹ năng mềm',
      'Học qua trải nghiệm thực tế'
    ]
  },
  {
    icon: MonitorSmartphone,
    title: 'Tiên phong ứng\u00A0dụng công\u00A0nghệ',
    description: 'Tích hợp công nghệ hiện đại vào mọi hoạt động giảng dạy, tạo môi trường học tập tương tác.',
    fullDescription:
      'LHBS là đơn vị tiên phong trong việc ứng dụng công nghệ giáo dục tiên tiến. Chúng tôi tích hợp các công cụ công nghệ hiện đại vào giảng dạy để tạo ra môi trường học tập tương tác, hấp dẫn và hiệu quả cao.',
    image: 'https://lhbs.edu.vn/wp-content/uploads/2025/11/2.jpg',
    alt: 'Tiên phong ứng dụng công nghệ tại LHBS',
    points: [
      'Lớp học thông minh với công nghệ hiện đại',
      'Nền tảng học trực tuyến tương tác',
      'Ứng dụng AI hỗ trợ cá nhân hóa',
      'Thư viện số đa dạng và phong phú'
    ]
  }
]
