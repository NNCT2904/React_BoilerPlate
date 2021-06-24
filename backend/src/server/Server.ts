import express from 'express';
import cors from 'cors';
import appRouter from '../controllers/appRouter';

const server = express();
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// Routes
server.use('/api', appRouter);

export default server;