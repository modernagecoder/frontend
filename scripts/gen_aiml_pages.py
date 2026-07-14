# -*- coding: utf-8 -*-
"""
Generator for the AI/ML SEO/AEO landing-page cluster (pages 9-25).
Each page reuses the proven chrome (nav/footer/form-JS) verbatim and gets a
unique palette, hero device, copy, JSON-LD, FAQ and internal links.
Run:  python scripts/gen_aiml_pages.py
Writes src/pages/<slug>.html and src/pages/<slug>.md for every config below.
Routing (_redirects, netlify.toml, sitemap.xml) is wired separately.
"""
import os, re, html

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PAGES = os.path.join(ROOT, "src", "pages")
BASE = "https://learn.modernagecoders.com"

def rgb(h):
    h = h.lstrip('#')
    return f"{int(h[0:2],16)}, {int(h[2:4],16)}, {int(h[4:6],16)}"

def strip_tags(s):
    return re.sub(r'\s+', ' ', re.sub(r'<[^>]+>', '', s)).strip()

def jstr(s):
    # JSON string body (no surrounding quotes)
    return strip_tags(s).replace('\\', '\\\\').replace('"', '\\"')

# ---------------------------------------------------------------- CSS template
def css(c):
    p = c['prefix']; C1 = rgb(c['c1']); C2 = rgb(c['c2'])
    return f"""
    <!-- ============ DISTINCT IDENTITY ({c['c1']} / {c['c2']}) ============ -->
    <style>
        :root {{
            --{p}-1: {c['c1']}; --{p}-2: {c['c2']}; --{p}-acc: {c['acc']};
            --{p}-ink: #e8eef6; --{p}-muted: #9fb0c4;
            --{p}-line: rgba({C1}, 0.26); --{p}-card: rgba(10, 14, 22, 0.72);
        }}
        .{p}-body {{ background: {c['bg']}; }}
        .{p}-hero {{ position: relative; padding: 116px 20px 64px; overflow: hidden;
            background: radial-gradient(1100px 520px at 84% -10%, rgba({C2},0.14), transparent 60%), radial-gradient(900px 480px at 4% 8%, rgba({C1},0.24), transparent 62%); }}
        .{p}-hero::before {{ content: ""; position: absolute; inset: 0; background-image: linear-gradient(rgba({C1},0.05) 1px, transparent 1px), linear-gradient(90deg, rgba({C1},0.05) 1px, transparent 1px); background-size: 44px 44px; mask-image: radial-gradient(820px 480px at 55% 0%, #000 0%, transparent 76%); pointer-events: none; }}
        .{p}-hero-inner {{ position: relative; max-width: 1180px; margin: 0 auto; display: grid; grid-template-columns: 1.04fr 0.96fr; gap: 48px; align-items: center; }}
        .{p}-eyebrow {{ display: inline-flex; align-items: center; gap: 8px; font-size: 12.5px; font-weight: 700; letter-spacing: 1.4px; text-transform: uppercase; color: var(--{p}-1); background: rgba({C1},0.14); border: 1px solid var(--{p}-line); padding: 7px 14px; border-radius: 999px; }}
        .{p}-eyebrow b {{ color: var(--{p}-acc); }}
        .{p}-hero h1 {{ font-family: 'Syne', 'Inter', sans-serif; font-weight: 800; font-size: clamp(2.05rem, 4.6vw, 3.4rem); line-height: 1.06; color: #fff; margin: 18px 0 16px; letter-spacing: -0.5px; }}
        .{p}-hero h1 .{p}-grad {{ background: linear-gradient(100deg, var(--{p}-1), var(--{p}-2)); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; }}
        .{p}-hero p.{p}-lede {{ font-size: 1.07rem; line-height: 1.72; color: var(--{p}-muted); max-width: 580px; margin: 0 0 26px; }}
        .{p}-cta-row {{ display: flex; flex-wrap: wrap; gap: 14px; }}
        .{p}-btn {{ display: inline-flex; align-items: center; gap: 9px; padding: 15px 28px; border-radius: 12px; font-weight: 700; font-size: 1rem; text-decoration: none; cursor: pointer; border: none; transition: transform .2s ease, box-shadow .2s ease; }}
        .{p}-btn-primary {{ background: linear-gradient(100deg, var(--{p}-1), var(--{p}-2)); color: #fff; box-shadow: 0 10px 30px rgba({C1},0.34); }}
        .{p}-btn-primary:hover {{ transform: translateY(-2px); box-shadow: 0 16px 40px rgba({C2},0.4); }}
        .{p}-btn-ghost {{ background: transparent; color: var(--{p}-ink); border: 1px solid var(--{p}-line); }}
        .{p}-btn-ghost:hover {{ border-color: var(--{p}-2); transform: translateY(-2px); }}

        /* hero device — code window */
        .{p}-ide {{ background: #080b12; border: 1px solid var(--{p}-line); border-radius: 14px; overflow: hidden; box-shadow: 0 26px 60px rgba(0,0,0,0.55); }}
        .{p}-ide-bar {{ display: flex; align-items: center; gap: 7px; padding: 12px 16px; background: rgba({C1},0.08); border-bottom: 1px solid var(--{p}-line); }}
        .{p}-ide-bar i {{ width: 11px; height: 11px; border-radius: 50%; display: inline-block; }}
        .{p}-ide-bar .d1 {{ background: #ff5f57; }} .{p}-ide-bar .d2 {{ background: #febc2e; }} .{p}-ide-bar .d3 {{ background: #28c840; }}
        .{p}-ide-bar span {{ margin-left: 10px; font-family: 'Fira Code', monospace; font-size: 12px; color: var(--{p}-muted); }}
        .{p}-code {{ margin: 0; padding: 20px 22px; font-family: 'Fira Code', monospace; font-size: 13px; line-height: 1.65; color: #d6deec; overflow-x: auto; }}
        .{p}-code .kw {{ color: var(--{p}-1); }} .{p}-code .cl {{ color: var(--{p}-acc); }} .{p}-code .st {{ color: #93c5fd; }} .{p}-code .cm {{ color: #64748b; }} .{p}-code .fn {{ color: #c4b5fd; }} .{p}-code .nu {{ color: #fbbf24; }}

        /* hero device — panel */
        .{p}-panel {{ background: #080b12; border: 1px solid var(--{p}-line); border-radius: 14px; overflow: hidden; box-shadow: 0 26px 60px rgba(0,0,0,0.55); }}
        .{p}-panel-bar {{ display: flex; align-items: center; gap: 8px; padding: 13px 16px; background: rgba({C1},0.08); border-bottom: 1px solid var(--{p}-line); font-family: 'Fira Code', monospace; font-size: 12.5px; color: var(--{p}-muted); }}
        .{p}-panel-bar .dot {{ width: 9px; height: 9px; border-radius: 50%; background: var(--{p}-1); }}
        .{p}-panel-body {{ padding: 18px 20px; display: flex; flex-direction: column; gap: 11px; }}
        .{p}-prow {{ display: flex; align-items: center; gap: 12px; padding: 12px 14px; background: rgba({C1},0.06); border: 1px solid var(--{p}-line); border-radius: 10px; }}
        .{p}-prow .pi {{ width: 34px; height: 34px; border-radius: 9px; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, rgba({C1},0.25), rgba({C2},0.18)); flex-shrink: 0; }}
        .{p}-prow b {{ color: #fff; font-size: .92rem; font-family: 'Syne', sans-serif; display: block; }}
        .{p}-prow small {{ color: var(--{p}-muted); font-size: .8rem; }}
        .{p}-prow .pv {{ margin-left: auto; font-family: 'Fira Code', monospace; font-size: .82rem; color: var(--{p}-acc); white-space: nowrap; }}

        .{p}-wrap {{ max-width: 1180px; margin: 0 auto; }}
        .{p}-section {{ padding: 66px 20px; }}
        .{p}-kicker {{ color: var(--{p}-acc); font-weight: 700; font-size: 13px; letter-spacing: 1.4px; text-transform: uppercase; text-align: center; margin: 0 0 8px; }}
        .{p}-h2 {{ font-family: 'Syne', 'Inter', sans-serif; font-weight: 800; font-size: clamp(1.65rem, 3vw, 2.35rem); color: #fff; text-align: center; margin: 0 0 14px; letter-spacing: -0.4px; }}
        .{p}-sub {{ text-align: center; color: var(--{p}-muted); max-width: 700px; margin: 0 auto 40px; line-height: 1.7; font-size: 1.02rem; }}
        .{p}-ribbon {{ display: flex; flex-wrap: wrap; gap: 14px; margin-top: 34px; }}
        .{p}-stat {{ flex: 1 1 150px; background: var(--{p}-card); border: 1px solid var(--{p}-line); border-radius: 14px; padding: 16px 18px; }}
        .{p}-stat b {{ display: block; font-family: 'Syne', sans-serif; font-size: 1.7rem; color: #fff; line-height: 1; }}
        .{p}-stat span {{ font-size: 13px; color: var(--{p}-muted); }}
        .{p}-quick-answer {{ position: relative; max-width: 1000px; margin: -18px auto 0; background: linear-gradient(180deg, rgba({C1},0.13), rgba({C2},0.05)); border: 1px solid var(--{p}-line); border-left: 4px solid var(--{p}-1); border-radius: 14px; padding: 26px 28px; }}
        .{p}-quick-answer h2 {{ font-size: 1.05rem; color: var(--{p}-1); margin: 0 0 10px; font-weight: 700; letter-spacing: .3px; }}
        .{p}-quick-answer p {{ color: #dbe6f3; line-height: 1.74; margin: 0; font-size: 1.04rem; }}

        .{p}-grid3 {{ display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }}
        .{p}-card {{ background: var(--{p}-card); border: 1px solid var(--{p}-line); border-radius: 16px; padding: 26px 22px; transition: transform .25s ease, border-color .25s ease; }}
        .{p}-card:hover {{ transform: translateY(-6px); border-color: var(--{p}-1); }}
        .{p}-card .{p}-ic {{ width: 46px; height: 46px; border-radius: 12px; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, rgba({C1},0.22), rgba({C2},0.16)); border: 1px solid var(--{p}-line); margin-bottom: 16px; }}
        .{p}-card h3 {{ font-family: 'Syne', sans-serif; color: #fff; font-size: 1.12rem; margin: 0 0 8px; }}
        .{p}-card p {{ color: var(--{p}-muted); font-size: .95rem; line-height: 1.62; margin: 0; }}

        .{p}-steps {{ display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }}
        .{p}-step {{ background: var(--{p}-card); border: 1px solid var(--{p}-line); border-radius: 16px; padding: 24px 20px; }}
        .{p}-step .{p}-no {{ font-family: 'Fira Code', monospace; font-size: 12px; color: var(--{p}-1); }}
        .{p}-step h3 {{ font-family: 'Syne', sans-serif; color: #fff; font-size: 1.06rem; margin: 6px 0 8px; }}
        .{p}-step p {{ color: var(--{p}-muted); font-size: .9rem; line-height: 1.55; margin: 0; }}

        .{p}-promo {{ display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; }}
        .{p}-promo a {{ display: block; text-decoration: none; background: var(--{p}-card); border: 1px solid var(--{p}-line); border-radius: 14px; padding: 18px 16px; transition: transform .2s ease, border-color .2s ease, background .2s ease; }}
        .{p}-promo a:hover {{ transform: translateY(-4px); border-color: var(--{p}-1); background: rgba({C1},0.06); }}
        .{p}-promo .{p}-pt {{ font-family: 'Syne', sans-serif; color: #fff; font-weight: 700; font-size: 1rem; margin: 0 0 4px; }}
        .{p}-promo .{p}-pd {{ color: var(--{p}-muted); font-size: .82rem; line-height: 1.4; }}

        .{p}-pricing {{ display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; max-width: 1000px; margin: 0 auto; }}
        .{p}-plan {{ background: var(--{p}-card); border: 1px solid var(--{p}-line); border-radius: 18px; padding: 30px 26px; text-align: center; position: relative; }}
        .{p}-plan.{p}-pop {{ border-color: var(--{p}-1); box-shadow: 0 18px 44px rgba({C1},0.18); }}
        .{p}-plan .{p}-badge {{ position: absolute; top: -13px; left: 50%; transform: translateX(-50%); background: linear-gradient(100deg, var(--{p}-1), var(--{p}-2)); color: #fff; font-size: 11.5px; font-weight: 800; letter-spacing: .5px; padding: 5px 14px; border-radius: 999px; text-transform: uppercase; }}
        .{p}-plan h3 {{ font-family: 'Syne', sans-serif; color: #fff; font-size: 1.2rem; margin: 0 0 10px; }}
        .{p}-price {{ font-family: 'Syne', sans-serif; font-size: 2.3rem; color: #fff; line-height: 1; }}
        .{p}-price small {{ display: block; font-size: .85rem; color: var(--{p}-muted); margin-top: 6px; font-family: 'Inter', sans-serif; }}
        .{p}-plan ul {{ list-style: none; padding: 0; margin: 20px 0 24px; text-align: left; }}
        .{p}-plan li {{ color: var(--{p}-muted); padding: 6px 0 6px 24px; position: relative; font-size: .93rem; }}
        .{p}-plan li::before {{ content: "\\2713"; position: absolute; left: 0; color: var(--{p}-2); font-weight: 800; }}

        .{p}-quotes {{ display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }}
        .{p}-quote {{ background: var(--{p}-card); border: 1px solid var(--{p}-line); border-radius: 16px; padding: 26px 24px; }}
        .{p}-quote p {{ color: #dbe6f3; line-height: 1.7; font-size: .98rem; margin: 0 0 18px; }}
        .{p}-quote .{p}-by {{ color: var(--{p}-1); font-weight: 700; font-size: .92rem; }}
        .{p}-quote .{p}-where {{ color: var(--{p}-muted); font-size: .85rem; }}
        .{p}-stars {{ color: #fbbf24; letter-spacing: 2px; font-size: .95rem; margin-bottom: 12px; }}

        .{p}-prose {{ max-width: 880px; margin: 0 auto; color: var(--{p}-muted); line-height: 1.85; font-size: 1.05rem; }}
        .{p}-prose h3 {{ color: #fff; font-family: 'Syne', sans-serif; font-size: 1.3rem; margin: 30px 0 10px; }}
        .{p}-prose strong {{ color: var(--{p}-ink); }}
        .{p}-prose a {{ color: var(--{p}-acc); text-decoration: none; font-weight: 600; }}

        .{p}-faq {{ max-width: 840px; margin: 0 auto; }}
        .{p}-faq .faq-item {{ background: var(--{p}-card); border: 1px solid var(--{p}-line); border-radius: 12px; margin-bottom: 12px; overflow: hidden; }}
        .{p}-faq .faq-question {{ display: flex; justify-content: space-between; align-items: center; gap: 16px; padding: 18px 22px; cursor: pointer; color: #fff; font-weight: 600; font-size: 1.02rem; }}
        .{p}-faq .faq-toggle {{ color: var(--{p}-1); font-size: 1.5rem; line-height: 1; flex-shrink: 0; }}
        .{p}-faq .faq-answer {{ max-height: 0; overflow: hidden; transition: max-height .35s ease; }}
        .{p}-faq .faq-answer p {{ padding: 0 22px 20px; color: var(--{p}-muted); line-height: 1.74; margin: 0; }}

        .{p}-band {{ max-width: 1180px; margin: 0 auto; background: linear-gradient(100deg, rgba({C1},0.16), rgba({C2},0.10)); border: 1px solid var(--{p}-line); border-radius: 20px; padding: 40px 32px; text-align: center; }}
        .{p}-band h2 {{ font-family: 'Syne', sans-serif; color: #fff; font-size: clamp(1.4rem, 2.6vw, 2rem); margin: 0 0 10px; }}
        .{p}-band p {{ color: var(--{p}-muted); margin: 0 0 22px; font-size: 1.02rem; }}
        .{p}-form-section {{ background: radial-gradient(700px 360px at 80% 0%, rgba({C1},0.13), transparent 65%); }}
        @media (max-width: 980px) {{
            .{p}-hero-inner {{ grid-template-columns: 1fr; gap: 34px; }}
            .{p}-steps {{ grid-template-columns: repeat(2, 1fr); }}
            .{p}-grid3, .{p}-pricing, .{p}-quotes {{ grid-template-columns: 1fr; }}
            .{p}-promo {{ grid-template-columns: repeat(2, 1fr); }}
        }}
        @media (max-width: 560px) {{ .{p}-hero {{ padding-top: 100px; }} .{p}-steps, .{p}-promo {{ grid-template-columns: 1fr; }} }}
    </style>
"""

