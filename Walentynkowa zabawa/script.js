function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');

  const size = Math.random() * 20 + 10; // Random size between 10px and 30px
  heart.style.width = `${size}px`;
  heart.style.height = `${size}px`;

  heart.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
  heart.style.animationDuration = Math.random() * 3 + 2 + 's'; // Different speeds

  document.querySelector('.heart-container').appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHeart, 300); // Generates a heart every 300ms
