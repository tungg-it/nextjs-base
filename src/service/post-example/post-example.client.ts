"use client";

import { ApiItemResponse } from "@/types/api";
import apiClient from "../http/fetch.client";

interface PostExample {
  id: string;
  title: string;
  content: string;
}

export async function downloadPostExampleById(id: string) {
  const res = await apiClient.get<ApiItemResponse<PostExample>>(
    `/post-example/${id}/download`
  );
  return res;
}
