import { useEffect } from "react";
import { absoluteUrl, canonicalUrl, isServer, ssrHead } from "../seo/head";

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(url: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", url);
}

// SEO por página: título, descripción, canónica, Open Graph y Twitter.
export function usePageMeta({
  title,
  description,
  path = "/",
  image,
  type = "website",
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
}) {
  // Por defecto: 1200x630 JPG, compatible con WhatsApp, Facebook y LinkedIn.
  const img = absoluteUrl(image || "/og-image.jpg");
  const url = canonicalUrl(path);

  if (isServer) {
    Object.assign(ssrHead, { title, description, url, image: img, type });
  }

  useEffect(() => {
    document.title = title;
    setMeta("name", "description", description);
    setCanonical(url);
    setMeta("property", "og:type", type);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", img);
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", img);
  }, [title, description, url, img, type]);
}

// Datos estructurados (schema.org) por página. `id` evita duplicados al navegar.
export function useJsonLd(id: string, data: Record<string, unknown> | null) {
  if (isServer && data) ssrHead.jsonLd.push(data);
  const json = data ? JSON.stringify(data) : "";
  useEffect(() => {
    if (!json) return;
    document.getElementById(`ld-${id}`)?.remove();
    const s = document.createElement("script");
    s.type = "application/ld+json";
    s.id = `ld-${id}`;
    s.text = json;
    document.head.appendChild(s);
    return () => s.remove();
  }, [id, json]);
}