# Page-specific select styling (matches palette accent)
def select_css(c):
    C1 = rgb(c['c1'])
    arrow = c['c1'].lstrip('#')
    return f"""    <!-- Page Specific Fixes -->
    <style>
        select.input-field, select {{
            background-color: #0a0e16 !important; color: #ffffff !important;
            border: 1px solid rgba({C1}, 0.5) !important;
            padding: 12px 16px !important; border-radius: 8px !important; font-size: 15px !important;
            -webkit-appearance: none !important; -moz-appearance: none !important; appearance: none !important;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%23{arrow}' viewBox='0 0 16 16'%3E%3Cpath d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/%3E%3C/svg%3E") !important;
            background-repeat: no-repeat !important; background-position: right 12px center !important; cursor: pointer !important;
        }}
        select.input-field option, select option {{ background-color: #0a0e16 !important; color: #ffffff !important; padding: 10px !important; }}
    </style>
"""

# ---------------------------------------------------------------- JSON-LD
def jsonld(c):
    p = c['prefix']; url = f"{BASE}/{c['slug']}"
    courses = ""
    for nm, ds, code, lvl, price in c['courses']:
        courses += f"""        {{
          "@type": "Course",
          "name": "{jstr(nm)}",
          "description": "{jstr(ds)}",
          "provider": {{ "@type": "Organization", "@id": "https://learn.modernagecoders.com/#organization", "name": "Modern Age Coders", "url": "https://learn.modernagecoders.com" }},
          "educationalLevel": "{lvl}", "courseCode": "{code}",
          "hasCourseInstance": {{ "@type": "CourseInstance", "courseMode": "online", "courseWorkload": "PT2H" }},
          "offers": {{ "@type": "Offer", "price": "{price}", "priceCurrency": "INR", "availability": "https://schema.org/InStock" }}
        }},
"""
    faqs = ""
    for q, a in c['faqs']:
        faqs += f'            {{ "@type": "Question", "name": "{jstr(q)}", "acceptedAnswer": {{ "@type": "Answer", "text": "{jstr(a)}" }} }},\n'
    faqs = faqs.rstrip(',\n') + '\n'
    return f"""    <!-- Structured Data -->
    <script type="application/ld+json">
    {{
      "@context": "https://schema.org",
      "@graph": [
        {{
          "@type": "EducationalOrganization",
          "@id": "{url}#org",
          "name": "Modern Age Coders \\u2014 {jstr(c['leaf'])}",
          "description": "{jstr(c['org_desc'])}",
          "url": "{url}",
          "telephone": "+919123366161",
          "email": "contact@modernagecoders.com",
          "areaServed": {{ "@type": "Country", "name": "India" }},
          "priceRange": "\\u20b9\\u20b9",
          "sameAs": [
            "https://www.facebook.com/modernagecoders",
            "https://www.instagram.com/modern_age_coders",
            "https://www.youtube.com/@ModernAgeCoders",
            "https://www.linkedin.com/in/shivam-khemka-modern-age-coders"
          ]
        }},
{courses}        {{
          "@type": "FAQPage",
          "mainEntity": [
{faqs}          ]
        }},
        {{
          "@type": "BreadcrumbList",
          "itemListElement": [
            {{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://learn.modernagecoders.com" }},
            {{ "@type": "ListItem", "position": 2, "name": "Best AI & Machine Learning Course in India", "item": "https://learn.modernagecoders.com/best-ai-and-machine-learning-course-in-india" }},
            {{ "@type": "ListItem", "position": 3, "name": "{jstr(c['leaf'])}", "item": "{url}" }}
          ]
        }},
        {{
          "@type": "WebPage",
          "name": "{jstr(c['leaf'])}",
          "description": "{jstr(c['meta_desc'])}",
          "url": "{url}",
          "inLanguage": "en-IN",
          "isPartOf": {{ "@type": "WebSite", "name": "Modern Age Coders", "url": "https://learn.modernagecoders.com" }},
          "speakable": {{ "@type": "SpeakableSpecification", "cssSelector": [".{p}-quick-answer", ".{p}-hero h1"] }}
        }}
      ]
    }}
    </script>
"""

