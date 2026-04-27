// ============================================================
// SPANISHSNAP — Flashcard Data & App Logic
// ============================================================

// ----- VOCABULARY DATA -----
// Organized by level → category → array of { en, es } pairs

const VOCAB = {
  beginner: {
    greetings: [
      { en: "Hello", es: "Hola" },
      { en: "Goodbye", es: "Adiós" },
      { en: "Good morning", es: "Buenos días" },
      { en: "Good afternoon", es: "Buenas tardes" },
      { en: "Good night", es: "Buenas noches" },
      { en: "Please", es: "Por favor" },
      { en: "Thank you", es: "Gracias" },
      { en: "You're welcome", es: "De nada" },
      { en: "Yes", es: "Sí" },
      { en: "No", es: "No" },
      { en: "Excuse me", es: "Perdón" },
      { en: "Sorry", es: "Lo siento" },
      { en: "How are you?", es: "¿Cómo estás?" },
      { en: "I'm fine", es: "Estoy bien" },
      { en: "Nice to meet you", es: "Mucho gusto" },
      { en: "See you later", es: "Hasta luego" },
      { en: "See you tomorrow", es: "Hasta mañana" },
      { en: "What's your name?", es: "¿Cómo te llamas?" },
      { en: "My name is…", es: "Me llamo…" },
      { en: "Welcome", es: "Bienvenido" }
    ],
    food: [
      { en: "Water", es: "Agua" },
      { en: "Bread", es: "Pan" },
      { en: "Milk", es: "Leche" },
      { en: "Egg", es: "Huevo" },
      { en: "Rice", es: "Arroz" },
      { en: "Chicken", es: "Pollo" },
      { en: "Fish", es: "Pescado" },
      { en: "Apple", es: "Manzana" },
      { en: "Banana", es: "Plátano" },
      { en: "Orange", es: "Naranja" },
      { en: "Cheese", es: "Queso" },
      { en: "Meat", es: "Carne" },
      { en: "Salad", es: "Ensalada" },
      { en: "Soup", es: "Sopa" },
      { en: "Coffee", es: "Café" },
      { en: "Tea", es: "Té" },
      { en: "Sugar", es: "Azúcar" },
      { en: "Salt", es: "Sal" },
      { en: "Fruit", es: "Fruta" },
      { en: "Vegetable", es: "Verdura" }
    ],
    colors: [
      { en: "Red", es: "Rojo" },
      { en: "Blue", es: "Azul" },
      { en: "Green", es: "Verde" },
      { en: "Yellow", es: "Amarillo" },
      { en: "White", es: "Blanco" },
      { en: "Black", es: "Negro" },
      { en: "Orange", es: "Naranja" },
      { en: "Pink", es: "Rosa" },
      { en: "Purple", es: "Morado" },
      { en: "Brown", es: "Marrón" },
      { en: "Gray", es: "Gris" },
      { en: "Gold", es: "Dorado" },
      { en: "Silver", es: "Plateado" },
      { en: "Light blue", es: "Celeste" },
      { en: "Dark green", es: "Verde oscuro" },
      { en: "Light", es: "Claro" },
      { en: "Dark", es: "Oscuro" },
      { en: "Colorful", es: "Colorido" },
      { en: "Bright", es: "Brillante" },
      { en: "Color", es: "Color" }
    ],
    phrases: [
      { en: "I don't understand", es: "No entiendo" },
      { en: "I don't know", es: "No sé" },
      { en: "Can you help me?", es: "¿Puede ayudarme?" },
      { en: "Where is…?", es: "¿Dónde está…?" },
      { en: "How much does it cost?", es: "¿Cuánto cuesta?" },
      { en: "I want…", es: "Quiero…" },
      { en: "I need…", es: "Necesito…" },
      { en: "I like…", es: "Me gusta…" },
      { en: "I don't like…", es: "No me gusta…" },
      { en: "What time is it?", es: "¿Qué hora es?" },
      { en: "Today", es: "Hoy" },
      { en: "Tomorrow", es: "Mañana" },
      { en: "Yesterday", es: "Ayer" },
      { en: "More", es: "Más" },
      { en: "Less", es: "Menos" },
      { en: "Big", es: "Grande" },
      { en: "Small", es: "Pequeño" },
      { en: "Good", es: "Bueno" },
      { en: "Bad", es: "Malo" },
      { en: "Very good!", es: "¡Muy bien!" }
    ]
  },

  intermediate: {
    greetings: [
      { en: "How's it going?", es: "¿Qué tal?" },
      { en: "Long time no see", es: "Cuánto tiempo sin verte" },
      { en: "It's a pleasure", es: "Es un placer" },
      { en: "Take care", es: "Cuídate" },
      { en: "Have a good day", es: "Que tengas un buen día" },
      { en: "Congratulations", es: "Felicidades" },
      { en: "Happy birthday", es: "Feliz cumpleaños" },
      { en: "Good luck", es: "Buena suerte" },
      { en: "Cheers!", es: "¡Salud!" },
      { en: "What's new?", es: "¿Qué hay de nuevo?" },
      { en: "I'm doing great", es: "Me va muy bien" },
      { en: "Not bad", es: "No está mal" },
      { en: "How have you been?", es: "¿Cómo has estado?" },
      { en: "I missed you", es: "Te extrañé" },
      { en: "See you soon", es: "Hasta pronto" },
      { en: "Have a nice trip", es: "Buen viaje" },
      { en: "Enjoy your meal", es: "Buen provecho" },
      { en: "Get well soon", es: "Que te mejores" },
      { en: "Merry Christmas", es: "Feliz Navidad" },
      { en: "Happy New Year", es: "Feliz Año Nuevo" }
    ],
    food: [
      { en: "Shrimp", es: "Camarones" },
      { en: "Beef", es: "Res" },
      { en: "Pork", es: "Cerdo" },
      { en: "Lamb", es: "Cordero" },
      { en: "Garlic", es: "Ajo" },
      { en: "Onion", es: "Cebolla" },
      { en: "Tomato", es: "Tomate" },
      { en: "Pepper", es: "Pimienta" },
      { en: "Lettuce", es: "Lechuga" },
      { en: "Corn", es: "Maíz" },
      { en: "Bean", es: "Frijol" },
      { en: "Avocado", es: "Aguacate" },
      { en: "Lemon", es: "Limón" },
      { en: "Strawberry", es: "Fresa" },
      { en: "Grape", es: "Uva" },
      { en: "Watermelon", es: "Sandía" },
      { en: "Pineapple", es: "Piña" },
      { en: "Ice cream", es: "Helado" },
      { en: "Cake", es: "Pastel" },
      { en: "Dessert", es: "Postre" }
    ],
    colors: [
      { en: "Turquoise", es: "Turquesa" },
      { en: "Beige", es: "Beige" },
      { en: "Navy blue", es: "Azul marino" },
      { en: "Burgundy", es: "Burdeos" },
      { en: "Coral", es: "Coral" },
      { en: "Ivory", es: "Marfil" },
      { en: "Lime green", es: "Verde lima" },
      { en: "Olive", es: "Oliva" },
      { en: "Salmon", es: "Salmón" },
      { en: "Crimson", es: "Carmesí" },
      { en: "Amber", es: "Ámbar" },
      { en: "Magenta", es: "Magenta" },
      { en: "Violet", es: "Violeta" },
      { en: "Indigo", es: "Índigo" },
      { en: "Tan", es: "Canela" },
      { en: "Fuchsia", es: "Fucsia" },
      { en: "Teal", es: "Verde azulado" },
      { en: "Lavender", es: "Lavanda" },
      { en: "Rust", es: "Óxido" },
      { en: "Copper", es: "Cobre" }
    ],
    phrases: [
      { en: "I would like…", es: "Me gustaría…" },
      { en: "Could you repeat that?", es: "¿Podría repetir eso?" },
      { en: "I'm looking for…", es: "Estoy buscando…" },
      { en: "It doesn't matter", es: "No importa" },
      { en: "I'm hungry", es: "Tengo hambre" },
      { en: "I'm thirsty", es: "Tengo sed" },
      { en: "I'm tired", es: "Estoy cansado" },
      { en: "I agree", es: "Estoy de acuerdo" },
      { en: "I think so", es: "Creo que sí" },
      { en: "Of course", es: "Por supuesto" },
      { en: "Maybe", es: "Quizás" },
      { en: "It depends", es: "Depende" },
      { en: "In my opinion…", es: "En mi opinión…" },
      { en: "On the other hand…", es: "Por otro lado…" },
      { en: "By the way…", es: "Por cierto…" },
      { en: "As soon as possible", es: "Lo antes posible" },
      { en: "More or less", es: "Más o menos" },
      { en: "What do you think?", es: "¿Qué opinas?" },
      { en: "I'm sorry to hear that", es: "Lamento escuchar eso" },
      { en: "That's a good idea", es: "Es una buena idea" }
    ]
  },

  advanced: {
    greetings: [
      { en: "What a pleasant surprise!", es: "¡Qué agradable sorpresa!" },
      { en: "It's been ages!", es: "¡Ha pasado una eternidad!" },
      { en: "How wonderful to see you", es: "Qué maravilla verte" },
      { en: "I hope I'm not bothering you", es: "Espero no molestar" },
      { en: "Please give my regards to…", es: "Dale mis saludos a…" },
      { en: "I'm at your service", es: "Estoy a su servicio" },
      { en: "Don't be a stranger", es: "No seas un extraño" },
      { en: "My deepest condolences", es: "Mis más sinceras condolencias" },
      { en: "I'm delighted to meet you", es: "Encantado de conocerte" },
      { en: "Until we meet again", es: "Hasta que nos veamos de nuevo" },
      { en: "I wish you all the best", es: "Te deseo lo mejor" },
      { en: "With all due respect", es: "Con todo respeto" },
      { en: "It's an honor", es: "Es un honor" },
      { en: "I really appreciate it", es: "Te lo agradezco mucho" },
      { en: "I owe you one", es: "Te debo una" },
      { en: "Let's keep in touch", es: "Mantengamos el contacto" },
      { en: "Don't mention it", es: "No hay de qué" },
      { en: "It goes without saying", es: "Ni que decir tiene" },
      { en: "Likewise", es: "Igualmente" },
      { en: "To your health!", es: "¡A tu salud!" }
    ],
    food: [
      { en: "Cured ham", es: "Jamón serrano" },
      { en: "Squid", es: "Calamar" },
      { en: "Octopus", es: "Pulpo" },
      { en: "Sausage", es: "Chorizo" },
      { en: "Broth", es: "Caldo" },
      { en: "Seasoning", es: "Condimento" },
      { en: "Batter", es: "Masa" },
      { en: "Dough", es: "Masa" },
      { en: "Breadcrumbs", es: "Pan rallado" },
      { en: "Olive oil", es: "Aceite de oliva" },
      { en: "Vinegar", es: "Vinagre" },
      { en: "Cinnamon", es: "Canela" },
      { en: "Parsley", es: "Perejil" },
      { en: "Basil", es: "Albahaca" },
      { en: "Thyme", es: "Tomillo" },
      { en: "Rosemary", es: "Romero" },
      { en: "Cauliflower", es: "Coliflor" },
      { en: "Eggplant", es: "Berenjena" },
      { en: "Artichoke", es: "Alcachofa" },
      { en: "Pomegranate", es: "Granada" }
    ],
    colors: [
      { en: "Scarlet", es: "Escarlata" },
      { en: "Ochre", es: "Ocre" },
      { en: "Chartreuse", es: "Chartreuse" },
      { en: "Mauve", es: "Malva" },
      { en: "Periwinkle", es: "Bígaro" },
      { en: "Cerulean", es: "Cerúleo" },
      { en: "Vermillion", es: "Bermellón" },
      { en: "Sienna", es: "Siena" },
      { en: "Slate gray", es: "Gris pizarra" },
      { en: "Midnight blue", es: "Azul medianoche" },
      { en: "Forest green", es: "Verde bosque" },
      { en: "Pearl white", es: "Blanco perla" },
      { en: "Wine red", es: "Rojo vino" },
      { en: "Emerald", es: "Esmeralda" },
      { en: "Sapphire blue", es: "Azul zafiro" },
      { en: "Jet black", es: "Negro azabache" },
      { en: "Ash gray", es: "Gris ceniza" },
      { en: "Golden", es: "Dorado" },
      { en: "Pastel", es: "Pastel" },
      { en: "Iridescent", es: "Iridiscente" }
    ],
    phrases: [
      { en: "It's not a big deal", es: "No es para tanto" },
      { en: "To beat around the bush", es: "Andarse por las ramas" },
      { en: "To cost an arm and a leg", es: "Costar un ojo de la cara" },
      { en: "Better late than never", es: "Más vale tarde que nunca" },
      { en: "Actions speak louder than words", es: "Del dicho al hecho hay mucho trecho" },
      { en: "To be on cloud nine", es: "Estar en las nubes" },
      { en: "To have butterflies in your stomach", es: "Tener mariposas en el estómago" },
      { en: "Once in a blue moon", es: "De vez en cuando" },
      { en: "It's raining cats and dogs", es: "Llueve a cántaros" },
      { en: "The early bird catches the worm", es: "Al que madruga, Dios le ayuda" },
      { en: "To kill two birds with one stone", es: "Matar dos pájaros de un tiro" },
      { en: "Every cloud has a silver lining", es: "No hay mal que por bien no venga" },
      { en: "When in Rome…", es: "Donde fueres, haz lo que vieres" },
      { en: "To each their own", es: "Sobre gustos no hay nada escrito" },
      { en: "Practice makes perfect", es: "La práctica hace al maestro" },
      { en: "Don't count your chickens…", es: "No vendas la piel del oso antes de cazarlo" },
      { en: "To let the cat out of the bag", es: "Descubrir el pastel" },
      { en: "To be on the same page", es: "Estar en la misma sintonía" },
      { en: "To pull someone's leg", es: "Tomar el pelo" },
      { en: "That's the last straw", es: "Es la gota que colmó el vaso" }
    ]
  }
};

