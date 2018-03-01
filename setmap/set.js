const s = new Set();
[1,2,3,4,5,6,1,2,3,4].forEach(x=>s.add(x));
console.log(s.size+" "+[...s]);

let set = new Set();
let a=NaN;
let b=NaN;
set.add(a);
set.add(b);
console.log(set.size+" "+[...set]);

set.add({});
console.log(set.size+" "+[...set]);
set.add({});
console.log(set.size+" "+[...set]);

let s2=new Set();
s2.add(1).add(2).add(3).add(4);
console.log(s2.size+" "+[...s2]);

console.log(s2.has(2));
console.log(s2.has(5));

console.log(s2.delete(2));
console.log(s2.has(2));

function dedupe(a) {
    return Array.from(new Set(a));
}

console.log(dedupe([2,3,4,1,4,2]));

let colors=new Set(['red','green','blue']);
for (let i of colors.keys())
{
    console.log(i);
}
for (let i of colors.values())
{
    console.log(i);
}
for (let i of colors.entries())
{
    console.log(i);
}

let s3=new Set([1,2,3,4,5,6,7,8]);
s3=new Set([...s3].map(x=>x*3));
console.log(...s3);
s4=new Set([...s3].filter(x=>(x%2)==0));
console.log(...s4);

const ws=new WeakSet();
const obj={};
const foo={};
ws.add(foo);
ws.add(obj);
console.log(ws.has({}));
console.log(ws.has(obj));
console.log(ws.has(foo));
ws.delete(foo);
console.log(ws.has(foo));
