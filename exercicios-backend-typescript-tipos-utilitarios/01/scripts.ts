type Usuario = {
	nome: string
	email: string
	cpf: string
	rg: string
	dataNascimento?: string
}

type UsuarioSemRG = Omit<Usuario, 'rg'>
type UsuarioCamposObrigatorios = Required<UsuarioSemRG>

const cadastrarUsuário = (info: Usuario): Usuario => {
	return info
}
