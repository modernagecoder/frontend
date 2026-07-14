#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
citygen — restyle a best-coding-class-in-<slug> page into the warm 'Ledger & Proof'
brand (editorial-theme.css + city-warm.css). Extracts each page's REAL per-city data
(localities, city-tailored course copy, city FAQs, nearby cities) and re-renders it in
the warm template. No fabrication. Preserves head SEO/schema/gtag/pixel, nav, footer,
demo form (ids/handler), Lenis, international-pricing. Removes AI-look canvas + dead JS.
"""
import re, html, json, os, sys

# Single source of truth for anything this builder claims about the business.
# This template fans out to 131 city pages, so a number hard-coded here is not a
# number on one page — it is a site-wide claim. It used to emit a hard-coded
# "500+", which is where most of the site's inflated-by-nobody student count came
# from. See scripts/brand-facts.json.
_FACTS = json.loads(
    open(os.path.join(os.path.dirname(os.path.abspath(__file__)), "brand-facts.json"),
         encoding="utf-8").read()
)
STUDENTS = _FACTS["students"]

REPO="C:/Users/hp/Desktop/SkyCoders/kiro24/frontend"

# ---------- static real content (shared across all cities) ----------
REVIEWS=[
 ("PR","Poonam Rathore","Parent","My son looks forward to every class.",
  "He has been attending for a few months and I'm genuinely impressed with his progress and enthusiasm. The instructors are patient and knowledgeable, and his confidence has grown."),
 ("RM","Ria Mukherjee","Parent","The one-step solution for my son.",
  "They make learning to code so simple that kids love it. Teachers explain complex concepts clearly with practical exercises, and the projects were challenging and rewarding."),
 ("KB","Krishnam Bhatter","Former student","Mentors, not just teachers.",
  "The perks are excellent — one-on-one doubt solving, mentoring and regular tests. The most impressive part was working on real-world projects."),
 ("SG","Sonu Goyal","Parent","Clear, easy and practical.",
  "Wonderful teachers who boost students' confidence, keep them updated with technology, and inspire them to learn without hesitation."),
 ("SM","Samridho Mondal","Student","A game-changer for me.",
  "I struggled to grasp coding before joining, but their classes transformed everything. I can now confidently write complex programs with ease."),
 ("SS","Shewta Singh","Mother of Ishan","Maths finally made sense.",
  "My son struggled with maths for years. Integrating it into coding projects has transformed his understanding and confidence. Highly recommended."),
]
PROJECTS=[
 ("https://mind.modernagecoders.com","mindgame","Game","The Beautiful Mind",
  "A focus and brain-strength game with 15 progressive levels, real-time tracking and leaderboards.",
  "Built by Modern Age Coders · React, Firebase"),
 ("https://misti.modernagecoders.com","misti","AI &amp; ML","Misti — AI Study Chatbot",
  "An AI chatbot that solves maths and coding questions with step-by-step explanations using Python and LLM APIs.",
  "Built by Harshit · Python, AI/ML, LLM APIs"),
 ("https://babu.modernagecoders.com","babu","Game","Babu — 90-Second Maths Challenge",
  "A fast maths challenge with random problems under time pressure and a live Firebase leaderboard.",
  "Built by Modern Age Coders · JavaScript, Firebase"),
]
BADGES={
 "kids":["Most popular","Creative","Next step"],
 "teens":["In demand","Career","Build","Future"],
 "college":["Placements","Internships","Data"],
 "maths":["","","Olympiad"],
}
TRACK_META={
 "kids":("Ages 8–12","Coding for kids in {city}"),
 "teens":("Ages 13–18","Coding for teens in {city}"),
 "college":("College &amp; 18+","For {city} college students"),
 "maths":("Maths, taught properly","Mathematics classes in {city}"),
}
STATE_BOARD={
 "Maharashtra":"Maharashtra SSC/HSC","Karnataka":"Karnataka KSEEB","Telangana":"Telangana BSE/BIE",
 "Tamil Nadu":"Tamil Nadu State Board","West Bengal":"WBBSE / WBCHSE","Andhra Pradesh":"AP BSE/BIE",
 "Gujarat":"Gujarat GSEB","Rajasthan":"RBSE","Uttar Pradesh":"UP Board","Kerala":"Kerala SCERT",
 "Madhya Pradesh":"MP Board","Punjab":"PSEB","Haryana":"HBSE","Bihar":"BSEB","Odisha":"BSE Odisha",
 "Assam":"SEBA / AHSEC","Chhattisgarh":"CGBSE","Jharkhand":"JAC","Uttarakhand":"UBSE",
}
# hand-written, honest city context for metros (real hubs/colleges). {city}/{state} filled.
CONTEXT={
 "mumbai":[
  "Mumbai runs on ambition, and code is where a lot of it starts now. From the offices in BKC and the tech floors of Powai to the startups spread across Andheri and Lower Parel, the people your child will one day work with are already here. We build for that — not for a certificate to frame, but for skills that hold up in an interview or a first internship.",
  "What that looks like week to week: a live one-hour class with a real mentor, a batch of five to eight so nobody hides at the back, and a project on the screen at the end of most modules — a game, a website, a working script. Parents get recorded sessions and honest progress notes.",
  "Whether your child is in a Maharashtra State Board, CBSE, ICSE or IGCSE school — the same schools that feed IIT Bombay, VJTI and ICT — the plan is the same: start at the right level, build something real, and keep the momentum going."],
 "bengaluru":[
  "Bengaluru is India's coding city before your child writes a line of code. Electronic City, Whitefield, the startup lanes of Koramangala and HSR — the industry your child will grow into is on their doorstep. We build for that: real skills that hold up in an interview or a first internship, not just a certificate to frame.",
  "What that looks like week to week: a live one-hour class with a real mentor, a batch of five to eight so nobody drifts to the back, and a project on the screen at the end of most modules. Parents get recorded sessions and honest progress notes.",
  "Whether your child is in a Karnataka State, CBSE, ICSE or IGCSE school — the kind that send students to IISc, RVCE, PES and BMS — the plan is the same: start at the right level, build something real, and keep the momentum going."],
 "hyderabad":[
  "Hyderabad's HITEC City and Financial District have made it one of India's fastest-growing tech hubs, and that world starts closer to home than most parents think. From Gachibowli to Kondapur, the companies your child will one day join are already here. We build for that — real skills over a certificate to frame.",
  "What that looks like week to week: a live one-hour class with a real mentor, a batch of five to eight so nobody hides at the back, and a project on the screen at the end of most modules. Parents get recorded sessions and honest progress notes.",
  "Whether your child is in a Telangana State, CBSE, ICSE or IGCSE school — the ones that feed IIIT-Hyderabad, BITS and Osmania — the plan is the same: start at the right level, build something real, and keep the momentum going."],
 "chennai":[
  "Chennai's OMR IT corridor and the campuses around TIDEL Park have quietly made the city a serious engineering town. From Velachery to Sholinganallur, the industry your child will grow into is right here. We build for that: real skills that survive an interview or a first internship, not just a certificate to frame.",
  "What that looks like week to week: a live one-hour class with a real mentor, a batch of five to eight so nobody drifts to the back, and a project on the screen at the end of most modules. Parents get recorded sessions and honest progress notes.",
  "Whether your child is in a Tamil Nadu State Board, CBSE, ICSE or IGCSE school — the kind that feed IIT Madras, Anna University and SRM — the plan is the same: start at the right level, build something real, and keep the momentum going."],
 "delhi":[
  "Delhi NCR is one big engineering ecosystem — the product teams in Gurgaon, the startups in Noida, the campuses across the capital. The world your child will one day work in is right next door. We build for that: real skills that hold up in an interview or a first internship, not just a certificate to frame.",
  "What that looks like week to week: a live one-hour class with a real mentor, a batch of five to eight so nobody hides at the back, and a project on the screen at the end of most modules. Parents get recorded sessions and honest progress notes.",
  "Whether your child is in a CBSE, ICSE or IGCSE school — the kind that send students to IIT Delhi, DTU, NSUT and IIIT-Delhi — the plan is the same: start at the right level, build something real, and keep the momentum going."],
 "kolkata":[
  "Kolkata's Sector V in Salt Lake and the newer offices in New Town have built a real tech corridor, and that world is closer to your child than it looks. We build for it — real skills that hold up in an interview or a first internship, not just a certificate to frame.",
  "What that looks like week to week: a live one-hour class with a real mentor, a batch of five to eight so nobody drifts to the back, and a project on the screen at the end of most modules. Parents get recorded sessions and honest progress notes.",
  "Whether your child is in a West Bengal Board, CBSE, ICSE or IGCSE school — the kind that feed Jadavpur, IIEST Shibpur and IIT Kharagpur — the plan is the same: start at the right level, build something real, and keep the momentum going."],
}
# Delhi special-case data (UT, no state row in breadcrumb)
OVERRIDES={
 "delhi":{"state":"Delhi NCR","state_slug":None,
   "nearby":[{"slug":"noida","label":"Noida"},{"slug":"gurgaon","label":"Gurgaon"},
             {"slug":"faridabad","label":"Faridabad"},{"slug":"ghaziabad","label":"Ghaziabad"}]},
}

def esc(s): return html.escape(s,quote=True)

# ---------- EXTRACT ----------
def extract(slug):
    src=open(os.path.join(REPO,f"src/pages/best-coding-class-in-{slug}.html"),encoding="utf-8",errors="replace").read()
    d={"slug":slug}
    rel=re.search(r'<!-- BEGIN_RELATED_PAGES -->(.*?)<!-- END_RELATED_PAGES -->', src, re.S)
    d.update(state=None,state_slug=None,nearby=[],city_name=None)
    if rel:
        rb=rel.group(1)
        bc=re.search(r'<nav[^>]*aria-label="Breadcrumb"[^>]*>(.*?)</nav>', rb, re.S)
        if bc:
            for href,txt in re.findall(r'<a href="(/[^"]+)"[^>]*>([^<]+)</a>', bc.group(1)):
                if href.startswith("/coding-classes-in-") and href!="/coding-classes-in-india":
                    d["state"]=html.unescape(txt).replace("Coding Classes in ","").strip(); d["state_slug"]=href.lstrip("/")
            st=re.search(r'<strong[^>]*>([^<]+)</strong>', bc.group(1))
            if st and 'Best Coding Class in ' in st.group(1):
                d["city_name"]=html.unescape(st.group(1)).replace("Best Coding Class in ","").strip()
        seen=set()
        for href,txt in re.findall(r'<a href="(/[^"]+)"[^>]*>([^<]+)</a>', rb):
            m=re.match(r'/best-coding-class-in-([a-z0-9-]+)$', href)
            if m and m.group(1)!=slug and m.group(1) not in seen:
                seen.add(m.group(1)); d["nearby"].append({"slug":m.group(1),"label":html.unescape(txt).replace("Best Coding Class in ","").strip()})
    if not d["city_name"]: d["city_name"]=slug.replace("-"," ").title()
    # localities
    areas=[]
    sel=re.search(r'<select[^>]*id="[a-zA-Z]*[Aa]rea"[^>]*>(.*?)</select>', src, re.S)
    if sel:
        for om in re.finditer(r'<option value="([^"]+)"[^>]*>([^<]+)</option>', sel.group(1)):
            v=html.unescape(om.group(2)).strip()
            if v and 'Select' not in v and not v.startswith('Other'): areas.append(v)
    d["localities"]=areas
    # buckets for cards
    heads=[(m.start(), re.sub(r'\s+',' ',html.unescape(re.sub(r'<[^>]+>','',m.group(1)))).strip()) for m in re.finditer(r'<h2[^>]*>(.*?)</h2>', src, re.S)]
    def bucket(pos):
        h=""
        for hp,ht in heads:
            if hp<pos: h=ht
            else: break
        hl=h.lower()
        return ('kids' if 'kid' in hl else 'teens' if 'teen' in hl else
                'college' if ('college' in hl or 'university' in hl) else 'maths' if 'math' in hl else 'other')
    cards=[]
    idxs=[m.start() for m in re.finditer(r'<div class="course-card', src)]+[len(src)]
    for i in range(len(idxs)-1):
        pos=idxs[i]; seg=src[pos:idxs[i+1]]
        img=re.search(r'<img[^>]*src="([^"]+)"[^>]*alt="([^"]*)"', seg)
        title=re.search(r'<h3 class="card-title">(.*?)</h3>', seg, re.S)
        desc=re.search(r'<p class="card-description">(.*?)</p>', seg, re.S)
        href=re.search(r'<a href="([^"]+)" class="card-button"', seg)
        bullets=re.findall(r'✓\s*([^<]+)</li>', seg)
        if title and href:
            cards.append({"img":img.group(1) if img else "","alt":html.unescape(img.group(2)).strip() if img else "",
                "title":html.unescape(re.sub(r'<[^>]+>','',title.group(1))).strip(),
                "desc":html.unescape(re.sub(r'\s+',' ',re.sub(r'<[^>]+>','',desc.group(1)))).strip() if desc else "",
                "href":href.group(1),"bucket":bucket(pos),
                "bullets":[html.unescape(b).strip() for b in bullets][:4]})
    d["cards"]=cards
    # faqs from schema
    faqs=[]
    mfaq=re.search(r'"@type":\s*"FAQPage".*?"mainEntity":\s*\[(.*?)\]\s*\}', src, re.S)
    if mfaq:
        for qm in re.finditer(r'"name":\s*"((?:[^"\\]|\\.)*)".*?"acceptedAnswer".*?"text":\s*"((?:[^"\\]|\\.)*)"', mfaq.group(1), re.S):
            try: faqs.append({"q":json.loads('"'+qm.group(1)+'"').strip(),"a":json.loads('"'+qm.group(2)+'"').strip()})
            except: pass
    d["faqs"]=faqs
    # apply overrides
    ov=OVERRIDES.get(slug,{})
    for k,v in ov.items():
        if v is not None or k not in ("state_slug",): d[k]=v
    return d

# ---------- RENDER helpers ----------
def boards_line(state):
    sb=STATE_BOARD.get(state or "","")
    return (sb+" · " if sb else "")+"CBSE · ICSE · IGCSE"

def context_paras(slug,city,state):
    if slug in CONTEXT: return CONTEXT[slug]
    locs=None
    return None  # filled by render using localities fallback

def render_card(c,badge):
    img=c["img"] or "/images/python-teens.webp"
    alt=esc(c["alt"] or c["title"])
    bhtml=f'<span class="cc-badge{" hot" if badge in ("Most popular","In demand","Placements") else ""}">{badge}</span>' if badge else ''
    bullets="".join(f"<li>{esc(b)}</li>" for b in c["bullets"])
    ul=f'<ul class="cc-list">{bullets}</ul>' if bullets else ''
    return f'''<article class="cc">
  <div class="cc-thumb">{bhtml}<img width="800" height="450" src="{esc(img)}" alt="{alt}" loading="lazy"></div>
  <div class="cc-body">
    <h3>{esc(c["title"])}</h3>
    <p class="cc-desc">{esc(c["desc"])}</p>
    {ul}
    <a class="cc-link" href="{esc(c["href"])}">View course</a>
  </div>
</article>'''

def render_rail(bucket,cards,city):
    ey,htmpl=TRACK_META[bucket]
    head=f'''<div class="track-label"><span class="tl-ey">{ey}</span><h2>{htmpl.format(city=esc(city))}</h2><span class="tl-line"></span></div>'''
    badges=BADGES[bucket]
    cs="\n".join(render_card(c, badges[i] if i<len(badges) else "") for i,c in enumerate(cards))
    tail=''
    if bucket=="maths":
        tail='<div class="track-all"><a href="/courses" class="btn-ghost">Browse the full course catalogue →</a></div>'
    return f'<section class="section" id="{bucket}-courses">\n{head}\n<div class="course-rail">\n{cs}\n</div>\n{tail}\n</section>'

def render(slug):
    d=extract(slug)
    city=d["city_name"]; state=d["state"]; cityq=esc(city)
    locs=d["localities"] or ["your neighbourhood"]
    loc4=locs[:4]+["","",""," "]
    # hero lede localities
    if len(locs)>=4: lede_locs=f'from <strong>{esc(locs[0])} to {esc(locs[1])}, {esc(locs[2])} to {esc(locs[3])}</strong>'
    elif locs: lede_locs=f'across <strong>{esc(", ".join(locs[:3]))}</strong>'
    else: lede_locs=''
    areas_val=esc(", ".join(locs[:5]))+(" &amp; all of "+cityq if len(locs)>5 else "")
    # context
    paras=CONTEXT.get(slug)
    if not paras:
        l=[esc(x) for x in (locs+["","",""])[:4]]
        sb=STATE_BOARD.get(state or "","")
        board_clause=(f'a {sb}, CBSE, ICSE or IGCSE' if sb else 'a CBSE, ICSE or IGCSE')
        paras=[
         f"From {l[0]} and {l[1]} to {l[2]} and {l[3]}, families across {cityq} are choosing live online coding classes that go beyond a certificate. We build for real skills — the kind that hold up in an interview or a first internship." if len(locs)>=4 else
         f"Across {cityq}, families are choosing live online coding classes that go beyond a certificate. We build for real skills — the kind that hold up in an interview or a first internship.",
         "What that looks like week to week: a live one-hour class with a real mentor, a batch of five to eight so nobody hides at the back, and a project on the screen at the end of most modules. Parents get recorded sessions and honest progress notes.",
         f"Whether your child is in {board_clause} school, the plan is the same: start at the right level, build something real, and keep the momentum going."]
    context_html="\n".join(f"<p>{p}</p>" for p in paras)
    # locality tags + nearby
    loc_tags="\n".join(f'<span class="loc-tag">{esc(x)}</span>' for x in locs)
    nearby=d["nearby"][:6]
    if nearby:
        nb_links=" · ".join(f'<a href="/best-coding-class-in-{n["slug"]}">{esc(n["label"])}</a>' for n in nearby)
        state_all=f' · <a href="/{d["state_slug"]}">every city in {esc(state)} →</a>' if d.get("state_slug") else ' · <a href="/coding-classes-in-india">every city in India →</a>'
        nearby_html=f'<div class="nearby"><b>Also teaching families near {cityq}</b>{nb_links}{state_all}</div>'
    else:
        nearby_html=''
    # course rails
    rails=[]
    for b in ("kids","teens","college","maths"):
        cs=[c for c in d["cards"] if c["bucket"]==b]
        if cs: rails.append(render_rail(b,cs,city))
    rails_html="\n\n".join(rails)
    # reviews
    rev="\n".join(f'''<div class="review-card"><div class="review-stars">★★★★★</div>
  <p class="review-q">"{esc(q)}"</p><p class="review-b">{esc(b)}</p>
  <div class="review-who"><span class="rv-av">{av}</span><div><span class="rn">{esc(n)}</span><br><span class="rr">{esc(role)}</span></div></div></div>''' for av,n,role,q,b in REVIEWS)
    # projects
    proj="\n".join(f'''<a class="proof-card" href="{u}" target="_blank" rel="noopener">
  <div class="proof-thumb"><img width="800" height="500" src="/images/projects/{img}.webp" alt="{esc(t)}" loading="lazy"></div>
  <div class="proof-body"><span class="proof-cat">{cat}</span><h3>{esc(t)}</h3><p>{esc(desc)}</p>
  <span class="proof-by">{by}</span><span class="proof-open">Open the live project ↗</span></div></a>''' for u,img,cat,t,desc,by in PROJECTS)
    # faqs (real, city-specific)
    faqs=d["faqs"] or []
    faq_html="\n".join(f'<details class="faq-item"><summary>{esc(f["q"])}</summary><div class="faq-a">{esc(f["a"])}</div></details>' for f in faqs)
    # area select options
    area_opts="\n".join(f'<option value="{esc(x)}">{esc(x)}</option>' for x in locs)
    # related strip
    nb_rel="\n".join(f'<a href="/best-coding-class-in-{n["slug"]}">{esc(n["label"])}</a>' for n in d["nearby"])
    crumb_state=f'<a href="/{d["state_slug"]}">{esc(state)}</a> / ' if d.get("state_slug") else ''
    state_links=(f'<a href="/{d["state_slug"]}">All cities in {esc(state)} →</a>' if d.get("state_slug") else '')+'\n<a href="/coding-classes-in-india">All cities in India →</a>'
    wa=f"https://wa.me/919123366161?text=Hi,%20I'm%20interested%20in%20coding%20classes%20in%20{city.replace(' ','%20')}"

    ctx=dict(city=cityq, lede_locs=lede_locs, areas_val=areas_val, boards=boards_line(state),
             context_html=context_html, loc_tags=loc_tags, nearby_html=nearby_html, rails_html=rails_html,
             rev=rev, proj=proj, faq_html=faq_html, area_opts=area_opts, nb_rel=nb_rel,
             crumb_state=crumb_state, state_links=state_links, wa=wa,
             students=STUDENTS,
             enroll_tag=esc((state or "India")))
    out=TEMPLATE
    for k,v in ctx.items():
        out=out.replace("@@"+k+"@@", v)
    assert "@@" not in out, "unfilled token: "+re.findall(r'@@[a-z_]+@@',out)[0]
    return out

TEMPLATE=r'''    <main id="main">

        <section class="section hero-section">
            <div class="city-hero">
                <div class="city-hero-copy">
                    <span class="city-hero-eyebrow">Live online &middot; serving @@city@@</span>
                    <h1>Coding classes in @@city@@, <span class="ink-soft">built to actually stick.</span></h1>
                    <p class="city-lede">Real programming for kids, teens and college students in @@city@@ &mdash; @@lede_locs@@. Small live batches, a mentor who knows your child's name, and projects they can open and show you.</p>
                    <div class="city-hero-cta">
                        <a href="#book-demo" class="btn-amber">Book a free demo class</a>
                        <a href="@@wa@@" target="_blank" rel="noopener" class="btn-ghost">Ask on WhatsApp</a>
                    </div>
                    <div class="city-microtrust">
                        <span class="star">&#9733;&#9733;&#9733;&#9733;&#9733; <b>4.9/5</b></span>
                        <span><b>@@students@@</b> students across India</span>
                        <span><b>5&ndash;8</b> students per batch</span>
                        <span>First class is <b>free</b></span>
                    </div>
                </div>
                <aside class="register" aria-label="@@city@@ class register">
                    <div class="register-head"><span class="rh-title">@@city@@</span><span class="rh-tag">Enrolling</span></div>
                    <div class="register-body">
                        <div class="register-row"><span class="rk">Areas</span><span class="rv">@@areas_val@@</span></div>
                        <div class="register-row"><span class="rk">Boards</span><span class="rv">@@boards@@</span></div>
                        <div class="register-row"><span class="rk">Ages</span><span class="rv"><b>8&ndash;12</b> kids &middot; <b>13&ndash;18</b> teens &middot; college &amp; adults</span></div>
                        <div class="register-row"><span class="rk">Format</span><span class="rv">Live online &middot; 1-hour classes &middot; 5&ndash;8 per batch</span></div>
                        <div class="register-row"><span class="rk">Timing</span><span class="rv">After-school &amp; weekend slots &middot; IST</span></div>
                        <div class="register-row"><span class="rk">Proof</span><span class="rv">Recorded sessions &middot; completion certificate &middot; real projects</span></div>
                    </div>
                    <div class="register-foot"><span>live online across @@city@@</span><span class="stamp">FREE DEMO OPEN</span></div>
                </aside>
            </div>
        </section>

        <section class="section" id="areas">
            <div class="loc-head">
                <h2>Where in @@city@@ we teach</h2>
                <p>Every class is live online, so your child learns from home &mdash; no travel across the city, same small batch either way.</p>
            </div>
            <div class="loc-tags">
@@loc_tags@@
            </div>
            @@nearby_html@@
        </section>

        <div class="city-band tint">
            <section class="section">
                <div class="city-context">
                    <h2>Why @@city@@ families start here</h2>
                    @@context_html@@
                </div>
            </section>
        </div>

@@rails_html@@

        <div class="city-band tint">
            <section class="section">
                <div class="loc-head">
                    <h2>How a class actually runs</h2>
                    <p>No pre-recorded videos, no batch of forty. Here's what your child gets every week.</p>
                </div>
                <div class="method-grid">
                    <div class="method-card"><span class="mnum">Live</span><h3>A real mentor, live</h3><p>Every class is taught live by an instructor with industry experience &mdash; questions get answered the moment they come up.</p></div>
                    <div class="method-card"><span class="mnum">Small</span><h3>5&ndash;8 per batch</h3><p>Small enough that the teacher knows each child's pace, and nobody drifts to the back of the room.</p></div>
                    <div class="method-card"><span class="mnum">Build</span><h3>Project every module</h3><p>Kids don't just watch &mdash; they build games, websites and apps they can open, use and show you.</p></div>
                    <div class="method-card"><span class="mnum">Track</span><h3>Recordings &amp; reports</h3><p>Missed a class? Watch the recording. Every learner earns a completion certificate and honest progress notes.</p></div>
                </div>
            </section>
        </div>

        <section class="section" id="pricing">
            <h2 class="section-title">Simple, honest pricing</h2>
            <p class="section-subtitle">1-hour live classes, twice a week. Start with a free demo &mdash; pay only when you're sure it's right for your child.</p>
            <div class="price-grid">
                <div class="price-card">
                    <span class="pt">Group</span><div class="pv">&#8377;1,499<small> /month</small></div><p class="pn">2 live classes a week &middot; 5&ndash;8 students</p>
                    <ul><li>Live, interactive classes</li><li>Recorded session access</li><li>Doubt-clearing support</li><li>Completion certificate</li></ul>
                    <a href="#book-demo" class="btn-ghost" style="justify-content:center">Start free</a>
                </div>
                <div class="price-card feat">
                    <span class="pt">Mini Batch</span><div class="pv">&#8377;2,499<small> /month</small></div><p class="pn">2 live classes a week &middot; just 3&ndash;4 students</p>
                    <ul><li>Everything in Group</li><li>Smaller batch, more attention</li><li>Faster doubt resolution</li><li>Closer progress tracking</li></ul>
                    <a href="#book-demo" class="btn-amber" style="justify-content:center">Book a free demo</a>
                </div>
                <div class="price-card">
                    <span class="pt">Personal 1-on-1</span><div class="pv">&#8377;4,999<small> /month</small></div><p class="pn">2 private sessions a week &middot; fully bespoke</p>
                    <ul><li>Customised curriculum</li><li>Flexible scheduling</li><li>Priority support</li><li>Career guidance</li></ul>
                    <a href="#book-demo" class="btn-ghost" style="justify-content:center">Start free</a>
                </div>
            </div>
            <p class="price-note">International families pay flat USD rates &mdash; the prices above update automatically. Ask us anything on your free demo.</p>
        </section>

        <section class="section" id="projects">
            <div class="loc-head">
                <h2>What students actually build</h2>
                <p>Not screenshots of a syllabus &mdash; real, live projects from Modern Age Coders learners and labs. Click through and use them.</p>
            </div>
            <div class="proof-grid">
@@proj@@
            </div>
            <div class="track-all"><a href="/student-labs" class="btn-ghost">See more student projects →</a></div>
        </section>

        <div class="city-band tint">
            <section class="section" id="reviews">
                <h2 class="section-title">What families say</h2>
                <p class="review-note">Verified Google reviews from Modern Age Coders families across India. We don't invent testimonials &mdash; these are real people, real words.</p>
                <div class="review-grid">
@@rev@@
                </div>
            </section>
        </div>

        <section class="section try-coding-section" id="book-demo">
            <div class="demo-wrap">
                <div class="demo-copy">
                    <h2>Book a free demo class in @@city@@</h2>
                    <p>Tell us a little about your child and what they'd like to learn. We'll set up a free, no-pressure demo and help you pick the right starting point.</p>
                    <ul class="demo-points">
                        <li>A real live class &mdash; not a sales call</li>
                        <li>Meet the mentor before you decide</li>
                        <li>We reply within 24 hours (IST)</li>
                    </ul>
                    <p style="margin-top:1.4rem">Prefer to talk now? Call <a href="tel:+919123366161" style="color:var(--amber-deep);font-weight:600">9123366161</a> or <a href="@@wa@@" target="_blank" rel="noopener" style="color:var(--amber-deep);font-weight:600">WhatsApp us</a>.</p>
                </div>
                <div class="demo-form">
                    <h3>Reserve your free demo</h3>
                    <p class="df-sub">Takes under a minute.</p>
                    <form class="contact-form" id="tryCodeForm" action="#" method="POST">
                        <div class="frow"><label for="contactName">Your name *</label><input type="text" id="contactName" name="name" placeholder="Enter your full name" required aria-label="Your Name" autocomplete="name"></div>
                        <div class="frow"><label for="contactEmail">Email address *</label><input type="email" id="contactEmail" name="email" placeholder="your.email@example.com" required aria-label="Your Email" autocomplete="email"><span class="error-message" id="emailError" role="alert" style="color:var(--red);font-size:12px;display:none"></span></div>
                        <div class="frow"><label for="contactPhone">WhatsApp / phone number *</label><input type="tel" id="contactPhone" name="contact" placeholder="10-digit mobile number" required pattern="[0-9]{10}" aria-label="Contact Number" autocomplete="tel"><span class="error-message" id="phoneError" role="alert" style="color:var(--red);font-size:12px;display:none"></span></div>
                        <div class="frow"><label for="childAge">Learner's age *</label>
                            <select id="childAge" name="childAge" required aria-label="Child's Age">
                                <option value="">Select age group</option>
                                <option value="8-10">8&ndash;10 years (Kids &middot; Scratch)</option>
                                <option value="10-12">10&ndash;12 years (Kids &middot; Python intro)</option>
                                <option value="13-15">13&ndash;15 years (Teens &middot; Python/Java)</option>
                                <option value="15-18">15&ndash;18 years (Teens &middot; advanced)</option>
                                <option value="18+">18+ / college</option>
                            </select>
                        </div>
                        <div class="frow"><label for="cityArea">Your area in @@city@@</label>
                            <select id="cityArea" name="cityArea" aria-label="Area in @@city@@">
                                <option value="">Select your area (optional)</option>
@@area_opts@@
                                <option value="Other">Other area</option>
                            </select>
                        </div>
                        <div class="frow"><label for="contactMessage">What would you like to learn? *</label><textarea id="contactMessage" name="message" placeholder="e.g. Python for my 12-year-old, web development, AI, Scratch for beginners&hellip;" required rows="4" aria-label="What do you want to learn?" minlength="10" maxlength="1000"></textarea><span class="error-message" id="messageError" role="alert" style="color:var(--red);font-size:12px;display:none"></span></div>
                        <button type="submit" class="btn-amber df-submit"><span class="button-text">Book free demo class</span><span class="button-loader" style="display:none"><svg class="spinner" viewBox="0 0 50 50" style="width:22px;height:22px"><circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5" style="stroke:#fff"></circle></svg></span></button>
                    </form>
                    <div class="form-feedback" id="formFeedback" style="display:none;margin-top:16px;padding:14px;border-radius:10px;position:relative" role="status" aria-live="polite">
                        <div class="feedback-icon"></div><p class="feedback-message" style="margin:0"></p>
                        <button class="feedback-close" aria-label="Close message" style="background:none;border:none;color:inherit;font-size:20px;cursor:pointer;position:absolute;right:10px;top:8px">&times;</button>
                    </div>
                </div>
            </div>
        </section>

        <section class="section" id="faq">
            <h2 class="section-title">Coding classes in @@city@@ &mdash; FAQs</h2>
            <div class="faq-list">
@@faq_html@@
            </div>
        </section>

        <div class="city-band ink">
            <section class="section">
                <div class="city-cta">
                    <h2>Ready to start your child's coding journey in @@city@@?</h2>
                    <p>Book a free demo today. Meet the mentor, watch a real class, and decide only when you're sure it's the right fit.</p>
                    <div class="city-hero-cta" style="justify-content:center">
                        <a href="#book-demo" class="btn-amber">Book a free demo</a>
                        <a href="/courses" class="btn-ghost">Browse all courses</a>
                    </div>
                </div>
            </section>
        </div>

    </main>

    <!-- BEGIN_RELATED_PAGES -->
    <section aria-label="Related pages" class="section related-strip">
        <nav aria-label="Breadcrumb" class="rs-crumb"><a href="/">Home</a> / <a href="/coding-classes-in-india">Coding Classes in India</a> / @@crumb_state@@<strong>Best Coding Class in @@city@@</strong></nav>
        <h2>Coding &amp; maths classes near @@city@@</h2>
        <p style="color:var(--muted);font-size:.95rem;margin:0 0 1.2rem;max-width:760px">Live online classes for kids, teens and adults &mdash; Scratch, Python, web development, AI/ML and DSA in small 4&ndash;8 student batches. Explore nearby cities or book a free demo.</p>
        <div class="related-links">
@@nb_rel@@
@@state_links@@
        </div>
    </section>
    <!-- END_RELATED_PAGES -->'''

EDITORIAL_HEAD=(
'    <!-- Fonts (Fraunces/Inter/JetBrains Mono) + editorial brand. No legacy dark CSS. -->\r\n'
'    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400..700;1,9..144,400..600&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap">\r\n'
'    <link rel="stylesheet" href="/css/editorial-theme.css?v=20260626g">\r\n'
'    <link rel="stylesheet" href="/css/city-warm.css?v=20260713a">\r\n'
'    <noscript><style>.section{opacity:1 !important;transform:none !important}</style></noscript>\r\n'
# ux-enhancements.js runs initSectionReveal() -> adds .animate-in so editorial sections
# fade in on scroll. MUST be present or every section below the hero stays opacity:0.
'    <script src="/js/ux-enhancements.js" defer></script>\r\n'
'    <script src="/js/hover-prefetch.js" defer></script>\r\n'
"    <script>if('serviceWorker' in navigator){window.addEventListener('load',function(){navigator.serviceWorker.register('/sw.js').catch(function(){});});}</script>\r\n")

def transform(slug, dry=False):
    path=os.path.join(REPO,f"src/pages/best-coding-class-in-{slug}.html")
    h=open(path,encoding="utf-8",errors="replace",newline="").read()
    if 'city-warm.css' in h: return (slug,"ALREADY",{})
    stats={}
    # 1) theme-color -> amber (tolerant)
    h,stats['theme']=re.subn(r'(<meta name="theme-color" content=")#[0-9a-fA-F]{3,6}(">)', r'\g<1>#B45309\g<2>', h, count=1)
    # 2) remove "Page Specific Fixes" dark-select style block (tolerant)
    h,stats['pgfix']=re.subn(r'[ \t]*<!-- Page Specific Fixes -->\s*<style>.*?</style>\r?\n','',h,flags=re.S)
    # 3) strip legacy CSS links + phase-7 comment
    css_removed=0
    for pat in (r'[ \t]*<link rel="stylesheet" href="/css/style\.css">\r?\n',
                r'[ \t]*<link rel="stylesheet" href="/css/responsive\.css">\r?\n',
                r'[ \t]*<link rel="stylesheet" href="/css/best-coding-class\.css">\r?\n',
                r'[ \t]*<!-- Phase 7[^\n]*-->\r?\n',
                r'[ \t]*<!-- CSS Files -->\r?\n',
                r'[ \t]*<link rel="stylesheet" href="/css/pages/[a-z0-9-]+\.css\?v=[^"]*">\r?\n'):
        h,n=re.subn(pat,'',h); css_removed+=n
    stats['css_removed']=css_removed
    # 4) dedupe any existing core scripts (some pages have them, some don't), then inject the
    #    editorial stack — which re-adds exactly one copy of ux-enhancements/hover-prefetch/SW —
    #    before </head>. Guarantees every page loads the section-reveal script.
    h=re.sub(r'[ \t]*<script src="/js/ux-enhancements\.js" defer></script>\r?\n','',h)
    h=re.sub(r'[ \t]*<script src="/js/hover-prefetch\.js" defer></script>\r?\n','',h)
    h=re.sub(r"[ \t]*<script>if\('serviceWorker' in navigator\)\{[^\n]*\}</script>\r?\n",'',h)
    h=h.replace('</head>', EDITORIAL_HEAD+'</head>', 1); stats['inject']='head-end'
    # 5) remove background canvas element (tolerant)
    h,stats['canvas_el']=re.subn(r'[ \t]*<canvas id="background-canvas"[^>]*>\s*</canvas>\r?\n','',h)
    # 6) strip obsolete inline scripts (bg canvas anim / old faq accordion); protect form handler & lenis
    removed_scripts=[0]
    def strip(m):
        attrs,body=m.group(1),m.group(2)
        if 'src=' in attrs or 'type="application' in attrs: return m.group(0)
        if ('background-canvas' in body) or ('faq-question' in body) or ('faq-answer' in body):
            if ('tryCodeForm' not in body) and ('API_' not in body) and ('new Lenis' not in body):
                removed_scripts[0]+=1; return ''
        return m.group(0)
    h=re.sub(r'<script([^>]*)>(.*?)</script>\r?\n?', strip, h, flags=re.S)
    stats['scripts_removed']=removed_scripts[0]
    # 7) body class
    h,stats['body']=re.subn(r'<body class="([^"]*)">', r'<body class="editorial city-warm \1">', h, count=1)
    # 8) main region replacement
    newmain=render(slug).replace('\r\n','\n').replace('\n','\r\n').rstrip('\r\n')
    h,stats['main']=re.subn(r'<main id="main">.*?<!-- END_RELATED_PAGES -->', lambda mm: newmain, h, count=1, flags=re.S)
    problems=[]
    if stats['main']!=1: problems.append("main!=1")
    if stats['body']!=1: problems.append("body!=1")
    if 'best-coding-class.css' in h: problems.append("bcc-css-left")
    if 'background-canvas' in h: problems.append("canvas-left")
    if 'faq-question' in h: problems.append("faq-accordion-left")
    if '@@' in h: problems.append("token-left")
    if not dry and not problems:
        open(path,"w",encoding="utf-8",newline="").write(h)
    return (slug,"OK" if not problems else "PROBLEM", {"stats":stats,"problems":problems})

import glob
def all_slugs():
    return sorted(os.path.basename(p)[len("best-coding-class-in-"):-len(".html")]
                  for p in glob.glob(os.path.join(REPO,"src/pages/best-coding-class-in-*.html")))

if __name__=="__main__":
    mode=sys.argv[1] if len(sys.argv)>1 else "render"
    slugs=sys.argv[2:]
    if mode=="audit":
        targets=slugs or all_slugs()
        probs=[]; thin=[]; nostate=[]; done=[]; nofaq=[]
        for slug in targets:
            path=os.path.join(REPO,f"src/pages/best-coding-class-in-{slug}.html")
            src=open(path,encoding="utf-8",errors="replace").read()
            if 'city-warm.css' in src: done.append(slug); continue
            d=extract(slug)
            b=d["buckets"]=({k:sum(1 for c in d["cards"] if c["bucket"]==k) for k in ("kids","teens","college","maths","other")})
            s,st,info=transform(slug,dry=True)
            row=f"{slug:26} cards={len(d['cards']):2} {b} faq={len(d['faqs'])} loc={len(d['localities'])} state={d['state']}"
            if info.get("problems"): probs.append((slug,info["problems"])); row+="  !!PROBLEM "+str(info["problems"])
            if len(d["cards"])<6: thin.append(slug)
            if not d["state"]: nostate.append(slug)
            if not d["faqs"]: nofaq.append(slug)
            print(row)
        print(f"\n==== {len(targets)} pages | already-done={len(done)} | PROBLEMS={len(probs)} | thin(<6 cards)={len(thin)} | no-state={len(nostate)} | no-faq={len(nofaq)}")
        if probs: print("PROBLEM pages:", [p[0] for p in probs])
        if thin: print("THIN pages:", thin)
        if nostate: print("NO-STATE pages:", nostate)
        if nofaq: print("NO-FAQ pages:", nofaq)
        sys.exit(0)
    if mode in ("render","--render"):
        for slug in slugs:
            out=render(slug)
            open(os.path.join(os.path.dirname(os.path.abspath(__file__)),f"gen-{slug}-main.html"),"w",encoding="utf-8").write(out)
            print(f"{slug}: rendered {len(out)} chars")
    elif mode in ("apply","--apply","dry","--dry","apply-all"):
        dry = mode in ("dry","--dry")
        targets = all_slugs() if mode=="apply-all" else slugs
        okc=alreadyc=probc=0
        for slug in targets:
            s,status,info=transform(slug,dry=dry)
            if status=="OK": okc+=1
            elif status=="ALREADY": alreadyc+=1
            else: probc+=1; print(f"  {s}: PROBLEM {info.get('problems')}")
        print(f"applied OK={okc}  already-done={alreadyc}  PROBLEM={probc}  (dry={dry})")
