const sidebarDiv = document.querySelector(".sidebar");
const mainDiv = document.querySelector(".main-content");
const originalMainHTML = mainDiv.innerHTML;

function Bird(name, image, lifespan, food, group, length, weight, found, link, description) {
  this.name = name;
  this.image = image;
  this.lifespan = lifespan;
  this.food = food;
  this.group = group;
  this.length = length;
  this.weight = weight;
  this.found = found;
  this.link = link;
  this.description = description;
}

const cassowary = new Bird(
  "Cassowary",
  "../images/cassowary-2.jpg",
  "20 years",
  "Plants matter like fruit, insects and small animals like mice and lizards",
  "Bird",
  "1.7m",
  "44kg",
  "Queensland",
  "#",
  "It’s not hard to imagine that cassowaries are descended from dinosaur ancestors. The largest cassowaries can stand as high as six feet and weigh up to 160 pounds.   These large birds cannot fly, but their extremely powerful legs propel them at great speeds. They are strong swimmers and can move quickly on both land and water. Cassowaries are shy and they are usually hard to spot, at least in their natural rain forest habitats. They are not overly aggressive, and attacks are rare. But they can do a lot of damage if they are provoked or angered. Cassowary attacks have occasionally been deadly, including a recent one which occurred in 2019, at a private collection of caged birds in Florida"
);

const kookaburra = new Bird(
  "Kookaburra",
  "../images/kookaburra-1.jpg",
  "20 years",
  "Insects and smalll animals including snakes, frogs and lizards",
  "Bird",
  "43cm",
  "300g",
  "Australia wide",
  "#",
  "Native to the eucalyptus forests of eastern Australia, the laughing kookaburra is the largest member of the Kingfisher family, with females weighing up to one pound and growing to 43 cm in length. Its beak can reach 10 cm long and is used to snatch a variety of invertebrates and small vertebrates, including the occasional small snake. Since being introduced in western Australia and New Zealand, the kookaburra has angered farmers by preying on their fowl. The laughing kookaburra has dark brown wing plumage and a white head and underside. Dark brown eye stripes run across its face and its upper bill is black. Its reddish-coloured tail is patterned with black bars."
);

const yellowTailedBlackCockatoo = new Bird(
  "Yellow Tailed Black Cockatoo",
  "../images/Yellow Tailed Black Cockatoo.jpg",
  "41 years",
  "Fruit, seeds and other plant material",
  "Bird",
  "65cm",
  "900g",
  "SE Australia",
  "#",
  "It has a short crest on the top of its head. Its plumage is mostly brownish black and it has prominent yellow cheek patches and a yellow tail band. The body feathers are edged with yellow giving a scalloped appearance. The adult male has a black beak and pinkish-red eye-rings, and the female has a bone-coloured beak and grey eye-rings. In flight, yellow-tailed black cockatoos flap deeply and slowly, with a peculiar heavy fluid motion. Their loud, wailing calls carry for long distances. The whiteae is found south of Victoria to the East of South Australia and is smaller in size. The yellow-tailed black cockatoo is found in temperate forests and forested areas across south and central eastern Queensland to southeastern South Australia, including a very small population persisting in the Eyre Peninsula.[4] Two subspecies are recognised, although Tasmanian and southern mainland populations of the southern subspecies xanthanotus may be distinct enough from each other to bring the total to three. Birds of subspecies funereus (Queensland to eastern Victoria) have longer wings and tails and darker plumage overall, while those of xanthanotus (western Victoria, South Australia and Tasmania) have more prominent scalloping."
);

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

    mainDiv.innerHTML = "";

    const containerBird = document.createElement("div");
    containerBird.classList.add("bird-container");

    const description = document.createElement("p");
    description.textContent = `Description: ${bird.description}`;

    const title = document.createElement("h2");
    title.textContent = bird.name;

    const image = document.createElement("img");
    image.src = bird.image;
    image.alt = bird.name;
    image.style.width = "250px";
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

    containerBird.append(title, image, description, group, link);
    mainDiv.appendChild(containerBird);
  });

  sidebarDiv.appendChild(btn);
});
