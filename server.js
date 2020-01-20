const express = require('express');

const PostRouter = require('./posts/post-router.js');

const server = express();

server.use(express.json());

server.use('/api/posts', PostRouter);

server.get('/', (req, res) => {
  res.send('<h3>DB Helpers with knex</h3>');
});

server.use((err, req, res, next) => {
  console.log(err)
  res.status(500).json({message: "Something went wrong"})
})

module.exports = server;