import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  ssr: {
    /**
     * Externalize dependencies that should not be bundled into the server bundle.
     * Nivo & d3 dependencies don't seem to be compatible ssr - at least exporting as cjs.
     * Reasons unknown for now. Likely should investigate.
     */
    noExternal: [/^d3.*$/, /^@nivo.*$/],
  },
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
    }),
    tsconfigPaths(),
  ],
});
