# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Create

### Vite (Remix)

Remix meta framework with vite build tooling. Extremely opinionated but very well provisioned.

`npx create-remix@latest`

## Startup

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
        `content: ["./app/**/*.{js,ts,jsx,tsx}"],`
    - create + add to app/index.css
        `@tailwind base;`
        `@tailwind components;`
        `@tailwind utilities;`
    - add to app/root.ts
        ```
        import stylesheet frosm "./index.css";
        import type { LinksFunction } from "@remix-run/node";

        export const links: LinksFunction = () => [
        { rel: "stylesheet", href: stylesheet },
        ];
        ```
