import { useEffect } from "react";

const SITE_NAME = "Heartstar Dynamics";
const SITE_URL = "https://www.heartstardynamics.com";

function setMeta(attr, key, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/**
 * Lightweight per-page SEO manager — updates document title, meta description,
 * Open Graph / Twitter tags, and the canonical link on mount.
 */
export default function SEO({ title, description, path = "/", image = "/og-image.jpg" }) {
  useEffect(() => {
    const fullTitle = title ?? SITE_NAME;
    const url = `${SITE_URL}${path}`;
    const absoluteImage = image.startsWith("http") ? image : `${SITE_URL}${image}`;

    document.title = fullTitle;
    setMeta("name", "description", description);
    setCanonical(url);

    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", absoluteImage);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:site_name", SITE_NAME);

    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", absoluteImage);
  }, [title, description, path, image]);

  return null;
}
