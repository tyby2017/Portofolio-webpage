const project_links = [
    "https://tyby2017.github.io/Tic-tac-toe",
    "https://tyby2017.github.io/Library-app",
    "https://tyby2017.github.io/Etch-a-Sketch",
    "https://tyby2017.github.io/Rock-Paper-Scissors",
    "https://tyby2017.github.io/Calculator",
    "https://tyby2017.github.io/Google-homepage",
    "https://tyby2017.github.io/Google-results",
    "https://tyby2017.github.io/Restaurant-page",
    "https://tyby2017.github.io/Tribute-page",
    "https://tyby2017.github.io/Documentation-page",
    "https://tyby2017.github.io/Product-landing-page",
    "https://tyby2017.github.io/Survey-form",
];

const project_images = [
    "./images/tic-tac-toe.PNG",
    "./images/library-app.PNG",
    "./images/etch-a-scketch.PNG",
    "./images/rock-paper-scissors.PNG",
    "./images/calculator-app.PNG",
    "./images/google-homepage.PNG",
    "./images/google-results.PNG",
    "./images/restaurant-page.PNG",
    "./images/tribute-page.PNG",
    "./images/documentation-page.PNG",
    "./images/product-landing-page.PNG",
    "./images/survey-form.pNG",
];

const project_container = document.querySelector("#projects");
let contor = 0;
project_links.forEach(link => {
    // div for each project
    const project = document.createElement('div');
    project_container.appendChild(project);
    //extracted title from project name
    const string_split = link.split("/");
    const title = string_split[3];
    const p = document.createElement("p");
    p.textContent = title;    
    //extracted image for project  
    const img = document.createElement('img');
    img.setAttribute("src",project_images[contor]);
    //created anchor and attached img tag to it
    const title_anchor = document.createElement('a');
    title_anchor.appendChild(img);
    title_anchor.href = link;
    title_anchor.target = "_blank";
    project.appendChild(title_anchor);
    project.appendChild(p);
    contor++;
});

const contact = document.createElement("footer");