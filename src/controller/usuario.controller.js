import * as usuarioService from '../services/usuario.services.js';

export async function create(req, res) {
	try {
		const result = await usuarioService.createUsuario(req.body);
		// Retorna 201 Created, com o recurso criado e header Location
		const location = `/usuarios/${result.id}`;
		res.status(201).location(location).json({ id: result.id, nome: result.nome, email: result.email, location });
	} catch (err) {
		const status = err.status || 500;
		res.status(status).json({ error: err.message });
	}
}

export async function getById(req, res) {
	try {
		const { id } = req.params;
		const usuario = await usuarioService.getUsuarioById(id);
		res.status(200).json(usuario);
	} catch (err) {
		const status = err.status || 500;
		res.status(status).json({ error: err.message });
	}
}
