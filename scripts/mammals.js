const banner = document.querySelector(".banner");
const bg_banner = document.createElement("img");
const sidebar = document.querySelector(".sidebar");
const main_content = document.querySelector(".main-content");
const h2 = document.createElement("h2");
h2.textContent = `Mammals`;
h2.classList.add("h2");
sidebar.appendChild(h2);

function Mammal(img, name, aboutShort, aboutFull) {
  this.img = img;
  this.name = name;
  this.aboutShort = aboutShort;
  this.aboutFull = aboutFull;
}

const Echidna = new Mammal(
  "images/Echidna2.jpg",
  "Echidna",
  "The echidna is a unique egg-laying mammal found in Australia.",
  "The echidna is a unique egg-laying mammal found in Australia. It has spines, a long sticky tongue and feeds mainly on ants and termites."
);

const Quokka = new Mammal(
  "images/quokka1.jpg",
  "Quokka",
  "The quokka is a small, friendly marsupial native to Western Australia",
  "The quokka is a small, friendly marsupial native to Western Australia. It is known for its adorable smile, round body, and curious nature. Quokkas live mainly on Rottnest Island and feed on leaves, grasses, and shrubs. They are mostly active at night and are not afraid of humans, which makes them very popular among tourists."
);

const TasmanianDevil = new Mammal(
  "images/tasmanian-devil1.jpg",
  "Tasmanian Devil",
  "The Tasmanian Devil is a carnivorous marsupial known for its loud screeches and strong bite.",
  "The Tasmanian Devil is a carnivorous marsupial found only on the island of Tasmania. Despite its small size, it has one of the strongest bites relative to body size in the animal kingdom. Devils are scavengers and predators that feed on carrion, small mammals, and birds. They are famous for their fierce behavior, loud screeches, and powerful jaws. Conservation efforts are ongoing due to a contagious facial tumor disease that threatens the species."
);

const mammal_arr = [Echidna, Quokka, TasmanianDevil];

let currentAnimal = null;

const display = document.createElement("div");
display.classList.add("hide");
display.classList.add("display");

main_content.parentNode.insertBefore(display, main_content.nextSibling);

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

    const img = document.createElement("img");
    img.src = mammal.img;
    img.classList.add("img");
    display.appendChild(img);

    const name = document.createElement("h2");
    name.textContent = mammal.name;
    name.classList.add("h2");
    display.appendChild(name);

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
