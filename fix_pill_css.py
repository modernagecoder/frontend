import os
import re

index_path = r"c:\Users\hp\Desktop\SkyCoders\kiro24\frontend\src\pages\index.html"
nav_path = r"c:\Users\hp\Desktop\SkyCoders\kiro24\frontend\components\nav.html"

# Read original nav CSS
with open(nav_path, 'r', encoding='utf-8') as f:
    nav_content = f.read()

nav_style_match = re.search(r'<style>[\s\S]*?</style>', nav_content)
if nav_style_match:
    nav_style = nav_style_match.group(0)
else:
    print("Could not find style in nav.html")
    exit(1)

with open(index_path, 'r', encoding='utf-8') as f:
    index_content = f.read()

# The new simple bright CSS for the pills
hero_style = """<style>
                    .hero-audience-pills {
                        display: flex;
                        flex-direction: column;
                        gap: 16px;
                        width: 100%;
                        max-width: 480px;
                        margin: 0 auto;
                        animation: floatPills 6s ease-in-out infinite;
                    }

                    @keyframes floatPills {
                        0% { transform: translateY(0px); }
                        50% { transform: translateY(-8px); }
                        100% { transform: translateY(0px); }
                    }

                    .audience-pill {
                        position: relative;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        padding: 18px 24px;
                        border-radius: 100px;
                        text-decoration: none;
                        overflow: hidden;
                        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
                        border: none;
                    }

                    .audience-pill::before {
                        content: '';
                        position: absolute;
                        top: 0; left: 0; right: 0; bottom: 0;
                        background: linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 100%);
                        opacity: 0.5;
                        transition: opacity 0.4s ease;
                        z-index: 1;
                    }

                    .audience-pill:hover {
                        transform: translateY(-6px) scale(1.03);
                    }
                    .audience-pill:hover::before {
                        opacity: 1;
                    }

                    .audience-pill .pill-content {
                        display: flex;
                        align-items: center;
                        gap: 16px;
                        position: relative;
                        z-index: 2;
                    }

                    .pill-icon-wrapper {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: 52px;
                        height: 52px;
                        border-radius: 50%;
                        font-size: 24px;
                        background: rgba(255, 255, 255, 0.25);
                        color: #ffffff;
                        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                        box-shadow: 0 4px 10px rgba(0,0,0,0.1);
                        backdrop-filter: blur(4px);
                        -webkit-backdrop-filter: blur(4px);
                    }

                    .audience-pill:hover .pill-icon-wrapper {
                        transform: rotate(10deg) scale(1.15);
                        background: #ffffff;
                    }

                    .pill-text {
                        display: flex;
                        flex-direction: column;
                        text-align: left;
                    }

                    .pill-title {
                        color: #ffffff;
                        font-size: 1.15rem;
                        font-weight: 700;
                        letter-spacing: 0.5px;
                        margin-bottom: 2px;
                        text-shadow: 0 2px 4px rgba(0,0,0,0.3);
                    }

                    .pill-subtitle {
                        color: rgba(255, 255, 255, 0.9);
                        font-size: 0.9rem;
                        font-weight: 500;
                        transition: color 0.3s ease;
                    }

                    .audience-pill:hover .pill-subtitle {
                        color: #ffffff;
                    }

                    .pill-arrow {
                        position: relative;
                        z-index: 2;
                        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: 40px;
                        height: 40px;
                        border-radius: 50%;
                        background: rgba(255, 255, 255, 0.2);
                        color: #ffffff;
                        backdrop-filter: blur(4px);
                        -webkit-backdrop-filter: blur(4px);
                    }

                    .audience-pill:hover .pill-arrow {
                        transform: translateX(5px) scale(1.1);
                        background: #ffffff;
                    }

                    /* VIBRANT BACKGROUND SOLID COLORS */

                    /* Kids - Pink/Magenta */
                    .pill-kids {
                        background: #FF2A6D;
                        box-shadow: 0 8px 25px rgba(255, 42, 109, 0.4);
                    }
                    .pill-kids:hover {
                        box-shadow: 0 12px 30px rgba(255, 42, 109, 0.6);
                    }
                    .pill-kids:hover .pill-icon-wrapper,
                    .pill-kids:hover .pill-arrow {
                        color: #FF2A6D;
                        box-shadow: 0 5px 15px rgba(255, 42, 109, 0.5);
                    }

                    /* Teens - Bright Blue */
                    .pill-teens {
                        background: #01A7C2;
                        box-shadow: 0 8px 25px rgba(1, 167, 194, 0.4);
                    }
                    .pill-teens:hover {
                        box-shadow: 0 12px 30px rgba(1, 167, 194, 0.6);
                    }
                    .pill-teens:hover .pill-icon-wrapper,
                    .pill-teens:hover .pill-arrow {
                        color: #01A7C2;
                        box-shadow: 0 5px 15px rgba(1, 167, 194, 0.5);
                    }

                    /* College - Vivid Purple */
                    .pill-college {
                        background: #8A2BE2;
                        box-shadow: 0 8px 25px rgba(138, 43, 226, 0.4);
                    }
                    .pill-college:hover {
                        box-shadow: 0 12px 30px rgba(138, 43, 226, 0.6);
                    }
                    .pill-college:hover .pill-icon-wrapper,
                    .pill-college:hover .pill-arrow {
                        color: #8A2BE2;
                        box-shadow: 0 5px 15px rgba(138, 43, 226, 0.5);
                    }

                    /* Pro - Turquoise/Mint */
                    .pill-pro {
                        background: #00E676;
                        box-shadow: 0 8px 25px rgba(0, 230, 118, 0.4);
                    }
                    .pill-pro:hover {
                        box-shadow: 0 12px 30px rgba(0, 230, 118, 0.6);
                    }
                    .pill-pro:hover .pill-icon-wrapper,
                    .pill-pro:hover .pill-arrow {
                        color: #00E676;
                        box-shadow: 0 5px 15px rgba(0, 230, 118, 0.5);
                    }

                    @media (max-width: 768px) {
                        .audience-pill {
                            padding: 14px 18px;
                        }
                        .pill-icon-wrapper {
                            width: 44px;
                            height: 44px;
                            font-size: 20px;
                        }
                        .pill-title {
                            font-size: 1.05rem;
                        }
                        .pill-subtitle {
                            font-size: 0.85rem;
                        }
                        .hero-audience-pills {
                            margin-top: 30px;
                        }
                        .pill-arrow {
                            width: 34px;
                            height: 34px;
                        }
                    }
                </style>"""

# We substitute the FIRST <style> with nav_style
# We substitute the SECOND <style> with hero_style
# Let's split by <style> and </style> and replace

parts = re.split(r'(<style>[\s\S]*?</style>)', index_content)
# parts[0]: Before first style
# parts[1]: First style
# parts[2]: Between first and second style
# parts[3]: Second style
# parts[4]: Rest of file

if len(parts) >= 5:
    parts[1] = nav_style
    parts[3] = hero_style
    new_content = ''.join(parts)
    with open(index_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Successfully restored navbar CSS and applied new hero pill CSS.")
else:
    print("Error: Could not find two distinct style tags.")

