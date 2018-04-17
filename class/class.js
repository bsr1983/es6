//定义类
class Point {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }

}
var p1 = new Point(2,3);
var p2 = new Point(3,2);

p1.__proto__.printName = function () { return 'Oops' };

console.log(p1.printName()); // "Oops"
console.log(p2.printName()); // "Oops"

var p3 = new Point(4,2);
console.log(p3.printName()); // "Oops"

let person = new class {
    constructor(name) {
        this.name = name;
    }

    sayName() {
        console.log(this.name);
    }
}('张三');

person.sayName(); // "张三"

class CustomHTMLElement {
    constructor(element) {
        this.element = element;
    }

    get html() {
        return this.element.innerHTML;
    }

    set html(value) {
        this.element.innerHTML = value;
    }
}

var descriptor = Object.getOwnPropertyDescriptor(
    CustomHTMLElement.prototype, "html"
);

console.log("get" in descriptor);  // true
console.log("set" in descriptor);  // true

class Foo {
    constructor(...args) {
        this.args = args;
    }
    * [Symbol.iterator]() {
        for (let arg of this.args) {
            yield arg;
        }
    }
}

for (let x of new Foo('hello', 'world','class')) {
    console.log(x);
}


class Foo {
    static bar () {
        this.baz();
    }
    static baz () {
        console.log('hello');
    }
    baz () {
        console.log('world');
    }
    static classMethod() {
        return 'hello';
    }
}

Foo.bar() // hello

class Bar extends Foo {
    static classMethod() {
        return super.classMethod() + ', too';
    }
}

console.log(Bar.classMethod()); // 'hello'

class Point {
    constructor(x,y)
    {
        this.x=x;
        this.y=y;
    }
    toString()
    {
        return this.x+" "+this.y;
    }
}

class ColorPoint extends Point {
    constructor(x, y, color) {
        super(x, y); // 调用父类的constructor(x, y)
        this.color = color;
    }

    toString() {
        return this.color + ' ' + super.toString(); // 调用父类的toString()
    }
}

let cp = new ColorPoint(1,2,3);

console.log(cp);

class A {
    constructor() {
        console.log(new.target.name);
    }
}
class B extends A {
    constructor() {
        super();
    }
}
new A(); // A
new B(); // B

class A1 {
    constructor() {
        this.p = 2;
    }
}
A1.prototype.x=21;
class B1 extends A1 {
    constructor()
    {
        super();
        console.log(super.x);
    }
    get m() {
        return super.p;
    }
}

let b = new B1();
console.log(b.m); // undefined

class Parent {
    static myMethod(msg) {
        console.log('static', msg);
    }

    myMethod(msg) {
        console.log('instance', msg);
    }
}

class Child extends Parent {
    static myMethod(msg) {
        super.myMethod(msg);
    }

    myMethod(msg) {
        super.myMethod(msg);
    }
}

Child.myMethod(1); // static 1

var child = new Child();
child.myMethod(2); // instance 2

class MyArray extends Array {
    constructor(...args) {
        super(...args);
    }
}

var arr = new MyArray();
arr[0] = 12;
console.log(arr.length); // 1

arr.length = 0;
console.log(arr[0]); // undefined


class VersionedArray extends Array{
    constructor(){
        super();
        this.history = [];
    }
    commit(){
        this.history.push(this.slice());
    }
    revert(){
        this.splice(0,this.length,...this.history[this.history.length - 1]);
    }
}

var x = new VersionedArray();
x.push(1);
x.push(2);

console.log(x);
console.log(x.history);

x.commit();
console.log(x.history);

x.push(3);

console.log(x);

console.log(x.history);

console.log(x.revert());

console.log(x);


class ExtendableError extends Error{
    constructor(message) {
        super();
        this.message = message;
        this.stack = (new Error()).stack;
        this.name = this.constructor.name;
    }
}

class MyError extends ExtendableError{
    constructor(m)
    {
        super(m);
    }
}

var myerror = new MyError("111");
console.log(myerror.message);
console.log(myerror instanceof Error);
console.log(myerror.name);
console.log(myerror.stack);