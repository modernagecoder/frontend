import * as React from 'react';

export interface TabItem {
  /** Tab label. */
  label: React.ReactNode;
  /** Panel content shown when the tab is active. */
  content: React.ReactNode;
  /** Apply the rose "girls who code" accent to this tab. */
  rose?: boolean;
}

export interface TabsProps {
  /** The tabs and their panels. */
  tabs: TabItem[];
  /** Index of the initially-active tab. */
  defaultIndex?: number;
  className?: string;
}

/**
 * Horizontal tab switcher with the sliding amber underline ("glider").
 * Controlled internally — click a tab to reveal its panel. Used for the
 * curriculum, maths, and pricing switchers.
 */
export function Tabs({ tabs, defaultIndex = 0, className }: TabsProps) {
  const [active, setActive] = React.useState(defaultIndex);
  const btnRefs = React.useRef<Array<HTMLButtonElement | null>>([]);
  const [glider, setGlider] = React.useState<{ left: number; width: number }>({ left: 0, width: 0 });

  React.useEffect(() => {
    const el = btnRefs.current[active];
    if (el) setGlider({ left: el.offsetLeft, width: el.offsetWidth });
  }, [active, tabs.length]);

  return (
    <div className={['tabs-wrapper', className].filter(Boolean).join(' ')}>
      <div className="tabs-container" role="tablist">
        {tabs.map((t, i) => (
          <button
            key={i}
            ref={(el) => {
              btnRefs.current[i] = el;
            }}
            type="button"
            role="tab"
            aria-selected={i === active}
            className={['tab-button', i === active ? 'active' : '', t.rose ? 'shiny-girls-tab' : '']
              .filter(Boolean)
              .join(' ')}
            onClick={() => setActive(i)}
          >
            {t.label}
          </button>
        ))}
        <span className="tab-glider" style={{ left: glider.left, width: glider.width }} />
      </div>
      {tabs.map((t, i) => (
        <div key={i} role="tabpanel" className={['tab-content', i === active ? 'active' : ''].filter(Boolean).join(' ')}>
          {t.content}
        </div>
      ))}
    </div>
  );
}
