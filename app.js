import { triggerTypeWriter } from './animation/typewriter.js';
import { enableProjectChange } from './helper/change-project.js';

const bottomVisible = () =>
  document.documentElement.clientHeight + window.scrollY >=
  (document.documentElement.scrollHeight ||
    document.documentElement.clientHeight);

const bgImg = document.querySelector(".background-image");

document.addEventListener("scroll", (e) => {
    if (bottomVisible()) {
        bgImg.classList.add("noblur");
    } else {
        bgImg.classList.remove("noblur");
    }
})

// trigger animation
window.onload = triggerTypeWriter();
window.onload = enableProjectChange();