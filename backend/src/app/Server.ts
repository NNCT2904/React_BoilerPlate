import { Express, Request, Response } from 'express';
import randomInsult from '../features/insult';

const server = (app: Express ,port: number) => {
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