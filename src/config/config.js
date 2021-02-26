import dotenv from 'dotenv';

dotenv.config();
export const jwt = {
    secret: process.env.secret,
};

export const mongoose_config =()=> ({
    url: process.env.MONGODB_URL + (process.env.NODE_ENV === 'test' ? '-test' : ''),
    options: {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    },
})

export const { NODE_ENV } = process.env;
