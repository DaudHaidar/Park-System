const DbQuery = require('../config/db.query');
const UsersDto = require('../model/dto/users.dto');
const { passwordUtil, passwordCompare} = require('../utils/password.util');

const UsersRepository = (db) => {
    const create = async (payload) => {
        try {
            const password = await passwordUtil(payload.password);
            const result = await db.query(
                DbQuery().INSERT_USERS, [
                    payload.nama,
                    payload.username,
                    password
                ]);
            return UsersDto(result);
        } catch (err) {

            return err.message
        }
    }


    const getByUsername = async (userName) => {
        try {
            const result = await db.query(DbQuery().SELECT_USERS, [userName]);
            return UsersDto(result);
        } catch (err) {
            return err.message
        }
    };

    const getUserByUsernamePassword = async (username, password) => {
        try {
            const result = await db.query(DbQuery().SELECT_USERS, [username]);
            console.log('UserRepository.getUserByUsernamePassword.result:', result.rows)
            if (result.rowCount === 0) {
                return null;
            }
            const validPassword = await passwordCompare(password, result.rows[0].password);
            console.log('UserRepository.getUserByUsernamePassword.validPassword:', validPassword)
            if (!validPassword) {
                return null;
            }
            return await getByUsername(result.rows[0].userName)
        } catch (err) {
            return err.message
        }
    }

    return {
        create, getByUsername, getUserByUsernamePassword
    }
}
module.exports = UsersRepository
