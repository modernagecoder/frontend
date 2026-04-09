# 404 Page Not Found Report — learn.modernagecoders.com

**Date:** 2026-04-07
**Total 404 Pages Found:** 12
**Source:** Google Search Console + live HTTP status checks + codebase analysis

---

## Summary

| # | URL | Category | Impact (Impressions) | In Sitemap? |
|---|-----|----------|---------------------|-------------|
| 1 | `/student-projects` | Deleted files | In GSC data | Yes |
| 2 | `/student-projects-standalone` | Deleted files | In GSC data | Yes |
| 3 | `/student-projects-working` | Deleted files | In GSC data | Yes |
| 4 | `/blog/best-byjus-alternative` | Missing blog source data | In GSC data | Yes |
| 5 | `/blog/cbse-maths-tuition-online` | Missing blog source data | In GSC data | Yes |
| 6 | `/blog/data-science-course-india` | Missing blog source data | In GSC data | Yes |
| 7 | `/blog/stem-education-for-girls-india` | Missing blog source data | In GSC data | Yes |
| 8 | `/courses/ai-tools-mastery-complete` | Redirect ordering bug | In GSC data | Yes |
| 9 | `/courses/competitive-programming-masterclass` | Redirect ordering bug | In GSC data | Yes |
| 10 | `/blog/example-all-features` | Redirect ordering bug | In GSC data | No |
| 11 | `/dummy` | Dev/test page, no routing | 0 | No |
| 12 | `/form-example` | Dev/test page, no routing | 0 | No |

---

## Category 1: Deleted Student Project Pages (3 pages)

### Problem
The HTML files were deleted from `src/pages/` (removed in commit `bb3de34`), but the redirect rules in `_redirects` and the `sitemap.xml` entries were never cleaned up.

### Affected URLs

#### 1. `https://learn.modernagecoders.com/student-projects`
- **HTTP Status:** 404
- **Redirect Rule (line 66):** `/student-projects /src/pages/student-projects-standalone.html 200`
- **Target File:** `src/pages/student-projects-standalone.html` — **DOES NOT EXIST**
- **Sitemap:** Listed at line 1344 in `sitemap.xml`
- **Internal Links:** Referenced from `src/pages/dummy.html`, `src/pages/search.html`, `src/pages/student-labs.html`

#### 2. `https://learn.modernagecoders.com/student-projects-standalone`
- **HTTP Status:** 404
- **Redirect Rule (line 68):** `/student-projects-standalone /src/pages/student-projects-standalone.html 200`
- **Target File:** `src/pages/student-projects-standalone.html` — **DOES NOT EXIST**
- **Sitemap:** Listed at line 220 in `sitemap.xml`

#### 3. `https://learn.modernagecoders.com/student-projects-working`
- **HTTP Status:** 404
- **Redirect Rule (line 67):** `/student-projects-working /src/pages/student-projects-working.html 200`
- **Target File:** `src/pages/student-projects-working.html` — **DOES NOT EXIST**
- **Sitemap:** Listed at line 227 in `sitemap.xml`

### Root Cause
Files were deleted from the repo but three things were NOT updated:
1. `_redirects` — still has rewrite rules pointing to deleted files (lines 66-68)
2. `sitemap.xml` — still lists these URLs
3. Internal links in other pages still reference `/student-projects`

### How to Fix
1. **`_redirects`** — Remove lines 66-68 (the three student-projects rewrites). Replace with 301 redirects to `/projects` (which exists and works):
   ```
   /student-projects /projects 301!
   /student-projects-standalone /projects 301!
   /student-projects-working /projects 301!
   ```
2. **`sitemap.xml`** — Remove the three `<url>` entries for student-projects, student-projects-standalone, and student-projects-working
3. **Internal links** — Update references in `src/pages/search.html` and `src/pages/student-labs.html` to point to `/projects` instead of `/student-projects`

---

## Category 2: Blog Posts Without Source Data (4 pages)

### Problem
These blog posts exist as locally generated HTML files in `content/blog/generated/`, but they have **no source JSON data files** in `content/blog/data/`. Since `content/blog/generated/` is gitignored and regenerated during each Netlify build via `npm run generate:blogs`, these pages are never created on the deployed site.

### Affected URLs

#### 4. `https://learn.modernagecoders.com/blog/best-byjus-alternative`
- **HTTP Status:** 404
- **Local File:** `content/blog/generated/best-byjus-alternative/index.html` (exists locally, 61KB)
- **Source Data File:** **NONE** — No JSON file in `content/blog/data/` with slug `best-byjus-alternative`
- **Sitemap:** Yes — listed in `sitemap.xml`

