let allValues = [];
let degrees = [[0, 60, -45], [45, -20, 70], [60, 165, 20], [60, 165, 200], [45, -20, 250], [0, 240, -45]];
//geeft het random getal en zorgt dat dat aantal in de dice komt 
let roll = document.querySelector(".dice");
roll.addEventListener("click", () =>{
  roll.classList.add("rotate");
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  const average = document.getElementById("average");
  const list = document.getElementById("list");

  console.log(randomNumber);
  allValues.push(randomNumber);
  average.innerHTML = getAverage(allValues);
  list.innerHTML='';
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
  setTimeout(function() {
    roll.classList.remove("rotate");
    roll.style.transform = `rotateY(${degrees[randomNumber-1][0]}deg) rotateX(${degrees[randomNumber-1][1]}deg) rotateZ(${degrees[randomNumber-1][2]}deg)`;
  }, 2500);
});
//berekend het gemmiddelde
function getAverage(values) {
  return sum = values.reduce((total, value) => total + value, 0)/values.length;
}