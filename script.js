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

    // LAUNCH THE BALLOON SHOWER
    const balloonCount = 350; // Mass release
    const emojis = ['🎈', '🎈', '🎈', '🎈', '✨', '💖'];

    for (let i = 0; i < balloonCount; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'mass-balloon';
        balloon.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        
        // Randomize horizontal start position
        balloon.style.left = Math.random() * 100 + 'vw';
        
        // Randomize size
        balloon.style.fontSize = (Math.random() * 30 + 30) + 'px';
        
        // Stagger the launch slightly for a "shower" effect
        balloon.style.animationDelay = (Math.random() * 0.5) + 's';
        
        // Randomize how long they take to cross the screen (fast/slow)
        balloon.style.animationDuration = (Math.random() * 1 + 1) + 's';

        document.body.appendChild(balloon);
        
        // Remove from DOM after animation
        setTimeout(() => balloon.remove(), 3000);
    }

    // Redirect after the initial burst of balloons
    setTimeout(() => {
        window.location.href = url;
    }, 1200);
}

// 1. THE RETURN OF THE RANDOM CLICK EMOJIS
document.addEventListener('click', function(e) {
    if (!isRevealed) return;

    const clickEmojis = ['🎉', '✨', '🎈', '💖', '🤘', '🌈', '🍦'];
    const particle = document.createElement('div');
    
    particle.textContent = clickEmojis[Math.floor(Math.random() * clickEmojis.length)];
    particle.style.position = 'fixed';
    particle.style.left = e.clientX + 'px';
    particle.style.top = e.clientY + 'px';
    particle.style.fontSize = '40px';
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '2000000'; // Make sure it's on top of everything
    particle.style.userSelect = 'none';
    
    // Using a specific animation for the individual clicks
    particle.style.animation = 'clickPop 1.5s ease-out forwards';
    
    document.body.appendChild(particle);
    
    setTimeout(() => particle.remove(), 1500);
});