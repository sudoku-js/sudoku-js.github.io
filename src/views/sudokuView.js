import { main } from '../app.js'
import { html, render } from '../lib.js'
import { sudoku } from "../controllers/sudoku.js";
import { onLeave } from '../controllers/leave.js';
import { createCombination } from "../controllers/engine.js";
import { stopwatch, units } from '../controllers/stopwatch.js';
import { hideEasy, hideHard, hideNormal } from '../controllers/hidden.js';

export let interval
export async function showSudoku(ctx) {
    interval = setInterval(stopwatch, 1000);
    units.hours = '0';
    units.minutes = '0';
    units.seconds = '0';

    const rowTemplate = [];
    for (let i = 0; i < 3; i++) {
        rowTemplate.push(html `
                <div class="row">
                    <input type="text" name="cell" class="cell">
                    <input type="text" name="cell" class="cell">
                    <input type="text" name="cell" class="cell">
                </div>
        `);
    }
    const template = html `
    <section id="sudoku">
        <div id="info-bar">
            <p id="level-info">Level: ${ctx.params.id}</p>
            <time id="timeZero" datetime="00:00:00">00:00:00</time>
        </div>
        <div id="container">
            <div class="box-1">
            ${rowTemplate}
            </div>
            <div class="box-1">
            ${rowTemplate}
            </div>
            <div class="box-1">
            ${rowTemplate}
            </div>
            <div class="box-2">
                ${rowTemplate}
            </div>
            <div class="box-2">
                ${rowTemplate}
            </div>
            <div class="box-2">
                ${rowTemplate}
            </div>
            <div class="box-3">
                ${rowTemplate}
            </div>
            <div class="box-3">
                ${rowTemplate}
            </div>
            <div class="box-3">
                ${rowTemplate}
            </div>

        </div>

        <div id="commands">
            <button id="leave" @click=${onLeave}>Leave</button>
            <button id="check" >Check</button>
            <button id="hint" >Hint 3</button>
        </div>

    </section>
    `
    render(template, main);
    if (ctx.params.id == 'Easy') {
        sudoku(hideEasy, createCombination);
    } else if (ctx.params.id == 'Normal') {
        sudoku(hideNormal, createCombination);
    } else if (ctx.params.id == 'Hard') {
        sudoku(hideHard, createCombination);
    }
}