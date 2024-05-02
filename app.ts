let a: number = 5;
let b: number = 2;
let c: number =  ++a + a++ + --b + b-- + a + b++ + b;

console.log(c)

// 6 + 5 + 1 + 1 + 5 + 2 + 2