// ----- APP STATE -----
let currentLevel = null;
let currentCategory = null;
let currentCards = [];
let currentIndex = 0;
let learnedCards = {}; // loaded from localStorage

// ----- DOM ELEMENTS -----
const screenLevel = document.getElementById('screen-level');
const screenCategory = document.getElementById('screen-category');
const screenCards = document.getElementById('screen-cards');

const levelBadge = document.getElementById('level-badge');
const categoryBadge = document.getElementById('category-badge');

const flashcard = document.getElementById('flashcard');
const cardFrontWord = document.getElementById('card-front-word');
const cardBackWord = document.getElementById('card-back-word');
const cardCounter = document.getElementById('card-counter');

const btnLearned = document.getElementById('btn-learned');
const btnNext = document.getElementById('btn-next');
const btnShuffle = document.getElementById('btn-shuffle');
const btnBackLevel = document.getElementById('btn-back-level');
const btnBackCategory = document.getElementById('btn-back-category');
const btnReview = document.getElementById('btn-review');

const overallProgressBar = document.getElementById('overall-progress-bar');
const overallProgressText = document.getElementById('overall-progress-text');
const cardProgressBar = document.getElementById('card-progress-bar');
const cardProgressText = document.getElementById('card-progress-text');
const completionMessage = document.getElementById('completion-message');
const cardWrapper = document.getElementById('card-wrapper');

