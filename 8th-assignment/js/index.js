

/* -------------------------------------------------------------------------- */
/*                         JavaScript First Assignment                        */
/* -------------------------------------------------------------------------- */


/* -------------------------------------------------------------------------- */
/*                                  utilities                                 */
/* -------------------------------------------------------------------------- */

// Enter Number 

function enterNumber(msg = "Please Enter a Number: ") {
    return Number(window.prompt(msg));
}

function promptUser(msg) {
    return window.prompt(msg);
}

/* -------------------------------------------------------------------------- */
/*                                    Todo                                    */
/* -------------------------------------------------------------------------- */

/*
    Todo:

    1 - Write a program that allow to user enter number then print it
        Example
            Input: 5
            Output: 5

*/


/* -------------------------------- solution -------------------------------- */

// solution 1
// const userInput = Number(window.prompt())
// console.log(userInput)

// solution 2
// console.log(Number(window.prompt()))

// solution 3
// console.log(enterNumber())

// to check that the output is type number
// console.log(typeof Number(window.prompt()))


/* -------------------------------------------------------------------------- */
/*                                    Todo                                    */
/* -------------------------------------------------------------------------- */

/*
    Todo:

    2 - Write a program that take number from user then print yes if that number can divide by 3 and 4 otherwise print no
        Example 1
            Input: 12 Output Yes
        Example 2
            Input: 9 Output No

*/

/* -------------------------------- solution -------------------------------- */

// const userInput = enterNumber()

// if (userInput % 3 === 0 && userInput % 4 === 0) {
//     console.log("Yes")
// } else {
//     console.log("No")
// }

/* -------------------------------------------------------------------------- */
/*                                    Todo                                    */
/* -------------------------------------------------------------------------- */

/*
    Todo:

    3 - Write a program that allows the user to insert 2 integers then print the max
        Example 1
            Input: 3 5
            Output: 5
        Example 2
            Input: 10 7
            Output: 10

*/

/* -------------------------------- solution -------------------------------- */

// const firstInput = enterNumber("Please Enter the 1st number: ")
// const secondInput = enterNumber("Please Enter the 2nd number: ")

// if (firstInput > secondInput) {
//     console.log(firstInput)
// } else {
//     console.log(secondInput)
// }


/* -------------------------------------------------------------------------- */
/*                                    Todo                                    */
/* -------------------------------------------------------------------------- */

/*
    Todo:

    4 - Write a program that allows the user to insert an integer then print negative if it is negative number otherwise print positive.
        Example 1
            Input: -5
            Output negative
        Example 2
            Input: 10
            Output positive

*/

/* -------------------------------- solution -------------------------------- */

// const input = enterNumber();

// if (input >= 0) console.log("postive")
// else console.log("negative")


/* -------------------------------------------------------------------------- */
/*                                    Todo                                    */
/* -------------------------------------------------------------------------- */

/*
    Todo:

    5- Write a program that take 3 integers from user then print the max element and the min element.
        Example 1
            Input:
                7,8,5
            Output:
                max element = 8
                min element = 5

        Example2
            Input:
                3 6 9
            Outputs:
                Max element = 9
                Min element = 3

*/

/* -------------------------------- solution -------------------------------- */

// const n1 = enterNumber("Please Enter 1st Number: ")
// const n2 = enterNumber("Please Enter 2nd Number: ")
// const n3 = enterNumber("Please Enter 3rd Number: ")

// let max = Number.NEGATIVE_INFINITY;
// let min = Number.POSITIVE_INFINITY;

// for (let i = 0; i < 3; i++) {
//     if (n1 > max) max = n1;
//     if (n2 > max) max = n2;
//     if (n3 > max) max = n3;

//     if (n1 < min) min = n1;
//     if (n2 < min) min = n2;
//     if (n3 < min) min = n3;
// }

// console.log("Max element = " + max, "\n", "Min element = " + min);


/* -------------------------------------------------------------------------- */
/*                                    Todo                                    */
/* -------------------------------------------------------------------------- */

/*
    Todo:

    6 - 7 - Write a program that allows the user to insert integer number then check If a number is even or odd

    Example 1
        Input: 8
        Output: even

    Example 2
        Input: 7
        Output: odd

*/

/* -------------------------------- solution -------------------------------- */

// const input = enterNumber()
// input % 2 === 0 ? console.log("even") : console.log("odd")


/* -------------------------------------------------------------------------- */
/*                                    Todo                                    */
/* -------------------------------------------------------------------------- */

