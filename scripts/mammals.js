const banner = document.querySelector(".banner");
const bg_banner = document.createElement("img");
const sidebar = document.querySelector(".sidebar");
const main_content = document.querySelector(".main-content");
const h2 = document.createElement("h2");
h2.textContent = `Mammals`;
h2.classList.add("h2");
sidebar.appendChild(h2);

function Mammal(name, img, aboutShort, aboutFull) {
  this.name = name;
  this.img = img;
  this.aboutShort = aboutShort;
  this.aboutFull = aboutFull;
}

const Echidna = new Mammal(
  "Echidna",
  "images/Echidna2.jpg",

  "Description: Echidnas, also called spiny anteaters, are walking contradictions. They are mammals, but they lay eggs. They are often classified as long- or sort-beaked, but don't have beaks at all, in the traditional sense; they have fleshy noses that can be either on the long side or rather short. They don't really look like true anteaters (Myrmecophaga tridactyla), either, and they are not closely related to them. They are spiny, though; their bodies are covered with hollow, barbless quills. Echidnas are monotremes, egg-laying mammals. The only other living monotreme is the platypus.",
  " lifespan: 50 years,group: mammals,food: insects such as ants and termites, beetle larvae and worms,length: 76cm,weight: 10kg,found: Throughout Australia"
);

const Quokka = new Mammal(
  "Quokka",
  "images/quokka1.jpg",

  "Description: The Quokka, Setonix brachyurus, was described by early Dutch explorer, Willem de Vlamingh, 'as a kind of rat as big as a common cat'. His first sighting of the Quokka was on an island off the mouth of the Swan River. He named the island Rottenest ('rat nest') in honour of this sighting. The island is now known as Rottnest Island. Essentially the Quokka looks very much like other wallabies.It has short, very coarse and thick grey-brown fur over most of the body with lighter parts underneath. Its facial features consist of a naked nose on a short, broad face with rounded furry ears.The tail is relatively short and mostly devoid of hair. In contrast, the hair on the feet extends to cover its claws.",
  "lifespan: 10 years,group: mammals,food: Plant eaters, they munch on shrubs and grasses.length: 50cm,weight: 3kg,found: Only found on Rottnest Island and a few places on mainland Western Australia"
);

const TasmanianDevil = new Mammal(
  "Tasmanian Devil",
  "images/tasmanian-devil1.jpg",

  "Description: The Tasmanian devil (Sarcophilus harrisii) (palawa kani: purinina)[3] is a carnivorous marsupial of the family Dasyuridae. Until recently, it was only found on the island state of Tasmania, but it has been reintroduced to New South Wales in mainland Australia, with a small breeding population. The size of a small dog, the Tasmanian devil became the largest carnivorous marsupial in the world, following the extinction of the thylacine in 1936. It is related to quolls, and distantly related to the thylacine. It is characterised by its stocky and muscular build, black fur, pungent odour, extremely loud and disturbing screech, keen sense of smell, and ferocity when feeding. The Tasmanian devil's large head and neck allow it to generate among the strongest bites per unit body mass of any extant predatory land mammal. It hunts prey and scavenges on carrion.",
  "lifespan: 5 years,group: mammals,food: A predator, then eat meat from other animals such as wallabies and wombats"
);

const Kangaroo = new Mammal(
  "Kangaroo",
  "images/kangaroo.png",

  "Description: Kangaroos are marsupials from the subfamily Macropodinae (macropods, meaning of large foot). In common use, the term is used to describe the largest species from this family, the red kangaroo, as well as the antilopine kangaroo, eastern grey kangaroo, and western grey kangaroo.[1] Kangaroos are indigenous to Australia and New Guinea. The Australian government estimates that 42.8 million kangaroos lived within the commercial harvest areas of Australia in 2019, down from 53.2 million in 2013.[2]",
  "Food: Plant eaters, they munch on shrubs and grasses,Length: 150-180cm,group: mammals,Lifespan: around 20 years,Weight: 50kg"


);



const mammal_arr = [Echidna, Quokka, TasmanianDevil, Kangaroo];

let currentAnimal = null;

const display = document.createElement("div");
main_content.parentNode.insertBefore(display, main_content.nextSibling);
display.classList.add("hide");
display.classList.add("display");

const updateDisplay = () => {
  while (display.firstChild) {
    display.removeChild(display.firstChild);
  }
};

mammal_arr.forEach((mammal) => {
  const el = document.createElement("div");
  el.textContent = mammal.name;
  el.classList.add("el");

  el.addEventListener("click", () => {
    if (!currentAnimal) {
      currentAnimal = mammal.name;
      main_content.classList.add("hide");
      display.classList.remove("hide");
      updateDisplay();
    } else if (currentAnimal !== mammal.name) {
      currentAnimal = mammal.name;
      updateDisplay();
    } else {
      currentAnimal = null;
      display.classList.add("hide");
      main_content.classList.remove("hide");
      return;
    }

    const name = document.createElement("h2");
    name.textContent = mammal.name;
    name.classList.add("h2");
    display.appendChild(name);

    const img = document.createElement("img");
    img.src = mammal.img;
    img.classList.add("img");
    display.appendChild(img);

    const infoShort = document.createElement("p");
    infoShort.textContent = mammal.aboutShort;
    const buttonMore = document.createElement("button");
    buttonMore.classList.add("button");
    buttonMore.textContent = `Read More`;
    display.appendChild(infoShort);
    display.appendChild(buttonMore);

    const infoFull = document.createElement("p");
    infoFull.textContent = mammal.aboutFull;
    infoFull.classList.add("hide");
    const buttonLess = document.createElement("button");
    buttonLess.classList.add("button");
    buttonLess.textContent = `Read Less`;
    buttonLess.classList.add("hide");
    display.appendChild(infoFull);
    display.appendChild(buttonLess);

    [buttonMore, buttonLess].forEach((button) => {
      button.addEventListener("click", () => {
        if (button === buttonMore) {
          buttonMore.classList.add("hide");
          infoFull.classList.remove("hide");
          buttonLess.classList.remove("hide");
        } else {
          buttonLess.classList.add("hide");
          infoFull.classList.add("hide");
          buttonMore.classList.remove("hide");
        }
      });
    });
  });

  sidebar.appendChild(el);
});

const mammalsAbout = document.createElement("p");
const mammalsHeader = document.createElement("h1");
mammalsHeader.textContent = `Mammals`;
mammalsHeader.classList.add("mammals_header");
mammalsAbout.textContent = `Mammals are warm-blooded vertebrates with hair or fur. They nurse their young with milk and are found in diverse habitats worldwide. Our mammal collection showcases some of the most magnificent creatures from the African savannas.
Select an animal from the sidebar to learn more about them.`;
mammalsAbout.classList.add("mammals_about");
main_content.classList.add("main_content");
main_content.appendChild(mammalsHeader);
main_content.appendChild(mammalsAbout);
