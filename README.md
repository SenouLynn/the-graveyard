
# Process Notes

## Create Monorepo

`pnpm dlx create-turbo@latest`

---

## Create a Workspace

`turbo gen workspace`

---

## Run All Builds

`turbo build`

---

## Example Front-End Frameworks

### Vite (Raw)

Simply the build tooling provided by vite. No meta opinions.

`cd ./apps/[APP] && pnpm create vite`

Note:

- choose "React"
- choose "Typescript"

### Vite (Remix)

Remix meta framework with vite build tooling. Extremely opinionated but very well provisioned.

`cd ./apps/[APP] npx create-remix@latest`

---

## Core Tooling

### Express (Back-end-for-front-end or BFF)

Simple development workflow to validate back-end connection.

### Tailwind (Styling)

Utility focused css lib.

### React-Router (Page Routes)

Remix runs on react-router under the hood. If not using Remix, we can and should still use react-router functionally.

---

## Nice-To-Haves (Will get to this eventually)

### Storybook

A lovely complimentary front-end workshop. Building in and for Storybook has guided me towards cleaner component design.

### BFF => Front-End Typesafety

The tRPC protocol and tooling vastly enhances developer safety when arbitrating back-end and front-end code. It would great to have an example of this.

### Axios

Standardize on common protocol and semi-modern tooling. Can use in lock-step with tRPC but be aware this is a crusty old package.

### Prisma

Or some other ORM. Would like to extend knowledge base furthur into the db/data mgmt.

### Github Workflows

How a simple CI/CD pipeline could work with Github

### Unit Tests

Storybook has a very nice testing engine. I still haven't figured out how to integrate into a CI/CD workflow. Consider jest for functional testing or RTL for UI integration tests.

### Automating Dev Workflows with GoLang

Still cutting edge for me. Would like to automate scaffolding at the very least.
