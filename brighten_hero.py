import os

filepath = r"c:\Users\hp\Desktop\SkyCoders\kiro24\frontend\src\pages\index.html"
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Make the kids pill (Pink) brighter and more neon
content = content.replace("rgba(244, 114, 182, 0.5)", "rgba(236, 72, 153, 0.7)") 
content = content.replace("rgba(244, 114, 182, 0.1)", "rgba(236, 72, 153, 0.15)") 
content = content.replace(
    ".pill-kids:hover { border-color: rgba(244, 114, 182, 0.5); box-shadow: 0 15px 30px rgba(0,0,0,0.3), 0 0 20px rgba(244, 114, 182, 0.2); }",
    ".pill-kids:hover { border-color: #ec4899; box-shadow: 0 15px 30px rgba(0,0,0,0.4), 0 0 30px rgba(236, 72, 153, 0.5); }"
)
content = content.replace(
    ".pill-kids:hover .pill-icon-wrapper { background: #f472b6; color: #fff; box-shadow: 0 0 15px rgba(244, 114, 182, 0.5); }",
    ".pill-kids:hover .pill-icon-wrapper { background: #db2777; color: #fff; box-shadow: 0 0 25px rgba(236, 72, 153, 0.8); transform: rotate(8deg) scale(1.15); }"
)
content = content.replace("color: #f472b6;", "color: #ec4899;")

# Teens (Blue) brighter
content = content.replace(
    ".pill-teens:hover { border-color: rgba(56, 189, 248, 0.5); box-shadow: 0 15px 30px rgba(0,0,0,0.3), 0 0 20px rgba(56, 189, 248, 0.2); }",
    ".pill-teens:hover { border-color: #0ea5e9; box-shadow: 0 15px 30px rgba(0,0,0,0.4), 0 0 30px rgba(14, 165, 233, 0.5); }"
)
content = content.replace(
    ".pill-teens:hover .pill-icon-wrapper { background: #38bdf8; color: #fff; box-shadow: 0 0 15px rgba(56, 189, 248, 0.5); }",
    ".pill-teens:hover .pill-icon-wrapper { background: #0284c7; color: #fff; box-shadow: 0 0 25px rgba(14, 165, 233, 0.8); transform: rotate(8deg) scale(1.15); }"
)
content = content.replace("rgba(56, 189, 248, 0.1)", "rgba(14, 165, 233, 0.15)")
content = content.replace("color: #38bdf8;", "color: #0ea5e9;")

# College (Purple) brighter
content = content.replace(
    ".pill-college:hover { border-color: rgba(168, 85, 247, 0.5); box-shadow: 0 15px 30px rgba(0,0,0,0.3), 0 0 20px rgba(168, 85, 247, 0.2); }",
    ".pill-college:hover { border-color: #8b5cf6; box-shadow: 0 15px 30px rgba(0,0,0,0.4), 0 0 30px rgba(139, 92, 246, 0.5); }"
)
content = content.replace("rgba(168, 85, 247, 0.1)", "rgba(139, 92, 246, 0.15)")
content = content.replace(
    ".pill-college .pill-icon-wrapper { text-shadow: 0 0 10px rgba(168, 85, 247, 0.5); }",
    ".pill-college .pill-icon-wrapper { color: #8b5cf6; text-shadow: 0 0 10px rgba(139, 92, 246, 0.6); }\n                    .pill-college:hover .pill-icon-wrapper { background: #7c3aed; color: #fff; box-shadow: 0 0 25px rgba(139, 92, 246, 0.8); transform: rotate(8deg) scale(1.15); }"
)

# Pro (Teal) brighter
content = content.replace(
    ".pill-pro:hover { border-color: rgba(78, 205, 196, 0.5); box-shadow: 0 15px 30px rgba(0,0,0,0.3), 0 0 20px rgba(78, 205, 196, 0.2); }",
    ".pill-pro:hover { border-color: #14b8a6; box-shadow: 0 15px 30px rgba(0,0,0,0.4), 0 0 30px rgba(20, 184, 166, 0.5); }"
)
content = content.replace(
    ".pill-pro:hover .pill-icon-wrapper { background: #4ecdc4; color: #fff; box-shadow: 0 0 15px rgba(78, 205, 196, 0.5); }",
    ".pill-pro:hover .pill-icon-wrapper { background: #0d9488; color: #fff; box-shadow: 0 0 25px rgba(20, 184, 166, 0.8); transform: rotate(8deg) scale(1.15); }"
)
content = content.replace("rgba(78, 205, 196, 0.1)", "rgba(20, 184, 166, 0.15)")
content = content.replace("color: #4ecdc4;", "color: #14b8a6;")

# Boost the default border of ALL pills slightly to make them pop more
content = content.replace("background: rgba(30, 41, 59, 0.4);", "background: rgba(15, 23, 42, 0.55);")
content = content.replace("border: 1px solid rgba(255, 255, 255, 0.05);", "border: 1px solid rgba(255, 255, 255, 0.12);")
content = content.replace("box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);", "box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);")

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Colors brightened")