#### 5. `https://learn.modernagecoders.com/blog/cbse-maths-tuition-online`
- **HTTP Status:** 404
- **Local File:** `content/blog/generated/cbse-maths-tuition-online/index.html` (exists locally, 65KB)
- **Source Data File:** **NONE**
- **Sitemap:** Yes

#### 6. `https://learn.modernagecoders.com/blog/data-science-course-india`
- **HTTP Status:** 404
- **Local File:** `content/blog/generated/data-science-course-india/index.html` (exists locally, 79KB)
- **Source Data File:** **NONE**
- **Sitemap:** Yes

#### 7. `https://learn.modernagecoders.com/blog/stem-education-for-girls-india`
- **HTTP Status:** 404
- **Local File:** `content/blog/generated/stem-education-for-girls-india/index.html` (exists locally, 70KB)
- **Source Data File:** **NONE**
- **Sitemap:** Yes

### Root Cause
The blog generation pipeline works as follows:
1. Source data lives in `content/blog/data/*.json` (66 JSON files)
2. `scripts/generate-blogs.js` reads each JSON, extracts the `meta.slug`, and generates HTML at `content/blog/generated/{slug}/index.html`
3. `content/blog/generated/` is in `.gitignore` — only exists locally and is rebuilt fresh on each Netlify deploy
4. These 4 blog posts were likely created manually or through a previous process that no longer exists. Their source JSON files were never created or were lost.
5. The `_redirects` catch-all rule (line 135: `/blog/* /content/blog/generated/:splat/index.html 200`) correctly routes to the generated file — but the file doesn't exist on the deployed server.

### How to Fix
**Option A (Recommended): Create missing JSON data files**
Create JSON source files in `content/blog/data/` for each of these 4 blog posts. You can extract the content from the existing local generated HTML files to rebuild the JSON.

Required file structure (see any existing JSON in `content/blog/data/` for reference):
```
content/blog/data/best-byjus-alternative.json
content/blog/data/cbse-maths-tuition-online.json
content/blog/data/data-science-course-india.json
content/blog/data/stem-education-for-girls-india.json
```

Each JSON must have at minimum:
```json
{
  "meta": {
    "slug": "best-byjus-alternative",
    "title": "...",
    "description": "...",
    "author": "...",
    "date": "..."
  },
  "content": { ... }
}
```

**Option B: Remove if no longer needed**
1. Remove the 4 entries from `sitemap.xml`
2. Add 301 redirects in `_redirects` (before the catch-all on line 135) to redirect to `/blog`:
   ```
   /blog/best-byjus-alternative /blog 301!
   /blog/cbse-maths-tuition-online /blog 301!
   /blog/data-science-course-india /blog 301!
   /blog/stem-education-for-girls-india /blog 301!
   ```

---

## Category 3: Redirect Ordering Bug in `_redirects` (3 pages)

### Problem
In Netlify's `_redirects`, rules are processed top-to-bottom and the **first matching rule wins**. The catch-all rules for courses (line 132) and blog (line 135) match BEFORE the specific redirect rules (lines 146-165, 227). The catch-all tries to serve a generated file that doesn't exist, returns 404, and the intended redirect never fires.

### `_redirects` structure causing the issue:
```
Line 132: /courses/*  /content/courses/generated/:splat/index.html  200     ← CATCH-ALL (matches first)
Line 135: /blog/*     /content/blog/generated/:splat/index.html     200     ← CATCH-ALL (matches first)
...
Line 146: /courses/ai-tools-mastery-complete  /courses/ai-tools-mastery-complete-college  301!   ← NEVER REACHED
Line 151: /courses/competitive-programming-masterclass  /courses/competitive-programming-masterclass-college  301!   ← NEVER REACHED
...
Line 227: /blog/example-all-features  /blog  301!   ← NEVER REACHED
```

### Affected URLs

#### 8. `https://learn.modernagecoders.com/courses/ai-tools-mastery-complete`
- **HTTP Status:** 404
- **Intended redirect:** → `/courses/ai-tools-mastery-complete-college` (which works, returns 200)
- **Redirect Rule Location:** `_redirects` line 146
- **Why 404:** Catch-all on line 132 matches first, looks for `content/courses/generated/ai-tools-mastery-complete/index.html` which doesn't exist on deploy (the correct slug is `ai-tools-mastery-complete-college`)
- **Source Data:** `content/courses/data/ai-tools-college.json` generates slug `ai-tools-mastery-complete-college`
- **Sitemap:** Yes — listed with the old/short slug

