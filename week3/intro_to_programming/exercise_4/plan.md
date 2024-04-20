
**Objective**

User is able to 
1. Input numbers
2. View 
    a. the sum of the numbers inputted
    b. the difference between the largest and smallest number in the input

**Constraints**
    A. User is allowed to input only numbers, spaces and commas
    B. User is required to input at least 2 numbers
    C. Numbers shall be separated by commas

**Variables**
INITIALIZE
- input
- numbers (array of numbers the user inputted in "number" format)
- sum (sum all of the numbers)
- delta (substraction the lowest number from the highest one in the 'numbers' array)

**Functions**
- sumAndDisplayNumbers()
- substractAndDisplayNumbers()
- displayResult()

**Plan / Framework**

1. Input numbers ==> 

    1. Create a layout
       1. Basic layout
       2. Create an input (id is 'numbersInput')
       3. Create "Display the sum" and "Display max and min delta" buttons
    2. Create fancy styles
    3. Create a script 
       1. Get and Store the input 
          1. create the variable 'input' 
          2. assign the value of <input> tag (id 'numbersInput')
       2. Check which button was clicked

2. View 
    a. the sum of the numbers inputted ==> 
    
        1. Get an array of numbers inputted
           1. create var "numbers", 
           2. split the input by a comma
           3. map to numbers array (with Number() method)
        2. Get the sum of numbers in the array
           1. create the variable "sum"
           2. create a loop iterating through 'numbers' array
           3. each iteration adds the number up to "sum" variable
        3. Make invoking a function when onclicking the "Display the sum"
           1. display the sum with assigning the value of 'sum' to the specific html element

    b. the difference between the largest and smallest number in the input ==>
    
        4. calculate the delta
           1. get the highest number in 'numbers' array with method  'Math.max(...number)'
           2. get the lowest number in 'numbers' array with method  'Math.min(...number)'
           3. get the delta 
        5. Make invoking a function when onclick
           1.  display the delta with assigning the value of 'delta' to the specific html element
   
A. User is allowed to input only numbers

   1. Use if...else statement. 
   2. If "ifNaN" function that checks to determine if a value does not convert to a number. The arg is 'input'
   3. 

B. User is required to input at least 2 numbers
    
    1. Make sure that the length of 'numbers' array in every function is equal or more than 2
    2. If not then use "alert" function to show a system message "Please enter numbers"

    


