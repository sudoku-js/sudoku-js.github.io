import { page } from '../lib.js';

export function onPlay(ev) {
    page.redirect(`/sudoku/${ev.target.dataset.level}`);
}