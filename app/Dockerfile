FROM node:18-bullseye

WORKDIR /usr/app
COPY .yarn ./.yarn
COPY package*.json yarn.lock .yarnrc.yml ./

RUN yarn set version 3.3.0
RUN npx browserslist@latest --update-db
RUN yarn
COPY . .

EXPOSE 5173

CMD ["yarn", "run", "dev"]
