import { player1, player2 } from './player.js';
import { enemyAttack,playerAttack } from './fight.js';
import {$formFight,$arenas } from './elements.js';

import createPlayer from './create-player.js';
import generateLogs from './generate-logs.js';
import showResult from './show-result.js';







$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));
generateLogs('start', player2, player1);



$formFight.addEventListener('submit', function (e) {
  e.preventDefault();
  const enemy = enemyAttack();
  const player = playerAttack();

  if (player.defence !== enemy.hit) {
    player1.changeHP(enemy.value);
    player1.renderHP();
    generateLogs('hit', player2, player1);
  } else if (enemy.hit === player.defence) {
    generateLogs('defence', player2, player1);
  }

  if (enemy.defence !== player.hit) {
    player2.changeHP(player.value);
    player2.renderHP();
    generateLogs('hit', player1, player2);
  } else if (player.hit === enemy.defence) {
    generateLogs('defence', player1, player2);
  }

  showResult();
});