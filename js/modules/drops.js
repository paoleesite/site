import { DROPS_CONFIG } from '../config/drops.config.js';

 export class DropsManager {
    constructor() {
        this.config = DROPS_CONFIG;
        this.init();
    }

         init() {
        this.setupEventListeners();
    }

         setupEventListeners() {
        document.addEventListener('click', (e) => this.handleClick(e));
    }

         handleClick(event) {
         
        if (event.target.tagName === 'A' || 
            event.target.tagName === 'BUTTON' || 
            event.target.closest('a, button, .no-ripple')) {
            return;
        }

        this.createDrops(event);
    }

         createDrops(event) {
        for (let i = 0; i < this.config.COUNT; i++) {
            this.createDrop(event.clientX, event.clientY, i);
        }
    }

         createDrop(x, y, index) {
        const drop = document.createElement('div');
        drop.className = 'ripple-drop';

         
        const angle = (index / this.config.COUNT) * Math.PI * 2;
        const distance = this.getRandomValue(
            this.config.MIN_DISTANCE, 
            this.config.MAX_DISTANCE
        );

        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;

         
        drop.style.left = `${x}px`;
        drop.style.top = `${y}px`;
        drop.style.setProperty('--tx', `${tx}px`);
        drop.style.setProperty('--ty', `${ty}px`);
        
         
        const size = this.getRandomValue(
            this.config.MIN_SIZE, 
            this.config.MAX_SIZE
        );
        drop.style.transform = `scale(${size})`;

         
        document.body.appendChild(drop);

         
        setTimeout(() => {
            if (drop.parentNode) {
                drop.remove();
            }
        }, this.config.ANIMATION_DURATION);
    }

         getRandomValue(min, max) {
        return min + Math.random() * (max - min);
    }
}

 
export const dropsManager = new DropsManager();
