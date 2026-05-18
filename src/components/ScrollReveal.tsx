import { useEffect } from "react";

/**
 * Globally observes <section> elements (and any [data-reveal] node) and
 * toggles the `.reveal-in` class as they enter the viewport, producing a
 * subtle fade + rise animation across the entire site.
 *
 * Also handles hash-link navigation: when the URL contains a #anchor, the
 * target element (and anything above it) is revealed immediately so the
 * browser can scroll to a fully-rendered position instead of landing on a
 * hidden/translated element.
 */
export function ScrollReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const io: IntersectionObserver | null = prefersReduced
      ? null
      : new IntersectionObserver(
          (entries) => {
            for (const entry of entries) {
              if (entry.isIntersecting) {
                entry.target.classList.add("reveal-in");
                io?.unobserve(entry.target);
              }
            }
          },
          { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
        );

    const revealImmediately = (el: Element) => {
      el.classList.add("reveal-in");
      if (io) io.unobserve(el);
    };

    const register = (root: ParentNode) => {
      const nodes = root.querySelectorAll<HTMLElement>("section, [data-reveal]");
      nodes.forEach((el) => {
        if (el.dataset.revealReady) return;
        el.dataset.revealReady = "1";
        el.classList.add("reveal");
        if (!io) {
          el.classList.add("reveal-in");
          return;
        }
        io.observe(el);
      });
    };

    register(document.body);

    // Handle hash navigation: reveal target + any element above it so the
    // anchor scroll lands on a fully laid-out, visible element.
    const handleHash = () => {
      const hash = window.location.hash;
      if (!hash || hash.length < 2) return;
      let target: HTMLElement | null = null;
      try {
        target = document.querySelector<HTMLElement>(hash);
      } catch {
        return;
      }
      if (!target) return;

      const targetTop = target.getBoundingClientRect().top + window.scrollY;
      document.querySelectorAll<HTMLElement>("section, [data-reveal]").forEach((el) => {
        const top = el.getBoundingClientRect().top + window.scrollY;
        if (top <= targetTop + 1) revealImmediately(el);
      });
      revealImmediately(target);

      // Re-scroll after layout settles so we land on the final position.
      requestAnimationFrame(() => {
        target!.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    };

    // Run once for initial load and listen for in-page hash changes.
    if (window.location.hash) {
      // Wait a tick so sections are registered first.
      setTimeout(handleHash, 0);
    }
    window.addEventListener("hashchange", handleHash);

    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        m.addedNodes.forEach((n) => {
          if (n.nodeType === 1) register(n as HTMLElement);
        });
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io?.disconnect();
      mo.disconnect();
      window.removeEventListener("hashchange", handleHash);
    };
  }, []);

  return null;
}