# ---------------------------------------------------------------- shared nav (verbatim from donor)
NAV = r'''    <!-- BEGIN_INLINED_NAV -->
<style>
    .callback-nav-btn { display: inline-flex; align-items: center; gap: 6px; padding: 8px 16px; background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); color: white; border: none; border-radius: 25px; font-size: 14px; font-weight: 600; cursor: pointer; transition: all 0.3s ease; box-shadow: 0 2px 8px rgba(245, 158, 11, 0.3); }
    .callback-nav-btn:hover { transform: translateY(-2px); box-shadow: 0 4px 15px rgba(245, 158, 11, 0.4); }
    .callback-nav-btn svg { flex-shrink: 0; }
    @media (max-width: 768px) { .callback-nav-btn span { display: none; } .callback-nav-btn { padding: 10px; } }
</style>

<header>
    <nav>
        <div class="navbar">
            <div class="nav-container">
                <a href="/" class="logo">
                    <img style="border-radius: 10px;" src="/images/logo.svg" alt="Modern Age Coders Logo"
                        class="logo-img" width="40" height="40" fetchpriority="high">
                    <span class="logo-text">Modern Age Coders</span>
                </a>
                <ul class="nav-menu" id="navMenu">
                    <li class="nav-item dropdown">
                        <a href="/courses" class="nav-link">Courses
                            <svg style="width: 14px; height: 14px; margin-left: 4px; opacity: 0.7;" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
                        </a>
                        <div class="dropdown-content">
                            <a href="/courses" class="dropdown-item" style="font-weight: bold; border-bottom: 1px solid rgba(168, 85, 247, 0.3); margin-bottom: 0.5rem; padding-bottom: 0.75rem;">View All Courses</a>
                            <a href="/courses/coding/kids" class="dropdown-item">For Kids (Ages 6-12)</a>
                            <a href="/courses/coding/teens" class="dropdown-item">For Teens (Ages 13-18)</a>
                            <a href="/courses/coding/college" class="dropdown-item">For College Students</a>
                            <a href="/courses/coding/college" class="dropdown-item">For Professionals</a>
                            <a href="/courses/coding/corporate" class="dropdown-item">Customized Training</a>
                            <a href="/courses/coding/girls" class="dropdown-item highlight">Special For Girls</a>
                            <a href="/summer-coding-camp" class="dropdown-item highlight">Summer Coding Camp</a>
                            <a href="/schools" class="dropdown-item">Schools Program</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a href="/coding-challenges" class="nav-link">Practice
                            <svg style="width: 14px; height: 14px; margin-left: 4px; opacity: 0.7;" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
                        </a>
                        <div class="dropdown-content">
                            <a href="/coding-challenges" class="dropdown-item" style="font-weight: bold;">Coding Challenges</a>
                            <a href="/maths-challenges" class="dropdown-item" style="font-weight: bold;">Maths Challenges</a>
                            <a href="/mistakes-students-make" class="dropdown-item">Mistakes Students Make</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a href="/student-labs" class="nav-link">Tools
                            <svg style="width: 14px; height: 14px; margin-left: 4px; opacity: 0.7;" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
                        </a>
                        <div class="dropdown-content">
                            <a href="/beat-the-babu" class="dropdown-item">Beat the Babu</a>
                            <a href="/aura" class="dropdown-item">Aura</a>
                            <a href="https://mind.modernagecoders.com" class="dropdown-item">Beautiful Mind</a>
                            <a href="https://zap.modernagecoders.com" class="dropdown-item">Zap</a>
                            <a href="https://envision.modernagecoders.com" class="dropdown-item">Envision</a>
                            <a href="https://misti.modernagecoders.com" class="dropdown-item">Misti AI</a>
                            <a href="https://deep64.modernagecoders.com" class="dropdown-item">Deep 64</a>
                            <div style="border-top: 1px solid rgba(168, 85, 247, 0.25); margin: 0.5rem 0; padding-top: 0.25rem;"></div>
                            <a href="https://dashboard.modernagecoders.com/attendance" class="dropdown-item" target="_blank" rel="noopener" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(16, 185, 129, 0.05)); border: 1px solid rgba(16, 185, 129, 0.3); color: #10b981; font-weight: 600; border-radius: 6px; margin-bottom: 4px;">
                                <svg style="width:14px;height:14px;margin-right:6px;vertical-align:middle;flex-shrink:0;" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                                Mark Attendance
                            </a>
                            <a href="https://dashboard.modernagecoders.com/recording" class="dropdown-item" target="_blank" rel="noopener" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(59, 130, 246, 0.05)); border: 1px solid rgba(59, 130, 246, 0.3); color: #3b82f6; font-weight: 600; border-radius: 6px;">
                                <svg style="width:14px;height:14px;margin-right:6px;vertical-align:middle;flex-shrink:0;" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
                                Class Recordings
                            </a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a href="/love" class="nav-link" style="color: #ec4899; font-weight: 600;">
                            <svg style="width: 16px; height: 16px; margin-right: 4px; fill: #ec4899;" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
                            Love
                            <svg style="width: 14px; height: 14px; margin-left: 4px; opacity: 0.7;" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
                        </a>
                        <div class="dropdown-content">
                            <a href="/love" class="dropdown-item" style="font-weight: bold;">Wall of Love</a>
                            <a href="/success-stories" class="dropdown-item">Success Stories</a>
                            <a href="/student-labs" class="dropdown-item">Student Labs</a>
                        </div>
                    </li>
                    <li class="nav-item"><a href="/pricing" class="nav-link">Pricing</a></li>
                    <li class="nav-item"><a href="/contact" class="nav-link">Contact</a></li>
                    <li class="nav-item"><a href="/blog" class="nav-link">Blog</a></li>
                    <li class="nav-item">
                        <button type="button" class="callback-nav-btn" onclick="openCallbackModal()">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            <span></span>
                        </button>
                    </li>
                    <li class="nav-item" style="margin-left: 10px;"><a href="https://dashboard.modernagecoders.com" target="_blank" class="cta-button" style="padding: 0.6rem 2rem !important;">Login</a></li>
                </ul>
                <button class="mobile-menu-btn" id="mobileMenuBtn" aria-label="Toggle Menu"><span></span><span></span><span></span></button>
            </div>
        </div>
    </nav>
</header>
'''

