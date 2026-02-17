import os
import json
import re

# Paths
base_dir = r"c:\Users\hp\Desktop\SkyCoders\kiro24\frontend"
content_dir = os.path.join(base_dir, "content", "courses", "data")
config_path = os.path.join(content_dir, "courses-config.json")
sitemap_path = os.path.join(base_dir, "sitemap.xml")
output_file = os.path.join(base_dir, "totalcourses.md")

courses_by_category = {}
# Track which slugs we've already processed to avoid duplicates
processed_slugs = set()

# Helper to add course
def add_course(slug, category="Uncategorized"):
    if slug in processed_slugs:
        return
    
    url = f"https://learn.modernagecoders.com/courses/{slug}"
    
    if category not in courses_by_category:
        courses_by_category[category] = []
    
    courses_by_category[category].append(url)
    processed_slugs.add(slug)

# 1. Extract from content/courses/data/*.json (Primary Source - High Confidence Category)
print(f"Reading content from: {content_dir}")
if os.path.exists(content_dir):
    for filename in os.listdir(content_dir):
        if filename.endswith(".json") and filename != "courses-config.json":
            file_path = os.path.join(content_dir, filename)
            try:
                with open(file_path, "r", encoding="utf-8") as f:
                    data = json.load(f)
                    if "meta" in data and "slug" in data["meta"]:
                        slug = data["meta"]["slug"]
                        # Prioritize category from file
                        category = data["meta"].get("category", "Uncategorized")
                        add_course(slug, category)
            except Exception as e:
                print(f"Error processing {filename}: {e}")

# 2. Extract from courses-config.json (Secondary Source - Likely missing files)
print(f"Reading config from: {config_path}")
try:
    with open(config_path, "r", encoding="utf-8") as f:
        data = json.load(f)
        if "courses" in data:
            for slug, info in data["courses"].items():
                if slug not in processed_slugs:
                    # Config doesn't usually have category, so we might need a generic one
                    # Or try to infer? For now, "Additional Courses from Config"
                    add_course(slug, "Additional Courses (From Config)")
except Exception as e:
    print(f"Error reading config: {e}")

# 3. Extract from sitemap.xml (Tertiary Source - URLs only)
print(f"Reading sitemap from: {sitemap_path}")
try:
    with open(sitemap_path, "r", encoding="utf-8") as f:
        content = f.read()
        urls = re.findall(r"<loc>(.*?)</loc>", content)
        for url in urls:
            if "/courses/" in url:
                slug = url.split("/courses/")[-1].strip("/")
                if slug and slug not in processed_slugs:
                     add_course(slug, "Additional Courses (From Sitemap)")
except Exception as e:
    print(f"Error reading sitemap: {e}")

# Write to totalcourses.md
print(f"Writing {len(processed_slugs)} courses to {output_file}")
with open(output_file, "w", encoding="utf-8") as f:
    f.write("# Total Course Links by Category\n\n")
    
    # Sort categories
    sorted_categories = sorted(courses_by_category.keys())
    
    # Move "Additional Courses" to the bottom if they exist
    special_cats = ["Additional Courses (From Config)", "Additional Courses (From Sitemap)", "Uncategorized"]
    regular_cats = [c for c in sorted_categories if c not in special_cats]
    
    for category in regular_cats:
        f.write(f"## {category}\n")
        sorted_urls = sorted(courses_by_category[category])
        for url in sorted_urls:
            f.write(f"- {url}\n")
        f.write("\n")
        
    for category in special_cats:
        if category in courses_by_category:
             f.write(f"## {category}\n")
             sorted_urls = sorted(courses_by_category[category])
             for url in sorted_urls:
                 f.write(f"- {url}\n")
             f.write("\n")

print(f"Successfully wrote to {output_file}")
