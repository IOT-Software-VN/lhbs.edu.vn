import { type RouteConfig, index, layout, route } from '@react-router/dev/routes'

export default [
  layout('components/layouts/layout.tsx', [
    // Home page
    index('routes/home.tsx'),
    // Catch-all route for 404 pages (must be last)
    route('*', 'routes/404.tsx'),
  ])
] satisfies RouteConfig
