const express = require('express');
const mongoose = require('mongoose');
const contactRouter = require('./contacts/contact.router');

require('dotenv').config();
// 1. create server
// 2. init global middlewares
// 3. init routes
// 4. init db
// 5. start listening

module.exports = class ContactServer {
  constructor() {
    this.server = null;
  }

  async start() {
    this.initServer();
    this.initMiddlewares();
    this.initRoutes();
    await this.initDatabase();
    this.startListening();
  }

  initServer() {
    this.server = express();
  }

  initMiddlewares() {
    this.server.use(express.json());
  }

  initRoutes() {
    this.server.use('/contacts', contactRouter);
  }

  async initDatabase() {
    await mongoose.connect(process.env.MONGODB_URL);
  }

  startListening() {
    const PORT = process.env.PORT;

    this.server.listen(PORT, () => {
      console.log('Server started listening on port:', PORT);
    });
  }
};
