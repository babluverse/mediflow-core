import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Get all tokens - coming soon' });
});

router.post('/', (req, res) => {
  res.status(200).json({ message: 'Create token - coming soon' });
});

export default router;