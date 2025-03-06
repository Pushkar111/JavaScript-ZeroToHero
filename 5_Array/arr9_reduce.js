let arr = [15, 16, 17, 18, 19];

let sum = arr.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
console.log("sum : ", sum);

/*
=================================================================
                accumulator	currentValue	index	Return value
=================================================================
First call	    15      	16	            1	    31
Second call	    31	        17	            2   	48
Third call	    48	        18	            3   	66
Fourth call	    66	        19	            4   	85
=================================================================
*/


/* 1) Sum of values in an object array */
let objArr = [
  { id: 15 },
  { id: 16 },
  { id: 17 },
  { id: 18 },
  { id: 19 },
];

let objSum = objArr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.id;
}, 0);
console.log("objSum : ", objSum);