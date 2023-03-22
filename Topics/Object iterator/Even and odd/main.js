function sumTheArrays(naturalNumbers) {
  let evenNums = naturalNumbers.even;
  let oddNums = naturalNumbers.odd;
  return evenNums.map((el, i) => {
    return el + oddNums[i];
  });
}

let n = 0;
let k = 10;
let res = 0;
for (; n < k; n++) {
  res += n + k;
  k--;
}
console.log(res);
