// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function () {
    initializeApp();
    createFloatingHearts();
    loadRealPhotos();
    loadTimeline();
    loadDiaryEntries();
    loadMessages();
    loadMemories();
    loadDreams();
    setupEventListeners();
    startCountdown();
});

// ===== WEDDING COUNTDOWN =====
function startCountdown() {
    // Set your wedding date here (YYYY, MM-1, DD)
    const weddingDate = new Date(2026, 5, 15).getTime(); // June 15, 2026

    const countdown = setInterval(function () {
        const now = new Date().getTime();
        const distance = weddingDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');

        if (distance < 0) {
            clearInterval(countdown);
            document.getElementById('countdown').innerHTML = "<h2>We're Married! 🎉</h2>";
        }
    }, 1000);
}

// ===== FLOATING HEARTS BACKGROUND =====
function createFloatingHearts() {
    const heartsContainer = document.getElementById('heartsBackground');
    const heartEmojis = ['❤️', '💕', '💖', '💗', '💓', '💝'];

    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart-particle';
        heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 10 + 10) + 's';
        heart.style.fontSize = (Math.random() * 20 + 15) + 'px';

        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 20000);
    }, 2000);
}

// ===== NAVIGATION =====
function setupEventListeners() {
    // Mobile menu toggle
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Smooth scrolling
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            scrollToSection(targetId);
            navMenu.classList.remove('active');
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Update active nav link
        updateActiveNavLink();
    });

    // Diary tabs
    document.querySelectorAll('.diary-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.diary-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            filterDiaryEntries(tab.dataset.tab);
        });
    });

    // Mood selector
    document.querySelectorAll('.mood-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelectorAll('.mood-btn').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            document.getElementById('diaryMood').value = btn.dataset.mood;
        });
    });

    // Form submissions
    document.getElementById('diaryForm').addEventListener('submit', handleDiarySubmit);
    document.getElementById('messageForm').addEventListener('submit', handleMessageSubmit);
    document.getElementById('memoryForm').addEventListener('submit', handleMemorySubmit);
    document.getElementById('timelineForm').addEventListener('submit', handleTimelineSubmit);
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const navHeight = document.getElementById('navbar').offsetHeight;
        const sectionTop = section.offsetTop - navHeight;
        window.scrollTo({
            top: sectionTop,
            behavior: 'smooth'
        });
    }
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
}

// ===== ANIMATED GALLERY =====
const animatedImages = [
    {
        src: 'couple_starry_romance.png',
        title: 'Starry Night',
        description: 'Lost in the stars and each other ✨'
    },
    {
        src: 'couple_rain_dance.png',
        title: 'Dancing in the Rain',
        description: 'Soaked in love and happiness 🌧️'
    },
    {
        src: 'couple_cosmic_love.png',
        title: 'Cosmic Love',
        description: 'Our love is out of this world 🌌'
    },
    {
        src: 'couple_picnic_date.png',
        title: 'Picnic Date',
        description: 'Peaceful moments in nature 🧺'
    },
    {
        src: 'couple_selfie_fun.png',
        title: 'Selfie Fun',
        description: 'Capturing our silly smiles 📸'
    }
];

function loadAnimatedGallery() {
    const gallery = document.getElementById('animatedGallery');

    animatedImages.forEach((image, index) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.style.animationDelay = `${index * 0.1} s`;

        item.innerHTML = `
            <img src="${image.src}" alt="${image.title}" loading="lazy">
            <div class="gallery-overlay">
                <h3>${image.title}</h3>
                <p>${image.description}</p>
            </div>
        `;

        item.addEventListener('click', () => {
            openImageModal(image.src, image.title);
        });

        gallery.appendChild(item);
    });
}

