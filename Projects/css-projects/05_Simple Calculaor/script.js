// function calculate(choice) {
//     let n1 = document.getElementById("No1").value;
//     let n2 = document.getElementById("No2").value;
//     let result = document.getElementById("result");

//     let digitRegEx = /^[0-9]+$/;

//     let error = "";
//     if (n1 == undefined || n1 == "" || n1.trim().length == 0) {
//         error = error + "Please Enter N1<br>";
//     } else if (digitRegEx.test(n1) == false) {
//         error = error + "Please Enter Valid N1<br>";
//     }

//     if (n2 == undefined || n2 == "" || n2.trim().length == 0) {
//         error = error + "Please Enter N2<br>";
//     } else if (digitRegEx.test(n2) == false) {
//         error = error + "Please Enter Valid N2<br>";
//     }
//     if (error == "") {
//         n1 = parseInt(n1);
//         n2 = parseInt(n2);
//         let ans = 0;

//         switch (choice) {
//             case "add":
//                 ans = n1 + n2;
//                 break;
//             case "sub":
//                 ans = n1 - n2;
//                 break;
//             case "mult":
//                 ans = n1 * n2;
//                 break;
//             case "div":
//                 ans = n2 !== 0 ? n1 / n2 : "Error! Division by zero is not allowed.";
//                 break;
//             default:
//                 console.log("Invalid Operation");
//                 break;
//         }
//         // result.innerHTML += ans;
//         // result.innerHTML = `Result: ${ans}`;
//         result.innerHTML = `${choice} : ${ans}`;
//     } else {
//         result.innerHTML = `${error}`;
//     }
// }

function calculate(choice) {
    let n1 = document.getElementById("No1").value;
    let n2 = document.getElementById("No2").value;
    let result = document.getElementById("result");

    let digitRegEx = /^[0-9]+$/;
    let error = "";

    // Validate inputs
    if (!n1 || !digitRegEx.test(n1)) {
        error += "Please Enter a Valid N1<br>";
    }

    if (!n2 || !digitRegEx.test(n2)) {
        error += "Please Enter a Valid N2<br>";
    }

    if (error) {
        result.innerHTML = error; // Show errors
        return; // Exit if there are errors
    }

    // Parse the inputs
    n1 = parseInt(n1);
    n2 = parseInt(n2);
    let ans;

    // Perform the calculation based on the choice
    switch (choice) {
        case "add":
            ans = n1 + n2;
            break;
        case "sub":
            ans = n1 - n2;
            break;
        case "mult":
            ans = n1 * n2;
            break;
        case "div":
            ans = n2 !== 0 ? n1 / n2 : "Error! Division by zero is not allowed.";
            break;
        default:
            console.log("Invalid Operation");
            return; // Exit if an invalid operation is detected
    }

    // Display the result
    result.innerHTML = `${choice.charAt(0).toUpperCase() + choice.slice(1)}: ${ans}`;
}
