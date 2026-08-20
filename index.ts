// José Vinicius Maachado Martines
// Ana Julia
// Link Canva: https://canva.link/0t8bcv2dle5y8ry

// Counting sort - baseado na implementação clássica em Python
function countingSort(lista: number[]): number[] {
    if (lista.length === 0) return lista;

    const max = Math.max(...lista);
    const contagem = new Array(max + 1).fill(0);

    for (const n of lista) contagem[n]++;

    // soma acumulada -> dá a posição final de cada valor
    for (let i = 1; i <= max; i++) {
    contagem[i] += contagem[i - 1];
    }

    const resultado = new Array(lista.length);

    // de trás pra frente mantém elementos iguais na ordem original
    for (let i = lista.length - 1; i >= 0; i--) {
        const n = lista[i];
        resultado[contagem[n] - 1] = n;
        contagem[n]--;
    }

    return resultado;
}

const numeros = [3, 1, 2];
console.log(countingSort(numeros).join(' '));

const numeros2 = [5, 99, 2, 100, 2];
console.log(countingSort(numeros2).join(' '));