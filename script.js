const home = document.getElementById("home");
const about = document.getElementById("about");
const projects = document.getElementById("projects");
const homeBtn = document.getElementById("home-btn");
const aboutBtn = document.getElementById("about-btn");
const projectsBtn = document.getElementById("projects-btn");
const projectContainer = document.getElementById("project-container");
const creativity = document.getElementById("creativity");
const contactPhone = document.querySelectorAll(".contact-phone");
const phoneNumber = document.querySelectorAll(".phone-number");

// (to do) => this can be written better ?

aboutBtn.addEventListener("click", () => {
  about.style.zIndex = "6";
  home.style.zIndex = "0";
  projects.style.zIndex = "0";
  aboutBtn.style.opacity = "1";
  homeBtn.style.opacity = "0.5";
  projectsBtn.style.opacity = ".5";
});

homeBtn.addEventListener("click", () => {
  home.style.zIndex = "6";
  projects.style.zIndex = "0";
  about.style.zIndex = "0";
  homeBtn.style.opacity = "1";
  projectsBtn.style.opacity = ".5";
  aboutBtn.style.opacity = ".5";
});

projectsBtn.addEventListener("click", () => {
  projects.style.zIndex = "6";
  about.style.zIndex = "0";
  home.style.zIndex = "0";
  projectsBtn.style.opacity = "1";
  homeBtn.style.opacity = "0.5";
  aboutBtn.style.opacity = ".5";
});

// contact display phone number

contactPhone.forEach((contactPhone, index) => {
  contactPhone.addEventListener("click", () => {
    phoneNumber[index].classList.toggle("show-number");
    phoneNumber[index].style.display = phoneNumber[index].classList.contains(
      "show-number"
    )
      ? "block"
      : "none";
  });
});

// object-array of projects data

const projectsData = [
  {
    image: "meal-review-big.png",
    name: "Meal review",
    description:
      "Have you ever gone to a new resturant to try it out? Got some take-away from some new place? Two months later you can't remeber if you liked it or what you even ate. Keep track of your own culenary experiences using this personal meal rating app.",
    tools: ["html.png", "css.png", "js.png"],
    links: [
      {
        logo: "github2.png",
        url: "https://github.com/Kodehode-Stavanger/user-data-assignment-Veronica-Kodehode",
      },
      {
        logo: "go.png",
        url: "https://kodehode-stavanger.github.io/user-data-assignment-Veronica-Kodehode/",
      },
    ],
  },
  {
    image: "project-drum-big.png",
    name: "Drum machine",
    description:
      "A simple drumkit that allows you to bring out your musical creativity. Play using keyboard letters or click with the mouse. Don't stop until the neighbours complain 😎 ",
    tools: ["html.png", "css.png", "js.png"],
    links: [
      {
        logo: "github2.png",
        url: "https://github.com/Kodehode-Stavanger/javascript-advanced-project-drum-machine-Veronica-Kodehode",
      },
      {
        logo: "go.png",
        url: "https://kodehode-stavanger.github.io/javascript-advanced-project-drum-machine-Veronica-Kodehode/",
      },
    ],
  },
  {
    image: "project-quiz-big.png",
    name: "Quiz game",
    description:
      "Test your general knowledge in this little quiz game. Can you get all 10 answers right? Score function will be added in a future update",
    tools: ["html.png", "css.png", "js.png"],
    links: [
      {
        logo: "github2.png",
        url: "https://github.com/Kodehode-Stavanger/javascript-advanced-project-api-Veronica-Kodehode",
      },
      {
        logo: "go.png",
        url: "https://kodehode-stavanger.github.io/javascript-advanced-project-api-Veronica-Kodehode/",
      },
    ],
  },
  {
    image: "project-match-big.png",
    name: "Match two",
    description:
      "This match two game would offer plenty of fun with a large pool of randomized images to match up. Too bad it's incomplete and full of bugs that there has been no time to finish, fix and polish. Maybe one day this will be complete 😁",
    tools: ["html.png", "css.png", "js.png"],
    links: [
      {
        logo: "github2.png",
        url: "https://github.com/Kodehode-Stavanger/javascript-basic-mini-project-Veronica-Kodehode",
      },
      {
        logo: "go.png",
        url: "https://kodehode-stavanger.github.io/javascript-basic-mini-project-Veronica-Kodehode/",
      },
    ],
  },
  {
    image: "project-topten-big.png",
    name: "The 10 best selling video games of all time",
    description:
      "A project assignment to create a webpage called the 10 best selling video games of all time, listing,... you guessed it... the 10 best selling video games of all time.. 😉",
    tools: ["html.png", "css.png", "js.png"],
    links: [
      {
        logo: "github2.png",
        url: "https://github.com/Veronica-Kodehode/top-10-games",
      },
      {
        logo: "go.png",
        url: "https://veronica-kodehode.github.io/top-10-games/",
      },
    ],
  },
  {
    image: "project-AI-big.png",
    name: "Fake AI homebot store",
    description:
      "A figma project of our choice where I am making a fake store selling AI bots for your everyday needs. This is a project focused on creativity and design while utilizing good figma practices. This project is still in the works.",
    tools: ["figma.png"],
    links: [
      {
        logo: "figma2.png",
        url: "https://www.figma.com/file/KTUm5Wm0jYnox50K3bVTxR/My-webshop?type=design&node-id=0%3A1&mode=design&t=1UQ0mBCCDULHesUJ-1",
      },
    ],
  },
  {
    image: "calculator.png",
    name: "React calculator",
    description: "A simple calculator made using react",
    tools: ["html.png", "css.png", "js.png", "react-dark.png"],
    links: [
      {
        logo: "github2.png",
        url: "https://github.com/Veronica-Kodehode/Calculator-React",
      },
      {
        logo: "go.png",
        url: "https://veronica-kodehode.github.io/Calculator-React/",
      },
    ],
  },
  {
    image: "project-creativity-big.png",
    name: "Coming soon",
    description: "More fun projects coming soon to a device near you 🤩",
    tools: ["imagination.png"],
    links: [],
  },
];

