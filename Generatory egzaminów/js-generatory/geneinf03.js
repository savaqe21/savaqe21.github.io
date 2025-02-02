//main function

String.prototype.shuffle = function () {
  // Mieszanie stringa
  var a = this.split(''),
    n = a.length;
  for (var i = n - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
  }
  return a.join('');
};
var Answer = function (answer, question, order) {
  // Obiekt odpowiedzi
  this.answer = answer;
  this.question = question;
  this.order = order;
};
function shuffle(array) {
  // Mieszanie tablicy
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

var answerBase_ee09 = [
  new Answer('c', '1', '1234'.shuffle()),
  new Answer('d', '2', '1234'.shuffle()),
  new Answer('c', '3', '1234'.shuffle()),
  new Answer('a', '4', '1234'.shuffle()),
  new Answer('c', '5', '1234'.shuffle()),
  new Answer('d', '6', '1234'.shuffle()),
  new Answer('c', '7', '1234'.shuffle()),
  new Answer('d', '8', '1234'.shuffle()),
  new Answer('a', '9', '1234'.shuffle()),
  new Answer('b', '10', '1234'.shuffle()),
  new Answer('b', '11', '1234'.shuffle()),
  new Answer('d', '12', '1234'.shuffle()),
  new Answer('d', '13', '1234'.shuffle()),
  new Answer('c', '14', '1234'.shuffle()),
  new Answer('a', '15', '1234'.shuffle()),
  new Answer('d', '16', '1234'.shuffle()),
  new Answer('d', '17', '1234'.shuffle()),
  new Answer('b', '18', '1234'.shuffle()),
  new Answer('d', '19', '1234'.shuffle()),
  new Answer('d', '20', '1234'.shuffle()),
  new Answer('b', '21', '1234'.shuffle()),
  new Answer('b', '22', '1234'.shuffle()),
  new Answer('b', '23', '1234'.shuffle()),
  new Answer('b', '24', '1234'.shuffle()),
  new Answer('b', '25', '1234'.shuffle()),
  new Answer('d', '26', '1234'.shuffle()),
  new Answer('a', '27', '1234'.shuffle()),
  new Answer('d', '28', '1234'.shuffle()),
  new Answer('c', '29', '1234'.shuffle()),
  new Answer('b', '30', '1234'.shuffle()),
  new Answer('c', '31', '1234'.shuffle()),
  new Answer('d', '32', '1234'.shuffle()),
  new Answer('a', '33', '1234'.shuffle()),
  new Answer('c', '34', '1234'.shuffle()),
  new Answer('b', '35', '1234'.shuffle()),
  new Answer('a', '36', '1234'.shuffle()),
  new Answer('c', '37', '1234'.shuffle()),
  new Answer('c', '38', '1234'.shuffle()),
  new Answer('d', '39', '1234'.shuffle()),
  new Answer('d', '40', '1234'.shuffle()),
];
function updateInfo() {
  let percents = parseFloat(document.querySelector('#percent').value)
    ? parseFloat(document.querySelector('#percent').value)
    : null;
  if (percents != null) {
    if (percents == null || percents > 100 || percents < 0) percents = 100;
    // TODO: Dynamiczna zmiana informacji na temat pkt, procentów itp.
    let perc;
    for (let i = 0; i <= 40; i++) {
      perc = (i / 40) * 100;
      let difference = 1; // Różnica pomiędzy elementami
      if (difference < percents - perc) difference = percents - perc;
      else break;
    }
    document.querySelector('#info').removeAttribute('hidden');
    document.querySelector('#info').innerHTML =
      'Przewidywana ilość procent:<b> ' + perc.toFixed(1) + '%</b><br>';
    document.querySelector('#info').innerHTML +=
      'Przewidywana ilość punktów:<b> ' + perc.toFixed(1) / 2.5 + '/40</b><br>';
  } else {
    document.querySelector('#info').innerHTML =
      "<b style='color:red'>Nieprawidłowe informacje!</b>";
  }
}
setInterval(updateInfo, 50);
function generateForm() {
  // Szukanie zaokrąglonej liczby do podanej
  let inPercentage = parseFloat(document.querySelector('#percent').value)
    ? parseFloat(document.querySelector('#percent').value)
    : null;
  if (inPercentage == null || inPercentage > 100 || inPercentage < 0)
    inPercentage = 100;

  let perc; // procenty końcowe
  for (let i = 0; i <= 40; i++) {
    perc = (i / 40) * 100;
    let difference = 1; // Różnica pomiędzy elementami
    if (difference < inPercentage - perc) difference = inPercentage - perc;
    else break;
  }
  // Wybieranie i mieszanie pytań
  let testArr = answerBase_ee09;
  if (perc != 100) {
    // Ewentualna korekta poprawnych odp na błędne
    for (let i = 0; i < 40 - Math.round(perc / 2.5); i++) {
      switch (testArr[testArr.length - 1 - i].answer) {
        case 'a':
          testArr[testArr.length - 1 - i].answer = 'b';
          break;
        case 'b':
          testArr[testArr.length - 1 - i].answer = 'a';
          break;
        case 'c':
          testArr[testArr.length - 1 - i].answer = 'd';
          break;
        case 'd':
          testArr[testArr.length - 1 - i].answer = 'c';
          break;
      }
    }
  }
  shuffle(testArr);
  for (let i = 0; i < 40; i++) {
    // Kompletowanie forma
    let x =
      "<input name='ansb" + (i + 1) + "' value='" + testArr[i].answer + "'>";
    let y =
      "<input name='pyt" + (i + 1) + "' value='" + testArr[i].question + "'>";
    let z =
      "<input name='orderodp" + (i + 1) + "' value='" + testArr[i].order + "'>";
    document.querySelector('form').innerHTML += x + y + z;
  }
  document.querySelector('form').submit(); // Wysłanie formularza
}
