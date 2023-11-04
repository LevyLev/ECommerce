import express, { Request, Response } from 'express';
import { sampleProducts } from './data';

const app = express();
const PORT = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.get('/api/products', (req: Request, res: Response) => {
  res.json(sampleProducts);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
