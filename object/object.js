let birthdate ='2018/01/24'
const Person={
    name:'张三',
    birthdate,
    hello(){console.log('hello! my name is',this.name,' my birthdate is ',this.birthdate)}
};
Person.hello();

console.log(Person.hello.name);

const obj= {
  get foo(){},
  set foo(x){}
};

//console.log(obj.foo.name);
const desc = Object.getOwnPropertyDescriptor(obj,'foo');
console.log(desc.get.name);
console.log(desc.set.name);

console.log(Object.is('foo','foo'));
console.log(Object.is({},{}));

const target={a:1};
const source1={b:2};
const source2={b:44,c:3};
Object.assign(target,source1,source2);
console.log(target);

const v1='abc';
const v2=true;
const v3=10;
const obj11=Object.assign({},v1,v2,v3);
console.log(obj11);

let obj22={foo:123};
console.log(Object.getOwnPropertyDescriptor(obj22,'foo'));

console.log(Object.getOwnPropertyDescriptor(Object.prototype,'toString').enumerable);
console.log(Object.getOwnPropertyDescriptor([],'length').enumerable);

console.log(Reflect.ownKeys({[Symbol()]:0,b:0,10:0,2:0,a:0}));

const obj12={foo:123,get bar(){ return 'abc'}};
console.log(Object.getOwnPropertyDescriptors(obj12));

let proto = {};
let obj13 = {x:10};
Object.setPrototypeOf(obj13,proto);
proto.y=20;
proto.z=40;
console.log(obj13.x,obj13.y,obj13.z);


const proto1 = {foo:'hello'};
const obj14 = {
    find(){
        return super.foo;
    }
};
Object.setPrototypeOf(obj14,proto1);
console.log(obj14.find());

const proto3 = {
    x:'hello',
    foo(){
        console.log("protos x="+this.x);
    }
};

const obj15 = {
    x:'world',
    foo(){
        super.foo();
    }
};

Object.setPrototypeOf(obj15,proto3);
obj15.foo();

const obj16 = {foo:'bar',baz:42};
const map = new Map(Object.entries(obj16));
console.log(map);

let {x,y,...z}={x:1,y:2,a:3,b:4,c:5};
console.log(x+" "+y+" "+JSON.stringify(z));