def callback_modal(c):
    return f'''
<div id="callbackModalOverlay" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.6); z-index:99999; align-items:center; justify-content:center;">
    <div style="background:#fff; border-radius:20px; padding:40px; max-width:400px; width:90%; text-align:center; position:relative; box-shadow:0 25px 50px rgba(0,0,0,0.25);">
        <button type="button" onclick="closeCallbackModal()" style="position:absolute; top:15px; right:15px; width:32px; height:32px; border:none; background:#f3f4f6; border-radius:50%; font-size:20px; cursor:pointer; color:#666;">&times;</button>
        <div style="width:80px; height:80px; background:linear-gradient(135deg,#dbeafe,#d1fae5); border-radius:50%; display:flex; align-items:center; justify-content:center; margin:0 auto 20px;">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="{c['c1']}" stroke-width="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
        </div>
        <h3 style="font-size:24px; font-weight:700; color:#1f2937; margin:0 0 8px;">Request a Callback</h3>
        <p style="font-size:15px; color:#6b7280; margin:0 0 25px;">Enter your number, we'll call you right back!</p>
        <form id="callbackForm" onsubmit="submitCallback(event)" style="display:flex; flex-direction:column; gap:15px;">
            <div style="display:flex; align-items:center; background:#f9fafb; border:2px solid #e5e7eb; border-radius:12px; overflow:hidden;">
                <span style="padding:14px 12px; background:#f3f4f6; color:#6b7280; font-weight:600; border-right:2px solid #e5e7eb;">+91</span>
                <input type="tel" id="callbackPhoneInput" placeholder="Enter phone number" maxlength="10" required style="flex:1; padding:14px 15px; border:none; background:transparent; font-size:16px; color:#1f2937; outline:none;">
            </div>
            <button type="submit" id="callbackSubmitBtn" style="padding:14px 24px; background:linear-gradient(135deg,{c['c1']},{c['c2']}); color:#fff; border:none; border-radius:12px; font-size:16px; font-weight:600; cursor:pointer;">Call Me Back</button>
        </form>
        <div id="callbackSuccessMsg" style="display:none; padding:20px 0;">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2" style="margin-bottom:15px;"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            <h4 style="font-size:20px; font-weight:700; color:#10b981; margin:0 0 8px;">We'll call you soon!</h4>
            <p style="font-size:14px; color:#6b7280; margin:0;">Expect a call within 3 hours</p>
        </div>
    </div>
</div>
<!-- END_INLINED_NAV -->
'''