// ===== REAL PHOTOS GALLERY =====
function loadRealPhotos() {
    const gallery = document.getElementById('realPhotosGallery');
    const photoFiles = [
        // Couple images
        'couple_beach_sunset.png',
        'couple_candid_laughing.png',
        'couple_celebration_dancing.png',
        'couple_coffee_date.png',
        'couple_cozy_indoor.png',
        'couple_festival_diwali.png',
        'couple_holding_hands.png',
        'couple_movie_night.png',
        'couple_outdoor_park.png',
        'couple_romantic_standing.png',
        'couple_scooter_ride.png',
        'couple_temple_visit.png',
        'couple_traditional_wedding.png',
        'real_photo_baking.jpg',
        'real_photo_sunset_piggyback.jpg',
        // Real WhatsApp photos
        'WhatsApp Image 2026-02-02 at 21.09.36 (1).jpeg',
        'WhatsApp Image 2026-02-02 at 21.09.36 (2).jpeg',
        'WhatsApp Image 2026-02-02 at 21.09.36 (3).jpeg',
        'WhatsApp Image 2026-02-02 at 21.09.36 (4).jpeg',
        'WhatsApp Image 2026-02-02 at 21.09.36 (6).jpeg',
        'WhatsApp Image 2026-02-02 at 21.12.05.jpeg',
        'WhatsApp Image 2026-02-03 at 19.54.55.jpeg',
        'WhatsApp Image 2026-02-03 at 19.55.26.jpeg',
        'WhatsApp Image 2026-02-03 at 19.56.57.jpeg',
        'WhatsApp Image 2026-02-03 at 20.01.35.jpeg',
        'WhatsApp Image 2026-02-03 at 20.01.45.jpeg',
        'WhatsApp Image 2026-02-03 at 20.02.32.jpeg',
        'WhatsApp Image 2026-02-03 at 20.02.39.jpeg',
        'WhatsApp Image 2026-02-03 at 20.08.28.jpeg',
        'WhatsApp Image 2026-02-03 at 20.13.37.jpeg',
        'WhatsApp Image 2026-02-03 at 20.13.54.jpeg',
        'WhatsApp Image 2026-02-03 at 20.14.24.jpeg',
        'WhatsApp Image 2026-02-03 at 20.14.25.jpeg',
        'WhatsApp Image 2026-02-03 at 20.14.26.jpeg',
        'WhatsApp Image 2026-02-03 at 20.14.31.jpeg',
        'WhatsApp Image 2026-02-03 at 20.14.33.jpeg',
        'WhatsApp Image 2026-02-03 at 20.14.36.jpeg',
        'WhatsApp Image 2026-02-03 at 20.21.04.jpeg',
        'WhatsApp Image 2026-02-03 at 20.21.05.jpeg',
        'couple_floating_lanterns.png',
        'couple_snow_date.png',
        'couple_adventure_trek.png',
        'couple_musical_moment.png',
        'couple_cooking_fun.png',
        'couple_beach_walk.png',
        'couple_bike_ride.png',
        'couple_starry_romance.png',
        'couple_rain_dance.png',
        'couple_cosmic_love.png',
        'couple_picnic_date.png',
        'couple_selfie_fun.png'
    ];

    photoFiles.forEach((photo, index) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.style.animationDelay = `${index * 0.05} s`;

        item.innerHTML = `
            <img src="${photo}" alt="Our Memory ${index + 1}" loading="lazy">
            <div class="gallery-overlay">
                <h3>Our Memory</h3>
                <p>A special moment captured ❤️</p>
            </div>
        `;

        item.addEventListener('click', () => {
            openImageModal(photo, `Our Memory ${index + 1} `);
        });

        gallery.appendChild(item);
    });
}

// ===== IMAGE MODAL =====
function openImageModal(src, caption) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');

    modal.classList.add('active');
    modalImg.src = src;
    modalCaption.textContent = caption;
}

function closeImageModal() {
    document.getElementById('imageModal').classList.remove('active');
}

// ===== TIMELINE =====
function initializeApp() {
    if (!localStorage.getItem('timelineEvents')) {
        const defaultTimeline = [
            {
                date: '2024-01-15',
                title: 'First Meeting',
                description: 'The day our eyes first met and hearts connected ❤️'
            },
            {
                date: '2024-03-20',
                title: 'First Date',
                description: 'Coffee, conversations, and endless smiles ☕'
            },
            {
                date: '2024-06-10',
                title: 'Made It Official',
                description: 'The day we decided to be together forever 💑'
            },
            {
                date: '2025-12-25',
                title: 'The Proposal',
                description: 'You said YES! The happiest day of my life 💍'
            }
        ];
        localStorage.setItem('timelineEvents', JSON.stringify(defaultTimeline));
    }
}

function loadTimeline() {
    const timeline = document.getElementById('timeline');
    const events = JSON.parse(localStorage.getItem('timelineEvents') || '[]');

    timeline.innerHTML = '';

    events.sort((a, b) => new Date(a.date) - new Date(b.date)).forEach((event, index) => {
        const item = document.createElement('div');
        item.className = 'timeline-item';
        item.style.animationDelay = `${index * 0.2} s`;

        item.innerHTML = `
            <div class="timeline-content">
                <div class="timeline-date">${formatDate(event.date)}</div>
                <h3>${event.title}</h3>
                <p>${event.description}</p>
            </div>
            <div class="timeline-marker"></div>
`;

        timeline.appendChild(item);
    });
}

