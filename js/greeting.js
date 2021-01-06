// Get the hour
const today = new Date();
const hour = today.getHours();

// Here you can change your name
const name = 'Edgar ❤';

// Here you can change your greetings
const gree1 = 'Hora do cochilo! ';
const gree2 = 'Bom dia! ';
const gree3 = 'Boa tarde! ';
const gree4 = 'Boa noite! ';
const gree5 = 'Boa noite! ';
const gree6 = 'Boa noite! ';

// Define the hours of the greetings
if (hour >= 23 && hour < 5) {
  document.getElementById('greetings').innerText = gree1 + name;
} else if (hour >= 6 && hour < 12) {
  document.getElementById('greetings').innerText = gree2 + name;
} else if (hour >= 12 && hour < 17) {
  document.getElementById('greetings').innerText = gree3 + name;
} else {
  document.getElementById('greetings').innerText = gree4 + name;
}
