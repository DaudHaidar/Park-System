const AuthenticationController = () => {
    const loginAccount = async (req, res) => {
        try{
        console.log('auth');
        const payload = req.body;
        console.log('AuthenticationController.loginAccount.headers:', req.headers)
        const token = await req.service.login(payload);
        console.log('AuthenticationController.token:', token)
        res.status(201).json({ token: token });
    }catch(err){
        console.log(err.message);
    }
}
    return {
        loginAccount
    }

}
module.exports = AuthenticationController;
