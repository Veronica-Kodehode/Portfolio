const home = document.getElementById("home");
const about = document.getElementById("about");
const projects = document.getElementById("projects");
const homeBtn = document.getElementById("home-btn");
const aboutBtn = document.getElementById("about-btn");
const projectsBtn = document.getElementById("projects-btn");
const projectCard = document.querySelectorAll(".project-card");
const displayProjects = document.getElementById("display-projects");
const navBar = document.getElementById("nav-bar");
const projectOne = document.getElementById("project-one");
const projectContainer = document.getElementById("project-container");
const contactBtn = document.getElementById("contact-btn")
const creativity = document.getElementById("creativity")
const navBtn = document.getElementById("nav-btn")

// when clicking between the pages in the nav-bar, the z-index change

// this can maybe be written better, in a loop or if/else or both



aboutBtn.addEventListener("click", () => {
  about.style.zIndex = "6";
  home.style.zIndex = "0";
  projects.style.zIndex = "0";
  aboutBtn.style.opacity = "1"
  homeBtn.style.opacity = "0.5"
  projectsBtn.style.opacity = ".5"
});

homeBtn.addEventListener("click", () => {
  home.style.zIndex = "6";
  projects.style.zIndex = "0";
  about.style.zIndex = "0";
  homeBtn.style.opacity = "1"
  projectsBtn.style.opacity = ".5"
  aboutBtn.style.opacity = ".5"
});

projectsBtn.addEventListener("click", () => {
  projects.style.zIndex = "6";
  about.style.zIndex = "0";
  home.style.zIndex = "0";
  projectsBtn.style.opacity = "1"
  homeBtn.style.opacity = "0.5"
  aboutBtn.style.opacity = ".5"
});



// object-array of projects data

const projectsData = [
  {
    image: "project-meal-big.png",
    name: "Meal review",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio id dolorum vel nostrum? Officiis numquam officia dolor eaque? Mollitia quae eaque atque recusandae. Explicabo neque quaerat et. Repellat repudiandae labore vitae laboriosam ea molestias atque alias unde?",
    tools: ["html.png", "css.png", "js.png"],
    links: [{logo: "github2.png", url: "https://github.com/Kodehode-Stavanger/user-data-assignment-Veronica-Kodehode" }, {logo: "go.png", url: "https://kodehode-stavanger.github.io/user-data-assignment-Veronica-Kodehode/"}],
  },
  {
    image: "project-drum-big.png",
    name: "Meal review",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio id dolorum vel nostrum? Officiis numquam officia dolor eaque? Mollitia quae eaque atque recusandae. Explicabo neque quaerat et. Repellat repudiandae labore vitae laboriosam ea molestias atque alias unde?",
    tools: ["html.png", "css.png", "js.png"],
    links: ["github2.png", "go.png"],
  },
  {
    image: "project-match-big.png",
    name: "Meal review",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio id dolorum vel nostrum? Officiis numquam officia dolor eaque? Mollitia quae eaque atque recusandae. Explicabo neque quaerat et. Repellat repudiandae labore vitae laboriosam ea molestias atque alias unde?",
    tools: ["html.png", "css.png", "js.png"],
    links: ["github2.png", "go.png"],
  },
  {
    image: "meal-review2.png",
    name: "Meal review",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio id dolorum vel nostrum? Officiis numquam officia dolor eaque? Mollitia quae eaque atque recusandae. Explicabo neque quaerat et. Repellat repudiandae labore vitae laboriosam ea molestias atque alias unde?",
    tools: ["html.png", "css.png", "js.png"],
    links: ["github2.png", "go.png"],
  },
  {
    image: "meal-review2.png",
    name: "Meal review",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio id dolorum vel nostrum? Officiis numquam officia dolor eaque? Mollitia quae eaque atque recusandae. Explicabo neque quaerat et. Repellat repudiandae labore vitae laboriosam ea molestias atque alias unde?",
    tools: ["html.png", "css.png", "js.png"],
    links: ["github2.png", "go.png"],
  },
  {
    image: "meal-review2.png",
    name: "Meal review",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio id dolorum vel nostrum? Officiis numquam officia dolor eaque? Mollitia quae eaque atque recusandae. Explicabo neque quaerat et. Repellat repudiandae labore vitae laboriosam ea molestias atque alias unde?",
    tools: ["html.png", "css.png", "js.png"],
    links: ["github2.png", "go.png"],
  },
  {
    image: "meal-review2.png",
    name: "Meal review",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio id dolorum vel nostrum? Officiis numquam officia dolor eaque? Mollitia quae eaque atque recusandae. Explicabo neque quaerat et. Repellat repudiandae labore vitae laboriosam ea molestias atque alias unde?",
    tools: ["html.png", "css.png", "js.png"],
    links: ["github2.png", "go.png"],
  },
  {
    image: "meal-review2.png",
    name: "Meal review",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio id dolorum vel nostrum? Officiis numquam officia dolor eaque? Mollitia quae eaque atque recusandae. Explicabo neque quaerat et. Repellat repudiandae labore vitae laboriosam ea molestias atque alias unde?",
    tools: ["html.png", "css.png", "js.png"],
    links: ["github2.png", "go.png"],
  },
];


// main function to display big info-box on projects

function displayProjectFunction(index) {

creativity.style.visibility = "hidden"

  const project = projectsData[index];
  const projectContainer = document.getElementById("project-container");
  // Clear previous content
  while (projectContainer.firstChild) {
    projectContainer.removeChild(projectContainer.firstChild);
  }

  const image = document.createElement("img");
  image.src = `images/${project.image}`;
  image.classList.add("projects-img");

  const upperContainer = document.createElement("div");
  upperContainer.classList.add("upper-container");

  const bottomContainer = document.createElement("div");
  bottomContainer.classList.add("bottom-container");

  projectContainer.append(image, upperContainer, bottomContainer);

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
  // tools.textContent = "Tools used"
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
    linkAnchor.href = link.url;
    
    const linkImg = document.createElement("img");
    linkImg.src = `images/${link.logo}`;
    linkImg.classList.add("link-img");

    linkAnchor.appendChild(linkImg);
    links.appendChild(linkAnchor);

  });
  bottomContainer.appendChild(links);
  }

// Function to show specific project info
function showInfo(index) {
  const project = projectsData[index];
}