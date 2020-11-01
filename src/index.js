const express = require('express');
const githubRouter = require('./routers/githubRouter');
const fireBaseRouter = require('./routers/firebase');

const port = process.env.PORT || 5000;

const server = express();

server.use(express.json());

server.use(githubRouter);
server.use(fireBaseRouter);

server.get('/', (req, res) => {
    res.send("Server is working properly");
});

server.listen(port, () => {
    console.log(`Server is started on ${port}`);
});