// ----- LOCALSTORAGE -----
function loadProgress() {
  try {
    const saved = localStorage.getItem('spanishsnap-learned');
    learnedCards = saved ? JSON.parse(saved) : {};
  } catch {
    learnedCards = {};
  }
}

function saveProgress() {
  localStorage.setItem('spanishsnap-learned', JSON.stringify(learnedCards));
}

// Build a unique key for each card
function cardKey(level, category, index) {
  return `${level}__${category}__${index}`;
}

function isCardLearned(level, category, index) {
  return !!learnedCards[cardKey(level, category, index)];
}

function markCardLearned(level, category, index) {
  learnedCards[cardKey(level, category, index)] = true;
  saveProgress();
}

// ----- SCREEN NAVIGATION -----
function showScreen(screen) {
  [screenLevel, screenCategory, screenCards].forEach(s => s.classList.remove('active'));
  screen.classList.add('active');
}

// ----- LEVEL SELECTION -----
document.querySelectorAll('.btn-level').forEach(btn => {
  btn.addEventListener('click', () => {
    currentLevel = btn.dataset.level;

    const labels = { beginner: '🌱 Beginner', intermediate: '🌿 Intermediate', advanced: '🌳 Advanced' };
    levelBadge.textContent = labels[currentLevel];

    updateOverallProgress();
    showScreen(screenCategory);
  });
});

