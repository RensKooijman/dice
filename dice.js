let allValues = [];

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
function getAverage(values) {
  if (values.length === 0) {
    return 0;
  }
  const sum = values.reduce((total, value) => total + value, 0);
  return sum / values.length;
}