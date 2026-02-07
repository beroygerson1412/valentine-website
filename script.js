// Get DOM elements
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const overlay = document.getElementById('overlay');

// Function to move "No" button to random position within white content box
function moveNoButton() {
    // Get the white content box
    const contentBox = document.querySelector('.content');
    const contentRect = contentBox.getBoundingClientRect();
    
    // Get button dimensions
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;
    
    // Calculate available space within content box (with padding)
    const padding = 20;
    const maxX = contentRect.width - btnWidth - padding;
    const maxY = contentRect.height - btnHeight - padding;
    
    // Generate random positions within the content box
    const randomX = Math.max(padding, Math.floor(Math.random() * maxX));
    const randomY = Math.max(padding, Math.floor(Math.random() * maxY));
    
    // Apply new position relative to content box
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
}

// Function to show the overlay modal
function showOverlay() {
    overlay.classList.add('show');
    
    // Add confetti effect using emoji
    createConfetti();
}

// Create falling confetti effect
function createConfetti() {
    const confettiEmojis = ['💕', '💖', '💗', '💓', '💝', '❤️', '🌹'];
    const confettiCount = 50;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.textContent = confettiEmojis[Math.floor(Math.random() * confettiEmojis.length)];
        confetti.style.position = 'fixed';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-50px';
        confetti.style.fontSize = (Math.random() * 20 + 15) + 'px';
        confetti.style.opacity = '0.8';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '1001';
        confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear`;
        
        overlay.appendChild(confetti);
        
        // Remove confetti after animation
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

// Add CSS animation for confetti falling
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        to {
            top: 100vh;
            transform: rotate(360deg);
        }
    }
`;
document.head.appendChild(style);

// Track if No button has been hovered
let noButtonMoved = false;

// Event listener for "No" button hover - moves it to random position
noBtn.addEventListener('mouseenter', () => {
    // Only apply absolute positioning and move after first hover
    if (!noButtonMoved) {
        noBtn.style.position = 'absolute';
        noButtonMoved = true;
    }
    moveNoButton();
});

// Event listener for "Yes" button click
yesBtn.addEventListener('click', showOverlay);

// Optional: Handle window resize to reposition button if needed
window.addEventListener('resize', () => {
    // Only reposition if button has been moved (is absolute)
    if (noButtonMoved) {
        const contentBox = document.querySelector('.content');
        const contentRect = contentBox.getBoundingClientRect();
        const btnRect = noBtn.getBoundingClientRect();
        
        // Check if button is out of content box bounds after resize
        if (btnRect.right > contentRect.right || btnRect.bottom > contentRect.bottom) {
            moveNoButton();
        }
    }
});