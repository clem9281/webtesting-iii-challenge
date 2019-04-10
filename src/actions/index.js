export const TOGGLE_LOCK = "TOGGLE_LOCK";
export const TOGGLE_CLOSE = "TOGGLE_CLOSE";

export const toggleLocked = () => {
    return {
        type: TOGGLE_LOCK
    }
}

export const toggleClosed = () => {
    return {
        type: TOGGLE_CLOSE
    }
}