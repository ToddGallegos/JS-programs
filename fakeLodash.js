/*
Program Name: Fake Lodash
Date: 10/12/2021
Description: Implements some of the lodash library's methods with my own code
*/

// predicate functions, arrays, and object used for testing methods
function predFunc(val) {
    if (val) {
        return true;
    } else {
        return false;
    }
};

function predFunc2(elem, elemIndex, arr) {
    if (elem > elemIndex) {
        return true;
    } else {
        return false;
    }
};

let spaceship = {
    Captain: 'Samantha',
    Engine: '450 Turbo',
    FuelType: 'Peanut Butter'
};

let colors = ['red', 'blue', 'green', '', 'brown'];

let nums = [1, 2, 0, 4, 5];

// object containing my version of some lodash methods
let fakeLodash = {
    clamp(n, lowerN, upperN) {
        if (n < lowerN) {
            return lowerN;
        } else if (n > upperN) {
            return upperN;
        } else {
            return n;
        };
    },

    inRange(n, startN, endN) {
        if (endN === undefined) {
            endN = startN;
            startN = 0;
        };
        if (startN > endN) {
            let x = startN;
            let y = endN;
            startN = y;
            endN = x;
        };
        if (n < startN) {
            return false;
        } else if (n >= endN) {
            return false;
        } else if (n >= startN && n < endN) {
            return true;
        };
    },

    words(str) {
        let answer = str.split(' ');
        return answer;
    },

    // could have used repeat() method on a string of ' ' to create the pre and post padding, instead of all the for loops :-(
    pad(string, length) {
        if (string.length < length) {
            let extra = length - string.length;
            let pre = '';
            let post = '';
            if (extra % 2 === 0) {
                extra = extra / 2;
                for (let i = 0; i < extra; i++) {
                    pre = pre + ' ';
                    post = post + ' ';
                };
                string = pre + string + post;
                return string;
            } else if (extra % 2 !== 0) {
                extra = Math.floor(extra / 2);
                for (let i = 0; i <= extra; i++) {
                    post = post + ' ';
                };
                for (let i = 0; i < extra; i++) {
                    pre = pre + ' ';
                };
                string = pre + string + post;
                return string;
            };
        } else {
            return string;
        };
    },

    has(objInput, keyInput) {
        for (prop in objInput) {
            if (objInput[keyInput] === undefined) {
                return false;
            } else {
                return true;
            };
        };
    },

    /*
    could have used a for...in loop to do this more elegantly:
    let invertedObject = {};
    for (let key in object) {
        const originalValue = object[key];
        invertedObject[originalValue] = key;
    }
    return invertedObject;
    */
    invert(obj) {
        let values = Object.values(obj);
        let keys = Object.keys(obj);
        let invertedObj = {};
        for (let i = 0; i < keys.length; i++) {
            delete obj[keys[i]];
            invertedObj[values[i]] = keys[i];
        };
        obj = invertedObj;
        return obj;
    },

    // does not work if method or predicate function use '== true' for conditional.
    findKey(obj, func) {
        for (let key of Object.keys(obj)) {
            console.log(key);
            console.log(obj[key]);
            if (func(obj[key])) {
                return key;
            };
        };
    },

    drop(arr, num) {
        if (num > 0)
            for (i = 0; i < num; i++) {
                arr.shift();
            } else {
            arr.shift();
        };
        return arr;
    },

    // could have used .findIndex() and previously created drop() method, also should use ! in conditional
    dropWhile(arr, func) {
        let newArr = arr;
        for (i = 0; i < arr.length; i++) {
            if (func(arr[i], arr.indexOf[arr[i]], arr)) {

            } else {
                newArr.shift();
            }
        }
        return newArr;
    },

    chunk(arr, size) {
        if (!size > 0) {
            size = 1;
        };
        let newArr = [];
        let first = 0;
        let last = size;
        while (first < arr.length) {
            if (last > arr.length) {
                last = arr.length;
            };
            console.log(first, last)
            newArr.push(arr.slice(first, last))
            first = first + size;
            last = last + size;
        };
        return newArr;
    }
}

