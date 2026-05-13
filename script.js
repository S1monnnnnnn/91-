// ========== 英雄联盟主题数据 ==========
const LOL_CHAMPIONS = [
  { en:"Yasuo",zh:"亚索",title:"疾风剑豪",c1:"#1a365d",c2:"#2b6cb0",img:"Yasuo" },
  { en:"Ahri",zh:"阿狸",title:"九尾妖狐",c1:"#3b0764",c2:"#a855f7",img:"Ahri" },
  { en:"Zed",zh:"劫",title:"影流之主",c1:"#1a1a2e",c2:"#e53e3e",img:"Zed" },
  { en:"Jinx",zh:"金克丝",title:"暴走萝莉",c1:"#1a202c",c2:"#f56565",img:"Jinx" },
  { en:"Lux",zh:"拉克丝",title:"光辉女郎",c1:"#1e3a5f",c2:"#fbbf24",img:"Lux" },
  { en:"Riven",zh:"锐雯",title:"放逐之刃",c1:"#1c4532",c2:"#48bb78",img:"Riven" },
  { en:"Akali",zh:"阿卡丽",title:"离群之刺",c1:"#1a202c",c2:"#38b2ac",img:"Akali" },
  { en:"Lee Sin",zh:"李青",title:"盲僧",c1:"#2d1b00",c2:"#ed8936",img:"LeeSin" },
  { en:"Katarina",zh:"卡特琳娜",title:"不祥之刃",c1:"#742a2a",c2:"#f6ad55",img:"Katarina" },
  { en:"Ezreal",zh:"伊泽瑞尔",title:"探险家",c1:"#1e3a5f",c2:"#f6e05e",img:"Ezreal" },
  { en:"Thresh",zh:"锤石",title:"魂锁典狱长",c1:"#1a202c",c2:"#38a169",img:"Thresh" },
  { en:"Teemo",zh:"提莫",title:"迅捷斥候",c1:"#276749",c2:"#c6f6d5",img:"Teemo" },
  { en:"Kayn",zh:"凯隐",title:"影流之镰",c1:"#1a202c",c2:"#9f7aea",img:"Kayn" },
  { en:"Yone",zh:"永恩",title:"封魔剑魂",c1:"#2a4365",c2:"#63b3ed",img:"Yone" },
  { en:"Darius",zh:"德莱厄斯",title:"诺克萨斯之手",c1:"#742a2a",c2:"#fc8181",img:"Darius" },
  { en:"Jhin",zh:"烬",title:"戏命师",c1:"#1a202c",c2:"#b794f4",img:"Jhin" },
  { en:"Ekko",zh:"艾克",title:"时间刺客",c1:"#1c4532",c2:"#68d391",img:"Ekko" },
  { en:"Leona",zh:"蕾欧娜",title:"曙光女神",c1:"#744210",c2:"#fbd38d",img:"Leona" },
  { en:"Fiora",zh:"菲奥娜",title:"无双剑姬",c1:"#2d3748",c2:"#a0aec0",img:"Fiora" },
  { en:"Kindred",zh:"千珏",title:"永猎双子",c1:"#1a202c",c2:"#f6e05e",img:"Kindred" },
  { en:"Miss Fortune",zh:"厄运小姐",title:"赏金猎人",c1:"#742a2a",c2:"#f6ad55",img:"MissFortune" },
  { en:"Garen",zh:"盖伦",title:"德玛西亚之力",c1:"#1e3a5f",c2:"#ecc94b",img:"Garen" },
  { en:"Sett",zh:"瑟提",title:"腕豪",c1:"#3b0764",c2:"#ed64a6",img:"Sett" },
  { en:"Vayne",zh:"薇恩",title:"暗夜猎手",c1:"#1a202c",c2:"#c53030",img:"Vayne" },
  { en:"Caitlyn",zh:"凯特琳",title:"皮城女警",c1:"#2d3748",c2:"#e2e8f0",img:"Caitlyn" },
  { en:"Viego",zh:"佛耶戈",title:"破败之王",c1:"#1a202c",c2:"#38b2ac",img:"Viego" },
  { en:"Zoe",zh:"佐伊",title:"暮光星灵",c1:"#553c9a",c2:"#fbb6ce",img:"Zoe" },
  { en:"Sylas",zh:"塞拉斯",title:"解脱者",c1:"#1a202c",c2:"#b794f4",img:"Sylas" },
  { en:"Aphelios",zh:"厄斐琉斯",title:"残月之肃",c1:"#1a202c",c2:"#63b3ed",img:"Aphelios" },
  { en:"Kai'Sa",zh:"卡莎",title:"虚空之女",c1:"#44337a",c2:"#9f7aea",img:"Kaisa" },
  { en:"Irelia",zh:"艾瑞莉娅",title:"刀锋舞者",c1:"#2a4365",c2:"#fc8181",img:"Irelia" },
  { en:"Samira",zh:"莎弥拉",title:"沙漠玫瑰",c1:"#742a2a",c2:"#f6e05e",img:"Samira" },
  { en:"Seraphine",zh:"萨勒芬妮",title:"星籁歌姬",c1:"#553c9a",c2:"#fbb6ce",img:"Seraphine" },
  { en:"Aatrox",zh:"亚托克斯",title:"暗裔剑魔",c1:"#1a202c",c2:"#e53e3e",img:"Aatrox" },
  { en:"Neeko",zh:"妮蔻",title:"万花通灵",c1:"#276749",c2:"#f6e05e",img:"Neeko" },
  { en:"Pyke",zh:"派克",title:"血港鬼影",c1:"#1a202c",c2:"#38a169",img:"Pyke" },
  { en:"Senna",zh:"赛娜",title:"涤魂圣枪",c1:"#1a202c",c2:"#f6e05e",img:"Senna" },
  { en:"Diana",zh:"黛安娜",title:"皎月女神",c1:"#2d3748",c2:"#c4b5fd",img:"Diana" },
  { en:"Talon",zh:"泰隆",title:"刀锋之影",c1:"#1a202c",c2:"#718096",img:"Talon" },
  { en:"Warwick",zh:"沃里克",title:"祖安怒兽",c1:"#742a2a",c2:"#38a169",img:"Warwick" },
  { en:"Mordekaiser",zh:"莫德凯撒",title:"铁铠冥魂",c1:"#1a202c",c2:"#38a169",img:"Mordekaiser" },
  { en:"Pantheon",zh:"潘森",title:"不屈之枪",c1:"#2d1b00",c2:"#f6ad55",img:"Pantheon" },
  { en:"Gwen",zh:"格温",title:"灵罗娃娃",c1:"#553c9a",c2:"#68d391",img:"Gwen" },
  { en:"Nami",zh:"娜美",title:"唤潮鲛姬",c1:"#1e3a5f",c2:"#63b3ed",img:"Nami" },
  { en:"Soraka",zh:"索拉卡",title:"众星之子",c1:"#3b0764",c2:"#fbb6ce",img:"Soraka" },
  { en:"Lillia",zh:"莉莉娅",title:"含羞蓓蕾",c1:"#276749",c2:"#fefcbf",img:"Lillia" },
  { en:"Volibear",zh:"沃利贝尔",title:"不灭狂雷",c1:"#1a202c",c2:"#4299e1",img:"Volibear" },
  { en:"Ornn",zh:"奥恩",title:"山隐之焰",c1:"#744210",c2:"#ed8936",img:"Ornn" },
  { en:"Kled",zh:"克烈",title:"暴怒骑士",c1:"#742a2a",c2:"#ecc94b",img:"Kled" },
  { en:"Twisted Fate",zh:"崔斯特",title:"卡牌大师",c1:"#2d3748",c2:"#ecc94b",img:"TwistedFate" }
];

