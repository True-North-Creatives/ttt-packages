import { v4 as uuidv4 } from 'uuid';
import logger from '../config/logger';

export const constructResetUrl = (token) => {
    switch (process.env.NODE_ENV) {
    case 'dev':
        return `https://localhost:8081/reset/${token}`;
    case 'staging':
        return `https://stage.timetotrain.fit/reset/${token}`;
    case 'prod':
        return `https://timetotrain.fit/reset/${token}`;
    default:
        logger.error('Environment is not set!');
        return 'https://timetotrain.fit/';
    }
};

export const constructActivateUrl = (token) => {
    switch (process.env.NODE_ENV) {
    case 'dev':
        return `https://localhost:8081/activate/${token}`;
    case 'staging':
        return `https://stage.timetotrain.fit/activate/${token}`;
    case 'prod':
        return `https://timetotrain.fit/activate/${token}`;
    default:
        logger.error('Environment is not set!');
        return 'https://timetotrain.fit/';
    }
};

export const generateUserId = () => uuidv4();
