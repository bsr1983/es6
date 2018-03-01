function* f()
{
    console.log("hello Generator");
}

var generator=f();
console.log("something!");
setTimeout(function () {
    generator.next();
},1000);
console.log("manything!");

var someArray=[1, [[2, 3], 4], [5, 6]];

var flat = function* (a) {
    var length = a.length;
    for (var i = 0; i < length; i++) {
        var item = a[i];
        if (typeof item !== 'number') {
            yield* flat(item);
        } else {
            yield item;
        }
    }
};

for (var s of flat(someArray)) {
    console.log(s);
}

function* f1()
{
    for (var i=0;true;i++)
    {
        var reset = yield i;
        if(reset)
        {
            i=-1;
        }
    }
}

var g = f1();
console.log(g.next());
console.log(g.next());
console.log(g.next(true));

function* fibonacci()
{
    let [p,c]=[0,1];
    for(;;)
    {
        [p,c]=[c,p+c];
        yield c;
    }
}

for (let n of fibonacci())
{
    if(n>1000)
    {
        break;
    }
    console.log(n);
}

function* objProps(obj)
{
    let propKeys=Reflect.ownKeys(obj);
    for(let pk of propKeys)
    {
        yield [pk,obj[pk]];
    }
}


let jane = { first: 'Jane', last: 'Doe' };

for (let [key, value] of objProps(jane)) {
    console.log(`${key}: ${value}`);
}

function* objProps1() {
    let propKeys = Object.keys(this);

    for (let propKey of propKeys) {
        yield [propKey, this[propKey]];
    }
}

jane[Symbol.iterator] = objProps1;

for (let [key, value] of jane) {
    console.log(`${key}: ${value}`);
}

var gen=function* gen()
{
    try
    {
        yield console.log('1');
    }catch (e)
    {

    }
    yield console.log('2');
    yield console.log('3');
}
var g1=gen();
g1.next();
g1.throw();
g1.next();

var gen2=function* gen2()
{
    yield 1;
    yield 2;
    yield 3;
};

var g2=gen2();
console.log(g2.next());
console.log(g2.return('foo'));
console.log(g2.next());


function* numbers () {
    yield 1;
    try {
        yield 2;
        yield 3;
    } finally {
        yield 4;
        yield 5;
    }
    yield 6;
}
var g3 = numbers();
console.log(g3.next());
console.log(g3.next());
console.log(g3.return(7));
console.log(g3.next());
console.log(g3.next());

function* inner() {
    yield 'hello!';
}

function* outer1() {
    yield 'open';
    yield inner();
    yield 'close';
}

var g4 = outer1()
console.log(g4.next().value); // "open"
console.log(g4.next().value); // 返回一个遍历器对象
console.log(g4.next().value); // "close"

function* outer2() {
    yield 'open'
    yield* inner()
    yield 'close'
}

var g5 = outer2()
console.log(g5.next().value); // "open"
console.log(g5.next().value); // "hello!"
console.log(g5.next().value); // "close"

let delegatedIterator = (function* () {
    yield 'Hello!';
    yield 'Bye!';
}());

let delegatingIterator = (function* () {
    yield 'Greetings!';
    yield* delegatedIterator;
    yield 'Ok, bye.';
}());

for(let value of delegatingIterator) {
    console.log(value);
}

var fetch = require('node-fetch');


function* generatorfunc()
{
    var url='https://api.github.com/users/github';
    var result = yield fetch(url);
    console.log("generatorfunc "+result.bio);
}

var g11=generatorfunc();
var result11=g11.next();
result11.value.then(function (data) {
    return data.json();
}).then(function (data) {
    g11.next(data);
});

var fs = require('fs');
var thunkify = require('thunkify');
var readFileThunk = thunkify(fs.readFile);

var gen = function* (){
    var r1 = yield readFileThunk('/mac/workspaceForLearn/es6/promise/promise.js');
    console.log(r1.toString());
    var r2 = yield readFileThunk('/mac/workspaceForLearn/es6/promise/promise.html');
    console.log(r2.toString());
};

var g12 = gen();

var r12 = g12.next();
r12.value(function (err, data) {
    if (err) throw err;
    var r22 = g12.next(data);
    r22.value(function (err, data) {
        if (err) throw err;
        g12.next(data);
    });
});