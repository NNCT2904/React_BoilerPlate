import type { Request, Response } from "express";
import randomInsult from "../model/insult";

const sendInsult = (req: Request<any>, res: Response<any>) => {
  const insult = randomInsult();
  res.send(insult);
};

export default sendInsult;