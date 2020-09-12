import models from '../database/models'
import passwordManager from '../helpers/passwordManager'
import { generateToken } from '../helpers/generateToken'
import localStorage from 'localStorage';

class UserController {
    static async signUp(req, res) {
        try {
            const { first_name, last_name, email, password } = req.body;
            const hashedPassword = await passwordManager.hashingPassword(password, 10)
            const existingUser = await models.User.findOne({ where: { email } });

            if (existingUser !== null) {
                return res.status(409).json({ message: 'Sorry! Email already taken.' });
            } else {

                const newUser = models.User.create({ first_name, last_name, email, password: hashedPassword });
                const token = generateToken({
                    email: newUser.id, email
                });

                localStorage.setItem('token', token);
                return res.status(200).json({message: 'You\'re successfully signed up.'})
            }

        } catch (err) {
            return res.status(500).json({ message: err.message })
        }
    }
}

export default UserController;