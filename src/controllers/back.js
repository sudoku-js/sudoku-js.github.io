import { page } from '../lib.js';

export function onBack(ctx) {
    page.redirect('/');
}