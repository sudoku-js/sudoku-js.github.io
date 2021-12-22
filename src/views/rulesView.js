import { main } from '../app.js';
import { onBack } from '../controllers/back.js';
import { html, render } from '../lib.js';

export function showRules() {
    const template = html `
    <section id="rules">
        <div id="backRules">
            <button id="backBtn" @click=${onBack}>Back</button>
        </div>
        <h2 id="hOverview">Overview</h2>
        <p>There are different variants of Sudoku out there. For example:</p>
        <p> - Super Doku - where the grids are larger that 9x9</p>
        <p> - Prime Doku - where the grid is NxN and N is a prime number. </p>
        <p> We are going to play the calssic 9x9 grid Sudoku 🙂 </p>
        <img class="puzzle" src="/img/puzzle.png" alt="Sudoku puzzle">
        <h2 id="hRules">Rules</h2>
        <p>The rules of the games are pretty simple. The classic 9x9 grid has 81 boxes from which are formed 9 bigger boxes. Each box contains a single number form 1 to 9 included.</p>
        <ul>
            <li>
                Every square has to contain a single number
            </li>
            <li>
                Only the numbers from 1 through to 9 can be used
            </li>
            <li>
                Each 3x3 box can only contain each number from 1 to 9 once
            </li>
            <li>
                Each vertical column can only contain each number from 1 to 9 once
            </li>
            <li>
                Each horizontal row can only contain each number from 1 to 9 once
            </li>
        </ul>
        <p>
            When you start a new sudoku puzzle, some squares will already be filled with numbers.
        </p>
        <p>
            Based on how difficult the puzzle is, these numbers will &quot;lock in&quot; specific numbers to specific squares.
        </p>
        <p>
            That is, squares where only one number can go without breaking any rules.
        </p>
        
    </section>
    `
    render(template, main);
}