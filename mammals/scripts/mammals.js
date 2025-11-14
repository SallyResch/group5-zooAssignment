const sidebar=document.querySelector('.sidebar');
const main_content=document.querySelector('.main-content')

const mammals_arr=['Echidna','Quokka','Tasmanian Devil'];



const mammalsAbout =document.createElement('p');
const mammalsHeader=document.createElement('h1');
mammalsHeader.textContent=`Mammals`;
mammalsHeader.classList.add('mammalsHeader');


mammalsAbout.textContent=`Mammals are warm-blooded vertebrates with hair or fur. They nurse their young with milk and are found in diverse habitats worldwide. Our mammal collection showcases some of the most magnificent creatures from the African savannas.

Select an animal from the sidebar to learn more about them.`;
mammalsAbout.classList.add('mammalsAbout')
main_content.classList.add('main-content');
main_content.appendChild(mammalsHeader);
main_content.appendChild(mammalsAbout);


    

  

