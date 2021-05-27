import './sass/main.scss';

const refs = {
    timer: document.querySelector('#timer-1'),
    days: document.querySelector('[data-value=days]'),
    hours: document.querySelector('[data-value=hours]'),
    mins: document.querySelector('[data-value=mins]'),
    secs: document.querySelector('[data-value=secs]'),
};

class CountdownTimer {
    constructor({ onTick, targetDate }) {
        this.onTick = onTick;
        this.targetDate = targetDate;
    }

    start() {
        setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = this.targetDate - currentTime;
            const timeComponents = this.getTimeComponents(deltaTime);

            this.onTick(timeComponents);
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
}

function updateCountdownTimerFace({ days, hours, mins, secs }) {
    refs.days.textContent = days;
    refs.hours.textContent = hours;
    refs.mins.textContent = mins;
    refs.secs.textContent = secs;
}

const newCountdownTimer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('June 13, 2021'),
    onTick: updateCountdownTimerFace,
})

newCountdownTimer.start();


// const CountdownTimer = {
//     start() {
//         const targetDate = new Date('June 13, 2021');

//         setInterval(() => {
//             const currentTime = Date.now();
//             const deltaTime = targetDate - currentTime;
//             const timeComponents= getTimeComponents(deltaTime);
//             updateCountdownTimerFace(timeComponents);
//         }, 1000);
//     },
// };

// function pad(value) {
//     return String(value).padStart(2, '0');
// };

// function getTimeComponents(time) {
//     const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
//     const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
//     const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//     const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

//     return { days, hours, mins, secs };
// }; 

// CountdownTimer.start();