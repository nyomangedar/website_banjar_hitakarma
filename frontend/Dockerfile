# ============================
# 1️⃣ Base image
# ============================
FROM node:18-alpine AS base
WORKDIR /app

# Fix for some native packages
RUN apk add --no-cache libc6-compat

# ----------------------------
# 2️⃣ Dependencies stage
# ----------------------------
FROM base AS deps

# Copy lockfiles (support yarn/npm/pnpm)
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./

# Install dependencies (include devDeps so Next.js is available)
RUN \
  if [ -f yarn.lock ]; then yarn install --frozen-lockfile --production=false; \
  elif [ -f package-lock.json ]; then npm ci --include=dev; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm install --frozen-lockfile; \
  else echo "Lockfile not found" && exit 1; \
  fi

# ----------------------------
# 3️⃣ Build stage
# ----------------------------
FROM base AS builder
WORKDIR /app

# Copy dependencies and source
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Optional: disable Next.js telemetry
# ENV NEXT_TELEMETRY_DISABLED 1

# Build Next.js app
RUN yarn build

# ----------------------------
# 4️⃣ Runtime (production) stage
# ----------------------------
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0
EXPOSE 3000

# Create non-root user
RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 nextjs
USER nextjs

# --- Option A: If using standalone build (recommended) ---
# Requires next.config.js → { output: "standalone" }
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# --- Option B: Fallback for normal build ---
# Uncomment this block and comment the 3 lines above if you don’t use standalone
# COPY --from=builder /app/.next ./.next
# COPY --from=builder /app/public ./public
# COPY --from=builder /app/node_modules ./node_modules
# COPY --from=builder /app/package.json ./package.json

# Start the app
CMD ["node", "server.js"]
