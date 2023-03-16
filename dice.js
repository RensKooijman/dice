let allValues = [];
//geeft het random getal en zorgt dat dat aantal in de dice komt 
function rollDice() {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  const diceElement = document.getElementById("dice");
  const average = document.getElementById("average");
  const list = document.getElementById("list");

  console.log(randomNumber);
  allValues.push(randomNumber);
  average.innerHTML = getAverage(allValues);
  diceElement.innerHTML='';
  list.innerHTML='';
  for (var i = randomNumber; i >= 1; i--) {
    let newDiv = document.createElement('div');
    newDiv.classList.add('dot', `dot${i}`);
    diceElement.appendChild(newDiv);
  }
  //zorgt ervoor dat het aantal keer van getal wat gerold word in lijst komt
  const counts = {};
  for (let i = 0; i < allValues.length; i++) {
    const number = allValues[i];
    counts[number] = counts[number] ? counts[number] + 1 : 1;
  }
  for (const number in counts) {
    const count = counts[number];
    const listItem = document.createElement("li");
    listItem.innerHTML = `${number}: ${count}`;
    list.appendChild(listItem);
  }
  document.body.appendChild(list);
}
//berekend het gemmiddelde
function getAverage(values) {
  return sum = values.reduce((total, value) => total + value, 0)/values.length;
}