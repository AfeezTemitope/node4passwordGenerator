"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generateRandomPassword = () => {
    const length = 15;
    const charset = 'const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";';
    let password = '';
    for (let i = 0; i < length; ++i) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return password;
};
exports.default = generateRandomPassword();
