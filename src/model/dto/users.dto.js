const users = require('../users')

module.exports = userDTO = (index,result=0)=>{
    return users(
        index.rows[result].nama,
        index.rows[result].username,
        index.rows[result].password
    )
}