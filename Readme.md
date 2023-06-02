# Superdate.js

Hi! This is the first version of Superdate.js. A Node.js library that extends the main function of the Date javascript class.


# Object Construction

You can instance the object calling dateOptions class.
Example:

    const d = new superdate();

You can insert an object with following properties in the class construction:

- **date** - Defines the date to be considered (It has the same usage of the javascript Date class). If you omit it, the date considered will be current.

       const d = new superdate({
	       date: '2023-06-02' // format should be the same as object Date from javascript
       });

- **workdays** - Optionally, the developer can set the workdays to the date chosen. The value needs to be an array with the day code. (0 = Sunday, 1 = Monday, etc.. , 6 = Saturday).

       const d = new superdate({
	       date: '2023-06-02',
	       workdays: [1,2,3,4,5] // That from monday to saturday
       });

## Methods

dateOptions objects inherit all the methods from Date javascript class. Plus, it has some extended methods that help the developer in implementations

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
- **isWorkDay()** - It's a function to check whether a date is a work day, based on the atribute workdays defined in the class construction.
		- **Parameter** - none.
		- **Returns** - true if it's a work day and false if it's not.
- 

# Next improvements
We will add more functions to the package, but one of our main goals is swithing it to Typescript. So, if you like to collaborate, please check our repo through the link https://github.com/nholipau/superdate
