export const projects = {
    "fass": {
        intro: `
        Finance as a Service, aka FaaS, is an e-finance product owned by Buka Australia Pty Ltd that provides loan services to the customers. 
        I was part of the engineer team mainly focusing on end-to-end web-application development, testing and deployment.
        I participated in the full software development life cycle (SDLC).
        `,
        feat: [
            `Worked under agile environment.`,
            `Groomed and implemented tickets with a total of 100+ story points.`,
            `Front-end: Vue.js, Nuxt.js, Typescript, HTML5, Tailwind CSS.`,
            `Back-end: Golang, gRPC, RESTful, PostgreSQL.`,
            `Integration Testing Framework: Jest.`,
            `DevOps: GitLab CI/CD, GCP, Docker, Kubernetes, Terraform, Datadog.`,
            `Collaborated with product teams to address the product requirements and UI/UX designers to provide an intuitive web interface for admin users.`,
        ,],
    },
    "movieGeeks": {
        intro: `Movie Geeks is an university capstone project.
        Its aim is to create an Imdb-like website to discover your next favourite movies.
        This web application with a full-package of movie rating, commenting and bookmarking functionalities.
        It has an optimised movie searching and filtering, and it also features a personalised movie recommendation assistant. 
        `,
        feat: [
            `Front-end: React.JS, Javascript, HTML5, CSS.`,
            `Back-end: Python, FastAPI, Firebase, SQLite3 (schema in 3NF).`,
            `DevOps: GitHub.`,
            `3rd-party APIs: IMDb (fetch movie posters, description, casts etc.).`,
        ],
        img: `../image/movie-geeks.jpg`,
        url: `https://github.com/solaris-he/capstone-project-3900-f14a-moviegeeks-public`,
    },
    "cellSegmentation": {
        intro: `Cell Segmentation is a university project about computer vision research. 
        Its primary aim is to create segmentation, labelling and tracking of the cells and automate cell mitosis detection.`,
        feat:[
            `Tech stacks: OpenCV, Python, Pytorch and Google Labs.`,
            `My contribution to this project is mainly focusing on the cell labelling process. I generated pseudo masks using watershed algorithm, 
            and I created consistent labelling, cell displacement calculation, cell size calculation, and tracking data for my teammates to detect mitosis with ML method.`,
    ],
        img: `../image/cell-segmentation.jpg`,
        url:`https://github.com/Will3577/Cell_Segmentation_Project`,
    },
    "personalPortfolio": {
        intro: `You are looking at it atm :)`,
        feat: [
            `It's still WIP.`,
            `Built with pure vanilla Javascript, HTML5 and CSS.`,
            `Since I feel I am spoiled by those handy front-end frameworks during work and university,
            I decided that why not put things in manual gear and build this portfolio without any of it,
            and explore the concept and the fundamental of DOM Event life cycle.`,
            `I am also exploring different ways of hosting a website such as building a web server locally and
            hosting on server-provider like AWS etc. 
            After spending time researching and attempting different methods,
            I think github pages is the ideal choice.`,
            `PS: Originally, there were some fancy scroll animations, but this feature is poorly supported by some browsers. So this feature is scraped.`,
        ],
    },
}