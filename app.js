// CS413 Problem Solving & Decision Making Interactive Quiz App
// Supports: Study Mode, Exam Mode, Review All Mode, Audio FX, Theme Toggle, Palette Navigation

(function() {
  'use strict';

  // Application State
  const state = {
    currentIndex: 0,
    mode: 'study', // 'study' | 'exam' | 'review'
    answers: {}, // { [qId]: selectedOptionKey }
    flagged: new Set(),
    soundEnabled: true,
    theme: 'light',
    examTimerInterval: null,
    examTimeRemaining: 45 * 60, // 45 minutes in seconds
    examTimeSpent: 0,
    isExamSubmitted: false,
    navFilter: 'all' // 'all' | 'flagged' | 'wrong' | 'unanswered'
  };

  // DOM Elements
  const elements = {
    // Header & Modes
    themeToggleBtn: document.getElementById('themeToggleBtn'),
    soundToggleBtn: document.getElementById('soundToggleBtn'),
    navDrawerBtn: document.getElementById('navDrawerBtn'),
    answeredCountBadge: document.getElementById('answeredCountBadge'),
    modeTabs: document.querySelectorAll('.mode-tab'),
    
    // Quiz Views
    questionViewContainer: document.getElementById('questionViewContainer'),
    allQuestionsContainer: document.getElementById('allQuestionsContainer'),
    resultsViewContainer: document.getElementById('resultsViewContainer'),
    
    // Toolbar
    questionProgressText: document.getElementById('questionProgressText'),
    progressPercentage: document.getElementById('progressPercentage'),
    progressBarFill: document.getElementById('progressBarFill'),
    examTimer: document.getElementById('examTimer'),
    timerDisplay: document.getElementById('timerDisplay'),
    flagBtn: document.getElementById('flagBtn'),
    
    // Question Card
    qNumberBadge: document.getElementById('qNumberBadge'),
    qSourceMini: document.getElementById('qSourceMini'),
    questionText: document.getElementById('questionText'),
    optionsContainer: document.getElementById('optionsContainer'),
    
    // Explanation Box
    explanationBox: document.getElementById('explanationBox'),
    expStatusIcon: document.getElementById('expStatusIcon'),
    expTitle: document.getElementById('expTitle'),
    expWhyArText: document.getElementById('expWhyArText'),
    expWhyEnText: document.getElementById('expWhyEnText'),
    expSourceText: document.getElementById('expSourceText'),
    
    // Navigation Buttons
    prevBtn: document.getElementById('prevBtn'),
    nextBtn: document.getElementById('nextBtn'),
    clearChoiceBtn: document.getElementById('clearChoiceBtn'),
    submitExamBtn: document.getElementById('submitExamBtn'),
    
    // Drawer & Palette
    questionsDrawer: document.getElementById('questionsDrawer'),
    closeDrawerBtn: document.getElementById('closeDrawerBtn'),
    drawerBackdrop: document.getElementById('drawerBackdrop'),
    questionPaletteGrid: document.getElementById('questionPaletteGrid'),
    navFilterBtns: document.querySelectorAll('.nav-filter-btn'),
    resetAllProgressBtn: document.getElementById('resetAllProgressBtn'),
    
    // Review Mode
    reviewSearchInput: document.getElementById('reviewSearchInput'),
    reviewFilterBtns: document.querySelectorAll('.filter-btn'),
    reviewCardsList: document.getElementById('reviewCardsList'),
    
    // Results
    resultScorePct: document.getElementById('resultScorePct'),
    resultGradeText: document.getElementById('resultGradeText'),
    resultSummaryText: document.getElementById('resultSummaryText'),
    statCorrect: document.getElementById('statCorrect'),
    statIncorrect: document.getElementById('statIncorrect'),
    statSkipped: document.getElementById('statSkipped'),
    statTimeSpent: document.getElementById('statTimeSpent'),
    reviewExamMistakesBtn: document.getElementById('reviewExamMistakesBtn'),
    retakeExamBtn: document.getElementById('retakeExamBtn'),
    backToStudyBtn: document.getElementById('backToStudyBtn')
  };

  // Web Audio Context for Sound Effects
  let audioCtx = null;
  function getAudioContext() {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) audioCtx = new AudioContextClass();
    }
    return audioCtx;
  }

  function playTone(type) {
    if (!state.soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      if (ctx.state === 'suspended') ctx.resume();

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      const now = ctx.currentTime;
      if (type === 'correct') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(523.25, now); // C5
        osc.frequency.setValueAtTime(659.25, now + 0.1); // E5
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
        osc.start(now);
        osc.stop(now + 0.35);
      } else if (type === 'wrong') {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(220, now); // A3
        osc.frequency.setValueAtTime(196, now + 0.12); // G3
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
        osc.start(now);
        osc.stop(now + 0.3);
      } else if (type === 'click') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(400, now);
        gain.gain.setValueAtTime(0.05, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
        osc.start(now);
        osc.stop(now + 0.08);
      } else if (type === 'fanfare') {
        // High score celebratory chord
        [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
          const o = ctx.createOscillator();
          const g = ctx.createGain();
          o.connect(g);
          g.connect(ctx.destination);
          o.frequency.setValueAtTime(freq, now + i * 0.08);
          g.gain.setValueAtTime(0.12, now + i * 0.08);
          g.gain.exponentialRampToValueAtTime(0.001, now + 0.8);
          o.start(now + i * 0.08);
          o.stop(now + 0.8);
        });
      }
    } catch (e) {
      console.warn('Audio not allowed yet or error', e);
    }
  }

  // Load Saved Preferences
  function loadSavedState() {
    try {
      const savedTheme = localStorage.getItem('cs413_theme');
      if (savedTheme) {
        state.theme = savedTheme;
        document.body.className = `theme-${savedTheme}`;
        elements.themeToggleBtn.querySelector('.icon').textContent = savedTheme === 'dark' ? '☀️' : '🌙';
      }

      const savedSound = localStorage.getItem('cs413_sound');
      if (savedSound !== null) {
        state.soundEnabled = savedSound === 'true';
        elements.soundToggleBtn.querySelector('.icon').textContent = state.soundEnabled ? '🔊' : '🔇';
      }

      const savedAnswers = localStorage.getItem('cs413_answers');
      if (savedAnswers) {
        state.answers = JSON.parse(savedAnswers);
      }

      const savedFlags = localStorage.getItem('cs413_flags');
      if (savedFlags) {
        state.flagged = new Set(JSON.parse(savedFlags));
      }
    } catch (e) {
      console.warn('LocalStorage error', e);
    }
  }

  function saveStateToStorage() {
    try {
      localStorage.setItem('cs413_answers', JSON.stringify(state.answers));
      localStorage.setItem('cs413_flags', JSON.stringify(Array.from(state.flagged)));
    } catch (e) {
      console.warn('LocalStorage save error', e);
    }
  }

  // Render Current Question
  function renderQuestion(index) {
    if (index < 0 || index >= questionsData.length) return;
    state.currentIndex = index;
    const q = questionsData[index];
    const total = questionsData.length;

    // Progress
    const answeredCount = Object.keys(state.answers).length;
    elements.answeredCountBadge.textContent = `${answeredCount}/${total}`;
    elements.questionProgressText.textContent = `السؤال ${index + 1} من ${total}`;
    const pct = Math.round(((index + 1) / total) * 100);
    elements.progressPercentage.textContent = `${pct}%`;
    elements.progressBarFill.style.width = `${pct}%`;

    // Question Header
    elements.qNumberBadge.textContent = `Question ${q.id}`;
    elements.qSourceMini.textContent = q.source;
    elements.questionText.textContent = q.question;

    // Flag status
    const isFlagged = state.flagged.has(q.id);
    elements.flagBtn.classList.toggle('active', isFlagged);
    elements.flagBtn.querySelector('.flag-text').textContent = isFlagged ? 'تم تمييزه 🚩' : 'تحديد للمراجعة';

    // Options Rendering
    elements.optionsContainer.innerHTML = '';
    const selectedOption = state.answers[q.id];
    const isAnswered = selectedOption !== undefined;

    const showInstantFeedback = (state.mode === 'study') || (state.mode === 'exam' && state.isExamSubmitted);

    ['A', 'B', 'C', 'D'].forEach(letter => {
      const optText = q.options[letter];
      if (!optText) return;

      const optBtn = document.createElement('div');
      optBtn.className = 'option-item';
      optBtn.dataset.option = letter;

      if (selectedOption === letter) {
        optBtn.classList.add('selected');
      }

      if (showInstantFeedback && isAnswered) {
        if (letter === q.correct) {
          optBtn.classList.add('correct');
        } else if (selectedOption === letter) {
          optBtn.classList.add('wrong');
        }
      }

      optBtn.innerHTML = `
        <div class="option-letter">${letter}</div>
        <div class="option-text">${optText}</div>
      `;

      optBtn.addEventListener('click', () => {
        handleOptionSelect(letter);
      });

      elements.optionsContainer.appendChild(optBtn);
    });

    // Explanation Box Rendering
    if (showInstantFeedback && isAnswered) {
      elements.explanationBox.style.display = 'block';
      const isCorrect = selectedOption === q.correct;
      elements.explanationBox.className = `explanation-box ${isCorrect ? 'correct' : 'wrong'}`;
      elements.expStatusIcon.textContent = isCorrect ? '✅' : '❌';
      elements.expTitle.textContent = isCorrect 
        ? `إجابة صحيحة! (الإجابة: ${q.correct})` 
        : `إجابة غير صحيحة! (الإجابة الصحيحة هي: ${q.correct})`;
      elements.expWhyArText.textContent = q.explanation_ar;
      elements.expWhyEnText.textContent = q.explanation_en;
      elements.expSourceText.textContent = q.source;
    } else {
      elements.explanationBox.style.display = 'none';
    }

    // Previous / Next Buttons
    elements.prevBtn.disabled = (index === 0);
    elements.nextBtn.disabled = (index === total - 1);

    // Exam Mode Buttons
    if (state.mode === 'exam' && !state.isExamSubmitted) {
      elements.submitExamBtn.style.display = 'inline-block';
    } else {
      elements.submitExamBtn.style.display = 'none';
    }

    renderPalette();
  }

  // Handle Option Selection
  function handleOptionSelect(letter) {
    const q = questionsData[state.currentIndex];
    const prevAnswer = state.answers[q.id];

    // In exam submitted mode, review only
    if (state.mode === 'exam' && state.isExamSubmitted) return;

    state.answers[q.id] = letter;
    saveStateToStorage();

    const isCorrect = (letter === q.correct);

    if (state.mode === 'study') {
      if (isCorrect) {
        playTone('correct');
      } else {
        playTone('wrong');
      }
    } else {
      playTone('click');
    }

    renderQuestion(state.currentIndex);
  }

  // Render Sidebar Palette
  function renderPalette() {
    elements.questionPaletteGrid.innerHTML = '';
    const total = questionsData.length;

    questionsData.forEach((q, idx) => {
      const selected = state.answers[q.id];
      const isAnswered = selected !== undefined;
      const isFlagged = state.flagged.has(q.id);
      const isCorrect = (selected === q.correct);
      const isWrong = isAnswered && !isCorrect;

      // Filtering
      if (state.navFilter === 'flagged' && !isFlagged) return;
      if (state.navFilter === 'wrong' && !isWrong) return;
      if (state.navFilter === 'unanswered' && isAnswered) return;

      const btn = document.createElement('button');
      btn.className = 'palette-btn';
      btn.textContent = q.id;
      btn.title = `السؤال ${q.id}`;

      if (idx === state.currentIndex && state.mode !== 'review') {
        btn.classList.add('current');
      }

      if (isFlagged) {
        btn.classList.add('flagged');
      }

      if (isAnswered) {
        if (state.mode === 'study' || (state.mode === 'exam' && state.isExamSubmitted)) {
          if (isCorrect) btn.classList.add('correct');
          else btn.classList.add('wrong');
        } else {
          btn.classList.add('answered-exam');
        }
      }

      btn.addEventListener('click', () => {
        if (state.mode === 'review') {
          switchMode('study');
        }
        renderQuestion(idx);
        closeDrawer();
      });

      elements.questionPaletteGrid.appendChild(btn);
    });

    const answeredCount = Object.keys(state.answers).length;
    elements.answeredCountBadge.textContent = `${answeredCount}/${total}`;
  }

  // Clear current choice
  function clearCurrentChoice() {
    const q = questionsData[state.currentIndex];
    delete state.answers[q.id];
    saveStateToStorage();
    renderQuestion(state.currentIndex);
  }

  // Toggle Flag
  function toggleFlag() {
    const q = questionsData[state.currentIndex];
    if (state.flagged.has(q.id)) {
      state.flagged.delete(q.id);
    } else {
      state.flagged.add(q.id);
    }
    saveStateToStorage();
    renderQuestion(state.currentIndex);
  }

  // Reset all answers
  function resetAll() {
    if (confirm('هل أنت متأكد من رغبتك في إعادة تعيين كافة الإجابات والعلامات؟')) {
      state.answers = {};
      state.flagged.clear();
      state.isExamSubmitted = false;
      saveStateToStorage();
      renderQuestion(0);
      renderPalette();
    }
  }

  // Timer for Exam Mode
  function startExamTimer() {
    clearInterval(state.examTimerInterval);
    state.examTimeRemaining = 45 * 60; // 45 min
    state.examTimeSpent = 0;
    elements.examTimer.style.display = 'inline-flex';

    function updateTimer() {
      if (state.examTimeRemaining <= 0) {
        clearInterval(state.examTimerInterval);
        alert('انتهى الوقت المحدد للاختبار! سيتم تصحيح إجاباتك الآن.');
        submitExam();
        return;
      }
      state.examTimeRemaining--;
      state.examTimeSpent++;

      const mins = Math.floor(state.examTimeRemaining / 60);
      const secs = state.examTimeRemaining % 60;
      elements.timerDisplay.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }

    updateTimer();
    state.examTimerInterval = setInterval(updateTimer, 1000);
  }

  function stopExamTimer() {
    clearInterval(state.examTimerInterval);
  }

  // Submit Exam
  function submitExam() {
    stopExamTimer();
    state.isExamSubmitted = true;

    let correctCount = 0;
    let incorrectCount = 0;
    let skippedCount = 0;

    questionsData.forEach(q => {
      const ans = state.answers[q.id];
      if (ans === undefined) {
        skippedCount++;
      } else if (ans === q.correct) {
        correctCount++;
      } else {
        incorrectCount++;
      }
    });

    const total = questionsData.length;
    const pct = Math.round((correctCount / total) * 100);

    // Format time spent
    const minsSpent = Math.floor(state.examTimeSpent / 60);
    const secsSpent = state.examTimeSpent % 60;
    const timeSpentFormatted = `${String(minsSpent).padStart(2, '0')}:${String(secsSpent).padStart(2, '0')}`;

    elements.resultScorePct.textContent = `${pct}%`;
    elements.statCorrect.textContent = correctCount;
    elements.statIncorrect.textContent = incorrectCount;
    elements.statSkipped.textContent = skippedCount;
    elements.statTimeSpent.textContent = timeSpentFormatted;
    elements.resultSummaryText.textContent = `أجبت بشكل صحيح على ${correctCount} من أصل ${total} سؤال.`;

    let grade = 'ممتاز (A+)';
    if (pct < 50) grade = 'تحتاج إلى مراجعة مكثفة (F)';
    else if (pct < 65) grade = 'مقبول (D)';
    else if (pct < 75) grade = 'جيد (C)';
    else if (pct < 85) grade = 'جيد جداً (B)';
    else if (pct < 95) grade = 'ممتاز (A)';
    elements.resultGradeText.textContent = grade;

    if (pct >= 85) {
      playTone('fanfare');
    }

    elements.questionViewContainer.style.display = 'none';
    elements.allQuestionsContainer.style.display = 'none';
    elements.resultsViewContainer.style.display = 'block';

    renderPalette();
  }

  // Review All Questions Mode
  function renderAllQuestions(filterType = 'all', searchQuery = '') {
    elements.reviewCardsList.innerHTML = '';
    const query = searchQuery.trim().toLowerCase();

    let filtered = questionsData.filter(q => {
      // lecture filter: Questions 1 to 25 are Lec 1, 26 to 50 are Lec 2
      if (filterType === 'p1' && q.id > 25) return false;
      if (filterType === 'p2' && q.id <= 25) return false;

      if (query) {
        const inQ = q.question.toLowerCase().includes(query);
        const inExpEn = (q.explanation_en || '').toLowerCase().includes(query);
        const inExpAr = (q.explanation_ar || '').toLowerCase().includes(query);
        const inSrc = q.source.toLowerCase().includes(query);
        const inOpts = Object.values(q.options).some(o => o.toLowerCase().includes(query));
        return inQ || inExpEn || inExpAr || inSrc || inOpts;
      }
      return true;
    });

    if (filtered.length === 0) {
      elements.reviewCardsList.innerHTML = '<p style="text-align:center; padding:30px; color:var(--text-muted);">لم يتم العثور على أسئلة مطابقة للبحث.</p>';
      return;
    }

    filtered.forEach(q => {
      const card = document.createElement('div');
      card.className = 'review-item-card';

      let optionsHtml = '';
      ['A', 'B', 'C', 'D'].forEach(letter => {
        if (!q.options[letter]) return;
        const isCorrect = (letter === q.correct);
        optionsHtml += `
          <div class="review-opt ${isCorrect ? 'is-correct' : ''}">
            <strong>${letter}.</strong> ${q.options[letter]} ${isCorrect ? '✅ (الإجابة الصحيحة)' : ''}
          </div>
        `;
      });

      card.innerHTML = `
        <div class="review-item-header">
          <span class="q-badge">Question ${q.id}</span>
          <span class="source-tag-pill">${q.source}</span>
        </div>
        <div class="review-q-text">${q.question}</div>
        <div class="review-options-list">${optionsHtml}</div>
        <div class="review-exp-block">
          <div class="review-exp-ar">
            <strong>🇸🇦 الشرح بالعربية:</strong> ${q.explanation_ar}
          </div>
          <div class="review-exp-en">
            <strong>🇬🇧 Why? (English):</strong> ${q.explanation_en}
          </div>
        </div>
      `;
      elements.reviewCardsList.appendChild(card);
    });
  }

  // Switch App Mode
  function switchMode(newMode) {
    state.mode = newMode;
    elements.modeTabs.forEach(tab => {
      tab.classList.toggle('active', tab.dataset.mode === newMode);
    });

    if (newMode === 'study') {
      stopExamTimer();
      elements.examTimer.style.display = 'none';
      elements.questionViewContainer.style.display = 'block';
      elements.allQuestionsContainer.style.display = 'none';
      elements.resultsViewContainer.style.display = 'none';
      renderQuestion(state.currentIndex);
    } else if (newMode === 'exam') {
      elements.questionViewContainer.style.display = 'block';
      elements.allQuestionsContainer.style.display = 'none';
      elements.resultsViewContainer.style.display = 'none';
      if (!state.isExamSubmitted) {
        startExamTimer();
      }
      renderQuestion(state.currentIndex);
    } else if (newMode === 'review') {
      stopExamTimer();
      elements.examTimer.style.display = 'none';
      elements.questionViewContainer.style.display = 'none';
      elements.allQuestionsContainer.style.display = 'block';
      elements.resultsViewContainer.style.display = 'none';
      renderAllQuestions('all', elements.reviewSearchInput.value);
    }
    renderPalette();
  }

  // Mobile Drawer toggles
  function openDrawer() {
    elements.questionsDrawer.classList.add('open');
    elements.drawerBackdrop.classList.add('active');
  }

  function closeDrawer() {
    elements.questionsDrawer.classList.remove('open');
    elements.drawerBackdrop.classList.remove('active');
  }

  // Setup Event Listeners
  function setupEvents() {
    // Theme toggle
    elements.themeToggleBtn.addEventListener('click', () => {
      state.theme = (state.theme === 'light') ? 'dark' : 'light';
      document.body.className = `theme-${state.theme}`;
      elements.themeToggleBtn.querySelector('.icon').textContent = state.theme === 'dark' ? '☀️' : '🌙';
      localStorage.setItem('cs413_theme', state.theme);
    });

    // Sound toggle
    elements.soundToggleBtn.addEventListener('click', () => {
      state.soundEnabled = !state.soundEnabled;
      elements.soundToggleBtn.querySelector('.icon').textContent = state.soundEnabled ? '🔊' : '🔇';
      localStorage.setItem('cs413_sound', state.soundEnabled);
      if (state.soundEnabled) playTone('click');
    });

    // Nav Drawer
    elements.navDrawerBtn.addEventListener('click', openDrawer);
    elements.closeDrawerBtn.addEventListener('click', closeDrawer);
    elements.drawerBackdrop.addEventListener('click', closeDrawer);

    // Mode Tabs
    elements.modeTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        switchMode(tab.dataset.mode);
      });
    });

    // Navigation Buttons
    elements.prevBtn.addEventListener('click', () => {
      if (state.currentIndex > 0) {
        playTone('click');
        renderQuestion(state.currentIndex - 1);
      }
    });

    elements.nextBtn.addEventListener('click', () => {
      if (state.currentIndex < questionsData.length - 1) {
        playTone('click');
        renderQuestion(state.currentIndex + 1);
      }
    });

    elements.clearChoiceBtn.addEventListener('click', clearCurrentChoice);
    elements.flagBtn.addEventListener('click', toggleFlag);
    elements.submitExamBtn.addEventListener('click', () => {
      const answeredCount = Object.keys(state.answers).length;
      const total = questionsData.length;
      if (answeredCount < total) {
        if (!confirm(`لقد قمت بالإجابة على ${answeredCount} من أصل ${total} سؤال. هل تود بالتأكيد إنهاء الاختبار والتصحيح الآن؟`)) {
          return;
        }
      }
      submitExam();
    });

    elements.resetAllProgressBtn.addEventListener('click', resetAll);

    // Drawer Filters
    elements.navFilterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        elements.navFilterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.navFilter = btn.dataset.navfilter;
        renderPalette();
      });
    });

    // Review Filters & Search
    elements.reviewSearchInput.addEventListener('input', (e) => {
      const activeFilterBtn = document.querySelector('.filter-buttons .filter-btn.active');
      const filterType = activeFilterBtn ? activeFilterBtn.dataset.filter : 'all';
      renderAllQuestions(filterType, e.target.value);
    });

    elements.reviewFilterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        elements.reviewFilterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderAllQuestions(btn.dataset.filter, elements.reviewSearchInput.value);
      });
    });

    // Results Actions
    elements.reviewExamMistakesBtn.addEventListener('click', () => {
      state.navFilter = 'wrong';
      elements.navFilterBtns.forEach(b => b.classList.toggle('active', b.dataset.navfilter === 'wrong'));
      elements.resultsViewContainer.style.display = 'none';
      elements.questionViewContainer.style.display = 'block';
      // Find first wrong question
      const firstWrongIdx = questionsData.findIndex(q => {
        const a = state.answers[q.id];
        return a !== undefined && a !== q.correct;
      });
      if (firstWrongIdx !== -1) {
        renderQuestion(firstWrongIdx);
      } else {
        renderQuestion(0);
      }
    });

    elements.retakeExamBtn.addEventListener('click', () => {
      state.answers = {};
      state.isExamSubmitted = false;
      saveStateToStorage();
      switchMode('exam');
      renderQuestion(0);
    });

    elements.backToStudyBtn.addEventListener('click', () => {
      switchMode('study');
    });

    // Keyboard Shortcuts
    window.addEventListener('keydown', (e) => {
      // Don't intercept when searching
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      const key = e.key.toUpperCase();
      if (['A', 'B', 'C', 'D'].includes(key)) {
        handleOptionSelect(key);
      } else if (['1', '2', '3', '4'].includes(e.key)) {
        const map = { '1': 'A', '2': 'B', '3': 'C', '4': 'D' };
        handleOptionSelect(map[e.key]);
      } else if (e.key === 'ArrowLeft') {
        // Next (Arabic RTL layout)
        if (state.currentIndex < questionsData.length - 1) {
          renderQuestion(state.currentIndex + 1);
        }
      } else if (e.key === 'ArrowRight') {
        // Prev
        if (state.currentIndex > 0) {
          renderQuestion(state.currentIndex - 1);
        }
      } else if (e.key === 'f' || e.key === 'F') {
        toggleFlag();
      }
    });
  }

  // Initialization
  function init() {
    loadSavedState();
    setupEvents();
    renderQuestion(state.currentIndex);
    renderPalette();
  }

  init();
})();
