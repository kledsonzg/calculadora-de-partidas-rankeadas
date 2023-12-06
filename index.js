const nomeDosNiveis = ['Ferro', 'Bronze', 'Prata', 'Ouro', 'Diamante', 'Lendário', 'Imortal'];
const valoresDosNiveis = [10, 20, 50, 80, 90, 100];

let nivel = '';
let vitorias = 321;
let derrotas = 123;
let saldoVitorias = 0;

function obterSaldoDeRankeadas(vitoriasDoHeroi, derrotasDoHeroi)
{
    let saldo = vitorias - derrotas;

    return saldo;
}

function obterNivel()
{
    if(saldoVitorias > valoresDosNiveis[valoresDosNiveis.length - 1] )
        return nomeDosNiveis[nomeDosNiveis.length - 1];
    else for(let i = 0; i < valoresDosNiveis.length; i++)
    {
        if(saldoVitorias <= valoresDosNiveis[i] )
            return nomeDosNiveis[i];
    }
}

function exibirResumoDoHeroi()
{
    console.log(`O Herói tem um saldo de **${saldoVitorias}** vitórias e está no nível **${nivel}**`);
}

saldoVitorias = obterSaldoDeRankeadas(vitorias, derrotas);
nivel = obterNivel();
exibirResumoDoHeroi();