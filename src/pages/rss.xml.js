import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function get() {
  return rss({
    title: "David Giraldo | Blog",
    description: "Mi viaje de aprendizaje de Astro",
    site: "https://degiraldod-astro-blog.netlify.app",
    items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
    customData: `<language>es-us</language>`,
  });
}
