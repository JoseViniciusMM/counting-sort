// José Vinícius
// Ana Julia
// Link Canva: https://canva.link/0t8bcv2dle5y8ry

// Counting sort - baseado na implementação clássica em Python
// https://www.programiz.com/dsa/counting-sort

function countingSort(lista: number[]): number[] {
    if (lista.length === 0) return lista;

    console.log('--- Iniciando Counting Sort ---');
    console.log('Lista original:', lista.join(' '));

    const max = Math.max(...lista);
    console.log('Maior valor encontrado:', max);

    const contagem = new Array(max + 1).fill(0);

    for (const n of lista) {
        contagem[n]++;
        console.log(`Contando número ${n} -> contagem[${n}] = ${contagem[n]}`);
    }
    console.log('Array de contagem após contar ocorrências:', contagem.join(' '));

    // soma acumulada -> dá a posição final de cada valor
    for (let i = 1; i <= max; i++) {
        contagem[i] += contagem[i - 1];
    }
    console.log('Array de contagem após soma acumulada:', contagem.join(' '));

    const resultado = new Array(lista.length);

    // de trás pra frente mantém elementos iguais na ordem original
    console.log('--- Posicionando elementos no resultado ---');
    for (let i = lista.length - 1; i >= 0; i--) {
        const n = lista[i];
        const posicao = contagem[n] - 1;
        resultado[posicao] = n;
        contagem[n]--;
        console.log(`Número ${n} (lista[${i}]) -> posição ${posicao} no resultado`);
    }

    console.log('Resultado final:', resultado.join(' '));
    console.log('--- Fim do Counting Sort ---\n');

    return resultado;
}

const numeros = [3, 1, 2];
console.log(countingSort(numeros).join(' '));

const numeros2 = [5, 99, 2, 100, 2];
console.log(countingSort(numeros2).join(' '));