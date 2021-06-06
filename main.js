// Создай один два объекта с именем разных игроков, где будут поля 

// - name - это строка;
// - hp - это число;
// - img - это строка;
// - weapon - это массив строк (пока можно написать любое оружие, которое вы сможете придумать, не имеет пока значение какое);
// - attack - это функция, внутри которой нужно поместить console.log, который будет выводить сконкатинированную строку имя вашего персонажа + fight (<имя вашего персонажа> + ‘Fight...’);

const $player1 = {
   name: "Liu Kang",
   hp: 90,
   img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
   weapon: ['katana', 'sword', 'ax'],
   attack: function () {
      console.log(player.name + '' + 'Fight...');
   },
};

const $player2 = {
   name: "Sub Zero",
   hp: 50,
   img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
   weapon: ['ice', 'hands', 'legs'],
   attack: function () {
      console.log(player.name + '' + 'Fight...');
   },
};

console.log($player1);


function createPlayer(name,player,hp) {

   const $arenas = document.querySelector('.arenas');

   const $firstDiv = document.createElement('div');//создаем div
   $firstDiv.classList.add(name); //добавляем класс

   $arenas.appendChild($firstDiv);

   const $progressBar = document.createElement('div');
   $progressBar.classList.add('progressbar');

   $firstDiv.appendChild($progressBar);

   const $character = document.createElement('div');
   $character.classList.add('character');

   $firstDiv.appendChild($character);

   const $life = document.createElement('div');
   $life.classList.add('life');

   $life.style.width = hp + '%';

   $progressBar.appendChild($life);

   const $name = document.createElement('div');
   $name.classList.add('name');

   $name.innerText = player.name;

   $progressBar.appendChild($name);

   const $characterImage = document.createElement('img');
   $characterImage.src = player.img;

   $character.appendChild($characterImage);

}

createPlayer('player1',$player1,$player1.hp);

createPlayer ('player2',$player2,$player2.hp);
