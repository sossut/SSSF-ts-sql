import express from 'express';
import {categoryListGet} from '../controllers/categoryController';

const router = express.Router();

router.route('/').get(categoryListGet);

export default router;
