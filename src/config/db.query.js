const DbQuery = () => {

    const INSERT_USERS = ` INSERT INTO admin (nama,username,Password) values ($1,$2,$3) RETURNING *`
    const SELECT_USERS = ` SELECT nama,username,password FROM admin WHERE username = $1`

    const SELECT_TRANSAKSI = `SELECT * FROM transaksi`
    const INSERT_TRANSAKSI = `INSERT INTO transaksi (id_admin,tanggal_jam_masuk,nomor_plat) values ($1,$2,$3) RETURNING *`
    const UPDATE_TRANSAKSI = ` UPDATE transaksi set tanggal_jam_keluar=$1 where id=$2 AND nomor_plat=$3  RETURNING * `
    const SELECT_TRANSAKSI_id=`SELECT * from transaksi where id=$1`;
    const SELECT_TRANSAKSI_no_plat=`SELECT * from transaksi where nomor_plat=$1`;



  
    return {
       UPDATE_TRANSAKSI,SELECT_TRANSAKSI,INSERT_TRANSAKSI,SELECT_TRANSAKSI_id,SELECT_TRANSAKSI_no_plat,
       INSERT_USERS,SELECT_USERS
    }
}

module.exports = DbQuery
