interface Produto {
	produto: string
	lote: number
	ano: number
	qtd: number
}

const gerarEtiquetas = (productInfo: Produto): string[] => {
	const etiquetas: string[] = []

	for (let i = 0; i < productInfo.qtd; i++) {
		etiquetas.push(
			`${productInfo.lote}-${productInfo.ano}-${i
				.toString()
				.padStart(3, '0')}`
		)
	}

	return etiquetas
}

console.log(
	gerarEtiquetas({
		produto: 'CPU Dual Core 3.0GHZ',
		lote: 321,
		ano: 2022,
		qtd: 5,
	})
)
