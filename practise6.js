function mergeObject(obj1, obj2) {
    for (let key in obj2) {
        obj1[key] = obj2[key];
    }
    return obj1;
}
let user = { name: 'ali', family: 'rezaie' };
let about = { enjeniers: 'computer', book: 'clean code' };
console.log(mergeObject(user, about));