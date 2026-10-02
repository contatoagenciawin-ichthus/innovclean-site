import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://innovclean.co.uk";
  const routes = ["", "/about", "/services", "/contact", "/privacy"];

  return routes.map((route) => ({
    url: base + route,
    lastModified: new Date(),
    changeFrequency: route === "" ? "monthly" : "yearly",
    priority: route === "" ? 1 : route === "/services" ? 0.9 : 0.7,
  }));
}
