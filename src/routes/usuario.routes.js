import { Router } from 'express';
import * as usuarioController from '../controller/usuario.controller.js';

const router = Router();

// POST /usuarios -> cria um novo usuário
router.post('/', usuarioController.create);

// GET /usuarios/:id -> obtém um usuário pelo id
router.get('/:id', usuarioController.getById);

export default router;
