let isRevealed = false;

function revealPayment() {
    if (isRevealed) return; 
    isRevealed = true;

    const sound = document.getElementById('click-sound');
    if (sound) sound.play().catch(e => console.log("Audio play blocked: ", e));

    const overlay = document.getElementById('click-overlay');
    if (overlay) overlay.remove();

    document.querySelector('.sky-scene').style.display = 'none';
    const logo = document.querySelector('.landing-logo');
    if (logo) logo.style.display = 'none';

    const grass = document.querySelector('.grass-foreground');
    if (grass) {
        grass.style.pointerEvents = 'none'; 
        grass.style.zIndex = '1';
    }

    const container = document.getElementById('payment-container');
    if (container) {
        container.style.display = 'flex'; 
        container.classList.add('show');
    }
}

function handlePayment(type, event, url) {
    event.preventDefault(); 
    event.stopPropagation();

    // 1. Create the Party Chaos Overlay
    const flash = document.createElement('div');
    flash.className = 'party-chaos-overlay';
    
    let text = 'SEE YOU IN THE MUD! 🤘';
    if (type === 'early') text = 'SPEED DEMON! 🏃‍♂️💨';
    if (type === 'premium') text = 'LEGEND STATUS: ACTIVE 💎';
    
    flash.innerHTML = `
        <div class="chaos-content">
            <span class="chaos-icon">🎸</span>
            <h1>${text}</h1>
            <span class="chaos-icon">🍻</span>
        </div>
    `;
    document.body.appendChild(flash);

    // 2. Trigger the Bass Boost (Screen Shake)
    document.body.classList.add('bass-boost');

    // 3. Redirect after 700ms (enough time to feel the hype)
    setTimeout(() => {
        window.location.href = url;
    }, 700);
}

// Confetti on click
document.addEventListener('click', function(e) {
    if (!isRevealed) return;
    const emojis = ['🎉', '✨', '🕺', '🍦', '🎡'];
    const confetti = document.createElement('div');
    confetti.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    confetti.style.position = 'fixed';
    confetti.style.left = e.clientX + 'px';
    confetti.style.top = e.clientY + 'px';
    confetti.style.fontSize = '50px';
    confetti.style.pointerEvents = 'none';
    confetti.style.zIndex = '20000';
    confetti.style.animation = 'fall 1.5s ease-in forwards';
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 1500);
});

const style = document.createElement('style');
style.innerHTML = `@keyframes fall { to { transform: translateY(100vh) rotate(360deg); opacity: 0; } }`;
document.head.appendChild(style);