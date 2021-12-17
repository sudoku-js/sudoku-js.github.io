export function onCheck(ev) {
    const easy = document.getElementById('Easy');
    easy.style.backgroundColor = '';
    easy.dataset.set = false;
    const normal = document.getElementById('Normal');
    normal.style.backgroundColor = '';
    normal.dataset.set = false;
    const hard = document.getElementById('Hard');
    hard.style.backgroundColor = '';
    hard.dataset.set = false;
    ev.target.dataset.set = true;
    ev.target.style.backgroundColor = 'rgb(78, 153, 149)';

    const playBtn = document.getElementById('playBtn');
    playBtn.disabled = false;
    playBtn.dataset.level = ev.target.id;
    playBtn.style.backgroundColor = ''

}