export const validateName = name => /\d+/.test(name)
export const validateEmail = email => !/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
