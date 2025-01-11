/** @type {Record<string, number>} */
const regiaoFaturamento = {
    'SP': 67836.43,
    'RJ': 36678.66,
    'MG': 29229.88,
    'ES': 27165.48,
    'Outros': 19849.53,
}

/** @type {number} */
let faturado = 0;

for (let valor in regiaoFaturamento) {
    faturado += regiaoFaturamento[valor];
}

/** @type {Record<string, string>} */
let percentual = {};

for (let valor in regiaoFaturamento) {
    const percent = (regiaoFaturamento[valor] / faturado) * 100;
    percentual[valor] = `${percent.toFixed(2)}%`;
}

console.table(percentual)