#### 9. `https://learn.modernagecoders.com/courses/competitive-programming-masterclass`
- **HTTP Status:** 404
- **Intended redirect:** → `/courses/competitive-programming-masterclass-college` (which works, returns 200)
- **Redirect Rule Location:** `_redirects` line 151
- **Why 404:** Same catch-all ordering issue
- **Source Data:** `content/courses/data/competitive-coding-college.json` generates slug `competitive-programming-masterclass-college`
- **Sitemap:** Yes — listed with the old/short slug

#### 10. `https://learn.modernagecoders.com/blog/example-all-features`
- **HTTP Status:** 404
- **Intended redirect:** → `/blog` (line 227)
- **Why 404:** Blog catch-all on line 135 matches first, tries to serve `content/blog/generated/example-all-features/index.html` which doesn't exist on deploy (this is a template example, source is `EXAMPLE-ALL-FEATURES.txt` not `.json`)
- **Sitemap:** No

### Root Cause
Netlify `_redirects` processes rules top-to-bottom. The catch-all wildcard rules (`/courses/*`, `/blog/*`) are placed ABOVE the specific redirect rules. The specific rules with `301!` (forced) never fire because the catch-all already matched.

### How to Fix
**Move all specific redirect rules ABOVE their respective catch-alls in `_redirects`:**

```
# ===== SPECIFIC REDIRECTS FIRST (before catch-alls) =====

# Course slug redirects
/courses/ai-tools-mastery-complete /courses/ai-tools-mastery-complete-college 301!
/courses/competitive-programming-masterclass /courses/competitive-programming-masterclass-college 301!
/courses/python-programming-masterclass-teens /courses/python-complete-masterclass-teens 301!
/courses/maths /courses/college-mathematics-complete-masterclass 301!
/courses/python-ai-automation-masterclass /courses/python-ai-automation-masterclass-college 301!
/courses/kids-coding-complete /courses/kids-coding-blocks-masterclass 301!
/courses/data-science-complete-masterclass /courses/data-science-complete-masterclass-college 301!
/courses/data-analysis-mastery-course /courses/data-analysis-mastery-course-college 301!
/courses/react-js-complete-masterclass /courses/react-js-complete-masterclass-college 301!
/courses/mysql-database-complete-masterclass /courses/mysql-database-complete-masterclass-college 301!
/courses/complete-java-programming-masterclass /courses/complete-java-programming-masterclass-college 301!
/courses/game-development-complete-masterclass /courses/game-development-complete-masterclass-college 301!
/courses/cpp-programming-complete-masterclass /courses/cpp-programming-complete-masterclass-college 301!
/courses/artificial-intelligence-complete-masterclass /courses/artificial-intelligence-complete-masterclass-college 301!
/courses/ai-ml-masterclass-complete /courses/ai-ml-masterclass-complete-college 301!
/courses/mern-stack-development-masterclass /courses/mern-stack-development-masterclass-college 301!
/courses/full-stack-web-development-masterclass /courses/full-stack-web-development-masterclass-college 301!
/courses/python-programming-masterclass-zero-to-advanced /courses/python-programming-masterclass-zero-to-advanced-college 301!
/courses/app-development /courses/complete-app-development-masterclass-college 301!
/courses/data-structures-algorithms-masterclass /courses/data-structures-algorithms-masterclass-college 301!
/courses/kids-python-programming /courses/python-ai-kids-masterclass 301!
/courses/kids-web-design /courses/kids-ai-web-development-course 301!
/courses/college /levels/coding-for-college-students 301!
/courses/teens /levels/coding-for-teens 301!
/courses/kids /levels/coding-for-kids 301!
/courses/girls-coding /levels/coding-for-kids 301!

# Blog slug redirects
/blog/example-all-features /blog 301!

# ===== CATCH-ALLS AFTER SPECIFICS =====
/courses/* /content/courses/generated/:splat/index.html 200
/blog/* /content/blog/generated/:splat/index.html 200
```

Also update `sitemap.xml`:
- Change `/courses/ai-tools-mastery-complete` → `/courses/ai-tools-mastery-complete-college`
- Change `/courses/competitive-programming-masterclass` → `/courses/competitive-programming-masterclass-college`
- Remove `/blog/example-all-features` (template page, not real content)

---

## Category 4: Dev/Test Pages Without Routing (2 pages)

### Problem
These files exist in `src/pages/` but have NO corresponding redirect rules in `_redirects`, so Netlify doesn't know how to serve them at clean URLs. They are not in the sitemap and have zero search impressions.

### Affected URLs

