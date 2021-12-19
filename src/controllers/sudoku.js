import { interval } from "../views/sudokuView.js";
import { main } from '../app.js'
import { html, render } from '../lib.js'
import { onBackHome, onNewGame } from "./congrats.js";

export function sudoku(index, allNums) {
    document.querySelectorAll('input').forEach(i => {
        i.addEventListener('focus', onFocus)
        i.addEventListener('blur', onBlur)
        i.addEventListener('keydown', onKeyCheck)
    })

    function onKeyCheck(ev) {

        const skipKeys = ['Control', 'Escape', 'CapsLock', 'Shift', 'Alt', 'AltGraph', 'Enter', 'ContextMenu', 'Backspace', 'Delete'];

        const pattern = /^[1-9]{1}$/;
        if (pattern.test(ev.key)) {
            const onlyKey = [];
            onlyKey.push(ev.key);
            const logKey = onlyKey.shift();
            ev.target.value = logKey.slice(1, 1);
            ev.target.style.backgroundColor = '';
        } else if (skipKeys.includes(ev.key)) {
            ev.target.style.backgroundColor = '';
            ev.target.value = '';
        } else if (ev.key == 'Tab') {
            // do nothing
        } else {
            ev.target.style.backgroundColor = 'rgb(255, 148, 148)';
            ev.target.value = '';
        }
    }

    function onFocus(ev) {
        ev.target.style.backgroundColor = 'rgb(106, 186, 230)';
    }

    function onBlur(ev) {
        ev.target.style.backgroundColor = '';
    }

    const gridValues = document.querySelectorAll('input');
    const numbers = Object.values(index())
    const combination = allNums().split(',')

    for (let i = 0; i < 81; i++) {
        if (numbers.includes(i)) {
            gridValues[i].value = '';
        } else {
            gridValues[i].style.fontWeight = 'bold';
            gridValues[i].disabled = true;
            gridValues[i].value = combination[i];
        }
    }

    const checkPuzzle = document.getElementById('check');
    checkPuzzle.addEventListener('click', onValidate);
    const showHint = document.getElementById('hint');
    showHint.addEventListener('click', onHint);

    function onHint(ev) {
        function showHint() {
            const luckyNumbers = [];
            for (let i = 0; i < gridValues.length; i++) {
                if (gridValues[i].value == '') {
                    luckyNumbers.push(i);
                }
            }

            if (luckyNumbers.length < 10) {
                ev.target.disabled = true;
                ev.target.textContent = 'Try next time'
                ev.target.style.backgroundColor = 'rgb(128, 128, 128)';
            }
            let isFound = true;
            let countIndex = 0;
            while (isFound) {
                const index = luckyNumbers[Math.ceil(Math.random() * 80)];
                if (gridValues[index] != undefined) {
                    gridValues[index].value = combination[index];
                    isFound = false;
                }
                countIndex++
                if (countIndex > 10) {
                    return;
                }
            }
        }

        if (ev.target.textContent == 'Hint 3') {
            ev.target.textContent = 'Hint 2';
            showHint();
        } else if (ev.target.textContent == 'Hint 2') {
            ev.target.textContent = 'Hint 1';
            showHint();
        } else if (ev.target.textContent == 'Hint 1') {
            ev.target.textContent = 'Hint 0';
            ev.target.disabled = true;
            ev.target.style.backgroundColor = 'rgb(128, 128, 128)';
            showHint();
        }
    }

    function congrats() {
        const text = 'You made it 🙂';
        const container = document.getElementById('container');
        container.style.animation = 'blinkingBackground 1s infinite'
        for (let i = 0; i < gridValues.length; i++) {
            setTimeout(() => {
                const template = html `
                <p id="congrats">${text}</p>
                <div id="gameOver">
                    <button @click=${onNewGame}>New Game</button>
                    <button @click=${onBackHome}>Back</button>
                </div>
                `
                render(template, main)
            }, 5000);
        }
        clearInterval(interval);
    }

    function onValidate() {
        let counter = 0;
        for (let i = 0; i < gridValues.length; i++) {
            if (gridValues[i].value == combination[i]) {
                counter++;
                gridValues[i].style.backgroundColor = 'rgb(189, 255, 191)';
            } else {
                gridValues[i].style.backgroundColor = 'rgb(255, 148, 148)';
            }
            if (counter == 81) {
                congrats();
            }
            setTimeout(() => {
                gridValues[i].style.backgroundColor = '';
            }, 3000);
        }
    }
}