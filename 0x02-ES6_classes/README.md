# ES6 Classes

- 0-classroom.js: a script that exports a class named ClassRoom that accepts one attribute named maxStudentsSize (Number) and assigned to _maxStudentsSize.
- 1-make_classrooms.js: a script that imports the ClassRoom class from 0-classroom.js and exports a function named initializeRooms.
- 2-hbtn_course.js: a script that exports a class named HolbertonCourse. Each attribute must be stored in an "underscore" attribute version (ex: name is stored in _name).
- 3-currency.js: a script that exports a class named Currency. Implement a method named displayFullCurrency that will return the attributes in the format name (code).
- 4-pricing.js: a script that:
Imports the class Currency from 3-currency.js.
Export a class named Pricing.
Each attribute must be stored in an "underscore" attribute version (ex: name is stored in _name).
Implement a method named displayFullPrice that returns the attributes in the format amount currency_name (currency_code).
Implement a static method named convertPrice. It should accept two arguments: amount (Number), conversionRate (Number). The function should return the amount multiplied by the conversion rate.
- 5-building.js: a script that exports a class named Building. Each attribute must be stored in an "underscore" attribute version. Implement a getter for each attribute. Consider this class as an abstract class. And make sure that any class that extends from it should implement a method named evacuationWarningMessage.
- 6-sky_high.js: a script that imports Building from 4-building.js. Export a class named SkyHighBuilding that extends from Building.
- 7-airport.js: a script that exports a class named Airport. The default string description of the class should return the airport code.
- 8-hbtn_class.js: a script that exports a class named HolbertonClass.
Each attribute must be stored in an "underscore" attribute version (ex: name is stored in _name).
When the class is cast into a Number, it should return the size.
When the class is cast into a String, it should return the location.
- 9-hoisting.js: a fixed and working copy of a given code.
- 10-car.js: a script that exports a class named Car. Add a method named cloneCar. This method should return a new object of the class.
- 100-evcar.js: a script that imports Car from 10-car.js. Export a class named EVCar that extends the Car class. For privacy reasons, when cloneCar is called on an EVCar object, the object returned should be an instance of Car instead of EVCar.
