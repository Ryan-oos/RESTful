import * as usuarioRepo from '../repositories/usuario.repositories.js';

export async function createUsuario(data) {
	const { nome, email, senha } = data;

	if (!nome || !email || !senha) {
		const err = new Error('Campos obrigatórios ausentes: nome, email, senha');
		err.status = 400;
		throw err;
	}

	// Verifica se já existe usuário com mesmo email
	const existing = await usuarioRepo.findUsuarioByEmail(email);
	if (existing) {
		const err = new Error('Email já cadastrado');
		err.status = 409;
		throw err;
	}

	// Aqui poderia adicionar hashing de senha (ex: bcrypt). Mantive simples para a atividade.
	const id = await usuarioRepo.createUsuario({ nome, email, senha });
	return { id, nome, email };
}

export async function getUsuarioById(id) {
	if (!id) {
		const err = new Error('ID inválido');
		err.status = 400;
		throw err;
	}
	const usuario = await usuarioRepo.findUsuarioById(id);
	if (!usuario) {
		const err = new Error('Usuário não encontrado');
		err.status = 404;
		throw err;
	}
	return usuario;
}
