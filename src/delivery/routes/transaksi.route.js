const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth.middleware')

const TransaksiRoute = (transaksiController) => {

    const {registerTransaksi,findTransaksi,updateTransaksi,getTransaksi,getTotalCost} = transaksiController();
    router.post('/', authMiddleware,registerTransaksi);
    router.put('/keluar', authMiddleware,updateTransaksi);
    router.get('/',authMiddleware,findTransaksi);
    router.get('/:id',authMiddleware, getTransaksi);
    return router;
}
module.exports = TransaksiRoute;