function getChampionForWord(wordEn) {
  let hash = 0;
  for (let i = 0; i < wordEn.length; i++) hash = ((hash << 5) - hash) + wordEn.charCodeAt(i);
  return LOL_CHAMPIONS[Math.abs(hash) % LOL_CHAMPIONS.length];
}

// ========== 数据管理 ==========
const STORAGE_KEY = 'vocab91_progress';
const REVIEW_KEY = 'vocab91_review';
const LEVEL_KEY = 'vocab91_level';
const FAVORITES_KEY = 'vocab91_favorites';

function loadFavorites() { try { return JSON.parse(localStorage.getItem(FAVORITES_KEY)) || []; } catch { return []; } }
function saveFavorites(favs) { localStorage.setItem(FAVORITES_KEY, JSON.stringify(favs)); }
function isFavorited(wordEn) { return loadFavorites().includes(wordEn); }
function addFavorite(wordEn) {
  const favs = loadFavorites();
  if (!favs.includes(wordEn)) { favs.push(wordEn); saveFavorites(favs); }
}
function removeFavorite(wordEn) {
  const favs = loadFavorites();
  const idx = favs.indexOf(wordEn);
  if (idx >= 0) { favs.splice(idx, 1); saveFavorites(favs); }
}
function toggleFavorite(wordEn) {
  if (isFavorited(wordEn)) removeFavorite(wordEn);
  else addFavorite(wordEn);
}

function loadProgress() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; } catch { return {}; }
}
function saveProgress(p) { localStorage.setItem(STORAGE_KEY, JSON.stringify(p)); }
function getWordStatus(word) { return loadProgress()[word.en] || 'unknown'; }
function setWordStatus(word, status) {
  const p = loadProgress(); p[word.en] = status; saveProgress(p);
}

// ========== SM-2 艾宾浩斯复习系统 ==========
function loadReview() { try { return JSON.parse(localStorage.getItem(REVIEW_KEY)) || {}; } catch { return {}; } }
function saveReview(r) { localStorage.setItem(REVIEW_KEY, JSON.stringify(r)); }

