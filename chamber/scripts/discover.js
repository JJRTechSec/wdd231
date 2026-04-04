import { activities } from "../data/activities.mjs";
const grid = document.querySelector('.activity-grid');

function displayActivities(activities) {
  activities.forEach((activity, index) => {
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
    activityImg.setAttribute('alt', activity.alt);

    if (index < 2) {
      activityImg.setAttribute('loading', 'eager');
      activityImg.setAttribute('fetchpriority', 'high');
    } else {
      activityImg.setAttribute('loading', 'lazy');
      activityImg.setAttribute('fetchpriority', 'low');
    }

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

const welcomeMessageEl = document.querySelector('#welcomeMessage');
const lastVisit = localStorage.getItem('lastVisit');
const now = Date.now();

let message = '';

if (!lastVisit) {
  message = "Welcome! This is your first visit to our site. We're happy you're here!";
} else {
  const timeDifference = now - Number(lastVisit);
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  if (daysDifference < 1) {
    message = "Welcome back! You visited within the last 24hrs."
  } else if (daysDifference >= 1 && daysDifference < 2) {
    message = "Welcome back! It has been 1 day since your last visit to our site.";
  } else {
    message = `Welcome back! It has been ${daysDifference} days since your last visit to our site.`;
  }
}

welcomeMessageEl.textContent = message;

localStorage.setItem('lastVisit', now);