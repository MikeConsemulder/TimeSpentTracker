export default class Timer {

    private elapsed: number;
    private timer: any;
    private interval: number;
    private callback: any;

    constructor(interval: number = 100, callback: any = null) {

        this.interval = interval;
        this.elapsed = 0;
        this.callback = callback;
    }

    public get Elapsed() {

        return this.elapsed;
    }

    public start() {
        
        this.timer = setInterval(this.increment.bind(this), this.interval);
    }

    public pause() {

        clearInterval(this.timer);
    }

    public reset() {

        this.elapsed = 0;
    }

    private increment() {

        this.elapsed += this.interval;
        if (this.callback) this.callback();
    }
}