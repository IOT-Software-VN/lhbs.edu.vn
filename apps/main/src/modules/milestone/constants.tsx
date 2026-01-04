import type { BreadcrumbItem } from '@lhbs/ui'
import {
  History,
  Heart,
  Rocket,
  Users,
  Award,
  Video,
  Gift,
  Share2,
  BookOpen,
  MessageCircle,
  Camera,
  Compass
} from 'lucide-react'
import { type EdgeSection } from './types'

export const MILESTONE_BREADCRUMB_ITEMS: BreadcrumbItem[] = [
  { label: 'Trang chủ', path: '/' },
  { label: 'Cột mốc đáng nhớ' }
]

export const edgeSections: EdgeSection[] = [
  {
    id: 'past',
    icon: <History className='w-6 h-6' />,
    title: 'QUÁ KHỨ',
    titleFull: 'TÔN VINH QUÁ KHỨ',
    subtitle: 'Honor the Past',
    timeRange: 'Tháng 08/2026 - 09/2026',
    description:
      'Hành trình nhìn lại chặng đường 15 năm (2011-2026) đầy tự hào, tôn vinh những giá trị nền tảng và con người đã kiến tạo nên LHBS của ngày hôm nay.',
    features: [
      { title: 'Alumni Gallery', desc: 'Câu chuyện thành công cựu học sinh', icon: <Users className='w-5 h-5' /> },
      { title: 'Thanh xuân LHBS', desc: 'Cuộc thi video kỷ niệm mái trường', icon: <Video className='w-5 h-5' /> },
      { title: 'LHBS Milestone', desc: 'Chuỗi bài viết lịch sử phát triển', icon: <History className='w-5 h-5' /> },
      { title: 'LHBS Pride', desc: 'Vinh danh thành tích học sinh', icon: <Award className='w-5 h-5' /> }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1528642463367-1d30f31fbb0c?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'present',
    icon: <Heart className='w-6 h-6' />,
    title: 'HIỆN TẠI',
    titleFull: 'TRÂN TRỌNG HIỆN TẠI',
    subtitle: 'Embrace the Present',
    timeRange: 'Tháng 01/2026 - 10/2026',
    description:
      'Lan tỏa yêu thương và khẳng định chất lượng giáo dục vững chắc thông qua các hoạt động kết nối cộng đồng, tri ân và sẻ chia giá trị thực.',
    features: [
      { title: 'Hoạt động Từ thiện', desc: 'Tặng sách, học bổng & quà tặng', icon: <Gift className='w-5 h-5' /> },
      { title: 'Quà tặng 15 năm', desc: 'Tri ân GVNV, Phụ huynh & Đối tác', icon: <Heart className='w-5 h-5' /> },
      { title: 'Review hay nhận quà', desc: 'Cuộc thi chia sẻ cảm nhận', icon: <Share2 className='w-5 h-5' /> },
      { title: 'Kết nối giáo dục', desc: 'Chuyên đề phương pháp giảng dạy', icon: <BookOpen className='w-5 h-5' /> },
      { title: 'LHBS Testimonial', desc: 'Chia sẻ từ Phụ huynh', icon: <MessageCircle className='w-5 h-5' /> },
      { title: 'Anh em một mái trường', desc: 'Cuộc thi ảnh gia đình LHBS', icon: <Camera className='w-5 h-5' /> }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop'
  },
  {
    id: 'future',
    icon: <Rocket className='w-6 h-6' />,
    title: 'TƯƠNG LAI',
    titleFull: 'KIẾN TẠO TƯƠNG LAI',
    subtitle: 'Envision the Future',
    timeRange: 'Tháng 11/2026',
    description:
      'Khẳng định tầm nhìn giáo dục song ngữ tiêu chuẩn quốc tế, sẵn sàng cho chặng đường mới với tâm thế vững vàng và khát vọng vươn xa.',
    features: [
      { title: 'Hành trình 15 năm', desc: 'Video công chiếu đặc biệt', icon: <Video className='w-5 h-5' /> },
      { title: 'Đêm nhạc & Vinh danh', desc: 'Sự kiện kỷ niệm trọng đại', icon: <Award className='w-5 h-5' /> },
      { title: 'Định hướng 5 năm tới', desc: 'Công bố chiến lược phát triển', icon: <Compass className='w-5 h-5' /> }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=2070&auto=format&fit=crop'
  }
]
