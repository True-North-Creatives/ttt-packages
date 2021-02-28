export const UTCToReadable = (date = new Date()) => date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear();

export const normalizeToString = (date) => date.getTime();

export const parseToDate = (date) => new Date(date);