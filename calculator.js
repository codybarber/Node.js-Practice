// console.log(Number(process.argv[2]) + Number(process.argv[3]));

var sum = 0;
for (var i = 2; i < process.argv.length; i++) {
  sum = sum + Number(process.argv[i]);
}
console.log(sum);
