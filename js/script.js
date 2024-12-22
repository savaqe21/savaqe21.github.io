const percentageRange = document.getElementById('percent');
const toggleModeButton = document.getElementById('toggleMode');
const body = document.body;

// Toggle between night and day mode
toggleModeButton.addEventListener('click', function () {
  if (body.classList.contains('day-mode')) {
    body.classList.remove('day-mode');
    body.classList.add('night-mode');
    toggleModeButton.textContent = 'Day Mode';
  } else {
    body.classList.remove('night-mode');
    body.classList.add('day-mode');
    toggleModeButton.textContent = 'Night Mode';
  }
});
