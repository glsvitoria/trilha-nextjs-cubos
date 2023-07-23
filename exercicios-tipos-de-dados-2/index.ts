const fs = require('fs')

const lerArquivo = (): unknown => {
	return JSON.parse(fs.readFileSync('./bd.json'))
}

const escreverArquivo = (bd: any): void => {
	fs.writeFileSync('./bd.json', JSON.stringify(bd))
}

type Endereco = {
	cep: string
	rua: string
	complemento?: string
	bairro: string
	cidade: string
}

type User = {
	name: string
	email: string
	cpf: string
	profissao?: string
	endereco: Endereco | null
}

const cadastrarUsuario = (dados: User): User => {
	const bd = lerArquivo() as User[]

	bd.push(dados)

	escreverArquivo(bd)

	return dados
}

const listarUsuarios = (): User[] => {
	return lerArquivo() as User[]
}

const detalharUsuario = (cpf: string): User => {
	const bd = lerArquivo() as User[]
	const usuario = bd.find((user) => user.cpf === cpf)

	if (!usuario) {
		throw new Error('Usuário não encontrado')
	}

	return usuario
}

const atualizarUsuario = (cpf: string, dados: User): User => {
	const bd = lerArquivo() as User[]
	const usuario = bd.find((user) => user.cpf === cpf)

	if (!usuario) {
		throw new Error('Usuário não encontrado')
	}

	Object.assign(usuario, dados)

	escreverArquivo(bd)

	return dados
}

const deletarUsuario = (cpf: string): User => {
	const bd = lerArquivo() as User[]
	const usuario = bd.find((user) => user.cpf === cpf)

	if (!usuario) {
		throw new Error('Usuário não encontrado')
	}

	const bdFiltered = bd.filter((user) => user.cpf !== cpf)

	escreverArquivo(bd)

	return usuario
}

const filtrarPorProfissao = (profissao?: string): User[] => {
	const bd = lerArquivo() as User[]
	const bdFiltered = bd.filter((user) => {
		if (profissao) {
			return user.profissao === profissao
		}

		return user
	})

	return bdFiltered
}

const bd = lerArquivo()
console.log(bd)
