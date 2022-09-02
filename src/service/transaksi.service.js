const TransaksiService = ( transaksiRepository ) =>{

    const { create, list, update,getById,cost} = transaksiRepository;
    const createTransaksi = async(newTransaksi) => {
        try{
            return await create(newTransaksi)
        }catch(err){
            return err.message
        }      
    }

    const listTransaksi = async() =>{

        try{
            return await list ();
        }catch(err){
            return err.message
        }
    }

    const updateTransaksi = async (newTransaksi) => {
        try {
            const transaksi = await update(newTransaksi);

            const inTime = transaksi.tanggal_jam_masuk;
            const outTime = transaksi.tanggal_jam_keluar;
            const totalTime= outTime - inTime
            const hour = new Date(totalTime).getUTCHours();
            let price = 3000;
            if (hour>1){
                price += ((hour-1)*2000)
            }
            transaksi.harga_parkir=price;
            return transaksi;
            
        } catch (err) {
            return err.message
        }
    }

    const findTransaksiById = async (id) => {
        try {
            return await getById(id);
        } catch (err) {
            return err.message
        }
    }

    const findTransaksiByNomorPlat = async (id) => {
        try {
            return await getByPlatNomor(id);
        } catch (err) {
            return err.message
        }
    }

    const findCost = async (payload) =>{
        try{
            return await cost(payload)
        }catch(err){
            return err.message
        }
    }




    return {createTransaksi,listTransaksi,updateTransaksi,findTransaksiById,findTransaksiByNomorPlat, findCost}
}

module.exports = TransaksiService