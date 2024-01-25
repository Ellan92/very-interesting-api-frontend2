getDrinks();

console.log(drinkMenu);

let drinkContainer = document.querySelector("#drink-container");

function displayDrinks(drinks) {
  drinks.forEach((d) => {
    drinkContainer.innerHTML += `
  <div class="col-4 drink-item">
  <h2 class="text-center">${d.name}</h2>
  <p class="d-flex justify-content-between">
  <span>Ingredients:</span>
  <span class="fst-italic">${d.ingredients}
  </p>
  </div>
  `;
  });
}

function getDrinks() {
  fetch("http://localhost:5023/v1/Drink")
    .then((res) => res.json())
    .then((data) => displayDrinks(data));
}
