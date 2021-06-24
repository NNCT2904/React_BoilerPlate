import { Express, Request, Response } from 'express';
import cors from 'cors';
import randomInsult from '../features/insult';

const server = (app: Express ,port: number) => {
    app.use(cors());

    app.get("/api", (req: Request, res: Response): void => {
        res.send("Backend API running!");
    });

    app.get("/api/insult", (req:Request, res: Response): void => {
        const insult = randomInsult();
        res.send(insult);
    });

    app.listen(port, () => console.log(`Server is running on port ${port}`));
};

export default server;