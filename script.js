// Small enhancements for the Délice Douala demo website.
document.addEventListener("DOMContentLoaded", () => {
  const yearTarget = document.querySelector("[data-current-year]");
  if (yearTarget) {
    yearTarget.textContent = new Date().getFullYear();
  }
});
