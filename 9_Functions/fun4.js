const FindMax = (a,b,c) => {
    // return  Math.max(a,b,c);
    // return a>b ? (a>c ? a : c) : (b>c ? b : c);
    return a > b && a >c ? a : b > c ? b : c;
}

console.log("FindMax :", FindMax(1,2,3));