/**
 * @param {string} text
 * @return {string}
 */
function invertOrder(text) {
    /** @type {string} */
    let reverse = "";

    for (let c in text) {
        reverse = text[c] + reverse;
    }

    return reverse;
}

/** @type {string} */
const text = "): .ataidemi oãçatartnoc arap levínopsid uotsE";

console.log(invertOrder(text));
