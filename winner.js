import { createElement } from "./create-element.js";

const playerWin = (name) => {
   const $winTitle = createElement('div', 'winTitle');
 
   if (name) {
     $winTitle.innerText = name + ' wins';
   } else {
     $winTitle.innerText = 'draw';
   }
 
   return $winTitle;
 };

export default playerWin;