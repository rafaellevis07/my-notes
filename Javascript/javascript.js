// functions
const myFunc = () => {};

const myFunc2 = (name, age) => {
  console.log(name + " " + age);
  return "RAFA GAY";
};

let x = myFunc2("rafa", 33);

let z = x === y ? 1 : 2;

let o1 = { name: "rafa" };

let o2 = { age: 33, ...o1 };

//============= Promises

let myPromise = new Promise((res, rej) => {
  //....

  // res(123);
  rej("some error");
});

myPromise
  .then((data) => {
    // console.log(data);
  })
  .catch((err) => {
    console.log("error is: " + err);
  });
