import server from "./server/Server";

const PORT = 8080;

const app = server.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});

export default app;
