import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const baseConfig: NextConfig = {
  reactCompiler: true,
};

// Initialize the Next-Intl plugin
const configWithPlugins = createNextIntlPlugin("./src/libs/i18n/index.ts")(
  baseConfig
);

const nextConfig = configWithPlugins;
export default nextConfig;
