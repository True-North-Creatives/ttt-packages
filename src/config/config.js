import dotenv from 'dotenv';

dotenv.config();
export const jwt = {
    secret: process.env.secret,
};
export const { NODE_ENV } = process.env;
