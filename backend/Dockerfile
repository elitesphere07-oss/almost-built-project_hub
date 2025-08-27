FROM node:20-slim

WORKDIR /app

COPY package.json package-lock.json* pnpm-lock.yaml* bun.lockb* ./
COPY prisma ./prisma

RUN npm ci || npm install

COPY tsconfig.json ./
COPY src ./src

EXPOSE 4000

CMD ["npm", "run", "dev"]


