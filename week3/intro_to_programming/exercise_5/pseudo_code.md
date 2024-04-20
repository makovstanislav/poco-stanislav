Problem
===
Find the day of the year for the given date. For example, January 1st would be 1, and December 31st is 365.

Constraints
===
- the input should be dd.mm
- dd min 1, max 31
- mm min 1 max 12

IMPLEMENTATION
===

INIT input
INIT day AS INTEGER
INIT monthIndex AS INTEGER
INIT lookUpTable – an object with 12 key-value pairs: month index and respective max number of days 
INIT errorMsg = "Please enter a date in dd.mm format"
INIT result AS INTEGER

PROMPT to enter dd.mm
GET input FROM user
// Validate
IF input is valid THEN
    // Calculate the day of the year
    SET day TO result
    FOR each key (month index) IN lookUpTable 
        IF less than monthIndex THEN 
            ADD numberOfDays TO result
        ENDIF
    ENDFOR
    DISPLAY result
ELSE
    DISPLAY errorMsg
ENDIF






