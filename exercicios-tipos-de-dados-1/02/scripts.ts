interface Usuario02 {
	nome: string
	idade: number
	status: boolean
}

const usuarios02: Usuario02[] = [
	{
		nome: 'Guido',
		idade: 32,
		status: true,
	},
	{
		nome: 'Dani',
		idade: 30,
		status: true,
	},
	{
		nome: 'João',
		idade: 40,
		status: false,
	},
	{
		nome: 'Guilherme',
		idade: 29,
		status: true,
	},
	{
		nome: 'Ana',
		idade: 18,
		status: false,
	},
	{
		nome: 'José',
		idade: 28,
		status: false,
	},
]

const filtrarUsuarios = (
	usuarios: Usuario02[],
	usuarioToFind: string
): Usuario02[] => {
	const resultado = usuarios.filter((usuario) => {
		return usuario.nome
			.toLocaleLowerCase()
			.includes(usuarioToFind.toLocaleLowerCase())
	})

	return resultado
}

console.log(filtrarUsuarios(usuarios02, 'gui'))
