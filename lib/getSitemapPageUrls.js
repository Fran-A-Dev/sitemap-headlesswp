import axios from "axios";
import { sitemapPerPage, wordpressUrl } from "../utils/variables";

export default async function getSitemapPageUrls({ type, page }) {
  if (type === "category" || type === "tag") {
    const res = await axios.get(
      `${wordpressUrl}/wp-json/sitemap/v1/taxonomy?pageNo=${page}&taxonomyType=${type}&perPage=${sitemapPerPage}`
    );
    return (await res?.data) ?? [];
  }
  if (type === "user") {
    const res = await axios.get(
      `${wordpressUrl}/wp-json/sitemap/v1/author?pageNo=${page}&perPage=${sitemapPerPage}`
    );
    return (await res?.data) ?? [];
  }

  const res = await axios.get(
    `${wordpressUrl}/wp-json/sitemap/v1/posts?pageNo=${page}&postType=${type}&perPage=${sitemapPerPage}`
  );
  return (await res?.data) ?? [];
}
