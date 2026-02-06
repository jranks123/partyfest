let isRevealed = false;
startBackgroundDrift();
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

    const balloonCount = 400; 
    let showerEmojis = [];
    
    // THEMED EMOJI LOGIC
    if (type === 'early') {
        // The "Early Bird" shower
        showerEmojis = ['🐦', '🐤', '🐣', '🕊️', '💨'];
    } else if (type === 'premium') {
        // The "Big Playaaaa" money shower
        showerEmojis = ['🤑', '💸', '💰', '💵', '💎', '✨'];
    } else {
        // The standard "Normal" shower
        showerEmojis = ['🎈', '✨', '💖', '🎡', '🍦'];
    }

    for (let i = 0; i < balloonCount; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'mass-balloon';
        balloon.textContent = showerEmojis[Math.floor(Math.random() * showerEmojis.length)];
        
        balloon.style.left = Math.random() * 100 + 'vw';
        balloon.style.fontSize = (Math.random() * 30 + 30) + 'px';
        
        // Randomize the flight paths slightly for more chaos
        balloon.style.animationDelay = (Math.random() * 0.5) + 's';
        balloon.style.animationDuration = (Math.random() * 1.2 + 0.6) + 's'; 

        document.body.appendChild(balloon);
        
        // Remove from DOM after animation
        setTimeout(() => balloon.remove(), 2000);
    }

    // Give them a second to enjoy the themed shower before the redirect
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

function startBackgroundDrift() {
    setInterval(() => {
        const driftEmojis = ['✨', '☁️', '🌈', '🎈', '🕊️', '🌸'];
        const p = document.createElement('div');
        
        p.className = 'background-drift';
        p.textContent = driftEmojis[Math.floor(Math.random() * driftEmojis.length)];
        
        // Random horizontal start position
        p.style.left = Math.random() * 100 + 'vw';
        // Random size
        p.style.fontSize = (Math.random() * 20 + 20) + 'px';
        // Random speed
        p.style.animationDuration = (Math.random() * 5 + 10) + 's';
        // Make them slightly transparent
        
        document.body.appendChild(p);
        
        // Clean up after it floats away
        setTimeout(() => p.remove(), 15000);
    }, 1000); // Spawns one every 2 seconds
}