const projectsList = [
  {
    name: "Portfolio Template",
    img: "./img/portfolio-template-2.png",
    description: "Front-end Application",
    preview: "https://portfolio-template-polbene.netlify.app/",
    github: "https://github.com/polbene95/Portfolio-Template",
    techs: ["SASS", "HTML5", "Javascript", "CSS3", "Responsive"],
  },
  {
    name: "coindex",
    img: "./img/model-2.jpg",
    description: "Node CLI Application",
    preview: null,
    github: "https://github.com/polbene95/coindex---NodeCLI",
    techs: ["Node.js", "Javascript", "Commander", "CMD"],
  },
  {
    name: "Product Manager API",
    img: "./img/model-1.jpg",
    description: "Back-end Application",
    preview: null,
    github: "https://github.com/polbene95/Product-Manager-API---Deno",
    techs: [
      "Deno.js",
      "Typescript",
      "Oak",
      "PostgreSQL",
      "Javascript",
      "REST APIs",
    ],
  },
  {
    name: "StoryBooks",
    img: "./img/storybooks.png",
    description: "Full Stack Application",
    preview: "http://storybooks-polbne95.herokuapp.com/dashboard",
    github: "https://github.com/polbene95/StoryBooks",
    techs: [
      "Node.js",
      "Javascript",
      "Passport",
      "CSS 3",
      "HTML 5",
      "Handlebars",
      "MongoDB",
      "Mongoose",
    ],
  },
  {
    name: "Netflix Clone",
    img: "./img/netflix-clone.png",
    description: "Front-end Application",
    preview: "https://netflix-clone-polbene95.netlify.app/",
    github: "https://github.com/polbene95/Netflix-Clone",
    techs: ["SASS", "HTML5", "Javascript", "CSS3", "Responsive"],
  },
  {
    name: "Real Time Chat",
    img: "./img/deno-chat.png",
    description: "Full Stack Application",
    preview: "https://deno-chat-polbene95.herokuapp.com/",
    github: "https://github.com/polbene95/Real-Time-Chat---Deno",
    techs: ["Deno.js", "Javascript", "CSS 3", "HTML 5", "WebSockets"],
  },
  {
    name: "Expense Tracker",
    img: "./img/expense-tracker.png",
    description: "Full Stack Application",
    preview: null,
    github: "https://github.com/polbene95/Expense-Tracker",
    techs: [
      "React.js",
      "ContextAPI",
      "Javascript",
      "Express.js",
      "Mongoose",
      "MongoDB",
    ],
  },
  {
    name: "Battle Ship Game",
    img: "./img/battleship.png",
    description: "Full Stack Application",
    preview: "https://salvo-project.herokuapp.com/Web/games.html",
    github: "https://github.com/polbene95/Salvo",
    techs: [
      "HTML5",
      "CSS3",
      "Javascript",
      "Vue.js",
      "JAVA 8",
      "Spring Boot",
      "Gradle",
      "H2",
    ],
  },
  {
    name: "Travel App",
    img: "./img/mytinerary.png",
    description: "Full Stack Application",
    preview: "https://mytinerary-pol.herokuapp.com/web/home",
    github: "https://github.com/polbene95/MyTinerary",
    techs: [
      "React.js",
      "Redux",
      "Javascript",
      "Express.js",
      "Mongoose",
      "MongoDB",
      "Passport",
    ],
  },
  {
    name: "Image Uploader",
    img: "./img/image-uploader.png",
    description: "Full Stack Application",
    preview: "https://mongo-image-upload.herokuapp.com/",
    github: "https://github.com/polbene95/Mongo-Image-Upload",
    techs: [
      "EJS",
      "Javascript",
      "Express.js",
      "Mongoose",
      "Multer",
      "GridFS",
      "MongoDB",
    ],
  },
  {
    name: "User Creation",
    img: "./img/user-creation.png",
    description: "Full Stack Application",
    preview: null,
    github: "https://github.com/polbene95/User-Creator",
    techs: [
      "EJS",
      "Javascript",
      "Express.js",
      "Mongoose",
      "MongoDB",
      "Passport",
    ],
  },
  {
    name: "Weather App",
    img: "./img/weather-app-2.png",
    description: "Server Less Application",
    preview: "https://polbene95.github.io/weatherApp/",
    github: "https://github.com/polbene95/weatherApp",
    techs: ["CSS 3", "HTML 5", "Javascript", "Firebase"],
  },
  {
    name: "Transparent Goverment In Fact",
    img: "./img/tgif.png",
    description: "Front End Application",
    preview: "https://polbene95.github.io/TransparentGovermentInFact-Vue.js/",
    github: "https://github.com/polbene95/TransparentGovermentInFact-Vue.js/",
    techs: ["HTML 5", "Vue.js", "CSS 3", "Javascript", "Bootstrap 4"],
  },
];

const ProjectCard = ({ name, img, description, preview, github, techs }) => {
  const generateAllTechItems = () => {
    let techsTemplate = ``;
    techs.forEach(
      (tech) =>
        (techsTemplate += ` <p class="flip-card__inner__back__techs__item">${tech}</p>`)
    );
    return techsTemplate;
  };

  const generateProjectButtons = () => {
    let buttonsTemplate = `
            <a href=${github} target="_blanck">
                <i class="fab fa-github"></i>
                <span class="text">Github</span>
            </a>
        `;
    if (preview != null) {
      buttonsTemplate += `
            <a href=${preview} target="_blanck">
                <i class="fas fa-eye"></i>
                <span class="text">Preview</span>
            </a>
            `;
    }
    return buttonsTemplate;
  };

  return `
        <div class="projects__list__item flip-card hello">
            <div class="flip-card__inner">
                <div class="flip-card__inner__front">
                    <img class="flip-card__inner__front__img" src="${img}" alt="${name}">
                    <p class="flip-card__inner__front__name">${name}</p>
                </div>
                <div class="flip-card__inner__back">
                    <p class="flip-card__inner__back__name">${name}</p>
                    <p class="flip-card__inner__back__description">${description}</p>
                    <div class="flip-card__inner__back__techs">
                        ${generateAllTechItems()}
                    </div>
                    <div class="flip-card__inner__back__buttons">
                        ${generateProjectButtons()}
                    </div>
                </div>
            </div>
        </div>
    `;
};

const generateProjectsList = () => {
  let template = ``;
  projectsList.forEach((item) => (template += ProjectCard(item)));
  setTimeout(() => {
    document.querySelector(".projects__list").innerHTML = template;
  }, 1000);
};

generateProjectsList();