function openTimelineModal() {
    document.getElementById('timelineModal').classList.add('active');
}

function closeTimelineModal() {
    document.getElementById('timelineModal').classList.remove('active');
    document.getElementById('timelineForm').reset();
}

function handleTimelineSubmit(e) {
    e.preventDefault();

    const newEvent = {
        date: document.getElementById('timelineDate').value,
        title: document.getElementById('timelineTitle').value,
        description: document.getElementById('timelineDesc').value
    };

    const events = JSON.parse(localStorage.getItem('timelineEvents') || '[]');
    events.push(newEvent);
    localStorage.setItem('timelineEvents', JSON.stringify(events));

    loadTimeline();
    closeTimelineModal();
    showNotification('Timeline moment added! 💕');
}

// ===== DIARY =====
function loadDiaryEntries() {
    if (!localStorage.getItem('diaryEntries')) {
        const defaultEntries = [
            {
                author: 'vishal',
                mood: 'love',
                title: 'The Day I Knew',
                content: 'Today I realized that you are not just my love, but my best friend, my partner, and my forever. I cannot wait to spend the rest of my life making you smile.',
                date: new Date().toISOString()
            },
            {
                author: 'deeksha',
                mood: 'grateful',
                title: 'Counting My Blessings',
                content: 'Every day with you feels like a blessing. Thank you for being my rock, my joy, and my everything. I love you more than words can express.',
                date: new Date(Date.now() - 86400000).toISOString()
            }
        ];
        localStorage.setItem('diaryEntries', JSON.stringify(defaultEntries));
    }

    filterDiaryEntries('all');
}

function filterDiaryEntries(filter) {
    const container = document.getElementById('diaryEntries');
    const entries = JSON.parse(localStorage.getItem('diaryEntries') || '[]');

    container.innerHTML = '';

    const filtered = filter === 'all' ? entries : entries.filter(e => e.author === filter);

    filtered.sort((a, b) => new Date(b.date) - new Date(a.date)).forEach((entry, index) => {
        const div = document.createElement('div');
        div.className = 'diary-entry';
        div.style.animationDelay = `${index * 0.1} s`;

        const moodEmoji = getMoodEmoji(entry.mood);
        const authorName = entry.author.charAt(0).toUpperCase() + entry.author.slice(1);

        div.innerHTML = `
    < div class="diary-entry-header" >
                <div class="diary-entry-author">
                    <span class="diary-entry-mood">${moodEmoji}</span>
                    <span>${authorName}</span>
                </div>
                <div class="diary-entry-date">${formatDateTime(entry.date)}</div>
            </div >
            <h3>${entry.title}</h3>
            <p>${entry.content}</p>
`;

        container.appendChild(div);
    });

    if (filtered.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #999;">No entries yet. Start writing! ✍️</p>';
    }
}

function openDiaryModal() {
    document.getElementById('diaryModal').classList.add('active');
}

function closeDiaryModal() {
    document.getElementById('diaryModal').classList.remove('active');
    document.getElementById('diaryForm').reset();
    document.querySelectorAll('.mood-btn').forEach(b => b.classList.remove('selected'));
}

function handleDiarySubmit(e) {
    e.preventDefault();

    const newEntry = {
        author: document.getElementById('diaryAuthor').value,
        mood: document.getElementById('diaryMood').value,
        title: document.getElementById('diaryTitle').value,
        content: document.getElementById('diaryContent').value,
        date: new Date().toISOString()
    };

    const entries = JSON.parse(localStorage.getItem('diaryEntries') || '[]');
    entries.push(newEntry);
    localStorage.setItem('diaryEntries', JSON.stringify(entries));

    loadDiaryEntries();
    closeDiaryModal();
    showNotification('Diary entry saved! 📝');
}

function getMoodEmoji(mood) {
    const moods = {
        happy: '😊',
        love: '😍',
        excited: '🤩',
        grateful: '🥰',
        thoughtful: '🤔'
    };
    return moods[mood] || '😊';
}

