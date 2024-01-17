document.addEventListener('DOMContentLoaded', function () {
    const iconContainer = document.getElementById('iconContainer');
    const icons = [...Array(8)].map(getRandomLetter).map(letter => `<div class="icon">${letter}</div>`).join('');
    iconContainer.innerHTML = icons;
});

function getRandomLetter() {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return alphabet[Math.floor(Math.random() * alphabet.length)];
}
