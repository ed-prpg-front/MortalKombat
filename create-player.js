import { createElement } from "./create-element.js";

 export const createPlayer = (playerObj) => {

   const $firstDiv = createElement('div', 'player' + playerObj.player);
 
 
   const $progressBar = createElement('div', 'progressbar');
 
 
   $firstDiv.appendChild($progressBar);
 
   const $character = createElement('div', 'character');
 
 
   $firstDiv.appendChild($character);
 
   const $life = createElement('div', 'life');
 
 
   $life.style.width = playerObj.hp + '%';
 
   $progressBar.appendChild($life);
 
   const $name = createElement('div', 'name');
 
 
   $name.innerText = playerObj.name;
 
   $progressBar.appendChild($name);
 
   const $characterImage = createElement('img');
   $characterImage.src = playerObj.img;
 
   $character.appendChild($characterImage);
 
   return $firstDiv;
 }