import Timer from './timer';
import EventManager from './eventManager';

class TimeSpentTimer {

    private idleTimer: Timer;
    private timeTimer: Timer;
    private idleThreshold: number;

    constructor(interval: number = 100) {

        this.idleTimer = new Timer(1000, this.userIdle.bind(this));
        this.timeTimer = new Timer(interval);
        this.idleThreshold = 5000;
    }

    public get TimeSpent(): number {

        return this.timeTimer.Elapsed;
    }

    public init(): void {

        this.bindEvents();
        this.start(this.timeTimer);
        this.start(this.idleTimer);
    }

    private bindEvents() {

        //start events
        EventManager.onFocus(this.userReturned.bind(this));
        //reset events
        //EventManager.onMouseMove(this.userActive.bind(this));
        //EventManager.onKeyUp(this.userActive.bind(this));
        //EventManager.onTouchStart(this.userActive.bind(this));
        //EventManager.onScroll(this.userActive.bind(this));
        //pause events
        EventManager.onBlur(this.userLeft.bind(this));
        // EventManager.onVisibilityChange( isHidden => {

        //     isHidden ? this.userLeft() : this.userReturned();
        // });
    }

    private userLeft(): void {

        console.log('user left', this.TimeSpent);

        this.pause(this.timeTimer);
        this.pause(this.idleTimer);
        this.reset(this.idleTimer);
    }

    private userReturned(): void {

        console.log('user returned', this.TimeSpent);

        this.start(this.timeTimer);
        this.start(this.idleTimer);
    }

    private userActive(): void {

        console.log('user active');

        this.reset(this.idleTimer);
        this.start(this.timeTimer);
    }

    private userIdle(): void {

        if (this.idleTimer.Elapsed >= this.idleThreshold) {

            console.log('user idle', this.TimeSpent);

            this.pause(this.timeTimer);
            this.pause(this.idleTimer);
            this.reset(this.idleTimer);
        }
    }

    public start(timer: Timer): void {

        timer.start();
    }

    public pause(timer: Timer): void {

        timer.pause();
    }

    public reset(timer: Timer): void {

        timer.reset();
    }

}

const timeSpentTimer = new TimeSpentTimer();

timeSpentTimer.init();