import React, { useCallback, useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, Camera, Heart } from 'lucide-react';
import { MOMENTS, MomentPhoto } from '../moments';

/**
 * "The Moments Wall" — every photo is a real student-meetup shot (see moments.ts for
 * provenance). Pinterest-style dense collage: ALL photos shown at once, shuffled out
 * of camera-roll order, tiles in four sizes (big/wide/tall/standard) packed with
 * grid-flow-dense. Click any tile for the lightbox.
 *
 * Everything random here is SEEDED — StrictMode double-renders and the build-time
 * prerender must all produce the identical wall, so Math.random() is off the table.
 */

const STICKERS = ['🎳', '🕹️', '🍕', '😄', '🎬', '🤳', '🎉', '😎', '🫶', '🏆'];

// Small LCG so the shuffle and size pattern are stable across renders and builds.
const lcg = (seed: number) => () => (seed = (seed * 1664525 + 1013904223) >>> 0) / 2 ** 32;

const seededShuffle = (items: MomentPhoto[]): MomentPhoto[] => {
  const rand = lcg(20260806);
  const a = [...items];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const SHUFFLED = seededShuffle(MOMENTS);

// Tile size follows the photo's real shape so object-cover never butchers faces:
// portraits become tall tiles (both ~3:4), landscapes stay standard or grow into a
// big 2x2 square accent (~same ratio as standard, just larger). No extreme wide
// tiles — a 3:1 strip crops a group selfie down to foreheads.
// dense flow backfills the gaps so the collage stays tight at every breakpoint.
const tileClass = (m: MomentPhoto, i: number): string => {
  if (m.h > m.w) return 'row-span-2';                                  // tall
  return lcg(i * 2654435761 + 97)() < 0.28 ? 'col-span-2 row-span-2'   // big
                                           : '';                       // standard
};

const rot = (i: number) => ((i * 7) % 3) - 1;

const MomentsWall: React.FC = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const close = useCallback(() => setLightbox(null), []);
  const step = useCallback((dir: 1 | -1) => {
    setLightbox((cur) => (cur === null ? cur : (cur + dir + SHUFFLED.length) % SHUFFLED.length));
  }, []);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowRight') step(1);
      else if (e.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden'; // the page must not scroll behind the lightbox
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [lightbox, close, step]);

  const active = lightbox === null ? null : SHUFFLED[lightbox];

  return (
    <section id="moments" className="py-24 px-4 bg-white border-b-4 border-sketch-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 relative z-10">
          <span className="bg-pop-cyan px-4 py-2 font-marker text-xl rotate-[2deg] inline-block border-2 border-black shadow-sketch mb-4 text-sketch-black">
            <Camera className="inline -mt-1 mr-2" size={20} />
            Straight from our camera roll
          </span>
          <h2 className="font-marker text-5xl md:text-7xl mt-4">The Moments Wall 📸</h2>
          <p className="font-hand text-2xl mt-3 text-gray-600 max-w-2xl mx-auto">
            {SHUFFLED.length} real photos from our student meetups. No stock photos, no filters. Just us.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 auto-rows-[8.5rem] sm:auto-rows-[10rem] lg:auto-rows-[11rem] gap-3 md:gap-4 grid-flow-dense">
          {SHUFFLED.map((m, i) => (
            <button
              key={m.file}
              type="button"
              onClick={() => setLightbox(i)}
              aria-label={`Enlarge photo ${i + 1}: ${m.label}`}
              className={`relative bg-white p-1.5 border-2 border-sketch-black shadow-sketch hover:shadow-sketch-lg hover:-translate-y-1 hover:z-20 transition-all duration-300 cursor-zoom-in group text-left ${tileClass(m, i)}`}
              style={{ transform: `rotate(${rot(i)}deg)` }}
            >
              <span className="absolute inset-1.5 overflow-hidden block">
                <img
                  src={`/images/moments/${m.file}`}
                  alt={m.label}
                  loading={i < 8 ? 'eager' : 'lazy'}
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-110 group-hover:brightness-105 transition-all duration-500"
                />
              </span>
              {i % 5 === 2 && (
                <span className="absolute -bottom-2.5 -right-2 text-2xl group-hover:scale-125 transition-transform drop-shadow z-10">
                  {STICKERS[i % STICKERS.length]}
                </span>
              )}
              {i % 9 === 4 && (
                <span className="absolute -top-2.5 -left-2 rotate-[-8deg] z-10">
                  <Heart size={22} className="text-pop-pink drop-shadow" fill="currentColor" />
                </span>
              )}
            </button>
          ))}
        </div>

        <p className="text-center font-hand text-xl text-gray-500 mt-10">
          Tap any photo to relive the moment ✨
        </p>
      </div>

      {/* Lightbox */}
      {active && (
        <div
          className="fixed inset-0 z-[10000] bg-sketch-black/90 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={active.label}
          onClick={close}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="bg-white p-3 pb-12 border-2 border-sketch-black shadow-sketch-lg mx-auto" style={{ maxWidth: 'min(100%, 80vh)' }}>
              <img
                src={`/images/moments/${active.file}`}
                alt={active.label}
                className="w-full h-auto max-h-[72vh] object-contain"
              />
              <p className="absolute bottom-3 left-0 right-0 text-center font-hand text-xl text-gray-700">
                {active.label} · {(lightbox as number) + 1} / {SHUFFLED.length}
              </p>
            </div>

            <button
              type="button"
              aria-label="Close"
              onClick={close}
              className="absolute -top-4 -right-4 w-12 h-12 bg-pop-pink text-white border-2 border-sketch-black rounded-full shadow-sketch flex items-center justify-center hover:scale-110 transition-transform"
            >
              <X size={24} strokeWidth={3} />
            </button>
            <button
              type="button"
              aria-label="Previous photo"
              onClick={() => step(-1)}
              className="absolute left-0 sm:-left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white border-2 border-sketch-black rounded-full shadow-sketch flex items-center justify-center hover:bg-pop-yellow transition-colors"
            >
              <ChevronLeft size={26} strokeWidth={3} />
            </button>
            <button
              type="button"
              aria-label="Next photo"
              onClick={() => step(1)}
              className="absolute right-0 sm:-right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white border-2 border-sketch-black rounded-full shadow-sketch flex items-center justify-center hover:bg-pop-yellow transition-colors"
            >
              <ChevronRight size={26} strokeWidth={3} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default MomentsWall;
