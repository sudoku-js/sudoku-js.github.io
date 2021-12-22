import { page } from '../lib.js';

export function onNewGame() {
    page.redirect('/game');

}
export function onBackHome() {
    page.redirect('/');
}