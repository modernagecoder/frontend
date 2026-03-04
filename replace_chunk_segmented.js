const fs = require('fs');
let html = fs.readFileSync('c:/Users/hp/Desktop/SkyCoders/kiro24/frontend/src/pages/course.html', 'utf8');

let startIndex = html.indexOf('<style>\n                        /* ====== LIGHT/DARK STYLE SWITCH TOGGLE ====== */');
if (startIndex === -1) {
    // Fallback if not found
    startIndex = html.indexOf('/* ====== LIGHT/DARK STYLE SWITCH TOGGLE ====== */') - 30; // approx <style>\n
}
const endIndex = html.indexOf('<div class="level-divider" id="levelSelector" style="scroll-margin-top: 80px;">');

if (startIndex !== -1 && endIndex !== -1) {
    const newToggleContent = `
                    <style>
                        /* ====== SEGMENTED CONTROL TOGGLE ====== */
                        .course-toggle-container {
                            display: flex;
                            justify-content: center;
                            margin: 3rem auto 4rem;
                            padding: 0 1rem;
                        }

                        .toggle-track {
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
                            /* Subtle pulse to draw attention */
                            animation: togglePulse 3s infinite;
                        }

                        @keyframes togglePulse {
                            0% { box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4), 0 0 0 0 rgba(168, 85, 247, 0.3); }
                            50% { box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4), 0 0 0 15px rgba(168, 85, 247, 0); }
                            100% { box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4), 0 0 0 0 rgba(168, 85, 247, 0); }
                        }

                        .toggle-input {
                            display: none;
                        }

                        .toggle-slider {
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

                        .toggle-slider::after {
                            content: '';
                            position: absolute;
                            inset: 0;
                            border-radius: 50px;
                            box-shadow: inset 0 2px 4px rgba(255, 255, 255, 0.4), inset 0 -2px 4px rgba(0, 0, 0, 0.2);
                        }

                        .toggle-label {
                            flex: 1;
                            text-align: center;
                            font-size: 1.35rem;
                            font-weight: 800;
                            color: #94a3b8; /* Slate 400 */
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

                        .toggle-icon {
                            font-size: 1.6rem;
                            transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                            filter: grayscale(100%) opacity(0.5);
                        }

                        /* Coding Active State */
                        .toggle-input[value="coding"]:checked ~ .toggle-track .toggle-slider {
                            transform: translateX(0);
                            background: linear-gradient(135deg, #a855f7 0%, #3b82f6 100%);
                            box-shadow: 0 4px 15px rgba(168, 85, 247, 0.5);
                        }
                        
                        .toggle-input[value="coding"]:checked ~ .toggle-track {
                            animation: togglePulseCoding 3s infinite;
                        }

                        @keyframes togglePulseCoding {
                            0% { box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4), 0 0 0 0 rgba(168, 85, 247, 0.2); }
                            70% { box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4), 0 0 0 15px rgba(168, 85, 247, 0); }
                            100% { box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4), 0 0 0 0 rgba(168, 85, 247, 0); }
                        }

                        .toggle-input[value="coding"]:checked ~ .toggle-track .coding-label {
                            color: #ffffff;
                            text-shadow: 0 2px 10px rgba(0,0,0,0.3);
                        }

                        .toggle-input[value="coding"]:checked ~ .toggle-track .coding-label .toggle-icon {
                            transform: scale(1.2) translateY(-2px);
                            filter: none;
                        }

                        /* Maths Active State */
                        .toggle-input[value="maths"]:checked ~ .toggle-track .toggle-slider {
                            transform: translateX(100%);
                            background: linear-gradient(135deg, #10b981 0%, #06b6d4 100%);
                            box-shadow: 0 4px 15px rgba(16, 185, 129, 0.5);
                        }
                        
                        .toggle-input[value="maths"]:checked ~ .toggle-track {
                            animation: togglePulseMaths 3s infinite;
                        }

                        @keyframes togglePulseMaths {
                            0% { box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4), 0 0 0 0 rgba(16, 185, 129, 0.2); }
                            70% { box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4), 0 0 0 15px rgba(16, 185, 129, 0); }
                            100% { box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4), 0 0 0 0 rgba(16, 185, 129, 0); }
                        }

                        .toggle-input[value="maths"]:checked ~ .toggle-track .maths-label {
                            color: #ffffff;
                            text-shadow: 0 2px 10px rgba(0,0,0,0.3);
                        }

                        .toggle-input[value="maths"]:checked ~ .toggle-track .maths-label .toggle-icon {
                            transform: scale(1.2) translateY(-2px);
                            filter: none;
                        }

                        @media (max-width: 640px) {
                            .toggle-track {
                                max-width: 100%;
                                padding: 6px;
                                border-radius: 40px;
                            }
                            .toggle-label {
                                font-size: 1.15rem;
                                padding: 0.8rem 0;
                            }
                            .toggle-icon {
                                font-size: 1.3rem;
                            }
                            .toggle-slider {
                                top: 6px;
                                left: 6px;
                                width: calc(50% - 6px);
                                height: calc(100% - 12px);
                            }
                        }
                    </style>

                    <div class="course-toggle-container">
                        <input type="radio" id="coding-toggle" name="course-category" class="toggle-input" value="coding" checked>
                        <input type="radio" id="maths-toggle" name="course-category" class="toggle-input" value="maths">

                        <div class="toggle-track">
                            <div class="toggle-slider"></div>
                            
                            <label for="coding-toggle" class="toggle-label coding-label">
                                <span class="toggle-icon">👨‍💻</span>
                                <span class="toggle-text">Coding</span>
                            </label>
                            
                            <label for="maths-toggle" class="toggle-label maths-label">
                                <span class="toggle-icon">🧮</span>
                                <span class="toggle-text">Maths</span>
                            </label>
                        </div>
                    </div>

                    `;

    html = html.substring(0, startIndex) + newToggleContent + "\n                    " + html.substring(endIndex);
    fs.writeFileSync('c:/Users/hp/Desktop/SkyCoders/kiro24/frontend/src/pages/course.html', html);
    console.log("Successfully replaced toggle HTML with new segmented control design.");
} else {
    console.log("Failed to find boundaries.", startIndex, endIndex);
}
