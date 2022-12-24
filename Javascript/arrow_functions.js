/* 
Docs:


Youtube:
https://www.youtube.com/watch?v=m55PTVUrlnA&list=PLDBdmkfPal-zzfEv7GnbvvTiHmuYSixtt&index=2&t=19s



================================================ Arrow Functions */

// Normal function
// Use "export default" keyword to use the function in another file
export default function DoSomething() {}

// Arrow function
// Use "export" keyword to use the function in another file
export const DoSomething = () => {};

// Also very useful is Anonymous function
<button
  onClick={() => {
    console.log("hello world");
  }}
></button>;
