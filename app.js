import { projects } from './description/project-description.js';
import { triggerTypeWriter } from './animation/typewriter.js';
import { fadeIn, fadeOut } from './animation/fade.js';
import * as es from './helper/element-selector.js';
import { enableProjectChange } from './helper/change-project.js';

// es.fassBtn.addEventListener("click", changeProject);
// es.movieFinderBtn.addEventListener("click", changeProject);
// es.cellTrackingBtn.addEventListener("click", changeProject);

// function changeProject(e) {
//     switch (e.target) {
//         case es.fassBtn:
//             const project = projects.fass
//             changeProject(project.intro, project.feat);
//             break;
//         case es.movieFinderBtn:
//             changeProject("Movie Finder");
//             break;
//         default:
//             console.log("something is wrong");
//             break;
//     }

//     function changeProject(pText, pFeat) {
//         const duration = 250;
//         fadeOut(es.projectDetailContainer, duration)
//         setTimeout(() => {
//             es.projectIntro.innerHTML = pText;
//             removeAllChildNodes(es.projectFeat);
//             pFeat.forEach(feat => {
//                 const newLi = document.createElement('li');
//                 newLi.innerHTML = feat;
//                 es.projectFeat.appendChild(newLi);
//             })
//             fadeIn(es.projectDetailContainer, duration)
//         }, duration);
//     }

//     function removeAllChildNodes(parent) {
//         while (parent.firstChild) {
//             parent.removeChild(parent.firstChild);
//         }
//     }
// };

// trigger animation
window.onload = triggerTypeWriter();
window.onload = enableProjectChange();