



const buttons = document.querySelectorAll('.button');
buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.classList.add('neon-hover');
    });
    button.addEventListener('mouseleave', () => {
        button.classList.remove('neon-hover');
    });
});





if (typeof dropsManager !== 'undefined' && dropsManager.init) {
    dropsManager.init();
}




const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.classList.add('card-hover');
    });
    card.addEventListener('mouseleave', () => {
        card.classList.remove('card-hover');
    });
});




window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;


    cursor.style.opacity = Math.max(0.5, 1 - scrollY / 1000);


    cards.forEach(card => {
        card.style.transform = `translateY(${scrollY * 0.1}px)`;
    });
});




document.addEventListener('DOMContentLoaded', () => {
    console.log('Main.js chargé et fonctionnel !');
});
