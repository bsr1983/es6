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

    let tmp;
    log(tmp);

    tmp=123;
    log(tmp);
}