// main function to display big info-box on projects

function displayProjectFunction(index) {
  creativity.style.visibility = "hidden";

  const project = projectsData[index];

  // Clear previous content
  while (projectContainer.firstChild) {
    projectContainer.removeChild(projectContainer.firstChild);
  }

  // create container for big project image and get image out of object array and place in container
  const imageContainer = document.createElement("div");
  imageContainer.classList.add("image-container");
  projectContainer.append(imageContainer);

  const image = document.createElement("img");
  image.src = `images/${project.image}`;
  image.classList.add("projects-img");
  imageContainer.append(image);

  // create container for big project text and get data out of object array and place in their containers
  const textContainer = document.createElement("div");
  textContainer.classList.add("text-container");
  projectContainer.append(textContainer);

  const upperContainer = document.createElement("div");
  upperContainer.classList.add("upper-container");

  const bottomContainer = document.createElement("div");
  bottomContainer.classList.add("bottom-container");

  textContainer.append(upperContainer, bottomContainer);

  const title = document.createElement("div");
  title.classList.add("title");
  const titleText = document.createElement("p");
  titleText.textContent = project.name;
  title.appendChild(titleText);

  upperContainer.appendChild(title);

  const description = document.createElement("p");
  description.textContent = project.description;
  description.classList.add("description");
  bottomContainer.appendChild(description);

  const tools = document.createElement("div");
  tools.classList.add("tools");
  project.tools.forEach((tool) => {
    const toolImg = document.createElement("img");
    toolImg.src = `images/${tool}`;
    toolImg.classList.add("tool-img");
    tools.appendChild(toolImg);
  });
  upperContainer.appendChild(tools);

  const links = document.createElement("div");
  links.classList.add("links");
  project.links.forEach((link) => {
    const linkAnchor = document.createElement("a");
    linkAnchor.setAttribute("target", "_blank");
    linkAnchor.href = link.url;

    const linkImg = document.createElement("img");
    linkImg.src = `images/${link.logo}`;
    linkImg.classList.add("link-img");

    linkAnchor.appendChild(linkImg);
    links.appendChild(linkAnchor);
  });
  bottomContainer.appendChild(links);
}
