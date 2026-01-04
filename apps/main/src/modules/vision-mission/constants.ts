import type { BreadcrumbItem } from '@lhbs/ui'
import { BookOpen, Lightbulb, Heart, Globe, Shield } from 'lucide-react'
import type { CoreValue } from './types'

export const VISION_MISSION_BREADCRUMB_ITEMS: BreadcrumbItem[] = [
  { label: 'Trang chủ', path: '/' },
  { label: 'Tầm nhìn & Sứ mệnh' }
]

export const CORE_VALUES: CoreValue[] = [
  {
    id: 'lifelong_learning',
    icon: BookOpen,
    title: 'Hiếu học',
    description: 'Không ngừng khám phá tri thức, nuôi dưỡng đam mê học tập và phát triển bản thân suốt đời.',
    image: 'https://lhbs.edu.vn/wp-content/uploads/2025/10/1-1.jpg'
  },
  {
    id: 'integrity',
    icon: Shield,
    title: 'Chính trực',
    description: 'Trung thực, có đạo đức và nhất quán trong suy nghĩ, lời nói và hành động.',
    image: 'https://lhbs.edu.vn/wp-content/uploads/2025/10/2.jpg'
  },
  {
    id: 'creativity',
    icon: Lightbulb,
    title: 'Sáng tạo',
    description: 'Tư duy độc lập, linh hoạt, dám nghĩ, dám làm và tạo ra giá trị mới tích cực.',
    image: 'https://lhbs.edu.vn/wp-content/uploads/2025/10/572331153_803654888963320_928581099648076096_n.jpg'
  },
  {
    id: 'compassion',
    icon: Heart,
    title: 'Nhân ái',
    description:
      'Sống tử tế, biết yêu thương, sẻ chia và tôn trọng sự khác biệt; quan tâm đến người khác và cộng đồng.',
    image: 'https://lhbs.edu.vn/wp-content/uploads/2025/02/333A0358.jpg'
  },
  {
    id: 'global_competence',
    icon: Globe,
    title: 'Trách nhiệm',
    description:
      'Chủ động và có trách nhiệm với bản thân, cộng đồng và môi trường; hành động vì sự phát triển bền vững.',
    image: 'https://lhbs.edu.vn/wp-content/uploads/2021/07/122482938_1797344593750963_7347811336665844878_n.jpg'
  }
]
