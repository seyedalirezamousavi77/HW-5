let users = ["ali", "mohammad", "reza"];
let user = "Q.3"
function searchUserName(users, user) {
    for (let i = 0; i < users.length; i++) {
        if (user === users[i])
            return true;
    }
    return false;
}
searchUserName(users, user);