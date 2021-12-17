import { main } from '../app.js'
import { onBack } from '../controllers/back.js';
import { html, render } from '../lib.js'

export function showAbout() {
    const template = html `
    <section id="about">
        <div id="backRules">
            <button id="backBtn" @click=${onBack}>Back</button>
        </div>
        <h1>About</h1>
        <p>
            In its simplest and most common configuration, sudoku consists of a 9x9 grid with numbers appearing in some of the squares.
        </p>
        <p>The object of the puzzle is to fill the remaining squares, using all the numbers 1-9 exactly once in each row, column, and the nine 3x3 subgrids.</p>
        <p>Sudoku is based entirely on logic, without any arithmetic involved, and the level of difficulty is determined by the quantity and positions of the original numbers.</p>
        <p>The puzzle, however, raised interesting combinatorial problems for mathematicians, two of whom proved in 2005 that there are 6,670,903,752,021,072,936,960 possible sudoku grids.</p>
        <img src="/img/sudoku.jpg" alt="sudoku" class="sudoku">

    </section>
    `
    render(template, main);
}