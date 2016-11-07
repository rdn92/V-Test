// function hello() {
//
//   console.log('unutar anon' + cevap);
// }
// var cevap = " cevap";
// hello();
// console.log('van anon' + cevap);
//
// var jsonObj = { name: "smbdy", lname: "blah"};
// var jsonObjArray = [{ name: "smbdy", lname: "blah"}, { name: "smbdyelse", lname: "blah"}]

// function PersonConstructor() {
// }
//
// PersonConstructor.prototype = {
//     first_name: "fname",
//     last_name: "lname",
//     gender: "male"
// };
//
// var personInstance = new PersonConstructor();

var person = {
    first_name: null,
    last_name: null,
    gender: null
};

person.staticVar = "cevap";
person.staticMeth = function() {

};

var personObj  = Object.create(person);

var employee = Object.create(person, {
    id: {
        value: null,
        enumerable: true,
        configurable: true,
        writable: true
    }
});

 // var employeeObj = Object.create(Employee);
 //
 // var Person = BaseObject.extend({ // using only properties that are copied over
 //     firstName: null,
 //     lastName: null,
 //     _construct: function(firstName, lastName){
 //         this.firstName = firstName;
 //         this.lastName = lastName;
 //     },
 //     toString: function(){
 //         return this.firstName + " " + this.lastName;
 //     }
 // });
 //
 // var Employee = Person.extend(null, { // using only property descriptors
 //     id: { // the employees’s id
 //         value: null,
 //         enumerable: true,
 //         configurable: false, // can’t be deleted
 //         writable: true
 //     },
 //     _construct: { // has only a value, is not enumerable, writable, or deletable
 //         value: function(firstName, lastName, id){
 //             this._super(Employee, arguments); // calls the parent constructor with all received arguments
 //             this.id = id;
 //         }
 //     },
 //
 //     toString: {
 //         value: function(){
 //             return "[id: " + this.id + " / " +
 //                 this._super(Employee, "toString") + "]"; // calls parent "toString"
 //         }
 //     }
 // });
 //
 // // create an instance of Employee
 // var david = Employee.create("David", "Aurelio", 1);
 // david.toString(); // "[id: 1 / David Aurelio]"