function getReviewState(wordEn) {
  const r = loadReview();
  return r[wordEn] || { interval: 0, ease: 2.5, reps: 0, nextReview: 0 };
}

function updateReviewState(wordEn, quality) {
  const r = loadReview();
  const s = r[wordEn] || { interval: 0, ease: 2.5, reps: 0, nextReview: 0 };
  const firstTime = (s.reps === 0);
  if (quality === 0) {
    s.interval = 1; s.reps = 0;
  } else {
    if (s.reps === 0) s.interval = 1;
    else if (s.reps === 1) s.interval = 2;
    else s.interval = Math.round(s.interval * s.ease);
    s.ease = Math.max(1.3, s.ease + (0.1 - (3 - quality) * (0.08 + (3 - quality) * 0.02)));
    s.reps++;
  }
  s.nextReview = firstTime ? 0 : Date.now() + s.interval * 24 * 60 * 60 * 1000;
  r[wordEn] = s;
  saveReview(r);
  setWordStatus({ en: wordEn }, 'mastered');
}

function getDueWords() {
  const now = Date.now();
  const r = loadReview();
  const pool = getActivePool();
  return pool.filter(w => {
    const s = r[w.en];
    return s && s.nextReview >= 0 && s.nextReview <= now;
  });
}

function getDueCount() {
  return getDueWords().length;
}

function updateReviewForQuiz(word) {
  const rs = getReviewState(word.en);
  if (rs.nextReview === 0) {
    updateReviewState(word.en, 2);
  }
}

const INTERVAL_NAMES = { 1: '1天', 2: '2天', 3: '4天', 4: '7天', 5: '15天', 6: '30天', 7: '60天' };
function fmtInterval(interval) {
  if (interval < 2) return '1天';
  if (interval < 4) return Math.round(interval) + '天';
  return Math.round(interval) + '天';
}

// ========== 词库 ==========
const ALL_WORDS = [...CET4_WORDS, ...KAOYAN_WORDS];

function getActivePool() {
  const lv = document.getElementById('header-level').value;
  if (lv === 'all') return ALL_WORDS;
  return ALL_WORDS.filter(w => w.level === lv);
}

function getLearnedCount() {
  const pool = getActivePool();
  const progress = loadProgress();
  return pool.filter(w => progress[w.en] === 'mastered').length;
}

function getProgressPercent() {
  const pool = getActivePool();
  if (pool.length === 0) return 0;
  return Math.round((getLearnedCount() / pool.length) * 100);
}

// ========== 存储键 ==========
const FLASHCARD_STATE_KEY = 'vocab91_fs_state';

function saveFlashcardState(state) { localStorage.setItem(FLASHCARD_STATE_KEY, JSON.stringify(state)); }
function loadFlashcardState() { try { return JSON.parse(localStorage.getItem(FLASHCARD_STATE_KEY)); } catch { return null; } }

// ========== 级别切换 ==========
document.getElementById('header-level').addEventListener('change', () => {
  resetFlashcard();
  updateStats();
});

// ========== Tab 切换 ==========
document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
    const tab = document.getElementById(btn.dataset.tab + '-tab');
    if (tab) tab.classList.add('active');
    if (btn.dataset.tab === 'wordlist') renderWordList();
    if (btn.dataset.tab === 'favorites') renderFavorites();
    if (btn.dataset.tab === 'flashcard') updateStats();
    if (btn.dataset.tab === 'review') startReview();
  });
});

// ========== 统计更新 ==========
function updateStats() {
  const pool = getActivePool();
  document.getElementById('learned-count').textContent = getLearnedCount();
  document.getElementById('progress-percent').textContent = getProgressPercent() + '%';
}
updateStats();

// ========== 辅助函数 ==========
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function renderPhrasesHTML(phrases) {
  if (!phrases || phrases.length === 0) return '';
  return phrases.map(p =>
    '<div class="card-phrase-item"><span class="card-phrase-en">' + p.en + '</span><span class="card-phrase-sep">-</span><span class="card-phrase-zh">' + p.zh + '</span></div>'
  ).join('');
}

// ========== 闪卡模式 ==========
let currentIndex = 0;
let isRandom = false;
let flashcardHistory = [];

function getFlashcardWord() {
  const pool = getActivePool();
  if (pool.length === 0) return null;
  if (flashcardHistory.length >= pool.length) flashcardHistory = [];
  if (isRandom) {
    const available = [];
    for (let i = 0; i < pool.length; i++) {
      if (!flashcardHistory.includes(i)) available.push(i);
    }
    if (available.length === 0) {
      flashcardHistory = [];
      for (let i = 0; i < pool.length; i++) available.push(i);
    }
    const idx = available[Math.floor(Math.random() * available.length)];
    flashcardHistory.push(idx);
    return { idx, word: pool[idx], total: pool.length };
  }
  if (currentIndex >= pool.length) { currentIndex = 0; flashcardHistory = []; }
  return { idx: currentIndex, word: pool[currentIndex], total: pool.length };
}

