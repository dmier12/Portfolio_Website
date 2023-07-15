// Example: Display a popup when a button is clicked
const button = document.querySelector('#contact button');
button.addEventListener('click', () => {
    alert('Thank you for contacting me!');
});

const flipCards = document.querySelectorAll('.flip-card');

flipCards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
});

