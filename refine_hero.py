import os

filepath = r"c:\Users\hp\Desktop\SkyCoders\kiro24\frontend\src\pages\index.html"
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Kids
content = content.replace(
    '<div class="pill-icon-wrapper">🚀</div>',
    '<div class="pill-icon-wrapper"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 2 11 13"/><path d="M22 2 15 22 11 13 2 9 22 2z"/></svg></div>'
)

# Teens
content = content.replace(
    '<div class="pill-icon-wrapper">💻</div>',
    '<div class="pill-icon-wrapper"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg></div>'
)

# College
content = content.replace(
    '<div class="pill-icon-wrapper">🎓</div>',
    '<div class="pill-icon-wrapper"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="3"/><circle cx="19" cy="19" r="3"/><circle cx="5" cy="19" r="3"/><line x1="12" y1="8" x2="19" y2="16"/><line x1="12" y1="8" x2="5" y2="16"/></svg></div>'
)

# Professionals
content = content.replace(
    '<div class="pill-icon-wrapper">💼</div>',
    '<div class="pill-icon-wrapper"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg></div>'
)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Icons refined")
