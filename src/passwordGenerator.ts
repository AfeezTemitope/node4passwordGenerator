const generateRandomPassword = (): string => {
    const length = 15
    const charset = 'const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";'
    let password = ''
    for (let i=0;  i < length; ++i)
    {
        password += charset.charAt(Math.floor(Math.random() * charset.length))
    }
    return password
}


export default generateRandomPassword()