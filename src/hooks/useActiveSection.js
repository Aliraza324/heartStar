import { useEffect, useState } from "react";

/**
 * Tracks which section id is currently most visible in the viewport,
 * for scroll-spy style nav highlighting.
 */
export default function useActiveSection(sectionIds, options = { rootMargin: "-45% 0px -50% 0px" }) {
  const [activeId, setActiveId] = useState(sectionIds[0]);

  useEffect(() => {
    const elements = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
    if (!elements.length) return undefined;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveId(entry.target.id);
      });
    }, options);

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIds, options]);

  return activeId;
}
