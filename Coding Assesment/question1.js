// Question 1
// Define an array of numbers (use any random numbers). Write a program in Javascript to print only the even numbers of the array. Do not use any library functions, need to do via for loops only


function getEvenNumbers() {
    var arr = [1, 2, 3, 4, 5, 6]
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            document.write(arr[i] + '<br>');
        }
    }
}
getEvenNumbers();
