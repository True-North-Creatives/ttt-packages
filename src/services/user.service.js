import httpStatus from 'http-status';
import bcrypt from 'bcrypt';
import User from '../models/user.model';
import { ROLES } from '../constants/roles';
import errorMap from '../constants/errorMap';

/**
 * Create a user
 * @param {object} payload
 * @return {User}
 */
export const createUser = async (payload) => {
    if (await User.isEmailTaken(payload.email)) {
        return { error: { ...errorMap['AUTH-107'] } };
    }
    const user = await User.create(payload);
    return user;
};

/**
 * Query for users
 * @param {object} filter - Mongo filter
 * @param {object} options - Query options
 * @return {Promise<QueryResult>}
 */
export const queryUsers = async (filter, options) => {
    const users = await User.paginate(filter, options);
    return users;
};

/**
 * Get user by email
 * @param {string} filter
 * @return {User} user Model
 */
export const getUserByFilter = async (filter) => {
    const user = await User.findOne(filter);
    return user;
};

/**
 * Update user by email id
 * @param {objectId} userId
 * @param {object} updateBody
 * @return {Promise<User>}
 */
export const updateUser = async (email, payload) => {
    const user = await User.findOneAndUpdate({ email }, { ...payload }).exec();
    if (!user) {
        return { ...errorMap['AUTH-100'], httpStatus: httpStatus.BAD_REQUEST };
    }
    return user;
};

export const updatePass = async (email, pass) => {
    const res = await User.updateOne(
        { email },
        { pass: await bcrypt.hash(pass, 8) },
    );
    return res;
};

/**
 * Delete user by email id
 * @param {objectId} userId
 * @return {Promise<User>}
 */
export const deleteUserById = async (email) => {
    const user = await getUserByFilter({ email });
    if (!user) {
        return { ...errorMap['AUTH-100'], httpStatus: httpStatus.BAD_REQUEST };
    }
    await user.remove();
    return user;
};

/**
 * check if email ID is present
 * @param {string} email
 */
export const userPresent = async (email) => {
    const user = await User.isEmailTaken(email);
    return user;
};

/**
 * Gets all users
 */
export const getAllUsers = async () => {
    const user = await User.find();
    return user;
};

/**
 *
 * @param {string} email
 * @param {string} token
 */
export const setResetURL = async (email, token) => {
    const user = await User.findOneAndUpdate(
        { email },
        { resetURL: token },
    ).lean();
    return user !== null;
};

/**
 *
 * @param {string} email
 */
export const removeResetURL = async (email) => {
    const user = await User.findOneAndUpdate(
        { email },
        { token: undefined },
    ).exec();
    return user !== null;
};

/**
 *
 * @param {string} email
 * @param {string} token
 */
export const verifyResetURL = async (email, token) => {
    const { resetURL } = await User.findOne({ email }).lean();
    return token === resetURL;
};

/**
 *
 * @param {User} user
 */
export const isSubscriptionActive = (user) => user.role.includes(ROLES.Default);
