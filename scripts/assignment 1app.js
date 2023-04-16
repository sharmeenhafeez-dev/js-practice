
// Task 2:
// calculate the fitrah amount, first, ask the user to enter the total number of family
// members using the prompt and store the value in a variable called
// "familyMembers". Next, ask the user to choose a fitrah method by providing them
// options using the prompt, and store the selected method and its price in variables.
// Then, use an if-else block to check the user's input and calculate the fitrah amount
// by multiplying the selected method's price with the number of family members.
// Finally, display the calculated fitrah amount using an alert message.


//......................TASK 2...........................

//............... Calculate Fitra Amount...................

// var fitraAmount = 320  // According to Mufti Muneeb

// ......... Enter The Total Number Of Family Members........

// var userFamilyMembers = +prompt("Enter Your Total Family Members")

// console.log(userFamilyMembers)


// // ...........Choose Fitrah Method............. 


// var selectFitraPriceMethod = +prompt("Enter Your Fitrah Method  \n1:GANDUM = 250 \n2:JOO = 450 \n3:KHAJOOR = 2100 \n4:KISHMISH = 2800",250)


// // ........Store The Selected Method And Its Price In Variables......


// var fitraAmountGandum = 250
// var fitraAmountjoo = 450
// var fitraAmountKhajoor = 2100
// var fitraAmountKishmish = 2800


// //  .....................if-else block ...................


// if (selectFitraPriceMethod === 250 ) {
//     console.log("Choose Gandum")


// }
// else if (selectFitraPriceMethod === 450)
//     console.log("Choose joo")
// else if (selectFitraPriceMethod === 2100)
//     console.log("Choose Khajoor")
// else if (selectFitraPriceMethod === 2800)
//     console.log("Choose Kishmish")

//  else {
//     alert("Please Diya Gaya Fitra Amount Select Kry")
//        }

// // .........................Calculate The Fitrah Amount............

// if (selectFitraPriceMethod === 250|| selectFitraPriceMethod === 450 || selectFitraPriceMethod === 2100 || selectFitraPriceMethod === 2800) {
//     var totalFitraAmount = (selectFitraPriceMethod * userFamilyMembers)
// console.log("Your Total Fitra is: " + totalFitraAmount)

// // ............... ........Alert Message..................

//     alert("Your Total Fitra is: " + totalFitraAmount)
// }







// Task 4:
// Create a program that asks the user to enter a name, and then prints out the name
// with the first letter capitalized (Make your name in capitalized case).

//................... TASK 4...........



// FIRST METHOD

// .........................User Name.............................

// var userName  = prompt("ENTER YOUR NAME", "ahrah")
// console.log(userName)

// // ..........................First Letter......................

// var userNameFirstLetter = ( userName[0])

// // .... First Letter Capitilized Add Slice Words........

// console.log(userNameFirstLetter.toUpperCase() + userName.slice(1))

// // ..........................THANKS.....................

// alert("Thanks")


// SECOND METHOD

//  ..................... USER INPUT ..............................

// var userNameInput =prompt("Enter Your Name", "rawaha")
// console.log(userNameInput)

// // ....................... FIRST LETTER CAPITAL.......................

// userNameInput[0] = userNameInput[0].toUpperCase() 
// console.log(userNameInput[0].toUpperCase())

// // ............................... USE OF SLICE.........................

// userNameInput.slice(1)
// console.log(userNameInput.slice(1))

// // .......FIRST LETER OR SLICE LETTERS CONCATINATION.IN NEW VARIABLE.........

// var userNameCaptilized= userNameInput[0].toUpperCase() + userNameInput.slice(1)
// console.log(userNameCaptilized)

// // ...............SHOW NAME ON DOCUMENT.......................

// document.write('<h1>' + userNameCaptilized + '</h1>');

// alert ("Thanks For Your Input")





// Task 3:
// Create a program that generates a random number between 1 and 10 and stores it
// in a variable called "secretNumber". Then, ask the user to enter a guess for the
// secret number using a prompt.
// Use an if-else statement to check if the user's guess matches the secret number. If
// the guess is correct, display a message using an alert saying "Congratulations! You
// guessed the secret number". Otherwise, if the guess is too high or too low, display
// an appropriate message informing the user to guess again.



// ...........................TASK 3.........................

// ................... Guess Random Number Between 1 and 10....................

// var secretNumber = 6 ;
// // ....... Ask The User To Enter A Guess For The Secret Number..........

// var userNumber = +prompt("Enter Your Guess For The Secret Number (Between 1 and 10):",0);
// console.log(userNumber)

// // .................User's Guess Matches The Secret Number Or Not...........

// if (userNumber === secretNumber)

// // .................. If The Guess Is Correct.................
// {
//     alert("Congratulations! You Guessed The Secret Number");
//     console.log("Congratulations! You guessed the secret number");
// }

// // .................If the guess is too high...............

// else if (userNumber > secretNumber)
// alert("Your guess is too high. Please try again!");
//     // console.log("you loss")

// // .................... If the guess is too low................
// else {
//     alert("Your Guess Is Too Low. Please Try Again!")
// }





// Task 8:
// You have an array of that contains the name of Pakistani Teams Player selected for
// WorldCup (15 Players) named as WorldCupSquad. Now tomorrow we have a match with
// India, So make an array of final team players (11 Players) that will be playing in tomorrows
// match from the WorldCupSquad array.
// (Hint : Make sure it should not disturb the array that contains 15 players instead you have
// to make a copy of this array)


// ...................................TASK 8.........................

// // ........................... WorldCupSquad Array...............


