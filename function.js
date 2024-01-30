//Default
//euta default vale automatic pathaidine
const mul = (a = 2, b) => {
  return a * b;
};
const res = mul(undefined, 5);
console.log(res);
//value diyo vane thik cha natra 2 lincha a le

//parametrized
//use garya hunu paryo
const multi = (a = 2, b, c) => {
  return a * b * c;
};
const resu = multi(undefined, 5, 2);
console.log(resu);
//inline
//anonymous lie nam diye inline function ho

///closure
//returns hardcoded variable stored inside the function
//kei chiz kasailie dekhaunu chaina using function vane we use closure
//variable func bhitra  define garchau ani chalauchau
//override garna maildaina
const secret = () => {
  const password = "qwerty";
  return password;
};
console.log(secret());

//implicit
//return hatayara value return garne function
//return keyword use nagarne function
const add = (a, b) => a + b;
const result = add(3, 2);
console.log(result);

//explicit
//return use gareko
const addit = (a, b) => {
  return a + b;
};
const resul = add(3, 2);
console.log(resul);

//IIFE(Immediately invoked function expression)
//used mostly in scripts
//function suru huna rw siddina sath run hune
(function () {
  console.log("IIFE");
})();
(function (a, b) {
  console.log(a + b);
})(3, 4);
