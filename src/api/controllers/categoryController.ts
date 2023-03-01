import {Request, Response, NextFunction} from 'express';
import {getAllCategories} from '../models/categoryModel';

const categoryListGet = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const categories = await getAllCategories();
    res.json(categories);
  } catch (error) {
    next(error);
  }
};

export {categoryListGet};
