FROM node:16-alpine as builder
WORKDIR /app
COPY prisma ./prisma
COPY public ./public
COPY src ./src
COPY swagger ./swagger
COPY tsconfig.json .
COPY package.json .
COPY package-lock.json .
RUN npm install
RUN npm run build
RUN npx prisma generate

FROM node:16-alpine
WORKDIR /app
ENV NODE_ENV production

COPY package*.json ./

COPY --chown=node:node --from=builder /app/swagger /app/swagger
COPY --chown=node:node --from=builder /app/prisma /app/prisma
COPY --chown=node:node --from=builder /app/dist /app/dist
COPY --chown=node:node --from=builder /app/node_modules /app/node_modules

USER node

EXPOSE 3000
CMD ["npm","run", "start"]