# ---------------------------------------------------------------- main content
def main_content(c):
    p = c['prefix']; C1 = rgb(c['c1'])
    learn = ""
    for icon, col, t, d in c['learn_cards']:
        learn += f'''                    <div class="{p}-card">
                        <div class="{p}-ic">{icon.replace('STROKE', col)}</div>
                        <h3>{t}</h3>
                        <p>{d}</p>
                    </div>
'''
    steps = ""
    for n, t, d in c['roadmap']:
        steps += f'                    <div class="{p}-step"><div class="{p}-no">{n}</div><h3>{t}</h3><p>{d}</p></div>\n'
    promo = ""
    for href, t, d in c['promo']:
        promo += f'                    <a href="{href}"><div class="{p}-pt">{t}</div><div class="{p}-pd">{d}</div></a>\n'
    quotes = ""
    for txt, by, wh in c['quotes']:
        quotes += f'                    <div class="{p}-quote"><div class="{p}-stars">★★★★★</div><p>"{txt}"</p><div class="{p}-by">{by}</div><div class="{p}-where">{wh}</div></div>\n'
    ribbon = ""
    for b, s in c['ribbon']:
        ribbon += f'                        <div class="{p}-stat"><b>{b}</b><span>{s}</span></div>\n'
    faqs = ""
    for q, a in c['faqs']:
        faqs += f'                <div class="faq-item"><div class="faq-question"><span>{q}</span><span class="faq-toggle">+</span></div><div class="faq-answer"><p>{a}</p></div></div>\n'
    plans = c.get('plans', ('Live ML coding', 'Project guidance &amp; certificate', 'Priority project &amp; career prep'))
    return f'''    <main id="main">

        <!-- HERO -->
        <section class="{p}-hero">
            <div class="{p}-hero-inner">
                <div>
                    <span class="{p}-eyebrow">{c['eyebrow_a']} &nbsp;•&nbsp; <b>{c['eyebrow_b']}</b></span>
                    <h1>{c['h1_plain']} <span class="{p}-grad">{c['h1_grad']}</span></h1>
                    <p class="{p}-lede">{c['lede']}</p>
                    <div class="{p}-cta-row">
                        <a href="#book-demo" class="{p}-btn {p}-btn-primary">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                            {c['cta_primary']}
                        </a>
                        <a href="#path" class="{p}-btn {p}-btn-ghost">See the Roadmap</a>
                    </div>
                    <div class="{p}-ribbon">
{ribbon}                    </div>
                </div>
                <div aria-hidden="true">
{c['hero_html']}
                </div>
            </div>
        </section>

        <!-- QUICK ANSWER (GEO/AEO) -->
        <div class="{p}-quick-answer">
            <h2>Quick answer</h2>
            <p>{c['quick_answer']}</p>
        </div>

        <!-- LEAD FORM (DEMO-FIRST) -->
        <section id="book-demo" class="section {p}-section {p}-form-section" style="padding-top:54px;">
            <p class="{p}-kicker">Start Today</p>
            <h2 class="{p}-h2">{c['form_h']}</h2>
            <p class="{p}-sub">{c['form_sub']}</p>

            <div class="contact-container">
                <form class="contact-form" id="tryCodeForm" action="#" method="POST">
                    <div class="form-group"><label for="contactName" style="color:#CBD5E1!important;font-size:14px!important;margin-bottom:5px!important;display:block!important;">Your Name *</label><input type="text" id="contactName" name="name" class="input-field" placeholder="Enter your full name" required></div>
                    <div class="form-group"><label for="contactEmail" style="color:#CBD5E1!important;font-size:14px!important;margin-bottom:5px!important;display:block!important;">Email Address *</label><input type="email" id="contactEmail" name="email" class="input-field" placeholder="your.email@example.com" required></div>
                    <div class="form-group"><label for="contactPhone" style="color:#CBD5E1!important;font-size:14px!important;margin-bottom:5px!important;display:block!important;">WhatsApp/Phone *</label><input type="tel" id="contactPhone" name="contact" class="input-field" placeholder="10-digit mobile number" required pattern="[0-9]{{10}}"></div>
                    <div class="form-group"><label for="childAge" style="color:#CBD5E1!important;font-size:14px!important;margin-bottom:5px!important;display:block!important;">You Are *</label>
                        <select id="childAge" name="childAge" class="input-field" required>
                            <option value="">Select one</option>
                            <option value="Teen 14-18">Teen (14–18)</option>
                            <option value="College student">College student</option>
                            <option value="Working professional">Working professional</option>
                            <option value="Career switcher">Career switcher into AI/ML</option>
                        </select>
                    </div>
                    <div class="form-group"><label for="userCity" style="color:#CBD5E1!important;font-size:14px!important;margin-bottom:5px!important;display:block!important;">Your Level</label>
                        <select id="userCity" name="userCity" class="input-field">
                            <option value="">Select your level</option>
                            <option value="Complete beginner">Complete beginner</option>
                            <option value="Know Python">Know some Python</option>
                            <option value="Know ML basics">Know ML basics</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div class="form-group"><label for="contactMessage" style="color:#CBD5E1!important;font-size:14px!important;margin-bottom:5px!important;display:block!important;">What do you want to achieve? *</label><textarea id="contactMessage" name="message" class="input-field" placeholder="{c['form_placeholder']}" required rows="4" minlength="10"></textarea></div>
                    <button type="submit" class="submit-button" style="width:100%!important;padding:16px!important;font-size:1.1rem!important;"><span class="button-text">{c['form_btn']}</span></button>
                </form>
                <div class="form-feedback" id="formFeedback" style="display:none;margin-top:20px!important;padding:15px!important;border-radius:10px!important;"><p class="feedback-message" style="margin:0!important;"></p></div>
            </div>
            <div style="text-align:center!important;margin-top:30px!important;">
                <p style="color:#CBD5E1!important;margin-bottom:15px!important;">Prefer to talk now? Reach us directly:</p>
                <div style="display:flex!important;flex-wrap:wrap!important;gap:15px!important;justify-content:center!important;">
                    <a href="tel:+919123366161" style="background:rgba({C1},0.15)!important;border:1px solid {c['c1']}!important;color:#93c5fd!important;padding:12px 24px!important;border-radius:10px!important;text-decoration:none!important;font-weight:600!important;">Call: 9123366161</a>
                    <a href="https://wa.me/919123366161?text=Hi, I'm interested in {c['wa_text']}" target="_blank" style="background:rgba(37,211,102,0.15)!important;border:1px solid #25D366!important;color:#25D366!important;padding:12px 24px!important;border-radius:10px!important;text-decoration:none!important;font-weight:600!important;">WhatsApp Us</a>
                </div>
            </div>
        </section>

        <!-- WHAT YOU LEARN -->
        <section class="section {p}-section">
            <p class="{p}-kicker">{c['learn_kicker']}</p>
            <h2 class="{p}-h2">{c['learn_h']}</h2>
            <p class="{p}-sub">{c['learn_sub']}</p>
            <div class="{p}-wrap">
                <div class="{p}-grid3">
{learn}                </div>
            </div>
        </section>

        <!-- ROADMAP -->
        <section id="path" class="section {p}-section">
            <p class="{p}-kicker">The Roadmap</p>
            <h2 class="{p}-h2">{c['road_h']}</h2>
            <p class="{p}-sub">{c['road_sub']}</p>
            <div class="{p}-wrap">
                <div class="{p}-steps">
{steps}                </div>
            </div>
        </section>

        <!-- RELATED / PROMO -->
        <section class="section {p}-section">
            <p class="{p}-kicker">What's Next</p>
            <h2 class="{p}-h2">{c['promo_h']}</h2>
            <p class="{p}-sub">{c['promo_sub']}</p>
            <div class="{p}-wrap">
                <div class="{p}-promo">
{promo}                </div>
            </div>
        </section>

        <!-- WHY -->
        <section class="section {p}-section">
            <p class="{p}-kicker">{c['why_kicker']}</p>
            <h2 class="{p}-h2">{c['why_h']}</h2>
            <div class="{p}-prose">
                <p>{c['why_intro']}</p>
                <h3>{c['why_h1']}</h3>
                <p>{c['why_p1']}</p>
                <h3>{c['why_h2']}</h3>
                <p>{c['why_p2']}</p>
            </div>
        </section>

        <!-- PRICING -->
        <section id="pricing" class="section {p}-section">
            <p class="{p}-kicker">Simple Pricing</p>
            <h2 class="{p}-h2">{c['price_h']}</h2>
            <p class="{p}-sub">Transparent monthly plans, no hidden charges. Start with a free demo.</p>
            <div class="{p}-pricing">
                <div class="{p}-plan">
                    <h3>Group Batch</h3>
                    <div class="{p}-price">₹1,499<small>per month · 2 classes/week</small></div>
                    <ul><li>5–8 learners per batch</li><li>{plans[0]}</li><li>Recorded class access</li><li>Completion certificate</li></ul>
                    <a href="#book-demo" class="{p}-btn {p}-btn-ghost" style="width:100%;justify-content:center;">Start Free Demo</a>
                </div>
                <div class="{p}-plan {p}-pop">
                    <span class="{p}-badge">Most Popular</span>
                    <h3>Mini Batch</h3>
                    <div class="{p}-price">₹2,499<small>per month · 2 classes/week</small></div>
                    <ul><li>Only 3–4 learners per batch</li><li>More personal mentoring</li><li>Recorded class access</li><li>{plans[1]}</li></ul>
                    <a href="#book-demo" class="{p}-btn {p}-btn-primary" style="width:100%;justify-content:center;">Start Free Demo</a>
                </div>
                <div class="{p}-plan">
                    <h3>1-on-1 Personal</h3>
                    <div class="{p}-price">₹4,999<small>per month · fully personalised</small></div>
                    <ul><li>Dedicated personal mentor</li><li>Custom pace &amp; schedule</li><li>Recorded class access</li><li>{plans[2]}</li></ul>
                    <a href="#book-demo" class="{p}-btn {p}-btn-ghost" style="width:100%;justify-content:center;">Start Free Demo</a>
                </div>
            </div>
        </section>

        <!-- TESTIMONIALS -->
        <section class="section {p}-section">
            <p class="{p}-kicker">Learner Voices</p>
            <h2 class="{p}-h2">What Learners Say</h2>
            <div class="{p}-wrap">
                <div class="{p}-quotes">
{quotes}                </div>
            </div>
        </section>

        <!-- CTA BAND -->
        <section class="section {p}-section">
            <div class="{p}-band">
                <h2>{c['band_h']}</h2>
                <p>{c['band_p']}</p>
                <a href="#book-demo" class="{p}-btn {p}-btn-primary">{c['cta_primary']}</a>
            </div>
        </section>

        <!-- FAQ -->
        <section id="faq" class="section {p}-section">
            <p class="{p}-kicker">Good To Know</p>
            <h2 class="{p}-h2">Frequently Asked Questions</h2>
            <div class="{p}-faq">
{faqs}            </div>
        </section>

    </main>
'''

# ---------------------------------------------------------------- related + footer + scripts
RELATED_LINKS = '''      <li><a href="/best-ai-and-machine-learning-course-in-india">Best AI &amp; ML Course in India</a></li>
      <li><a href="/machine-learning-course-for-beginners">Machine Learning for Beginners</a></li>
      <li><a href="/deep-learning-course">Deep Learning Course</a></li>
      <li><a href="/data-science-course">Data Science Course</a></li>
      <li><a href="/python-for-machine-learning">Python for Machine Learning</a></li>
      <li><a href="/python-for-data-science">Python for Data Science</a></li>
      <li><a href="/how-to-build-ai-models">How to Build AI Models</a></li>
      <li><a href="/how-to-train-machine-learning-models">How to Train ML Models</a></li>
      <li><a href="/neural-networks-course">Neural Networks Course</a></li>
      <li><a href="/large-language-models-course">Large Language Models</a></li>
      <li><a href="/ai-ml-projects-for-students">AI/ML Projects for Students</a></li>
      <li><a href="/online-ai-and-machine-learning-classes">Online AI &amp; ML Classes</a></li>'''

def related(c):
    C1 = rgb(c['c1'])
    return f'''
<!-- BEGIN_RELATED_PAGES -->
<section aria-label="Related pages" style="background:rgba({C1},.04);border-top:1px solid rgba({C1},.15);border-bottom:1px solid rgba({C1},.15);padding:40px 20px;margin:40px 0 0">
  <div style="max-width:1100px;margin:0 auto">
    <nav aria-label="Breadcrumb" style="font-size:13px;color:#94a3b8;margin-bottom:18px">
      <a href="/" style="color:#93c5fd;text-decoration:none">Home</a>
      <span style="color:#475569;margin:0 6px">/</span>
      <a href="/best-ai-and-machine-learning-course-in-india" style="color:#93c5fd;text-decoration:none">AI &amp; ML Course</a>
      <span style="color:#475569;margin:0 6px">/</span>
      <span>{c['leaf']}</span>
    </nav>
    <h2 style="color:#fff;font-size:1.25rem;font-weight:800;margin:0 0 14px">Explore the AI &amp; ML course family</h2>
    <ul style="list-style:none;padding:0;margin:0;display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:10px">
{RELATED_LINKS}
    </ul>
    <p style="margin:18px 0 0"><a href="/courses" style="color:#93c5fd;text-decoration:none;font-weight:600">&rarr; See all coding courses</a></p>
  </div>
</section>
<!-- END_RELATED_PAGES -->
'''

