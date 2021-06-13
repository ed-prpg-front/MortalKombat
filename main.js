// Создай один два объекта с именем разных игроков, где будут поля 

// - name - это строка;
// - hp - это число;
// - img - это строка;
// - weapon - это массив строк (пока можно написать любое оружие, которое вы сможете придумать, не имеет пока значение какое);
// - attack - это функция, внутри которой нужно поместить console.log, который будет выводить сконкатинированную строку имя вашего персонажа + fight (<имя вашего персонажа> + ‘Fight...’);
const $arenas = document.querySelector('.arenas');

// const $randomButton = document.querySelector('.button');

const $chat = document.querySelector ('.chat');


const timeLog =  new Date ();

const logTime = timeLog.getHours () + ':' + timeLog.getMinutes ();

console.log (logTime);

const $formFight = document.querySelector('.control');

const HIT = {
   head: 30,
   body: 25,
   foot: 20,
}


const ATTACK = ['head', 'body', 'foot'];


const player1 = {
   name: "Liu Kang",
   player: 1,
   hp: 100,
   img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
   weapon: ['katana', 'sword', 'ax'],
   attack: function () {
      console.log(player.name + '' + 'Fight...');
   },
   changeHP,
   elHP,
   renderHP,
};

const player2 = {
   name: "Sub Zero",
   player: 2,
   hp: 100,
   img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
   weapon: ['ice', 'hands', 'legs'],
   attack: function () {
      console.log(player.name + '' + 'Fight...');
   },
   changeHP,
   elHP,
   renderHP,

};


function getRandom(number) {
   return Math.ceil(Math.random() * number);
}

function elHP() {
   return document.querySelector('.player' + this.player + ' .life');
}

function renderHP() {
   this.elHP().style.width = this.hp + '%';
}

function createReloadButton() {
   const $reloadButtonDiv = createElement('div', 'reloadWrap');
   const $reloadButton = createElement('button', 'button');
   $reloadButton.innerText = 'Reload';

   $reloadButton.addEventListener('click', function () {
      window.location.reload();

   });

   $reloadButtonDiv.appendChild($reloadButton);

   $arenas.appendChild($reloadButtonDiv);
}



function createElement(tag, className) {
   const $tag = document.createElement(tag);

   if (className) {
      $tag.classList.add(className);
   }

   return $tag;
}

function createPlayer(playerObj) {

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





console.log(player1.elHP);

function changeHP(number) {

   this.hp -= getRandom(number);

   if (this.hp <= 0) {
      this.hp = 0;
   }
}


function playerWin(name) {
   const $winTitle = createElement('div', 'loseTitle');

   if (name) {
      $winTitle.innerText = name + ' Wins';
   } else {
      $winTitle.innerText = 'IT IS DRAW!';
   }

   return $winTitle;
}

// $randomButton.addEventListener('click', function () {
//    console.log('#####');

//    if (player1.hp === 0 || player2.hp === 0) {
//       $randomButton.disabled = true;
//       createReloadButton();
//    }

//    if (player1.hp === 0 && player1.hp < player2.hp) {
//       $arenas.appendChild(playerWin(player2.name));
//    } else if (player2.hp === 0 && player2.hp < player1.hp) {
//       $arenas.appendChild(playerWin(player1.name));
//    } else if (player1.hp === 0 && player2.hp === 0) {
//       $arenas.appendChild(playerWin());
//    }
//    player1.changeHP(getRandom(20));
//    player1.renderHP();
//    player2.changeHP(getRandom(20));
//    player2.renderHP();
// })

function enemyAttack() {
   const hit = ATTACK[getRandom(3) - 1];
   const defence = ATTACK[getRandom(3) - 1];
   // console.log('#####:hit', hit);
   // console.log('#####:defence', defence);

   return {
      value: getRandom(HIT[hit]),
      hit,
      defence,
   }
}

function playerAttack () {
   const attack = {};

   for (let item of $formFight) {
      if (item.checked && item.name === 'hit') {
         attack.value = getRandom(HIT[item.value]);
         attack.hit = item.value;
      }
      if (item.checked && item.name === 'defence') {
         attack.defence = item.value;
      }
      item.checked = false;
   }

   return attack;
}

function showResult () {
   if (player1.hp === 0 || player2.hp === 0) {
      $randomButton.disabled = true;
      createReloadButton();
   }

  if (player1.hp === 0 && player1.hp < player2.hp) {
       $arenas.appendChild(playerWin(player2.name));
    } else if (player2.hp === 0 && player2.hp < player1.hp) {
      $arenas.appendChild(playerWin(player1.name));
   } else if (player1.hp === 0 && player2.hp === 0) {
     $arenas.appendChild(playerWin());
    }
   player1.changeHP(getRandom(number));
   player1.renderHP();
   player2.changeHP(getRandom(number));
   player2.renderHP();
}

function generateLogs (type,player1,player2) {
   // let text = logs[type].replace(['playerKick'],player1.name).replace(['playerDefence'],player2.name)
   // .replace('[time]',logTime) ;
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
      }</p>`;
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
   }
   $chat.insertAdjacentHTML('afterbegin',el);
   }  

$formFight.addEventListener('submit', function (e) {
   e.preventDefault();
   const enemy = enemyAttack ();
   const player = playerAttack ();

   if (player.defence != enemy.hit) {
      player1.changeHP (enemy.value);
      player1.renderHP ();
      generateLogs ('hit',player2,player1);
   }

   if (enemy.defence != enemy.hit) {
      player2.changeHP (player.value);
      player2.renderHP ();
      generateLogs ('end',player1,player2);
   }

   showResult ();
 });





$arenas.appendChild(createPlayer(player1));

$arenas.appendChild(createPlayer(player2));

