class Clock {
    constructor () {
        let startDate = new Date();

        this.hours = startDate.getHours();
        this.minutes = startDate.getMinutes();
        this.seconds = startDate.getSeconds();

        this.printTime();

        setInterval(this._tick.bind(this), 1000);
    };

    printTime() {
        let time = `${this.hours}:${this.minutes}:${this.seconds}`;
        console.log(time)
    };

    _tick() {
        if (this.seconds < 60) {
            this.seconds++;
        } else if (this.minutes < 60 ) {
            this.minutes++;
            this.seconds = 0;
        } else {
            this.hours++;
            this.minutes = 0;
            this.seconds = 0;
        }
        this.printTime();
    }
};

let clock = new Clock();