FOOTER = r'''
<!-- BEGIN_INLINED_FOOTER -->
<footer class="site-footer">
    <div class="footer-container">
        <div class="footer-grid">
            <div class="footer-column">
                <a href="/" class="logo">
                    <img src="/images/logo.svg" alt="Modern Age Coders Logo" class="logo-img" width="40" height="40" loading="lazy" decoding="async">
                    <span class="logo-text">Modern Age Coders</span>
                </a>
                <p class="footer-tagline">Forging the next generation of innovators.</p>
                <div class="social-links">
                    <a href="https://instagram.com/modern_age_coders" target="_blank" rel="noopener" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg></a>
                    <a href="https://www.youtube.com/@ModernAgeCoders" target="_blank" rel="noopener" aria-label="YouTube"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg></a>
                    <a href="https://www.linkedin.com/in/shivam-khemka-modern-age-coders" target="_blank" rel="noopener" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg></a>
                    <a href="https://github.com/modernagecoder" target="_blank" rel="noopener" aria-label="GitHub"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg></a>
                </div>
            </div>
            <div class="footer-column">
                <h3 class="footer-heading">Quick Links</h3>
                <ul class="footer-links">
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/blog">Blog</a></li>
                    <li><a href="/courses">Courses</a></li>
                    <li><a href="/success-stories">Success Stories</a></li>
                    <li><a href="/free-resources">Free Resources</a></li>
                    <li><a href="/student-labs">Student Labs</a></li>
                    <li><a href="/pricing">Pricing</a></li>
                    <li><a href="/faq">FAQ</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/best-java-classes-in-india">Best Java Classes in India</a></li>
                    <li><a href="/best-c-plus-plus-classes-in-india">Best C++ Classes in India</a></li>
                    <li><a href="/ai-ml-course-for-teens">AI &amp; ML Course for Teens</a></li>
                    <li><a href="/coding-classes-for-girls">Coding Classes for Girls</a></li>
                </ul>
            </div>
            <div class="footer-column">
                <h3 class="footer-heading">AI &amp; ML Courses</h3>
                <ul class="footer-links">
                    <li><a href="/best-ai-and-machine-learning-course-in-india">Best AI &amp; ML Course in India</a></li>
                    <li><a href="/machine-learning-course-for-beginners">Machine Learning for Beginners</a></li>
                    <li><a href="/deep-learning-course">Deep Learning Course</a></li>
                    <li><a href="/data-science-course">Data Science Course</a></li>
                    <li><a href="/generative-ai-course">Generative AI Course</a></li>
                    <li><a href="/python-for-machine-learning">Python for Machine Learning</a></li>
                    <li><a href="/python-for-data-science">Python for Data Science</a></li>
                    <li><a href="/large-language-models-course">Large Language Models</a></li>
                    <li><a href="/prompt-engineering-course">Prompt Engineering</a></li>
                    <li><a href="/ai-agents-course">AI Agents Course</a></li>
                    <li><a href="/ai-ml-certification-course">AI/ML Certification</a></li>
                    <li><a href="/online-ai-and-machine-learning-classes">Online AI &amp; ML Classes</a></li>
                </ul>
            </div>
            <div class="footer-column">
                <h3 class="footer-heading">Contact & Legal</h3>
                <ul class="footer-links">
                    <li><a href="tel:+919123366161">+91 9123366161</a></li>
                    <li><a href="mailto:contact@modernagecoders.com">contact@modernagecoders.com</a></li>
                    <li><a href="/privacy">Privacy Policy</a></li>
                    <li><a href="/terms">Terms of Service</a></li>
                    <li><a href="/cancellation">Cancellation Policy</a></li>
                    <li><a href="/refund">Refund Policy</a></li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom"><p id="copyright"></p></div>
    </div>
</footer>
'''

def floating(c):
    return f'''
<a href="https://misti.modernagecoders.com" target="_blank" rel="noopener noreferrer" class="misti-chat-btn" aria-label="Chat with Misti AI" style="position: fixed !important; bottom: 92px !important; right: 24px !important; z-index: 2147483646 !important; display: flex !important; flex-direction: row !important; align-items: center !important; gap: 10px !important; text-decoration: none !important;">
    <span class="misti-label" style="background: linear-gradient(135deg, #a855f7, #8b5cf6); color: #fff; padding: 8px 16px; border-radius: 20px; font-size: 13px; font-weight: 600; white-space: nowrap; box-shadow: 0 4px 14px rgba(168, 85, 247, 0.4); font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; letter-spacing: 0.3px;">Ask Misti AI</span>
    <div class="misti-icon" style="width: 52px; height: 52px; min-width: 52px; min-height: 52px; background: linear-gradient(135deg, #a855f7, #8b5cf6); border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 14px rgba(168, 85, 247, 0.4); transition: transform 0.2s, box-shadow 0.2s; flex-shrink: 0;">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="min-width: 26px; min-height: 26px;"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
    </div>
</a>
<a href="https://wa.me/919123366161?text={c['wa_float']}" target="_blank" rel="noopener noreferrer" class="wa-float-btn" aria-label="Chat on WhatsApp" style="position: fixed !important; bottom: 24px !important; right: 24px !important; z-index: 2147483645 !important; display: flex !important; flex-direction: row !important; align-items: center !important; gap: 10px !important; text-decoration: none !important;">
    <span class="wa-label" style="background: #25D366; color: #fff; padding: 8px 16px; border-radius: 20px; font-size: 13px; font-weight: 600; white-space: nowrap; box-shadow: 0 4px 14px rgba(37, 211, 102, 0.4); font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; letter-spacing: 0.3px;">Chat with us</span>
    <div class="wa-icon" style="width: 52px; height: 52px; min-width: 52px; min-height: 52px; background: #25D366; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 14px rgba(37, 211, 102, 0.4); transition: transform 0.2s, box-shadow 0.2s; flex-shrink: 0;">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="#fff" style="min-width: 26px; min-height: 26px;"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
    </div>
</a>

<style>
    .misti-chat-btn:hover .misti-icon {{ transform: scale(1.08); box-shadow: 0 6px 20px rgba(168, 85, 247, 0.5); }}
    .misti-chat-btn:hover .misti-label {{ box-shadow: 0 6px 20px rgba(168, 85, 247, 0.5); }}
    .wa-float-btn:hover .wa-icon {{ transform: scale(1.08); box-shadow: 0 6px 20px rgba(37, 211, 102, 0.5); }}
    .wa-float-btn:hover .wa-label {{ box-shadow: 0 6px 20px rgba(37, 211, 102, 0.5); }}
    @media (max-width: 768px) {{
        .misti-label, .wa-label {{ display: none !important; visibility: hidden !important; }}
        .misti-chat-btn {{ bottom: 88px !important; right: 16px !important; }}
        .wa-float-btn {{ bottom: 20px !important; right: 16px !important; }}
        .misti-icon, .wa-icon {{ width: 52px !important; height: 52px !important; min-width: 52px !important; min-height: 52px !important; }}
    }}
</style>

<script src="https://unpkg.com/lenis@1.1.20/dist/lenis.min.js"></script>
<script>
    document.addEventListener("DOMContentLoaded", function () {{
        if (typeof Lenis !== 'undefined') {{
            const lenis = new Lenis({{ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), direction: 'vertical', gestureDirection: 'vertical', smooth: true, mouseMultiplier: 1, smoothTouch: false, touchMultiplier: 2, infinite: false }});
            function raf(time) {{ lenis.raf(time); requestAnimationFrame(raf); }}
            requestAnimationFrame(raf);
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {{
                anchor.addEventListener('click', function (e) {{
                    const targetId = this.getAttribute('href');
                    if (targetId && targetId !== '#') {{ const t = document.querySelector(targetId); if (t) {{ e.preventDefault(); lenis.scrollTo(t); }} }}
                }});
            }});
        }}
    }});
</script>
<!-- END_INLINED_FOOTER -->
'''

