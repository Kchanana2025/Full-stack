
function sum(val1, val2) {
  return val1 + val2;
}
function subs(val1, val2) {
  return val1 - val2;
}
function mul(val1, val2) {
  return val1 * val2;
}
function div(val1, val2) {
  return val1 / val2;
}
function doarithmetic(val1, val2, arithmetic)//no need to mention the data type of variables you are accepting
{
  return arithmetic(val1, val2);
}

var ans = doarithmetic(2, 3, sum);
console.log(ans);