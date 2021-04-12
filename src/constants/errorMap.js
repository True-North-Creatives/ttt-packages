export const ERROR = 'error';
export const WARN = 'warn';
export const INFO = 'info';

const authMap = {
    'AUTH-100': {
        code: 'AUTH-100',
        message: "We don't recognise this user",
        type: ERROR,
        name: 'Auth failed, user not found',
    },
    'AUTH-101': {
        code: 'AUTH-101',
        message: 'This user is blacklisted, please contact the customer care',
        type: ERROR,
        name: 'User was black listed for abnormal activity',
    },
    'AUTH-102': {
        code: 'AUTH-102',
        message: 'Login failed: check username and password',
        type: ERROR,
        name: 'Failed login',
    },
    'AUTH-103': {
        code: 'AUTH-103',
        message: 'Subscription Inactive, please pay for continued services',
        type: ERROR,
        name: 'Subscription expired',
    },
    'AUTH-104': {
        code: 'AUTH-104',
        message: 'Login expired, please login again',
        type: INFO,
        name: 'Refresh token not valid',
    },
    'AUTH-105': {
        code: 'AUTH-105',
        message: 'Something went wrong!, relogin',
        type: ERROR,
        name: 'Tokens are tampered',
    },
    'AUTH-106': {
        code: 'AUTH-106',
        message: 'Invalid Request: username or password is Empty',
        type: ERROR,
        name: 'Abnormal request',
    },
    'AUTH-107': {
        code: 'AUTH-107',
        message: 'Username already taken',
        type: WARN,
        name: 'Email ID exist',
    },
    'AUTH-108': {
        code: 'AUTH-108',
        message: "Can't reset password",
        type: ERROR,
        name: 'reset password failure, user signed up via auth providers',
    },
    'AUTH-109': {
        code: 'AUTH-109',
        message: 'uid not found',
        type: ERROR,
        name: 'uid cookie is not found',
    },
    'AUTH-110': {
        code: 'AUTH-110',
        message: 'Account is not activated, please check your mail for activation email',
        type: ERROR,
        name: 'Account not activated',
    },
    'AUTH-111': {
        code: 'AUTH-111',
        message: 'Verification token is invalid',
        type: ERROR,
        name: 'Verification token invalid',
    },
    'AUTH-112': {
        code: 'AUTH-112',
        message: 'Account was created by EMAIL',
        type: ERROR,
        name: 'Invalid Login',
    },
    'AUTH-113': {
        code: 'AUTH-113',
        message: 'Account was created using 3RD Party',
        type: ERROR,
        name: 'Invalid Login',
    }
};

export const customError = (data) => ({
    'CUS-100': {
        code: 'GEN-100',
        message: 'Something went wrong!',
        type: ERROR,
        name: 'Generice error',
        data,
    },
});

export const userErrorMap = {
    'USER-101': {
        code: 'USER-101',
        message: 'Problem while updating the details',
        type: ERROR,
        name: 'Update Error',
    }
}
export default authMap;
