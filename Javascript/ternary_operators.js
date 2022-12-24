/* 
Docs:


Youtube:
https://www.youtube.com/watch?v=m55PTVUrlnA&list=PLDBdmkfPal-zzfEv7GnbvvTiHmuYSixtt&index=2&t=19s



================================================ Ternary Operators */

/*This was created to minimize the lines of code in React specially


Instead of a if statement */

let age = 10;
let name = "Pedro";

if (age > 10) {
  name = "Pedro";
} else {
  name = "Jack";
}

// We could use:

let age1 = 16;
let name1 = age1 > 10 ? "Rafael" : "Jack";

// On react we would see this as:

const Componet = () => {
  return age1 > 10 ? <div> Pedro </div> : <div> Jack </div>;
};

/* Ternary operators
    • And = &&
    • Or = || 
    • if/else operator = ? :
*/
