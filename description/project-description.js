export const projects = {
    "fass": {
        intro: `Finance as a Service, aka FaaS, is an e-finance product owned by Buka Australia Pty Ltd that provides loan services to the customers. 
        I was part of the engineer team mainly focusing on web-application development, testing and deployment.`,
        feat: [
            `Worked under agile environment.`,
            `Developed a Golang backend K8s microservice to handle loan application, disbursement, and KYC verification.`,
            `Designed gRPC and RESTful APIs to make SQL queries to the cloud database(PostgreSQL) hosted on GCP to fetch and modify loan data.`,
            `Implemented a frontend K8s microservice with Vue3/Nuxt framework using Typescript.`,
            `Collaborated with product teams and UI/UX designers to provide an intuitive and robust web interface for admin users.`,
            `Deployed a CronJob pod to run scripts that read CSV template files periodically.`,
            `Groomed and implemented tickets with a total of 100+ story points.`,],
    },
    "movieGeeks": {
        intro: `Movie Finder is an university capstone project.
        Its aim is to create an Imdb-like website to discover your next favourite movies.
        This web application with a full-package of movie rating, commenting and bookmarking functionalities.
        It has an optimised movie searching and filtering, and it also features a personalised movie recommendation assistant. 
        `,
        feat: [
            `Backend APIs are RESTful and were developed using Python with FastAPI framework.`,
            `Frontend Interface was constructed with React.Js framework.`,
            `Implmented relational database schema into 3NF form and setup SQLite3 databse.`,
            `Integrated Google Firebase into the application for user credential authentication.`,
            'Integrated 3rd-party APIs to automatically fetch movie posters, description, cast etc.',
            `Project was start from scratch, and I fully owned the software development life cycle.`
        ],
        img: `../image/movie-geeks.jpg`,
        url: `https://github.com/solaris-he/capstone-project-3900-f14a-moviegeeks-public`,
    },
    "cellSegmentation": {
        intro: `Cell Segmentation is a university project about computer vision research. 
        Its primary aim is to create segmentation, labelling and tracking of the cells and detect cell mitosis action.`,
        feat:[
            `Tech stacks of this project are OpenCV, Python, Pytorch and Google Labs.`,
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
            `Built with pure vanlla Javascript, HTML5 and CSS.`,
            `Since I feel I am spoiled by those handy front-end frameworks during work and university,
            I decided that why not put things in manual gear and build this portfolio without any of it,
            and explore the concept and the fundamental of DOM Event life cycle.`,
            `I am also exploring different ways of hosting a website such as building a web server locally and
            hosting on server-provider like AWS etc. 
            After spending time researching and attempting different methods,
            I think github pages is the ideal choice.`,
        ],
    },
}