function renderFlashcard() {
  const result = getFlashcardWord();
  if (!result) {
    document.getElementById('card-word').textContent = '无单词';
    return;
  }
  const { idx, word, total } = result;
  const champion = getChampionForWord(word.en);
  const card = document.getElementById('flashcard');
  card.classList.remove('flipped');

  // 英雄主题色 & 背景图
  const imgUrl = 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/' + champion.img + '_0.jpg';
  card.style.setProperty('--champ-c1', champion.c1);
  card.style.setProperty('--champ-c2', champion.c2);
  card.style.setProperty('--champ-img', 'url(' + imgUrl + ')');

  document.getElementById('card-phonetic').textContent = word.phonetic || '';
  document.getElementById('card-word').textContent = word.en;
  document.getElementById('card-meaning').textContent = word.zh;
  document.getElementById('card-extra').textContent = word.phonetic || '';
  document.getElementById('card-phrases').innerHTML = renderPhrasesHTML(word.phrases);
  document.getElementById('card-progress-text').textContent = '第 ' + (idx + 1) + ' / ' + total + ' 个';
  document.getElementById('card-index-text').textContent = (idx + 1) + ' / ' + total;

  // 英雄信息
  const champInfo = champion.en + ' · ' + champion.title + ' ' + champion.zh;
  document.getElementById('card-champ-name').textContent = champInfo;
  document.getElementById('card-champ-name-back').textContent = champInfo;

  // Level tag
  const lvTag = document.getElementById('card-level-tag');
  lvTag.textContent = word.level === 'kaoyan' ? '考研' : 'CET-4';
  lvTag.className = 'level-tag ' + word.level;

  card.dataset.wordIndex = idx;
  card.dataset.wordEn = word.en;

  // 收藏状态
  const btnFav = document.getElementById('btn-fav');
  btnFav.textContent = isFavorited(word.en) ? '★' : '☆';
  btnFav.style.color = isFavorited(word.en) ? '#f59e0b' : '';
  btnFav.dataset.wordEn = word.en;
}

function flipCard() {
  const card = document.getElementById('flashcard');
  card.classList.toggle('flipped');
  const front = card.querySelector('.card-front');
  front.style.outline = card.classList.contains('flipped') ? '5px solid lime' : '5px solid yellow';
}

function nextFlashcard() {
  if (!isRandom) currentIndex++;
  saveCurrentState();
  renderFlashcard();
}

function markWord(status) {
  const en = document.getElementById('flashcard').dataset.wordEn;
  if (!en) return;
  const pool = getActivePool();
  const word = pool.find(w => w.en === en);
  if (!word) return;
  setWordStatus(word, status);
  if (status === 'mastered') {
    const rs = getReviewState(word.en);
    if (rs.nextReview === 0) {
      updateReviewState(word.en, 2);
    }
    updateReviewBadge();
  }
  updateStats();
  if (status === 'mastered') { setTimeout(() => nextFlashcard(), 300); }
  else { nextFlashcard(); }
}

function resetFlashcard() {
  currentIndex = 0;
  flashcardHistory = [];
  saveCurrentState();
  renderFlashcard();
  updateStats();
}

function saveCurrentState() {
  saveFlashcardState({ currentIndex, isRandom, flashcardHistory });
}

function loadCurrentState() {
  const state = loadFlashcardState();
  if (state) {
    currentIndex = state.currentIndex || 0;
    isRandom = state.isRandom || false;
    flashcardHistory = state.flashcardHistory || [];
  }
}

document.getElementById('flashcard').addEventListener('click', flipCard);
document.getElementById('btn-forgot').addEventListener('click', () => markWord('unknown'));
document.getElementById('btn-vague').addEventListener('click', () => markWord('familiar'));
document.getElementById('btn-know').addEventListener('click', () => markWord('mastered'));
document.getElementById('btn-random').addEventListener('click', () => {
  isRandom = true; flashcardHistory = [];
  document.getElementById('card-progress-text').textContent = '随机模式';
  saveCurrentState(); renderFlashcard();
});
document.getElementById('btn-order').addEventListener('click', () => {
  isRandom = false; flashcardHistory = [];
  saveCurrentState(); renderFlashcard();
});

// 收藏按钮
document.getElementById('btn-fav').addEventListener('click', (e) => {
  e.stopPropagation();
  const en = document.getElementById('flashcard').dataset.wordEn;
  if (!en) return;
  toggleFavorite(en);
  renderFlashcard();
  updateFavBadge();
});
document.getElementById('btn-review-fav').addEventListener('click', (e) => {
  e.stopPropagation();
  const en = document.getElementById('btn-review-fav').dataset.wordEn;
  if (!en) return;
  toggleFavorite(en);
  const card = document.getElementById('review-card');
  const btn = document.getElementById('btn-review-fav');
  btn.textContent = isFavorited(en) ? '★' : '☆';
  btn.style.color = isFavorited(en) ? '#f59e0b' : '';
  updateFavBadge();
});