#### 11. `https://learn.modernagecoders.com/dummy`
- **HTTP Status:** 404
- **Local File:** `src/pages/dummy.html` (exists, 34KB, committed in `e719a69`)
- **Redirect Rule:** **NONE** — no entry in `_redirects`
- **Sitemap:** No
- **Purpose:** Appears to be a test/dev page

#### 12. `https://learn.modernagecoders.com/form-example`
- **HTTP Status:** 404
- **Local File:** `src/pages/form-example.html` (exists, 12KB, committed in `e719a69`)
- **Redirect Rule:** **NONE** — no entry in `_redirects`
- **Sitemap:** No
- **Purpose:** Form testing page

### Root Cause
On Netlify with the current setup, every page needs an explicit redirect/rewrite rule in `_redirects` to map the clean URL to the actual file path. These test pages were never added to the routing configuration.

### How to Fix
**Option A: If these pages are needed** — Add redirect rules to `_redirects`:
```
/dummy /src/pages/dummy.html 200
/form-example /src/pages/form-example.html 200
```

**Option B (Recommended): If these are just dev/test pages** — Delete them from the repo and add `noindex` if they somehow get crawled:
1. Delete `src/pages/dummy.html` and `src/pages/form-example.html`
2. Add to `_redirects`:
   ```
   /dummy / 301!
   /form-example / 301!
   ```

---

## Additional Issues (Not 404 but worth noting)

### Redirect Chains (301 → 200)
These URLs return 301 redirects. They work but create unnecessary redirect chains that waste crawl budget:

| URL | Redirects To | Status |
|-----|-------------|--------|
| `/category/teens.html` | `/levels/coding-for-teens` | 301 → 200 |
| `/category/college.html` | `/levels/coding-for-college-students` | 301 → 200 |
| `/category/kids.html` | `/levels/coding-for-kids` | 301 → 200 |
| `/category/corporate.html` | `/levels/corporate-training` | 301 → 200 |
| `/category/professionals.html` | `/levels/coding-for-professionals` | 301 → 200 |
| `/category/teens` | `/levels/coding-for-teens` | 301 → 200 |
| `/category/professionals` | `/levels/coding-for-professionals` | 301 → 200 |
| `/category/corporate` | `/levels/corporate-training` | 301 → 200 |
| `/blog/best-programming-languages-college-students-2025` | `/blog/best-programming-languages-college-students-2026` | 301 → 200 |

**Action:** These redirects work correctly. However, update internal links across the site to use the final destination URLs directly (e.g., link to `/levels/coding-for-teens` not `/category/teens.html`). Then remove the old URLs from the sitemap if present.

### Sitemap Has 277 URLs but 0 Indexed
The sitemap reports 277 submitted URLs but 0 indexed. This is likely because `indexed` count lags in the API or Google is still processing. Individual URL inspections show many pages ARE indexed.

---

## Fix Priority

| Priority | Action | Impact | Effort |
|----------|--------|--------|--------|
| **P0 - Critical** | Move course/blog redirect rules ABOVE catch-alls in `_redirects` | Fixes 3 pages + prevents future issues with all 20+ course redirects | Low — reorder lines in `_redirects` |
| **P1 - High** | Create missing blog JSON data files for 4 orphaned posts | Fixes 4 blog posts that have content but can't be deployed | Medium — extract content from local HTML into JSON |
| **P1 - High** | Fix student-projects redirects → point to `/projects` | Fixes 3 pages, cleans up stale redirects | Low — edit 3 lines in `_redirects` |
| **P2 - Medium** | Clean up `sitemap.xml` — remove all 404 URLs, fix course slugs | Better crawl efficiency, stops Google reporting errors | Low — edit `sitemap.xml` |
| **P2 - Medium** | Update internal links to student-projects → `/projects` | Prevents users hitting 404 from other pages | Low — edit 2-3 HTML files |
| **P3 - Low** | Delete or route dummy/form-example pages | Clean up dev artifacts | Low |
| **P3 - Low** | Update internal links using old category URLs | Eliminate redirect chains | Medium — find and replace across pages |

---

## Files to Modify

| File | Changes Needed |
|------|---------------|
| `_redirects` | Reorder redirect rules (move specifics before catch-alls); fix student-projects rules; optionally add dummy/form-example routes |
| `sitemap.xml` | Remove 7 URLs (3 student-projects + 4 blog posts or fix them); update 2 course slugs |
| `src/pages/search.html` | Update `/student-projects` link → `/projects` |
| `src/pages/student-labs.html` | Update `/student-projects` link → `/projects` |
| `content/blog/data/` | Create 4 new JSON files (if keeping blog posts) |
