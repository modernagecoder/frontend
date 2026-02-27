import os
import glob

wrong_anchor_script = """            // Handle smooth scrolling for anchor links using Lenis
            document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    const targetId = this.getAttribute('href');
                    if (targetId && targetId !== '#') {
                        const targetElement = document.querySelector(targetId);
                        if (targetElement) {
                            e.preventDefault();
                            lenis.scrollTo(targetElement);
                        }
                    }
                });
            });"""

correct_anchor_script = """
            // Handle smooth scrolling for anchor links using Lenis
            document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    const targetId = this.getAttribute('href');
                    if (targetId && targetId !== '#') {
                        const targetElement = document.querySelector(targetId);
                        if (targetElement) {
                            e.preventDefault();
                            lenis.scrollTo(targetElement);
                        }
                    }
                });
            });"""

frontend_dir = r"c:\Users\hp\Desktop\SkyCoders\kiro24\frontend"
all_html_files = glob.glob(os.path.join(frontend_dir, "**", "*.html"), recursive=True)

target_str = "            requestAnimationFrame(raf);\n        }"
target_replacement = "            requestAnimationFrame(raf);\n" + correct_anchor_script + "\n        }"


for filepath in all_html_files:
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        if wrong_anchor_script in content:
            # First remove the wrong one
            new_content = content.replace("\n" + wrong_anchor_script + "\n</script>", "\n</script>")
            new_content = new_content.replace(wrong_anchor_script + "\n</script>", "</script>")
            
            # Now insert at the correct place
            if target_str in new_content:
                new_content = new_content.replace(target_str, target_replacement)
            
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Fixed: {filepath}")
    except Exception as e:
        print(f"Error processing {filepath}: {e}")
