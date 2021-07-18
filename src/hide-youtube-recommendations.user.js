// ==UserScript==
// @name         Hide youtube recommendations
// @namespace    https://github.com/kawamataryo/userscripts
// @version      1.0.1
// @description  try to take over the world!
// @author       kawamataryo
// @match        https://www.youtube.com/watch?v=*
// @grant        none
// @icon         https://www.youtube.com/s/desktop/a910c60b/img/favicon_96x96.png
// @updateURL    https://github.com/kawamataryo/userscripts/raw/main/src/hide-youtube-recommendations.user.js
// @downloadURL  https://github.com/kawamataryo/userscripts/raw/main/src/hide-youtube-recommendations.user.js
// ==/UserScript==

const toDisplayNone = (el) => {
  if (!el) {
    return;
  }
  el.style.display = "none";
};

(function () {
  console.log("Enabled hide youtube recommendations.");

  // Stop next video when video ended
  const video = document.querySelector(
    "#movie_player > div.html5-video-container > video"
  );
  const primary = document.querySelector("#primary");
  if (video) {
    video.addEventListener("ended", () => {
      const cancelBtn = document.querySelector(
        ".ytp-autonav-endscreen-button-container > button"
      );
      if (cancelBtn) {
        cancelBtn.click();
      }

      const primaryArea = document.querySelector("#primary");
      toDisplayNone(primaryArea);
    });
  }

  // Hide sidebar
  const sidebar = document.querySelector("#secondary");
  if (primary && sidebar) {
    primary.style.maxWidth = `${primary.clientWidth}px`;
    toDisplayNone(sidebar);
  }

  // Hide meta
  const meta = document.querySelector("#meta");
  toDisplayNone(meta);

  // Hide comments
  const comments = document.querySelector("#comments");
  toDisplayNone(comments);
})();
