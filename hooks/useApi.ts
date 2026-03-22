import React from "react";

const baseURL = "https://advanced-internship-api-production.up.railway.app";

export async function useApi(path: string) {
  try {
    const response = await fetch(`${baseURL}${path}`, {
      // next: { revalidate: 3600 },
    });

    const json = await response.json();
    return json.data;
  } catch (error) {
    console.error("Server Api ERROR:", error);
    return [];
  }
}
