/**
 * Displays a given number with appropriate separator (, for English)
 *
 * @param number {Number} The number to change the display of.
 * @returns {string} A string of the given number with separators.
 */
export function displayNumber(number) {
    return parseInt(number.toFixed(0)).toLocaleString();
}