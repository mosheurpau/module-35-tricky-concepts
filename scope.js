const favNum = 28;
function add(first, second) {
    const result = first + second;
    //console.log(mood); // hoisting
    if (result > 9) {
        let mood = 'happy';
        // console.log(mood);
    }
    return result;
}
const sum = add(11, 35);
console.log(favNum);