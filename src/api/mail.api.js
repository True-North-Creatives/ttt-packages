import axios from 'axios';

export const sendWelcomeMail = async (email, name) => {
    const payload = {
        name,
    };
    const { status, data } = await axios.post(
        `api/v2/mail/welcome/${email}`,
        payload,
        { withCredentials: true, validateStatus: (status)=> status <= 503 }
    );
    return { status, data };
};

export const sendPasswordResetMail = async (email, name, redirecturl) => {
    const payload = {
        name,
        redirecturl,
    };
    const { status, data } = await axios.post(
        `api/v2/mail/reset/${email}`,
        payload,
        { withCredentials: true, validateStatus: (status)=> status <= 503 }
    );
    return { status, data };
};

export const sendConfirmationMail = async (email, redirecturl) => {
    const payload = {
        redirecturl,
    };
    const { status, data } = await axios.post(
        `api/v2/mail/confirm/${email}`,
        payload,
        { withCredentials: true, validateStatus: (status)=> status <= 503 }
    );
    return { status, data };
};
