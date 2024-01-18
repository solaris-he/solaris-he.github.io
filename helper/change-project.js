import * as es from './element-selector.js'
import { fadeIn, fadeInFadeOut } from '../animation/fade.js';
import { projects } from '../description/project-description.js';
import { removeAllChildNodes } from './misc-helper.js';

export function enableProjectChange() {
    es.fassBtn.addEventListener("click", changeProject);
    es.movieFinderBtn.addEventListener("click", changeProject);
    es.cellSegBtn.addEventListener("click", changeProject);
    es.personalPortfolioBtn.addEventListener("click", changeProject);
}

function changeProject(e) {
    let project = null;
    let action = () => { };
    const parent = es.projectDetailContainer;
    const duration = 250;

    switch (e.target) {
        case es.fassBtn:
            project = projects.fass;
            action = () => { changeContent(parent, project.intro, project.feat) };
            fadeInFadeOut(parent, action, duration);
            break;
        case es.movieFinderBtn:
            project = projects.movieGeeks;
            action = () => { changeContent(parent, project.intro, project.feat, project.img, project.url) };
            fadeInFadeOut(parent, action, duration);
            break;
        case es.cellSegBtn:
            project = projects.cellSegmentation;
            action = () => { changeContent(parent, project.intro, project.feat, project.img, project.url) };
            fadeInFadeOut(parent, action, duration);
            break;
        case es.personalPortfolioBtn:
            console.log("why?");
            project = projects.personalPortfolio;
            action = () => { changeContent(parent, project.intro, project.feat) };
            fadeInFadeOut(parent, action, duration);
            break;
        default:
            console.log("something is wrong");
            break;
    }

};

function changeContent(parent, pText, pFeat, pImg, pUrl) {
    removeAllChildNodes(parent);
    if (pUrl) {
        const newBr = document.createElement('br');
        const newBtn = document.createElement('button');
        const newA = document.createElement('a');
        newBtn.innerHTML = 'Github repository';
        newBtn.style = "font-size: 1.25rem;";
        newA.href = pUrl;
        newA.appendChild(newBtn);
        parent.appendChild(newA);
        parent.appendChild(newBr);
    }

    const newP = document.createElement('p');
    newP.innerHTML = pText;
    newP.style = "margin: 0rem;";
    const newUl = document.createElement('ul');
    newUl.style = "margin-top: 0.75rem;"
    pFeat.forEach(feat => {
        const newLi = document.createElement('li');
        newLi.innerHTML = feat;
        newUl.appendChild(newLi);
    })
    parent.appendChild(newP);
    parent.appendChild(newUl);

    if (pImg) {
        const newBr = document.createElement('br');
        const newImg = document.createElement('img');
        newImg.src = pImg;
        // newImg.style.width = 'fit-content';
        parent.appendChild(newBr);
        parent.appendChild(newImg);
    }

}