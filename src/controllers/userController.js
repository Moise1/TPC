import models from '../database/models'
import passwordManager from '../helpers/passwordManager'
import { generateToken, decodeToken} from '../helpers/manageToken'
import localStorage from 'localStorage';

class UserController {

    static async signUp(req, res) {
        try {
            const { first_name, last_name, email, password } = req.body;
            const hashedPassword = await passwordManager.encryptor(password, 10)
            const existingUser = await models.User.findOne({ where: { email } });
            const role = 'regular_staff';
            if (existingUser !== null) {
                return res.status(409).json({ message: 'Sorry! Email already taken.' });
            } else {
                const newUser = models.User.create({ first_name, last_name, email, password: hashedPassword, role });
                const token = generateToken({
                    email: newUser.id, first_name, last_name, email, role
                });

                localStorage.setItem('token', token);
                return res.status(200).json({ message: 'You\'re successfully signed up.' })
            }

        } catch (err) {
            return res.status(500).json({ message: err.message })
        }
    }

    static async Login(req, res) {

        try {
            const { email, password } = req.body;
            const {dataValues} = await models.User.findOne({ where: { email } });
            if (dataValues === null) {
                return res.status(404).json({ error: 'Sorry! User doesn\'t exist.' })
            };
            const passwordMatch = await passwordManager.matchChecker(password, dataValues.password)
            if (!passwordMatch) {
                return res.status(403).json({ error: 'Sorry! wrong password.' })
            };
            const token = await generateToken({
                id: dataValues.id, 
                first_name: dataValues.first_name, 
                last_name: dataValues.last_name,
                email
            });
            localStorage.setItem('token', token);
            return res.status(200).json({ message: 'You\'re successfully logged in.', token });

        } catch (err) {
            return res.status(500).json({ message: err.message })
        }
    }

    static async requestPasswordReset(req, res, next) {

        const { email } = req.body;
        try {

            const existingUser = await models.User.findOne({ where: { email } });
            if (!existingUser) {
                return res.status(404).json({
                    error: 'Sorry! This email doesn\'t exist.',
                });
            } else {
                const token = generateToken({id: existingUser.id, email});
                localStorage.setItem('token',token)
                return res.status(200).json({message: 'Success', token})
            }
        } catch (err) {
            return res.status(500).json(err);
        }

    }


    static async resetPassword(req, res){

        try{
            // const retrievedToken = localStorage.getItem('token')
        const payload = req.headers.token;
        const decodedPayload = decodeToken(payload)
        const {password, confirmPassword } = req.body;

        if( confirmPassword !== password){
            return res.status(422).json({message: 'Sorry! the confirm passwords didn\'t match.'})
        }else {
            const hashedPassword = await passwordManager.encryptor(password, 10)
            await models.User.update({password: hashedPassword}, {where: {email: decodedPayload.email}})
            return res.status(200).json({message: 'Password successfully reset'})
        }
        }catch(err){
            return res.status(500).json({error: err.message})
        }

    }
}

export default UserController;