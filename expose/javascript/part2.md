Question 1: '3' is printed out at line 12. This is because *i* is declared with the **var** keyword, meaning *i* is not loop local so it can be accessed outside of the loop that it is defined in. As such, the final value of *i* at the end of the loop is printed, which is 3 due to the provided list in line 19.

Question 2: '150' is printed out at line 13. Similar to question 1, notice that the variable in question **discountedPrice** is declared with the *var* keyword. This means that discountedPrice is either function-scoped or global-scoped. In the context of this code, **discountedPrice** is function-scoped. Since line 13 is inside of the function, the code prints the variable that is assigned at the end of the for loop, which is what the variable is by the time line 13 is run.

Question 3: '150' is printed at line 14. This is similar to question 3, as **finalPrice** is declared with the *var* keyword. Hence, it is visible to line 14 which is still inside of the function that **finalPrice** is declared in. 150 is what the variable is defined as by the time line 14 is run.

Question 4: '[50, 100, 150]' will be returned. This code causes no errors, as just like Question 3, **discounted** is declared inside of the function and is can be seen by the return statement of the same function. What **discounted** ends up being by the time of the return statement is an array of the initial prices having the discount being applied to them. In this case, a 50% discount is put on the items in the array, halving the prices which is returned.

Question 5: The code causes an error. This is due to the fact that, unlike in Question 1, *i* is declared with the **let** keyword meaning that the scope is limited to the for loop. As such, *i* will not be defined outside of it, meaning line 12 does not have access to it and gives an error.

Question 6: The code causes an error in a similar fashion to Question 5. The variable in question, **discountedPrice**, is declared with the **let** keyword inside of a for loop. Due to the fact that line 13 attempts to use this variable outside of the for loop, an error occurs since the variable's scope is not outside of the function.

Question 7: '150' will be printed, which is the same case as its counterpart in question 3. This is because even though the variable is defined with the **let** keyword as the previous two questions, the actual declaration takes place outside of the for loop and at the base of the funtion. Hence, the variable has a function-scope and can be accessed in line 14, which makes the print to what we see.

Question 8: '[50, 100, 150]' will be returned just like as in Question 4. The only difference being that the variables are declared with the **let** keyword, but this has no affect on the return value itself. The **discounted** variable is declared with **let**, yet since it is declared at the base of the function, the return statement has no issue with running it, and the code works as intended. 

Question 9: The code causes an error. line 11 attemps to print out the value of *i*, but this variable has been declared with **let**. Due to this, the scope is limited to the for loop code block but line 11 is outside of this. As a result, line 11 does not have visibility to the definition of *i*, giving an error.

Question 10: '3' is printed out. Line 12 looks for the variable **length** which is defined with a const keyword at the same level of the function as line 12. This means that this line has access/visibility to the variable. The only constraint that this variable has is that it is a const, meaning that it cannot be reassigned at all during the rest of the code. This is not a problem, as **length** is never reassigned to another value. Hence, the code prints out prices.length which by looking at line 17 is just 3.

Question 11: '[50, 100, 150]' is returned. Although the for loop was changed since the previous question that asked the same thing, the core functinality remains the same. The discount is applied in a manner to the prices in the array, and a new array with these discounted prices are returned. The discount is essentially 50% off, so the prices are cut in half. This is what is returned in the function return statement.

Question 12:
A: student.name
B: student['Grad Year']
C: student.greeting()
D: student['Favorite Teacher'].name
E: student.courseLoad[0]

Question 13:
A. '3' + 2 outputs '32' because integers maps to their string representation. As such, the two strings '3' and '2' are concatenated together. 
B. '3' - 2 outputs 1. With the '-' operator, the string is converted to its integer counterpart. This expression is essentially 3-2, which is 1.
C. 3 + null outputs 3. null is convered to its integer countpart which is 0. This expression becomes 3 + 0, which equates to 3.
D. '3' + null outputs '3null'. '3' is a string, so null is converted to the string 'null'. The + operator serves as a concatenation between two strings, which creates the output.
E. true + 3 outputs 4. Javascript treats true as a 1 when using the + with a number. As such, this expression becomes 1 + 3 which equals 4.
F. false + null outputs 0. With the use of the + operator, Javascript converts the boolean to a 0 as well as null to a 0. This becomes 0 + 0 which is trivially 0.
G. '3' + undefined outputs '3undefined'. '3' is a string alongside the + operator, so undefined becomes the string 'undefined'. Hence the two strings '3' and 'undefined' are concatenated together to make the output.
H. '3' - undefined outputs NaN. Contrary to the previous expression, there is no way for JavaScript to subtract undefined, so NaN is outputted.

Question 14: 
A. '2' > 1 outputs true. This > operator between a string and a number converts the string to its 
B. '2' < '12' outputs false. When comparing two strings, JavaScript compares the first characters of both strings. Since 1 comes before 2, the comparison 2 < 1 is false lexicographically.
C. 2 == '2' outputs true. '2' is converted to its number version 2, so this experession becomes 2 == 2. This is true.
D. 2 === '2' outputs false. The === operator compares if the two comparators on both side of the operator are equal in terms of value and type. Since the number two is not the same as the string '2', this outputs false. 
E. true == 2 outputs false. true is converted to its number representation, 1, when comparing it with the number 2. 1 == 2 is false. 
F. true === Boolean(2) outputs false. Boolean(2) does not return the same type of boolean true, which is why is equates to false.

Question 15: 
The == operator can be called a more loose comparison, as like we have seen above, it can convert many different types to other types for the comparison to make sense. On the other hand, the === operator is more strict such that the types are taken into account immediately when doing the comparison. For instance, if a string was compared with a number, false would be outputted no matter what since they are not of the same type.

Question 17: The result will be '[2, 3, 6]'. The modifyArray function takes in both an array and another function which will be applied to each of the elements in the array parameter. In the modifyArray function, a for loop is used to iterate throughout the elements inside the given function. The doSomething function multiples its input by two, so as a whold the modifyArray function multipies all of the elements in the input array with the doSomething function.

Question 19: The code runs the function. The function first outputs 1 to the console. The next line says to output 2 to the console but in 1 second. In essence, the function schedules 2 to the console for a second when that line is run. In the mean time, the next line is run, which says to output 3 to the console in 0 second time aka instantly. However, JavaScript inherently has a minimum delay with the setTimeout function, so the next line is outputted before this output is put in the console. The next and last line of the function simply outputs 4 to the console. All of this is done before that 1 second has passed, so after all of these lines have run then does 2 get outputted to the console. The output is in the order of: 1, 4, 3, 2.

