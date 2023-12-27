import express from 'express';
import {addUser, getAll} from '../controller/user.controller';
const router = express.Router();


router.get('/', getAll);
//router.get('/posts/:id', controller.getPost);
//router.put('/posts/:id', controller.updatePost);
//router.delete('/posts/:id', controller.deletePost);
router.post('/', addUser);

export default router;