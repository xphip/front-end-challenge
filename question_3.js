/**
 * @typedef {Object} Data
 * @property {number} dia
 * @property {number} valor
 */

/**
 * @typedef {Data[]} ArrayData
 */

/** @type {import('node:fs').fs} */
const fs = require('node:fs');

/**
 * @param {string} filename
 * @return {ArrayData}
 * */
function proccessFile(filename) {
    const data = fs.readFileSync(filename, 'utf8');
    return JSON.parse(data);
}

/**
 * @param {string} filename
 * */
function main(filename) {
    /** @type {ArrayData} */
    const data = proccessFile(filename)

    /** @type {ArrayData} */
    const diasValidos = data.filter(({dia}) => dia > 0);

    /** @type {number} */
    let min = 0
    /** @type {number} */
    let max = 0;

    diasValidos.forEach(({valor}) => {
        if (valor > max) max = valor;
        if (valor < min) min = valor;
    })

    /** @type {number} */
    let faturamento = 0;

    diasValidos.forEach(({valor}) => {
        faturamento += valor
    })

    /** @type {number} */
    const mediaMensal = faturamento / diasValidos.length;

    /** @type {number} */
    const diasAcimaDaMedia = diasValidos.filter(({valor}) => valor > mediaMensal).length;

    /** @type {Intl.NumberFormat} */
    const ToBRL = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });

    console.log("Menor valor faturado: \t\t\t", ToBRL.format(min));
    console.log("Maior valor de faturamento: \t\t", ToBRL.format(max));
    console.log("Dias com faturamento acima da média: \t", diasAcimaDaMedia);
}


main("./resources/dados.json");
