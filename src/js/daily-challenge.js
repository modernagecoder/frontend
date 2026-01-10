/**
 * Daily Challenge Engine
 * Handles logic for loading questions, checking answers, and managing streaks.
 * Updated for question-first design with clearer options.
 */

document.addEventListener('DOMContentLoaded', () => {
    initDailyChallenge();
});

const DIFFICULTY_MAP = {
    0: 'Easy', // Sunday
    1: 'Easy', // Monday
    2: 'Medium', // Tuesday
    3: 'Hard', // Wednesday
    4: 'Medium', // Thursday
    5: 'Easy', // Friday
    6: 'Super Ultra Hard' // Saturday
};

const DIFFICULTY_SHORT = {
    'Easy': 'easy',
    'Medium': 'medium',
    'Hard': 'hard',
    'Super Ultra Hard': 'ultra'
};

const DAY_NAMES = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

function initDailyChallenge() {
    const now = new Date();
    const currentDayIndex = now.getDay();

    // Render Timeline
    renderTimeline(currentDayIndex);

    // Update Date Display
    updateDateDisplay(now);

    // Load Question
    const pageType = document.body.dataset.challengeType;
    if (pageType) {
        loadQuestion(pageType, currentDayIndex);
    }

    // Update Streak UI
    updateStreakUI();
}

function updateDateDisplay(date) {
    const dateEl = document.getElementById('dc-date');
    if (dateEl) {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        dateEl.textContent = date.toLocaleDateString('en-US', options);
    }
}

function renderTimeline(activeDayIndex) {
    const timelineContainer = document.getElementById('dc-timeline');
    if (!timelineContainer) return;

    timelineContainer.innerHTML = '';

    for (let i = 0; i < 7; i++) {
        let jsDayIndex = (i + 1) % 7; // Start from Monday
        const dayName = DAY_NAMES[jsDayIndex];
        const difficulty = DIFFICULTY_MAP[jsDayIndex];
        const diffClass = DIFFICULTY_SHORT[difficulty] || 'easy';

        const node = document.createElement('div');
        node.className = `day-node ${jsDayIndex === activeDayIndex ? 'active' : ''}`;
        node.setAttribute('data-diff', difficulty);

        node.innerHTML = `
            <span class="day-name">${dayName}</span>
            <div class="day-indicator">${i + 1}</div>
            <span class="day-diff ${diffClass}">${difficulty === 'Super Ultra Hard' ? 'ULTRA' : difficulty}</span>
        `;

        timelineContainer.appendChild(node);
    }
}

async function loadQuestion(type, dayIndex) {
    const file = type === 'coding' ? '/src/data/coding-questions.json' : '/src/data/maths-questions.json';

    try {
        const response = await fetch(file);
        const questions = await response.json();

        const possibleQuestions = questions.filter(q => q.dayIndex === dayIndex);

        if (possibleQuestions.length === 0) {
            showError("No challenge available for today yet. Come back tomorrow!");
            return;
        }

        const dateStr = new Date().toDateString();
        const randIndex = dateStr.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % possibleQuestions.length;

        const todayQuestion = possibleQuestions[randIndex];
        renderQuestion(todayQuestion);

    } catch (error) {
        console.error("Failed to load questions:", error);
        showError("Unable to load today's challenge. Please refresh.");
    }
}

