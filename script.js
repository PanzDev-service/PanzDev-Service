const cards = document.querySelectorAll('.card,.package,.price-card,.gallery-card');

cards.forEach(card=>{
card.addEventListener('mousemove',e=>{
const x = e.offsetX;
const y = e.offsetY;
card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(0,195,255,.18), rgba(255,255,255,.04))`;
})

card.addEventListener('mouseleave',()=>{
card.style.background = 'rgba(255,255,255,.04)';
})
})
