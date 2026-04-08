export function displayYear() {
  const currentYear = new Date(document.lastModified);
  const year = currentYear.getFullYear();
  document.getElementById("currentYear").textContent = `${year}`;
};