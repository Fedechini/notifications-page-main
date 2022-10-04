"use strict";

const markReadBtn = document.querySelector(".mark__read-btn");
const notifications = document.querySelectorAll(".notification");
const notificationNr = document.querySelector(".notifications__nr");

markReadBtn.addEventListener("click", () => {
  notifications.forEach((noti) => {
    if (noti.classList.contains("unread")) {
      // remove unread class
      noti.classList.remove("unread");

      // set notifications number to 0
      notificationNr.textContent = 0;

      // remove unread icons
      document
        .querySelectorAll(".unread-icon")
        .forEach((icon) => icon.classList.add("hidden"));
    }
  });
});