/*
    Todo:

    8- Write a program that take character from user then if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonant
        Example1
            Input: O
            Output: vowel

        Example 2
            Input: b
            Output: Consonant

*/

/* -------------------------------- solution -------------------------------- */

// const char = promptUser("Please Enter Character: ")

// if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") { console.log("vowel") }
// else { console.log("Consonant") }


/* -------------------------------------------------------------------------- */
/*                                    Todo                                    */
/* -------------------------------------------------------------------------- */

/*
    Todo:

    9- Write a program that allows user to insert integer then print all numbers between 1 to that’s number
        Example Input 5
        Output 1, 2, 3, 4, 5

*/

/* -------------------------------- solution -------------------------------- */
// const inputNumber = enterNumber();
// for (let i = 0; i < inputNumber; i++) {
//     console.log(i + 1)
// }


/* -------------------------------------------------------------------------- */
/*                                    Todo                                    */
/* -------------------------------------------------------------------------- */

/*
    Todo:

    10- Write a program that allows user to insert integer then print a multiplication table up to 12.
        Example
            Input: 5
            Outputs:
            5 10 15 20 25 30 35 40 45 50 55 60
*/

/* -------------------------------- solution -------------------------------- */

// const inputNumber = enterNumber();

// for (let i = 1; i <= 12; i++) {
//     console.log(`${inputNumber} * ${i} = ${inputNumber * i}`)
// }

/* -------------------------------------------------------------------------- */
/*                                    Todo                                    */
/* -------------------------------------------------------------------------- */

/*
    Todo:

    11- Write a program that allows to user to insert number then print all even numbers between 1 to this number

    Example:
        Input: 15
        Output: 2 4 6 8 10 12 14

*/

/* -------------------------------- solution -------------------------------- */
// const inputNumber = enterNumber();

// for (let i = 2; i <= inputNumber; i += 2) {
//     console.log(i)
// }


/* -------------------------------------------------------------------------- */
/*                                    Todo                                    */
/* -------------------------------------------------------------------------- */

/*
    Todo:

    12- Write a program that take two integers then print the power

        Example:
            Input: 4 3
            Output:  64

        Hint how to calculate 4^3 = 4 * 4 * 4 =64

*/

/* -------------------------------- solution -------------------------------- */

// const num1 = enterNumber("please enter the base number: "),
//     num2 = enterNumber("please enter the exponent number: ")

// let result = 1;

// for (let i = 0; i < num2; i++) {
//     result = result * num1;
// }

// console.log(result)

/* -------------------------------------------------------------------------- */
/*                                    Todo                                    */
/* -------------------------------------------------------------------------- */

/*
    Todo:

    12- Write a program to enter marks of five subjects and calculate total, average and percentage.
        Example
            Input: - Enter Marks of five subjects:

                95
                76
                58
                90
                89

            Output:

            --------------- Caution --------------

            *    Total marks = 435
            *    Average Marks = 87
            *    Percentage = 87

            --------------- Caution ---------------
            * Note to instructor: The example values provided (95, 76, 58, 90, 89) do not yield the result shown (Total = 435, Average = 87, Percentage = 87).
            * The correct calculations for these values are:
            *     Total = 408
            *     Average = 81.6
            *     Percentage = 81.6%
            ----------------------------------------

*/

/* -------------------------------- solution -------------------------------- */
// let total = 0;

// for (let i = 0; i < 5; i++) {
//     const marks = enterNumber(`Enter Marks of Subject ${i + 1}: `)
//     total += marks;
// }

// const average = total / 5;
// const percentage = (total / 500) * 100;

// console.log(`Total marks = ${total}`);
// console.log(`Average Marks = ${average}`);
// console.log(`Percentage = ${percentage}%`);


/* -------------------------------------------------------------------------- */
/*                                    Todo                                    */
/* -------------------------------------------------------------------------- */

/*
    13-Write a program to input month number and print number of days in that month.
        Example:
            Input: Month Number: 1
            Output:  Days in Month: 31

*/

/* -------------------------------- solution -------------------------------- */

// const monthNumber = enterNumber("Please Enter Month Number: ")

// switch (monthNumber) {
//     case 1: case 3: case 5: case 7: case 8: case 10: case 12:
//         console.log('Days in Month: 31')
//         break;
//     case 4: case 6: case 9: case 11:
//         console.log('Days in Month: 30')
//         break;
//     case 2:
//         console.log('Days in Month: 28 or 29') // February can have 28 or 29 days depending on leap year
//         break;
//     default:
//         console.log("Invalid month number! Please enter a number between 1 and 12.")
//         break;
// }


