"use strict";

const markAllRead = document.querySelector(".all-read");
const notificationNumber = document.querySelector(".notification-number");
const notificationContainer = document.querySelectorAll(
  ".notification-container"
);

// Mark all read
markAllRead.addEventListener("click", function () {
  notificationContainer.forEach((container) => {
    // seen.classList.remove("not-seen");

    container.style.backgroundColor = "#FFF";
    notificationNumber.textContent = 0;
    container.classList.remove("unread-notification-container");
    const seen = document.querySelectorAll("span.not-seen")[0];
    seen.classList.remove("not-seen");
  });
});

// Read each notification
notificationContainer.forEach((container) => {
  container.addEventListener("click", () => {
    if (container.classList.contains("unread-notification-container")) {
      // seen.classList.remove("not-seen");

      container.style.backgroundColor = "#fff";
      notificationNumber.textContent = notificationNumber.textContent - 1;
      container.classList.remove("unread-notification-container");
      const seen = document.querySelectorAll("span.not-seen")[0];
      seen.classList.remove("not-seen");
    }
  });
});
