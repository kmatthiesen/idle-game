export function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

const second = 1000;

export const TIME = {
    SECOND: second,
    MINUTE: second * 60,
};