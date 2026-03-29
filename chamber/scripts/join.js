const membershipURL = './data/membership.json';
async function getMembershipInfo() {
  const response = await fetch(membershipURL);
  const data = await response.json();
  console.log(data);
};

getMembershipInfo();