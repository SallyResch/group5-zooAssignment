const sidebarDiv = document.querySelector(".sidebar");
const mainDiv = document.querySelector(".main-content");
const originalMainHTML = mainDiv.innerHTML;

function Bird(name, image, lifespan, food, group, length, weight, found, link) {
  this.name = name;
  this.image = image;
  this.lifespan = lifespan;
  this.food = food;
  this.group = group;
  this.length = length;
  this.weight = weight;
  this.found = found;
  this.link = link;
}

const cassowary = new Bird("Cassowary", "../images/cassowary-2.jpg", "20 years", "Fruit, insects, small animals", "Bird", "1.7m", "44kg", "Queensland", "#");

const kookaburra = new Bird("Kookaburra", "../images/kookaburra-1.jpg", "20 years", "Insects, small reptiles", "Bird", "43cm", "300g", "Australia wide", "#");

const yellowTailedBlackCockatoo = new Bird("Yellow Tailed Black Cockatoo", "../images/Yellow Tailed Black Cockatoo.jpg", "41 years", "Seeds and fruit", "Bird", "65cm", "900g", "SE Australia", "#");

let birdList = [cassowary, kookaburra, yellowTailedBlackCockatoo];

birdList.forEach((bird) => {
  const btn = document.createElement("div");
  btn.classList.add("sidebar-button");
  btn.textContent = bird.name;

  btn.addEventListener("click", () => {
    if (btn.classList.contains("active")) {
      btn.classList.remove("active");
      mainDiv.innerHTML = originalMainHTML;
      return;
    }

    const allButtons = document.querySelectorAll(".sidebar-button");

    allButtons.forEach(function (button) {
      button.classList.remove("active");
    });

    btn.classList.add("active");

    mainDiv.textContent = "";

    const containerBird = document.createElement("div");
    containerBird.classList.add("bird-container");

    const title = document.createElement("h2");
    title.textContent = bird.name;

    const image = document.createElement("img");
    image.src = bird.image;
    image.alt = bird.name;
    image.style.width = "150px";
    image.style.objectFit = "cover";

    const group = document.createElement("p");
    group.textContent = `Group: ${bird.group}`;

    const food = document.createElement("p");
    food.textContent = `Eats: ${bird.food}`;

    const lifespan = document.createElement("p");
    lifespan.textContent = `Lifespan: ${bird.lifespan}`;

    const found = document.createElement("p");
    found.textContent = `Found: ${bird.found}`;

    const link = document.createElement("a");
    link.href = bird.link;
    link.textContent = "More info";

    containerBird.append(title, image, group, food, lifespan, found, link);
    mainDiv.appendChild(containerBird);
  });

  sidebarDiv.appendChild(btn);
});