// ----- CATEGORY SELECTION -----
document.querySelectorAll('.btn-category').forEach(btn => {
  btn.addEventListener('click', () => {
    currentCategory = btn.dataset.category;

    const labels = { all: '📚 All', greetings: '👋 Greetings', food: '🍽️ Food', colors: '🎨 Colors', phrases: '💬 Phrases' };
    categoryBadge.textContent = labels[currentCategory];

    loadCards();
    showScreen(screenCards);
  });
});

// ----- LOAD CARDS -----
function loadCards() {
  currentCards = [];

  if (currentCategory === 'all') {
    // Combine all categories
    Object.keys(VOCAB[currentLevel]).forEach(cat => {
      VOCAB[currentLevel][cat].forEach((card, idx) => {
        currentCards.push({ ...card, _cat: cat, _idx: idx });
      });
    });
  } else {
    VOCAB[currentLevel][currentCategory].forEach((card, idx) => {
      currentCards.push({ ...card, _cat: currentCategory, _idx: idx });
    });
  }

  currentIndex = 0;
  displayCard();
}

// ----- DISPLAY CARD -----
function displayCard() {
  // Hide completion, show card area
  completionMessage.style.display = 'none';
  cardWrapper.style.display = 'block';
  document.querySelector('.card-actions').style.display = 'flex';
  btnShuffle.style.display = 'block';
  cardCounter.style.display = 'block';

  if (currentCards.length === 0) {
    cardFrontWord.textContent = 'No cards available';
    cardBackWord.textContent = '';
    return;
  }

  const card = currentCards[currentIndex];
  cardFrontWord.textContent = card.en;
  cardBackWord.textContent = card.es;

  // Reset flip
  flashcard.classList.remove('flipped');

  // Update counter
  cardCounter.textContent = `Card ${currentIndex + 1} of ${currentCards.length}`;

  // Update learned button state
  const learned = isCardLearned(currentLevel, card._cat, card._idx);
  updateLearnedButton(learned);

  // Update learned indicator on card faces
  const frontFace = document.querySelector('.card-front');
  const backFace = document.querySelector('.card-back');
  frontFace.classList.toggle('learned-indicator', learned);
  backFace.classList.toggle('learned-indicator', learned);

  // Update category progress
  updateCardProgress();
}

