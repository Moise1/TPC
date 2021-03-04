import models from '../database/models'
import passwordManager from '../helpers/passwordManager'
import { generateToken, decodeToken} from '../helpers/manageToken'

class UserController {

    static async signUp(req, res) {
        try {
            
            const {first_name, last_name, password, email} = req.body
            const hashedPassword = await passwordManager.encryptor(password, 10)
            const existingUser = await models.User.findOne({ where: { email } });
            const role = 'regular_staff';

            if (existingUser !== null) {
                return res.status(409).json({ error: 'Sorry! Email already taken.' });
            } else {
                const {dataValues} = await models.User.create({ first_name, email, last_name, password: hashedPassword, role });
                const token = generateToken({
                    id: dataValues.id, 
                    first_name, 
                    last_name,
                    email,
                    role
                });
    
                const data = {
                    dataValues,
                    token
                }
                return res.status(200).json({data})
            }

        } catch (err) {
            if(err){
                return res.status(500).json({ error: err.message})
            }
        }
    }

    static async Login(req, res) {

        try {
            const { email, password } = req.body;

            const dataValues = await models.User.findOne({ where: { email } });
            
            if (dataValues === null) {  
                return res.status(404).json({ error: 'Sorry! User with this email doesn\'t exist.' })
            };
            const passwordMatch = await passwordManager.matchChecker(password, dataValues.password)
            if (!passwordMatch) {
                return res.status(403).json({ error: 'Sorry! Wrong password.' })
            };
            const token = await generateToken({
                id: dataValues.id, 
                email,
                first_name: dataValues.first_name, 
                last_name: dataValues.last_name
            });

            return res.status(200).json({ message: 'You\'re successfully logged in.', token });

        } catch (err) {
            if(err){
                return res.status(500).json({ error: err.message })
            }
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
                return res.status(200).json({message: 'Success', token})
            }
        } catch (err) {
            if(err){
                return res.status(500).json({error: err.message});
            }
        }

    }


    static async resetPassword(req, res){

        try{

        const payload = req.params.token;
        const decodedPayload = decodeToken(payload)
        const { password, confirmPassword } = req.body;

        if( confirmPassword !== password){
            return res.status(422).json({error: 'Sorry! passwords didn\'t match.'})
        }else {
            const hashedPassword = await passwordManager.encryptor(password, 10)
            await models.User.update({password: hashedPassword}, {where: {email: decodedPayload.email}})
            return res.status(200).json({message: 'Password successfully reset'})
        }
        }catch(err){
            if(err){
                return res.status(500).json({err: err.message})
            }
        }

    }

    static async Logout(req, res){

        try {
            req.logout();
            res.redirect('/');
        } catch (error) {
            if(error){
                return res.status(500).json({err: error.message})
            }
        }
    }
}

export default UserController;