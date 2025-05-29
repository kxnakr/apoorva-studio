import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

interface ScrollAnimationOptions {
  y?: number;
  x?: number;
  opacity?: number;
  scale?: number;
  rotation?: number;
  duration?: number;
  delay?: number;
  stagger?: number;
  ease?: string;
}

export const useScrollAnimation = <T extends HTMLElement = HTMLDivElement>(
  options: ScrollAnimationOptions = {}
) => {
  const elementRef = useRef<T>(null);

  const {
    y = 60,
    x = 0,
    opacity = 0,
    scale = 1,
    rotation = 0,
    duration = 1,
    delay = 0,
    stagger = 0,
    ease = "power2.out",
  } = options;

  useGSAP(() => {
    if (!elementRef.current) return;

    // Set initial state
    gsap.set(elementRef.current, {
      y,
      x,
      opacity,
      scale: scale === 1 ? 1 : scale,
      rotation,
    });

    // Create intersection observer for smooth scroll triggers
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const children = elementRef.current?.children;

          if (children && children.length > 1 && stagger > 0) {
            // Animate children with stagger
            gsap.to(children, {
              y: 0,
              x: 0,
              opacity: 1,
              scale: 1,
              rotation: 0,
              duration,
              delay,
              stagger,
              ease,
            });
          } else {
            // Animate the element itself
            gsap.to(elementRef.current, {
              y: 0,
              x: 0,
              opacity: 1,
              scale: 1,
              rotation: 0,
              duration,
              delay,
              ease,
            });
          }

          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "-10% 0px -10% 0px",
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [y, x, opacity, scale, rotation, duration, delay, stagger, ease]);

  return elementRef;
};

export const useStaggerAnimation = <T extends HTMLElement = HTMLDivElement>(
  itemsCount: number,
  options: ScrollAnimationOptions = {}
) => {
  const containerRef = useRef<T>(null);

  const {
    y = 40,
    x = 0,
    opacity = 0,
    duration = 0.8,
    stagger = 0.1,
    ease = "power2.out",
  } = options;

  useGSAP(() => {
    if (!containerRef.current) return;

    const children = containerRef.current.children;

    // Set initial state for all children
    gsap.set(children, {
      y,
      x,
      opacity,
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.to(children, {
            y: 0,
            x: 0,
            opacity: 1,
            duration,
            stagger,
            ease,
          });

          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "-5% 0px -5% 0px",
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [itemsCount, y, x, opacity, duration, stagger, ease]);

  return containerRef;
};
