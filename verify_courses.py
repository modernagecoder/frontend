import os
import json
import re

# Paths
base_dir = r"c:\Users\hp\Desktop\SkyCoders\kiro24\frontend"
content_dir = os.path.join(base_dir, "content", "courses", "data")
config_path = os.path.join(content_dir, "courses-config.json")
sitemap_path = os.path.join(base_dir, "sitemap.xml")

# Sets to hold slugs from different sources
slugs_from_files = set()
slugs_from_config = set()
slugs_from_sitemap = set()

# 1. Check JSON files in content/courses/data
print("--- Checking JSON files ---")
if os.path.exists(content_dir):
    for filename in os.listdir(content_dir):
        if filename.endswith(".json") and filename != "courses-config.json":
            try:
                with open(os.path.join(content_dir, filename), "r", encoding="utf-8") as f:
                    data = json.load(f)
                    if "meta" in data and "slug" in data["meta"]:
                        slugs_from_files.add(data["meta"]["slug"])
            except Exception as e:
                print(f"Error reading {filename}: {e}")

print(f"Found {len(slugs_from_files)} courses in JSON files.")

# 2. Check courses-config.json
print("\n--- Checking courses-config.json ---")
try:
    with open(config_path, "r", encoding="utf-8") as f:
        data = json.load(f)
        if "courses" in data:
            for slug in data["courses"].keys():
                slugs_from_config.add(slug)
except Exception as e:
    print(f"Error reading config: {e}")

print(f"Found {len(slugs_from_config)} courses in config.")

# 3. Check sitemap.xml
print("\n--- Checking sitemap.xml ---")
try:
    with open(sitemap_path, "r", encoding="utf-8") as f:
        content = f.read()
        urls = re.findall(r"<loc>(.*?)</loc>", content)
        for url in urls:
            if "/courses/" in url:
                # Extract slug
                slug = url.split("/courses/")[-1].strip("/")
                if slug: # Avoid empty strings if url ends in /courses/
                    slugs_from_sitemap.add(slug)
except Exception as e:
    print(f"Error reading sitemap: {e}")

print(f"Found {len(slugs_from_sitemap)} courses in sitemap.")

# 4. Comparison
all_slugs = slugs_from_files | slugs_from_config | slugs_from_sitemap
missing_in_files = all_slugs - slugs_from_files

print("\n--- Comparison Results ---")
print(f"Total unique slugs found across all sources: {len(all_slugs)}")

if missing_in_files:
    print(f"\nWARNING: {len(missing_in_files)} slugs found in sitemap/config but missing in data files:")
    for slug in missing_in_files:
        sources = []
        if slug in slugs_from_sitemap: sources.append("Sitemap")
        if slug in slugs_from_config: sources.append("Config")
        print(f" - {slug} (Found in: {', '.join(sources)})")
else:
    print("\nSUCCESS: All known courses have corresponding data files.")

# 5. Generate comprehensive list
# We'll use the existing file-based extraction for data (categories), 
# but we need to verify if we should add the missing ones under a "Misc" or "Uncategorized" section
# or if they are false positives.

# Let's inspect the missing ones (if any) to decide how to categorize them.
