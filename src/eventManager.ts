export default class EventManager {

    public static onBlur(callback: () => void) {

        window.addEventListener('blur', callback);
    }

    public static onFocus(callback: () => void) {

        window.addEventListener('focus', callback)
    }

    public static onMouseMove(callback: () => void) {

        window.addEventListener('mousemove', callback);
    }

    public static onKeyUp(callback: () => void) {

        window.addEventListener('keyup', callback);
    }

    public static onTouchStart(callback: () => void) {

        window.addEventListener('touchstart', callback);
    }

    public static onScroll(callback: () => void) {

        window.addEventListener('scroll', callback);
    }

    public static onVisibilityChange(callback: (hidden: boolean) => void) {

        document.addEventListener('visibilitychange', () => {

            if (typeof document.hidden !== 'undefined') {

                callback(document.hidden);
            }
        });
    }
}