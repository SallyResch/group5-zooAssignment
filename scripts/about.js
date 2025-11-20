const sidebarDiv = document.querySelector(".sidebar");
const mainDiv = document.querySelector(".main-content");
const originalMainHTML = mainDiv.innerHTML;

function Member(name, image, description) {
  this.name = name;
  this.image = image;
  this.description = description;
}

const sevilay = new Member("Sevilay Guns", "../images/sevilay.png", "Example text for Sevilay.");
const simge = new Member("Simge Ates", "../images/simge.png", "Example text for Simge.");
const mousumi = new Member("Mousumi Mukherjee", "../images/mousumi.png", "Example text for Mousumi.");
const sally = new Member("Sally Resch", "../images/sally.png", "Example text for Sally.");

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

    allButtons.forEach((button) => button.classList.remove("active"));
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
    description.textContent = `Description: ${member.description}`;

    containerMember.append(title, image, description);
    mainDiv.appendChild(containerMember);
  });

  sidebarDiv.appendChild(btn);
});
