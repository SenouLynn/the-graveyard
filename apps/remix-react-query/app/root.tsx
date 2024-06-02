import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import stylesheet from "./index.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];
/* eslint-disable jsx-a11y/anchor-is-valid */
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Instantiate client-side store for react-query once
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <Meta />
          <Links />
        </head>
        <body>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
        </body>
      </html>
    </QueryClientProvider>
  );
}
