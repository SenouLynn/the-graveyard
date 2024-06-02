# React UI External UI Package

Built externally for use in your monorepo or publish on npm for use in other projects

## Core Tooling

- Vite as build tool
- Typescript
- Storybook for local development

## Process Notes

### Scaffold Vite Package

`pnpm create vite`

NOTE: Choose React & Typescript

### Tweak Basic Config

- Update tsconfig to target ESNEXT
  - Some basic javascript types (like .replaceAll) will barf if you don't

### Setup Tailwind

Dependencies:

    - tailwindcss
    - postcss
    - autoprefixer

Do:

    - install deps
    
        `pnpm add -d tailwindcss postcss autoprefix`

    - `npx tailwindcss init -p` to create tailwind + postcss config
    - add to tailwind.config.js

        `content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],`
    
    - add to index.css
        `@tailwind base;`
        `@tailwind components;`
        `@tailwind utilities;`

    - see current vite.config.ts to see how to configure a ui-library export

### Setup Storybook

Do:

    - Initialize storybook setup cli

      `pnpm dlx storybook@latest init`

    - Import local index.css to .storybook => preview
      - This is setup for local Storybook devlopment, will have to point to build artifact if implementing in CI

    - Add auto docs parameter to .storybook => preview

      `tags: ['autodocs']`
