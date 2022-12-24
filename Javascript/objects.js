/* 
Docs:


Youtube:
https://www.youtube.com/watch?v=m55PTVUrlnA&list=PLDBdmkfPal-zzfEv7GnbvvTiHmuYSixtt&index=2&t=19s



================================================ Objects */

const person = {
  name: "Rafael",
  age: 33,
  isMarried: true,
};

const name1 = person.name;
const age1 = person.age;
const isMarried1 = person.isMarried;

/* If we destructure the object we can do all these lines in one line.
This is very useful in React
*/

const { name, age, isMarried } = person;

/* If I want to change one single specific value of an object, 
I use spread operator "..." and substitute the value desired.*/

const person2 = { ...person, name: "Jack" };

// Spread Operator also works with Arrays

const names = ["Rafael", "Ester", "Nathan", "Elise"];
const names2 = [...names, "Sara"];
