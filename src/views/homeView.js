import { main } from '../app.js';
import { html, render } from '../lib.js';

export function showHome() {
    const template = html `
    <section id="home">
        <div id="welcome">
            <header id="homeHeader">Sudoku</header>
        </div>
        <div id="navigation">
            <nav>
                <a class="nav" href="/game">Game</a>
                <a class="nav" href="/rules">Rules</a>
                <a class="nav" href="/about">About</a>
            </nav>
        </div>
    </section>
    `
    render(template, main);
}