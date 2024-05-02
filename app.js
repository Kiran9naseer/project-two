"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let a = 5;
let b = 2;
let c = ++a + a++ + --b + b-- + a + b++ + b;
console.log(c);
// 6 + 5 + 1 + 1 + 5 + 2 + 2
