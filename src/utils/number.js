/**
 * Displays a given number with appropriate separator (, for English)
 *
 * @param number {Number} The number to change the display of.
 * @returns {string} A string of the given number with separators.
 */
export function displayNumber(number) {
    let num = parseFloat(number);
    return parseInt(num.toFixed(0)).toLocaleString();
}