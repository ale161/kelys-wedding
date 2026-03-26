# Dockerfile for Railway deployment
# Build stage
FROM node:22-alpine AS builder

WORKDIR /app

# Install pnpm using corepack with specific version from package.json
RUN corepack enable && corepack prepare pnpm@10.4.1 --activate

# Copy package files
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Copy source
COPY . .

# Build the app
RUN pnpm run build

# Production stage
FROM node:22-alpine AS runner

WORKDIR /app

# Install pnpm using corepack with specific version from package.json
RUN corepack enable && corepack prepare pnpm@10.4.1 --activate

# Copy package files and install production deps only
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --prod

# Copy built files from builder
COPY --from=builder /app/dist ./dist

EXPOSE 3000

ENV NODE_ENV=production
ENV PORT=3000

# Use exec form to ensure proper signal handling
CMD ["node", "dist/index.js"]
