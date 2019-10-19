module.exports = function multiply(first, second) {
  // GitHub: My solution
let num_First = first,
    num_Second = second;
let multiply = `${BigInt(num_First) * BigInt(num_Second)}`;  
return multiply;

}
