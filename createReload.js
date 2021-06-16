import { createElement } from './create-element.js';
import { $arenas } from './elements.js';

const createReloadButton = () => {
   const $reloadDiv = createElement('div', 'reloadWrap');
   const $reloadButton = createElement('button', 'button');
 
   $reloadButton.innerText = 'Restart';
   $reloadDiv.appendChild($reloadButton);
   $arenas.appendChild($reloadDiv);
 
   $reloadButton.addEventListener('click', function () {
     window.location.reload();
   });
 };

 export default createReloadButton;