
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';

const secretKey = process.env.REACT_APP_SECRET_OR_PUBLIC_KEY;
const myEnv = dotenv.config();
dotenvExpand(myEnv);

export const decodeToken = (payload) => jwt.verify(payload, secretKey);
