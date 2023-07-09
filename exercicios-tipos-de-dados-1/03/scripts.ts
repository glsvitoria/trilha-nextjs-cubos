const montarTabuadas = (numero: number[]): string => {
	let tabuada: string = ''
  
	numero.forEach((numero) => {
		for (let i = 0; i <= 10; i++) {
			tabuada += `${numero} x ${i} = ${numero * i}\n`
		}
		tabuada += '\n'
		tabuada += '--------------------\n'
		tabuada += '\n'
	})

	return tabuada
}

console.log(montarTabuadas([1, 4, 8]))
