# UI/UX Configuration Rules

> **Purpose:** This document defines strict UI/UX rules for AI code generation to ensure consistency across the LHBS monorepo project.

---

## 1. FOLDER STRUCTURE & ORGANIZATION

### Overview
The `libs/` folder at the root (`libs/src/...`) contains all shared components used across apps.

### Directory Structure
```
libs/src/
├── components/          # shadcn UI generated components
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── index.ts
├── hooks/               # Custom React hooks
│   └── index.ts
├── shared-ui/           # Shared UI components
│   ├── layouts/         # Layout components (Header, Footer, Menu)
│   │   ├── StickyHeader.tsx
│   │   ├── Footer.tsx
│   │   └── index.ts
│   ├── components/      # Single shared components
│   │   ├── CTABottomFixed.tsx
│   │   ├── ImageWithFallback.tsx
│   │   └── index.ts
│   └── components/
│       └── hero-section/    # Section-level components (kebab-case folders)
│           ├── hero-carousel.tsx
│           └── index.ts
```

### Export Rules
- **Every folder MUST have an `index.ts`** with named exports:
  ```typescript
  export * from './ComponentName';
  ```
- **Alias to libs:** `@sites/index`

### Component Props Philosophy
**CRITICAL:** All components in `libs/` MUST accept props for content to ensure flexibility across apps.

❌ **BAD (Hard-coded content):**
```typescript
export function HeroSection() {
  return <h1>Welcome to LHBS</h1>
}
```

✅ **GOOD (Props-driven content):**
```typescript
interface HeroSectionProps {
  title: string
  subtitle?: string
}

export function HeroSection({ title, subtitle }: HeroSectionProps) {
  return (
    <>
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </>
  )
}
```

---

## 2. NAMING CONVENTIONS (STRICT)

### Component Files
- **Format:** PascalCase
- **Examples:** `HeroSection.tsx`, `MainButton.tsx`, `CTABottomFixed.tsx`

### Folder Sections
- **Format:** kebab-case
- **Examples:** 
  - `shared-ui/components/home-hero/`
  - `shared-ui/components/news-section/`
  - `shared-ui/components/testimonial-quote-section/`

### Hook Files
- **Format:** Must start with `use` prefix (camelCase)
- **Examples:** `useTransformData.ts`, `useScrollVisibility.ts`

### Index Export Pattern
```typescript
// ✅ CORRECT
export * from './HeroSection';
export * from './MainButton';

// ❌ WRONG
export { HeroSection } from './hero-section';
export default HeroSection;
```

---

## 3. COLOR PALETTE (PRIMARY COLORS)

### Main Colors
```typescript
const COLORS = {
  PRIMARY_GREEN: '#1e5338',       // Main brand color (titles, buttons)
  SECTION_BG_GREEN: '#00602f',    // Background for sections (use ONLY for section bg)
  ACCENT_YELLOW: '#faba1e',       // Highlights, badges, CTAs
  WHITE: '#fff'                   // Text on dark backgrounds
}
```

### Usage Rules
- **#1e5338, #faba1e, #fff:** Can be used for titles, backgrounds, buttons (flexible)
- **#00602f:** ONLY for section backgrounds (strict rule)

### Color Selection Logic
```typescript
// Section background = white → text color = #1e5338
// Section background = dark → text color = #fff
```

---

## 4. SECTION TITLE STRUCTURE (MANDATORY)

### Complete Title Anatomy
Every section title MUST follow this order:
```
1. Line Decoration (top)
2. Badge/Subtitle (optional)
3. Main Title
```

### 1. Line Decoration (REQUIRED)
**Always placed above the title:**
```tsx
<div className="bg-[#FABA1E] w-16 h-1 md:w-20 md:h-1.5 mb-4 rounded-full shadow-[0_0_15px_rgba(250,186,30,0.4)]" />
```

**Responsive Scaling:**
- Mobile: `w-16 h-1 mb-4`
- Desktop: `md:w-20 md:h-1.5 md:mb-6`

