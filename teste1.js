function returnEvenValues(array){
    let evenNums = [];
    for(let i = 0; i <  array.length; i++) {
        if (array [i] % 2 === 0){
            evenNums.push(array[i]);
    }
}
console.log(evenNums);
}
let array = [1, 2, 4 ,14, 15, 23, 26, 21, 34, 42, 46];

returnEvenValues(array);
