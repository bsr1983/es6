{
    let a=10;
    var b=1;
    console.log("in let block a="+a+" b="+b);
}
//console.log("out let block a="+a+" b="+b);//ReferenceError: a is not defined

for(let i=0;i<10;i++)
{
    console.log("in for i="+i);
}
//console.log("out of for"+i);

var a=[];
for(var i=0;i<10;i++)
{
    a[i] =function(){
        console.log(i);
    };
}
a[6]();

var b=[];
for(let i=0;i<10;i++)
{
    b[i] = function () {
        console.log(i);
    }
}
b[6]();

for(let i=0;i<3;i++)
{
    let i='abc';
    console.log(i);
}

function log(c)
{
    console.log(c);
}

log(foo);
var foo=2;

//log(letfoo);
let letfoo=3;

if(true)
{
    tmp='abc';
    log(tmp);

    //let tmp;
    log(tmp);

    tmp=123;
    log(tmp);
}

function func()
{
    let a=0;
    //var a=10;//SyntaxError: Identifier 'a' has already been declared
}

function func1()
{
    var a=10;
    //let a=20;//SyntaxError: Identifier 'a' has already been declared
}

function func2(arg)
{
    var arg=1;
}

function func3(arg)
{
    //let arg=1;//SyntaxError: Identifier 'arg' has already been declared
}

function func4(arg)
{
    {
        let arg=5;
    }
}

var tmp=new Date();

function func5()
{
    log(tmp);
    if(false)
    {
        var tmp='this is something';
    }
}

func5();//undefined

var s='say hi';
for(var i=0;i<s.length;i++)
{
    log(s[i]);
}

log(i);

function func6()
{
    let n =5 ;
    if(true)
    {
        let n=10;
    }
    log(n);
}

func6();

(function () {
    var tmp='this is IIFE';
   log(tmp);
}());

{
    let tmp='this is let';
    log(tmp)
}

/*let x= do {//SyntaxError: Unexpected token do
    let t=f();
    t*t+1;
};
log(x);*/

//const foo;//SyntaxError: Missing initializer in const declaration
if(true)
{
    const PI=3.1415926;
}
//log(PI);//ReferenceError: PI is not defined

var a=1;
log(window.a);//in brower env is 1,in node js is undefine

let somevalue=2;
log(window.somevalue);