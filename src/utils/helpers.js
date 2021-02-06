import config from '../config/config';
import { v4 as uuidv4 } from 'uuid';

export const constructResetUrl = (token) => (config.env === 'development'
    ? `https://localhost:8081/reset/${token}`
    : `https://auth.timetotrain.fit/reset/${token}`);

export const constructActivateUrl = (token) => (config.env === 'development'
    ? `https://localhost:8081/activate/${token}`
    : `https://auth.timetotrain.fit/activate/${token}`);

export const generateUserId = () => uuidv4();