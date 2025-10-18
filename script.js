const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');
const card = document.querySelector('.card');
const headMessage = document.querySelector('h2');
const message = document.querySelector('.message');
//btn muncul
setTimeout(() => {
  btn.style.display = "inline-block";
  btn.classList.add('animate__animated', 'animate__tada','animate__repeat-3');
}, 6100); 

//btn animasi saat klik
btn.addEventListener("click", function(){
  overlay.style.animation = "disappear .3s ease forwards";
  card.classList.add('animate__animated','animate__backInUp','animate__slow');
  headMessage.classList.add('animate__animated','animate__flipInX','animate__delay-2s');
  message.classList.add('animate__animated','animate__bounceIn','animate__delay-2s');
  
  //ts particle 
  const duration = 2 * 1000,
  animationEnd = Date.now() + duration,
  defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

const interval = setInterval(function() {
  const timeLeft = animationEnd - Date.now();
  
  if (timeLeft <= 0) {
    return clearInterval(interval);
  }
  
  const particleCount = 50 * (timeLeft / duration);
  
  // since particles fall down, start a bit higher than random
  confetti(
    Object.assign({}, defaults, {
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
    })
  );
  confetti(
    Object.assign({}, defaults, {
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
    })
  );
}, 250);
}
);

