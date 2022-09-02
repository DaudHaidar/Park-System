
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const { s, m } = require('time-convert');

const AuthenticationService = (usersService) => {
  console.log('AuthenticationService')

  const { findUserByUsernamePassword } = usersService;
  console.log('findUserByUsernamePassword', findUserByUsernamePassword)
  dotenv.config();
  const login = async (payload) => {
    try{
      const user = await findUserByUsernamePassword(
        payload.username,
        payload.password
      );
      console.log('user', user);
      if (!user) return `Invalid account`;
  
      // Token
      const { TOKEN_SECRET, TOKEN_EXPIRATION, TOKEN_ALGORITHM } = process.env;
      const payloadUser = { id: user.id, username: user.username };
      const algorithm = TOKEN_ALGORITHM;
      const key = TOKEN_SECRET;
      const expiresIn = s.from(m)(TOKEN_EXPIRATION);
      // urutan :
      // 1. payload yang ingin dibentuk(public payload)
      // 2. token secret utuk verify signature
      // 3. {expiresIn} untuk masa hidup token (ms,s,m,h,d)
      // 4. callback
      const token = jwt.sign(
        payloadUser,
        key,
        { expiresIn: expiresIn, algorithm: algorithm },
        null
      );
      return token;
    }
    catch(err){
      console.log(err.message)
    }
  }
  ;
  const logout = () => {};
  const forgotPassword = () => {};

  return { login, logout, forgotPassword };
};
module.exports = AuthenticationService;