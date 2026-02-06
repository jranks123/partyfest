let isRevealed = false;

function revealPayment() {
    if (isRevealed) return; 
    isRevealed = true;

    // 1. Play sound
    const sound = document.getElementById('click-sound');
    if (sound) {
        sound.play().catch(e => console.log("Audio play blocked: ", e));
    }

    // 2. Remove the first-click overlay blocker
    const overlay = document.getElementById('click-overlay');
    if (overlay) overlay.remove();

    // 3. Hide initial landing elements
    document.querySelector('.sky-scene').style.display = 'none';
    const logo = document.querySelector('.landing-logo');
    if (logo) logo.style.display = 'none';

    // 4. Move grass to background so it doesn't block hover
    const grass = document.querySelector('.grass-foreground');
    if (grass) {
        grass.style.pointerEvents = 'none'; 
        grass.style.zIndex = '1';
        grass.style.opacity = '0.8'; 
    }

    // 5. Show the payment container
    const container = document.getElementById('payment-container');
    if (container) {
        container.style.display = 'flex'; 
        container.classList.add('show');
    }
}

function handlePayment(type, event) {
    event.stopPropagation(); 
    if (type === 'normal') {
        alert("Boring choice, but we love you anyway! 🎟️");
    } else {
        alert("BIG PLAYAAAA! Get ready for the VIP glitter bath! ✨👑");
    }
}

// Confetti on click (only after reveal)
document.addEventListener('click', function(e) {
    if (!isRevealed) return;

    const emojis = ['🎉', '✨', '🎈', '💖'];
    const confetti = document.createElement('div');
    confetti.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    confetti.style.position = 'fixed';
    confetti.style.left = e.clientX + 'px';
    confetti.style.top = e.clientY + 'px';
    confetti.style.fontSize = '30px';
    confetti.style.pointerEvents = 'none';
    confetti.style.zIndex = '1000';
    confetti.style.animation = 'fall 2s linear forwards';
    document.body.appendChild(confetti);
    
    setTimeout(() => confetti.remove(), 2000);
});

// Create and inject the fall animation
const confettiStyle = document.createElement('style');
confettiStyle.innerHTML = `
@keyframes fall {
    to { transform: translateY(100vh) rotate(360deg); opacity: 0; }
}`;
document.head.appendChild(confettiStyle);