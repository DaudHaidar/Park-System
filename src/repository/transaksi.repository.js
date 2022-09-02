const dbQuery = require('../config/db.query')
const transaksiDTO = require('../model/dto/transaksi.dto')

const TransaksiRepository = (db) =>{
   
    const create = async (payload) => {
        try {
            const result = await db.query(
                dbQuery().INSERT_TRANSAKSI, 
                [   
                    payload.id_admin,
                    new Date(),
                    payload.nomor_plat
                ]);
            return transaksiDTO(result);
        } catch (err) {
            return err.message
        }
    }

    
    const list = async () => {

        try {
            const transaksi = [];
            const result = await db.query(dbQuery().SELECT_TRANSAKSI);
            for (let i = 0; i < result.rows.length; i++) {
                result.rows[0]
                transaksi.push(transaksiDTO(result, i));
            }
            return transaksi;
        } catch (err) {
            return err.message
        }
    };

    const getById = async (id) => {
        try {
            const result = await db.query(dbQuery().SELECT_TRANSAKSI_id, [id]);
            if (result.rowCount > 0) return transaksiDTO(result);
        } catch (err) {
            return err.message
        }
    }
    const getByPlatNomor = async (id) =>{
        try {
            const result = await db.query(dbQuery().SELECT_TRANSAKSI_no_plat, [id]);
            if (result.rowCount > 0) return transaksiDTO(result);
        } catch (err) {
            return err.message
        }
    }
    
    const update = async (payload) => {
        try {
            const no = await getByPlatNomor(payload.nomor_plat)
            const idx = await getById(payload.id);
            if (!idx ) return `Kendaraan dengan value ID ${payload.id} not found!`;
            if(!no) return `Kendaraan dengan  plat nomor ${payload.nomor_plat} tidak ditemukan, mohon cek kembali `;
            const result = await db.query(
                dbQuery().UPDATE_TRANSAKSI,[
                    new Date(),
                    payload.id,
                    payload.nomor_plat
                ]);
            return transaksiDTO(result);
        } catch (err) {
            return err.message
        }
    }
    
    const cost = async (payload) =>{
        try{
            const plat = await db.query(dbQuery().SELECT_TRANSAKSI_no_plat,[
                payload.nomor_plat
            ]) 
            const inTime = plat.rows[0].tanggal_jam_masuk;
            const outTime = plat.rows[0].tanggal_jam_keluar;
            const totalTime= outTime - inTime
            const hour = new Date(totalTime).getUTCHours();
            const minute = new Date(totalTime).getUTCMinutes()
            let price = 3000;
            // const inSplit = inTime.split(' ')
            // console.log(plat.rows[0]);
            console.log(hour);
            // console.log(minute);
            if (hour <= 1){
                return price 
            }else if (hour>1){
                return price += ((hour-1)*2000)
            }
            // console.log(price); 

        }catch(err){
            return err.message
        }
    } 
    


    return {create,list,update,getById,getByPlatNomor,cost}
}

module.exports = TransaksiRepository;