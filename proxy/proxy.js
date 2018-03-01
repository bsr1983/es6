var obj = new Proxy({},{
    get:function (target,key,receiver){
        console.log(`getting ${key}!`);
        return Reflect.get(target,key,receiver);
    },
    set:function(target,key,value,receiver)
    {
        console.log(`setting ${key}!`);
        return Reflect.set(target,key,value,receiver);
    }
});

obj.count=1;
++obj.count;

let validator={
    set:function (obj,prop,value) {
        if(prop === 'age')
        {
            if(!Number.isInteger(value))
            {
                throw new TypeError('The age is not an integer');
            }
            if (value>200)
            {
                throw new RangeError('The age seems invalid');
            }
        }
        obj[prop] =value;
    }
};

let person = new Proxy({},validator);

person.age=100;

console.log(person.age);

//person.age='young';
//person.age=300;

const handler = {
    get (target, key) {
        invariant(key, 'get');
        return target[key];
    },
    set (target, key, value) {
        invariant(key, 'set');
        target[key] = value;
        return true;
    }
};
function invariant (key, action) {
    if (key[0] === '_') {
        throw new Error(`Invalid attempt to ${action} private "${key}" property`);
    }
}

const target = {};
const proxy = new Proxy(target, handler);
//proxy._prop
// Error: Invalid attempt to get private "_prop" property
//proxy._prop = 'c'

var applyTarget = function () {
    return 'I am the target';
};
var applyHandler={
    apply:function () {
        return 'I am the proxy';
    }
};
var p=new Proxy(applyTarget,applyHandler);
console.log(p());

var twice={
    apply(t,c,a)
    {
        return Reflect.apply(...arguments)*2;
    }
};
function sum(a,b)
{
    return a+b;
}

var proxysum = new Proxy(sum,twice);
console.log(proxysum(1,2));
console.log(proxysum.call(null,2,4));
console.log(proxysum.apply(null,[5,6]));
console.log(Reflect.apply(proxysum, null, [9, 10]));


var hasHandler={
    has(target,key)
    {
        if(key[0] === '_'){
            return false;
        }
        return key in target;
    }
};

var targetForHas={_prop:'_prop',prop:'prop'};
var proxyForHas=new Proxy(targetForHas,hasHandler);
console.log('_prop' in proxyForHas);
console.log('prop' in proxyForHas);

var pForCon=new Proxy(function(){},{
    construct:function (target,args) {
        console.log('called:'+args.join(','));
        return {value:args[0]*10};
    }
})
console.log((new pForCon(1)).value)