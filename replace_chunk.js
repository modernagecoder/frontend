const fs = require('fs');
let html = fs.readFileSync('c:/Users/hp/Desktop/SkyCoders/kiro24/frontend/src/pages/course.html', 'utf8');

const startIndex = html.indexOf('<style>\n                        /* ====== GLASS SWITCH TOGGLE ====== */');
const endIndex = html.indexOf('<div class="level-divider" id="levelSelector" style="scroll-margin-top: 80px;">');

if (startIndex !== -1 && endIndex !== -1) {
    const newToggleContent = `
                    <style>
                        /* ====== LIGHT/DARK STYLE SWITCH TOGGLE ====== */
                        .course-toggle-container {
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            margin: 3rem auto 4rem;
                            padding: 1rem;
                            gap: 1.5rem;
                        }

                        .toggle-label-text {
                            font-size: 1.5rem;
                            font-weight: 700;
                            color: #a0aec0; /* Inactive color */
                            transition: color 0.4s ease;
                            cursor: pointer;
                        }

                        .toggle-input[value="coding"]:checked ~ .toggle-wrapper {
                            /* Coding active -> Light mode style */
                            background-color: #f6e05e; /* Sun Yellow */
                        }

                        .toggle-input[value="coding"]:checked ~ .toggle-wrapper .toggle-slider {
                            transform: translateX(0);
                            background-color: #ffffff;
                            box-shadow: 0 0 10px rgba(246, 224, 94, 0.8), inset 0 0 0 6px #ecc94b; /* Sun inner circle effect */
                        }

                        .toggle-input[value="coding"]:checked ~ .toggle-label-text.coding-label {
                            color: #f6e05e;
                        }

                        .toggle-input[value="maths"]:checked ~ .toggle-wrapper {
                            /* Maths active -> Dark mode style */
                            background-color: #2d3748; /* Dark Blue/Gray */
                        }

                        .toggle-input[value="maths"]:checked ~ .toggle-wrapper .toggle-slider {
                            transform: translateX(calc(120px - 50px - 8px)); /* slider width - knob width - padding */
                            background-color: #63b3ed; /* Light Blue Moon */
                            box-shadow: inset -8px -4px 0 0 #ebf8ff; /* Crescent moon effect */
                        }

                        .toggle-input[value="maths"]:checked ~ .toggle-label-text.maths-label {
                            color: #ebf8ff;
                        }

                        .toggle-wrapper {
                            position: relative;
                            width: 120px;
                            height: 60px;
                            border-radius: 40px;
                            background-color: #f6e05e; /* Default to coding/sun */
                            cursor: pointer;
                            transition: background-color 0.4s ease, box-shadow 0.4s ease;
                            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2) inset;
                            overflow: hidden;
                        }

                        .toggle-slider {
                            position: absolute;
                            top: 5px;
                            left: 5px;
                            width: 50px;
                            height: 50px;
                            border-radius: 50%;
                            background-color: #ffffff;
                            transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55), background-color 0.4s ease, box-shadow 0.4s ease;
                            box-shadow: 0 0 10px rgba(246, 224, 94, 0.8), inset 0 0 0 6px #ecc94b;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                        }
                        
                        /* Decorative background elements inside the wrapper */
                        .toggle-bg-elements {
                            position: absolute;
                            width: 100%;
                            height: 100%;
                            top: 0;
                            left: 0;
                            pointer-events: none;
                        }
                        
                        .sun-rays {
                            position: absolute;
                            top: 50%;
                            left: 30px;
                            transform: translate(-50%, -50%);
                            width: 60px;
                            height: 60px;
                            background-image: radial-gradient(circle, transparent 30%, #ecc94b 32%, #ecc94b 35%, transparent 37%);
                            background-size: 10px 10px;
                            background-position: center;
                            background-repeat: repeat;
                            border-radius: 50%;
                            opacity: 1;
                            transition: opacity 0.4s ease;
                        }
                        
                        .stars {
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            opacity: 0;
                            transition: opacity 0.4s ease;
                        }
                        
                        .star {
                            position: absolute;
                            background-color: white;
                            border-radius: 50%;
                        }
                        
                        .star-1 { top: 15px; left: 20px; width: 4px; height: 4px; }
                        .star-2 { top: 35px; left: 35px; width: 2px; height: 2px; }
                        .star-3 { top: 25px; left: 50px; width: 3px; height: 3px; }

                        .toggle-input[value="maths"]:checked ~ .toggle-wrapper .sun-rays {
                            opacity: 0;
                        }
                        .toggle-input[value="maths"]:checked ~ .toggle-wrapper .stars {
                            opacity: 1;
                        }

                        /* Hidden Radio Inputs */
                        .toggle-input {
                            display: none;
                        }

                        /* Hover Effects */
                        .course-toggle-container:hover .toggle-wrapper {
                            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3) inset;
                        }
                        
                        @media (max-width: 640px) {
                            .course-toggle-container {
                                gap: 1rem;
                                transform: scale(0.9);
                            }
                            .toggle-label-text {
                                font-size: 1.25rem;
                            }
                        }
                    </style>

                    <div class="course-toggle-container">
                        <input type="radio" id="coding-toggle" name="course-category" class="toggle-input" value="coding" checked>
                        <input type="radio" id="maths-toggle" name="course-category" class="toggle-input" value="maths">

                        <label for="coding-toggle" class="toggle-label-text coding-label">Coding</label>

                        <label for="coding-toggle" class="toggle-wrapper" id="main-toggle-wrapper">
                            <div class="toggle-bg-elements">
                                <div class="sun-rays"></div>
                                <div class="stars">
                                    <div class="star star-1"></div>
                                    <div class="star star-2"></div>
                                    <div class="star star-3"></div>
                                </div>
                            </div>
                            <div class="toggle-slider"></div>
                        </label>

                        <label for="maths-toggle" class="toggle-label-text maths-label">Maths</label>
                    </div>

                    <script>
                        // Small script to handle the wrapper click toggling the correct radio button
                        document.addEventListener('DOMContentLoaded', function() {
                            const wrapper = document.getElementById('main-toggle-wrapper');
                            const codingToggle = document.getElementById('coding-toggle');
                            const mathsToggle = document.getElementById('maths-toggle');
                            
                            if (wrapper) {
                                wrapper.addEventListener('click', function(e) {
                                    e.preventDefault(); // Prevent default label click behavior
                                    if (codingToggle.checked) {
                                        mathsToggle.checked = true;
                                        // Dispatch change event to trigger the main logic
                                        mathsToggle.dispatchEvent(new Event('change'));
                                    } else {
                                        codingToggle.checked = true;
                                        codingToggle.dispatchEvent(new Event('change'));
                                    }
                                });
                            }
                        });
                    </script>

                    `;

    html = html.substring(0, startIndex) + newToggleContent + "\n                    " + html.substring(endIndex);
    fs.writeFileSync('c:/Users/hp/Desktop/SkyCoders/kiro24/frontend/src/pages/course.html', html);
    console.log("Successfully replaced toggle HTML with new light/dark mode design.");
} else {
    console.log("Failed to find boundaries.", startIndex, endIndex);
}
