import { html, render } from '../lib.js'

export const units = {
    hours: '0',
    minutes: '0',
    seconds: '0'
}

export function stopwatch() {

    const timeZero = document.getElementById('timeZero');
    if (timeZero != null) {
        timeZero.remove();
    }
    if (units.seconds > '58') {
        units.seconds = '-1';
        units.minutes = Number(units.minutes) + 1;
    }
    if (units.minutes > '59') {
        units.minutes = '0';
        units.hours = Number(units.hours) + 1;
    }

    units.seconds = Number(units.seconds) + 1;
    const infoBar = document.getElementById('info-bar');

    if (infoBar != null) {

        render(html `
        <time id="time">${(units.hours).toString().padStart(2, '0')}:${(units.minutes).toString().padStart(2, '0')}:${(units.seconds).toString().padStart(2, '0')}</time>
    `, infoBar);

    }
}