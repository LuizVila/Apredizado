const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
const template = `
    Olá 
    ${nome} !`
console.log(concatenacao, template)

//expressoes...
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()  //Função Arrow, Uppercase pra colocar a letra como maiúscula
console.log(`Ei... ${up('cuidado ')}!`)  //Expressão dentro de template string começa com $(Dolar) seguido de Chaves ({})
