function checkedEmail(num) {
    let indexAt = num.length;;
    for (let i = 0; i < num.length; i++) {
        if (num[i] <= 33 && num[i] >= 126) {
            return false;
        }
        if (num[i] == '@') {
            indexAt = i;
        }
    }
    if (num[indexAt - 1] == '.' || num[indexAt + 1] == '.' || num[0] == '.' || indexAt == num.length) {
        return false;
    }
    for (let i = 0; i < indexAt; i++) {
        if (num[i] == '.' && num[i - 1] == '.') {
            return false;
        }
    }
    return true;
}
