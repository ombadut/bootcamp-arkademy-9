function isPasswordValid(password) {
    if (password.length >= 8) {
        if (/^[a-z0-9]+$/.test(password)) {
            return true;
        }
    }
    return false;
}

console.log(isPasswordValid("tgby7654"));