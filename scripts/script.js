const sidebarDiv = document.querySelector(".sidebar");
const mainContentDiv = document.querySelector(".main-content");

function Animal(name, food, group, link) {
  this.name = name,
    this.food = food,
    this.group = group,
    this.link = link
}

const enchidna = new Animal("Enchidna", "Insects such as ants and termites, beetles larvae and worms", "Mammal", "mammalLink");
const tasmanianDevil = new Animal("Tasmanian Devil", "A predator, then eat meat from other animals such as wallabies and wombats", "Mammal", "mammalLink");
const quokka = new Animal("Quokka", "Plant eaters, they munch on shrubs and grasses", "Mammal", "mammalLink");
const cassowary = new Animal("Cassowary", "Plants matter like fruit, insects and small animals like mice and lizards", "Bird", "birdLink");
const kookaburra = new Animal("Kookaburra", "Insects and small animals including snakes, frogs and lizards", "Bird", "birdLink");
const cockatoo = new Animal("Yellow Tailed Black Cockatoo", "Fruit, seeds and other plant material", "Bird", "birdLink");
const lizard = new Animal("Frill-Necked Lizard", "Small insects and spiders", "Reptile", "reptileLink");
const turtle = new Animal("Hawksbill Turtle", "Other animals (sponges & jellyfish), sea plants", "Reptile", "reptileLink");
const perentie = new Animal("Perentie", "Carnivore, they eat animals like kangaroos, rabbits, lizards and birds", "Reptile", "reptileLink");

let animalArray = [enchidna, tasmanianDevil, quokka, cassowary, kookaburra, cockatoo, lizard, turtle, perentie]

animalArray.forEach(animal => {
  const btn = document.createElement("div");
  btn.textContent = animal.name;

  btn.classList.add("sidebar-button")
  btn.addEventListener("click", () => {
    mainContentDiv.innerHTML = `<p><strong>${animal.name}</strong></p><p>Food: ${animal.food}</p><p>Group: ${animal.group}</p><a>Link: ${animal.link}</a>`;
  });

  sidebarDiv.appendChild(btn);
})
