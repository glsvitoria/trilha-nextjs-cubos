const soletrando = (texto: string): string => {
	return texto.replace(' ', '').split('').join('-')
}

console.log(soletrando('digital house'))
