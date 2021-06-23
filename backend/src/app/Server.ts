import { Express, Request, Response } from 'express';

const server = (app: Express ,port: number) => {
    app.get("/api", (req: Request, res: Response): void => {
        res.send("Backend API running!");
    });

    app.listen(port, () => console.log(`Server is running on port ${port}`));
};

export default server;