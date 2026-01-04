# LHBS Main App Dockerfile
# Optimized for pnpm monorepo with Turborepo

# ============================================
# Stage 1: Base image with pnpm
# ============================================
FROM node:20-alpine AS base
RUN corepack enable && corepack prepare pnpm@9.0.0 --activate
WORKDIR /app

# ============================================
# Stage 2: Install dependencies
# ============================================
FROM base AS deps
# Install dependencies needed for native modules
RUN apk add --no-cache libc6-compat

# Copy workspace configuration files
COPY pnpm-workspace.yaml package.json pnpm-lock.yaml ./
COPY turbo.json ./

# Copy all package.json files for workspace packages
COPY apps/main/package.json ./apps/main/
COPY packages/config/package.json ./packages/config/
COPY packages/ui/package.json ./packages/ui/
COPY packages/utils/package.json ./packages/utils/
COPY packages/styles/package.json ./packages/styles/

# Install all dependencies
RUN pnpm install --frozen-lockfile

# ============================================
# Stage 3: Build the application
# ============================================
FROM base AS builder
WORKDIR /app

# Copy node_modules from deps stage
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/apps/main/node_modules ./apps/main/node_modules
COPY --from=deps /app/packages ./packages

# Copy source code
COPY . .

# Build with Turborepo (only main app)
ENV NODE_ENV=production
RUN pnpm turbo run build --filter=@lhbs/main

# ============================================
# Stage 4: Production runner
# ============================================
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# Create non-root user for security
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy built static files
COPY --from=builder /app/apps/main/out ./out

# Install a simple static file server
RUN npm install -g serve

USER nextjs

EXPOSE 3000

# Serve static files
CMD ["serve", "out", "-l", "3000"]
