console.log("======== history ========");
console.log("window history Object Methods");

// Method	Description
/*
1. back() -> Loads the previous URL in the history list.
    ==> Syntax : window.history.back(); or history.back();
    ==> window.history.back();
    ==> history.back();

2. forward() -> Loads the next URL in the history list.
    ==> Syntax : window.history.forward(); or history.forward();
    ==> window.history.forward();
    ==> history.forward();

3. go() -> Loads a specific URL from the history list.
    ==> Syntax : window.history.go(#number); or history.go(#number);
    ==> window.history.go(-2); // loads the 2nd previous URL in the history list
    ==> history.go(2); // loads the 2nd next URL in the history list
*/

// 1. back()
// history.back(); // goes back to the previous page in the history list

// 2. forward()
// history.forward(); // goes forward to the next page in the history list

// 3. go()
// history.go(-2); // goes back to the 2nd previous page in the history list
// history.go(2); // goes forward to the 2nd next page in the history list