### 2. Title Badge (Optional)
**If section has a badge/subtitle above the main title:**
```tsx
<p className="text-[#FABA1E] text-[16px] uppercase tracking-[0.15em] mb-3">
  Badge Text
</p>
```

### 3. Main Title
**Font Configuration:**
- **Font Size:** 48px default for desktop (responsive scaling required)
- **Font Weight:** `font-black` (thickest)
- **Casing:** `uppercase`
- **Letter Spacing:** `tracking-tight`
- **Shadow:** `drop-shadow-2xl`

**Color Logic:**
```tsx
// White background section
<h2 className="text-[#1e5338] ...">

// Dark background section (#00602f)
<h2 className="text-white ...">
```

**Full Example:**
```tsx
<div className="flex flex-col items-center text-center">
  {/* Line */}
  <div className="bg-[#FABA1E] w-16 h-1 md:w-20 md:h-1.5 mb-4 rounded-full shadow-[0_0_15px_rgba(250,186,30,0.4)]" />
  
  {/* Badge (optional) */}
  <p className="text-[#FABA1E] text-[16px] uppercase tracking-[0.15em] mb-3">
    Our Programs
  </p>
  
  {/* Main Title */}
  <h2 className="font-black uppercase tracking-tight drop-shadow-2xl text-[32px] leading-tight md:text-[48px] md:leading-tight lg:text-[60px] lg:leading-none 2xl:text-[72px] text-[#1e5338]">
    Educational Excellence
  </h2>
</div>
```

### Title Alignment Options
- **`items-center text-center`** (default for mobile)
- **`items-start text-start`** (desktop alternative, based on requirements)

---

## 5. RESPONSIVE DESIGN RULES (STRICT)

### Typography Scaling
**Main Title (H1/H2):**
```tsx
className="
  text-[32px] leading-tight
  md:text-[48px] md:leading-tight
  lg:text-[60px] lg:leading-none
  2xl:text-[72px]
"
```

**Alignment Strategy:**
- **Mobile (default):** `text-center` for balance
- **Desktop (conditional):** `md:text-start` if required

### Container & Layout
**Container Wrapper (MANDATORY):**
```tsx
<div className="container mx-auto px-4 md:px-8">
  {/* Content */}
</div>
```

**Grid Systems:**
```tsx
// Card Lists
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

// 4-column desktop
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
```

### Section Padding
```tsx
className="py-12 md:py-24"
```
- **Mobile:** `py-12`
- **Desktop:** `py-24`

### Full Viewport Height Sections
**For hero-style or featured sections that should fill the screen:**
```tsx
className="w-full min-h-dvh bg-[color] relative snap-start overflow-hidden flex flex-col"
```

**Key Properties:**
- `min-h-dvh` - Minimum dynamic viewport height (allows content overflow on small screens, fixed on large screens)
- `snap-start` - Auto-scroll snap point for smooth navigation
- `overflow-hidden` - Prevent horizontal overflow
- `flex flex-col` - Vertical layout control

**Alternative for strict desktop-only full height:**
```tsx
className="w-full min-h-screen md:h-dvh bg-[color] relative snap-start overflow-hidden flex flex-col"
```
- Mobile: `min-h-screen` - Allows content to expand
- Desktop: `md:h-dvh` - Fixed viewport height

**Usage:** Apply to sections that should be full-screen experiences (hero sections, featured content, full-page messages)

### Line Decoration Responsive
```tsx
className="w-16 h-1 mb-4 md:w-20 md:h-1.5 md:mb-6"
```

---

## 6. BUTTON DESIGN RULES

### Shape (STRICT)
**All buttons MUST use `rounded-full`:**
```tsx
<button className="rounded-full ...">
```

### Size Variants
```tsx
// Small
className="px-6 py-2 text-sm rounded-full"

// Medium (default)
className="px-8 py-3 text-base rounded-full"

// Large
className="px-10 py-4 text-lg rounded-full"
```

