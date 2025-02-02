//animowanie tlo
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const scrollHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercentage = scrollPosition / scrollHeight;

  const position = scrollPercentage * 100;

  document.body.style.backgroundPosition = `${position}% 50%`;
});
