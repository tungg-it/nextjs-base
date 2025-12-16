import "server-only";

type FetchOptions = RequestInit & {
  revalidate?: number;
  tags?: string[];
};

export async function fetchServer<T>(
  url: string,
  options: FetchOptions = {}
): Promise<T> {
  const { revalidate, tags, ...init } = options;

  const res = await fetch(url, {
    ...init,
    cache: init.cache ?? "force-cache",
    next: {
      revalidate,
      tags,
    },
    headers: {
      "Content-Type": "application/json",
      ...init.headers,
    },
  });

  if (!res.ok) {
    throw new Error(`Fetch failed: ${res.status}`);
  }

  return res.json();
}
