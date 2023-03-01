import promisePool from '../../database/db';

const getAllCategories = async () => {
  const [rows] = await promisePool.execute('SELECT * FROM categories');
  if (!rows) {
    throw new Error('No categories found');
  }
  return rows;
};

export {getAllCategories};
