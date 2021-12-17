import { page } from './lib.js';
import { showAbout } from './views/aboutView.js';
import { showGame } from './views/gameView.js';
import { showHome } from './views/homeView.js';
import { showRules } from './views/rulesView.js';
import { showSudoku } from './views/sudokuView.js';
export const main = document.getElementById('main');

page('/', showHome);
page('/game', showGame);
page('/rules', showRules);
page('/about', showAbout);
page('/sudoku/:id', showSudoku);

page.start();