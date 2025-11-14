const sidebarDiv = document.querySelector(".sidebar");
const mainContentDiv = document.querySelector(".main-content");

function Animal(name, image, food, group, link) {
  this.name = name,
    this.image = image,
    this.food = food,
    this.group = group,
    this.link = link
}

const enchidna = new Animal("Enchidna", "image", "Insects such as ants and termites, beetles larvae and worms", "Mammal", "mammalLink");
const tasmanianDevil = new Animal("Tasmanian Devil", "image", "A predator, then eat meat from other animals such as wallabies and wombats", "Mammal", "mammalLink");
const quokka = new Animal("Quokka", "image", "Plant eaters, they munch on shrubs and grasses", "Mammal", "mammalLink");
const cassowary = new Animal("Cassowary", "image", "Plants matter like fruit, insects and small animals like mice and lizards", "Bird", "birdLink");
const kookaburra = new Animal("Kookaburra", "image", "Insects and small animals including snakes, frogs and lizards", "Bird", "birdLink");
const cockatoo = new Animal("Yellow Tailed Black Cockatoo", "image", "Fruit, seeds and other plant material", "Bird", "birdLink");
const lizard = new Animal("Frill-Necked Lizard", "image", "Small insects and spiders", "Reptile", "reptileLink");
const turtle = new Animal("Hawksbill Turtle", "image", "Other animals (sponges & jellyfish), sea plants", "Reptile", "reptileLink");
const perentie = new Animal("Perentie", "image", "Carnivore, they eat animals like kangaroos, rabbits, lizards and birds", "Reptile", "reptileLink");

let animalArray = [enchidna, tasmanianDevil, quokka, cassowary, kookaburra, cockatoo, lizard, turtle, perentie]

animalArray.forEach(animal => {
  const btn = document.createElement("div");
  btn.textContent = animal.name;
  btn.classList.add("sidebar-button")

  const animalName = document.createElement("h2");
  animalName.textContent = animal.name;

  const animalImage = document.createElement("img");
  animalImage.textContent = animal.image;

  const animalGroup = document.createElement("p");
  animalGroup.textContent = `Group: ${animal.group}`;

  const animalFood = document.createElement("p");
  animalFood.textContent = `Eats: ${animal.food}`;

  const animalLink = document.createElement("a");
  animalLink.textContent = `Link: ${animal.link}`;

  btn.addEventListener("click", () => {
    mainContentDiv.innerHTML = "";
    mainContentDiv.appendChild(animalName);
    mainContentDiv.appendChild(animalImage);
    mainContentDiv.appendChild(animalGroup);
    mainContentDiv.appendChild(animalFood);
    mainContentDiv.appendChild(animalLink);
  });

  sidebarDiv.appendChild(btn);
})
