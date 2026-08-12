import express from 'express';

const router = express.Router();

router.post('/register', (req, res) => {
  res.status(200).json({ message: 'Register endpoint - coming soon' });
});

router.post('/login', (req, res) => {
  res.status(200).json({ message: 'Login endpoint - coming soon' });
});

export default router;