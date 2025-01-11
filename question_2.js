/** @param {number} num */
function IsFibonacci(num) {
    if (num < 0)
        throw new Error("O número informado não pode ser menor que zero.");

    /** @type {number} */
    let seq1 = 0;
    /** @type {number} */
    let seq2 = 1;

    while (seq1 <= num) {
        /** @type {import('node:process').Proccess} */
        process.stdout.write(`${seq2} `);

        if (num === seq1)
            return true;

        [seq2, seq1] = [seq2 + seq1, seq2];
    }

    return false;
}

/** @type {number} */
const num = 10;

console.log(IsFibonacci(num)
    ? `\nO número ${num} pertence à sequência.`
    : `\nO número ${num} não pertence à sequência.`
);