def scripts(c):
    p = c['prefix']; C1 = rgb(c['c1']); C2 = rgb(c['c2'])
    words = ", ".join(f"'{w}'" for w in c['canvas_words'])
    return f'''
    <!-- SCRIPTS -->
    <script>
        const canvas = document.getElementById('background-canvas');
        const ctx = canvas.getContext('2d');
        let particles = [];
        const codeChars = ['<', '>', '{{', '}}', '/', '=', '+', '-', '*', '(', ')', ';', ':', '0', '1'];
        const aiChars = [{words}];
        function resizeCanvas() {{ canvas.width = window.innerWidth; canvas.height = window.innerHeight; }}
        function createParticles() {{
            particles = [];
            const count = Math.floor((canvas.width * canvas.height) / 16000);
            for (let i = 0; i < count; i++) {{
                const isAi = Math.random() > 0.6;
                particles.push({{ x: Math.random() * canvas.width, y: Math.random() * canvas.height, char: isAi ? aiChars[Math.floor(Math.random() * aiChars.length)] : codeChars[Math.floor(Math.random() * codeChars.length)], size: Math.random() * 13 + 9, speed: Math.random() * 0.3 + 0.1, opacity: Math.random() * 0.13 + 0.04, rotation: Math.random() * Math.PI * 2, rotationSpeed: (Math.random() - 0.5) * 0.01, isAi: isAi }});
            }}
        }}
        function animate() {{
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {{ p.y -= p.speed; p.rotation += p.rotationSpeed; if (p.y < -30) {{ p.y = canvas.height + 30; p.x = Math.random() * canvas.width; }} ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rotation); ctx.font = `${{p.size}}px monospace`; ctx.fillStyle = p.isAi ? `rgba({C1}, ${{p.opacity}})` : `rgba({C2}, ${{p.opacity}})`; ctx.fillText(p.char, 0, 0); ctx.restore(); }});
            requestAnimationFrame(animate);
        }}
        window.addEventListener('resize', () => {{ resizeCanvas(); createParticles(); }});
        resizeCanvas(); createParticles(); animate();

        document.querySelectorAll('.faq-item').forEach(item => {{
            const q = item.querySelector('.faq-question'); const a = item.querySelector('.faq-answer'); const t = item.querySelector('.faq-toggle');
            q.addEventListener('click', () => {{
                const active = item.classList.contains('active');
                document.querySelectorAll('.faq-item').forEach(i => {{ i.classList.remove('active'); i.querySelector('.faq-answer').style.maxHeight = '0'; i.querySelector('.faq-toggle').textContent = '+'; }});
                if (!active) {{ item.classList.add('active'); a.style.maxHeight = a.scrollHeight + 'px'; t.textContent = '-'; }}
            }});
        }});

        const observer = new IntersectionObserver((entries) => {{ entries.forEach(e => {{ if (e.isIntersecting) {{ e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)'; }} }}); }}, {{ threshold: 0.08, rootMargin: '0px 0px -40px 0px' }});
        document.querySelectorAll('.{p}-section').forEach(el => {{ el.style.opacity = '0'; el.style.transform = 'translateY(20px)'; el.style.transition = 'opacity 0.6s ease, transform 0.6s ease'; observer.observe(el); }});
    </script>

    <script>
        const API_CONFIG = {{ development: 'http://localhost:5000', production: 'https://backend-modernagecoders.vercel.app', getBaseURL: function () {{ return (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') ? this.development : this.production; }} }};
        const API_BASE_URL = API_CONFIG.getBaseURL();
        function validateEmail(email) {{ return /^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{{2,3}})+$/.test(email); }}
        function validatePhone(phone) {{
            const cleaned = (phone || '').replace(/\\D/g, '');
            const _ccEl = document.getElementById('contactPhone') || document.getElementById('phone') || document.querySelector('input[type="tel"][data-country-iso]');
            const _iso = (_ccEl && _ccEl.dataset && _ccEl.dataset.countryIso) || 'IN';
            const _re = _iso === 'IN' ? /^[0-9]{{10}}$/ : /^[0-9]{{7,15}}$/;
            return _re.test(cleaned);
        }}
        function showFeedback(type, message) {{ const el = document.getElementById('formFeedback'); el.style.display = 'block'; el.style.background = type === 'success' ? 'rgba(16, 185, 129, 0.15)' : 'rgba(239, 68, 68, 0.15)'; el.style.border = type === 'success' ? '1px solid #10b981' : '1px solid #ef4444'; el.style.color = type === 'success' ? '#10b981' : '#ef4444'; el.querySelector('.feedback-message').textContent = message; setTimeout(() => {{ el.style.display = 'none'; }}, 8000); }}
        function showLoading(isLoading) {{ const btn = document.querySelector('.submit-button'); if (!btn) return; btn.disabled = isLoading; btn.style.opacity = isLoading ? '0.7' : '1'; }}
        document.addEventListener('DOMContentLoaded', function () {{
            const form = document.getElementById('tryCodeForm');
            if (form) {{
                form.addEventListener('submit', async function (e) {{
                    e.preventDefault();
                    const name = document.getElementById('contactName').value.trim();
                    const email = document.getElementById('contactEmail').value.trim();
                    const phone = document.getElementById('contactPhone').value.trim();
                    const childAge = document.getElementById('childAge').value;
                    const goal = document.getElementById('userCity').value;
                    const message = document.getElementById('contactMessage').value.trim();
                    if (!validateEmail(email)) {{ alert('Please enter a valid email'); return; }}
                    if (!validatePhone(phone)) {{ alert('Please enter a valid 10-digit phone'); return; }}
                    if (!childAge) {{ alert('Please select who you are'); return; }}
                    if (message.length < 10) {{ alert('Please describe what you want to learn'); return; }}
                    showLoading(true);
                    let fullMessage = message + (childAge ? ` | Who: ${{childAge}}` : '') + (goal ? ` | Level: ${{goal}}` : '') + ' | [Source: {c['source_tag']}]';
                    try {{
                        const response = await fetch(`${{API_BASE_URL}}/api/contact/submit`, {{ method: 'POST', headers: {{ 'Content-Type': 'application/json' }}, body: JSON.stringify({{ name, email, contact: phone,
                            countryCode: ((window.MACCountryCode && window.MACCountryCode.read) ? window.MACCountryCode.read(document.getElementById('contactPhone') || document.getElementById('phone')).dial : '+91'),
                            countryIso:  ((window.MACCountryCode && window.MACCountryCode.read) ? window.MACCountryCode.read(document.getElementById('contactPhone') || document.getElementById('phone')).iso  : 'IN'),
                            countryName: ((window.MACCountryCode && window.MACCountryCode.read) ? window.MACCountryCode.read(document.getElementById('contactPhone') || document.getElementById('phone')).name : 'India'), message: fullMessage }}) }});
                        const data = await response.json();
                        if (response.ok) {{ if (typeof fbq === "function") {{ fbq("track", "Lead", {{ content_name: "{c['lead_name']}", content_category: "Free Trial" }}); }} showFeedback('success', 'We have received your response. We will reach out to you within 24 hours. If you want to connect now, please contact 9123366161 (Shivam Sir).'); form.reset(); }} else {{ throw new Error(data.message || 'Something went wrong'); }}
                    }} catch (error) {{ showFeedback('error', 'Something went wrong. Please call us at 9123366161.'); }} finally {{ showLoading(false); }}
                }});
            }}
        }});
    </script>

    <script src="/js/callback-modal.js"></script>
    <script src="/js/navigation.js"></script>
    <script>
        (function() {{
            document.dispatchEvent(new CustomEvent('componentsLoaded'));
            var c = document.getElementById('copyright');
            if (c) c.innerHTML = '© ' + new Date().getFullYear() + ' Modern Age Coders. All Rights Reserved.';
        }})();
    </script>
    <script src="/js/country-code-selector.js?v=20260513c" defer></script>
</body>

</html>
'''

def head(c):
    url = f"{BASE}/{c['slug']}"
    return f'''<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-N8BM164YJP"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag() {{ dataLayer.push(arguments); }}
        gtag('js', new Date());
        gtag('config', 'G-N8BM164YJP');
        gtag('config', 'AW-16910316353');
    </script>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{c['title']}</title>

    <meta name="description" content="{html.escape(c['meta_desc'])}">
    <!-- meta keywords intentionally not emitted: Google has ignored it since 2009 and
         Bing treats it as a SPAM SIGNAL — and Bing is the index ChatGPT/Copilot answer from.
         See scripts/strip-meta-keywords.py. -->
    <meta name="author" content="Modern Age Coders">
    <link rel="canonical" href="/{c['slug']}">

    <link rel="alternate" type="text/markdown" href="/src/pages/{c['slug']}.md" title="Markdown version for AI agents">
    <link rel="alternate" hreflang="en" href="/{c['slug']}" />
    <link rel="alternate" hreflang="en-in" href="/{c['slug']}" />
    <link rel="alternate" hreflang="x-default" href="/{c['slug']}" />

    <link rel="icon" href="/favicon.ico" type="image/x-icon">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-chrome-192x192.png">
    <link rel="icon" type="image/png" sizes="512x512" href="/favicon/android-chrome-512x512.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png">
    <link rel="manifest" href="/favicon/site.webmanifest">
    <meta name="theme-color" content="{c['c1']}">

    <!-- Open Graph -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="{url}">
    <meta property="og:title" content="{html.escape(c['og_title'])}">
    <meta property="og:description" content="{html.escape(c['og_desc'])}">
    <meta property="og:image" content="https://learn.modernagecoders.com/images/og-modern-age-coders.png">
    <meta property="og:site_name" content="Modern Age Coders">
    <meta property="og:locale" content="en_IN">

    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="{html.escape(c['tw_title'])}">
    <meta name="twitter:description" content="{html.escape(c['tw_desc'])}">
    <meta name="twitter:image" content="https://learn.modernagecoders.com/images/og-modern-age-coders.png">

    <meta name="google-site-verification" content="fpweGaVH4rJIwjSfE5wSdzUGWTYsLz2KFENZxOoX91k" />
    <meta name="geo.region" content="IN">
    <meta name="geo.placename" content="India">
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">

{jsonld(c)}
{select_css(c)}
{css(c)}
    <!-- Meta Pixel -->
    <script src="/js/meta-pixel.js"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="dns-prefetch" href="https://fonts.googleapis.com">
    <link rel="stylesheet" href="/css/style.css">
    <link rel="stylesheet" href="/css/responsive.css">
    <link rel="stylesheet" href="/css/best-coding-class.css">
    <link rel="stylesheet" href="/css/pages/global.css?v=20260411-p7">
    <link rel="stylesheet" href="/css/pages/landing.css?v=20260411-p7">
    <link rel="stylesheet" href="/css/pages/identity.css?v=20260411-p7">
    <script src="/js/ux-enhancements.js" defer></script>
    <script src="/js/hover-prefetch.js" defer></script>
    <script>if('serviceWorker' in navigator){{window.addEventListener('load',function(){{navigator.serviceWorker.register('/sw.js').catch(function(){{}});}});}}</script>
</head>

<body class="best-coding-page {c['prefix']}-body">
    <a href="#main" class="skip-link">Skip to main content</a>
    <canvas id="background-canvas" style="position:fixed;top:0;left:0;width:100%;height:100%;z-index:0;pointer-events:none;"></canvas>

'''

