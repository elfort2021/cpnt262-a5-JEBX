// TO DO: integrate or reconcile with animation.js
// 1-3=fruits 4-6=dairy 7-9=proteins 10-12=grains
fetch("/api/v0/recipegenerator")
  .then(function (response) {
    if (!response.ok) {
      throw new Error("Invalid response");
    }
    return response.json();
  })
  .then(function (ingredients) {
    // two outputs: one for the greensock ingredients and another for the recipe text
    let outputRecipeAnimation = "";
    let outputRecipeTitle = "";
    // where the outputs respectively will go
    const recipeAnimationGrid = document.querySelector(".recipegrid");
    const recipeInstructions = document.querySelector(".recipe");

    const fruit = ingredients[Math.floor(Math.random() * 3) + 1];
    const dairy = ingredients[Math.floor(Math.random() * 3) + 4];
    const protein = ingredients[Math.floor(Math.random() * 3) + 7];
    const grain = ingredients[Math.floor(Math.random() * 3) + 10];

    outputRecipeAnimation +=
    `
    <div class="cover">
      <img src="images/" class="reveal" alt="serving cover">
    </div>
    <div class="cover">
      <img src="images/" class="reveal" alt="serving cover">
    </div>
    <div class="cover">
      <img src="images/" class="reveal" alt="serving cover">
    </div>
    <div class="cover">
      <img src="images/" class="reveal" alt="serving cover">
    </div>

    <figure class="fruit">
      <img src="images/${fruit.imgSrc}" alt="${fruit.ingr}">
      <figcaption>${fruit.ingr}</figcaption>
    </figure>
    <figure class="dairy">
      <img src="images/${dairy.imgSrc}" alt="${dairy.ingr}">
      <figcaption>${dairy.ingr}</figcaption>
    </figure>
    <figure class="protein">
      <img src="images/${protein.imgSrc}" alt="${protein.ingr}">
      <figcaption>="${protein.ingr}</figcaption>
    </figure>
    <figure class="grain">
      <img src="images/${grain.imgSrc}" alt="${grain.ingr}">
      <figcaption>${grain.ingr}</figcaption>
    </figure>
    `
    outputRecipeTitle +=
      `<h2>The ${fruit.titleTrait} ${dairy.titleTrait} ${protein.titleTrait} ${grain.titleTrait}</h2>`
  })
  .catch(function(error) {
    console.log(error);
  })