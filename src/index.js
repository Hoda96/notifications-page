"use strict";

const markAllRead = document.querySelector(".all-read");
const notificationNumber = document.querySelector(".notification-number");
const notificationContainer = document.querySelectorAll(
  ".notification-container"
);
console.log("notif-container", notificationContainer);

let notifiNum = notificationNumber.textContent;

// Mark all read
markAllRead.addEventListener("click", function () {
  notificationContainer.forEach((container) => {
    container.style.backgroundColor = "#FFF";
    notificationNumber.textContent = 0;
    container.classList.remove("unread-notification-container");
  });
});

// Read each notification
notificationContainer.forEach((container) => {
  container.addEventListener("click", () => {
    if (container.classList.contains("unread-notification-container")) {
      container.style.backgroundColor = "#fff";
      notificationNumber.textContent = notificationNumber.textContent - 1;

      container.classList.remove("unread-notification-container");
    }
  });
});