def build_html(c):
    return (head(c) + NAV + callback_modal(c) + main_content(c) +
            related(c) + FOOTER + floating(c) + scripts(c))

# ---------------------------------------------------------------- markdown twin
def build_md(c):
    lines = []
    lines.append("---")
    lines.append(f'title: "{c["title"]}"')
    lines.append(f'description: "{c["meta_desc"]}"')
    lines.append(f"canonical: /{c['slug']}")
    lines.append(f'keywords: [{", ".join(chr(34)+k.strip()+chr(34) for k in c["keywords"].split(","))}]')
    lines.append(f"source: src/pages/{c['slug']}.html")
    lines.append("---")
    lines.append(f"> {c['meta_desc']}")
    lines.append("")
    lines.append(f"# {strip_tags(c['h1_plain'] + ' ' + c['h1_grad'])}")
    lines.append("")
    lines.append(strip_tags(c['lede']))
    lines.append("")
    lines.append("## Quick answer")
    lines.append("")
    lines.append(strip_tags(c['quick_answer']))
    lines.append("")
    lines.append(f"## {strip_tags(c['learn_h'])}")
    lines.append("")
    lines.append(strip_tags(c['learn_sub']))
    lines.append("")
    for _, _, t, d in c['learn_cards']:
        lines.append(f"### {strip_tags(t)}")
        lines.append("")
        lines.append(strip_tags(d))
        lines.append("")
    lines.append(f"## {strip_tags(c['road_h'])}")
    lines.append("")
    for n, t, d in c['roadmap']:
        lines.append(f"**{n} — {strip_tags(t)}**: {strip_tags(d)}")
        lines.append("")
    lines.append(f"## {strip_tags(c['why_h'])}")
    lines.append("")
    lines.append(strip_tags(c['why_intro']))
    lines.append("")
    lines.append(f"### {strip_tags(c['why_h1'])}")
    lines.append("")
    lines.append(strip_tags(c['why_p1']))
    lines.append("")
    lines.append(f"### {strip_tags(c['why_h2'])}")
    lines.append("")
    lines.append(strip_tags(c['why_p2']))
    lines.append("")
    lines.append("## Course Fees")
    lines.append("")
    lines.append("- **Group Batch** — ₹1,499/month, 2 classes/week, 5–8 learners, completion certificate.")
    lines.append("- **Mini Batch** — ₹2,499/month, only 3–4 learners, more personal mentoring.")
    lines.append("- **1-on-1 Personal** — ₹4,999/month, dedicated mentor, custom pace.")
    lines.append("")
    lines.append("A free demo class is available first.")
    lines.append("")
    lines.append("## Explore the AI & ML course family")
    lines.append("")
    for href, t, d in c['promo']:
        lines.append(f"- [{strip_tags(t)}]({href}) — {strip_tags(d)}")
    lines.append("")
    lines.append("## Frequently Asked Questions")
    lines.append("")
    for q, a in c['faqs']:
        lines.append(f"**{strip_tags(q)}**")
        lines.append("")
        lines.append(strip_tags(a))
        lines.append("")
    lines.append("---")
    lines.append("")
    lines.append(f"Contact: +91 9123366161 · contact@modernagecoders.com")
    lines.append(f"*Canonical: {BASE}/{c['slug']}*")
    return "\n".join(lines) + "\n"

# ================================================================ ICONS (reusable)
IC = {
 'list': '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="STROKE" stroke-width="2"><path d="M4 7h16M4 12h10M4 17h7"/></svg>',
 'gear': '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="STROKE" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/></svg>',
 'chart': '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="STROKE" stroke-width="2"><path d="M3 3v18h18"/><path d="M7 14l3-4 3 2 4-6"/></svg>',
 'brain': '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="STROKE" stroke-width="2"><path d="M9 3a3 3 0 0 0-3 3 3 3 0 0 0-1 5.8A3 3 0 0 0 8 17a3 3 0 0 0 4 0 3 3 0 0 0 3-5.2A3 3 0 0 0 14 3a3 3 0 0 0-5 0z"/></svg>',
 'bolt': '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="STROKE" stroke-width="2"><path d="M13 2L3 14h7l-1 8 10-12h-7z"/></svg>',
 'eye': '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="STROKE" stroke-width="2"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"/><circle cx="12" cy="12" r="3"/></svg>',
 'chat': '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="STROKE" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
 'cpu': '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="STROKE" stroke-width="2"><rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 1v4M15 1v4M9 19v4M15 19v4M1 9h4M1 15h4M19 9h4M19 15h4"/></svg>',
 'rocket': '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="STROKE" stroke-width="2"><path d="M5 13l4 4M12 2c4 2 7 6 7 11l-4 4-4-4c0-5 3-9 1-11z"/><circle cx="13" cy="9" r="1.5"/></svg>',
 'cert': '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="STROKE" stroke-width="2"><circle cx="12" cy="9" r="6"/><path d="M9 14l-2 7 5-3 5 3-2-7"/></svg>',
 'video': '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="STROKE" stroke-width="2"><path d="M15 10l4.5-2.3v8.6L15 14M3 6h12v12H3z"/></svg>',
 'layers': '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="STROKE" stroke-width="2"><path d="M12 2l9 5-9 5-9-5 9-5zM3 12l9 5 9-5M3 17l9 5 9-5"/></svg>',
 'data': '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="STROKE" stroke-width="2"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></svg>',
 'target': '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="STROKE" stroke-width="2"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/></svg>',
 'check': '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="STROKE" stroke-width="2"><path d="M9 12l2 2 4-4M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z"/></svg>',
 'code': '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="STROKE" stroke-width="2"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/></svg>',
}

# helper to build a code-window hero
def code_hero(p, fname, code_html):
    return f'''                    <div class="{p}-ide">
                        <div class="{p}-ide-bar"><i class="d1"></i><i class="d2"></i><i class="d3"></i><span>{fname}</span></div>
<pre class="{p}-code">{code_html}</pre>
                    </div>'''

def panel_hero(p, title, rows):
    body = ""
    for ic, b, s, v in rows:
        ic = ic.replace('STROKE', '#eaf2ff')
        body += f'''                            <div class="{p}-prow"><div class="pi">{ic}</div><div><b>{b}</b><small>{s}</small></div><span class="pv">{v}</span></div>
'''
    return f'''                    <div class="{p}-panel">
                        <div class="{p}-panel-bar"><span class="dot"></span> {title}</div>
                        <div class="{p}-panel-body">
{body}                        </div>
                    </div>'''


# ================================================================ CONFIGS
CONFIGS = []

# import the per-page configs
from gen_aiml_configs import make_configs
CONFIGS = make_configs(IC, code_hero, panel_hero)

# ================================================================ RUN
if __name__ == "__main__":
    for c in CONFIGS:
        hp = os.path.join(PAGES, c['slug'] + ".html")
        mp = os.path.join(PAGES, c['slug'] + ".md")
        with open(hp, "w", encoding="utf-8") as f:
            f.write(build_html(c))
        with open(mp, "w", encoding="utf-8") as f:
            f.write(build_md(c))
        print("wrote", c['slug'], "(.html + .md)")
    print(f"\\nDone: {len(CONFIGS)} pages")