// ===== MESSAGES =====
function loadMessages() {
    if (!localStorage.getItem('messages')) {
        const defaultMessages = [
            {
                from: 'vishal',
                content: 'You make every day brighter just by being in it. I love you! ☀️',
                date: new Date().toISOString()
            },
            {
                from: 'deeksha',
                content: 'Thank you for always making me laugh, even on my worst days. You\'re my sunshine! 🌈',
                date: new Date(Date.now() - 3600000).toISOString()
            },
            {
                from: 'vishal',
                content: 'Can\'t wait to wake up next to you every morning for the rest of our lives! 💕',
                date: new Date(Date.now() - 7200000).toISOString()
            }
        ];
        localStorage.setItem('messages', JSON.stringify(defaultMessages));
    }

    const container = document.getElementById('messageWall');
    const messages = JSON.parse(localStorage.getItem('messages') || '[]');

    container.innerHTML = '';

    messages.sort((a, b) => new Date(b.date) - new Date(a.date)).forEach((msg, index) => {
        const card = document.createElement('div');
        card.className = 'message-card';
        card.style.animationDelay = `${index * 0.1} s`;

        const fromName = msg.from.charAt(0).toUpperCase() + msg.from.slice(1);

        card.innerHTML = `
    < div class="message-from" > From: ${fromName}</div >
            <div class="message-content">"${msg.content}"</div>
            <div class="message-time">${formatDateTime(msg.date)}</div>
`;

        container.appendChild(card);
    });
}

function openMessageModal() {
    document.getElementById('messageModal').classList.add('active');
}

function closeMessageModal() {
    document.getElementById('messageModal').classList.remove('active');
    document.getElementById('messageForm').reset();
}

function handleMessageSubmit(e) {
    e.preventDefault();

    const newMessage = {
        from: document.getElementById('messageFrom').value,
        content: document.getElementById('messageContent').value,
        date: new Date().toISOString()
    };

    const messages = JSON.parse(localStorage.getItem('messages') || '[]');
    messages.push(newMessage);
    localStorage.setItem('messages', JSON.stringify(messages));

    loadMessages();
    closeMessageModal();
    showNotification('Message posted! 💌');
}

// ===== MEMORY JAR =====
function loadMemories() {
    if (!localStorage.getItem('memories')) {
        const defaultMemories = [
            'Our first kiss under the stars',
            'That time we got lost but found the best restaurant',
            'Dancing in the rain without caring who was watching',
            'Your smile when I surprised you with flowers',
            'Our late-night conversations about everything and nothing'
        ];
        localStorage.setItem('memories', JSON.stringify(defaultMemories));
    }

    const jarContainer = document.getElementById('jarMemories');
    const displayContainer = document.getElementById('memoriesDisplay');
    const memories = JSON.parse(localStorage.getItem('memories') || '[]');

    jarContainer.innerHTML = '';
    displayContainer.innerHTML = '';

    memories.forEach((memory, index) => {
        // Add to jar
        const note = document.createElement('div');
        note.className = 'memory-note';
        note.textContent = memory.substring(0, 30) + '...';
        note.addEventListener('click', () => showMemory(memory, index));
        jarContainer.appendChild(note);

        // Add to display
        const card = document.createElement('div');
        card.className = 'memory-display-card';
        card.style.animationDelay = `${index * 0.1} s`;
        card.innerHTML = `< p > ${memory}</p > `;
        displayContainer.appendChild(card);
    });
}

function showMemory(memory, index) {
    alert(`Memory #${index + 1} \n\n${memory} \n\n❤️`);
}

function openMemoryModal() {
    document.getElementById('memoryModal').classList.add('active');
}

function closeMemoryModal() {
    document.getElementById('memoryModal').classList.remove('active');
    document.getElementById('memoryForm').reset();
}

function handleMemorySubmit(e) {
    e.preventDefault();

    const newMemory = document.getElementById('memoryContent').value;

    const memories = JSON.parse(localStorage.getItem('memories') || '[]');
    memories.push(newMemory);
    localStorage.setItem('memories', JSON.stringify(memories));

    loadMemories();
    closeMemoryModal();
    showNotification('Memory added to jar! 🎉');
}

