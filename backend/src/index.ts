import server from './app/Server';
import express from 'express';

const app = express();

const PORT = 8080;

server(app, PORT);
