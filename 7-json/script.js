var person = {
  name: "Brad",
  age: 35,
  address:{
    street:"5 main st",
    city: "Boston"
  },
  children:["Brianna", "Nicholas"],
  email: function(){
    console.log("johndoe@gmail.com");
  }
}

//person = JSON.stringify(person);
//person = JSON.parse(person);

console.log(person.name);
console.log(person.email());

var people = [
  {
    name:"Brad",
    age: 35
  },
  {
    name:"John",
    age:40
  },
  {
    name:"Sara",
    age:25
  }
];

//console.log(people[1].age);
var output = '';
for(var i = 0;i < people.length;i++){
  //console.log(people[i].name);
  output += '<li>'+people[i].name+'</li>';
}
document.getElementById('people').innerHTML = output;
*/

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(xhttp.responseText);
      var people = response.people;

      var output = '';
      for(var i = 0;i < people.length;i++){
        output += '<li>'+people[i].name+'</li>';
      }
      document.getElementById('people').innerHTML = output;
    }
};
xhttp.open("GET", "people.json", true);
xhttp.send();