### Color Variants
```tsx
// Primary Yellow
className="bg-[#FABA1E] hover:bg-[#e5a812] text-[#1e5338] rounded-full"

// Primary Green
className="bg-[#1e5338] hover:bg-[#163d2a] text-white rounded-full"

// Outline
className="border-2 border-[#FABA1E] text-[#FABA1E] hover:bg-[#FABA1E] hover:text-[#1e5338] rounded-full"
```

---

## 7. CLEAN CODE PRINCIPLES

### 1. No Hard-Coded Repetition
❌ **BAD:**
```tsx
<div className="bg-[#FABA1E] w-16 h-1 ..." />
<div className="bg-[#FABA1E] w-16 h-1 ..." />
<div className="bg-[#FABA1E] w-16 h-1 ..." />
```

✅ **GOOD:**
```tsx
const LINE_DECORATION = "bg-[#FABA1E] w-16 h-1 md:w-20 md:h-1.5 mb-4 rounded-full shadow-[0_0_15px_rgba(250,186,30,0.4)]"

<div className={LINE_DECORATION} />
```

### 2. Use Tailwind Config for Colors
**In `tailwind.config.js`:**
```js
module.exports = {
  theme: {
    extend: {
      colors: {
        'lhbs-green': '#1e5338',
        'lhbs-green-dark': '#00602f',
        'lhbs-yellow': '#faba1e',
      }
    }
  }
}
```

**Then use:**
```tsx
<h2 className="text-lhbs-green ...">
```

### 3. Extract Repeated Patterns
```tsx
// constants/ui-classes.ts
export const TITLE_CLASSES = "font-black uppercase tracking-tight drop-shadow-2xl"
export const SECTION_PADDING = "py-12 md:py-24"
export const CONTAINER = "container mx-auto px-4 md:px-8"
```

---

## 8. ICONOGRAPHY RULES

### Icon Library (STRICT)
**ONLY use icons from `lucide-react`:**
```tsx
import { ChevronUp, Menu, X, Facebook } from 'lucide-react'
```

❌ **FORBIDDEN:**
- react-icons
- heroicons
- Font Awesome
- Custom SVG imports (except brand logos like Zalo, Messenger)

### Icon Sizing
```tsx
// Small
<Icon className="w-4 h-4" />

// Medium (default)
<Icon className="w-6 h-6" />

// Large
<Icon className="w-8 h-8" />
```

---

## 9. COMPONENT STRUCTURE TEMPLATE

### Standard Component File Structure
```tsx
// ============================================================================
// IMPORTS
// ============================================================================
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

// ============================================================================
// TYPES & CONSTANTS
// ============================================================================
interface ComponentProps {
  title: string
  subtitle?: string
}

const DEFAULT_PROPS = {
  subtitle: ''
} as const

const TITLE_CLASSES = "font-black uppercase tracking-tight drop-shadow-2xl"

// ============================================================================
// COMPONENT
// ============================================================================
export function Component({ title, subtitle = DEFAULT_PROPS.subtitle }: ComponentProps) {
  const [isOpen, setIsOpen] = useState(false)

  // ========================================
  // HANDLERS
  // ========================================
  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  // ========================================
  // EFFECTS
  // ========================================
  useEffect(() => {
    // ...
  }, [])

  // ========================================
  // RENDER
  // ========================================
  return (
    <div className="container mx-auto px-4 md:px-8 py-12 md:py-24">
      {/* Line Decoration */}
      <div className="bg-[#FABA1E] w-16 h-1 md:w-20 md:h-1.5 mb-4 rounded-full shadow-[0_0_15px_rgba(250,186,30,0.4)]" />
      
      {/* Title */}
      <h2 className={`${TITLE_CLASSES} text-[32px] md:text-[48px] lg:text-[60px] 2xl:text-[72px]`}>
        {title}
      </h2>
    </div>
  )
}
```

---

## 10. CHECKLIST FOR AI CODE GENERATION

Before generating any UI component, verify:

