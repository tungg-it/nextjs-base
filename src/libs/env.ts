export const env = {
  app: {
    url: process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
    name: process.env.NEXT_PUBLIC_APP_NAME ?? "Nextjs base project",
  },
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3000/api",
  },
} as const;