// 快速搜索跳转
document.getElementById('quick-search').addEventListener('input', function() {
  const q = this.value.trim().toLowerCase();
  if (!q || q.length < 2) return;
  const pool = getActivePool();
  const found = pool.find(w => w.en.toLowerCase() === q);
  if (found) {
    const poolIdx = pool.indexOf(found);
    currentIndex = poolIdx;
    flashcardHistory = [];
    isRandom = false;
    saveCurrentState();
    renderFlashcard();
    this.value = '';
  }
});
document.getElementById('quick-search').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    const q = this.value.trim().toLowerCase();
    if (!q || q.length < 1) return;
    const pool = getActivePool();
    const found = pool.find(w => w.en.toLowerCase().startsWith(q) || w.en.toLowerCase().includes(q));
    if (found) {
      const poolIdx = pool.indexOf(found);
      currentIndex = poolIdx;
      flashcardHistory = [];
      isRandom = false;
      saveCurrentState();
      renderFlashcard();
      this.value = '';
    }
  }
});

function updateFavBadge() {
  const count = loadFavorites().length;
  const badge = document.getElementById('fav-badge');
  badge.textContent = count;
  badge.style.display = count > 0 ? 'inline' : 'none';
}

document.addEventListener('keydown', (e) => {
  const activeTab = document.querySelector('.tab-content.active');
  if (!activeTab || activeTab.id !== 'flashcard-tab') return;
  if (e.key === ' ' || e.key === 'Spacebar') { e.preventDefault(); flipCard(); }
  else if (e.key === 'ArrowLeft') markWord('unknown');
  else if (e.key === 'ArrowDown') markWord('familiar');
  else if (e.key === 'ArrowRight') markWord('mastered');
});

// ========== 测验模式 ==========
let quizWords = [], quizCurrentQuestion = 0, quizScore = 0, quizTotal = 0;

function generateQuiz(count) {
  const pool = getActivePool();
  const shuffled = shuffleArray([...pool]).slice(0, Math.min(count, pool.length));
  return shuffled.map(w => {
    const wrongOptions = shuffleArray(pool.filter(x => x.en !== w.en)).slice(0, 3);
    const options = shuffleArray([w.zh, ...wrongOptions.map(x => x.zh)]);
    const correctIndex = options.indexOf(w.zh);
    return { word: w, options, correctIndex, userAnswer: null, isCorrect: null };
  });
}

function startQuiz() {
  const count = parseInt(document.getElementById('quiz-count').value);
  quizWords = generateQuiz(count);
  quizCurrentQuestion = 0; quizScore = 0; quizTotal = quizWords.length;
  document.getElementById('quiz-body').style.display = 'block';
  document.getElementById('quiz-result').style.display = 'none';
  document.getElementById('btn-start-quiz').style.display = 'none';
  renderQuizQuestion();
}

function renderQuizQuestion() {
  if (quizCurrentQuestion >= quizWords.length) { showQuizResult(); return; }
  const q = quizWords[quizCurrentQuestion];
  const w = q.word;
  document.getElementById('quiz-number').textContent = '第 ' + (quizCurrentQuestion + 1) + ' / ' + quizTotal + ' 题';
  document.getElementById('quiz-question').textContent = w.en;
  document.getElementById('quiz-phonetic').textContent = w.phonetic || '';
  document.getElementById('quiz-bar-fill').style.width = (quizCurrentQuestion / quizTotal * 100) + '%';

  const opts = document.getElementById('quiz-options');
  opts.innerHTML = '';
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = String.fromCharCode(65 + i) + '. ' + opt;
    btn.addEventListener('click', () => selectQuizAnswer(i));
    opts.appendChild(btn);
  });

  document.getElementById('quiz-feedback').textContent = '';
  document.getElementById('quiz-feedback').className = 'quiz-feedback';
  document.getElementById('quiz-phrases').innerHTML = '';
  document.getElementById('quiz-phrases').style.display = 'none';
  document.getElementById('btn-next-quiz').style.display = 'none';
}

