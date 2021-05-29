import './sass/main.scss';

class CountdownTimer {
    constructor({ targetDate, selector }) {
        this.selector = selector;
        this.targetDate = targetDate;
        this.start();
    }

    start() {
        setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = this.targetDate - currentTime;
            const timeComponents = this.getTimeComponents(deltaTime);

            this.updateCountdownTimerFace(timeComponents);
        }, 1000);
    }

    getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
    }
    
     pad(value) {
         return String(value).padStart(2, '0');
    }
    
    updateCountdownTimerFace({ days, hours, mins, secs }) {
        document.querySelector(this.selector,).children[0].children[0].textContent = days;
        document.querySelector(this.selector,).children[1].children[0].textContent = hours;
        document.querySelector(this.selector,).children[2].children[0].textContent = mins;
        document.querySelector(this.selector,).children[3].children[0].textContent = secs;
    }
}

const newCountdownTimer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('June 13, 2021'),
})

