const githubRouter = require('express').Router();
const axios = require('axios');
const data = require('../config/siteData.json');

githubRouter.get('/github/data', async (req, res) => {
    axios.default.get(`https://api.github.com/users/${data.username}`).then((resp) => {
        res.send(resp.data);
    });
});

module.exports = githubRouter;