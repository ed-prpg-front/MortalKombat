// Создай один два объекта с именем разных игроков, где будут поля 

// - name - это строка;
// - hp - это число;
// - img - это строка;
// - weapon - это массив строк (пока можно написать любое оружие, которое вы сможете придумать, не имеет пока значение какое);
// - attack - это функция, внутри которой нужно поместить console.log, который будет выводить сконкатинированную строку имя вашего персонажа + fight (<имя вашего персонажа> + ‘Fight...’);
const $arenas = document.querySelector('.arenas');

const $randomButton = document.querySelector('.button');


const player1 = {
   name: "Liu Kang",
   player: 1,
   hp: 100,
   img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
   weapon: ['katana', 'sword', 'ax'],
   attack: function () {
      console.log(player.name + '' + 'Fight...');
   },
   changeHP:changeHP,
   elHP: elHP,
   renderHP:renderHP,
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
   changeHP:changeHP,
   elHP: elHP,
   renderHP:renderHP,

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

$randomButton.addEventListener('click', function () {
   console.log('#####');

   if (player1.hp === 0 || player2.hp === 0) {
      $randomButton.disabled = true;
   }

   if (player1.hp === 0 && player1.hp < player2.hp) {
      $arenas.appendChild(playerWin(player2.name));
   } else if (player2.hp === 0 && player2.hp < player1.hp) {
      $arenas.appendChild(playerWin(player1.name));
   } else if (player1.hp === 0 && player2.hp === 0) {
      $arenas.appendChild(playerWin());
   }
   player1.changeHP(getRandom(20));
   player1.renderHP ();
   player2.changeHP(getRandom(20));
   player2.renderHP ();
})

$arenas.appendChild(createPlayer(player1));

$arenas.appendChild(createPlayer(player2));

