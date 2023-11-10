import express, { Request, Response } from 'express';
import { sampleProducts } from './data';
import cors from 'cors';

const app = express();
app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:5173'],
  })
);
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
