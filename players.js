export const player1 = {
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
 
 export const player2 = {
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
 
 function attack() {
   console.log(this.name + ' Fight...');
 }
 
 function elHP() {
   return document.querySelector('.player' + this.player + ' .life');
 }
 
 function changeHP(number) {
   this.hp -= number;
 
   if (this.hp <= 0) {
     this.hp = 0;
   }
 }
 
 function renderHP() {
   this.elHP().style.width = this.hp + '%';
 }