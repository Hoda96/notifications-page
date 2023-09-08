"use strict";

const markAllRead = document.querySelector(".all-read");
const notificationNumber = document.querySelector(".notification-number");
const unreadNotificationContainer = document.querySelectorAll(
  ".unread-notification-container"
);

let notifiNum = notificationNumber.textContent;

// Mark all read
markAllRead.addEventListener("click", function () {
  unreadNotificationContainer.forEach((container) => {
    container.style.backgroundColor = "#FFF";
    notificationNumber.textContent = 0;
  });
});

// Read each notification
let seen = true;

unreadNotificationContainer.forEach((container) => {
  container.addEventListener("click", () => {
    container.style.backgroundColor = "#fff";

    // container.classList.remove("bg-VeryLightGrayishBlue");
    // container.classList.add("bg-white");

    notificationNumber.textContent = notificationNumber.textContent - 1;

    // if (notificationNumber < 0) return;
  });
});
