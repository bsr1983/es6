const m=new Map();
const o={p:'Hello Map'};
console.log(o);
m.set(o,'content');
console.log(m.get(o));
console.log(m.has(o));
console.log(m.delete(o));
console.log(m.has(o));

const k1=['a'];
const k2=['a'];

const map=new Map();
map.set(k1,111);
map.set(k2,222);
console.log(k1==k2);
console.log(map.get(k1));
console.log(map.get(k2));

let m1=new Map();
m1.set(-0,123);
console.log(m1.get(+0));

m1.set(true,1);
m1.set('true',2);
console.log(m1.get(true));

m1.set(undefined,3);
m1.set(null,4);
console.log(m1.get(undefined));

m1.set(NaN,321);
console.log(m1.get(NaN));
console.log(m1.size);
console.log(m1.clear());
console.log(m1.size);

const m2=new Map([
    ['F','no'],
    ['T','yes']
]);

for(let key of m2.keys())
{
    console.log(key);
}

for(let value of m2.values())
{
    console.log(value);
}

for (let item of m2.entries())
{
    console.log(item[0],item[1]);
}

for (let [key,value] of map.entries())
{
    console.log(key,value);
}

console.log([...m2]);

function strMapToObj(strMap)
{
    let obj=Object.create(null);
    for(let [k,v] of strMap)
    {
        obj[k]=v;
    }
    return obj;
}

const strMap=new Map().set('yes',true).set('no',false);

console.log(strMapToObj(strMap));

function objToStrMap(obj)
{
    let strMap = new Map();
    for(let k of Object.keys(obj))
    {
        strMap.set(k,obj[k]);
    }
    return strMap;
}

console.log(objToStrMap(strMapToObj(strMap)));

function strMapToJson(strMap)
{
    return JSON.stringify(strMapToObj(strMap));
}

console.log(strMapToJson(strMap));

function mapToArrayJson(map)
{
    return JSON.stringify([...map]);
}

console.log(mapToArrayJson(strMap));

function jsonToStrMap(jsonStr) {
    return objToStrMap(JSON.parse(jsonStr));
}

console.log(jsonToStrMap('{"yes": true, "no": false}'));

function arrayJsonToMap(jsonStr) {
    return new Map(JSON.parse(jsonStr));
}

console.log(arrayJsonToMap('[[true,7],[{"foo":3},["abc"]]]'));


const wm1 = new WeakMap();
const key ={foo:1};
wm1.set(key,2);
console.log(wm1.get(key));

const k11 =[1,2,3];
const k12 =[4,5,6];
const wm2=new WeakMap([[k11, 'foo'], [k12, 'bar']]);
console.log(wm2.get(k11));