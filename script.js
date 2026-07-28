const openBtn = document.getElementById("openBtn");
const memory = document.getElementById("memory");

openBtn.addEventListener("click", () => {
  memory.classList.remove("hidden");
  openBtn.style.display = "none";
});
