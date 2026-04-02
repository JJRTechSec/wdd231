const npModal = document.querySelector('#npModal');
const bronzeModal = document.querySelector('#bronzeModal');
const silverModal = document.querySelector('#silverModal');
const goldModal = document.querySelector('#goldModal');

const openModal = document.querySelector("#openModal");
const openModal2 = document.querySelector("#openModal2");
const openModal3 = document.querySelector("#openModal3");
const openModal4 = document.querySelector("#openModal4");

window.addEventListener("load", function () {
  const now = new Date();
  const formattedTimestamp =
    now.getFullYear() + "-" +
    String(now.getMonth() + 1).padStart(2, "0") + "-" +
    String(now.getDate()).padStart(2, "0") + " " +
    String(now.getHours()).padStart(2, "0") + ":" +
    String(now.getMinutes()).padStart(2, "0") + ":" +
    String(now.getSeconds()).padStart(2, "0");

  const timestampField = document.querySelector('#timestamp');

  if (timestampField) {
    timestampField.value = formattedTimestamp;
  }
});

const membershipURL = './data/membership.json';
async function getMembershipInfo() {
  const response = await fetch(membershipURL);
  const data = await response.json();
  setupModals(data.membershipLevel);
};

getMembershipInfo();

function setupModals(levels) {
  const modals = [
    { btn: "#openModal", modal: "#npModal", data: levels[0] },
    { btn: "#openModal2", modal: "#bronzeModal", data: levels[1] },
    { btn: "#openModal3", modal: "#silverModal", data: levels[2] },
    { btn: "#openModal4", modal: "#goldModal", data: levels[3] }
  ];

  modals.forEach(item => {
    const button = document.querySelector(item.btn);
    const modal = document.querySelector(item.modal);

    const title = modal.querySelector(".membershipName");
    const price = modal.querySelector(".price");
    const list = modal.querySelector(".benefitsInfo");
    const closeBtn = modal.querySelector(".closeModal");

    title.textContent = item.data.name;
    price.textContent = `${item.data.price} ${item.data.currency} (${item.data.billingCycle})`;

    list.innerinnerHTML = "";
    item.data.benefits.forEach(benefit => {
      if (benefit) {
        const li = document.createElement("li");
        li.textContent = benefit;
        list.appendChild(li);
      }
    });

    button.addEventListener("click", () => {
      modal.showModal();
    });

    closeBtn.addEventListener("click", () => {
      modal.close();
    });
  });
}