
const banner=document.querySelector('.banner');
const bg_banner=document.createElement('img');
const sidebar=document.querySelector('.sidebar')
const main_content = document.querySelector(".main-content");
const h2=document.createElement('h2');
h2.textContent=`Mammals`;
h2.classList.add('h2');
sidebar.appendChild(h2);



function Mammal(img,name,about){

  this.img=img,
  this.name=name,
  this.about= about;
}

const Echidna= new Mammal('images/Echidna2.jpg', 'Echidna','The African Lion is a large cat known for its majestic mane and powerful roar. They are social animals living in prides.');
const Quokka= new Mammal('images/quokka1.jpg', 'Quokka','The African Lion is a large cat known for its majestic mane and powerful roar. They are social animals living in prides.')
const TasmanianDevil= new Mammal('images/tasmanian-devil1.jpg', 'Tasmanian Devil','The African Lion is a large cat known for its majestic mane and powerful roar. They are social animals living in prides.')

const mammal_arr=[Echidna,Quokka,TasmanianDevil];

let click=0;
mammal_arr.forEach(mammal =>{

  const el=document.createElement('div');
  el.textContent=mammal.name;
  el.classList.add('el')
  el.addEventListener('click',()=>{

    click++;
    main_content.innerHTML=''
  
    const displayEchidna=document.createElement('div');
    const img=document.createElement('img');
    img.src=mammal.img;
    img.classList.add('img');
    displayEchidna.appendChild(img);
    main_content.appendChild(displayEchidna);
    
    const name=document.createElement('h2');
    name.textContent=mammal.name
    name.classList.add('h2');
    displayEchidna.appendChild(name);

    const aboutEchidna=document.createElement('p');
    aboutEchidna.textContent=`The African Lion is a large cat known for its majestic mane and powerful roar. They are social animals living in prides.`
    displayEchidna.appendChild(aboutEchidna);

  })
  sidebar.appendChild(el);

  
})






const mammalsAbout = document.createElement("p");
const mammalsHeader = document.createElement("h1");
mammalsHeader.textContent = `Mammals`;
mammalsHeader.classList.add("mammalsHeader");

mammalsAbout.textContent = `Mammals are warm-blooded vertebrates with hair or fur. They nurse their young with milk and are found in diverse habitats worldwide. Our mammal collection showcases some of the most magnificent creatures from the African savannas.

Select an animal from the sidebar to learn more about them.`;
mammalsAbout.classList.add("mammalsAbout");
main_content.classList.add("main-content");
main_content.appendChild(mammalsHeader);
main_content.appendChild(mammalsAbout);
