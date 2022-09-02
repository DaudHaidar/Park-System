const transaksi = require('../transaksi')

module.exports = transaksiDTO = (index,result=0)=>{
    return transaksi(
        index.rows[result].id,
        index.rows[result].id_admin,
        index.rows[result].tanggal_jam_masuk,
        index.rows[result].tanggal_jam_keluar,
        index.rows[result].nomor_plat
    )
}