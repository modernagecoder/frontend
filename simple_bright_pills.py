import os

filepath = r"c:\Users\hp\Desktop\SkyCoders\kiro24\frontend\src\pages\index.html"
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update the text to remove brackets and be clear
content = content.replace("<span class=\"pill-title\">[ For Kids (6-12) ]</span>", "<span class=\"pill-title\">Kids (Ages 6-12)</span>")
content = content.replace("<span class=\"pill-title\">[ For Teens (13-18) ]</span>", "<span class=\"pill-title\">Teens (Ages 13-18)</span>")
content = content.replace("<span class=\"pill-title\">[ College Students ]</span>", "<span class=\"pill-title\">College Students</span>")
content = content.replace("<span class=\"pill-title\">[ Professionals ]</span>", "<span class=\"pill-title\">Working Professionals</span>")

# 2. Update the CSS to simpler, brighter, solid background colors without inner borders/gradients
content = content.replace("border: 2px solid rgba(255, 255, 255, 0.2);", "border: none;")

# Kids
content = content.replace("background: linear-gradient(135deg, #ff4785, #ff7b9a);", "background: #FF2A6D;")
content = content.replace("box-shadow: 0 10px 25px rgba(255, 71, 133, 0.4);", "box-shadow: 0 8px 25px rgba(255, 42, 109, 0.4);")
content = content.replace("box-shadow: 0 15px 35px rgba(255, 71, 133, 0.6);", "box-shadow: 0 12px 30px rgba(255, 42, 109, 0.6);")
content = content.replace("color: #ff4785;", "color: #FF2A6D;")
content = content.replace("box-shadow: 0 5px 15px rgba(255, 71, 133, 0.4);", "box-shadow: 0 5px 15px rgba(255, 42, 109, 0.5);")

# Teens
content = content.replace("background: linear-gradient(135deg, #0284c7, #38bdf8);", "background: #01A7C2;")
content = content.replace("box-shadow: 0 10px 25px rgba(14, 165, 233, 0.4);", "box-shadow: 0 8px 25px rgba(1, 167, 194, 0.4);")
content = content.replace("box-shadow: 0 15px 35px rgba(14, 165, 233, 0.6);", "box-shadow: 0 12px 30px rgba(1, 167, 194, 0.6);")
content = content.replace("color: #0284c7;", "color: #01A7C2;")
content = content.replace("box-shadow: 0 5px 15px rgba(14, 165, 233, 0.4);", "box-shadow: 0 5px 15px rgba(1, 167, 194, 0.5);")

# College
content = content.replace("background: linear-gradient(135deg, #7c3aed, #a855f7);", "background: #8A2BE2;")
content = content.replace("box-shadow: 0 10px 25px rgba(139, 92, 246, 0.4);", "box-shadow: 0 8px 25px rgba(138, 43, 226, 0.4);")
content = content.replace("box-shadow: 0 15px 35px rgba(139, 92, 246, 0.6);", "box-shadow: 0 12px 30px rgba(138, 43, 226, 0.6);")
content = content.replace("color: #7c3aed;", "color: #8A2BE2;")
content = content.replace("box-shadow: 0 5px 15px rgba(139, 92, 246, 0.4);", "box-shadow: 0 5px 15px rgba(138, 43, 226, 0.5);")

# Pro
content = content.replace("background: linear-gradient(135deg, #0d9488, #2dd4bf);", "background: #00E676;")
content = content.replace("box-shadow: 0 10px 25px rgba(20, 184, 166, 0.4);", "box-shadow: 0 8px 25px rgba(0, 230, 118, 0.4);")
content = content.replace("box-shadow: 0 15px 35px rgba(20, 184, 166, 0.6);", "box-shadow: 0 12px 30px rgba(0, 230, 118, 0.6);")
content = content.replace("color: #0d9488;", "color: #00E676;")
content = content.replace("box-shadow: 0 5px 15px rgba(20, 184, 166, 0.4);", "box-shadow: 0 5px 15px rgba(0, 230, 118, 0.5);")

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Text updated and colors simplified.")
