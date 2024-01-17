// project selection
const fadeOutTransition = { opacity: 0 };
const fadeInTransition = { opacity: 1 };

const fadeTiming = function (duration) {
    return {
        duration: duration,
        iterations: 1,
        fill: "forwards",
    }
}

export function fadeIn(element, duration) {
    element.animate(fadeInTransition, fadeTiming(duration));
}

export function fadeOut(element, duration) {
    element.animate(fadeOutTransition, fadeTiming(duration));
}

export function fadeInFadeOut(element, action, duration) {
    fadeOut(element);
    setTimeout(() => {
        action();
        fadeIn(element);
    }, duration)
}