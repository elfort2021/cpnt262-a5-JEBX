// var tl = gsap.timeline({
//   defaults: {duration: 0.5, ease: 'none', opacity: 0}
// }) 

// var tl2 =gsap.timeline({defaults: { duration: 1, delay: 3} 
// });

// tl.from('.svg', {y: 40}, '+=0.2');

// tl2.to('.svg', { 
//   x: 'random(-50, 50, 5)',
//   repeat: -1, 
//   yoyo: true, 
//   repeatRefresh: 
//  })

var svg = document.querySelector("button");

button.addEventListener("click", animate);

function animate() {

// Push svg down
gsap.to('.svg', {
  duration: 2.5, 
  
  y: 175,
  scale: 3, 
  ease: 'bounce'
})
// rotate SVG on reveal
TweenMax.to('.svg', .9, {
  
  rotation:360, 
  duration: 3.5,
  transformOrigin:'center' 
}
)}; 
