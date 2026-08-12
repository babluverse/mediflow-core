import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { createServer } from 'http';
import { Server } from 'socket.io';
import authRoutes from './src/routes/auth.routes.js';
import tokenRoutes from './src/routes/token.routes.js';
import doctorRoutes from './src/routes/doctor.routes.js';

dotenv.config();

const app = express();
const httpServer = createServer(app);
const PORT = process.env.PORT || 5000;

const io = new Server(httpServer, {
  cors: {
    origin: '*',
  },
});

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    service: 'mediflow-server',
    timestamp: new Date().toISOString(),
  });
});

app.use('/api/auth', authRoutes);
app.use('/api/tokens', tokenRoutes);
app.use('/api/doctors', doctorRoutes);

io.on('connection', (socket) => {
  console.log(`Client connected: ${socket.id}`);

  socket.on('joinDepartment', (departmentId) => {
    socket.join(`department-${departmentId}`);
    console.log(`Socket ${socket.id} joined department-${departmentId}`);
  });

  socket.on('disconnect', () => {
    console.log(`Client disconnected: ${socket.id}`);
  });
});

httpServer.listen(PORT, () => {
  console.log(`MediFlow server running on port ${PORT}`);
  console.log(`Socket.io ready for real-time connections`);
});