function renderQuestion(q) {
    const container = document.getElementById('dc-question-container');
    if (!container) return;

    // Update difficulty badge
    const diffBadge = document.getElementById('dc-difficulty');
    if (diffBadge) {
        const diffClass = DIFFICULTY_SHORT[q.difficulty] || 'easy';
        diffBadge.className = `difficulty-tag ${diffClass}`;
        diffBadge.textContent = q.difficulty;
    }

    // Update topic
    const topicEl = document.getElementById('dc-topic');
    if (topicEl && q.topic) {
        topicEl.textContent = q.topic;
    }

    // Build Options HTML with letters A, B, C, D...
    const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
    const optionsHtml = q.options.map((opt, idx) => `
        <button class="option-btn" onclick="handleOptionSelect(this, ${idx}, ${q.correctIndex})">
            <span class="option-letter">${letters[idx]}</span>
            <span class="option-text">${opt}</span>
        </button>
    `).join('');

    container.innerHTML = `
        <span class="question-number">Question of the Day</span>
        <p class="question-text">${q.question}</p>
        
        ${q.code ? `
        <div class="code-block">
            <div class="code-header">
                <span class="code-language">${q.language || 'Python'}</span>
                <button class="code-copy-btn" onclick="copyCode(this)">Copy</button>
            </div>
            <pre class="code-content">${escapeHtml(q.code)}</pre>
        </div>
        ` : ''}
        
        <div class="options-grid" id="dc-options-grid">
            ${optionsHtml}
        </div>
        
        <div class="explanation-area" id="dc-explanation-area">
            <!-- Injected via JS after answer -->
        </div>
    `;

    // Store explanation data
    container.dataset.explanation = q.explanation;
    container.dataset.wrongExplanations = JSON.stringify(q.wrongExplanations || []);
}

window.handleOptionSelect = function (element, selectedIndex, correctIndex) {
    const grid = document.getElementById('dc-options-grid');
    if (grid.classList.contains('locked')) return;

    grid.classList.add('locked');
    const options = grid.querySelectorAll('.option-btn');
    options.forEach(opt => opt.classList.add('locked'));

    const isCorrect = selectedIndex === correctIndex;

    if (isCorrect) {
        element.classList.add('correct');
        handleStreak(true);
    } else {
        element.classList.add('wrong');
        options[correctIndex].classList.add('correct');
        handleStreak(false);
    }

    showExplanation(isCorrect, selectedIndex, correctIndex);
};

function showExplanation(isCorrect, selectedIndex, correctIndex) {
    const area = document.getElementById('dc-explanation-area');
    const container = document.getElementById('dc-question-container');
    const mainExpl = container.dataset.explanation;
    const wrongExpls = JSON.parse(container.dataset.wrongExplanations || '[]');

    let content = '';

    if (isCorrect) {
        content = `
            <div class="explanation-title">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--cp-easy)">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <span style="color: var(--cp-easy)">Excellent! Correct Answer</span>
            </div>
            <p class="explanation-content">${mainExpl}</p>
        `;
    } else {
        const specificWrong = wrongExpls[selectedIndex];
        content = `
            <div class="explanation-title">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--cp-hard)">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <span style="color: var(--cp-hard)">Let's Understand This</span>
            </div>
            <p class="explanation-content"><strong>Why your answer was incorrect:</strong> ${specificWrong || "Review the correct approach below."}</p>
            <p class="explanation-content" style="margin-top:14px"><strong>Correct approach:</strong> ${mainExpl}</p>
        `;
    }

    area.innerHTML = content;
    area.classList.add('visible');

    // Scroll to explanation
    area.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function handleStreak(isCorrect) {
    if (!isCorrect) return;

    const today = new Date().toDateString();
    const lastWin = localStorage.getItem('dc_last_win');
    let streak = parseInt(localStorage.getItem('dc_streak') || '0');

    if (lastWin === today) return;

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    if (lastWin === yesterday.toDateString()) {
        streak++;
    } else {
        streak = 1;
    }

    localStorage.setItem('dc_last_win', today);
    localStorage.setItem('dc_streak', streak);
    updateStreakUI();
}

function updateStreakUI() {
    const el = document.getElementById('dc-streak-count');
    if (el) {
        const streak = localStorage.getItem('dc_streak') || 0;
        el.textContent = `${streak} Day Streak`;
    }
}

window.copyCode = function (button) {
    const codeBlock = button.closest('.code-block');
    const code = codeBlock.querySelector('.code-content').textContent;
    navigator.clipboard.writeText(code).then(() => {
        button.textContent = 'Copied!';
        setTimeout(() => {
            button.textContent = 'Copy';
        }, 2000);
    });
};

function showError(msg) {
    const container = document.getElementById('dc-question-container');
    if (container) {
        container.innerHTML = `
            <div class="loading-state">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--cp-text-muted)">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <p class="loading-text">${msg}</p>
            </div>
        `;
    }
}

function escapeHtml(text) {
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
