function log(s)
{
    console.log(s);
}

let x=0;
function foo(p=x+1)
{
    log(p);
}

foo();
x=3;
foo();

function foo1({x,y=5}) {
    log("x="+x+"   y="+y);
}

foo1({});
foo1({x:1});
foo1({x:1,y:2});
//foo1();

function fetch(url,{body='',method='GET',headers={}})
{
    console.log(method);
}
fetch('http://wwww.google.com',{});
fetch('http://wwww.google.com',{method:'POST'});

function throwIfMissing()
{
    throw new Error('缺少参数');fetch('http://wwww.google.com',{});
}

function foo2(k=throwIfMissing())
{
    return k;
}
//foo2();
log(foo2('some value'));

function mulitParam(...args)
{
    for(var a of args)
    {
        log(a);
    }
}

mulitParam(1,2,3,4,'some str');

var f =function(){};
log(f.name);

const bar=function baz(){};
log(bar.name);
log((new Function).name);
function foo3(){};
log(foo3.bind({}).name);
log((function(){}).bind({}).name);

var f11 = v =>v;
log(f11('sss'));

var f12 = ()=>5;
log(f12().name+" "+f12());

var sum =(num1,num2)=>num1+num2;
log(sum(2,3));

var sumall=(...n)=>{
    var s=0;
    for(var a of n)
    {
        s=s+a;
    }
    return s;
}
log(sumall(1,2,3,4,5,6));

function foo()
{
    setTimeout(()=>{
        console.log('id:',this.id);
    },100);
}

var id=2;
foo.call({id:3});

function Timer()
{
    this.s1=0;
    this.s2=0;
    setInterval(()=>{this.s1++;log(this.s1)},1000);
    setInterval(function()
    {
        this.s2++;
        log(this.s2);
    },1000);
}

// var timer=new Timer();
// setTimeout(()=>console.log("s1:",timer.s1),3100);
// setTimeout(()=>console.log("s2:",timer.s2),3100);

function foo21()
{
    return ()=>{
        return ()=>{
            return ()=>
            {
                console.log('id:',this.id);
            };
        };
    };
}

var f1=foo21.call({id:1});
var t1 = f1.call({id:2})()();
var t2 = f1().call({id:3})();
var t3 = f1()().call({id:4});


// function foo22() {
//     return () => {
//         return () => {
//             return () => {
//                 console.log('id:', this.id);
//             };
//         };
//     };
// }
//
// var f2 = foo22.call({id: 1});
//
// var t11 = f2.call({id: 2})()(); // id: 1
// var t21 = f2().call({id: 3})(); // id: 1
// var t31 = f2()().call({id: 4}); // id: 1

// function foo3() {
//     setTimeout(()=>{
//         console.log('args:',arguments);
//     },100);
// }
//
// foo3(1,3,5,7,9);

// console.log((function(){
//     return [
//         (()=>this.x).bind({x:'inner'})()
//     ];
// }).call({x:'outer'}));

// function factorial(n)
// {
//     if(n===1) {return 1};
//     return n*factorial(n-1);
// }
// var factorial5=factorial(5);
// console.log(factorial5);

function currying(fn, n) {
    return function (m) {
        return fn.call(this, m, n);
    };
}

function tailFactorial(n, total) {
    if (n === 1) return total;
    return tailFactorial(n - 1, n * total);
}

const factorial = currying(tailFactorial, 1);

var factorial5=factorial(5);
console.log(factorial(5)); // 120