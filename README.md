
# Process Notes

## Create Monorepo

`pnpm dlx create-turbo@latest`

## Create a Workspace

`turbo gen workspace`

## Frameworks

### Vite (Raw)

Simply the build tooling provided by vite. No meta opinions.

`cd ./apps/[APP] && pnpm create vite`

Note:

- choose "React"
- choose "Typescript"

### Vite (Remix)

Remix meta framework with vite build tooling. Extremely opinionated but very well provisioned.

`cd ./apps/[APP] npx create-remix@latest`
