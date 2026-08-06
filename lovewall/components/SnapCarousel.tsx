import React, { useEffect, useRef, useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * A horizontally scrollable strip that is ACTUALLY scrollable — native touch swipe,
 * mouse drag, arrow buttons — unlike the CSS marquees it replaces, which told users
 * to "slide" but ignored every gesture.
 *
 * loop mode renders the children twice (client only — the static prerender keeps a
 * single copy so crawlers don't read duplicated content; safe because index.tsx uses
 * createRoot, not hydration) and wraps scrollLeft inside the middle band, so both
 * auto-drift and user momentum scroll endlessly with no visible jump. The old
 * marquees animated translateX(-50%) over TRIPLED items, which lands mid-list and
 * snapped every loop.
 */
interface Props {
  children: React.ReactNode;
  /** gently drifts right until the user touches/hovers/scrolls it */
  autoDrift?: boolean;
  /** duplicate content and wrap for an endless strip */
  loop?: boolean;
  className?: string;
  /** extra classes on the scroll container — e.g. vertical padding so rotated cards and
      overhanging stickers aren't clipped by the overflow context */
  scrollerClassName?: string;
  ariaLabel?: string;
}

const DRIFT_PX_PER_SEC = 34; // time-based so speed is identical at any refresh rate
const RESUME_AFTER_MS = 2500;

const SnapCarousel: React.FC<Props> = ({ children, autoDrift = false, loop = false, className = '', scrollerClassName = '', ariaLabel }) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const pausedUntilRef = useRef(0);
  const hoveredRef = useRef(false);
  const dragRef = useRef<{ startX: number; startLeft: number; moved: boolean } | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  const cloned = loop && mounted;

  // Keep scrollLeft inside [0.25W, 1.25W) where W = width of one copy. Any position x
  // shows the same pixels as x±W, so the correction is invisible and momentum survives.
  const wrap = useCallback(() => {
    const el = scrollerRef.current;
    if (!el || !cloned) return;
    const W = el.scrollWidth / 2;
    if (W <= el.clientWidth * 1.5) return; // not enough content to loop safely
    if (el.scrollLeft < W * 0.25) el.scrollLeft += W;
    else if (el.scrollLeft >= W * 1.25) el.scrollLeft -= W;
  }, [cloned]);

  // Enter the wrappable band once the clones exist.
  useEffect(() => {
    const el = scrollerRef.current;
    if (el && cloned) {
      const W = el.scrollWidth / 2;
      if (W > el.clientWidth * 1.5 && el.scrollLeft < W * 0.25) el.scrollLeft += W;
    }
  }, [cloned]);

  useEffect(() => {
    if (!autoDrift) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let raf = 0;
    // Time-based drift (delta-clamped so a throttled tab never lurches on wake),
    // stepped in whole CSS pixels: browsers quantize scrollLeft to device pixels
    // (0.8px at 125% Windows scaling), so sub-pixel increments round away to
    // nothing and the drift stalls.
    let acc = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = Math.min(now - last, 100);
      last = now;
      const el = scrollerRef.current;
      if (el && !document.hidden && !hoveredRef.current && !dragRef.current && Date.now() > pausedUntilRef.current) {
        acc += (dt / 1000) * DRIFT_PX_PER_SEC;
        if (acc >= 1) {
          const step = Math.floor(acc);
          acc -= step;
          el.scrollLeft += step;
          wrap();
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [autoDrift, wrap]);

  const pause = () => { pausedUntilRef.current = Date.now() + RESUME_AFTER_MS; };

  const nudge = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    pause();
    el.scrollBy({ left: dir * el.clientWidth * 0.75, behavior: 'smooth' });
  };

  // Mouse drag-to-scroll (touch already scrolls natively).
  const onPointerDown = (e: React.PointerEvent) => {
    if (e.pointerType !== 'mouse' || e.button !== 0) return;
    const el = scrollerRef.current;
    if (!el) return;
    dragRef.current = { startX: e.clientX, startLeft: el.scrollLeft, moved: false };
    pause();
  };
  const onPointerMove = (e: React.PointerEvent) => {
    const d = dragRef.current;
    const el = scrollerRef.current;
    if (!d || !el) return;
    const dx = e.clientX - d.startX;
    if (Math.abs(dx) > 5) {
      d.moved = true;
      el.setPointerCapture(e.pointerId);
    }
    if (d.moved) {
      el.scrollLeft = d.startLeft - dx;
      wrap();
    }
  };
  const endDrag = (e: React.PointerEvent) => {
    const d = dragRef.current;
    const el = scrollerRef.current;
    if (d?.moved && el?.hasPointerCapture(e.pointerId)) el.releasePointerCapture(e.pointerId);
    // let the click-suppressor below read `moved` first, then clear
    requestAnimationFrame(() => { dragRef.current = null; });
  };
  // A drag must not fire the card underneath it (video play, links…).
  const onClickCapture = (e: React.MouseEvent) => {
    if (dragRef.current?.moved) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <div className={`relative group/strip ${className}`}>
      <div
        ref={scrollerRef}
        role="region"
        aria-label={ariaLabel}
        className={`flex overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing select-none ${scrollerClassName}`}
        style={{ WebkitOverflowScrolling: 'touch' }}
        onScroll={wrap}
        onWheel={pause}
        onTouchStart={pause}
        onTouchMove={pause}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onClickCapture={onClickCapture}
        onMouseEnter={() => { hoveredRef.current = true; }}
        onMouseLeave={() => { hoveredRef.current = false; }}
      >
        {children}
        {cloned && <div aria-hidden="true" className="flex">{children}</div>}
      </div>

      {/* Arrow controls — sketch-styled, appear on hover on desktop, always on touch */}
      <button
        type="button"
        aria-label="Scroll left"
        onClick={() => nudge(-1)}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white border-2 border-sketch-black rounded-full shadow-sketch flex items-center justify-center hover:bg-pop-yellow hover:shadow-sketch-hover active:translate-y-[calc(-50%+2px)] transition-all md:opacity-0 md:group-hover/strip:opacity-100"
      >
        <ChevronLeft size={26} strokeWidth={3} />
      </button>
      <button
        type="button"
        aria-label="Scroll right"
        onClick={() => nudge(1)}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white border-2 border-sketch-black rounded-full shadow-sketch flex items-center justify-center hover:bg-pop-yellow hover:shadow-sketch-hover active:translate-y-[calc(-50%+2px)] transition-all md:opacity-0 md:group-hover/strip:opacity-100"
      >
        <ChevronRight size={26} strokeWidth={3} />
      </button>
    </div>
  );
};

export default SnapCarousel;
