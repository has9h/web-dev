/* JavaScript code here */
                                                //Task 1

console.log("External Javascript");

                                                //Task 2

function sumArray(arr){
    console.log("Task 2:");
    var sum = 0;
    arr.forEach(function(value, index){
        sum = sum + value;
    });
    return sum;
}

console.log(sumArray([2, 4, 5, 6, 7]));
console.log(sumArray([2, 43, 5, 6, 7]));

                                                //Task 3

function checkEmail(emailString){
    console.log("Task 3:");
    var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    var match = emailFormat.test(emailString);
    return match;
}

console.log(checkEmail("has9h2@gmail.com"));
console.log(checkEmail("has9h2gmail.com"));

                                                //Task 4

var library = [
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games',
       readingStatus: false
   }];

function getReadingStatus(index){
    console.log("Task 4:");
    var book = library[index];
    return book.readingStatus;
    // return library[index].readingStatus;                                     //Alternative, succint;
}

console.log(getReadingStatus(1));
console.log(getReadingStatus(0));
console.log(getReadingStatus(2));

                                                //Task 5
//5a:

var cart = [
   {
       name: 'Shoes',
       price: 560,
       quantity: 4
   },
   {
       name: 'Regular Tees',
       price: 455.50,
       quantity: 6
   },
   {
       name: 'Socks',
       price: 65.99,
       quantity: 2
   }];

function addItem(newItem){
    console.log("5a:");
    cart.push(newItem);
    console.log(cart);
}

var newItem = {
    name: 'Watch',
    price: 65,
    quantity: 1
};

addItem(newItem);

//5b:

function sortCart(keyname){
    console.log("5b:");

    if(keyname == "name"){
        console.log("Sorting by name:");
        cart.sort(function(a, b){
        if(a.name < b.name){
            return -1;
        }
        if(a.name > b.name){
            return 1;
        }
        return 0;
        });
    }

    if(keyname == "price"){
        console.log("Sorting by price:");
        cart.sort(function(a, b) {
           return a.price - b.price;
        });
    }

    if(keyname == "quantity"){
        console.log("Sorting by quantity:");
        cart.sort(function(a, b) {
           return a.quantity - b.quantity;
        });
    }

    console.log(cart);
}

sortCart("name");
sortCart("price");
sortCart("quantity");

//5c:

function findByName(name){
    console.log("5c:");

    var itemSet = cart.filter(obj => {
        return obj.name.includes(name);
    });

    console.log(itemSet);
}

findByName("Shoes");
findByName("Sho");
findByName("Regular");

//5d:

function totalPrice(){
    console.log("5d:");

    var total = 0;
    var temp = 0;

    cart.forEach(function (i, index){
        temp = i.quantity * i.price;
        total = total + temp;
    });
    console.log("Total cost of cart: " + total + " units");
}

totalPrice();
