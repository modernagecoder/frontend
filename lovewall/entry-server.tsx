import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import App from './App';

/**
 * Build-time render of the Wall of Love to static HTML.
 *
 * renderToStaticMarkup, NOT renderToString: we are not hydrating. index.tsx uses
 * createRoot(), which discards whatever is already in #root and re-renders from scratch, so
 * hydration markers would be dead weight and a hydration mismatch is impossible by
 * construction. That is deliberate — this page is the site's best social proof and it must
 * never be able to white-screen again just because server and client disagreed.
 *
 * What this buys: a crawler that does not run JavaScript (which is most LLM crawlers) now
 * reads all 15 real reviews, the headings and the video titles. Before this, /love served an
 * empty <div id="root"> — 0 characters of body text.
 */
export function render(): string {
  return renderToStaticMarkup(React.createElement(App));
}
