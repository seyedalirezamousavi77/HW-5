function shuffleArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        let j = Math.floor(Math.random() * (arr.length));
        let temp;
        if (i != j) {
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    return arr;
}
let array = [1, 2, 3, 4];
console.log(shuffleArray(array))