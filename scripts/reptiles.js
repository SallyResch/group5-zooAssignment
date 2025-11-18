function Reptile(name, image, lifespan, group, food, description, length, weight, found) {
  this.name = name;
  this.image = image;
  this.lifespan = lifespan;
  this.group = group;
  this.food = food;
  this.description = description;
  this.length = length;
  this.weight = weight;
  this.found = found
}


let frillNeckedLizard = new Reptile('Frill Neck Lizard', '../images/Reptiles/Frill-Necked Lizard/Frill-Necked Lizard1.jpg', '20 years', 'reptiles', 'Small insects and spiders', 'When this unique creature feels threatened, it rises on its hind legs, opens its yellow-coloured mouth, unfurls the colorful, pleated skin flap that encircles its head, and hisses. If an attacker is unintimidated by these antics, the lizard simply turns tail, mouth and frill open, and bolts, legs splaying left and right. It continues its deliberate run without stopping or looking back until it reaches the safety of a tree.', '90 cm', '1 kg', 'Northern Australia')

let hawksbillTurtle = new Reptile('Hawksbill Turtle', '../images/Reptiles/Hawksbill Turtle/Hawksbill Turtle-1.jpg', '50 years', 'reptiles', 'Other animals (sponges & jellyfish), sea plants', 'The Hawksbill Sea Turtle gets its common name from the distinctive mouth, which resembles a bird’s beak. The shell, or carapace, is covered in large overlapping scutes, which are a distinctive brown/green/amber background with lighter brown streaks throughout. At the edge of the carapace they overlap in such a way as to form a serrated edge. The turtle has an elongated head and flippers which have two visible claws on the end. The flippers and head are covered in large green, brown or yellow scales. The average adult female weighs 50 kg and their carapace (shell) is approximately 80 cm in length.', '80 cm', '50 kg', 'Tropical coasts of Queensland, Northern Territory and Western Australia.')

let perentie = new Reptile('Perentie', '../images/Reptiles/Perentie/Perentie1.jpg', '20 years', 'reptiles', 'Carnivore, they eat animals like kangaroos, rabbits, lizards and birds', 'The perentie (Varanus giganteus) is the largest monitor lizard or goanna native to Australia. It is one of the largest living lizards on earth, after the Komodo dragon, Asian water monitor, crocodile monitor, and intersecting by size with Nile monitor.Found west of the Great Dividing Range in the arid areas of Australia, it is rarely seen, because of its shyness and the remoteness of much of its range from human habitation. The species is considered to be a least-concern species according to the International Union for Conservation of Nature. Its status in many Aboriginal cultures is evident in the totemic relationships, and part of the Ngiṉṯaka dreaming, as well as bush tucker. It was a favoured food item among desert Aboriginal tribes, and the fat was used for medicinal and ceremonial purposes.', '2.5 m', '20 kg', 'Deserts')


let reptileArray = [frillNeckedLizard, hawksbillTurtle, perentie]

let sidebar = document.querySelector(".sidebar");
let mainDiv = document.querySelector(".main-content");

reptileArray.forEach((reptile) => {
  const button = document.createElement('div')
  button.classList.add('sidebar-button')
  button.textContent = reptile.name

  sidebar.appendChild(button)

  button.addEventListener('click', () => {
    mainDiv.innerHTML = ""

    const title = document.createElement('h2')
    title.textContent = reptile.name

    const image = document.createElement('img')
    image.src = reptile.image

    const food = document.createElement('p')
    food.textContent = 'Eats:' + reptile.food

    const lifespan = document.createElement('p')
    lifespan.textContent = 'Lives around ' + reptile.lifespan

    mainDiv.appendChild(title)
    mainDiv.appendChild(image)
    mainDiv.appendChild(food)
    mainDiv.appendChild(lifespan)


  })
})













// const reptileArray = [
//   { name: "Frill-Necked Lizard", className: "frill-necked-lizard" },
//   { name: "Hawksbill Turtle", className: "hawksbill-turtle" },
//   { name: "Perentie", className: "perentie" }
// ];

// const sidebar = document.querySelector(".sidebar");

// reptileArray.forEach(reptile => {
//   const button = document.createElement("div");
//   button.textContent = reptile.name;
//   button.classList.add("sidebar-button", reptile.className);
//   sidebar.appendChild(button);
// });
