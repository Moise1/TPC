import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
export const generateToken = (payload) => jwt.sign(payload, process.env.SECRET_OR_PUBLIC_KEY);
export const decodeToken = (payload) => jwt.verify(payload, process.env.SECRET_OR_PUBLIC_KEY)
