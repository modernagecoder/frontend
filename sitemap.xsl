<?xml version="1.0" encoding="UTF-8"?>
<!--
  Human-readable view for /sitemap.xml
  This stylesheet is applied by the browser only. Search engines ignore the
  xml-stylesheet instruction and read the raw <urlset> exactly as before.
-->
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
    exclude-result-prefixes="s image">

  <xsl:output method="html" encoding="UTF-8" indent="yes"/>

  <!-- ============================================================
       Mutually exclusive, fully covering groups.
       Each URL lands in exactly one group (set-difference idiom).
       ============================================================ -->
  <xsl:variable name="all" select="/s:urlset/s:url"/>

  <xsl:variable name="courses" select="$all[contains(s:loc,'/courses')]"/>
  <xsl:variable name="blog"    select="$all[contains(s:loc,'/blog')]"/>
  <xsl:variable name="city"    select="$all[contains(s:loc,'best-coding-class-in-')]"/>
  <xsl:variable name="area"    select="$all[contains(s:loc,'coding-classes-in-')]"/>
  <xsl:variable name="near"    select="$all[contains(s:loc,'coding-classes-near-')]"/>

  <xsl:variable name="used1" select="$courses | $blog | $city | $area | $near"/>

  <xsl:variable name="langAll" select="$all[contains(s:loc,'java')
                                        or contains(s:loc,'python')
                                        or contains(s:loc,'c-plus-plus')
                                        or contains(s:loc,'javascript')
                                        or contains(s:loc,'machine-learning')
                                        or contains(s:loc,'-ai-')
                                        or contains(s:loc,'ai-ml')
                                        or contains(s:loc,'artificial-intelligence')]"/>
  <xsl:variable name="lang" select="$langAll[count(. | $used1) != count($used1)]"/>
  <xsl:variable name="used2" select="$used1 | $lang"/>

  <xsl:variable name="mathAll" select="$all[contains(s:loc,'math')]"/>
  <xsl:variable name="math" select="$mathAll[count(. | $used2) != count($used2)]"/>
  <xsl:variable name="used3" select="$used2 | $math"/>

  <xsl:variable name="resAll" select="$all[contains(s:loc,'resource')]"/>
  <xsl:variable name="resources" select="$resAll[count(. | $used3) != count($used3)]"/>
  <xsl:variable name="used4" select="$used3 | $resources"/>

  <xsl:variable name="other" select="$all[count(. | $used4) != count($used4)]"/>

  <xsl:variable name="sectionCount" select="
      number(count($courses)   &gt; 0)
    + number(count($blog)      &gt; 0)
    + number(count($city)      &gt; 0)
    + number(count($area)      &gt; 0)
    + number(count($near)      &gt; 0)
    + number(count($lang)      &gt; 0)
    + number(count($math)      &gt; 0)
    + number(count($resources) &gt; 0)
    + number(count($other)     &gt; 0)"/>

  <!-- ============================================================ -->
  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="robots" content="noindex, follow"/>
        <title>Site Ledger — Modern Age Coders</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="crossorigin"/>
        <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&amp;family=Inter:wght@400;500;600&amp;family=JetBrains+Mono:wght@400;500&amp;display=swap" rel="stylesheet"/>
        <style>
          :root{
            --paper:#f7f1e4; --card:#fffdf7; --ink:#211c14; --muted:#6f6654;
            --rule:#e6dcc7; --rule-strong:#d6c6a5;
            --amber:#bd6510; --amber-bright:#e0952f; --amber-soft:#f6ead2;
            --link:#211c14; --maxw:1080px;
          }
          @media (prefers-color-scheme: dark){
            :root{
              --paper:#17140e; --card:#201b12; --ink:#ece3d0; --muted:#a89a80;
              --rule:#332b1d; --rule-strong:#4a3d28;
              --amber:#e0952f; --amber-bright:#f2b45a; --amber-soft:#28210f;
              --link:#ece3d0;
            }
          }
          *{box-sizing:border-box}
          html{-webkit-text-size-adjust:100%}
          body{margin:0;background:var(--paper);color:var(--ink);
            font-family:Inter,system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;
            font-size:15px;line-height:1.5;-webkit-font-smoothing:antialiased;}
          .wrap{max-width:var(--maxw);margin:0 auto;padding:0 24px}
          a{color:var(--link)}

          /* Masthead */
          .masthead{padding:56px 0 26px;border-bottom:2px solid var(--ink)}
          .eyebrow{font-weight:600;font-size:12px;letter-spacing:.2em;
            text-transform:uppercase;color:var(--amber)}
          .title{font-family:Fraunces,Georgia,serif;font-weight:600;
            font-size:clamp(42px,7.5vw,74px);line-height:.96;margin:.24em 0 0;
            letter-spacing:-.015em}
          .lede{margin:16px 0 0;max-width:56ch;color:var(--muted);font-size:16px}
          .ledger-meta{display:flex;flex-wrap:wrap;gap:14px 40px;margin-top:30px;
            align-items:flex-end}
          .figure{display:flex;flex-direction:column;gap:8px}
          .figure b{font-family:Fraunces,Georgia,serif;font-weight:600;font-size:36px;
            line-height:1}
          .figure b.amber{color:var(--amber)}
          .figure span{font-weight:600;font-size:11px;letter-spacing:.14em;
            text-transform:uppercase;color:var(--muted)}

          /* Contents index */
          .contents{margin:34px 0 4px;display:grid;
            grid-template-columns:repeat(auto-fill,minmax(230px,1fr));
            gap:0 32px;border-top:1px solid var(--rule)}
          .contents a{display:flex;justify-content:space-between;gap:12px;
            align-items:baseline;padding:13px 2px;border-bottom:1px solid var(--rule);
            text-decoration:none}
          .contents a:hover .nm{color:var(--amber)}
          .contents .nm{font-weight:500}
          .contents .ct{font-family:"JetBrains Mono",monospace;font-size:12px;
            color:var(--muted)}

          /* Ledger block */
          .block{margin:52px 0 0}
          .block-head{display:flex;align-items:baseline;gap:14px;flex-wrap:wrap;
            border-bottom:2px solid var(--ink);padding-bottom:10px}
          .block-head .n{font-family:"JetBrains Mono",monospace;font-size:13px;
            font-weight:500;color:var(--amber)}
          .block-head h2{font-family:Fraunces,Georgia,serif;font-weight:600;
            font-size:25px;margin:0}
          .block-note{color:var(--muted);font-size:13px;margin-left:auto}

          .tbl-wrap{overflow-x:auto}
          table.ledger{width:100%;border-collapse:collapse;margin-top:2px}
          .ledger th{font-weight:600;font-size:11px;letter-spacing:.1em;
            text-transform:uppercase;color:var(--muted);text-align:left;
            padding:13px 10px;border-bottom:1px solid var(--rule-strong);
            white-space:nowrap}
          .ledger td{padding:11px 10px;border-bottom:1px solid var(--rule);
            vertical-align:baseline}
          .ledger tr:hover td{background:var(--amber-soft)}
          .col-no{width:46px;text-align:right;font-family:"JetBrains Mono",monospace;
            font-size:12px;color:var(--muted)}
          .page a{font-family:"JetBrains Mono",ui-monospace,monospace;font-size:13px;
            text-decoration:none;overflow-wrap:anywhere;line-height:1.45}
          .page a:hover{color:var(--amber);text-decoration:underline;
            text-decoration-color:var(--amber-bright)}
          .imgchip{display:inline-block;margin-left:8px;font-weight:600;font-size:10px;
            letter-spacing:.06em;text-transform:uppercase;color:var(--amber);
            border:1px solid var(--amber);border-radius:3px;padding:1px 5px;
            vertical-align:1px}
          .col-prio{width:190px}
          .meter{display:inline-block;vertical-align:middle;width:92px;height:6px;
            background:var(--rule);border-radius:3px;overflow:hidden}
          .meter i{display:block;height:100%;
            background:linear-gradient(90deg,var(--amber),var(--amber-bright))}
          .pval{font-family:"JetBrains Mono",monospace;font-size:12px;color:var(--muted);
            margin-left:11px;vertical-align:middle}
          .upd,.freq{font-family:"JetBrains Mono",monospace;font-size:12px;
            color:var(--muted);white-space:nowrap}
          .dash{color:var(--rule-strong)}

          /* Footer */
          .foot{margin:66px 0 52px;padding-top:22px;border-top:2px solid var(--ink);
            color:var(--muted);font-size:13px;display:flex;flex-wrap:wrap;
            gap:10px 26px;justify-content:space-between;align-items:baseline}
          .foot code{font-family:"JetBrains Mono",monospace;color:var(--ink)}
          .foot a{color:var(--amber);text-decoration:none}
          .foot a:hover{text-decoration:underline}

          @media (max-width:640px){
            .masthead{padding-top:40px}
            .contents{grid-template-columns:1fr}
            .col-freq,.freq,.col-prio,.block-note{display:none}
            .ledger th,.ledger td{padding:11px 8px}
          }
          @media (prefers-reduced-motion:no-preference){
            .ledger tr td{transition:background .12s ease}
          }
        </style>
      </head>
      <body>
        <div class="wrap">

          <header class="masthead">
            <div class="eyebrow">Modern Age Coders</div>
            <h1 class="title">Site Ledger</h1>
            <p class="lede">Every page we publish, in one register. This is the
              human-readable view of our XML sitemap — search engines read the same
              list as plain data.</p>
            <div class="ledger-meta">
              <div class="figure">
                <b class="amber"><xsl:value-of select="count($all)"/></b>
                <span>Pages listed</span>
              </div>
              <div class="figure">
                <b><xsl:value-of select="$sectionCount"/></b>
                <span>Sections</span>
              </div>
              <div class="figure">
                <b><xsl:value-of select="count($all/image:image)"/></b>
                <span>With preview images</span>
              </div>
            </div>
          </header>

          <!-- Contents index -->
          <nav class="contents">
            <xsl:call-template name="toc-item">
              <xsl:with-param name="id" select="'courses'"/>
              <xsl:with-param name="label" select="'Course pages'"/>
              <xsl:with-param name="nodes" select="$courses"/>
            </xsl:call-template>
            <xsl:call-template name="toc-item">
              <xsl:with-param name="id" select="'blog'"/>
              <xsl:with-param name="label" select="'Blog &amp; articles'"/>
              <xsl:with-param name="nodes" select="$blog"/>
            </xsl:call-template>
            <xsl:call-template name="toc-item">
              <xsl:with-param name="id" select="'city'"/>
              <xsl:with-param name="label" select="'Coding classes by city'"/>
              <xsl:with-param name="nodes" select="$city"/>
            </xsl:call-template>
            <xsl:call-template name="toc-item">
              <xsl:with-param name="id" select="'area'"/>
              <xsl:with-param name="label" select="'Area, state &amp; country'"/>
              <xsl:with-param name="nodes" select="$area"/>
            </xsl:call-template>
            <xsl:call-template name="toc-item">
              <xsl:with-param name="id" select="'near'"/>
              <xsl:with-param name="label" select="'Near a locality'"/>
              <xsl:with-param name="nodes" select="$near"/>
            </xsl:call-template>
            <xsl:call-template name="toc-item">
              <xsl:with-param name="id" select="'lang'"/>
              <xsl:with-param name="label" select="'Language &amp; AI / ML tracks'"/>
              <xsl:with-param name="nodes" select="$lang"/>
            </xsl:call-template>
            <xsl:call-template name="toc-item">
              <xsl:with-param name="id" select="'math'"/>
              <xsl:with-param name="label" select="'Maths tutoring'"/>
              <xsl:with-param name="nodes" select="$math"/>
            </xsl:call-template>
            <xsl:call-template name="toc-item">
              <xsl:with-param name="id" select="'resources'"/>
              <xsl:with-param name="label" select="'Resources &amp; guides'"/>
              <xsl:with-param name="nodes" select="$resources"/>
            </xsl:call-template>
            <xsl:call-template name="toc-item">
              <xsl:with-param name="id" select="'other'"/>
              <xsl:with-param name="label" select="'Other pages'"/>
              <xsl:with-param name="nodes" select="$other"/>
            </xsl:call-template>
          </nav>

          <!-- Ledger blocks -->
          <xsl:call-template name="block">
            <xsl:with-param name="id" select="'courses'"/>
            <xsl:with-param name="title" select="'Course pages'"/>
            <xsl:with-param name="note" select="'Course catalogue and individual course pages'"/>
            <xsl:with-param name="nodes" select="$courses"/>
          </xsl:call-template>
          <xsl:call-template name="block">
            <xsl:with-param name="id" select="'blog'"/>
            <xsl:with-param name="title" select="'Blog &amp; articles'"/>
            <xsl:with-param name="note" select="'Tutorials, guides and articles'"/>
            <xsl:with-param name="nodes" select="$blog"/>
          </xsl:call-template>
          <xsl:call-template name="block">
            <xsl:with-param name="id" select="'city'"/>
            <xsl:with-param name="title" select="'Coding classes by city'"/>
            <xsl:with-param name="note" select="'City-level landing pages'"/>
            <xsl:with-param name="nodes" select="$city"/>
          </xsl:call-template>
          <xsl:call-template name="block">
            <xsl:with-param name="id" select="'area'"/>
            <xsl:with-param name="title" select="'Area, state &amp; country'"/>
            <xsl:with-param name="note" select="'Regional, state and country hubs'"/>
            <xsl:with-param name="nodes" select="$area"/>
          </xsl:call-template>
          <xsl:call-template name="block">
            <xsl:with-param name="id" select="'near'"/>
            <xsl:with-param name="title" select="'Near a locality'"/>
            <xsl:with-param name="note" select="'Neighbourhood and locality pages'"/>
            <xsl:with-param name="nodes" select="$near"/>
          </xsl:call-template>
          <xsl:call-template name="block">
            <xsl:with-param name="id" select="'lang'"/>
            <xsl:with-param name="title" select="'Language &amp; AI / ML tracks'"/>
            <xsl:with-param name="note" select="'Java, Python, C++, JavaScript and AI/ML pages'"/>
            <xsl:with-param name="nodes" select="$lang"/>
          </xsl:call-template>
          <xsl:call-template name="block">
            <xsl:with-param name="id" select="'math'"/>
            <xsl:with-param name="title" select="'Maths tutoring'"/>
            <xsl:with-param name="note" select="'Maths tutoring and exam-prep pages'"/>
            <xsl:with-param name="nodes" select="$math"/>
          </xsl:call-template>
          <xsl:call-template name="block">
            <xsl:with-param name="id" select="'resources'"/>
            <xsl:with-param name="title" select="'Resources &amp; guides'"/>
            <xsl:with-param name="note" select="'Free resources, tools and guides'"/>
            <xsl:with-param name="nodes" select="$resources"/>
          </xsl:call-template>
          <xsl:call-template name="block">
            <xsl:with-param name="id" select="'other'"/>
            <xsl:with-param name="title" select="'Other pages'"/>
            <xsl:with-param name="note" select="'Home, info and everything else'"/>
            <xsl:with-param name="nodes" select="$other"/>
          </xsl:call-template>

          <footer class="foot">
            <span>Auto-generated from <code>/sitemap.xml</code>. Search engines read the raw XML.</span>
            <span><a href="/">learn.modernagecoders.com</a></span>
          </footer>

        </div>
      </body>
    </html>
  </xsl:template>

  <!-- Contents item (skips empty groups) -->
  <xsl:template name="toc-item">
    <xsl:param name="id"/>
    <xsl:param name="label"/>
    <xsl:param name="nodes"/>
    <xsl:if test="count($nodes) &gt; 0">
      <a href="#{$id}">
        <span class="nm"><xsl:value-of select="$label"/></span>
        <span class="ct"><xsl:value-of select="count($nodes)"/></span>
      </a>
    </xsl:if>
  </xsl:template>

  <!-- One ledger block (skips empty groups) -->
  <xsl:template name="block">
    <xsl:param name="id"/>
    <xsl:param name="title"/>
    <xsl:param name="note"/>
    <xsl:param name="nodes"/>
    <xsl:if test="count($nodes) &gt; 0">
      <section class="block" id="{$id}">
        <div class="block-head">
          <span class="n"><xsl:value-of select="count($nodes)"/></span>
          <h2><xsl:value-of select="$title"/></h2>
          <span class="block-note"><xsl:value-of select="$note"/></span>
        </div>
        <div class="tbl-wrap">
          <table class="ledger">
            <thead>
              <tr>
                <th class="col-no">#</th>
                <th>Page</th>
                <th class="col-prio">Priority</th>
                <th>Updated</th>
                <th class="col-freq">Frequency</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="$nodes">
                <xsl:sort select="s:priority" data-type="number" order="descending"/>
                <xsl:sort select="s:loc"/>
                <xsl:variable name="p">
                  <xsl:choose>
                    <xsl:when test="s:priority"><xsl:value-of select="s:priority"/></xsl:when>
                    <xsl:otherwise>0.5</xsl:otherwise>
                  </xsl:choose>
                </xsl:variable>
                <xsl:variable name="path" select="substring-after(s:loc,'modernagecoders.com')"/>
                <tr>
                  <td class="col-no"><xsl:value-of select="position()"/></td>
                  <td class="page">
                    <a href="{s:loc}">
                      <xsl:choose>
                        <xsl:when test="string-length($path) &gt; 0"><xsl:value-of select="$path"/></xsl:when>
                        <xsl:otherwise><xsl:value-of select="s:loc"/></xsl:otherwise>
                      </xsl:choose>
                    </a>
                    <xsl:if test="image:image">
                      <span class="imgchip">img<xsl:if test="count(image:image) &gt; 1"><xsl:text> </xsl:text><xsl:value-of select="count(image:image)"/></xsl:if></span>
                    </xsl:if>
                  </td>
                  <td class="col-prio">
                    <span class="meter"><i style="width:{round($p * 100)}%"></i></span>
                    <span class="pval"><xsl:value-of select="$p"/></span>
                  </td>
                  <td>
                    <xsl:choose>
                      <xsl:when test="s:lastmod"><span class="upd"><xsl:value-of select="s:lastmod"/></span></xsl:when>
                      <xsl:otherwise><span class="dash">—</span></xsl:otherwise>
                    </xsl:choose>
                  </td>
                  <td class="col-freq">
                    <xsl:choose>
                      <xsl:when test="s:changefreq"><span class="freq"><xsl:value-of select="s:changefreq"/></span></xsl:when>
                      <xsl:otherwise><span class="dash">—</span></xsl:otherwise>
                    </xsl:choose>
                  </td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
        </div>
      </section>
    </xsl:if>
  </xsl:template>

</xsl:stylesheet>
