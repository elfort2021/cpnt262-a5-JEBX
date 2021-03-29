// TO DO: integrate or reconcile with animation.js
// 1-3=fruits 4-6=dairy 7-9=proteins 10-12=grains
fetch('/api/v0/recipegenerator')
  .then(function (response) {
    if (!response.ok) {
      throw new Error("Invalid response");
    }
    return response.json();
  })
  .then(function (ingredients) {

    function outputAll() {
    let fruit = ingredients[Math.floor(Math.random() * 3) + 1];
    let dairy = ingredients[Math.floor(Math.random() * 3) + 4];
    let protein = ingredients[Math.floor(Math.random() * 3) + 7];
    let grain = ingredients[Math.floor(Math.random() * 3) + 10];

    // // two outputs: one for the greensock ingredients and another for the recipe text
    // let outputRecipeAnimation = "";
    // let outputRecipeTitle = "";
    // // where the outputs respectively will go
    // const recipeAnimationGrid = document.querySelector('.recipegrid');
    // const recipeInstructions = document.querySelector('.recipe');

    document.querySelector(".fruit").setAttribute("src", `images/${fruit.imgSrc}`);
    document.querySelector(".dairy").setAttribute("src", `images/${dairy.imgSrc}`);
    document.querySelector(".protein").setAttribute("src", `images/${protein.imgSrc}`);
    document.querySelector(".grain").setAttribute("src", `/images/${grain.imgSrc}`);

    document.querySelector(".fruit").setAttribute("alt", `images/${fruit.ingr}`);
    document.querySelector(".dairy").setAttribute("alt", `images/${dairy.ingr}`);
    document.querySelector(".protein").setAttribute("alt", `images/${protein.ingr}`);
    document.querySelector(".grain").setAttribute("alt", `/images/${grain.ingr}`);

    document.querySelector("h2").innerHTML = `The ${fruit.titleTrait} ${dairy.titleTrait} ${protein.titleTrait} ${grain.titleTrait}`;

    // outputRecipeAnimation =
    // `
    // <div class="cover">
    //   <img src="images/" class="reveal" alt="serving cover">
    // </div>
    // <div class="cover">
    //   <img src="images/" class="reveal" alt="serving cover">
    // </div>
    // <div class="cover">
    //   <img src="images/" class="reveal" alt="serving cover">
    // </div>
    // <div class="cover">
    //   <img src="images/" class="reveal" alt="serving cover">
    // </div>

    // <figure class="fruit">
    //   <img src="images/${fruit.imgSrc}" alt="${fruit.ingr}">
    //   <figcaption>${fruit.ingr}</figcaption>
    // </figure>
    // <figure class="dairy">
    //   <img src="images/${dairy.imgSrc}" alt="${dairy.ingr}">
    //   <figcaption>${dairy.ingr}</figcaption>
    // </figure>
    // <figure class="protein">
    //   <img src="images/${protein.imgSrc}" alt="${protein.ingr}">
    //   <figcaption>="${protein.ingr}</figcaption>
    // </figure>
    // <figure class="grain">
    //   <img src="images/${grain.imgSrc}" alt="${grain.ingr}">
    //   <figcaption>${grain.ingr}</figcaption>
    // </figure>
    // `
    // recipeAnimationGrid.innerHTML = outputRecipeAnimation;

    // outputRecipeTitle =
    //   `<h2>The </h2>`
      
    // recipeTitle.innerHTML = outputRecipeTitle;
  }})
  .catch(function(error) {
    console.log(error);
  })