function updateLearnedButton(learned) {
  if (learned) {
    btnLearned.textContent = '✅ Learned!';
    btnLearned.classList.add('already-learned');
  } else {
    btnLearned.textContent = '✅ Got it!';
    btnLearned.classList.remove('already-learned');
  }
}

// ----- FLIP CARD -----
flashcard.addEventListener('click', () => {
  flashcard.classList.toggle('flipped');
});

// ----- MARK AS LEARNED -----
btnLearned.addEventListener('click', () => {
  const card = currentCards[currentIndex];
  markCardLearned(currentLevel, card._cat, card._idx);
  updateLearnedButton(true);

  const frontFace = document.querySelector('.card-front');
  const backFace = document.querySelector('.card-back');
  frontFace.classList.add('learned-indicator');
  backFace.classList.add('learned-indicator');

  updateCardProgress();
  updateOverallProgress();

  // Auto-advance after a brief moment
  setTimeout(goToNextCard, 400);
});

// ----- NEXT CARD -----
btnNext.addEventListener('click', goToNextCard);

function goToNextCard() {
  if (currentIndex < currentCards.length - 1) {
    currentIndex++;
    displayCard();
  } else {
    // Check if all cards in set are learned
    const allLearned = currentCards.every(c => isCardLearned(currentLevel, c._cat, c._idx));
    if (allLearned) {
      showCompletion();
    } else {
      // Loop back to start
      currentIndex = 0;
      displayCard();
    }
  }
}

