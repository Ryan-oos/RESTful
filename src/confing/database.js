import sqlite3 from 'sqlite3';
import { join } from 'path';

const sqlite = sqlite3.verbose();
const dbFile = join(process.cwd(), 'database.sqlite');

const db = new sqlite.Database(dbFile, (err) => {
	if (err) {
		console.error('Erro ao abrir o banco de dados SQLite:', err.message);
		process.exit(1);
	}
});

// Cria a tabela `usuarios` se não existir.
// ATENÇÃO: se a sua atividade pedir um esquema diferente, informe-me para ajustar.
const createTableSQL = `
CREATE TABLE IF NOT EXISTS usuarios (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	nome TEXT NOT NULL,
	email TEXT NOT NULL UNIQUE,
	senha TEXT NOT NULL,
	created_at TEXT DEFAULT (datetime('now','localtime'))
);
`;

db.serialize(() => {
	db.run(createTableSQL, (err) => {
		if (err) {
			console.error('Erro ao criar tabela usuarios:', err.message);
		}
	});
});

export default db;

