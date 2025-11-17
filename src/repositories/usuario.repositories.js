import db from '../confing/database.js';

export function createUsuario({ nome, email, senha }) {
	const sql = `INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)`;
	return new Promise((resolve, reject) => {
		db.run(sql, [nome, email, senha], function (err) {
			if (err) return reject(err);
			// `this` is the Statement; `this.lastID` tem o id inserido
			resolve(this.lastID);
		});
	});
}

export function findUsuarioByEmail(email) {
	const sql = `SELECT * FROM usuarios WHERE email = ? LIMIT 1`;
	return new Promise((resolve, reject) => {
		db.get(sql, [email], (err, row) => {
			if (err) return reject(err);
			resolve(row);
		});
	});
}

export function findUsuarioById(id) {
	const sql = `SELECT id, nome, email, created_at FROM usuarios WHERE id = ? LIMIT 1`;
	return new Promise((resolve, reject) => {
		db.get(sql, [id], (err, row) => {
			if (err) return reject(err);
			resolve(row);
		});
	});
}
