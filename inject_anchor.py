import os
import glob

anchor_script = """
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
            });
"""

frontend_dir = r"c:\Users\hp\Desktop\SkyCoders\kiro24\frontend"
all_html_files = glob.glob(os.path.join(frontend_dir, "**", "*.html"), recursive=True)

target_str = """            requestAnimationFrame(raf);
        }
    });
</script>"""

target_str2 = """            requestAnimationFrame(raf);
        }
    });"""

for filepath in all_html_files:
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        if "lenis = new Lenis" in content and "// Handle smooth scrolling for anchor links using Lenis" not in content:
            if target_str in content:
                replacement = target_str.replace("</script>", anchor_script + "</script>")
                content = content.replace(target_str, replacement)
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f"Injected anchor handler: {filepath}")
            elif target_str2 in content:
                # sometimes script tag is further down
                # instead we'll just insert before the last `</script>` after target_str2
                parts = content.split(target_str2)
                if len(parts) == 2:
                    new_content = parts[0] + target_str2 + anchor_script + parts[1]
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    print(f"Injected anchor handler (fallback): {filepath}")
            else:
                print(f"Target string not found, skipping: {filepath}")
    except Exception as e:
        print(f"Error processing {filepath}: {e}")
