import { frontendUrl } from "./variables";

export default function generateSitemapPaths(array) {
  const items = array.map(
    (item) =>
      `
            <url>
                <loc>${frontendUrl + item?.url}</loc>
                ${
                  item?.post_modified_date
                    ? `<lastmod>${
                        new Date(item?.post_modified_date)
                          .toISOString()
                          .split("T")[0]
                      }</lastmod>`
                    : ""
                }
            </url>
            `
  );
  return items.join("");
}
