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

