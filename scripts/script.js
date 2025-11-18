const sidebarDiv = document.querySelector(".sidebar");
const mainContentDiv = document.querySelector(".main-content");
const initialMainContent = mainContentDiv.innerHTML;


function Animal(name, image, description, food, group, link) {
  this.name = name,
    this.image = image,
    this.description = description,
    this.food = food,
    this.group = group,
    this.link = link
}

const enchidna = new Animal("Enchidna", "image", "Echidnas, also called spiny anteaters, are walking contradictions. They are mammals, but they lay eggs. They are often classified as long- or sort-beaked, but don't have beaks at all, in the traditional sense; they have fleshy noses that can be either on the long side or rather short. They don't really look like true anteaters (Myrmecophaga tridactyla), either, and they are not closely related to them. They are spiny, though; their bodies are covered with hollow, barbless quills. Echidnas are monotremes, egg-laying mammals. The only other living monotreme is the platypus.", "Insects such as ants and termites, beetles larvae and worms", "Mammal", "mammals.html");
const tasmanianDevil = new Animal("Tasmanian Devil", "image", "The Tasmanian devil (Sarcophilus harrisii) (palawa kani: purinina)[3] is a carnivorous marsupial of the family Dasyuridae. Until recently, it was only found on the island state of Tasmania, but it has been reintroduced to New South Wales in mainland Australia, with a small breeding population. The size of a small dog, the Tasmanian devil became the largest carnivorous marsupial in the world, following the extinction of the thylacine in 1936. It is related to quolls, and distantly related to the thylacine. It is characterised by its stocky and muscular build, black fur, pungent odour, extremely loud and disturbing screech, keen sense of smell, and ferocity when feeding. The Tasmanian devil's large head and neck allow it to generate among the strongest bites per unit body mass of any extant predatory land mammal. It hunts prey and scavenges on carrion.", "A predator, then eat meat from other animals such as wallabies and wombats", "Mammal", "mammals.html");
const quokka = new Animal("Quokka", "image", "The Quokka, Setonix brachyurus, was described by early Dutch explorer, Willem de Vlamingh, 'as a kind of rat as big as a common cat'. His first sighting of the Quokka was on an island off the mouth of the Swan River. He named the island Rottenest ('rat nest') in honour of this sighting. The island is now known as Rottnest Island. Essentially the Quokka looks very much like other wallabies.It has short, very coarse and thick grey-brown fur over most of the body with lighter parts underneath. Its facial features consist of a naked nose on a short, broad face with rounded furry ears.The tail is relatively short and mostly devoid of hair. In contrast, the hair on the feet extends to cover its claws", "Plant eaters, they munch on shrubs and grasses", "Mammal", "mammals.html");
const kangaroo = new Animal("Kangaroo", "images/kangaroo.png", "Kangaroos are marsupials from the subfamily Macropodinae (macropods, meaning of large foot). In common use, the term is used to describe the largest species from this family, the red kangaroo, as well as the antilopine kangaroo, eastern grey kangaroo, and western grey kangaroo.[1] Kangaroos are indigenous to Australia and New Guinea. The Australian government estimates that 42.8 million kangaroos lived within the commercial harvest areas of Australia in 2019, down from 53.2 million in 2013.[2]", "Plant eaters, they munch on shrubs and grasses", "Mammal", "mammals.html");
const cassowary = new Animal("Cassowary", "image", "It is not hard to imagine that cassowaries are descended from dinosaur ancestors. The largest cassowaries can stand as high as six feet and weigh up to 160 pounds.   These large birds cannot fly, but their extremely powerful legs propel them at great speeds. They are strong swimmers and can move quickly on both land and water. Cassowaries are shy and they are usually hard to spot, at least in their natural rain forest habitats. They are not overly aggressive, and attacks are rare. But they can do a lot of damage if they are provoked or angered. Cassowary attacks have occasionally been deadly, including a recent one which occurred in 2019, at a private collection of caged birds in Florida ", "Plants matter like fruit, insects and small animals like mice and lizards", "Bird", "birds.html");
const kookaburra = new Animal("Kookaburra", "image", "Native to the eucalyptus forests of eastern Australia, the laughing kookaburra is the largest member of the Kingfisher family, with females weighing up to one pound and growing to 43 cm in length. Its beak can reach 10 cm long and is used to snatch a variety of invertebrates and small vertebrates, including the occasional small snake. Since being introduced in western Australia and New Zealand, the kookaburra has angered farmers by preying on their fowl. The laughing kookaburra has dark brown wing plumage and a white head and underside. Dark brown eye stripes run across its face and its upper bill is black. Its reddish-coloured tail is patterned with black bars. ", "Insects and small animals including snakes, frogs and lizards", "Bird", "birds.html");
const cockatoo = new Animal("Yellow Tailed Black Cockatoo", "image", "It has a short crest on the top of its head. Its plumage is mostly brownish black and it has prominent yellow cheek patches and a yellow tail band. The body feathers are edged with yellow giving a scalloped appearance. The adult male has a black beak and pinkish-red eye-rings, and the female has a bone-coloured beak and grey eye-rings. In flight, yellow-tailed black cockatoos flap deeply and slowly, with a peculiar heavy fluid motion. Their loud, wailing calls carry for long distances. The whiteae is found south of Victoria to the East of South Australia and is smaller in size. The yellow-tailed black cockatoo is found in temperate forests and forested areas across south and central eastern Queensland to southeastern South Australia, including a very small population persisting in the Eyre Peninsula.[4] Two subspecies are recognised, although Tasmanian and southern mainland populations of the southern subspecies xanthanotus may be distinct enough from each other to bring the total to three. Birds of subspecies funereus (Queensland to eastern Victoria) have longer wings and tails and darker plumage overall, while those of xanthanotus (western Victoria, South Australia and Tasmania) have more prominent scalloping. ", "Fruit, seeds and other plant material", "Bird", "birds.html");
const lizard = new Animal("Frill-Necked Lizard", "image", "When this unique creature feels threatened, it rises on its hind legs, opens its yellow-coloured mouth, unfurls the colorful, pleated skin flap that encircles its head, and hisses. If an attacker is unintimidated by these antics, the lizard simply turns tail, mouth and frill open, and bolts, legs splaying left and right. It continues its deliberate run without stopping or looking back until it reaches the safety of a tree. ", "Small insects and spiders", "Reptile", "reptiles.html");
const turtle = new Animal("Hawksbill Turtle", "image", " The Hawksbill Sea Turtle gets its common name from the distinctive mouth, which resembles a bird’s beak. The shell, or carapace, is covered in large overlapping scutes, which are a distinctive brown/green/amber background with lighter brown streaks throughout. At the edge of the carapace they overlap in such a way as to form a serrated edge. The turtle has an elongated head and flippers which have two visible claws on the end. The flippers and head are covered in large green, brown or yellow scales. The average adult female weighs 50 kg and their carapace (shell) is approximately 80 cm in length.", "Other animals (sponges & jellyfish), sea plants", "Reptile", "reptiles.html");
const perentie = new Animal("Perentie", "image", "The perentie (Varanus giganteus) is the largest monitor lizard or goanna native to Australia. It is one of the largest living lizards on earth, after the Komodo dragon, Asian water monitor, crocodile monitor, and intersecting by size with Nile monitor.[3] Found west of the Great Dividing Range in the arid areas of Australia, it is rarely seen, because of its shyness and the remoteness of much of its range from human habitation. The species is considered to be a least-concern species according to the International Union for Conservation of Nature. Its status in many Aboriginal cultures is evident in the totemic relationships, and part of the Ngiṉṯaka dreaming, as well as bush tucker. It was a favoured food item among desert Aboriginal tribes, and the fat was used for medicinal and ceremonial purposes. ", "Carnivore, they eat animals like kangaroos, rabbits, lizards and birds", "Reptile", "reptiles.html");

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
  animalImage.classList.add("animal-image")
  animalImage.src = animal.image;
  animalImage.alt = animal.name;

  const animalDescription = document.createElement("p");
  animalDescription.textContent = `Description: ${animal.description}`;

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
    mainContentDiv.appendChild(animalDescription);
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
