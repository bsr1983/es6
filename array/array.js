function log(str)
{
    console.log(str);
}
console.log(...[1,2,3]);

const a1 = [1,2];
const a2 =a1;

a2.push(3);

console.log(a1);
console.log(a2);

const a3 = [1,2,3];
const a4 = [...a3];
a4.push(4);
log(a3);
log(a4);

var arr1=['a','b'];
var arr2=['c','d'];
var arr3=['e','f','g'];

log([...arr1,...arr2,...arr3]);

const [f,...r]=[1,2,3,4,5];

log(f);
log(r);

const [f1,...r1]=[];
log(f1);
log(r1);

log([...'some string']);

function length(str) {
    return [...str].length;
}

log(length('x\uD83D\uDE80y'));

log('x\uD83D\uDE80y'.length);

let str='x\uD83D\uDE80y';
log(str.split('').reverse().join(''));
log([...str].reverse().join(''));

let map = new Map([
    [1,'one'],
    [2,'two'],
    [3,'three']
]);

let arr = [...map.keys()];

log(arr+' '+[...map.values()]);

let arrayLike ={'0':'a','1':'b','2':'c',length:3};

log(Array.from(arrayLike));

var mapdata=new Map([
    [1111,2],
    [1112,3]
]);
console.log(mapdata);