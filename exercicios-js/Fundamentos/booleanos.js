let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) //(!) negativa (!!) Não negativa

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!" ")
console.log(!! [])  //Array
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar...')
console.log(!!('' || null || 0 || ' '))

let nome = '' //Se colocar um nome, vai imprimir um nome no log final

console.log(nome || 'desconhecido')