import { activities } from "../data/activities.mjs";
const grid = document.querySelector('.activity-grid');

function displayActivities(activities) {
  activities.forEach((activity) => {
    const activityName = document.createElement('h2');
    const activityFigure = document.createElement('figure');
    const activityImg = document.createElement('img');
    const activityAddress = document.createElement('address');
    const activityDescription = document.createElement('p');
    const activityContainer = document.createElement('div');
    const learnMoreBtn = document.createElement('button');

    activityName.textContent = activity.name;
    activityImg.setAttribute('src', activity.photo_url);
    activityImg.setAttribute('width', 300);
    activityImg.setAttribute('height', 200);
    activityFigure.appendChild(activityImg);
    activityAddress.textContent = activity.address;
    activityDescription.textContent = activity.description;
    learnMoreBtn.textContent = "Learn More";

    activityContainer.appendChild(activityName);
    activityContainer.appendChild(activityAddress);
    activityContainer.appendChild(activityDescription);
    activityContainer.appendChild(activityFigure);
    activityContainer.appendChild(learnMoreBtn);
    
    grid.appendChild(activityContainer);
    console.log(activity);
  });
}

displayActivities(activities);