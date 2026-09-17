import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://letyarlabs.com/",
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://letyarlabs.com/download",
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
