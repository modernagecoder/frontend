const fs = require('fs');
let html = fs.readFileSync('c:/Users/hp/Desktop/SkyCoders/kiro24/frontend/src/pages/course.html', 'utf8');

const targetLogicStart = html.indexOf('function initializeTabs() {');
const targetLogicEndStr = '// Background Animation';
let targetLogicEnd = html.indexOf(targetLogicEndStr);

if (targetLogicStart > -1 && targetLogicEnd > -1) {
    const newLogic = `
            function initializeTabs() {
                const toggleInputs = document.querySelectorAll('.toggle-input');
                const subTabs = document.querySelectorAll('.sub-tab');
                const subTabContainers = document.querySelectorAll('.sub-tabs');

                toggleInputs.forEach(input => {
                    input.addEventListener('change', function () {
                        const tabType = this.value;
                        tabState.activeMainTab = tabType;
                        tabState.activeSubTab = tabType === 'maths' ? 'elementary' : 'kids';

                        // Handle active class for toggle labels (optional visually, but good for tracking)
                        document.querySelectorAll('.toggle-label').forEach(label => {
                            label.classList.remove('active');
                            label.setAttribute('aria-selected', 'false');
                        });
                        const activeLabel = document.querySelector(\`label[for=\"\${this.id}\"]\`);
                        if(activeLabel) {
                            activeLabel.classList.add('active');
                            activeLabel.setAttribute('aria-selected', 'true');
                        }

                        // Handle sub-tabs visibility
                        subTabContainers.forEach(container => container.classList.remove('active'));
                        const activeContainer = document.querySelector(\`.\${tabType}-subtabs\`);
                        if (activeContainer) {
                            activeContainer.classList.add('active');
                            const containerSubTabs = activeContainer.querySelectorAll('.sub-tab');
                            containerSubTabs.forEach(st => st.classList.remove('active'));
                            containerSubTabs[0].classList.add('active');
                        }
                        applyTabFilters();

                        // Smooth scroll to level selector so parents can see age group options
                        const levelSelector = document.getElementById('levelSelector');
                        if (levelSelector) {
                            setTimeout(() => {
                                levelSelector.scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'start'
                                });
                            }, 100);
                        }
                    });
                });

                subTabs.forEach(subTab => {
                    subTab.addEventListener('click', function () {
                        const subTabType = this.dataset.subtab;
                        const mainTabType = this.dataset.main;
                        if (mainTabType === tabState.activeMainTab) {
                            tabState.activeSubTab = subTabType;
                            const container = this.closest('.sub-tabs');
                            container.querySelectorAll('.sub-tab').forEach(st => st.classList.remove('active'));
                            this.classList.add('active');
                            applyTabFilters();

                            // Smooth scroll to courses section after selecting level
                            const coursesSection = document.getElementById('coursesSection');
                            if (coursesSection) {
                                setTimeout(() => {
                                    coursesSection.scrollIntoView({
                                        behavior: 'smooth',
                                        block: 'start'
                                    });
                                }, 150);
                            }
                        }
                    });
                });

                // Set initial state from existing URL if parsed later, OR trigger change on load
                const checkedToggle = document.querySelector('.toggle-input:checked');
                if(checkedToggle) {
                     // manually apply for load
                     // tabState logic is set initially to 'coding' automatically.
                }
            }

            // Background Animation`;

    html = html.substring(0, targetLogicStart) + newLogic.trim() + html.substring(targetLogicEnd + targetLogicEndStr.length);
    fs.writeFileSync('c:/Users/hp/Desktop/SkyCoders/kiro24/frontend/src/pages/course.html', html);
    console.log("Updated initializeTabs logic");
} else {
    console.log("Could not find logic to replace");
}
