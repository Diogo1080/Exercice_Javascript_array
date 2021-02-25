/**
 * Add the given item to the array
 */
const add = (arr, item) => {
    return [...arr, item];
};

/**
 * Add the given item to the start of the array
 */
const prepend = (arr, item) => {
    return [item, ...arr]
};

/*
 * Remove the given item from the array
*/
const remove = (arr, item) => {
    var i = 0;
    while (i < arr.length) {
        if (arr[i] === item) {
            arr.splice(i, 1);
        } else {
            ++i;
        }
    }
    return arr;
};

/**
 * Find the index of the given item within the given array
 */
const findIndex = (arr, item) => {
    return arr.indexOf(item)
};

/**
 * Sums all the items of an array
 */
const sum = (arr) => {
   
    return  arr.reduce((a, b) => a + b, 0);
};

/**
 * Concatenate the two arrays
 */
const concat = (arr1, arr2) => {
    return [...arr1, ...arr2]
};

/**
 * Compare the two arrays' content for equality
 */
const isEqual = (arr1, arr2) => {
    return JSON.stringify(arr1)==JSON.stringify(arr2);
};

/**
 * Reverse the given array
 */
const reverse = (arr) => {
    return arr.reverse();
};

/**
 * Insert an item in the array at the specific position
 */
const insert = (arr, item, index) => {
    arr.splice(index, 0, item);
    return arr;
};

/**
 * Fill a new created array with the given length with the given item
 */
const fill = (length, item) => {
    let data = [];
    for (i = 0; i < length; i++) {
        data.push(item);
    }
    return data;
};

/**
 * Remove all the falsy values from the given array
 */
const compact = (arr) => {
    return arr.filter(Boolean)
};

/**
 * Count the number of occurrences of an item in the given array
 */
const count = (arr, item) => {
    let count = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] == item) {
            count++;
        }
    }
    return count;
};

/**
 * Multiply all the items on the array by the given number
 */
const multiply = (arr, number) => {
    for (i = 0; i < arr.length; i++) {
        arr[i] *= number;
    }
    return arr;
};

/**
 * Find all the duplicated items in the given array
 */
const findDuplicates = (arr) => {
    let duplicates = [];
    const filtered = arr.filter((el, index) => arr.indexOf(el) !== index)
    return duplicates = [...new Set(filtered)]
};

/**
 * Find all the occurrences of a given item on the array
 */
const findAllOccurrences = (arr, item) => {
    let data = [];

    for (i = 0; i < arr.length; i++) {
        if (arr[i] == item) {
            data.push(i);
        }
    }

    return data;
};

/**
 * Parse the params from the given url
 */
const parseParams = (url) => {
    const data = remove(url.split(/[?&]([^=#]+)=([^&#]*)/g),"");
    let params = {};
    for (let i = 1; i < data.length; i = i + 2) {
        if (data[i+1].includes(",")) {
            let arrayInString = data[i+1].split(",")
            let arrayData = [];
            for(let j = 0; j < arrayInString.length; j++){
                arrayData.push(parseInt(arrayInString[j])); 
            }
            params[data[i]]=arrayData;
        }else{
            params[data[i]]=parseInt(data[i+1]);
        }
    }
    return params;
};

module.exports = {
    add,
    prepend,
    remove,
    findIndex,
    sum,
    concat,
    isEqual,
    reverse,
    insert,
    fill,
    compact,
    count,
    multiply,
    findDuplicates,
    findAllOccurrences,
    parseParams,
};
