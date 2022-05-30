
const AdminSchema = require('../model/AdminSchema');

class Admin {
    async SignIn(req, res) {
        const username = req.body.username.trim();
        const password = req.body.password.trim();

        await AdminSchema.findOne({ username: username }).then((user) => {
            if (user) {
                if (bcrypt.compareSync(password, user.password) === true) {
                    const accessTokenAdmin = generateAccessToken({ username });
                    const refreshTokenAdmin = jwt.sign({ username }, process.env.SECRET_KEY_REFRESH_ADMIN);
                    user.refreshTokenAdmin = refreshTokenAdmin;
                    user.save();
                    res.status(200).json({ status: 'success', data: { accessTokenAdmin, refreshTokenAdmin } });
                }
                else
                    res.status(401).json({ status: 'error', message: 'Sai tài khoản hoặc mật khẩu' })

            }
            else res.status(403).json({ status: 'error', message: 'Sai tài khoản hoặc mật khẩu' })
        })
    }

}


module.exports = new Admin