- [ ] Component is in correct folder (`shared-ui/components/` or `shared-ui/layouts/`)
- [ ] File name uses PascalCase (e.g., `NewsSection.tsx`)
- [ ] Folder section uses kebab-case (e.g., `news-section/`)
- [ ] Props interface defined for content flexibility
- [ ] Colors use defined palette (#1e5338, #00602f, #faba1e, #fff)
- [ ] Title structure follows: Line → Badge (optional) → Main Title
- [ ] Title uses responsive classes: `text-[32px] md:text-[48px] lg:text-[60px] 2xl:text-[72px]`
- [ ] Buttons use `rounded-full`
- [ ] Container wrapper: `container mx-auto px-4 md:px-8`
- [ ] Section padding: `py-12 md:py-24`
- [ ] Icons from `lucide-react` only
- [ ] No hard-coded values (use constants)
- [ ] Component exported in `index.ts`

---

## 11. EXAMPLE IMPLEMENTATIONS

### Example: Simple Section Component
```tsx
// libs/src/shared-ui/components/about-section/AboutSection.tsx

import { Target } from 'lucide-react'

interface AboutSectionProps {
  badge?: string
  title: string
  description: string
  bgColor?: 'white' | 'green'
}

const LINE_DECORATION = "bg-[#FABA1E] w-16 h-1 md:w-20 md:h-1.5 mb-4 rounded-full shadow-[0_0_15px_rgba(250,186,30,0.4)]"
const TITLE_CLASSES = "font-black uppercase tracking-tight drop-shadow-2xl"

export function AboutSection({ 
  badge, 
  title, 
  description, 
  bgColor = 'white' 
}: AboutSectionProps) {
  const textColor = bgColor === 'white' ? 'text-[#1e5338]' : 'text-white'
  const sectionBg = bgColor === 'white' ? 'bg-white' : 'bg-[#00602f]'

  return (
    <section className={`${sectionBg} py-12 md:py-24`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Line */}
          <div className={LINE_DECORATION} />
          
          {/* Badge */}
          {badge && (
            <p className="text-[#FABA1E] text-[16px] uppercase tracking-[0.15em] mb-3">
              {badge}
            </p>
          )}
          
          {/* Title */}
          <h2 className={`
            ${TITLE_CLASSES} ${textColor}
            text-[32px] leading-tight
            md:text-[48px] md:leading-tight
            lg:text-[60px] lg:leading-none
            2xl:text-[72px]
          `}>
            {title}
          </h2>
          
          {/* Description */}
          <p className="mt-6 text-lg max-w-3xl">
            {description}
          </p>
        </div>
      </div>
    </section>
  )
}
```

### Example: Card Grid Section
```tsx
// libs/src/shared-ui/components/features-section/FeaturesSection.tsx

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
}

interface FeaturesSectionProps {
  badge?: string
  title: string
  features: Feature[]
}

const LINE_DECORATION = "bg-[#FABA1E] w-16 h-1 md:w-20 md:h-1.5 mb-4 rounded-full shadow-[0_0_15px_rgba(250,186,30,0.4)]"
const TITLE_CLASSES = "font-black uppercase tracking-tight drop-shadow-2xl"

export function FeaturesSection({ badge, title, features }: FeaturesSectionProps) {
  return (
    <section className="bg-white py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        {/* Title */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className={LINE_DECORATION} />
          {badge && (
            <p className="text-[#FABA1E] text-[16px] uppercase tracking-[0.15em] mb-3">
              {badge}
            </p>
          )}
          <h2 className={`
            ${TITLE_CLASSES} text-[#1e5338]
            text-[32px] md:text-[48px] lg:text-[60px] 2xl:text-[72px]
          `}>
            {title}
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="p-6 border rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 mb-4 text-[#FABA1E]">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

---

## 12. COMMON MISTAKES TO AVOID

### ❌ Mistake #1: Hard-coding content in libs
```tsx
// BAD
export function Hero() {
  return <h1>Welcome to LHBS</h1>
}
```

### ❌ Mistake #2: Wrong button shape
```tsx
// BAD
<button className="rounded-lg ...">

// GOOD
<button className="rounded-full ...">
```

### ❌ Mistake #3: Missing responsive title scaling
```tsx
// BAD
<h2 className="text-6xl">

// GOOD
<h2 className="text-[32px] md:text-[48px] lg:text-[60px] 2xl:text-[72px]">
```

### ❌ Mistake #4: Missing container wrapper
```tsx
// BAD
<section>
  <h2>Title</h2>
</section>

// GOOD
<section>
  <div className="container mx-auto px-4 md:px-8">
    <h2>Title</h2>
  </div>
</section>
```

### ❌ Mistake #5: Using wrong icon library
```tsx
// BAD
import { FaFacebook } from 'react-icons/fa'

// GOOD
import { Facebook } from 'lucide-react'
```

---

## 13. PAGE STRUCTURE RULES (STANDARD TEMPLATE)

### Overview
Every page in the LHBS project follows a consistent structure to ensure maintainability and user experience.

### Page File Location
```
app/routes/[page-name]/page.tsx
```

### Component Sections Location
```
app/components/[page-name]/
├── index.ts
├── mock-data.ts (optional)
└── section/
    ├── section-name-1.tsx
    ├── section-name-2.tsx
    └── index.ts
```

### Standard Page Template

#### 1. Routes Page File (`routes/[page-name]/page.tsx`)

```tsx
import type { Route } from './+types/page'
import {
  Section1,
  Section2,
  Section3
} from '@/components/[page-name]'
import SubPageHero from '@/components/shared-ui/hero-carousel'
import { Breadcrumb, type BreadcrumbItem } from '@/components/ui/components/Breadcrumb'

// ============================================================================
// META DATA (REQUIRED)
// ============================================================================
export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Page Title - LHBS' },
    {
      name: 'description',
      content: 'Page description for SEO'
    }
  ]
}

