# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Create

### Vite (Remix)

Remix meta framework with vite build tooling. Extremely opinionated but very well provisioned.

`npx create-remix@latest`

## Startup

Instal deps:

`pnpm i`

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

## Templater App Thoughts

Purpose: Generic Management portal to consume known data and display coehisvely

## Driving Idea

- Generic data shapes passed to front-ends
- Smooth over the app scaffolding process
- Generisize themeing to apply to N customers with as little re-build as possible
- Will this be a developer tool or a managemenet portal? Can it be both?
  - Expose simple UI API's through opinionated architecture or dedicated management portal
- Is there an easy way to bubble up relational data logic to the user? Should it be?
- How can we plug in a data shape and:
  - Auto-generate tabular displays
  - Auto-generate api's to manage either data sets or data points
  - Auto-generate form UI's to manage data sets
- Consider comonalities when consuming and operating on either data sets or data points
- Consider how to prescribe relationships to disparate data types
