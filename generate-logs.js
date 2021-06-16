import { logs } from "./logs.js";
import { getRandom } from "./utils.js";
import { $chat } from "./elements.js";

const timeLog =  new Date ();

const logTime = timeLog.getHours () + ':' + timeLog.getMinutes ();

function  generateLogs(type, player1, player2) {
   let text = '';
   let el = '';
 
    switch (type) {
       case 'start':
       text = logs[type]
         .replace('[time]', logTime)
         .replace('[player1]', player1.name)
         .replace('[player2]', player2.name);
       el = `<p>${text}</p>`;
       break;
     case 'end':
       text = logs[type][getRandom (logs.end.length) - 1]
         .replace('[playerWins]', player1.name)
         .replace('[playerLose]', player2.name);
       el = `<p>${text}</p>`;
       break;
     case 'hit':
       text = logs[type][getRandom (logs.hit.length) - 1]
         .replace('[playerKick]', player1.name)
         .replace('[playerDefence]', player2.name);
       el = `<p>${logTime}  ${text} - ${100 - player1.hp || 100 - player2.hp}
        [${player1.hp || player2.hp} / 100];
       </p>`;
       break;
     case 'defence':
       text = logs[type][getRandom(logs.defence.length) - 1]
         .replace('[playerKick]', player2.name)
         .replace('[playerDefence]', player1.name);
       el = `<p>${logTime}  ${text}</p>`;
       break;
     case 'draw':
       text = logs[type];
       el = `<p>${text}</p>`;
       break;
       default:
       el = `<p>Something interesting</p>`;
   }
 
   $chat.insertAdjacentHTML('afterbegin', el);
 }
 export default generateLogs;