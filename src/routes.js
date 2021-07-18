const express = require('express');
const routes = express.Router(); 

const views = __dirname + '/views/'

routes.get('/', (req, res) => res.render(views + "index.ejs"))
routes.get('/job', (req, res) => res.render(views + "job.ejs"))
routes.get('/job/edit', (req, res) => res.render(views + "job-edit.ejs"))
routes.get('/profile', (req, res) => res.render(views + "profile.ejs"))

module.exports = routes;