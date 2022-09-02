const Response = require ('../../utils/reponse')

const TransaksiController = ( TransaksiService) =>{

    const registerTransaksi = async (req,res) => {
        try{
            const payload = req.body
            const newTransaksi = await req.service.createTransaksi(payload)
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', newTransaksi))
        }catch(err){
            res.json(Response().errorMessage('XX', err.message));
        }
    }

    const findTransaksi = async (req,res)=>{

        try{
            const transaksi = await req.service.listTransaksi()
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', transaksi))
        }catch(err){
            res.json(Response().errorMessage('XX', err.message))
        }
    }

    const updateTransaksi = async (req, res) => {
        const payload = req.body;
        const newTransaksi = await req.service.updateTransaksi(payload);
        res.json(Response().successMessage(res.statusCode, 'SUCCESS', newTransaksi));
    }

    const getTransaksi = async (req, res) => {
        const id = req.params.id
        const transaksi = await req.service.findTransaksiById(+id);
        res.json(Response().successMessage(res.statusCode, 'SUCCESS', transaksi));
    }

    const getTransaksiNoPlat = async (req, res) => {
        const id = req.params.id
        const transaksi = await req.service.findTransaksiByNomorPlat(+id);
        res.json(Response().successMessage(res.statusCode, 'SUCCESS', transaksi));
    }

    const getTotalCost = async (req,res) =>{
        const payload = req.body
        const transaksi = await req.service.findCost(payload);
        res.json(Response().successMessage(res.statusCode, 'SUCCESS', transaksi));
    }
    
    return {registerTransaksi,findTransaksi,updateTransaksi,getTransaksi,getTransaksiNoPlat,getTotalCost}
    
}

module.exports = TransaksiController;