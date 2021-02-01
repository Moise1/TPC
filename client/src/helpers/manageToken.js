
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
export const tokenDecoder = (payload) => jwt.verify(payload, process.env.REACT_APP_SECRET_OR_PUBLIC_KEY);
