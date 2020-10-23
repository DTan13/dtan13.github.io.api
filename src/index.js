const express = require('express');
const cors = require('cors');
const githubRouter = require('./routers/githubRouter');

const port = process.env.PORT || 5000;

const server = express();

server.use(cors());
server.use(express.json());

server.use(githubRouter);

server.get('/', (req, res) => {
    res.send("Server is working properly");
});

server.listen(port, () => {
    console.log(`Server is started on ${port}`);
});