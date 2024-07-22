import {
  Links,
  Meta,
  NavLink,
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
            <div className="flex flex-row gap-3 divide-x px-2 py-1 ">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/model-view">Model View</NavLink>
              <NavLink to="/tickers">Tickers</NavLink>
              <NavLink to="/streams">Streams</NavLink>
            </div>
            <Outlet />
          </QueryProvider>
          <ScrollRestoration />
          <Scripts />
        </body>
      </html>
    </QueryClientProvider>
  );
}