function selectQuizAnswer(index) {
  const q = quizWords[quizCurrentQuestion];
  if (q.userAnswer !== null) return;
  q.userAnswer = index;
  q.isCorrect = index === q.correctIndex;
  if (q.isCorrect) { quizScore++; setWordStatus(q.word, 'mastered'); updateReviewForQuiz(q.word); }
  else { setWordStatus(q.word, 'unknown'); }
  updateStats();
  updateReviewBadge();

  const options = document.querySelectorAll('.option-btn');
  options.forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.correctIndex) btn.classList.add('correct');
    if (i === index && !q.isCorrect) btn.classList.add('wrong');
  });

  const fb = document.getElementById('quiz-feedback');
  if (q.isCorrect) { fb.textContent = '正确！'; fb.className = 'quiz-feedback correct-text'; }
  else { fb.textContent = '错误！正确答案是：' + q.options[q.correctIndex]; fb.className = 'quiz-feedback wrong-text'; }

  // Show phrases
  if (q.word.phrases && q.word.phrases.length > 0) {
    const phraseDiv = document.getElementById('quiz-phrases');
    phraseDiv.innerHTML = '<div class="quiz-phrases-label">实用短语</div>' +
      q.word.phrases.map(p => '<div class="quiz-phrase-item"><strong>' + p.en + '</strong><span class="quiz-phrase-zh">' + p.zh + '</span></div>').join('');
    phraseDiv.style.display = 'block';
  }

  document.getElementById('btn-next-quiz').style.display = 'inline-block';
  document.getElementById('btn-next-quiz').focus();
}

function nextQuizQuestion() {
  quizCurrentQuestion++;
  if (quizCurrentQuestion >= quizWords.length) showQuizResult();
  else renderQuizQuestion();
}

function showQuizResult() {
  document.getElementById('quiz-body').style.display = 'none';
  document.getElementById('quiz-result').style.display = 'block';
  const pct = Math.round((quizScore / quizTotal) * 100);
  document.getElementById('result-score').textContent = quizScore + ' / ' + quizTotal;
  document.getElementById('result-detail').textContent =
    '正确率 ' + pct + '%' + (pct >= 80 ? ' 优秀！' : pct >= 60 ? ' 继续加油！' : ' 多复习哦！');
  document.getElementById('btn-start-quiz').style.display = 'none';
}

function retryQuiz() {
  document.getElementById('quiz-result').style.display = 'none';
  document.getElementById('btn-start-quiz').style.display = 'inline-block';
  document.getElementById('quiz-body').style.display = 'none';
}

document.getElementById('btn-start-quiz').addEventListener('click', startQuiz);
document.getElementById('btn-next-quiz').addEventListener('click', nextQuizQuestion);
document.getElementById('btn-retry').addEventListener('click', retryQuiz);

// ========== 单词列表 ==========
let wordListPage = 1;
const WORDS_PER_PAGE = 20;

function renderWordList() {
  const search = document.getElementById('search-input').value.toLowerCase();
  const filter = document.getElementById('filter-status').value;
  let filtered = getActivePool();

  if (search) {
    filtered = filtered.filter(w =>
      w.en.toLowerCase().includes(search) || w.zh.includes(search)
    );
  }
  if (filter !== 'all') {
    filtered = filtered.filter(w => getWordStatus(w) === filter);
  }

  document.getElementById('wordlist-count').textContent = '共 ' + filtered.length + ' 个单词';

  const totalPages = Math.ceil(filtered.length / WORDS_PER_PAGE) || 1;
  if (wordListPage > totalPages) wordListPage = totalPages;
  const start = (wordListPage - 1) * WORDS_PER_PAGE;
  const pageWords = filtered.slice(start, start + WORDS_PER_PAGE);

  const tbody = document.getElementById('wordlist-body');
  tbody.innerHTML = '';
  pageWords.forEach((w, i) => {
    const tr = document.createElement('tr');
    const status = getWordStatus(w);
    const statusMap = { mastered: '已掌握', familiar: '模糊', unknown: '未学' };
    const statusClassMap = { mastered: 'status-mastered', familiar: 'status-familiar', unknown: 'status-unknown' };
    const levelLabel = w.level === 'kaoyan' ? '考研' : 'CET-4';
    const levelClass = w.level;

    let phrasesHTML = '';
    if (w.phrases && w.phrases.length > 0) {
      phrasesHTML = w.phrases.map(p =>
        '<div class="wl-phrase-item"><span class="wl-phrase-en">' + p.en + '</span><br><span class="wl-phrase-zh">' + p.zh + '</span></div>'
      ).join('');
    }

    tr.innerHTML = `
      <td class="col-no">${start + i + 1}</td>
      <td class="col-word">${w.en}</td>
      <td class="col-phonetic">${w.phonetic || ''}</td>
      <td>${w.zh}</td>
      <td class="col-phrases">${phrasesHTML}</td>
      <td class="col-level"><span class="level-tag ${levelClass}">${levelLabel}</span></td>
      <td class="col-status"><span class="status-tag ${statusClassMap[status]}">${statusMap[status]}</span></td>
    `;
    tbody.appendChild(tr);
  });

  const pagination = document.getElementById('pagination');
  pagination.innerHTML = `
    <button class="page-jump-btn" id="page-prev" ${wordListPage <= 1 ? 'disabled' : ''}>上一页</button>
    <span class="page-jump-info">
      <input type="number" class="page-jump-input" id="page-jump-input" value="${wordListPage}" min="1" max="${totalPages}">
      <span class="page-jump-total">/ ${totalPages} 页</span>
    </span>
    <button class="page-jump-btn" id="page-next" ${wordListPage >= totalPages ? 'disabled' : ''}>下一页</button>
  `;
  document.getElementById('page-prev').addEventListener('click', () => {
    if (wordListPage > 1) { wordListPage--; renderWordList(); }
  });
  document.getElementById('page-next').addEventListener('click', () => {
    if (wordListPage < totalPages) { wordListPage++; renderWordList(); }
  });
  document.getElementById('page-jump-input').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const v = parseInt(e.target.value);
      if (v >= 1 && v <= totalPages) { wordListPage = v; renderWordList(); }
      else { e.target.value = wordListPage; }
    }
  });
}

