let s = Symbol();
console.log(typeof s);

let s1 = Symbol('foo');
let s2 = Symbol('bar');

console.log(s1);
console.log(s2);

console.log(s1.toString());
console.log(s2.toString());

let s3= Symbol();
let s4=Symbol();
console.log(s3===s4);

let s5 = Symbol('foo');
let s6 = Symbol('foo');
console.log(s5===s6);

let sym=Symbol("Some String value");
String(sym);

console.log(sym.toString());

const obj={};
let a=Symbol('a');
let b = Symbol('b');
obj[a] = 'Hello';
obj[b] = 'World';
const objsSymbols=Object.getOwnPropertySymbols(obj);
console.log(objsSymbols);

let obj1={
    [Symbol('my_symbol_key')]:1,
    enum:2,
    nonEnum:3,
    str:'4'
};
console.log(Reflect.ownKeys(obj1));

let s7=Symbol.for('forvalue');
let s8=Symbol.for('forvalue');
console.log(s7===s8);

let s9=Symbol.for('key9');
console.log(Symbol.keyFor(s9));
let s10=Symbol('key10');
console.log(Symbol.keyFor(s10));

let arr1 = ['a','b'];
arr1=['c','d'].concat(arr1,'e');
console.log(arr1[Symbol.isConcatSpreadable]);
console.log(arr1);
let arr2 =[1,2];
arr2[Symbol.isConcatSpreadable]=false;
arr2=[3,4,5,6].concat(arr2,7,8,9);
console.log(arr2);

class MyMatcher{
    [Symbol.match](string){
        return 'hello world'.indexOf(string);
    }
}
console.log('e'.match(new MyMatcher()));

console.log(Array.prototype(Symbol.unscopable));