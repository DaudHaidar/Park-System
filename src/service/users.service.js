const usersService = (usersRepository) => {
    const { create, getUserByUsernamePassword } = usersRepository;
    const registerNewUsers = async (newUser) => {
        try {
            return await create(newUser);
        } catch (err) {
            return err.message
        }
    }

    const findUserByUsernamePassword = async (username, password) => {
        try {
            return await getUserByUsernamePassword(username, password);
        } catch (err) {
            return err.message
        }
    }

    return {
        registerNewUsers, findUserByUsernamePassword
    }
}
module.exports = usersService;
