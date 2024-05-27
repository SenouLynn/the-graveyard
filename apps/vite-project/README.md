# Vite Project

## Create Vite Project

 `pnpm create vite`

## Startup

Install depa:

- 'pnpm i'

In separate terminals:

`pnpm run dev`

`pnpm run serve`

## Server

Dependencies:

    - express
    - @types/express
    - @remix-run/express
    - cors

Do:

    - add cors for dev purposes
    - specify port
    - setup terminal scripts in package.json

`"dev": "remix vite:dev"`

`"serve": "pnpm exec tsx server.ts"`

    - run serve script in separate terminal

## Tailwind

Dependencies:

    - tailwindcss
    - postcss
    - autoprefixer

Do:

    - install deps
    - `npx tailwindcss init -p` to create tailwind + postcss config
    - add to tailwind.config.js

        `content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],`
    
    - add to index.css
        `@tailwind base;`
        `@tailwind components;`
        `@tailwind utilities;`
