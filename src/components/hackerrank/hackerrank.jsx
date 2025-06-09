import React, { useState, useEffect } from 'react';
import './hackerrank.css';

export const Hackerrank = () => {
    const [result, setResult] = useState(null);
    const [shiftResult, setShiftResult] = useState(null);

    const arr = [
        [1, 1, 1, 0, 0, 0],
        [0, 1, 0, 0, 0, 0],
        [1, 1, 1, 0, 0, 0],
        [0, 0, 2, 4, 4, 0],
        [0, 0, 0, 2, 0, 0],
        [0, 0, 1, 2, 4, 0],
    ];

    const array = [1, 2, 3, 4, 5];

    const arrayToSort = [7, 1, 3, 2, 4, 5, 6];

    const arrayToSum = [1,3,4];

    const stringArr = "hello"

    useEffect(() => {
        // for(let i = 0; i < 6; ++i) {

        //     console.log("logging current pre index ",i)

        // }

        let total = 0;
        //let i = 0;

        // function sumUp(array, i = 0) {
        //     if(i === array.length) return 0;

        //     return array[i] + sumUp(array, ++i)
        // }

        // const res = sumUp(arrayToSum)

        // console.log('total is ',res)

        // function reverseString2(str) {
        //     if(!str.length) return '';

        //     const char = str.charAt(i);
        //     const idx = str.lastIndexOf(char)

        //     return str.charAt(i) + reverseString(str.substring(0,idx),i - 1)
        // }

        function reverseString(str, i) {
            if(!str) return '';

            return reverseString(str.slice(1)) + str[0]
        }

        const newStr = reverseString('hello');

        console.log(newStr)

        //   reverseString("cat")
        // → reverseString("at") + "c"
        // → (reverseString("t") + "a") + "c"
        // → ("t" + "a") + "c"
        // → "tac"
       
    }, []);

    // useEffect(() => {
    //     let count = 0;
    //     for (let i = 0; i < arrayToSort.length; i++) {
    //         if (arrayToSort[i] > arrayToSort[i + 1]) {
    //             arrayToSort[i + 1] = arrayToSort[i];
    //             count++
    //         }
    //     }
        
    //     console.log(count)
    // }, []);

    // useEffect(() => {
    //     let n = 2; // num rotations
    
    //     const len = array.length;

    //     const rotations = n % len; // modulo to get num rotations

    //     const front = array.slice(rotations);

    //     const back = array.slice(0, rotations);

    //     const result = front.concat(back);

    //     setShiftResult(result);
    // }, []);

    // useEffect(() => {
    //     let resArr = [];
    //     for (let i = 0; i <= arr.length - 3; i++) {
    //         for (let j = 0; j <= arr.length - 3; j++) {
    //             const top = arr[i][j] + arr[i][j + 1] + arr[i][j + 2];

    //             const mid = arr[i + 1][j + 1];

    //             const bottom = arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];

    //             const total = top + mid + bottom;

    //             resArr.push(total);
    //         }
    //     }
    //     const max = Math.max(...resArr);
    //     setResult(max);
    // }, []);

    return (
        <div className="container">
            <h1>logging 2d array result {result}</h1>
            <h1>logging shift array result {shiftResult}</h1>
        </div>
    );
};
