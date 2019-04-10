export const TOGGLE_LOCK = "TOGGLE_LOCK";
export const TOGGLE_CLOSE = TOGGLE_CLOSE;

export const toggleLock = () => {
    return {
        type: TOGGLE_LOCK
    }
}

export const toggleClose = () => {
    return {
        type: TOGGLE_CLOSE
    }
}