document.getElementById('search-input').addEventListener('input', () => { wordListPage = 1; renderWordList(); });
document.getElementById('filter-status').addEventListener('change', () => { wordListPage = 1; renderWordList(); });

// ========== 收藏夹 ==========
let favWordListPage = 1;
const FAV_WORDS_PER_PAGE = 20;

function renderFavorites() {
  const favEns = loadFavorites();
  const search = document.getElementById('fav-search-input').value.toLowerCase();
  let favWords = ALL_WORDS.filter(w => favEns.includes(w.en));
  if (search) {
    favWords = favWords.filter(w =>
      w.en.toLowerCase().includes(search) || w.zh.includes(search)
    );
  }

  document.getElementById('fav-count').textContent = '共 ' + favWords.length + ' 个收藏';

  const totalPages = Math.ceil(favWords.length / FAV_WORDS_PER_PAGE) || 1;
  if (favWordListPage > totalPages) favWordListPage = totalPages;
  const start = (favWordListPage - 1) * FAV_WORDS_PER_PAGE;
  const pageWords = favWords.slice(start, start + FAV_WORDS_PER_PAGE);

  const tbody = document.getElementById('fav-body');
  tbody.innerHTML = '';
  pageWords.forEach((w, i) => {
    const tr = document.createElement('tr');
    let phrasesHTML = '';
    if (w.phrases && w.phrases.length > 0) {
      phrasesHTML = w.phrases.map(p =>
        '<div class="wl-phrase-item"><span class="wl-phrase-en">' + p.en + '</span><br><span class="wl-phrase-zh">' + p.zh + '</span></div>'
      ).join('');
    }
    const levelLabel = w.level === 'kaoyan' ? '考研' : 'CET-4';
    tr.innerHTML = `
      <td class="col-no">${start + i + 1}</td>
      <td class="col-word">${w.en}</td>
      <td class="col-phonetic">${w.phonetic || ''}</td>
      <td>${w.zh}</td>
      <td class="col-phrases">${phrasesHTML}</td>
      <td class="col-level"><span class="level-tag ${w.level}">${levelLabel}</span></td>
      <td class="col-status"><button class="btn-fav-remove" data-word="${w.en}">★ 取消</button></td>
    `;
    tbody.appendChild(tr);
  });

  // remove buttons
  tbody.querySelectorAll('.btn-fav-remove').forEach(btn => {
    btn.addEventListener('click', () => {
      removeFavorite(btn.dataset.word);
      updateFavBadge();
      renderFavorites();
      const cardEn = document.getElementById('flashcard').dataset.wordEn;
      if (cardEn && cardEn === btn.dataset.word) {
        document.getElementById('btn-fav').textContent = '☆';
        document.getElementById('btn-fav').style.color = '';
      }
    });
  });

  const pagination = document.getElementById('fav-pagination');
  pagination.innerHTML = `
    <button class="page-jump-btn" id="fav-prev" ${favWordListPage <= 1 ? 'disabled' : ''}>上一页</button>
    <span class="page-jump-info">
      <input type="number" class="page-jump-input" id="fav-page-input" value="${favWordListPage}" min="1" max="${totalPages}">
      <span class="page-jump-total">/ ${totalPages} 页</span>
    </span>
    <button class="page-jump-btn" id="fav-next" ${favWordListPage >= totalPages ? 'disabled' : ''}>下一页</button>
  `;
  document.getElementById('fav-prev').addEventListener('click', () => {
    if (favWordListPage > 1) { favWordListPage--; renderFavorites(); }
  });
  document.getElementById('fav-next').addEventListener('click', () => {
    if (favWordListPage < totalPages) { favWordListPage++; renderFavorites(); }
  });
  document.getElementById('fav-page-input').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const v = parseInt(e.target.value);
      if (v >= 1 && v <= totalPages) { favWordListPage = v; renderFavorites(); }
      else { e.target.value = favWordListPage; }
    }
  });
}

document.getElementById('fav-search-input').addEventListener('input', () => { favWordListPage = 1; renderFavorites(); });

// ========== 智態复习模式 (SM-2) ==========
let reviewQueue = [];
let reviewDone = 0;
let reviewTotal = 0;
let reviewFlipped = false;

