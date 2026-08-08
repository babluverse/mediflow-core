import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    service: 'mediflow-server',
    timestamp: new Date().toISOString(),
  });
});

app.listen(PORT, () => {
  console.log(`MediFlow server running on port ${PORT}`);
});