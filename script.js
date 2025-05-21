const wheel = document.getElementById('wheel');
const spinBtn = document.getElementById('spin-btn');
const sound = document.getElementById('celebration-sound');

let currentDeg = 0;

spinBtn.addEventListener('click', () => {
  spinBtn.style.pointerEvents = 'none';

  const extraDeg = Math.floor(Math.random() * 360);
  const spins = 3;

  currentDeg += (spins * 360) + extraDeg;
  wheel.style.transition = 'transform 4s ease-out';
  wheel.style.transform = `rotate(${currentDeg}deg)`;

  setTimeout(() => {
    sound.currentTime = 0;
    sound.play();

    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.6 }
    });

    spinBtn.style.pointerEvents = 'auto';
  }, 4000);
});
