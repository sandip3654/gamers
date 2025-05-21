let isSpinning = false;
let spinCount = 0;

function spin() {
  if (isSpinning) return;
  isSpinning = true;

  document.getElementById("wheel").style.transition = "transform 4.5s ease-out";
  const randomDeg = Math.floor(Math.random() * 360 + 1440); // 4+ full spins
  document.getElementById("wheel").style.transform = `rotate(${randomDeg}deg)`;

  spinCount++;

  setTimeout(() => {
    document.getElementById("taDaSound").play();
    startConfetti();

    if (spinCount === 1) {
      // Show second social bar ad
      const script = document.createElement("script");
      script.src = "//pl26701451.profitableratecpm.com/bc/0b/5d/bc0b5dfbb5cf7a11b1bc362d01e0dbcd.js";
      document.body.appendChild(script);
    }

    if (spinCount === 3) {
      triggerPopunder();
    }

    isSpinning = false;
  }, 4500);
}

function triggerPopunder() {
  const script = document.createElement("script");
  script.src = "//pl26702073.profitableratecpm.com/e0/54/27/e054274224ad9af57c3aa099cb0fdf20.js";
  document.body.appendChild(script);
}

// Back button trap
history.pushState(null, document.title, location.href);
window.addEventListener('popstate', function () {
  triggerPopunder();
  history.pushState(null, document.title, location.href);
});

// Confetti effect
function startConfetti() {
  const duration = 2 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 1000 };

  const interval = setInterval(() => {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const confetti = window.confetti || (() => {});
    confetti(Object.assign({}, defaults, { particleCount: 50, origin: { x: Math.random(), y: Math.random() - 0.2 } }));
  }, 250);
}
