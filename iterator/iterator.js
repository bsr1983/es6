class RangeIterator{
    constructor(start,stop)
    {
        this.value=start;
        this.stop=stop;
    }
    [Symbol.iterator](){return this;};
    next()
    {
        var value = this.value;
        if(value<this.stop)
        {
            this.value++;
            return {done:false,value:value};
        }
        else
        {
            return {done:true,value:undefined};
        }
    }
}

function range(start,stop)
{
    return new RangeIterator(start,stop);
}

for(var value of range(0,10))
{
    console.log(value);
}


let iterable ={
    0:'a',
    1:'b',
    2:'c',
    length:3,
    [Symbol.iterator]:Array.prototype[Symbol.iterator]
};

for(let item of iterable)
{
    console.log(item);
}

var someStr="helloWorld";

console.log(typeof someStr[Symbol.iterator]);

var strIterator=someStr[Symbol.iterator]();

console.log(strIterator.next());
console.log(strIterator.next());
console.log(strIterator.next());
console.log(strIterator.next());
console.log(strIterator.next());
console.log(strIterator.next());
console.log(strIterator.next());
console.log(strIterator.next());
console.log(strIterator.next());
console.log(strIterator.next());
console.log(strIterator.next());

for (let s of someStr)
{
    console.log(s);
}

let myIterable={
    [Symbol.iterator]:function* () {
        yield 1;
        yield 2;
        yield 3;
    }
};

console.log([...myIterable]);

let obj ={
  * [Symbol.iterator](){
      yield 'hello';
      yield 'iterator';
  }
};

for (let o of obj)
{
    console.log(o);
}

let arrayLike = {length:2,0:'1',1:'2'};

for(let a of Array.from(arrayLike))
{
    console.log(a);
}