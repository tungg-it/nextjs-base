import "server-only";
import { fetchServer } from "../http/fetch.server";
import { env } from "@/libs/env";

const API = `${env.api.baseUrl}/post-example`;

interface PostExample {
  id: string;
  title: string;
  content: string;
}

interface PostExampleResponse {
  data: PostExample[];
}

// ISR EXAMPLE
export function getPostExampleList() {
  return fetchServer<PostExampleResponse[]>(API, {
    revalidate: 300, // ISR 5 minutes (5 * 60)
    tags: ["post-example"],
  });
}

// SSR EXAMPLE
export function getPostExampleById(id: string) {
  return fetchServer<PostExample>(`${API}/${id}`, {
    cache: "no-store",
  });
}
