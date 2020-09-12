import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
export const generateToken = (payload) => jwt.sign(payload, process.env.SECRET_OR_PRIVATE_KEY);
