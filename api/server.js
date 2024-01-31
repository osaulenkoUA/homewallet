const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const userRouter = require('./users/user.router');
const userFinance =require('./finance/finance.router');
const category = require('./settings/categories.router')
mongoose.set('debug', true);

module.exports = class ContactServer {
  constructor() {
    this.server = null;
  }

  async start() {
    this.initServer();
    this.initMiddlewares();
    this.initRoutes();
    await this.initDatabase();
    return this.startListening();
  }

  initServer() {
    this.server = express();
  }
  initMiddlewares() {
    this.server.use(express.json());
    // this.server.use(express.urlencoded());
    this.server.use(express.urlencoded({ extended: true }));
    this.server.use(cors());
  }
  initRoutes() {
    this.server.use('/users', userRouter);
    this.server.use('/finances',userFinance );
    this.server.use('/category',category );

  }

  async initDatabase() {
    await mongoose.connect(process.env.MONGODB_URL);
  }

  startListening() {
    try {
      return this.server.listen(process.env.PORT, () => {
        console.log('Database connection successful', process.env.PORT??3004);
      });
    } catch (err) {
      console.log('error', err);
      process.exit(1);
    }
  }
};
