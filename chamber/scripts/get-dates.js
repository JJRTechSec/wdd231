const modifiedDate = new Date(document.lastModified);

const year = modifiedDate.getFullYear();
const month = modifiedDate.toLocaleString("en-GB", { month: "long" });
const day = modifiedDate.getDate();

document.getElementById("currentYear").textContent = `${year}`;
document.getElementById("lastModified").textContent = `Last Modified: ${day} ${month} ${year}`;