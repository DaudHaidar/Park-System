const express = require('express');
const router = express.Router();
const db = require('../../config/db');


const usersRouter = require('./users.route')
const usersController = require('../controller/users.controller')
const usersService = require('../../service/users.service')
const UsersRepository = require('../../repository/users.repository')

const authRouter = require('./auth.route');
const AuthenticationController = require('../controller/authentication.controller');
const AuthenticationService = require('../../service/authentication.service');

const TransaksiRepository = require('../../repository/transaksi.repository');
const transaksiService = require('../../service/transaksi.service')
const transaksiRouter = require('../../delivery/routes/transaksi.route')
const transaksiController = require('../controller/transaksi.controller')




const UsersService = (req,res,next)=>{
    req.service = usersService(UsersRepository(db))
    next()
}


const TransaksiService = (req,res,next)=>{
    req.service = transaksiService(TransaksiRepository(db))
    next()
}

const authService = (req, res, next) => {
    console.log('authService In')
    req.service = AuthenticationService(usersService(UsersRepository(db)));
    console.log('authService OUt')
    next()
}


router.use('/regist', UsersService, usersRouter(usersController))
router.use('/transaksi', TransaksiService,transaksiRouter(transaksiController));
router.use('/auth', authService, authRouter(AuthenticationController));

module.exports = router;

