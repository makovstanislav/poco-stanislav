**Accomplish**

User is able to 

1. Input numbers
2. View 
    a. the sum of the numbers inputted
    b. the difference between the largest and smallest number in the input

**Constraints**
    A. User is allowed to input only digits
    B. User is required to input at least 2 numbers
    C. User shall separate numbers by commas

**Plan / Framework**

1. Input numbers ==> 

    1. Create an html layout
       1. Basic layout
       2. Create an input 
       3. Create "Display the sum" and "Display max and min delta" buttons
    2. Add styles
    3. Add script
       1. Save the result
       2. Make sure the result is in digit

2. View 
    a. the sum of the numbers inputted ==> 
    
        1. convert input into a numbers array
           1. create var "numbers", 
           2. split the input by a comma
           3. map to numbers array (with Number() method)
        2. calculate the sum of numbers in the array
           1. create the variable "sum"
           2. create a loop iterating through 'numbers' array
           3. each iteration adds the number up to "sum" variable
        3. make invoking a function when onclick
        4. display

    b. the difference between the largest and smallest number in the input ==>
    
        5. convert input to numbers array
        6. calculate the delta
        7. make invoking a function when onclick
        8. display
   

    

    


