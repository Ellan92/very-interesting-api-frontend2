const drinkMenu = {
  drinks: [
    {
      id: 1,
      name: "Margarita",
      ingredients: ["Tequila", "Triple sec", "Lime juice", "Salt"],
    },
    {
      id: 2,
      name: "Mojito",
      ingredients: ["White rum", "Sugar", "Lime juice", "Soda Water", "Mint"],
    },
    {
      id: 3,
      name: "Long Island Iced Tea",
      ingredients: [
        "Vodka",
        "Tequila",
        "Light rum",
        "Triple sec",
        "Gin",
        "Lemon juice",
        "Cola",
      ],
    },
    {
      id: 4,
      name: "Cosmopolitan",
      ingredients: [
        "Vodka",
        "Triple sec",
        "Cranberry juice",
        "Fresh lime juice",
      ],
    },
    {
      id: 5,
      name: "Pina Colada",
      ingredients: ["Light rum", "Coconut cream", "Pineapple juice"],
    },
    {
      id: 6,
      name: "Espresso Martini",
      ingredients: ["Vodka", "Espresso", "Coffee liqueur", "Sugar syrup"],
    },
    {
      id: 7,
      name: "Bloody Mary",
      ingredients: [
        "Vodka",
        "Tomato juice",
        "Lemon juice",
        "Worcestershire sauce",
        "Tabasco",
        "Celery",
        "Salt",
        "Pepper",
      ],
    },
    {
      id: 8,
      name: "Mai Tai",
      ingredients: [
        "White rum",
        "Dark rum",
        "Lime juice",
        "Orange Curaçao",
        "Orgeat syrup",
        "Mint",
      ],
    },
    {
      id: 9,
      name: "Moscow Mule",
      ingredients: ["Vodka", "Spicy ginger beer", "Lime juice", "Ice", "Mint"],
    },
    {
      id: 10,
      name: "Old Fashioned",
      ingredients: [
        "Bourbon or Rye whiskey",
        "Angostura bitters",
        "Sugar",
        "Water",
        "Orange zest",
      ],
    },
  ],
};

console.log(drinkMenu);

let drinkContainer = document.querySelector("#drink-container");

function displayDrinks(drinks) {
  drinkContainer.innerHTML = "";

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
drinkMenu.drinks.forEach((d) => {
  console.log(d);

  let html = ;
  drinkContainer.innerHTML += html;
});

function getDrinks() {
    fetch("http://localhost:5023/v1/Drink")
      .then((res) => res.json())
      .then((data) => displayDrinks(data));
}
