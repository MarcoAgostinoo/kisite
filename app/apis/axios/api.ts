// app/apis/lib/FetchPosts.ts
import axios from "axios";

export async function fetchPosts() {
  try {
    const response = await axios.get(
      `${process.env.STRAPI_API_URL}/api/posts?populate=*`,
      {
        headers: {
          Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
        }
      }
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(
        "API Error:",
        error.response?.status,
        error.response?.data
      );
    }
    return { data: [] };
  }
}