'use strict';

const body = document.querySelector('body');
body.style.position = "relative";

const pushNotification = (posTop, posRight, title, description, type) => {
  const divElement = document.createElement('div');

  divElement.classList.add('notification');
  divElement.style.top = `${posTop}px`;
  divElement.style.right = `${posRight}px`;

  const titleElement = document.createElement('h2');
  titleElement.classList.add('title');
  titleElement.textContent = title;

  const descriptionElement = document.createElement('p');
  descriptionElement.textContent = description;

  divElement.appendChild(titleElement);
  divElement.appendChild(descriptionElement);

  if (type === "success") {
    divElement.classList.add('success');
  }

  if (type === "error") {
    divElement.classList.add('error');
  }

  if (type === "warning") {
    divElement.classList.add('warning');
  }

  document.body.appendChild(divElement);
  setTimeout(() => {
      document.body.removeChild(divElement);
  }, 2000)
};


pushNotification(
  10,
  10,
  'Title of Success message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'success',
);

pushNotification(
  164,
  10,
  'Title of Error message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'error',
);

pushNotification(
  290,
  10,
  'Title of Warning message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'warning',
);