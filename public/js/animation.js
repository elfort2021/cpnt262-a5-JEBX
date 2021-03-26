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

// Push svg to bottom right 
gsap.to('.svg', {
  duration: 1.5, 
  x: 300, 
  y: 100,
  scale: 2, 
  ease: 'bounce'
})
// rotate SVG on load 
TweenMax.to('.svg', .9, {
  rotation:360, 
  transformOrigin:'center' 
}); 