// var WorldCupSquad = ["1 Players","2 Players","3 Players","4 Players","5 Players",
//                     "6 Players","7 Players","8 Players","9 Players","10 Players",
//                     "11 Players","12 Players","13 Players","14 Players","15 Players"]


// //.............finalTeamPlayers ..............

//  var finalTeamPlayers = WorldCupSquad.slice(0,11) 
  
//  console.log(WorldCupSquad,finalTeamPlayers)                





// Task 7:
// Create a program that asks the user for their nationality, gender, and age using the prompt
// function. The program should then use nested if-else statements to determine if the
// person is eligible to vote.
// First, the program should check if the person is Pakistani or Indian. If they are not, the
// program should display a message saying they are not eligible to vote.
// If they are Pakistani or Indian, the program should then check their gender. If the person is
// male and over the age of 18, they are eligible to vote. If the person is female and over the
// age of 18, the program should ask if they are married. If they are married, they are eligible
// to vote. If they are not married, they are not eligible to vote.
// If the person is under 18, the program should display a message saying they are not eligible
// to vote.

// // ........................Text 7.......................

//     var nationality = prompt("Please enter your Nationality:")
//     var age = +prompt("Please Enter Your Age:")
//     var gender = prompt("Please Enter Your Gender (Male Or Female):")

// //........................CHECK NATIONALITY.................

//     //.......................PAKISTANI......................

//     if (nationality.toLowerCase() ===  "pakistani")
    
//     //..................AGE CONFIRMATION.....................
//     {
//         if (age >= 18)
        
//   //.....................GENDER CONFIRMATION..................     
       
//   //.........................MALE GENDER......................
//   {
//             if (gender.toLowerCase() === "male") {
//                 console.log("You Are Eligible To Vote.")
//                 alert ("You Are Eligible To Vote.")

//   //.........................FEMALE GENDER......................  

//             } else if (gender.toLowerCase() === "female")
   
//    //......................STATUS CHECK YES OR NO................         
//             {
//                 var isMarried = prompt("Are You Married? (yes or no)")

//   //..................................YES........................    

//                 if (isMarried.toLowerCase() === "yes")
//                  {
//                     console.log("You Are Eligible To Vote.")
//                     alert ("You Are Eligible To Vote.")
//                 }

// //....................................NO........................

//                 else {
//                     console.log("You Are Not Eligible To Vote.Because You Are Unmarried")
//                     alert ("You Are Not Eligible To Vote.Because You Are Unmarried")
//                 }
//             } 
// //..................................UNDER AGE...................

//         } else {
//             console.log("You Are Not Eligible To Vote As You Are Under 18.")
//             alert ("You Are Not Eligible To Vote As You Are Under 18.")
//         }

// //...............................NOT PAKISTANI......................


//     } else if(nationality.toLowerCase() === "indian") {
//         console.log("You Are Not Eligible To Vote Non Pakistani.")
//         alert("You Are Not Eligible To Vote Because You Are Not Pakistani.")
//     }



// Tsak 5:
// In this task, you will be creating two empty arrays called "contactNumbers" and
// "contactNames". Using the prompt, you will ask the user to enter a contact number
// and contact name. You will then push these values into their respective arrays
// using the push method. After adding all the contacts, you will display the contact
// numbers and names in the console. To do this, you will need to use a for loop to
// iterate through both arrays and log each element to the console.
// Make sure to use descriptive variable names and comment on your code for clarity.


//  ........................Text 5.......................

//..................... creating two empty...............

// var contactName = []
// var contactNumber = []

// //...................Get Contacts From User...............

// var getContactsFromUser = 3

// //.......................For Loop.........................

// for (var i=0; i<3; i++)
// {
// //...............Get No. From User Through Prompt............ 

// var userName = prompt("Enter Your Names")
// var userNumber = +prompt("Enter Your Number")

// //................Push User NO. Into Empty Array............
// contactName.push(userName)
// contactNumber.push(userNumber)
// }

// //...........Loop Again And Show All No.s In Console Which I Get...........
// // .............From User In The Var Name "contactNumber" Using ...........
// //....................".length" Method To Collect All No.s................

// for(var i=0;i<contactNumber.length;i++){
//     console.log(" contactName :"+ contactName[i] +" contactNumber:"+ contactNumber [i])
// }






// Task 6:
// Create an Array that contains different products, and get input from the user in which you
// ask your user to give the position of that element he/she wants. Now remove that Item
// from your array and console the removed item, Also display the remaining items in the
// array and total number of items remaining.


// ........................TASK 6.........................

// ...............Array that contains different products............

// var smartGadgets  = ["1:Laptop", "2:Smartphone", "3:Tablet","4:Headphones", "5:Smartwatch", "6:Airports" ,"7:Handfree","8:Desktop"];
// console. log ("SmartGadgets  in array" ,smartGadgets  ,)
// console.log("Array length",smartGadgets.length)


// // .............................Pick Your Smart Gadgets................

// var usersmartGadgetSelection = +prompt("Pick Your Smart Gadgets:(Select Any No (1-8) \n1:Laptop \n2:Smartphone \n3:Tablet \n4:Headphones  \n5:Smartwatch \n6:Airports  \n7:Handfree \n8:Desktop" )
 

// // ......................Remove Gadget Using Splice ...............

// var removedsmartGadget = smartGadgets.splice (usersmartGadgetSelection -1,1)

// alert( smartGadgets  , usersmartGadgetSelection -1,1)   

// // ...................Console all Things........................... 

// console.log("Removed SmartGadgets :", removedsmartGadget);
// console.log("Remaining Smart Gadgets :", smartGadgets );
// console.log("Total number of items remaining:", smartGadgets.length);



// ................................THE END..............................


