import dotenv from 'dotenv';

dotenv.config();
export const jwt = {
    secret: process.env.secret,
};
export const { ENV } = process.env;
