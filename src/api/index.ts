import express, {Request, Response} from 'express';

import categoryRoute from './routes/categoryRoute';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'animals api v1',
  });
});

router.use('/category', categoryRoute);

export default router;
