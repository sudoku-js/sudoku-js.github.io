import { main } from '../app.js'
import { onBack } from '../controllers/back.js';
import { onCheck } from '../controllers/leveling.js';
import { onPlay } from '../controllers/play.js';
import { html, render } from '../lib.js'

export function showGame(ctx) {
    const template = html `
    <section id="game">
        <div id="level">
            <h1 id="choice">
                Choose your level
            </h1>
        </div>

        <div id="leveling">
            <button data-set="false" id="Easy" @click=${onCheck}>What is this sudoku game</button>
            <button data-set="false" id="Normal" @click=${onCheck}>I play from time to time</button>
            <button data-set="false" id="Hard" @click=${onCheck}>Sudoku is my middle name</button>
        </div>

        <div id="playBack">
            <button id="backBtn" @click=${onBack}>Back</button>
            <button id="playBtn" @click=${onPlay} disabled>Play</button>
        </div>

    </section>
    `
    render(template, main);

    const playBtn = document.getElementById('playBtn');
    playBtn.style.backgroundColor = 'rgb(184, 183, 178)'

}