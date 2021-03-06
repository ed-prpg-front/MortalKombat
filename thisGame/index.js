import { getRandom, createElement, time } from "../utils/index.js";
import { HIT, ATTACK, LOGS } from "../consts/index.js";
import { liuKang, Scorpion, createPlayer } from "../player/index.js";

export default class Game {
    constructor() {
        this.formFight = document.querySelector('.control');
        this.arenas = document.querySelector('.arenas');
        this.fightButton = document.querySelector('.button');
        this.chat = document.querySelector('.chat');
    }

    enemyAttack = () => {
        const hit = ATTACK[getRandom(3) - 1];
        const defence = ATTACK[getRandom(3) - 1];

        return {
            value: getRandom(HIT[hit]),
            hit,
            defence,
        }
    }

    playerAttack = () => {
        const attack = {};
        for (let item of this.formFight) {
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

    createReloadButton = () => {
        const reloadWrap = createElement('div', 'reloadWrap');
        const reloadButton = createElement('button', 'button');
        reloadButton.innerText = 'Restart';
        reloadWrap.appendChild(reloadButton);
        this.arenas.appendChild(reloadWrap);

        reloadButton.addEventListener('click', () => window.location.reload());
    }

    playerWins = (name) => {
        const $winTitle = createElement('div', 'loseTitle');
        if (name) {
            $winTitle.innerText = `${name} wins!`;
        } else {
            $winTitle.innerText = 'Draw!';
        }
        return $winTitle;
    }

    showResult = (player1, player2) => {
        const formInputs = this.formFight.querySelectorAll('input');

        if (player1.hp === 0 || player2.hp === 0) {
            this.fightButton.disabled = true;
            for (let item of formInputs) {
                item.disabled = true;
            }
            this.createReloadButton();
        }

        if (player1.hp === 0 && player1.hp < player2.hp) {
            this.arenas.appendChild(this.playerWins(player2.name));
            this.generateLogs('end', player2, player1);
        } else if (player2.hp === 0 && player2.hp < player1.hp) {
            this.arenas.appendChild(this.playerWins(player1.name));
            this.generateLogs('end', player1, player2);
        } else if (player1.hp === 0 && player2.hp === 0) {
            this.arenas.appendChild(this.playerWins());
            this.generateLogs('draw');
        }
    }

    getTextLog = (type, playerName1, playerName2) => {
        switch (type) {
            case 'start':
                return LOGS[type]
                    .replace('[player1]', playerName1)
                    .replace('[player2]', playerName2)
                    .replace('[time]', time());
                break;
            case 'hit':
                return LOGS[type][getRandom(LOGS[type].length - 1) - 1]
                    .replace('[playerKick]', playerName1)
                    .replace('[playerDefence]', playerName2);
                break;
            case 'defence':
                return LOGS[type][getRandom(LOGS[type].length - 1) - 1]
                    .replace('[playerKick]', playerName1)
                    .replace('[playerDefence]', playerName2);
                break;
            case 'end':
                return LOGS[type][getRandom(LOGS[type].length - 1) - 1]
                    .replace('[playerWins]', playerName1)
                    .replace('[playerLose]', playerName2);
                break;
            case 'draw':
                return LOGS[type];
                break;
            default:
                return 'Something interesting!';
                break;
        }      
    }

    generateLogs = (type, { name }, { name: playerName2, hp }, valueAttack) => {
        let text = this.getTextLog(type, name, playerName2);
        switch(type) {
            case 'hit':
                text = `${time()} ${text} -${valueAttack} [${hp}/100]`;
                break;
            case 'defence':
            case 'end':
            case 'draw':
                text = `${time()} ${text}`;
                break;

        }

        const el = `<p>${text}</p>`;
        this.chat.insertAdjacentHTML('afterbegin', el);
    }

    start = () => {
        this.arenas.appendChild(createPlayer(liuKang));
        this.arenas.appendChild(createPlayer(Scorpion));

        this.generateLogs('start', liuKang, Scorpion);

        this.formFight.addEventListener('submit', (e) => {
            e.preventDefault();
            const { hit: hitEnemy, defence: defenceEnemy, value: valueEnemy } = this.enemyAttack();
            const { hit, defence, value } = this.playerAttack();

            if (defence !== hitEnemy) {
                liuKang.changeHP(valueEnemy);
                liuKang.renderHP();
                this.generateLogs('hit', Scorpion, liuKang, valueEnemy);
            } else {
                this.generateLogs('defence', Scorpion, liuKang);
            }

            if (hit !== defenceEnemy) {
                Scorpion.changeHP(value);
                Scorpion.renderHP();
                this.generateLogs('hit', liuKang, Scorpion, value);
            } else {
                this.generateLogs('defence', liuKang, Scorpion);
            }

            this.showResult(liuKang, Scorpion);
        });
    }
}