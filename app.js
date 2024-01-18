import { triggerTypeWriter } from './animation/typewriter.js';
import { enableProjectChange } from './helper/change-project.js';
import * as es from './helper/element-selector.js'

const bgImg = document.querySelector(".background-image");

window.addEventListener("scroll", (event) => {
    const scroll = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const triggerPosition = (scrollHeight - clientHeight) * 0.7;
    if (scroll >= triggerPosition) {
        bgImg.classList.add("noblur");
    } else {
        bgImg.classList.remove("noblur");
    }
});

// trigger animation
window.onload = triggerTypeWriter();
window.onload = enableProjectChange();