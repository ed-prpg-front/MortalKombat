import {  $randomButton, $arenas } from "./elements.js";
import { player1, player2 } from "./players.js";
import createReloadButton from "./restart.js";
import playerWin from "./winner.js";
import generateLogs from "./generate-logs.js";

const showResult = () => {
   if (player1.hp === 0 || player2.hp === 0) {
     $randomButton.disabled = true;
     createReloadButton();
   }
 
   if (player1.hp === 0 && player1.hp < player2.hp) {
     $arenas.appendChild(playerWin(player2.name));
     generateLogs('end', player2, player1);
   } else if (player2.hp === 0 && player2.hp < player1.hp) {
     $arenas.appendChild(playerWin(player1.name));
     generateLogs('end', player1, player2);
   } else if (player1.hp === 0 && player2.hp === 0) {
     $arenas.appendChild(playerWin());
     generateLogs('draw');
   }
 };

 export default showResult;