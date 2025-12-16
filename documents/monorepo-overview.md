# 📘 Monorepo Overview - LHBS Project

> **Tài liệu dành cho:** Frontend Developer  
> **Dự án:** LHBS - Trường Song Ngữ Lạc Hồng (Since 2011)  
> **Thực hiện bởi:** IOT Software  
> **Tech Stack:** Nx + React Router + Vite + TailwindCSS v4 + Vitest

<div align="center">
  <img src="../.github/images/Logo-LHBS.png" alt="LHBS Logo" width="200"/>
  <p><strong>Trường Song Ngữ Lạc Hồng - Since 2011</strong></p>
</div>

---

## 📑 Mục Lục

1. [Tổng Quan Monorepo](#1-tổng-quan-monorepo)
2. [Yêu Cầu Hệ Thống](#2-yêu-cầu-hệ-thống)
3. [Khởi Tạo Workspace](#3-khởi-tạo-workspace)
4. [Cấu Trúc Workspace](#4-cấu-trúc-workspace)
5. [Shared Libraries (libs)](#5-shared-libraries-libs)
6. [Quản Lý Dependencies](#6-quản-lý-dependencies)
7. [Nx Commands](#7-nx-commands)
8. [Best Practices](#8-best-practices)
9. [TailwindCSS Configuration](#9-tailwindcss-configuration)

---

## 1. Tổng Quan Monorepo

### 🎯 Giới Thiệu

LHBS Monorepo là workspace quản lý tập trung 4 applications của Trường Song Ngữ Lạc Hồng sử dụng Nx framework.

### 🏢 Thông Tin Dự Án

| Thông Tin | Chi Tiết |
|-----------|----------|
| **Khách hàng** | LHBS - Trường Song Ngữ Lạc Hồng |
| **Thành lập** | 2011 |
| **Công ty** | IOT Software |
| **Monorepo Tool** | Nx 22.x |

### 📦 Applications

| App | Domain | Port | Mô Tả |
|-----|--------|------|-------|
| **lhbs.edu.vn** | https://lhbs.edu.vn | 4200 | Website chính |
| **school.lhbs.edu.vn** | https://school.lhbs.edu.vn | 4201 | School Portal |
| **bienhoa.galaxy.lhbs.edu.vn** | - | 4202 | Campus Biên Hòa |
| **longkhanh.galaxy.lhbs.edu.vn** | - | 4203 | Campus Long Khánh |

### 🎨 Tech Stack Chung

| Công Nghệ | Version | Mục Đích |
|-----------|---------|----------|
| **Nx** | 22.2.1 | Monorepo management |
| **React** | 19.x | UI library |
| **React Router** | 7.2.0 | Routing framework |
| **Vite** | 7.x | Build tool |
| **TailwindCSS** | 4.1.x | CSS framework |
| **TypeScript** | 5.9.x | Type system |
| **Vitest** | 4.x | Testing framework |

### 🏗️ Monorepo Structure

```
LHBS-demo/
├── apps/                    # Applications
│   ├── lhbs.edu.vn/
│   ├── school.lhbs.edu.vn/
│   ├── bienhoa.galaxy.lhbs.edu.vn/
│   └── longkhanh.galaxy.lhbs.edu.vn/
├── libs/                    # Shared libraries
│   ├── src/
│   │   ├── components/      # Shared UI components (Radix UI)
│   │   ├── shared-ui/       # Custom shared components & layouts
│   │   ├── hooks/           # React hooks
│   │   ├── lib/             # Utilities & helpers
│   │   ├── types/           # TypeScript types
│   │   └── index.ts         # Library exports
│   ├── assets/              # Shared assets (images, icons)
│   ├── package.json
│   ├── vite.config.mts      # Vite bundler config
│   └── tsconfig.lib.json
├── documents/               # Documentation
├── node_modules/
├── package.json             # Root dependencies
├── nx.json                  # Nx configuration
└── tsconfig.base.json       # Base TypeScript config
```

### ✅ Prerequisites

```bash
# Node.js >= 18.x (Recommended: 20.x LTS)
node --version

# npm >= 9.x
npm --version

# Git
git --version
```

---

## 2. Yêu Cầu Hệ Thống

```bash
# Cài đặt Nx CLI globally (khuyến nghị)
npm install -g nx
```

---3

## 2. Khởi Tạo Workspace

### Bước 1: Tạo Nx Workspace

```bash
npx create-nx-workspace@latest
```

### Bước 2: Trả Lời Interactive Prompts

```plaintext
? Where would you like to create your workspace? 
› LHBS-demo

? Which starter do you want to use?
  TypeScript        (minimal TypeScript monorepo without projects)
  NPM Packages      (monorepo with TypeScript packages ready to publish)
  React             (fullstack monorepo with React and Express)
  Angular           (fullstack monorepo with Angular and Express)
❯ Custom            (more options for frameworks, test runners, etc.)

? Which stack do you want to use?
  None:          Configures a TypeScript/JavaScript monorepo.
❯ React:         Configures a React application with your framework of choice. 
  Vue:           Configures a Vue application with your framework of choice.
  Angular:       Configures a Angular application with modern tooling.
  Node:          Configures a Node API application with your framework of choice.

? What framework would you like to use?
❯ None          I only want react, react-dom or react-router 
  Next.js       [ https://nextjs.org/       ]
  Expo          [ https://expo.io/          ]
  React Native  [ https://reactnative.dev/  ]

? Would you like to use React Router for server-side rendering?
❯ Yes I want to use React Router. (Vite will be selected as the bundler) 
  No

? Which unit test runner would you like to use?
❯ Vitest [ https://vitest.dev/ ] 
  Jest   [ https://jestjs.io/ ]
  None

? Test runner to use for end to end (E2E) tests
  Playwright [ https://playwright.dev/ ]
  Cypress [ https://www.cypress.io/ ]
❯ None

? Default stylesheet format
  CSS
  SASS(.scss)       [ https://sass-lang.com   ]
  LESS              [ https://lesscss.org     ]
❯ tailwind          [ https://tailwindcss.com     ] 
  styled-components [ https://styled-components.com            ]
  emotion           [ https://emotion.sh                       ]
  styled-jsx        [ https://www.npmjs.com/package/styled-jsx ]

? Would you like remote caching to make your build faster?
❯ Yes 
  No - I would not like remote caching
```

### 📋 Cấu Hình Được Chọn

| Tùy Chọn | Giá Trị |
|----------|---------|
| **Workspace name** | `LHBS-demo` |
| **Starter** | `Custom` |
| **Stack** | `React` |
| **Framework** | `None (React Router)` |
| **React Router SSR** | `Yes (Vite bundler)` |
| **Unit Test** | `Vitest` |
| **E2E Test** | `None` |
| **Stylesheet** | `Tailwind` |
| **Remote Caching** | `Yes` |

### Bước 3: Di Chuyển Vào Workspace

```bash
cd LHBS-demo
```

---

## 4. Cấu Trúc Workspace

### Workspace Layout

```
LHBS-demo/
├── apps/                          # Applications
│   ├── lhbs.edu.vn/              # Main website
│   ├── school.lhbs.edu.vn/       # School portal
│   ├── bienhoa.galaxy.lhbs.edu.vn/
│   └── longkhanh.galaxy.lhbs.edu.vn/
│
├── libs/                          # Shared Library
│   ├── src/
│   │   ├── components/           # Shared UI components (Radix UI)
│   │   │   └── ui/               # Button, Card, Accordion, Carousel
│   │   ├── shared-ui/            # Custom shared components
│   │   │   ├── components/       # Hero, News, Testimonials, etc.
│   │   │   └── layouts/          # Footer, Header, Menu
│   │   ├── hooks/                # Custom React hooks
│   │   ├── lib/                  # Utilities & helpers
│   │   ├── types/                # TypeScript types & interfaces
│   │   ├── app.css              # TailwindCSS imports
│   │   └── index.ts             # Library exports
│   ├── assets/                   # Shared static assets
│   │   ├── base/                # Logos, icons
│   │   └── home-page/           # Homepage images
│   ├── package.json
│   ├── vite.config.mts          # Vite bundler configuration
│   ├── tsconfig.lib.json        # TypeScript library config
│   └── README.md
│
├── documents/                     # Documentation
│   ├── monorepo-overview.md
│   └── apps-overview.md
│
├── .github/                       # GitHub configs
│   └── images/
│       └── Logo-LHBS.png
│
├── node_modules/
├── dist/                          # Build outputs
├── package.json                   # Root dependencies
├── package-lock.json
├── nx.json                        # Nx configuration
├── tsconfig.base.json             # Base TypeScript config
├── eslint.config.mjs              # ESLint config
├── vitest.workspace.ts            # Vitest workspace
└── README.md
```

### Key Files

| File | Mô Tả |
|------|-------|
| `nx.json` | Nx workspace configuration, plugins, caching |
| `package.json` | Root dependencies, workspaces config |
| `tsconfig.base.json` | Shared TypeScript configuration, path aliases |
| `vitest.workspace.ts` | Vitest projects configuration |
| `libs/vite.config.mts` | Vite bundler config for libs |

---

## 5. Shared Libraries (libs)

### 📚 Tổng Quan

Folder `libs/` chứa tất cả shared code được sử dụng chung cho các applications trong monorepo.

### 🎯 Tạo Libs Project

```bash
# Generate libs project với Nx
npx nx g @nx/js:lib libs

# Interactive prompts:
? Which bundler would you like to use?
❯ vite

? Which unit test runner would you like to use?
❯ none

? Which linter would you like to use?
❯ none
```

### 📋 Cấu Hình Libs

| Option | Value |
|--------|-------|
| **Name** | `libs` |
| **Bundler** | `vite` |
| **Test Runner** | `none` |
| **Linter** | `none` |

### 🗂️ Libs Structure

```
libs/
├── src/
│   ├── components/ui/           # Radix UI components
│   │   ├── accordion.tsx
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── carousel.tsx
│   │   └── index.ts
│   │
│   ├── shared-ui/               # Custom shared components
│   │   ├── components/
│   │   │   ├── hero-section/
│   │   │   │   ├── hero-carousel.tsx
│   │   │   │   ├── hero-video.tsx
│   │   │   │   └── README.md
│   │   │   ├── news-section/
│   │   │   ├── testimonial-quote-section/
│   │   │   ├── animated-highlight.tsx
│   │   │   ├── ImageWithFallback.tsx
│   │   │   ├── ScrollIndicator.tsx
│   │   │   └── ScrollToTop.tsx
│   │   ├── layouts/
│   │   │   ├── Footer.tsx
│   │   │   ├── FullScreenMenu.tsx
│   │   │   └── StickyHeader.tsx
│   │   └── index.ts
│   │
│   ├── hooks/
│   │   └── index.ts
│   │
│   ├── lib/
│   │   ├── libs.ts
│   │   └── utils.ts           # cn() helper, etc.
│   │
│   ├── types/
│   │   └── navigation.ts
│   │
│   ├── app.css                # TailwindCSS imports
│   └── index.ts               # Main export entry
│
├── assets/                     # Shared assets
│   ├── base/
│   │   ├── logo-head.png
│   │   └── Footer.jpg
│   └── home-page/
│       ├── Hero-bg.png
│       ├── section-education/
│       └── section-news/
│
├── package.json
├── vite.config.mts
├── tsconfig.lib.json
└── README.md
```

### 📦 Libs Exports

**File:** `libs/src/index.ts`

```typescript
// Utils
export * from './lib/libs.js'
export { cn } from './lib/utils'

// UI Components (Radix UI)
export * from './components/ui'

// Shared UI Components
export * from './shared-ui'

// Types
export * from './types/navigation'
```

### 🔗 Import Trong Apps

**Path Alias:** `@sites` hoặc `@sites/*`

```typescript
// Import từ libs
import { HeroCarousel, Footer, StickyHeader } from '@sites/index'
import { Button, Card } from '@sites/components/ui'
import type { NavigationData } from '@sites/types/navigation'
```

### ⚙️ TypeScript Configuration

**File:** `tsconfig.base.json`

```json
{
  "compilerOptions": {
    "paths": {
      "@sites": ["./libs/src"],
      "@sites/*": ["./libs/src/*"],
      "@assets/*": ["./assets/*"]
    }
  }
}
```

### 🎨 Shared Assets

Assets trong `libs/assets/` được share cho tất cả apps:

```typescript
// Import asset từ libs
import logoImage from '@assets/images/base/logo-head.png'
import heroImage from '@assets/images/home-page/Hero-bg.png'
```

---

## 6. Quản Lý Dependencies

### Root vs App Dependencies

**Root `package.json`:**
- Shared dependencies cho tất cả apps
- DevDependencies (build tools, linters, etc.)

**App `package.json` (optional):**
- App-specific dependencies
- Không khuyến nghị trong monorepo

### Install Dependencies

```bash
# Install cho toàn workspace
npm install

# Add dependency vào root
npm install <package-name>

# Add dev dependency
npm install -D <package-name>
```

### Update Dependencies

```bash
# Update all dependencies
npm update

# Update specific package
npm update <package-name>

# Check outdated
npm outdated
```

---

## 7. Nx Commands

### Workspace Commands

```bash
# Show workspace info
nx show project lhbs.edu.vn

# List all projects
nx show projects

# View dependency graph
nx graph

# View affected projects
nx affected:graph
```

### Run Commands

```bash
# Run target for one project
nx <target> <project>

# Run for multiple projects
nx run-many --target=<target> --projects=project1,project2

# Run for all projects
nx run-many --target=<target> --all

# Run affected projects only
nx affected --target=<target>
```

### Libs Commands

```bash
# Build libs
nx build libs

# Watch mode for development
nx build libs --watch

# Type check libs
nx typecheck libs
```

### Cache Commands

```bash
# Clear Nx cache
nx reset

# Show cache info
nx show project lhbs.edu.vn --web
```

---

## 8. Best Practices

### Monorepo Organization

✅ **DO:**
- Đặt shared code trong `libs/`
- Sử dụng path aliases (`@sites/*`)
- Tận dụng Nx caching
- Run affected commands trong CI/CD
- Export components từ `libs/src/index.ts`

❌ **DON'T:**
- Duplicate code giữa các apps
- Install dependencies riêng cho từng app
- Ignore Nx cache
- Run tất cả tests mọi lúc
- Import trực tiếp từ file path thay vì alias

### Libs Development

✅ **DO:**
- Export tất cả shared components qua `index.ts`
- Sử dụng TypeScript interfaces cho props
- Document components với README
- Keep components reusable và generic

❌ **DON'T:**
- Hard-code app-specific logic trong libs
- Export internal implementation details
- Create circular dependencies

### Dependency Management

✅ **DO:**
- Maintain consistent versions
- Install shared deps tại root level
- Regular dependency updates

❌ **DON'T:**
- Mix different versions
- Install same package multiple times
- Add app-specific deps vào libs

### Git Workflow

```bash
# Check affected projects
nx affected:apps

# Run affected tests
nx affected --target=test

# Build affected apps
nx affected --target=build
```

---

## 9. TailwindCSS Configuration

### ⚠️ QUAN TRỌNG: Libs + TailwindCSS Setup

Khi sử dụng components từ `libs/` trong apps, **BẮT BUỘC** phải config Tailwind để scan libs folder.

### 📝 Configuration Trong Apps

**File:** `apps/<app-name>/app/app.css`

```css
@import "tailwindcss";
@import "tw-animate-css";

/* ⚠️ QUAN TRỌNG: Cấu hình scan libs folder */
@source "../../../libs/src/**/*.{ts,tsx,js,jsx}";
@source "./**/*.{ts,tsx,js,jsx}";

@custom-variant dark (&:is(.dark *));
```

### 🔍 Giải Thích

| Directive | Mô Tả |
|-----------|-------|
| `@source "../../../libs/src/**/*.{ts,tsx,js,jsx}"` | Scan tất cả files trong libs để generate Tailwind classes |
| `@source "./**/*.{ts,tsx,js,jsx}"` | Scan files trong app hiện tại |

### ⚡ Tại Sao Cần Thiết?

1. **Libs không bundle CSS**: Library chỉ export raw JSX với className strings
2. **Apps generate CSS**: Mỗi app phải scan libs để generate Tailwind classes
3. **Path phải chính xác**: `../../../libs/src/` từ `apps/<name>/app/app.css`

### 🚫 Lỗi Thường Gặp

```css
/* ❌ SAI - Path không đúng */
@source "../../libs/**/*.{ts,tsx,js,jsx}";

/* ❌ SAI - Thiếu /src */
@source "../../../libs/**/*.{ts,tsx,js,jsx}";

/* ✅ ĐÚNG */
@source "../../../libs/src/**/*.{ts,tsx,js,jsx}";
```

### 🔧 Troubleshooting

**Vấn đề:** Components từ libs bị mất styles

**Giải pháp:**
1. Kiểm tra `@source` directive trong `app.css`
2. Đảm bảo path trỏ đúng `libs/src/`
3. Restart dev server sau khi thay đổi CSS config

```bash
# Stop server (Ctrl+C)
# Then restart
nx dev <app-name>
```

### 📋 Checklist Setup TailwindCSS

- [ ] Thêm `@source` directive vào mỗi app's `app.css`
- [ ] Path: `../../../libs/src/**/*.{ts,tsx,js,jsx}`
- [ ] Restart dev server
- [ ] Verify styles render correctly

---

## 📚 Tài Liệu Liên Quan

- [Apps Overview](./apps-overview.md) - Chi tiết về applications
- [Libs README](../libs/README.md) - Chi tiết về shared library
- [Hero Carousel Component](../libs/src/shared-ui/components/hero-section/README.md)
- [Nx Documentation](https://nx.dev)
- [React Router v7](https://reactrouter.com)
- [TailwindCSS v4](https://tailwindcss.com)

---

## 🎯 Checklist Setup Workspace

- [ ] Khởi tạo Nx workspace
- [ ] Setup Git repository
- [ ] Configure Nx Cloud (optional)
- [ ] Setup shared TypeScript config
- [ ] Install shared dependencies
- [ ] Create first application
- [ ] **Generate libs project**
- [ ] **Configure TailwindCSS @source trong apps**
- [ ] Setup CI/CD pipeline
- [ ] Document workspace structure

---

**Thực hiện bởi:** ERICSS Developer  
**Công ty:** IOT Software  
**Khách hàng:** LHBS - Trường Song Ngữ Lạc Hồng  
**Version:** 1.1  
**Last Updated:** 16/12/2025
