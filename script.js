window.addEventListener("scroll", () => {
document.querySelectorAll(".glass-card,.feature-card,.service-card,.pricing-card")
.forEach(card => {
card.style.transform = `translateY(${window.scrollY * 0.001}px)`;
});
});
