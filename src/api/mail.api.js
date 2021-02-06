import axios from 'axios';

export const sendWelcomeMail = async (email, name) => {
    const payload = {
        name,
    };
    const { status, data } = await axios.post(
        `${process.env.MAIL_ENDPOINT}/welcome/${email}`,
        payload,
    );
    return { status, data };
};

export const sendPasswordResetMail = async (email, name, redirecturl) => {
    const payload = {
        name,
        redirecturl,
    };
    const { status, data } = await axios.post(
        `${(process.env.MAIL_ENDPOINT)}/reset/${email}`,
        payload,
    );
    return { status, data };
};

export const sendConfirmationMail = async (email, redirecturl) => {
    const payload = {
        redirecturl,
    };
    const { status, data } = await axios.post(
        `${(process.env.MAIL_ENDPOINT)}/confirm/${email}`,
        payload,
    );
    return { status, data };
};
