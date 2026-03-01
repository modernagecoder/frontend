import os

filepath = r"c:\Users\hp\Desktop\SkyCoders\kiro24\frontend\src\pages\index.html"
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

start_marker = '<div class="hero-image">'
end_marker = '</svg>\n            </div>'
start_idx = content.find(start_marker)
if start_idx != -1:
    end_idx = content.find(end_marker, start_idx)
    if end_idx != -1:
        end_idx += len(end_marker)

if start_idx != -1 and end_idx != -1:
    old_block = content[start_idx:end_idx]
    
    new_block = """<div class="hero-audience-pills">
                <style>
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
                        background: rgba(30, 41, 59, 0.4);
                        border: 1px solid rgba(255, 255, 255, 0.05);
                        border-radius: 100px;
                        text-decoration: none;
                        overflow: hidden;
                        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                        backdrop-filter: blur(12px);
                        -webkit-backdrop-filter: blur(12px);
                        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
                    }
                    
                    .audience-pill::before {
                        content: '';
                        position: absolute;
                        top: 0; left: 0; right: 0; bottom: 0;
                        background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%);
                        opacity: 0;
                        transition: opacity 0.4s ease;
                        border-radius: 100px;
                        z-index: 1;
                    }
                    
                    .audience-pill:hover {
                        transform: translateY(-4px) scale(1.02);
                        background: rgba(30, 41, 59, 0.7);
                        border-color: rgba(168, 85, 247, 0.4);
                        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3), 0 0 20px rgba(168, 85, 247, 0.2);
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
                        width: 48px;
                        height: 48px;
                        border-radius: 50%;
                        background: rgba(168, 85, 247, 0.1);
                        color: #a855f7;
                        font-size: 22px;
                        transition: all 0.4s ease;
                    }
                    
                    .audience-pill:hover .pill-icon-wrapper {
                        background: #a855f7;
                        color: #fff;
                        transform: rotate(5deg) scale(1.1);
                        box-shadow: 0 0 15px rgba(168, 85, 247, 0.5);
                    }
                    
                    .pill-text {
                        display: flex;
                        flex-direction: column;
                        text-align: left;
                    }
                    
                    .pill-title {
                        color: #f8fafc;
                        font-size: 1.1rem;
                        font-weight: 600;
                        letter-spacing: 0.3px;
                        margin-bottom: 2px;
                    }
                    
                    .pill-subtitle {
                        color: #94a3b8;
                        font-size: 0.85rem;
                        font-weight: 400;
                        transition: color 0.3s ease;
                    }
                    
                    .audience-pill:hover .pill-subtitle {
                        color: #cbd5e1;
                    }
                    
                    .pill-arrow {
                        position: relative;
                        z-index: 2;
                        color: #64748b;
                        transition: all 0.4s ease;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: 32px;
                        height: 32px;
                        border-radius: 50%;
                        background: rgba(255,255,255,0.03);
                    }
                    
                    .audience-pill:hover .pill-arrow {
                        color: #fff;
                        background: rgba(168, 85, 247, 0.2);
                        transform: translateX(5px);
                    }
                    
                    /* Individual pill color overrides */
                    .pill-kids:hover { border-color: rgba(244, 114, 182, 0.5); box-shadow: 0 15px 30px rgba(0,0,0,0.3), 0 0 20px rgba(244, 114, 182, 0.2); }
                    .pill-kids .pill-icon-wrapper { background: rgba(244, 114, 182, 0.1); color: #f472b6; text-shadow: 0 0 10px rgba(244, 114, 182, 0.5); }
                    .pill-kids:hover .pill-icon-wrapper { background: #f472b6; color: #fff; box-shadow: 0 0 15px rgba(244, 114, 182, 0.5); }
                    .pill-kids:hover .pill-arrow { background: rgba(244, 114, 182, 0.2); color: #f472b6; }
                    
                    .pill-teens:hover { border-color: rgba(56, 189, 248, 0.5); box-shadow: 0 15px 30px rgba(0,0,0,0.3), 0 0 20px rgba(56, 189, 248, 0.2); }
                    .pill-teens .pill-icon-wrapper { background: rgba(56, 189, 248, 0.1); color: #38bdf8; text-shadow: 0 0 10px rgba(56, 189, 248, 0.5); }
                    .pill-teens:hover .pill-icon-wrapper { background: #38bdf8; color: #fff; box-shadow: 0 0 15px rgba(56, 189, 248, 0.5); }
                    .pill-teens:hover .pill-arrow { background: rgba(56, 189, 248, 0.2); color: #38bdf8; }
                    
                    .pill-college:hover { border-color: rgba(168, 85, 247, 0.5); box-shadow: 0 15px 30px rgba(0,0,0,0.3), 0 0 20px rgba(168, 85, 247, 0.2); }
                    .pill-college .pill-icon-wrapper { text-shadow: 0 0 10px rgba(168, 85, 247, 0.5); }
                    .pill-college:hover .pill-arrow { color: #a855f7; }
                    
                    .pill-pro:hover { border-color: rgba(78, 205, 196, 0.5); box-shadow: 0 15px 30px rgba(0,0,0,0.3), 0 0 20px rgba(78, 205, 196, 0.2); }
                    .pill-pro .pill-icon-wrapper { background: rgba(78, 205, 196, 0.1); color: #4ecdc4; text-shadow: 0 0 10px rgba(78, 205, 196, 0.5); }
                    .pill-pro:hover .pill-icon-wrapper { background: #4ecdc4; color: #fff; box-shadow: 0 0 15px rgba(78, 205, 196, 0.5); }
                    .pill-pro:hover .pill-arrow { background: rgba(78, 205, 196, 0.2); color: #4ecdc4; }
                    
                    @media (max-width: 768px) {
                        .audience-pill { padding: 14px 18px; }
                        .pill-icon-wrapper { width: 40px; height: 40px; font-size: 18px; }
                        .pill-title { font-size: 1rem; }
                        .pill-subtitle { font-size: 0.8rem; }
                        .hero-audience-pills { margin-top: 30px; }
                    }
                </style>

                <a href="#coding-tabs" class="audience-pill pill-kids" onclick="setTimeout(()=>document.querySelector('[data-target=\\'#coding-kids\\']').click(), 100);">
                    <div class="pill-content">
                        <div class="pill-icon-wrapper">🚀</div>
                        <div class="pill-text">
                            <span class="pill-title">[ For Kids (6-12) ]</span>
                            <span class="pill-subtitle">Start the adventure</span>
                        </div>
                    </div>
                    <div class="pill-arrow">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </div>
                </a>
                
                <a href="#coding-tabs" class="audience-pill pill-teens" onclick="setTimeout(()=>document.querySelector('[data-target=\\'#coding-teens\\']').click(), 100);">
                    <div class="pill-content">
                        <div class="pill-icon-wrapper">💻</div>
                        <div class="pill-text">
                            <span class="pill-title">[ For Teens (13-18) ]</span>
                            <span class="pill-subtitle">Build real projects</span>
                        </div>
                    </div>
                    <div class="pill-arrow">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </div>
                </a>
                
                <a href="#coding-tabs" class="audience-pill pill-college" onclick="setTimeout(()=>document.querySelector('[data-target=\\'#coding-college\\']').click(), 100);">
                    <div class="pill-content">
                        <div class="pill-icon-wrapper">🎓</div>
                        <div class="pill-text">
                            <span class="pill-title">[ College Students ]</span>
                            <span class="pill-subtitle">Master algorithms</span>
                        </div>
                    </div>
                    <div class="pill-arrow">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </div>
                </a>
                
                <a href="#coding-tabs" class="audience-pill pill-pro" onclick="setTimeout(()=>document.querySelector('[data-target=\\'#coding-corporate\\']').click(), 100);">
                    <div class="pill-content">
                        <div class="pill-icon-wrapper">💼</div>
                        <div class="pill-text">
                            <span class="pill-title">[ Professionals ]</span>
                            <span class="pill-subtitle">Accelerate your career</span>
                        </div>
                    </div>
                    <div class="pill-arrow">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </div>
                </a>
            </div>"""
    
    new_content = content[:start_idx] + new_block + content[end_idx:]
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Replaced successfully")
else:
    print(f"Could not find markers. Start: {start_idx}, End: {end_idx}")
