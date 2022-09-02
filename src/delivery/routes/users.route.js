const express = require('express');
const router = express.Router();

const UserRoute = (usersController) => {
    const { createUsers} = usersController();
    console.log(createUsers);
    router.get('/', createUsers);
    return router;
}
module.exports = UserRoute;
