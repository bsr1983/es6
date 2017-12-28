function log(str) {
    console.log(str);
}
let a = 1;
let b = 2;
let c = 3;
log("a="+a+" b="+b+" c="+c);
let [d,e,f] = [4,5,6];
log("d="+d+" e="+e+" f="+f);
let [foo,[[bar],baz]] = [1,[[2],3]];
log("foo="+foo+" bar="+bar+" baz="+baz);
let[,,third]=["foo","bar","third"];
log("third="+third);
let[h,,g]=[7,8,9];
log("h="+h+" g="+g);
let [head,...tail] = [1,2,3,"tail"];
log("head="+head+" tail="+tail);
let [i,j,...k] = ['a'];
log("i="+i+" j="+j+" k="+k);
let [l]=[];
let [m,n] = [1];
log("m="+m+" n="+n);
let [o,p]=[1,2,3];
log("o="+o+" p="+p);
let [q,[r],s] =[1,[2,3],4];
log("q="+q+" r="+r+" s="+s);
//TypeError: 1 is not iterable
/*let [u] = 1;
let [v] = false;
let [w] = NaN;
let [x] = undefined;
let [y] = null;
let [z] = {};*/
let [x,y,z] = new Set(['a','b','c']);
log("x="+x+" y="+y+" z="+z);
function* fibs(){
    let a = 0;
    let b = 1;
    while (true) {
        yield a;
        [a,b]=[b,a+b];
    }
}
let [first,second,third1,fourth,fifth,sixth]=fibs();
log(sixth);

let [foo1=true]=[];
log(foo1);

let {bar2,foo2}={foo2:"foo2",bar2:"bar"};
log(foo2);

let{foo2:obc}={foo2:"foo2",bar3:"bar3"};

log(obc);

let obj = {p1:['Hello',{y1:'world'}]};
let {p1,p1:[x1,{y1}]}=obj;
log(x1);
log(y1);
log(p1);

let x2=1;
let y2=2;
[x2,y2]=[y2,x2];

log("x2="+x2+" y2="+y2);

function returnMultiValue()
{
    return [1,2,3];
}
let[x3,y3,z3]=returnMultiValue();
log("x3="+x3+" y3="+y3+" z3="+z3);

function returnObjectValue()
{
    return {x4:1,y4:2}
}

let {x4,y4}=returnObjectValue();
log("x4="+x4+" y4="+y4);

function setValueByEp([x5,y5,z5]){
    log("x5="+x5+" y5="+y5+" z5="+z5);
}
setValueByEp([1,2,3]);

function setValueByEp2({x5,y5,z5}){
    log("x5="+x5+" y5="+y5+" z5="+z5);
}
setValueByEp2({x5:1,z5:3,y5:2});

let jsonData ={
    x6:1,
    y6:"some str value",
    z6:[111,222]
};
let{x6,y6,z6} = jsonData;
log("x6="+x6+" y6="+y6+" z6="+z6);

const map=new Map();
map.set('x7','some str value');
map.set('y7',111);
map.set('z7',[11,222]);
for(let [key,value] of map)
{
    log("key="+key+" value="+value);
}
for(let [key] of map)
{
    log("key="+key);
}
for(let [,value] of map)
{
    log("value="+value);
}