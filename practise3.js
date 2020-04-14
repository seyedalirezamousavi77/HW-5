function checkUserName(user) {
    if (user.length <= 3 || user.length >= 9)
        return false;
    for (let i = 0; i < user.length; i++) {
        if (user[i] == '.' || user[i] == '_') { }
        else
            return false;
    }
    return true;
}