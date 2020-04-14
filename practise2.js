function checkPhoneNumber(num) {
    if (num[0] == '+' && num[1] == 9 && num[2] == 8 && num[3] == 9) {
        if (num.length != 13)
            return false;
    }
    else if (num[0] == 0 && num[1] == 0 && num[2] == 9 && num[3] == 8 && num[4] == 9) {
        if (num.length != 14)
            return false;
    }
    else if (num[0] == 0 && num[1] == 9) {
        if (num.length != 11)
            return false;
    }
    else {
        return false;
    }
    return true;
}