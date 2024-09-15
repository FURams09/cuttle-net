FROM node:20-alpine AS base

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
EXPOSE 3000

FROM base AS deps
WORKDIR /app
RUN corepack enable pnpm && pnpm i --frozen-lockfile;

FROM base AS builder
WORKDIR /app
COPY  --from=deps /app/node_modules ./node_modules
COPY . .
RUN corepack enable pnpm && pnpm build

FROM base AS production
WORKDIR /app
ENV NODE_ENV=production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY --from=builder /app/src/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next
# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]

# FROM base as deps
# WORKDIR /app
# ENV NODE_ENV=development
# RUN yarn

# FROM base as builder
# WORKDIR /app
# COPY  --from=deps app/node_modules ./node_modules
# COPY tailwind.config.ts .eslintrc.json tsconfig.json next.config.mjs postcss.config.mjs ./
# COPY ./src ./src
# RUN yarn build

# FROM base as dev
# ENV NODE_ENV=development
# RUN yarn 
# COPY . .
# CMD yarn dev

