const livros = require('./database')

// pegar o input
// Se for sim, mostra as categorias disponíveis e pergunta qual categoria ela escolhe
// Se for não, mostra todos os livros em ordem crescente pela qtidade de páginas

const readline = require('readline-sync')
console.log(livros[2].categoria)
const entradaInicial = readline.question('Deseja buscar um livro (S/N)? ')

if (entradaInicial.toLocaleUpperCase() === 'S') {
    console.log('Essas são as categorias disponíveis: ')
    console.log('Produtividade', '/História brasileira', '/Américas','/Estilo de vida','/Tecnologia')

    const entradaCategoria = readline.question('Qual categoria voce escolhe: ')

    const retorno = livros.filter(livro => livro.categoria === entradaCategoria)

    console.table(retorno)
} else {
    const livrosOrdenados = livros.sort((a,b) => a.paginas - b.paginas)
    console.log('Essas são todos os livros disponíveis: ')
    console.table(livrosOrdenados)
}