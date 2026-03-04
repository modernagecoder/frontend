const fs = require('fs');

let html = fs.readFileSync('c:/Users/hp/Desktop/SkyCoders/kiro24/frontend/src/pages/index.html', 'utf8');

const stageIndex = html.indexOf('stage.');
const paragraphEndIndex = html.indexOf('</p>', stageIndex);

if (paragraphEndIndex !== -1) {
    const startOfSymbols = html.indexOf('<div class="hero-symbol-wrapper">');
    const endOfSymbols = html.indexOf('</section>', startOfSymbols);

    // We will replace the <div class="hero-symbol-wrapper"> ... </div> with a responsive dynamic one + our Javascript
    const newToggleAndSymbols = `
                <style>
                    /* ====== HERO SEGMENTED CONTROL TOGGLE ====== */
                    .hero-toggle-container {
                        display: flex;
                        justify-content: center;
                        margin: 2rem auto;
                        padding: 0 1rem;
                        position: relative;
                        z-index: 10;
                    }

                    .hero-toggle-track {
                        position: relative;
                        display: flex;
                        align-items: center;
                        background: rgba(15, 23, 42, 0.6);
                        border: 1px solid rgba(255, 255, 255, 0.1);
                        border-radius: 60px;
                        padding: 8px;
                        width: 100%;
                        max-width: 450px;
                        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4), inset 0 2px 10px rgba(0, 0, 0, 0.3);
                        backdrop-filter: blur(10px);
                        -webkit-backdrop-filter: blur(10px);
                        animation: heroTogglePulseCoding 3s infinite;
                        transition: animation 0.5s ease;
                    }

                    .hero-toggle-input {
                        display: none;
                    }

                    .hero-toggle-slider {
                        position: absolute;
                        top: 8px;
                        left: 8px;
                        width: calc(50% - 8px);
                        height: calc(100% - 16px);
                        background: linear-gradient(135deg, #a855f7 0%, #3b82f6 100%);
                        border-radius: 50px;
                        z-index: 1;
                        transition: transform 0.5s cubic-bezier(0.86, 0, 0.07, 1), background 0.5s ease, box-shadow 0.5s ease;
                        box-shadow: 0 4px 15px rgba(168, 85, 247, 0.5);
                    }

                    .hero-toggle-slider::after {
                        content: '';
                        position: absolute;
                        inset: 0;
                        border-radius: 50px;
                        box-shadow: inset 0 2px 4px rgba(255, 255, 255, 0.4), inset 0 -2px 4px rgba(0, 0, 0, 0.2);
                    }

                    .hero-toggle-label {
                        flex: 1;
                        text-align: center;
                        font-size: 1.35rem;
                        font-weight: 800;
                        color: #94a3b8;
                        padding: 1.2rem 0;
                        cursor: pointer;
                        z-index: 2;
                        transition: color 0.3s ease;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        gap: 0.75rem;
                        user-select: none;
                    }

                    .hero-toggle-icon {
                        font-size: 1.6rem;
                        transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                        filter: grayscale(100%) opacity(0.5);
                    }

                    /* Coding Active State */
                    .hero-toggle-input[value="coding"]:checked ~ .hero-toggle-track .hero-toggle-slider {
                        transform: translateX(0);
                        background: linear-gradient(135deg, #a855f7 0%, #3b82f6 100%);
                        box-shadow: 0 4px 15px rgba(168, 85, 247, 0.5);
                    }
                    
                    .hero-toggle-input[value="coding"]:checked ~ .hero-toggle-track {
                        animation: heroTogglePulseCoding 3s infinite;
                    }

                    @keyframes heroTogglePulseCoding {
                        0% { box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4), 0 0 0 0 rgba(168, 85, 247, 0.2); }
                        70% { box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4), 0 0 0 15px rgba(168, 85, 247, 0); }
                        100% { box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4), 0 0 0 0 rgba(168, 85, 247, 0); }
                    }

                    .hero-toggle-input[value="coding"]:checked ~ .hero-toggle-track .coding-label {
                        color: #ffffff;
                        text-shadow: 0 2px 10px rgba(0,0,0,0.3);
                    }

                    .hero-toggle-input[value="coding"]:checked ~ .hero-toggle-track .coding-label .hero-toggle-icon {
                        transform: scale(1.2) translateY(-2px);
                        filter: none;
                    }

                    /* Maths Active State */
                    .hero-toggle-input[value="maths"]:checked ~ .hero-toggle-track .hero-toggle-slider {
                        transform: translateX(100%);
                        background: linear-gradient(135deg, #f59e0b 0%, #db2777 100%);
                        box-shadow: 0 4px 15px rgba(245, 158, 11, 0.5);
                    }
                    
                    .hero-toggle-input[value="maths"]:checked ~ .hero-toggle-track {
                        animation: heroTogglePulseMaths 3s infinite;
                    }

                    @keyframes heroTogglePulseMaths {
                        0% { box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4), 0 0 0 0 rgba(245, 158, 11, 0.2); }
                        70% { box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4), 0 0 0 15px rgba(245, 158, 11, 0); }
                        100% { box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4), 0 0 0 0 rgba(245, 158, 11, 0); }
                    }

                    .hero-toggle-input[value="maths"]:checked ~ .hero-toggle-track .maths-label {
                        color: #ffffff;
                        text-shadow: 0 2px 10px rgba(0,0,0,0.3);
                    }

                    .hero-toggle-input[value="maths"]:checked ~ .hero-toggle-track .maths-label .hero-toggle-icon {
                        transform: scale(1.2) translateY(-2px);
                        filter: none;
                    }

                    @media (max-width: 640px) {
                        .hero-toggle-track {
                            max-width: 100%;
                            padding: 6px;
                            border-radius: 40px;
                        }
                        .hero-toggle-label {
                            font-size: 1.15rem;
                            padding: 0.8rem 0;
                        }
                        .hero-toggle-icon {
                            font-size: 1.3rem;
                        }
                        .hero-toggle-slider {
                            top: 6px;
                            left: 6px;
                            width: calc(50% - 6px);
                            height: calc(100% - 12px);
                        }
                    }

                    /* Interactive Symbol Glow Transitions */
                    .ambient-glow {
                        transition: background 0.8s ease;
                    }
                    
                    /* Coding vs Maths Symbol Changes */
                    .sym-char, .sym-math-group {
                        transition: all 0.5s ease;
                    }

                    /* Add transition to specific classes used dynamically */
                    .glow-color-maths-brace {
                        background-image: linear-gradient(90deg, #f59e0b, #db2777) !important;
                        filter: drop-shadow(0 0 20px rgba(245, 158, 11, 0.5)) !important;
                    }
                    
                    .glow-color-maths-semi {
                        background-image: linear-gradient(90deg, #db2777, #f59e0b) !important;
                        filter: drop-shadow(0 0 16px rgba(219, 39, 119, 0.5)) !important;
                    }
                    
                    .glow-color-maths-inner {
                        background-image: linear-gradient(90deg, #0ea5e9, #2dd4bf) !important;
                        filter: drop-shadow(0 0 16px rgba(14, 165, 233, 0.5)) !important;
                    }
                </style>

                <div class="hero-toggle-container">
                    <input type="radio" id="hero-coding-toggle" name="hero-category" class="hero-toggle-input" value="coding" checked>
                    <input type="radio" id="hero-maths-toggle" name="hero-category" class="hero-toggle-input" value="maths">

                    <div class="hero-toggle-track">
                        <div class="hero-toggle-slider"></div>
                        
                        <label for="hero-coding-toggle" class="hero-toggle-label coding-label">
                            <span class="hero-toggle-icon">👨‍💻</span>
                            <span class="hero-text-label">Coding</span>
                        </label>
                        
                        <label for="hero-maths-toggle" class="hero-toggle-label maths-label">
                            <span class="hero-toggle-icon">🧮</span>
                            <span class="hero-text-label">Maths</span>
                        </label>
                    </div>
                </div>

            <div class="hero-symbol-wrapper">
                <style>
                    .hero-symbol-wrapper {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        margin: 1rem auto 1.5rem;
                        width: 100%;
                    }

                    .glow-symbol-container {
                        position: relative;
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        gap: 0;
                        animation: floatSymbol 8s ease-in-out infinite;
                        user-select: none;
                    }

                    @keyframes floatSymbol {
                        0%, 100% { transform: translateY(0px); }
                        50% { transform: translateY(-8px); }
                    }

                    .sym-char {
                        font-family: 'Fira Code', 'Consolas', monospace;
                        font-weight: 900;
                        line-height: 1;
                        display: inline-block;
                        color: transparent;
                        -webkit-background-clip: text;
                        background-clip: text;
                        position: relative;
                    }

                    .sym-brace {
                        font-size: 160px;
                        background-image: linear-gradient(90deg, #a855f7, #ec4899);
                        filter: drop-shadow(0 0 20px rgba(168, 85, 247, 0.5));
                    }

                    .sym-math-group {
                        display: inline-flex;
                        align-items: flex-start;
                        margin: 0 4px;
                        position: relative;
                        top: 6px;
                    }

                    .sym-math-e {
                        font-family: 'Georgia', 'Times New Roman', serif;
                        font-size: 100px;
                        font-style: italic;
                        font-weight: 700;
                        background-image: linear-gradient(90deg, #f59e0b, #fb923c);
                        filter: drop-shadow(0 0 16px rgba(245, 158, 11, 0.5));
                    }

                    .sym-math-x {
                        font-family: 'Georgia', 'Times New Roman', serif;
                        font-size: 56px;
                        font-style: italic;
                        font-weight: 700;
                        background-image: linear-gradient(90deg, #fb923c, #f59e0b);
                        filter: drop-shadow(0 0 16px rgba(245, 158, 11, 0.5));
                        margin-top: -2px;
                    }

                    .sym-semi {
                        font-size: 130px;
                        background-image: linear-gradient(90deg, #0ea5e9, #2dd4bf);
                        filter: drop-shadow(0 0 16px rgba(14, 165, 233, 0.5));
                        margin: 0 -8px;
                    }

                    .ambient-glow {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        width: 140%;
                        height: 140%;
                        background: radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.15) 0%, rgba(14, 165, 233, 0.1) 30%, transparent 60%);
                        filter: blur(50px);
                        z-index: -1;
                        animation: pulseAmbient 6s ease-in-out infinite alternate;
                        pointer-events: none;
                    }

                    @keyframes pulseAmbient {
                        0% { opacity: 0.4; transform: translate(-50%, -50%) scale(0.95); }
                        100% { opacity: 0.8; transform: translate(-50%, -50%) scale(1.05); }
                    }

                    @media (max-width: 768px) {
                        .sym-brace { font-size: 100px; }
                        .sym-math-group { top: 2px; }
                        .sym-math-e { font-size: 60px; }
                        .sym-math-x { font-size: 36px; }
                        .sym-semi { font-size: 80px; margin: 0 -6px; }
                        .hero-symbol-wrapper { margin: 1rem auto 1rem; }
                        .hero-section { padding-top: 3rem !important; padding-bottom: 2rem !important; }
                        .hero-toggle-container { margin: 1.5rem auto; }
                    }
                </style>

                <div class="glow-symbol-container" id="dynamic-hero-symbol" title="Maths & Code = Magic">
                    <div class="ambient-glow" id="hero-ambient-glow"></div>
                    <span class="sym-char sym-brace" id="sym-brace-left">{</span>
                    <span class="sym-char sym-semi"  id="sym-semi-left">;</span>
                    <span class="sym-math-group" id="sym-center-group">
                        <span class="sym-char sym-math-e" style="font-style: normal; font-family: 'Fira Code', 'Consolas', monospace; font-weight: 900; background-image: linear-gradient(90deg, #f59e0b, #fb923c); font-size: 110px;">&lt;</span><span class="sym-char sym-math-x" style="font-style: normal; font-family: 'Fira Code', 'Consolas', monospace; font-weight: 900; background-image: linear-gradient(90deg, #fb923c, #f59e0b); font-size: 110px; margin-top: 0px;">/</span><span class="sym-char sym-math-e" style="font-style: normal; font-family: 'Fira Code', 'Consolas', monospace; font-weight: 900; background-image: linear-gradient(90deg, #f59e0b, #fb923c); font-size: 110px;">&gt;</span>
                    </span>
                    <span class="sym-char sym-semi"  id="sym-semi-right">;</span>
                    <span class="sym-char sym-brace" id="sym-brace-right">}</span>
                </div>
            </div>

            <script>
                document.addEventListener('DOMContentLoaded', function() {
                    const codingToggle = document.getElementById('hero-coding-toggle');
                    const mathsToggle = document.getElementById('hero-maths-toggle');
                    const heroTitle = document.getElementById('hero-main-title');
                    const glowBg = document.getElementById('hero-ambient-glow');
                    const braceLeft = document.getElementById('sym-brace-left');
                    const braceRight = document.getElementById('sym-brace-right');
                    const semiLeft = document.getElementById('sym-semi-left');
                    const semiRight = document.getElementById('sym-semi-right');
                    const centerGroup = document.getElementById('sym-center-group');
                    
                    const updateHeroTheme = () => {
                        if (codingToggle.checked) {
                            if(heroTitle) heroTitle.innerHTML = \`<span style="white-space: nowrap;"><span class="highlight-made" style="color: #a855f7;">Code</span> Your Own <span class="highlight-ma" style="color: #0ea5e9;">Future</span>.</span>\`;
                            if(glowBg) glowBg.style.background = 'radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.15) 0%, rgba(14, 165, 233, 0.1) 30%, transparent 60%)';
                            
                            // Transform colors back to coding
                            if(braceLeft) { braceLeft.innerText = '{'; braceLeft.classList.remove('glow-color-maths-brace'); }
                            if(braceRight) { braceRight.innerText = '}'; braceRight.classList.remove('glow-color-maths-brace'); }
                            
                            if(semiLeft) { semiLeft.innerText = ';'; semiLeft.classList.remove('glow-color-maths-semi'); }
                            if(semiRight) { semiRight.innerText = ';'; semiRight.classList.remove('glow-color-maths-semi'); }
                            
                            if(centerGroup) centerGroup.innerHTML = \`<span class="sym-char sym-math-e" style="font-style: normal; font-family: 'Fira Code', 'Consolas', monospace; font-weight: 900; background-image: linear-gradient(90deg, #f59e0b, #fb923c); font-size: 110px;">&lt;</span><span class="sym-char sym-math-x" style="font-style: normal; font-family: 'Fira Code', 'Consolas', monospace; font-weight: 900; background-image: linear-gradient(90deg, #fb923c, #f59e0b); font-size: 110px; margin-top: 0px;">/</span><span class="sym-char sym-math-e" style="font-style: normal; font-family: 'Fira Code', 'Consolas', monospace; font-weight: 900; background-image: linear-gradient(90deg, #f59e0b, #fb923c); font-size: 110px;">&gt;</span>\`;

                        } else {
                            if(heroTitle) heroTitle.innerHTML = \`<span style="white-space: nowrap;"><span class="highlight-ma" style="color: #f59e0b;">Master</span> The Art of</span><br><span class="highlight-de" style="color: #db2777;">Maths</span>.\`;
                            if(glowBg) glowBg.style.background = 'radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.15) 0%, rgba(219, 39, 119, 0.1) 30%, transparent 60%)';
                            
                            // Transform colors to maths theme
                            if(braceLeft) { braceLeft.innerText = '['; braceLeft.classList.add('glow-color-maths-brace'); }
                            if(braceRight) { braceRight.innerText = ']'; braceRight.classList.add('glow-color-maths-brace'); }
                            
                            if(semiLeft) { semiLeft.innerText = '\\u00A0'; semiLeft.classList.add('glow-color-maths-semi'); }
                            if(semiRight) { semiRight.innerText = '\\u00A0'; semiRight.classList.add('glow-color-maths-semi'); }
                            
                            if(centerGroup) centerGroup.innerHTML = \`<span class="sym-char sym-math-e" style="font-style: normal; font-family: 'Georgia', 'Times New Roman', serif; font-weight: 700; background-image: linear-gradient(90deg, #0ea5e9, #2dd4bf); font-size: 110px;">&sum;</span><span class="sym-char sym-math-x" style="font-style: normal; font-family: 'Georgia', 'Times New Roman', serif; font-weight: 700; background-image: linear-gradient(90deg, #2dd4bf, #0ea5e9); font-size: 80px; margin-top: 15px; margin-left:15px;">&infin;</span>\`;
                        }
                    };

                    codingToggle.addEventListener('change', updateHeroTheme);
                    mathsToggle.addEventListener('change', updateHeroTheme);
                    
                    // Initial setup
                    updateHeroTheme();
                });
            </script>
`;

    // Ensure we give the h1 an ID so we can select it effortlessly
    // The h1 is positioned backward from the description <p>
    const beforeP = html.substring(0, paragraphEndIndex);
    let h1Start = beforeP.lastIndexOf('<h1>');

    // Fallback if that somehow fails
    if (h1Start === -1) h1Start = beforeP.lastIndexOf('<h1');

    if (h1Start !== -1) {
        html = html.substring(0, h1Start) + '<h1 id="hero-main-title">' + html.substring(h1Start + 4);
        // Important: Update indices if html changed length!
    } else {
        console.log("Warning: Could not add id to h1!");
    }

    const startOfP = html.lastIndexOf('<p>', paragraphEndIndex);
    const updatedPIndex = html.indexOf('</p>', startOfP);

    const finalHtml = html.substring(0, updatedPIndex + 4) + "\n" + newToggleAndSymbols + "\n" + html.substring(endOfSymbols + '</section>'.length);
    fs.writeFileSync('c:/Users/hp/Desktop/SkyCoders/kiro24/frontend/src/pages/index.html', finalHtml);
    console.log("Successfully injected hero toggle logic.");
} else {
    console.log("Error: Could not find the injection marker. stageIndex:", stageIndex, "paragraphEndIndex:", paragraphEndIndex);
}