function startReview() {
  reviewQueue = shuffleArray(getDueWords());
  reviewDone = 0;
  reviewTotal = reviewQueue.length;
  reviewFlipped = false;

  document.getElementById('review-active').style.display = reviewQueue.length > 0 ? 'block' : 'none';
  document.getElementById('review-empty').style.display = reviewQueue.length === 0 ? 'block' : 'none';
  document.getElementById('review-complete').style.display = 'none';
  updateReviewStats();

  if (reviewQueue.length > 0) {
    renderReviewCard();
  }
}

function updateReviewStats() {
  document.getElementById('review-due-count').textContent = reviewTotal;
  document.getElementById('review-done-count').textContent = reviewDone;
  document.getElementById('review-total-count').textContent = reviewTotal;
  const pct = reviewTotal > 0 ? Math.round((reviewDone / reviewTotal) * 100) : 0;
  document.getElementById('review-progress-fill').style.width = pct + '%';
}

function renderReviewCard() {
  if (reviewQueue.length === 0) {
    showReviewComplete();
    return;
  }
  const word = reviewQueue[0];
  const champion = getChampionForWord(word.en);
  const card = document.getElementById('review-card');
  card.classList.remove('flipped');
  reviewFlipped = false;

  const imgUrl = 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/' + champion.img + '_0.jpg';
  card.style.setProperty('--champ-c1', champion.c1);
  card.style.setProperty('--champ-c2', champion.c2);
  card.style.setProperty('--champ-img', 'url(' + imgUrl + ')');

  const champInfo = champion.en + ' · ' + champion.title + ' ' + champion.zh;
  document.getElementById('review-champ-name').textContent = champInfo;
  document.getElementById('review-champ-name-back').textContent = champInfo;
  document.getElementById('review-phonetic').textContent = word.phonetic || '';
  document.getElementById('review-word').textContent = word.en;
  document.getElementById('review-meaning').textContent = word.zh;
  document.getElementById('review-extra').textContent = word.phonetic || '';
  document.getElementById('review-phrases').innerHTML = renderPhrasesHTML(word.phrases);

  const lvTag = document.getElementById('review-level-tag');
  lvTag.textContent = word.level === 'kaoyan' ? '考研' : 'CET-4';
  lvTag.className = 'level-tag ' + word.level;

  const rs = getReviewState(word.en);
  document.getElementById('review-interval').textContent = '间隔: ' + fmtInterval(rs.interval);

  // 收藏状态
  const btnRFav = document.getElementById('btn-review-fav');
  btnRFav.textContent = isFavorited(word.en) ? '★' : '☆';
  btnRFav.style.color = isFavorited(word.en) ? '#f59e0b' : '';
  btnRFav.dataset.wordEn = word.en;
}

function flipReviewCard() {
  const card = document.getElementById('review-card');
  card.classList.toggle('flipped');
  reviewFlipped = !reviewFlipped;
}

function answerReview(quality) {
  const word = reviewQueue.shift();
  if (!word) return;
  updateReviewState(word.en, quality);
  reviewDone++;
  updateReviewStats();
  updateReviewBadge();
  updateStats();
  renderReviewCard();
}

function showReviewComplete() {
  document.getElementById('review-active').style.display = 'none';
  document.getElementById('review-complete').style.display = 'block';
  document.getElementById('review-complete-count').textContent = reviewDone;
  updateReviewBadge();
}

function updateReviewBadge() {
  const badge = document.getElementById('review-badge');
  const count = getDueCount();
  badge.textContent = count;
  badge.style.display = count > 0 ? 'inline' : 'none';
}

// Review event bindings
document.getElementById('review-card').addEventListener('click', flipReviewCard);
document.getElementById('review-forgot').addEventListener('click', () => answerReview(0));
document.getElementById('review-hard').addEventListener('click', () => answerReview(1));
document.getElementById('review-good').addEventListener('click', () => answerReview(2));
document.getElementById('review-easy').addEventListener('click', () => answerReview(3));
document.getElementById('review-complete-back').addEventListener('click', () => {
  document.querySelector('[data-tab="flashcard"]').click();
});

// Review keyboard shortcuts
document.addEventListener('keydown', (e) => {
  const activeTab = document.querySelector('.tab-content.active');
  if (!activeTab || activeTab.id !== 'review-tab') return;
  if (e.key === ' ' || e.key === 'Spacebar') { e.preventDefault(); flipReviewCard(); }
  else if (e.key === '1' || e.key === 'ArrowLeft') answerReview(0);
  else if (e.key === '2' || e.key === 'ArrowDown') answerReview(1);
  else if (e.key === '3') answerReview(2);
  else if (e.key === '4' || e.key === 'ArrowRight') answerReview(3);
});

// ========== 初始化 ==========
function init() {
  loadCurrentState();
  renderFlashcard();
  updateStats();
  updateReviewBadge();
  updateFavBadge();
}
init();
