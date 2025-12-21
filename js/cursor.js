class CustomCursor {
    constructor(cursorSelector) {
        this.cursor = document.querySelector(cursorSelector);
        if (!this.cursor) return;

        this.mouseX = 0;
        this.mouseY = 0;
        this.rotation = 0;
        this.interactiveElements = document.querySelectorAll('a, button, .card, .button');

        // Stocker les références des fonctions AVANT init()
        this.boundUpdatePosition = (e) => this.updatePosition(e);
        this.boundHandleClick = (e) => this.handleClick(e);

        this.init();
    }

    init() {
        if ('ontouchstart' in window) {
            document.body.style.cursor = 'default';
            return;
        } else {
            document.body.style.cursor = 'none';
        }

        this.updatePosition({ clientX: window.innerWidth / 2, clientY: window.innerHeight / 2 });

        // Utiliser les références stockées
        document.addEventListener('mousemove', this.boundUpdatePosition);
        document.addEventListener('click', this.boundHandleClick);

        this.initInteractiveHover();
    }

    updatePosition(e) {
        const offsetX = -30;
        this.mouseX = e.clientX - offsetX;
        this.mouseY = e.clientY - offsetX;
        this.cursor.style.left = `${this.mouseX}px`;
        this.cursor.style.top = `${this.mouseY}px`;
    }

    handleClick(e) {
        this.cursor.style.transform = 'translate(-50%, -50%) rotate(25deg)';
        setTimeout(() => {
            this.cursor.style.transform = 'translate(-50%, -50%) rotate(0deg)';
        }, 200);

        this.createDroplets(e.clientX, e.clientY);
    }

    createDroplets(x, y) {
        const dropCount = 10;
        for (let i = 0; i < dropCount; i++) {
            const drop = document.createElement('div');
            drop.className = 'blood-drop';
            const size = Math.random() * 6 + 4;
            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * 50 + 20;
            const targetX = x + Math.cos(angle) * distance;
            const targetY = y + Math.sin(angle) * distance;
            const opacity = Math.random() * 0.5 + 0.3;

            drop.style.width = `${size}px`;
            drop.style.height = `${size}px`;
            drop.style.left = `${x}px`;
            drop.style.top = `${y}px`;
            drop.style.background = `rgba(255, 0, 0, ${opacity})`;
            drop.style.borderRadius = '50%';
            drop.style.position = 'fixed';
            drop.style.pointerEvents = 'none';
            drop.style.zIndex = '9999';
            drop.style.transform = 'translate(-50%, -50%)';

            document.body.appendChild(drop);

            const duration = 500 + Math.random() * 500;
            const startTime = performance.now();

            const animate = (currentTime) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const currentX = x + (targetX - x) * progress;
                const currentY = y + (targetY - y) * progress;
                const currentOpacity = opacity * (1 - progress);

                drop.style.left = `${currentX}px`;
                drop.style.top = `${currentY}px`;
                drop.style.opacity = currentOpacity;

                if (progress < 1) requestAnimationFrame(animate);
                else drop.remove();
            };

            requestAnimationFrame(animate);
        }
    }

    initInteractiveHover() {
        this.interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => this.cursor.classList.add('cursor-hover'));
            el.addEventListener('mouseleave', () => this.cursor.classList.remove('cursor-hover'));
        });
    }

    cleanup() {
        document.body.style.cursor = '';
        // Utiliser les références stockées pour supprimer les listeners
        document.removeEventListener('mousemove', this.boundUpdatePosition);
        document.removeEventListener('click', this.boundHandleClick);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const customCursor = new CustomCursor('.cursor');
    window.addEventListener('beforeunload', () => customCursor.cleanup());
});


