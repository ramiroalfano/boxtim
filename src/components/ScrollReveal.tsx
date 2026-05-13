import { useEffect } from "react";

/**
 * Globally observes <section> elements (and any [data-reveal] node) and
 * toggles the `.reveal-in` class as they enter the viewport, producing a
 * subtle fade + rise animation across the entire site.
 */
export function ScrollReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-in");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    const register = (root: ParentNode) => {
      const nodes = root.querySelectorAll<HTMLElement>(
        "section, [data-reveal]"
      );
      nodes.forEach((el) => {
        if (el.dataset.revealReady) return;
        el.dataset.revealReady = "1";
        el.classList.add("reveal");
        io.observe(el);
      });
    };

    register(document.body);

    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        m.addedNodes.forEach((n) => {
          if (n.nodeType === 1) register(n as HTMLElement);
        });
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
