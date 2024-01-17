import * as es from './element-selector.js'
import { fadeInFadeOut } from '../animation/fade.js';
import { projects } from '../description/project-description.js';
import { removeAllChildNodes } from './misc-helper.js';

export function enableProjectChange() {
    es.fassBtn.addEventListener("click", changeProject);
    es.movieFinderBtn.addEventListener("click", changeProject);
    es.cellTrackingBtn.addEventListener("click", changeProject);
}

function changeProject(e) {
    switch (e.target) {
        case es.fassBtn:
            const project = projects.fass
            const parent = es.projectDetailContainer;
            const action = () => { changeContent(parent, project.intro, project.feat) };
            fadeInFadeOut(parent, action, 250)
            break;
        case es.movieFinderBtn:
            changeProject("Movie Finder");
            break;
        default:
            console.log("something is wrong");
            break;
    }

};

function changeContent(parent, pText, pFeat, pImg) {
    removeAllChildNodes(parent);
    const newP = document.createElement('p');
    newP.innerHTML = pText;
    
    const newUl = document.createElement('ul');
    pFeat.forEach(feat => {
        const newLi = document.createElement('li');
        newLi.innerHTML = feat;
        newUl.appendChild(newLi);
    })
    
    parent.appendChild(newP);
    parent.appendChild(newUl);

    if (pImg){
        const newBr = document.createElement('br');
        const newImg = document.createElement('img');
        newImg.src = pImg;
        newImg.style.width = 'fit-content';
        parent.appendChild(newBr);
        parent.appendChild(newImg);
    }
}