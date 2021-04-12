import bcrypt from 'bcrypt';

export const isPasswordMatch = async (password, storedPass) => bcrypt.compare(password, storedPass);