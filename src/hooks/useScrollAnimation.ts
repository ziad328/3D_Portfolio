import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollAnimationOptions {
    /** Element(s) to animate — a CSS selector scoped to the container, or direct elements */
    targets?: string | Element | Element[];
    from?: gsap.TweenVars;
    to?: gsap.TweenVars;
    /** ScrollTrigger options merged on top of defaults */
    scrollTrigger?: Partial<ScrollTrigger.Vars>;
}

/**
 * Attach a GSAP ScrollTrigger entrance animation to a container ref.
 *
 * @param options.targets  - selector (scoped to the ref) or element(s).
 *                           Defaults to the ref element itself.
 * @param options.from     - GSAP fromTo start vars  (default: y:60, opacity:0)
 * @param options.to       - GSAP fromTo end vars    (default: y:0,  opacity:1)
 * @param options.scrollTrigger - overrides for ScrollTrigger config
 */
function useScrollAnimation<T extends Element = HTMLElement>(
    options: ScrollAnimationOptions = {},
) {
    const ref = useRef<T>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const targets =
            options.targets
                ? typeof options.targets === 'string'
                    ? el.querySelectorAll(options.targets)
                    : options.targets
                : el;

        const from: gsap.TweenVars = options.from ?? { y: 60, opacity: 0 };
        const to: gsap.TweenVars = {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.15,
            ...options.to,
            scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                toggleActions: 'play none none none',
                ...options.scrollTrigger,
            },
        };

        const ctx = gsap.context(() => {
            gsap.fromTo(targets, from, to);
        }, el);

        return () => ctx.revert();
    }, []);

    return ref;
}

export default useScrollAnimation;
