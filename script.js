// Show loading screen initially
const loadingScreen = document.getElementById('loading-screen');
const container = document.querySelector('.container');

// After 5 seconds, hide loading screen and show main content
setTimeout(() => {
    loadingScreen.style.display = 'none';
    container.classList.remove('hidden');
}, 5000);

// Countdown Logic
let countdown = 5;
const countdownElement = document.getElementById('countdown');

const countdownInterval = setInterval(() => {
    countdown--;
    countdownElement.textContent = countdown;

    if (countdown <= 0) {
        clearInterval(countdownInterval);
        countdownElement.textContent = "Hacked!";
        alert("You are just hacked! Happy Valentine's Day!");
    }
}, 1000);

// Share on WhatsApp
document.getElementById('share-whatsapp').addEventListener('click', () => {
    const shareUrl = `https://api.whatsapp.com/send?text=Check%20out%20this%20awesome%20Valentine's%20Day%20surprise!%20${window.location.href}`;
    window.open(shareUrl, '_blank');
});

// Share on Instagram
document.getElementById('share-instagram').addEventListener('click', () => {
    const shareUrl = `https://www.instagram.com/`;
    alert("To share on Instagram, copy the link and post it in your story or feed!");
    window.open(shareUrl, '_blank');
});
