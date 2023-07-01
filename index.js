// Coding Steps:
//1.
let ages = [3,9,23,64,2,8,28,93];
let newAge = ages[ages.length - 1]- ages[0]; // the value of the first element is subtracted from the value of last element.
console.log(newAge);
ages.push(89); // age added to the end.

console.log(ages.length);

 ages = [3,9,23,64,2,8,28,93,89];
newAge = ages[ages.length - 1]- ages[0];
console.log(newAge);
 
for (let i= 0; i < ages.length; i++){

    console.log(ages[i]);
}
function findAverage(array){
   let average = 0;
   for (let i = 0; i < array.length; i++){
    average += array[i];
   }
   average = average/ array.length;
   return average;
}
console.log("average age:", findAverage(ages));

//2.Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
//a.aUse a loop to iterate through the array and calculate the average number of letters per name.
//b.bUse a loop to iterate through the array again and concatenate all the names together, separated by spaces.

const names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
function averageLetter(array){
    let average = 0;
    //calculate the length of elements in array.
    for (let i = 0; i < array.length; i++){
     average += array[i].length;
    }
    average = average/ array.length;// calculate the average number of letters per name.
    return average;
 }

 console.log("average letter:", averageLetter(names));
 

//3. How do you access the last element of any array?
// Array.length - 1; is used to get the last element.
let fruits = ["banana","mango","orange","apple"];
console.log(fruits[fruits.length-1]); // 

 //4.How do you access the first element of any array?
  console.log(fruits[0]);// first element accessed.

//  5.Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
let newArray = [];
// added the length of each element in the array.
for(i = 0; i < names.length; i++){
  newArray.push(names[i].length);// I added  the length of each name to the nameLengths array.
}
console.log(newArray);



//6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
let sum = 0;
// calculate the sum of all the elements.
  for (let i = 0; i < names.length; i++) {
    let currentArray = newArray[i];
      sum += currentArray;
 }
 console.log(sum);
 

// 7.Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').
let string = 'Hello World';
let answer = '';
function wordMachine(string, n){
    for(let i = 0; i < n; i++){
        answer = answer + string;
    }
    return answer
}
console.log(wordMachine(string, 3)); // argument passed in number.

//8.Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the 
//first and the last name separated by a space.
function fullName(firstName,lastName){
  let firstName = "Ram";
   let lastName = "Giri";
 }
console.log(fullName(firstName + ' ' + lastName));

//9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

function arrayOfNumbers(array){
    let sum = 0;
    // calculate the sum of array
    for (let i = o; i < array.length; i++){
        sum += array[i]; // sum + array[i]
    }
    if (sum > 100){
        return true;
        
    } else
    return false;
    
} 
console.log("It is false.");

//10.Write a function that takes an array of numbers and returns the average of all the elements in the array.
function average(array){
    let sum = 0;
    // calculate the sum of array.
    for (let i = o; i < array.length; i++){
        sum += array[i];
        
    }
    let average = sum / array.length; // calculate the average by the element length or total number of index.
        return average;
     
}
console.log(average);

//11.Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
function takesTwoArrays(array1,array2){
    let sum = 0;
    // calculate the sum of array1.
    for (let i = o; i < array1.length; i++){
        sum += array1[i];
        
    }
    let average1 = sum / array1.length;
    
    }
// calculate the sum of array2
for (let i = o; i < array2.length; i++){
    sum += array2[i];
    
}
let average2 = sum / array2.length;
    
if(average1 > average2){  // Justifier the variables here.
    return true;
}else

{
    return false;
   
    } 
    



// 12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

function buyDrink(isHotOutside,moneyInPocket){
    if (isHotOutside = true &&  moneyInPocket > 10.50){
        return true;
    }
     else {

    return false;
}
}

// Here the boolean statement has been used to get true or false result. && operator has been used if the both of
//the values are true the result will be true.




//13. save function 
// customer will make a payment
// if the payment is successful
// ask customer if they want to save a payment
// if the card is valid for  a year save the payment otherwise
// populate message please renew your card


function cardPayment(card){
    if (cardPayment = true && cardExpiratiodate >= 1){
        console.log("Do you want to save your card.");
    } else if {
        console.log(alert("please Renew your card"));

    }
}