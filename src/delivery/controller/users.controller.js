const Response = require ("../../utils/reponse");
const UsersController = () => {
    const createUsers = async (req, res) => {
        try {
            const payload = req.body;
            const newUser = await req.service.registerNewUsers(payload);
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', newUser));
        } catch (err) {
            res.status(400).json(Response().errorMessage('XX', err.message));
        }
    }



    return {
        createUsers
    }
}
module.exports = UsersController
