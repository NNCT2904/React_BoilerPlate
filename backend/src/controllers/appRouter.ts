import express from 'express';
import type { Request, Response } from 'express';
import sendInsult from './insultController';

const appRouter = express.Router();

/**
 * GET home page route
 *
 * @param {Request<any>}  req Express request
 * @param {Response<any>} res Express response
 */
const serverCheck = (req: Request<any>, res: Response<any>) => {
  res.send('Server running!');
}

appRouter.get('/check', serverCheck);
appRouter.get('/insult', sendInsult);

export default appRouter;