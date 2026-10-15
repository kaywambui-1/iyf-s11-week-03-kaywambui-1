// Each project is an "object" - a bundle of related info,
// stored as key: value pairs. Each project object is stored in an array called "projects".
const projects = [
    {
        title: "Personal Portfolio Website",
        description: "A multi-page site (Home, About, Projects, Contact) built with HTML, CSS, and JavaScript, version-controlled with Git and deployed on Github P ages.",
        status: "Completed",
        link: "https://github.com/kaywambui-1/iyf-s11-week-03-kaywambui-1.git"
    },
    {
        title: "CommunityHub - Accounts & Profiles",
        description: "Built the authentication and profile system (Login, Register, AutheContext, Profile pages) for a full-stack team project using react, Express, and MongoDB.",
        status: "In Progress",
        link: "https://github.com/TrevorWachira690/iyf-s11-week-12-team-TrevorWachira690.git"
    }
];
// This finds the empty <div id="project-list" we added in the HTML.
const projectList = document.getElementById("project-list");

// .forEach() runs this block of code once for every object in the array.
projects.forEach((project) => {
  // Create a new <div> element in memory (not on the page yet).
  const card = document.createElement("div");
  card.className = "project-card";

  // Fill that div with HTML, using the project's own data.
  // The ${...} syntax lets us drop a variable's value into a string.
  card.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <p><strong>Status:</strong> ${project.status}</p>
    <a href="${project.link}" class="cta-btn">View Project</a>
  `;

  // Actually add the finished card onto the real page.
  projectList.appendChild(card);
});