// ============================================================================
// PAGE COMPONENT
// ============================================================================
export default function PageName() {
  // Navigation handler (if sections need navigation)
  const handleNavigate = (path: string) => {
    window.location.href = path
  }

  // Breadcrumb configuration
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Trang chủ', path: '/' },
    { label: 'Page Name' }
  ]

  return (
    <>
      {/* Hero Section (REQUIRED) */}
      <SubPageHero
        title="PAGE TITLE"
        subtitle="Page subtitle or tagline"
        backgroundImage="https://example.com/hero-image.jpg"
      />

      {/* Breadcrumb Section (REQUIRED) */}
      <div className='w-full bg-white pt-12 pb-4 md:pt-20 md:pb-6 relative z-10'>
        <div className='container mx-auto px-4 md:px-8 lg:px-12'>
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </div>

      {/* Page Sections (FLEXIBLE - import from components/[page-name]) */}
      <Section1 onNavigate={handleNavigate} />
      <Section2 />
      <Section3 onNavigate={handleNavigate} />
    </>
  )
}
```

#### 2. Components Index File (`components/[page-name]/index.ts`)

```tsx
import Section1 from './section/section-name-1'
import Section2 from './section/section-name-2'
import Section3 from './section/section-name-3'

export {
  Section1,
  Section2,
  Section3
}
```

#### 3. Section File Template (`components/[page-name]/section/section-name.tsx`)

```tsx
import { motion } from 'motion/react'
import { Icon1, Icon2 } from 'lucide-react'

// ============================================================================
// TYPES & INTERFACES
// ============================================================================
interface SectionNameProps {
  onNavigate?: (path: string) => void
}

// ============================================================================
// CONSTANTS
// ============================================================================
const LINE_DECORATION = "bg-[#FABA1E] w-16 h-1 md:w-20 md:h-1.5 mb-4 rounded-full shadow-[0_0_15px_rgba(250,186,30,0.4)]"
const TITLE_CLASSES = "font-black uppercase tracking-tight drop-shadow-2xl"

