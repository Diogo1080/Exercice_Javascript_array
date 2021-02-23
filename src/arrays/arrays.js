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
    let sum = 0;
    for (let item of arr) {
        sum += item;
    }
    return sum;
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
    let bool = true;
    if (arr1.length != arr2.length) {
        return false;
    } else {
        for (i = 0; i < arr1.length; i++) {
            if (arr1[i] != arr2[i]) {
                bool = false;
            }
        }
    }
    return bool;
};

/**
 * Reverse the given array
 */
const reverse = (arr) => {
    let newArr = [];
    for (i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i])
    }
    return newArr;
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
    let data = [];
    for (i = 0; i < arr.length; i++) {
        if (!(arr[i] == false || arr[i] === null)) {
            data.push(arr[i]);
        }
    }
    return data;
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
    let data = [];
    let repeted = [];
    let bool = false;
    for (i = 0; i < arr.length; i++) {

        for (j = 0; j < repeted.length; j++) {
            if (arr[i] == repeted[j]) {
                bool = true;
            }
        }

        if (bool) {
            data.push(arr[i]);
        } else {
            repeted.push(arr[i]);
        }
        bool = false;
    }
    return data;
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
