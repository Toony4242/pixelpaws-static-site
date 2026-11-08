const button = document.getElementById("toggleButton");
const tip = document.getElementById("tip");

button.addEventListener("click", () => {
  const isHidden = tip.classList.toggle("hidden");
  button.textContent = isHidden ? "Toon adoptietip" : "Verberg adoptietip";
  button.setAttribute("aria-expanded", String(!isHidden));
});
