import {
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import "./index.css";

/* eslint-disable jsx-a11y/anchor-is-valid */
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { QueryProvider } from "./utils/react-query";

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
          <QueryProvider>
            <Link to="/">Home</Link>
            <Link to="/model-view">Model View</Link>{" "}
            <Link to="/data-view">Data View</Link>
            <Link to="/users">Users</Link>
            <Outlet />
          </QueryProvider>
          <ScrollRestoration />
          <Scripts />
        </body>
      </html>
    </QueryClientProvider>
  );
}