// ============================================================================
// COMPONENT
// ============================================================================
export default function SectionName({ onNavigate }: SectionNameProps) {
  return (
    <section className='w-full py-12 md:py-24 bg-white relative overflow-hidden'>
      <div className='container mx-auto px-4 md:px-8'>
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='flex flex-col items-center text-center mb-12 md:mb-16'
        >
          {/* Line Decoration */}
          <div className={LINE_DECORATION} />
          
          {/* Badge (Optional) */}
          <p className='text-[#faba1e] text-sm md:text-base uppercase tracking-[0.15em] mb-3'>
            Section Badge
          </p>
          
          {/* Main Title */}
          <h2 className={`${TITLE_CLASSES} text-[28px] leading-tight md:text-[40px] md:leading-tight lg:text-[48px] text-[#1e5338]`}>
            Section Title
          </h2>
          
          {/* Description (Optional) */}
          <p className='text-base md:text-lg text-gray-600 mt-4 max-w-2xl'>
            Section description text
          </p>
        </motion.div>

        {/* Section Content */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {/* Content here */}
        </div>
      </div>
    </section>
  )
}
```

### Page Structure Checklist

Before creating a new page, ensure:

- [ ] **Route file** created at `app/routes/[page-name]/page.tsx`
- [ ] **Route declared** in `app/routes.ts` with correct path
- [ ] **Navigation entry** added to `app/types/navigation.ts` (if applicable)
- [ ] **Meta function** defined with title and description
- [ ] **SubPageHero** component imported and used
- [ ] **Breadcrumb** component imported and configured
- [ ] **Component folder** created at `app/components/[page-name]/`
- [ ] **index.ts** exports all sections
- [ ] **Section files** in `section/` folder with kebab-case naming
- [ ] **Props interface** defined for sections requiring navigation
- [ ] **Responsive design** classes applied throughout
- [ ] **Color palette** follows project standards
- [ ] **Typography** follows title structure rules

### Routes Configuration

#### Location
```
app/routes.ts
```

#### Adding a New Route

1. **Check navigation.ts first** to find the correct path:
   ```typescript
   // app/types/navigation.ts
   {
     id: 'about-milestones',
     label: 'Các cột mốc đáng nhớ',
     path: '/cot-moc-dang-nho',  // Use this path
     description: 'Những thành tựu nổi bật'
   }
   ```

2. **Add route to routes.ts**:
   ```typescript
   export default [
     layout('components/layouts/layout.tsx', [
       // Home page
       index('routes/home.tsx'),
       
       // About - Vision & Mission
       route('tam-nhin-su-menh', 'routes/vision-mission/page.tsx'),
       route('cot-moc-dang-nho', 'routes/milestone/page.tsx'), // New route
       
       // Catch-all route for 404 pages (must be last)
       route('*', 'routes/404.tsx'),
     ])
   ] satisfies RouteConfig
   ```

**Important Rules:**
- Route path MUST match the path defined in `navigation.ts`
- Remove leading slash from path: `/cot-moc-dang-nho` → `cot-moc-dang-nho`
- 404 route (`route('*', 'routes/404.tsx')`) must always be last
- Group related routes with comments for organization

### Navigation Configuration

#### Location
```
app/types/navigation.ts
```

#### Navigation Structure

```typescript
export const siteNavigation: NavParent[] = [
  {
    id: 'about-lhbs',                    // Unique parent ID
    label: 'Giới thiệu chung',            // Display name in menu
    path: '/gioi-thieu',                  // Parent path (optional)
    description: 'Tìm hiểu về LHBS',       // Parent description
    children: [
      {
        id: 'about-milestones',          // Unique child ID
        label: 'Các cột mốc đáng nhớ',  // Display name
        path: '/cot-moc-dang-nho',        // MUST match routes.ts
        description: 'Những thành tựu nổi bật'
      }
    ]
  }
]
```

#### Adding New Navigation Item

1. **For internal pages:**
   ```typescript
   {
     id: 'unique-id',
     label: 'Menu Label',
     path: '/url-path',              // This path goes to routes.ts
     description: 'Short description'
   }
   ```

2. **For external links:**
   ```typescript
   {
     id: 'external-link',
     label: 'External Site',
     url: 'https://external.com',   // Use 'url' instead of 'path'
     description: 'External site description',
     isExternal: true
   }
   ```

**Navigation Rules:**
- Use kebab-case for IDs: `about-milestones`, `education-program`
- Paths must start with `/` in navigation.ts
- Path in routes.ts must NOT have leading `/`
- Keep descriptions concise (under 50 characters)
- External links use `url` property with `isExternal: true`

### Complete Page Creation Workflow

**Step 1: Check Navigation** (`app/types/navigation.ts`)
```typescript
// Find or add your page here first
{
  id: 'about-milestones',
  label: 'Các cột mốc đáng nhớ',
  path: '/cot-moc-dang-nho',  // ← This is your route path
  description: 'Những thành tựu nổi bật'
}
```

**Step 2: Add Route** (`app/routes.ts`)
```typescript
route('cot-moc-dang-nho', 'routes/milestone/page.tsx'),
//     ^────────────────  Remove leading slash from navigation path
```

**Step 3: Create Page File** (`app/routes/milestone/page.tsx`)
```typescript
import type { Route } from './+types/page'
import { TheLHBSEdge } from '@/components/milestone'
import SubPageHero from '@/components/shared-ui/hero-carousel'
import { Breadcrumb, type BreadcrumbItem } from '@/components/ui/components/Breadcrumb'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Cột mốc phát triển - LHBS' },
    { name: 'description', content: '...' }
  ]
}

