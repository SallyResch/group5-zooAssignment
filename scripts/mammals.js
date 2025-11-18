const banner = document.querySelector(".banner");
const bg_banner = document.createElement("img");
const sidebar = document.querySelector(".sidebar");
const main_content = document.querySelector(".main-content");
const h2 = document.createElement("h2");
h2.textContent = `Mammals`;
h2.classList.add("h2");
sidebar.appendChild(h2);

function Mammal(img, name, aboutShort, aboutFull) {
  (this.img = img), (this.name = name), (this.aboutShort = aboutShort);
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

let currentAnimal='';
let click = 0;
//let originalHTML = main_content.innerHTML;
const display = document.createElement("div");
display.classList.add('display_content')

mammal_arr.forEach((mammal) => {
  const el = document.createElement("div");
  el.textContent = mammal.name;
  el.classList.add("el");
  el.addEventListener("click", () => {

    // currentAnimal= `${mammal.name} clicked!`;
    // console.log(currentAnimal); 
    // click++;
    // console.log `${click}`

    if(currentAnimal === mammal.name){

      main_content.classList.add('hide');
      display.classList.add('show')
      return;

      // main_content.innerHTML=originalHTML;
      // display.innerHTML='';
      // click=0;
      // currentAnimal=0;
      // //mammalsAbout.classList.remove('hide');
      // display.classList.add('show');
      // currentAnimal= null;
      //return;
    }

    

    

    
    //display.classList.add("main_content");




    
    
    

   //main_content.classList.add('hide');
  //   click = 1;
  // currentAnimal = mammal.name;

  
  // main_content.innerHTML = "";
  // display.innerHTML = "";

  //   main_content.innerHTML = "";
    //main_content.appendChild(display);

    const img = document.createElement("img");
    img.src = mammal.img;
    img.classList.add("img");
    display.appendChild(img);
    main_content.appendChild(display);

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

    const buttons = [buttonMore, buttonLess];

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        if (button === buttonMore) {
          buttonMore.classList.add("hide");
          infoFull.classList.remove("hide");
          buttonLess.classList.remove("hide");
        } else if (button === buttonLess) {
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
