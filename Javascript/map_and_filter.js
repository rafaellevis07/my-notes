/* 
Docs:


Youtube:
https://www.youtube.com/watch?v=m55PTVUrlnA&list=PLDBdmkfPal-zzfEv7GnbvvTiHmuYSixtt&index=2&t=19s



================================================ Map and Filter */

/*
.map()      =>  it will return a modified array
.filter()   =>  it will return an array with selected items
*/

// Consider the array below
let names = ["Rafael", "Ester", "Daniel"];

// If I wanted to modify the array
names.map((name) => {
  return name + "1";
});

// This is how you would display in react
names.map((name) => {
  return <h1>{name}</h1>;
});

/*
On the example below we are using .filter() to a remove specific item from the array 
*/

let names2 = ["Rafael", "Ester", "Daniel", "Rafael", "Rafael"];

names.filter((name) => {
  return name !== "Rafael";
});
// => let names2 = ["Ester", "Daniel"]
