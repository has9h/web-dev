// alert('File linked');

var num1 = 35;
// alert(num1 + 1);

var string1 = '35';
// alert(string1 + 1);

// Arrays

var colors = new Array('red', 'yellow', 'green');
colors.push('green');

var numbers = [5, 77, 6, 'seven', 1, 55];
console.log(numbers.sort());
console.log(numbers.reverse());
console.log(numbers);

// Loops

numbers = [33, 54, 76, 34, 2, 6];

numbers.forEach(function(number){
    console.log(number);
});

// Object Literal

var person = {
    firstName: 'Brad',
    lastName: 'Traversy',
    age: 34,
    children: ['bro1','bro2', 'bro3', 'bro4'],
    address: {
        street: '555 Street',
        city: 'Boston',
        state: 'Massachusetts'
    },
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
}

console.log(person.children[0]);
console.log(person.address);
console.log(person.fullName());

// Object Constructor

var apple = new Object();
apple.color = 'red';
apple.shape = 'round';
apple.describe = function(){
    return this.shape + "ed " + this.color;
}

console.log(apple);
console.log(apple.describe());

// Constructor Patter
// Avoids having to declare an object over and over again

function Fruit(name, color, shape){
    this.name = name;
    this.color = color;
    this.shape = shape;
    this.describe = function(){
        return this.name + ' is the color ' + this.color;
    }
}

var apple = new Fruit('apple', 'green', 'round');
console.log(apple);
console.log(apple.describe());