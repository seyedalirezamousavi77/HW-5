function myRand(bignum, smallnum) {
    if (bignum < smallnum) {
        let temp;
        temp = bignum;
        bignum = smallnum;
        smallnum = temp;
    }
    let rand;
    rand = Math.random() * (bignum - smallnum + 1) + smallnum;
    return Math.floor(rand);
}
console.log(myRand(1000, 59999));