// ===== QUIZ =====
const quizQuestions = {
    vishal: [
        {
            question: "What is Deeksha's favorite color?",
            options: ["Pink", "Blue", "Purple", "Red"],
            correct: 0
        },
        {
            question: "What is Deeksha's favorite food?",
            options: ["Pizza", "Biryani", "Pasta", "Sushi"],
            correct: 1
        },
        {
            question: "What does Deeksha love to do in her free time?",
            options: ["Reading", "Shopping", "Cooking", "Painting"],
            correct: 0
        },
        {
            question: "What is Deeksha's dream destination?",
            options: ["Paris", "Maldives", "Switzerland", "Japan"],
            correct: 2
        },
        {
            question: "What makes Deeksha happiest?",
            options: ["Gifts", "Quality time", "Surprises", "All of the above"],
            correct: 3
        }
    ],
    deeksha: [
        {
            question: "What is Vishal's favorite sport?",
            options: ["Cricket", "Football", "Basketball", "Tennis"],
            correct: 0
        },
        {
            question: "What is Vishal's favorite movie genre?",
            options: ["Action", "Comedy", "Romance", "Thriller"],
            correct: 0
        },
        {
            question: "What does Vishal love to do on weekends?",
            options: ["Sleep", "Travel", "Watch movies", "Hang out with friends"],
            correct: 1
        },
        {
            question: "What is Vishal's favorite cuisine?",
            options: ["Indian", "Chinese", "Italian", "Mexican"],
            correct: 0
        },
        {
            question: "What is Vishal's biggest dream?",
            options: ["Travel the world", "Start a business", "Build a happy family", "All of the above"],
            correct: 3
        }
    ]
};

let currentQuiz = null;
let currentQuestion = 0;
let score = 0;

function startQuiz(player) {
    currentQuiz = player;
    currentQuestion = 0;
    score = 0;

    const container = document.getElementById('quizContainer');
    showQuestion();
}

function showQuestion() {
    const questions = quizQuestions[currentQuiz];
    const question = questions[currentQuestion];

    const container = document.getElementById('quizContainer');
    container.innerHTML = `
    < div class="quiz-question" >
            <h3>Question ${currentQuestion + 1} of ${questions.length}</h3>
            <p>${question.question}</p>
            <div class="quiz-options">
                ${question.options.map((option, index) => `
                    <div class="quiz-option" onclick="selectAnswer(${index})">
                        ${option}
                    </div>
                `).join('')}
            </div>
        </div >
    `;
}

function selectAnswer(index) {
    const questions = quizQuestions[currentQuiz];
    const question = questions[currentQuestion];

    if (index === question.correct) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showQuizResult();
    }
}

function showQuizResult() {
    const questions = quizQuestions[currentQuiz];
    const percentage = (score / questions.length) * 100;

    let message = '';
    if (percentage === 100) {
        message = 'Perfect! You know each other so well! 💯';
    } else if (percentage >= 80) {
        message = 'Great job! You two are in sync! 🎉';
    } else if (percentage >= 60) {
        message = 'Not bad! Keep learning about each other! 💕';
    } else {
        message = 'Time to spend more quality time together! ❤️';
    }

    const container = document.getElementById('quizContainer');
    container.innerHTML = `
    < div class="quiz-result" >
            <h3>Quiz Complete!</h3>
            <div class="quiz-score">${score}/${questions.length}</div>
            <div class="quiz-message">${message}</div>
            <button class="quiz-restart" onclick="location.reload()">Take Another Quiz</button>
        </div >
    `;
}

// ===== DREAMS =====
function loadDreams() {
    const dreams = JSON.parse(localStorage.getItem('dreams') || '{}');

    if (dreams.home) document.getElementById('dreamHome').value = dreams.home;
    if (dreams.travel) document.getElementById('dreamTravel').value = dreams.travel;
    if (dreams.family) document.getElementById('dreamFamily').value = dreams.family;
    if (dreams.goals) document.getElementById('dreamGoals').value = dreams.goals;
}

function saveDreams() {
    const dreams = {
        home: document.getElementById('dreamHome').value,
        travel: document.getElementById('dreamTravel').value,
        family: document.getElementById('dreamFamily').value,
        goals: document.getElementById('dreamGoals').value
    };

    localStorage.setItem('dreams', JSON.stringify(dreams));
    showNotification('Dreams saved! Keep dreaming together! ✨');
}

// ===== UTILITY FUNCTIONS =====
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

function formatDateTime(dateString) {
    const date = new Date(dateString);
    const options = { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' };
    return date.toLocaleDateString('en-US', options);
}

function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
position: fixed;
top: 100px;
right: 20px;
background: linear - gradient(135deg, #f093fb 0 %, #f5576c 100 %);
color: white;
padding: 1rem 2rem;
border - radius: 50px;
box - shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
z - index: 3000;
animation: slideInRight 0.3s ease - out;
font - weight: 600;
`;
    notification.textContent = message;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Close modals when clicking outside
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.classList.remove('active');
    }
});

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
@keyframes slideInRight {
        from {
        transform: translateX(400px);
        opacity: 0;
    }
        to {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes slideOutRight {
        from {
        transform: translateX(0);
        opacity: 1;
    }
        to {
        transform: translateX(400px);
        opacity: 0;
    }
}
`;
document.head.appendChild(style);