// ----- SHUFFLE -----
btnShuffle.addEventListener('click', () => {
  // Fisher-Yates shuffle
  for (let i = currentCards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [currentCards[i], currentCards[j]] = [currentCards[j], currentCards[i]];
  }
  currentIndex = 0;
  displayCard();
});

// ----- COMPLETION -----
function showCompletion() {
  completionMessage.style.display = 'block';
  cardWrapper.style.display = 'none';
  document.querySelector('.card-actions').style.display = 'none';
  btnShuffle.style.display = 'none';
  cardCounter.style.display = 'none';
}

btnReview.addEventListener('click', () => {
  currentIndex = 0;
  displayCard();
});

// ----- BACK BUTTONS -----
btnBackLevel.addEventListener('click', () => {
  showScreen(screenLevel);
});

btnBackCategory.addEventListener('click', () => {
  updateOverallProgress();
  showScreen(screenCategory);
});

// ----- PROGRESS TRACKING -----
function updateOverallProgress() {
  if (!currentLevel) return;

  let total = 0;
  let learned = 0;

  Object.keys(VOCAB[currentLevel]).forEach(cat => {
    VOCAB[currentLevel][cat].forEach((_, idx) => {
      total++;
      if (isCardLearned(currentLevel, cat, idx)) learned++;
    });
  });

  const pct = total > 0 ? Math.round((learned / total) * 100) : 0;
  overallProgressBar.style.width = pct + '%';
  overallProgressText.textContent = `${learned} / ${total} learned (${pct}%)`;
}

function updateCardProgress() {
  let total = currentCards.length;
  let learned = currentCards.filter(c => isCardLearned(currentLevel, c._cat, c._idx)).length;

  const pct = total > 0 ? Math.round((learned / total) * 100) : 0;
  cardProgressBar.style.width = pct + '%';
  cardProgressText.textContent = `${learned} / ${total} learned (${pct}%)`;
}

// ----- KEYBOARD SUPPORT -----
document.addEventListener('keydown', (e) => {
  // Only respond when card screen is active
  if (!screenCards.classList.contains('active')) return;

  if (e.key === ' ' || e.key === 'Enter') {
    e.preventDefault();
    flashcard.classList.toggle('flipped');
  } else if (e.key === 'ArrowRight') {
    goToNextCard();
  } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
    currentIndex--;
    displayCard();
  } else if (e.key === 'l' || e.key === 'L') {
    btnLearned.click();
  }
});

// ----- INIT -----
loadProgress();
