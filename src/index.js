"use strict";

const markAllRead = document.querySelector(".all-read");
const notificationNumber = document.querySelector(".notification-number");

console.log(notificationNumber.textContent);

markAllRead.addEventListener("click", test);

function test() {
  alert("all read");
}
