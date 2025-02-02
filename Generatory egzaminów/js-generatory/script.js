const percentageRange = document.getElementById('percent');
const toggleModeButton = document.getElementById('toggleMode');
const body = document.body;

// Function to check the current time and set the mode accordingly
function setInitialMode() {
  const currentHour = new Date().getHours();
  // Check if the current time is between 19:00 and 7:00
  if (currentHour >= 19 || currentHour < 7) {
    body.classList.add('night-mode');
    body.classList.remove('day-mode');
    toggleModeButton.textContent = 'Day Mode';
  } else {
    body.classList.add('day-mode');
    body.classList.remove('night-mode');
    toggleModeButton.textContent = 'Night Mode';
  }
}

// Call the function to set the initial mode
setInitialMode();

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
