function createHearts() {
    const hearts = document.querySelector('.hearts');
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    hearts.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}

setInterval(createHearts, 300);

function moveButton(button) {
    const MAX_DODGES = 5;

    const dodges = (parseInt(button.dataset.dodges || "0", 10) + 1);
    button.dataset.dodges = dodges;

    if (dodges >= MAX_DODGES) {
        button.style.transition = "opacity 0.25s ease, transform 0.25s ease";
        button.style.opacity = "0";
        button.style.transform = "scale(0.9)";
        setTimeout(() => {
            button.style.display = "none";
        }, 250);
        return;
    }

    const padding = 20;

    const maxX = Math.max(0, window.innerWidth - button.offsetWidth - padding);
    const maxY = Math.max(0, window.innerHeight - button.offsetHeight - padding);

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    button.style.position = 'absolute';
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}

// Navigation functions
function goToStep2() {
    document.getElementById('step1').classList.remove('active');
    document.getElementById('step2').classList.add('active');
    triggerConfetti();
}

function goToStep3() {
    document.getElementById('step2').classList.remove('active');
    document.getElementById('step3').classList.add('active');
    triggerConfetti();
}

function finalStep() {
    document.getElementById('step3').classList.remove('active');
    document.querySelector('.final-message').style.display = 'block';
    document.querySelector('.whatsapp-btn').style.display = 'inline-block';
    triggerConfetti();

    setTimeout(() => triggerConfetti(), 500);
    setTimeout(() => triggerConfetti(), 1000);
    setTimeout(() => triggerConfetti(), 1500);
}

function triggerConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });

}
