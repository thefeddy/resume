FROM node:20-alpine AS development-dependencies-env
COPY . /app
WORKDIR /app
RUN npm ci

FROM node:20-alpine AS production-dependencies-env
COPY ./package.json package-lock.json /
WORKDIR /app
RUN npm ci --omit=dev

FROM node:20-alpine AS build-env
COPY . /
COPY --from=development-dependencies-env /node_modules /node_modules
WORKDIR /app
RUN npm run build

FROM node:20-alpine
COPY ./package.json package-lock.json /
COPY --from=production-dependencies-env /node_modules /node_modules
COPY --from=build-env /build /build
WORKDIR /app
CMD ["npm", "run", "start"]