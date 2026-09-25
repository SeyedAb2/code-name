import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // These client components intentionally hydrate browser-persisted state after mount.
  {
    files: [
      "src/components/layout/Loader.tsx",
      "src/components/roadmap/RoadmapDetail.tsx",
      "src/components/roadmap/RoadmapIndex.tsx",
      "src/components/roadmap/useRoadmapProgress.ts",
      "src/components/search/SearchDialog.tsx",
      "src/context/PrefsContext.tsx",
    ],
    rules: { "react-hooks/set-state-in-effect": "off" },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
