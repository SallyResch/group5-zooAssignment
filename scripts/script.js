const sidebarDiv = document.querySelector(".sidebar");
const mainContentDiv = document.querySelector(".main-content");
const initialMainContent = mainContentDiv.innerHTML;
const showMainContent = () => { mainContentDiv.classList.add("show"); }
const hideMainContent = () => { mainContentDiv.classList.remove("show"); }

function Animal(name, image, food, group, link) {
  this.name = name,
    this.image = image,
    this.food = food,
    this.group = group,
    this.link = link
}

const enchidna = new Animal("Enchidna", "image", "Insects such as ants and termites, beetles larvae and worms", "Mammal", "mammals.html");
const tasmanianDevil = new Animal("Tasmanian Devil", "image", "A predator, then eat meat from other animals such as wallabies and wombats", "Mammal", "mammals.html");
const quokka = new Animal("Quokka", "image", "Plant eaters, they munch on shrubs and grasses", "Mammal", "mammals.html");
const kangaroo = new Animal("Kangaroo", "image", "Plant eaters, they munch on shrubs and grasses", "Mammal", "mammals.html");
const cassowary = new Animal("Cassowary", "image", "Plants matter like fruit, insects and small animals like mice and lizards", "Bird", "birds.html");
const kookaburra = new Animal("Kookaburra", "image", "Insects and small animals including snakes, frogs and lizards", "Bird", "birds.html");
const cockatoo = new Animal("Yellow Tailed Black Cockatoo", "image", "Fruit, seeds and other plant material", "Bird", "birds.html");
const lizard = new Animal("Frill-Necked Lizard", "image", "Small insects and spiders", "Reptile", "reptiles.html");
const turtle = new Animal("Hawksbill Turtle", "image", "Other animals (sponges & jellyfish), sea plants", "Reptile", "reptiles.html");
const perentie = new Animal("Perentie", "image", "Carnivore, they eat animals like kangaroos, rabbits, lizards and birds", "Reptile", "reptiles.html");

const clearActiveButtons = () => {
  document.querySelectorAll(".sidebar-button").forEach(btn => {
    btn.classList.remove("active");
  });
}

const goToStartState = () => {
  clearActiveButtons();
  mainContentDiv.innerHTML = initialMainContent;
}
goToStartState();

let animalArray = [enchidna, tasmanianDevil, quokka, kangaroo, cassowary, kookaburra, cockatoo, lizard, turtle, perentie];

animalArray.forEach(animal => {
  const btn = document.createElement("div");
  btn.textContent = animal.name;
  btn.classList.add("sidebar-button");

  const animalName = document.createElement("h2");
  animalName.textContent = animal.name;

  const animalImage = document.createElement("img");
  animalImage.src = animal.image;

  const animalGroup = document.createElement("p");
  animalGroup.textContent = `Group: ${animal.group}`;

  const animalFood = document.createElement("p");
  animalFood.textContent = `Eats: ${animal.food}`;

  const animalLink = document.createElement("a");
  animalLink.href = animal.link;
  animalLink.textContent = `Read more`;
  animalLink.target = "_blank";

  btn.addEventListener("click", () => {

    if (btn.classList.contains("active")) {
      goToStartState();
      return;
    }

    clearActiveButtons();
    btn.classList.add("active");

    mainContentDiv.innerHTML = "";
    mainContentDiv.appendChild(animalName);
    mainContentDiv.appendChild(animalImage);
    mainContentDiv.appendChild(animalGroup);
    mainContentDiv.appendChild(animalFood);
    mainContentDiv.appendChild(animalLink);
  });

  sidebarDiv.appendChild(btn);
});


const banner = document.querySelector(".banner");

const video = document.createElement("video");

video.src = "./video/bg_video.mp4";
video.loop = true;
video.playsInline = true;
video.muted = true;
video.autoplay = true;

video.classList.add("bg_video");

banner.appendChild(video);
