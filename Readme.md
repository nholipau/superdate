# Superdate.js

Welcome to the docs of Superdate.js. A Node.js library that extends the main function of the Date javascript class.

# Solution

Some scenarios that could be achieved with Superdate.js:
- Every method that can be called in javascript builtin Date() class can also be called in Superdate.js.
- Optionally, developer can set workdays in order to perform further comparisons.
- It's possible to perform date comparisons.
- Different than javascript builtin Date() class, here you won't need to reinstance an object in order to compare dates. You could use the method setComparisonDate() and the retrieve it with getComparisonDate().
- This and much more is about to come.

# Object Construction

You can instance the object calling superdate class.
Example:

    const superdate = require('superdate-js');
	const d = new superdate();

You can insert an object with following properties in the class construction:

- **mainDate** - Defines the date to be considered (It has the same usage of the javascript Date class). If you omit it, the date considered will be current.

       const d = new superdate({
	       mainDate: '2023-06-02' // format should be the same as object Date from javascript
       });

- **workdays** - Optionally, the developer can set the workdays to the date chosen. The value needs to be an array with the day code. (0 = Sunday, 1 = Monday, etc.. , 6 = Saturday).

       const d = new superdate({
	       mainDate: '2023-06-02',
	       workdays: [1,2,3,4,5] // That from monday to saturday
       });

## Methods

superdate objects inherit all the methods from Date javascript class. Plus, it has some extended methods that help the developer in implementations

- ***setComparisonDate()*** - It's a function to escape from main date template and set a new one for comparisons.
	- **Parameter** - It can be the same parameters of Date() constructor.
	- **Returns** - true if succeeded.
- ***getComparisonDate()*** - It's used to retrieve the date object seted in the function setComparisonDate() to perform comparisons.
	- **Parameter** - none.
	- **Returns** - A Date object as setted in function setComparisonDate().
- ***getWeekDay()*** - It's a function to get the day of the week based on the date defined in the class construction.
	- **Parameter** - none.
	- **Returns** - The name of the day of the week (Sunday, Monday, Tuesday, Wednesday, Thursday, Friday or Saturday).
	<br>
		**Example:**

       const sd = new superdate({
	       mainDate: '2023-06-02' // format should be the same as object Date from javascript
       });
       sd.setComparisonDate('2023-06-06');
	<hr>
- ***getLastDay()*** - Function that retrieves the last day of month based on user input.
	- **Parameter** - Any date as the Date() call format.
	- **Returns** - A date Object.
- ***getWorkDays()*** - It's a function to get all the workdays based on the date defined in the class construction.
	- **Parameter** - none.
	- **Returns** - An array with the days name e.g [Monday, Tuesday, Wednesday, Thursday, Friday].
- ***isWorkDay()*** - It's a function to check whether a date is a work day, based on the atribute workdays defined in the class construction.
	- **Parameter** - none.
	- **Returns** - true if it's a work day and false if it's not.

# Next improvements
We will continuously add more functions to the package, but one of our main goals is switching it to Typescript. So, if you like to collaborate, please check our pages: 

- **Github Repository**:
https://github.com/nholipau/superdate

- **NPM Package**:
https://www.npmjs.com/package/superdate-js