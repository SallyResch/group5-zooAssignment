const sidebarDiv = document.querySelector(".sidebar");
const mainDiv = document.querySelector(".main-content");
const originalMainHTML = mainDiv.innerHTML;

function Member(name, image, description) {
  this.name = name;
  this.image = image;
  this.description = description;
}

const sevilay = new Member(
  "Sevilay Guns",
  "../images/sevilay.png",
  "Sevilay is a former concept designer studying Front-End Development. She loves blending design and programming to create interactive experiences, and is currently a first-year programming student at Futuregames.🦘"
);
const simge = new Member(
  "Simge Ates",
  "../images/simge.png",
  "Simge is a Front-End student at Futuregames, passionate about coding and designing webpages that are both beautiful and user-friendly.🌱"
);
const mousumi = new Member("Mousumi Mukherjee", "../images/mousumi.png", "Passionate about creating engaging, and user-friendly web experiences.🌱");
const sally = new Member("Sally Resch", "../images/sally.png", "Former head chef, now  Developer with a passion for kind communication, fun and determination.🌱 ");

let memberArray = [sevilay, simge, mousumi, sally];

memberArray.forEach((member) => {
  const btn = document.createElement("div");
  btn.classList.add("sidebar-button");
  btn.textContent = member.name;

  btn.addEventListener("click", () => {
    const allButtons = document.querySelectorAll(".sidebar-button");

    if (btn.classList.contains("active")) {
      btn.classList.remove("active");
      mainDiv.innerHTML = originalMainHTML;
      return;
    }

    allButtons.forEach((button) => {
      button.classList.remove("active");
    });

    btn.classList.add("active");

    mainDiv.innerHTML = "";

    const containerMember = document.createElement("div");
    containerMember.classList.add("member-container");

    const title = document.createElement("h2");
    title.textContent = member.name;

    const image = document.createElement("img");
    image.src = member.image;
    image.alt = member.name;
    image.classList.add("member-image");

    const description = document.createElement("p");
    description.textContent = `About: ${member.description}`;

    containerMember.append(title, image, description);
    mainDiv.appendChild(containerMember);

    containerMember.classList.add("fade-in");
    mainDiv.classList.remove("fade-in");
    void mainDiv.offsetWidth;
    mainDiv.classList.add("fade-in");
  });

  sidebarDiv.appendChild(btn);
});
const ham_menu = document.querySelector(".ham_menu");
const navbar = document.querySelector(".navbar");

ham_menu.addEventListener("click", () => {
  navbar.classList.toggle("show");
});