/* -------------------------------------------------------------------------- */
/*                                    Todo                                    */
/* -------------------------------------------------------------------------- */

/*
    Todo:

    14 - Write a program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer, Find percentage and grade

        Percentage >= 90%: Grad A
        Percentage >= 80%: Grad B
        Percentage >= 70%: Grad C
        Percentage >= 60%: Grad D
        Percentage >= 40%: Grad E
        Percentage < 40%: Grad F

*/

/* -------------------------------- solution -------------------------------- */

// let subjects = ["Physics", "Chemistry", "Biology", "Mathematics", "Computer"]

// for (let i = 0; i < 5; i++) {
//     let mark = enterNumber(`Please Enter ${subjects[i]} Mark: `)

// /*
// --------------- Caution ---------------
// * Note to instructor:
// * Since no instructions were given on calculating the percentage, I assumed it matches the grade directly, with 100 as the maximum.
// ----------------------------------------
// */

//     if (mark >= 90) console.log("Grad A")
//     else if (mark >= 80) console.log("Grad B")
//     else if (mark >= 70) console.log("Grad C")
//     else if (mark >= 60) console.log("Grad D")
//     else if (mark >= 40) console.log("Grad E")
//     else console.log("Grad F")
// }


/* -------------------------------------------------------------------------- */
/*                                    Todo                                    */
/* -------------------------------------------------------------------------- */

/*
    Todo:

Using switch case

15- Write a program to print total number of days in month

    ---------------- Solved ----------------
    * Note to instructor:
    * Question Number 13
    ----------------------------------------

*/

/* -------------------------------------------------------------------------- */
/*                                    Todo                                    */
/* -------------------------------------------------------------------------- */

// 16- Write a program to check whether an alphabet is vowel or consonant

/* -------------------------------- solution -------------------------------- */

// const char = promptUser("Please Enter a Character: ")

// switch (char) {
//     case "a": case "e": case "o": case "i": case "u":
//         console.log("Vowel");
//         break;

//     default:
//         console.log("Consonant");
//         break;
// }

/* -------------------------------------------------------------------------- */
/*                                    Todo                                    */
/* -------------------------------------------------------------------------- */

// 17- Write a program to find maximum between two numbers

/* -------------------------------- solution -------------------------------- */

// const n1 = enterNumber("Please Enter 1st number: ")
// const n2 = enterNumber("Please Enter 2nd number: ")

// switch (true) {
//     case n1 > n2:
//         console.log(n1 + " is Greater than " + n2);
//         break;

//     case n1 < n2:
//         console.log(n2 + " is Greater than " + n1);
//         break;

//     case n1 == n2:
//         console.log(n1 + " equal " + n2);
//         break;

//     default:
//         console.log("Wrong Inputs");
//         break;
// }

/* -------------------------------------------------------------------------- */
/*                                    Todo                                    */
/* -------------------------------------------------------------------------- */

// 18- Write a program to check whether a number is even or odd

/* -------------------------------- solution -------------------------------- */

// const input = enterNumber()

// switch (true) {
//     case input % 2 == 0:
//         console.log("even");
//         break;

//     default:
//         console.log("odd");
//         break;
// }

/* -------------------------------------------------------------------------- */
/*                                    Todo                                    */
/* -------------------------------------------------------------------------- */

// 19- Write a program to check whether a number is positive or negative or zero

/* -------------------------------- solution -------------------------------- */

// const input = enterNumber()

// switch (true) {
//     case input > 0:
//         console.log("positive");
//         break;
//     case input < 0:
//         console.log("negative");
//         break;
//     case input == 0:
//         console.log("zero");
//         break;
//     default:
//         console.log("wrong inputs");
//         break;
// }

/* -------------------------------------------------------------------------- */
/*                                    Todo                                    */
/* -------------------------------------------------------------------------- */

// 20- Write a program to create Simple Calculator

/* -------------------------------- solution -------------------------------- */

const mathOpr = promptUser("Please Enter your Math Operator: (+, -, /, *)")

const n1 = enterNumber("Please Enter 1st Number: ")

const n2 = enterNumber("Please Enter 2nd Number: ")


switch (mathOpr) {
    case "+":
        console.log(`${n1} + ${n1} = ${n1 + n2}`);
        break;
    case "-":
        console.log(`${n1} - ${n1} = ${n1 - n2}`);
        break;
    case "/":
        console.log(`${n1} / ${n1} = ${n1 / n2}`);
        break;
    case "*":
        console.log(`${n1} * ${n1} = ${n1 * n2}`);
        break;
    default:
        console.log("wrong inputs");
        break;
}