export default function MilestonePage() {
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Trang chủ', path: '/' },
    { label: 'Cột mốc phát triển' }
  ]

  return (
    <>
      <SubPageHero title="..." subtitle="..." backgroundImage="..." />
      <div className='w-full bg-white pt-12 pb-4 md:pt-20 md:pb-6 relative z-10'>
        <div className='container mx-auto px-4 md:px-8 lg:px-12'>
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </div>
      <TheLHBSEdge onNavigate={(path) => window.location.href = path} />
    </>
  )
}
```

**Step 4: Create Components** (`app/components/milestone/`)
```
milestone/
├── index.ts
├── mock-data.ts (optional)
└── section/
    └── the-lhbs-edge.tsx
```

### Quick Reference Checklist

When asked to create a new page:

1. ✅ Check `app/types/navigation.ts` for path
2. ✅ Add route to `app/routes.ts` (remove leading `/`)
3. ✅ Create `app/routes/[page-name]/page.tsx`
4. ✅ Add meta function
5. ✅ Add SubPageHero
6. ✅ Add Breadcrumb
7. ✅ Create `app/components/[page-name]/` folder
8. ✅ Create section components
9. ✅ Export sections in `index.ts`
10. ✅ Import and use sections in page

---

### Common Page Patterns

#### Pattern 1: Simple Content Page
```
Hero → Breadcrumb → Content Section → CTA Section
```

#### Pattern 2: Multi-Section Page
```
Hero → Breadcrumb → Intro Section → Feature Sections → Gallery → Testimonial → CTA
```

#### Pattern 3: Landing Page
```
Hero → Breadcrumb → Value Props → Benefits → Process → Pricing → FAQ → Contact
```

### Example Pages

**Reference existing pages for examples:**
- `/vision-mission` - Multi-section content page
- `/public-information` - Forms and documents page
- `/directors` - Profile showcase page
- `/our-campus` - Gallery and features page

---

## SUMMARY

This configuration ensures:
- **Consistency:** All components follow the same structure
- **Flexibility:** Props-driven design allows customization per app
- **Maintainability:** Clean code with constants and proper naming
- **Responsiveness:** Mobile-first approach with proper scaling
- **Brand Identity:** Consistent colors, typography, and design patterns

**When in doubt, refer to existing components in `libs/src/shared-ui/components/` for examples.**
