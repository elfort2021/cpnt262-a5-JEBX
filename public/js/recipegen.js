// TO DO: integrate or reconcile with animation.js
// 1-3=fruits 4-6=dairy 7-9=proteins 10-12=grains
fetch("/api/recipegen")
.then(function(response) {
  if (!response.ok) {
    throw new Error ("Invalid response");
  } return response.json();
})
.then(function(ingredients) {
  let outputRecipeAnimation = "";
  let outputRecipeInstructions = "";

  const recipeAnimationGrid = document.querySelector(".recipegrid");
  const recipeInstructions = document.querySelector(".recipe");

  const fruit = ingredients[Math.floor(Math.random() * 3) + 1];
  const dairy = ingredients[Math.floor(Math.random() * 3) + 4];
  const protein = ingredients[Math.floor(Math.random() * 3) + 7];
  const grain = ingredients[Math.floor(Math.random() * 3) + 10];
});
