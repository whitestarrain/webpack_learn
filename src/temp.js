import axios from "axios";
const v1 = 100;
const v2 = 1000;
const _v1 = v1;
console.log(axios)
export { _v1 as v1 };
export { v2 as v2 }
export const hello = function sayHello(para1) {
  console.log('hello');
  console.log(para1);
};
