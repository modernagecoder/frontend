import os
import re

files_to_fix = [
    r'c:\Users\hp\Desktop\SkyCoders\kiro24\frontend\src\pages\course.html',
    r'c:\Users\hp\Desktop\SkyCoders\kiro24\frontend\src\pages\aura.html',
    r'c:\Users\hp\Desktop\SkyCoders\kiro24\frontend\src\js\mobile-tabs-enhanced.js',
    r'c:\Users\hp\Desktop\SkyCoders\kiro24\frontend\src\js\mainbundle.js',
    r'c:\Users\hp\Desktop\SkyCoders\kiro24\frontend\src\css\coding-css-roadmap.css',
    r'c:\Users\hp\Desktop\SkyCoders\kiro24\frontend\src\css\summer-coding-camp.css',
    r'c:\Users\hp\Desktop\SkyCoders\kiro24\frontend\src\css\style.css',
    r'c:\Users\hp\Desktop\SkyCoders\kiro24\frontend\src\css\business-solutions.css',
    r'c:\Users\hp\Desktop\SkyCoders\kiro24\frontend\src\css\business-solutions-standalone.css',
    r'c:\Users\hp\Desktop\SkyCoders\kiro24\frontend\src\css\blog-styles.css',
    r'c:\Users\hp\Desktop\SkyCoders\kiro24\frontend\lovewall\index.html',
    r'c:\Users\hp\Desktop\SkyCoders\kiro24\frontend\content\blog\style.css',
    r'c:\Users\hp\Desktop\SkyCoders\kiro24\frontend\content\courses\template\course-template.css'
]

for file_path in files_to_fix:
    if not os.path.exists(file_path):
        print(f"File not found: {file_path}")
        continue
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Replace inline style in html tag for course.html
    new_content = re.sub(r'style="scroll-behavior:\s*smooth\s*!important;"', '', content)
    
    # Remove standalone css rules
    new_content = re.sub(r'^[ \t]*scroll-behavior:\s*smooth\s*(?:!important\s*)?;?\s*$\n?', '', new_content, flags=re.MULTILINE)
    
    # Replace any inline remaining
    new_content = re.sub(r'scroll-behavior:\s*smooth\s*(?:!important\s*)?;', '', new_content)

    if new_content != content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated: {file_path}")
    else:
        print(f"No changes needed: {file_path}")
